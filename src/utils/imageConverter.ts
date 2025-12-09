// Browser-based image conversion utility
// This downloads images and converts them to WebP format

interface ImageConfig {
  url: string;
  filename: string;
}

const images: ImageConfig[] = [
  {
    url: 'https://cdn.poehali.dev/files/Концепция%20и%20эскизы.jpg',
    filename: 'concept-sketches.webp'
  },
  {
    url: 'https://cdn.poehali.dev/files/Визуализация.jpg',
    filename: 'visualization.webp'
  },
  {
    url: 'https://cdn.poehali.dev/files/image.png',
    filename: 'documentation.webp'
  }
];

export async function convertImageToWebP(
  url: string,
  quality: number = 0.8
): Promise<Blob> {
  // Fetch the image
  const response = await fetch(url);
  const blob = await response.blob();
  
  // Create an image element
  const img = new Image();
  const imageUrl = URL.createObjectURL(blob);
  
  return new Promise((resolve, reject) => {
    img.onload = () => {
      // Create canvas
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      // Draw image on canvas
      ctx.drawImage(img, 0, 0);
      
      // Convert to WebP
      canvas.toBlob(
        (webpBlob) => {
          URL.revokeObjectURL(imageUrl);
          if (webpBlob) {
            resolve(webpBlob);
          } else {
            reject(new Error('Failed to convert to WebP'));
          }
        },
        'image/webp',
        quality
      );
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      reject(new Error('Failed to load image'));
    };
    
    img.src = imageUrl;
  });
}

export async function downloadWebPImage(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function convertAllImages(
  onProgress?: (current: number, total: number, filename: string) => void
) {
  const results: { filename: string; blob: Blob; success: boolean; error?: string }[] = [];
  
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    onProgress?.(i + 1, images.length, image.filename);
    
    try {
      const webpBlob = await convertImageToWebP(image.url, 0.8);
      results.push({
        filename: image.filename,
        blob: webpBlob,
        success: true
      });
    } catch (error) {
      results.push({
        filename: image.filename,
        blob: new Blob(),
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
  
  return results;
}

export { images };
