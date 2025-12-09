# Image Conversion Instructions

## Overview
This document provides instructions for converting 3 images from JPG/PNG to WebP format.

## Files Created
- `convert-images.mjs` - Main conversion script
- `download-convert.ts` - TypeScript alternative
- All required dependencies (sharp) are installed

## Images to Convert
1. **Концепция и эскизы.jpg** → `public/images/concept-sketches.webp`
   - Source: https://cdn.poehali.dev/files/Концепция%20и%20эскизы.jpg
   
2. **Визуализация.jpg** → `public/images/visualization.webp`
   - Source: https://cdn.poehali.dev/files/Визуализация.jpg
   
3. **image.png** → `public/images/documentation.webp`
   - Source: https://cdn.poehali.dev/files/image.png

## How to Run

### Option 1: Using Node.js (Recommended)
```bash
node convert-images.mjs
```

### Option 2: Using Bun
```bash
bun run convert-images.mjs
```

### Option 3: Using TypeScript with tsx
```bash
npx tsx download-convert.ts
```

## Expected Output
After running the script, you should see:
- `public/images/` directory created
- 3 WebP files created:
  - `public/images/concept-sketches.webp`
  - `public/images/visualization.webp`
  - `public/images/documentation.webp`

## Verification
Check that the files were created:
```bash
ls -lh public/images/
```

## Conversion Settings
- Format: WebP
- Quality: 80
- Compression: Optimized for web
