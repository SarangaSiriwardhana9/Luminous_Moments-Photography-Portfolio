const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY = 80;
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function optimizeImage(inputPath) {
  const stats = await fs.stat(inputPath);
  if (stats.size < 100000) return; // Skip if less than 100KB

  const outputPath = inputPath;
  const imageBuffer = await fs.readFile(inputPath);
  
  try {
    // Convert to WebP with optimization
    const webpBuffer = await sharp(imageBuffer)
      .webp({ quality: QUALITY })
      .toBuffer();

    // Only save if the WebP version is smaller
    if (webpBuffer.length < imageBuffer.length) {
      await fs.writeFile(outputPath.replace(/\.[^.]+$/, '.webp'), webpBuffer);
      console.log(`✓ Optimized: ${path.basename(inputPath)} -> WebP`);
    }

    // Optimize original format
    const optimizedBuffer = await sharp(imageBuffer)
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();

    if (optimizedBuffer.length < imageBuffer.length) {
      await fs.writeFile(outputPath, optimizedBuffer);
      console.log(`✓ Optimized: ${path.basename(inputPath)}`);
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function processDirectory(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  console.log('🔄 Starting image optimization...');
  try {
    await processDirectory(IMAGES_DIR);
    console.log('✅ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

main(); 