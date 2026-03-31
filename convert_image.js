const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const customArg = process.argv[2];
const targetDirs = customArg
  ? customArg.split(",").map((dir) => dir.trim())
  : ["public/Final_Icem_branding", "public/faculty/final_icem_branding"];

console.log(`Scanning ${targetDirs.join(", ")}...`);

function collectImageFiles(dir) {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    console.warn(`Warning: directory not found or not a directory: ${dir}`);
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const collected = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      collected.push(...collectImageFiles(entryPath));
      continue;
    }

    if (entry.isFile() && /\.(png|jpe?g|webp)$/i.test(entry.name)) {
      collected.push(entryPath);
    }
  }

  return collected;
}

const imageFiles = targetDirs.flatMap(collectImageFiles);

if (imageFiles.length === 0) {
  console.log("No image files found. Nothing to convert.");
  process.exit(0);
}

let completed = 0;

imageFiles.forEach((fullPath) => {
  const isSourceWebp = /\.webp$/i.test(fullPath);
  const destination = isSourceWebp
    ? `${fullPath}.tmp.webp`
    : fullPath.replace(/\.(png|jpe?g|webp)$/i, ".webp");

  sharp(fullPath)
    .rotate()
    .resize({
      width: 1280,
      height: 1280,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 50, effort: 6 })
    .toFile(destination)
    .then(() => {
      if (isSourceWebp) {
        fs.renameSync(destination, fullPath);
        console.log(`✅ Re-optimized: ${fullPath}`);
      } else {
        console.log(`✅ Created: ${destination}`);
      }
      completed++;
      if (completed === imageFiles.length) {
        console.log(`\n✨ All ${completed} images converted successfully!`);
      }
    })
    .catch((err) => console.error(`❌ Error converting ${fullPath}:`, err));
});