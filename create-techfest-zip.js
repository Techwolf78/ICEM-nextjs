const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = __dirname;
const outDir = path.join(root, 'out');
const timestamp = Date.now();
const staging = path.join(root, `_quick_techfest_${timestamp}`);

if (fs.existsSync(staging)) {
  fs.rmSync(staging, { recursive: true, force: true });
}
fs.mkdirSync(staging, { recursive: true });

console.log('1/4 Copying homepage index & text files...');
const filesToCopy = [
  'index.html',
  'index.txt',
  '__next._index.txt',
  '__next._full.txt',
  '__next._head.txt',
  '__next._tree.txt',
  '__next.__PAGE__.txt',
  '404.html'
];

for (const file of filesToCopy) {
  const src = path.join(outDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(staging, file));
  }
}

console.log('2/4 Copying _next (compiled JS chunks and assets)...');
fs.cpSync(path.join(outDir, '_next'), path.join(staging, '_next'), { recursive: true });

console.log('3/4 Copying new Techfest banners...');
const stagingBanners = path.join(staging, 'banners');
fs.mkdirSync(stagingBanners, { recursive: true });

const banners = [
  'techfest_iitb_desk.webp',
  'techfest_iitb_mob.webp'
];

for (const banner of banners) {
  const srcOut = path.join(outDir, 'banners', banner);
  const srcPublic = path.join(root, 'public', 'banners', banner);
  const src = fs.existsSync(srcOut) ? srcOut : srcPublic;
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(stagingBanners, banner));
    console.log(`  + banners/${banner}`);
  } else {
    console.warn(`  ! Warning: could not find ${banner}`);
  }
}

const zipName = 'icem-techfest-banner-update.zip';
const zipPath = path.join(root, zipName);
const desktopZipPath = path.join('C:\\Users\\AjayPawar\\Desktop', zipName);

if (fs.existsSync(zipPath)) {
  try { fs.unlinkSync(zipPath); } catch (e) {}
}

console.log('4/4 Compressing zip package...');
execSync(`powershell -NoProfile -Command "Compress-Archive -Path '${staging}\\*' -DestinationPath '${zipPath}' -Force"`);

// Copy to Desktop as well for convenience
try {
  fs.copyFileSync(zipPath, desktopZipPath);
  console.log(`Copied convenient shortcut to Desktop: ${desktopZipPath}`);
} catch (e) {
  // ignore if desktop access blocked
}

fs.rmSync(staging, { recursive: true, force: true });

const stats = fs.statSync(zipPath);
console.log(`\n======================================================`);
console.log(` SUCCESS! Created: ${zipName}`);
console.log(` Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${(stats.size / 1024).toFixed(1)} KB)`);
console.log(` Location 1: ${zipPath}`);
if (fs.existsSync(desktopZipPath)) {
  console.log(` Location 2 (Desktop): ${desktopZipPath}`);
}
console.log(`======================================================`);

