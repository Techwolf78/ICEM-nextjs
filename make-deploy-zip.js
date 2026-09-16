const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = __dirname;
const staging = path.join(root, '_deploy_stage');

if (fs.existsSync(staging)) {
  fs.rmSync(staging, { recursive: true, force: true });
}
fs.mkdirSync(path.join(staging, 'public'), { recursive: true });

console.log('1/3 Copying .next folder...');
fs.cpSync(path.join(root, '.next'), path.join(staging, '.next'), { recursive: true });

console.log('2/3 Copying public/admission folder...');
fs.cpSync(path.join(root, 'public', 'admission'), path.join(staging, 'public', 'admission'), { recursive: true });

const zipName = 'deploy-update-admission.zip';
const zipPath = path.join(root, zipName);
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

console.log('3/3 Zipping files (around 30-40 MB)...');
execSync(`powershell -NoProfile -Command "Compress-Archive -Path '${staging}\\*' -DestinationPath '${zipPath}' -Force"`);

fs.rmSync(staging, { recursive: true, force: true });

const stats = fs.statSync(zipPath);
console.log(`\nSUCCESS! Created: ${zipName} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
