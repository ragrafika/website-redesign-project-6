import json
import smtplib
import os
import base64
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send email from contact form or calculator
    Args: event - dict with httpMethod, body containing form data
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Request-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'}),
            'isBase64Encoded': False
        }
    
    email_from = 'ragrafika.info@mail.ru'
    email_to = 'ragrafika.info@mail.ru'
    email_password = os.environ.get('EMAIL_PASSWORD', '')
    
    if not email_password:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'EMAIL_PASSWORD not configured'}),
            'isBase64Encoded': False
        }
    
    calculator_type = body_data.get('calculatorType')
    image_data = body_data.get('imageData')
    
    msg = MIMEMultipart('related')
    msg_alternative = MIMEMultipart('alternative')
    msg.attach(msg_alternative)
    
    if calculator_type:
        email_client = body_data.get('email', 'не указан')
        details = body_data.get('details', {})
        price = body_data.get('price', 0)
        
        msg['Subject'] = f'Новая заявка: {calculator_type}'
        
        html_details = '<br>'.join([f'<strong>{k}:</strong> {v}' for k, v in details.items()])
        
        image_html = ''
        if image_data:
            image_html = '<h3 style="color: #2563eb; margin-top: 20px;">Прикрепленное изображение:</h3><img src="cid:uploaded_image" style="max-width: 600px; border: 1px solid #ddd; border-radius: 5px; margin: 10px 0;">'
        
        html_content = f'''
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2563eb;">Новая заявка с калькулятора</h2>
            <p><strong>Тип калькулятора:</strong> {calculator_type}</p>
            <p><strong>Имя клиента:</strong> {name}</p>
            <p><strong>Телефон:</strong> {phone}</p>
            <p><strong>Email:</strong> {email_client}</p>
            <p><strong>Рассчитанная стоимость:</strong> {price:,} ₽</p>
            <h3 style="color: #2563eb; margin-top: 20px;">Детали расчёта:</h3>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 5px;">
              {html_details}
            </div>
            {image_html}
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">Заявка отправлена автоматически с сайта ragrafika.ru</p>
          </body>
        </html>
        '''
    else:
        message = body_data.get('message', '')
        email_client = body_data.get('email', '')
        industry = body_data.get('industry', '')
        
        subject_suffix = f' ({industry})' if industry else ''
        msg['Subject'] = f'Новая заявка от {name}{subject_suffix}'
        
        email_row = f'<p><strong>Email:</strong> {email_client}</p>' if email_client else ''
        industry_row = f'<p><strong>Сфера деятельности:</strong> {industry}</p>' if industry else ''
        
        html_content = f'''
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2563eb;">Новая заявка с сайта</h2>
            <p><strong>Имя:</strong> {name}</p>
            <p><strong>Телефон:</strong> {phone}</p>
            {email_row}
            {industry_row}
            <p><strong>Сообщение:</strong></p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
              {message if message else 'Не указано'}
            </div>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">Заявка отправлена автоматически с сайта ragrafika.ru</p>
          </body>
        </html>
        '''
    
    msg['From'] = email_from
    msg['To'] = email_to
    
    part = MIMEText(html_content, 'html', 'utf-8')
    msg_alternative.attach(part)
    
    if image_data and image_data.startswith('data:image/'):
        try:
            header, encoded = image_data.split(',', 1)
            image_binary = base64.b64decode(encoded)
            
            mime_type = header.split(';')[0].split(':')[1]
            image_subtype = mime_type.split('/')[1]
            
            image_part = MIMEImage(image_binary, _subtype=image_subtype)
            image_part.add_header('Content-ID', '<uploaded_image>')
            image_part.add_header('Content-Disposition', 'inline', filename='stand_image.jpg')
            msg.attach(image_part)
        except Exception:
            pass
    
    smtp_server = 'smtp.mail.ru'
    smtp_port = 587
    
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(email_from, email_password)
        server.send_message(msg)
        server.quit()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'message': 'Email sent successfully'})
        }
    except smtplib.SMTPAuthenticationError as e:
        print(f'SMTP Auth Error: {str(e)}')
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP authentication failed - check EMAIL_PASSWORD'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        print(f'General Error: {str(e)}')
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Failed to send email: {str(e)}'}),
            'isBase64Encoded': False
        }