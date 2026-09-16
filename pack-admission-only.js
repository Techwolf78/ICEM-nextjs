const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = __dirname;
const outDir = path.join(root, 'out');
const staging = path.join(root, '_only_admission_stage');

if (fs.existsSync(staging)) {
  fs.rmSync(staging, { recursive: true, force: true });
}
fs.mkdirSync(staging, { recursive: true });

console.log('1. Copying admission-2026 HTML page...');
fs.cpSync(path.join(outDir, 'admission-2026'), path.join(staging, 'admission-2026'), { recursive: true });

console.log('2. Copying _next (compiled JS chunks for the page)...');
fs.cpSync(path.join(outDir, '_next'), path.join(staging, '_next'), { recursive: true });

console.log('3. Copying public/admission (all PDFs)...');
fs.cpSync(path.join(root, 'public', 'admission'), path.join(staging, 'admission'), { recursive: true });

const zipName = 'admission-2026-only-update.zip';
const zipPath = path.join(root, zipName);
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

console.log('4. Compressing into admission-2026-only-update.zip...');
execSync(`powershell -NoProfile -Command "Compress-Archive -Path '${staging}\\*' -DestinationPath '${zipPath}' -Force"`);

fs.rmSync(staging, { recursive: true, force: true });

const stats = fs.statSync(zipPath);
console.log(`\n======================================================`);
console.log(` DONE! File created: ${zipName}`);
console.log(` Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
console.log(` Path: ${zipPath}`);
console.log(`======================================================`);
