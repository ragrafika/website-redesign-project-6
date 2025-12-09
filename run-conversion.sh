#!/bin/bash
# Image conversion script
# This script downloads and converts 3 images to WebP format

echo "Starting image conversion process..."
echo ""

# Run the Node.js conversion script
node convert-images.mjs

echo ""
echo "Conversion complete!"
echo "Check public/images/ directory for the converted files"
