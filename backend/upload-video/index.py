import json
import os
import boto3
import urllib.request


def handler(event, context):
    '''Скачивание видео по публичной ссылке Яндекс.Диска и загрузка в S3'''
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if event.get('httpMethod') != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    raw_body = event.get('body') or '{}'
    body = json.loads(raw_body)
    public_url = body.get('public_url')
    filename = body.get('filename', 'hero-video.mp4')

    if not public_url:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'public_url required'})
        }

    api_url = f"https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key={public_url}"
    req = urllib.request.Request(api_url)
    with urllib.request.urlopen(req) as resp:
        download_info = json.loads(resp.read().decode())

    download_url = download_info['href']

    req2 = urllib.request.Request(download_url)
    with urllib.request.urlopen(req2) as resp2:
        video_data = resp2.read()

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    s3_key = f'video/{filename}'
    s3.put_object(
        Bucket='files',
        Key=s3_key,
        Body=video_data,
        ContentType='video/mp4'
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{s3_key}"

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'url': cdn_url, 'size': len(video_data)})
    }