import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

interface ConversionResult {
  original: string;
  webp: string;
  filename: string;
}

export default function ImageConverter() {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [results, setResults] = useState<ConversionResult[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      setResults([]);
    }
  };

  const convertToWebP = async (file: File): Promise<ConversionResult> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Failed to get canvas context'));
            return;
          }
          ctx.drawImage(img, 0, 0);
          
          canvas.toBlob((blob) => {
            if (!blob) {
              reject(new Error('Failed to convert image'));
              return;
            }
            
            const originalUrl = URL.createObjectURL(file);
            const webpUrl = URL.createObjectURL(blob);
            const baseFilename = file.name.replace(/\.[^/.]+$/, '');
            
            resolve({
              original: originalUrl,
              webp: webpUrl,
              filename: baseFilename
            });
          }, 'image/webp', 0.85);
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      toast({
        title: 'Ошибка',
        description: 'Выберите изображения для конвертации',
        variant: 'destructive'
      });
      return;
    }

    setConverting(true);
    const conversionResults: ConversionResult[] = [];

    for (const file of files) {
      try {
        const result = await convertToWebP(file);
        conversionResults.push(result);
      } catch (error) {
        console.error(`Failed to convert ${file.name}:`, error);
        toast({
          title: 'Ошибка конвертации',
          description: `Не удалось конвертировать ${file.name}`,
          variant: 'destructive'
        });
      }
    }

    setResults(conversionResults);
    setConverting(false);
    
    if (conversionResults.length > 0) {
      toast({
        title: 'Готово!',
        description: `Конвертировано изображений: ${conversionResults.length}`
      });
    }
  };

  const downloadImage = async (url: string, filename: string, extension: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Скопировано!',
      description: 'Код скопирован в буфер обмена'
    });
  };

  const generatePictureTag = (result: ConversionResult) => {
    return `<picture>
  <source srcSet="${result.webp}" type="image/webp" />
  <img 
    src="${result.original}" 
    alt="${result.filename}"
    className="w-full h-64 md:h-full object-cover"
    loading="lazy"
    width="400"
    height="300"
  />
</picture>`;
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Конвертация изображений в WebP</CardTitle>
          <CardDescription>
            Загрузите изображения и конвертируйте их в оптимизированный формат WebP для сайта
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="image-files">Выберите изображения</Label>
            <Input
              id="image-files"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              disabled={converting}
            />
            {files.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Выбрано файлов: {files.length}
              </p>
            )}
          </div>

          <Button
            onClick={handleConvert}
            disabled={converting || files.length === 0}
            className="w-full"
          >
            {converting ? (
              <>
                <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
                Конвертация...
              </>
            ) : (
              <>
                <Icon name="ImageIcon" className="mr-2" size={16} />
                Конвертировать в WebP
              </>
            )}
          </Button>

          {results.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Результаты конвертации</h3>
              
              {results.map((result, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{result.filename}</h4>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => downloadImage(result.webp, result.filename, 'webp')}
                      >
                        <Icon name="Download" size={16} className="mr-1" />
                        WebP
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Оригинал</p>
                      <img src={result.original} alt="Original" className="w-full rounded border" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">WebP</p>
                      <img src={result.webp} alt="WebP" className="w-full rounded border" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Код для вставки:</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(generatePictureTag(result))}
                      >
                        <Icon name="Copy" size={16} className="mr-1" />
                        Копировать
                      </Button>
                    </div>
                    <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                      <code>{generatePictureTag(result)}</code>
                    </pre>
                  </div>
                </div>
              ))}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-2">
                  <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-medium mb-1">Следующие шаги:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Скачайте WebP изображения</li>
                      <li>Загрузите их на CDN (bucket.poehali.dev)</li>
                      <li>Используйте сгенерированный код с правильными URL</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
