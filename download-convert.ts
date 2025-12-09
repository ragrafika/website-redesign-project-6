import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const images = [
  {
    url: 'https://cdn.poehali.dev/files/Концепция%20и%20эскизы.jpg',
    output: 'public/images/concept-sketches.webp'
  },
  {
    url: 'https://cdn.poehali.dev/files/Визуализация.jpg',
    output: 'public/images/visualization.webp'
  },
  {
    url: 'https://cdn.poehali.dev/files/image.png',
    output: 'public/images/documentation.webp'
  }
];

async function downloadAndConvert(url: string, outputPath: string) {
  try {
    console.log(`Downloading: ${url}`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Ensure output directory exists
    const outputDir = dirname(outputPath);
    mkdirSync(outputDir, { recursive: true });
    
    console.log(`Converting to WebP: ${outputPath}`);
    await sharp(buffer)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`✓ Successfully created: ${outputPath}`);
    return { success: true, path: outputPath };
  } catch (error: any) {
    console.error(`✗ Failed to process ${url}:`, error.message);
    return { success: false, path: outputPath, error: error.message };
  }
}

async function main() {
  console.log('Starting image conversion...\n');
  
  const results = [];
  for (const image of images) {
    const result = await downloadAndConvert(image.url, image.output);
    results.push(result);
  }
  
  console.log('\n=== Summary ===');
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`\nSuccessfully converted: ${successful.length}/${results.length}`);
  if (successful.length > 0) {
    console.log('Created files:');
    successful.forEach(r => console.log(`  - ${r.path}`));
  }
  
  if (failed.length > 0) {
    console.log('\nFailed conversions:');
    failed.forEach(r => console.log(`  - ${r.path}: ${r.error}`));
    process.exit(1);
  }
}

main();
