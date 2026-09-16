const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = __dirname;
const outDir = path.join(root, 'out');
const timestamp = Date.now();
const staging = path.join(root, `_quick_stage_${timestamp}`);

if (fs.existsSync(staging)) {
  fs.rmSync(staging, { recursive: true, force: true });
}
fs.mkdirSync(staging, { recursive: true });

console.log('1/4 Copying generated HTML/JS files for admission-2026...');
fs.cpSync(path.join(outDir, 'admission-2026'), path.join(staging, 'admission-2026'), { recursive: true });

console.log('2/4 Copying _next (static chunks & JS assets)...');
fs.cpSync(path.join(outDir, '_next'), path.join(staging, '_next'), { recursive: true });

console.log('3/4 Copying public/admission PDFs...');
fs.cpSync(path.join(root, 'public', 'admission'), path.join(staging, 'admission'), { recursive: true });

if (fs.existsSync(path.join(outDir, 'index.html'))) {
  fs.copyFileSync(path.join(outDir, 'index.html'), path.join(staging, 'index.html'));
}
if (fs.existsSync(path.join(outDir, 'merit-lists'))) {
  fs.cpSync(path.join(outDir, 'merit-lists'), path.join(staging, 'merit-lists'), { recursive: true });
}
if (fs.existsSync(path.join(root, 'ICEM_Admission_CMS_User_Manual_SOP.pdf'))) {
  fs.copyFileSync(path.join(root, 'ICEM_Admission_CMS_User_Manual_SOP.pdf'), path.join(staging, 'ICEM_Admission_CMS_User_Manual_SOP.pdf'));
}

const zipName = 'icem-cms-live-update.zip';
const zipPath = path.join(root, zipName);
if (fs.existsSync(zipPath)) {
  try { fs.unlinkSync(zipPath); } catch (e) {}
}

console.log('4/4 Compressing icem-cms-live-update.zip...');
execSync(`powershell -NoProfile -Command "Compress-Archive -Path '${staging}\\*' -DestinationPath '${zipPath}' -Force"`);

fs.rmSync(staging, { recursive: true, force: true });

const stats = fs.statSync(zipPath);
console.log(`\n======================================================`);
console.log(` SUCCESS! Created: ${zipName}`);
console.log(` Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
console.log(` Location: ${zipPath}`);
console.log(`======================================================`);
