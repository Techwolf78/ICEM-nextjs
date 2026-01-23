const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// The specific image file for Dr. Aatish Zagade
const targetFile = 'public/assets/images/icemFaculty/aatish_zagade.jpeg';

// Check if the file exists
if (!fs.existsSync(targetFile)) {
  console.error(`❌ File not found: ${targetFile}`);
  process.exit(1);
}

// Create the new path (e.g., aatish_zagade.jpeg -> aatish_zagade.webp)
const destination = targetFile.replace(/\.(png|jpg|jpeg)$/i, '.webp');

console.log(`Converting ${targetFile} to ${destination}...`);

// Convert to webp with quality adjusted to get below 500KB
// Start with quality 80, but since original is 29MB, might need lower
sharp(targetFile)
  .resize(800, 800, { fit: 'inside' }) // Resize to max 800x800
  .webp({ quality: 20 }) // Lower quality
  .toFile(destination)
  .then(info => {
    console.log(`✅ Converted: ${destination}`);
    console.log(`Original size: ~29MB, New size: ${info.size} bytes`);
    if (info.size > 500 * 1024) {
      console.warn(`⚠️ Size is still above 500KB: ${info.size} bytes. Consider further optimization.`);
    } else {
      console.log(`✅ Size is below 500KB: ${info.size} bytes`);
    }
  })
  .catch(err => console.error(`❌ Error:`, err));