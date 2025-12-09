import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, Download, Loader2 } from 'lucide-react';
import { convertAllImages, downloadWebPImage, images } from '@/utils/imageConverter';

interface ConversionResult {
  filename: string;
  blob: Blob;
  success: boolean;
  error?: string;
}

export default function ImageConverter() {
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState('');
  const [results, setResults] = useState<ConversionResult[]>([]);

  const handleConvert = async () => {
    setConverting(true);
    setResults([]);
    
    const conversionResults = await convertAllImages((current, total, filename) => {
      setProgress((current / total) * 100);
      setCurrentFile(filename);
    });
    
    setResults(conversionResults);
    setConverting(false);
    setProgress(100);
  };

  const handleDownloadAll = () => {
    results.forEach((result) => {
      if (result.success) {
        downloadWebPImage(result.blob, result.filename);
      }
    });
  };

  const handleDownloadSingle = (result: ConversionResult) => {
    if (result.success) {
      downloadWebPImage(result.blob, result.filename);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Image to WebP Converter</CardTitle>
          <CardDescription>
            Convert 3 images to WebP format with 80% quality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Images to convert:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {images.map((img, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                    {index + 1}
                  </span>
                  <span className="font-mono">{img.filename}</span>
                </li>
              ))}
            </ul>
          </div>

          {converting && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Converting: {currentFile}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} />
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Conversion Results:</h3>
                <Button
                  size="sm"
                  onClick={handleDownloadAll}
                  disabled={!results.some(r => r.success)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </Button>
              </div>
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="flex items-center gap-3">
                      {result.success ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <div>
                        <p className="text-sm font-medium font-mono">{result.filename}</p>
                        {result.success && (
                          <p className="text-xs text-muted-foreground">
                            {(result.blob.size / 1024).toFixed(2)} KB
                          </p>
                        )}
                        {result.error && (
                          <p className="text-xs text-red-500">{result.error}</p>
                        )}
                      </div>
                    </div>
                    {result.success && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownloadSingle(result)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button
              onClick={handleConvert}
              disabled={converting}
              className="flex-1"
            >
              {converting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                'Start Conversion'
              )}
            </Button>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>Note: After downloading, manually place the files in the public/images/ directory:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>concept-sketches.webp</li>
              <li>visualization.webp</li>
              <li>documentation.webp</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
