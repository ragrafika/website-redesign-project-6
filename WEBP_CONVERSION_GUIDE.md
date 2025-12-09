# WebP Image Conversion Guide

## Overview
This guide provides multiple methods to convert 3 images to WebP format for the project.

## Images to Convert

| Source URL | Output Path | Description |
|------------|-------------|-------------|
| [Концепция и эскизы.jpg](https://cdn.poehali.dev/files/Концепция%20и%20эскизы.jpg) | `public/images/concept-sketches.webp` | Concept and sketches |
| [Визуализация.jpg](https://cdn.poehali.dev/files/Визуализация.jpg) | `public/images/visualization.webp` | Visualization |
| [image.png](https://cdn.poehali.dev/files/image.png) | `public/images/documentation.webp` | Storefront design |

## Method 1: Browser-Based Conversion (Recommended - IN APP)

A React component has been added to the project that allows in-browser conversion.

### Steps:
1. Start the development server: `npm run dev` or `bun dev`
2. Navigate to: `http://localhost:5173/convert-images`
3. Click "Start Conversion" button
4. Download all converted images
5. Manually place them in `public/images/` directory

### Advantages:
- No command line needed
- Visual progress tracking
- Works entirely in your browser
- No external dependencies

## Method 2: Node.js Script (Automated)

A Node.js script (`convert-images.mjs`) is ready to automate the process.

### Requirements:
- Node.js installed
- Sharp library (already installed)

### Steps:
```bash
# From project root
node convert-images.mjs
```

The script will:
1. Create `public/images/` directory
2. Download all 3 images from CDN
3. Convert to WebP at 80% quality
4. Save with proper filenames

### Expected Output:
```
Starting image conversion...

Downloading: https://cdn.poehali.dev/files/Концепция%20и%20эскизы.jpg
Converting to WebP: public/images/concept-sketches.webp
✓ Successfully created: public/images/concept-sketches.webp

Downloading: https://cdn.poehali.dev/files/Визуализация.jpg
Converting to WebP: public/images/visualization.webp
✓ Successfully created: public/images/visualization.webp

Downloading: https://cdn.poehali.dev/files/image.png
Converting to WebP: public/images/documentation.webp
✓ Successfully created: public/images/documentation.webp

=== Summary ===

Successfully converted: 3/3
Created files:
  - public/images/concept-sketches.webp
  - public/images/visualization.webp
  - public/images/documentation.webp
```

## Method 3: Online Tools (Manual)

Use one of these free online converters:
- [toWebP.io](https://towebp.io/) - No uploads, browser-based
- [CloudConvert](https://cloudconvert.com/png-to-webp) - Supports batch conversion
- [FreeConvert](https://www.freeconvert.com/png-to-webp) - Simple interface

### Steps:
1. Download images from URLs (right-click → Save)
2. Upload to any WebP converter above
3. Set quality to 80%
4. Download converted WebP files
5. Rename files:
   - Концепция и эскизы.webp → concept-sketches.webp
   - Визуализация.webp → visualization.webp
   - image.webp → documentation.webp
6. Place in `public/images/` directory

## Method 4: TypeScript Alternative

A TypeScript version is also available: `download-convert.ts`

```bash
npx tsx download-convert.ts
```

## Verification

After conversion, verify the files:

```bash
# Check files exist
ls -lh public/images/

# Should show:
# concept-sketches.webp
# visualization.webp
# documentation.webp
```

## WebP Settings
- **Format**: WebP
- **Quality**: 80 (balance between size and quality)
- **Compression**: Lossy (for photos)
- **Expected size reduction**: 30-50% compared to JPG/PNG

## Using the Images in React

Once converted, use them in your components:

```tsx
<img src="/images/concept-sketches.webp" alt="Concept and sketches" />
<img src="/images/visualization.webp" alt="Visualization" />
<img src="/images/documentation.webp" alt="Documentation" />
```

## Troubleshooting

### Script doesn't run
- Ensure Node.js is installed: `node --version`
- Check sharp is installed: `npm list sharp`
- Try with bun: `bun run convert-images.mjs`

### Images don't download
- Check internet connection
- Verify URLs are accessible
- Try manual download from browser

### Permission errors
- Ensure write permissions in public/ directory
- Run script from project root

## Clean Up

After successful conversion, you can remove temporary files:
```bash
rm convert-images.mjs
rm download-convert.ts
rm run-conversion.sh
rm IMAGE_CONVERSION_INSTRUCTIONS.md
rm WEBP_CONVERSION_GUIDE.md
```

And remove the converter route from App.tsx if no longer needed.
