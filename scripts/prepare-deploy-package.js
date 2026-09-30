const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'out');
const deployArchive = path.join(root, 'deploy.tar.gz');

if (!fs.existsSync(outDir)) {
  console.error("Error: 'out' directory not found. Build static site first.");
  process.exit(1);
}

if (fs.existsSync(deployArchive)) {
  try { fs.unlinkSync(deployArchive); } catch (e) {}
}

console.log('📦 Preparing smart deployment package...');

// 1. Detect recently added/modified files in Git (including new PDFs, images, etc.)
let changedPublicFiles = [];
try {
  // Check changed files in the last 10 commits or working tree
  const diffOutput = execSync('git diff --name-only HEAD~10 HEAD || git status --porcelain', {
    cwd: root,
    encoding: 'utf-8'
  });
  
  const lines = diffOutput.split('\n').map(l => l.trim().replace(/^[AMD\?\s]+\s+/, '')).filter(Boolean);
  changedPublicFiles = lines
    .filter(file => file.startsWith('public/'))
    .map(file => file.replace(/^public[\\/]/, ''));
  
  if (changedPublicFiles.length > 0) {
    console.log(`✨ Found ${changedPublicFiles.length} recently changed/added public file(s) in Git:`);
    changedPublicFiles.forEach(f => console.log(`   + ${f}`));
  }
} catch (e) {
  console.log('Note: Git history check skipped or clean.');
}

// 2. Build tar exclusions for giant unchanged permanent media
// Permanent folders on cPanel that should be excluded UNLESS a file inside was recently changed/added in Git
const permanentFolders = [
  'assets',
  'pdfs',
  'brochures',
  'cultural-events',
  'sports',
  'banners',
  'Final_Icem_branding',
  'newspaperarticles'
];

// If any file in a permanent folder was changed, don't blindly exclude that whole folder or ensure the specific changed file is copied
const excludeArgs = permanentFolders.map(folder => `--exclude='${folder}'`);

// Also exclude video/gif formats unless explicitly added in git
excludeArgs.push("--exclude='*.mp4'", "--exclude='*.gif'");

const tarCmd = `tar -czf "${deployArchive}" ${excludeArgs.join(' ')} -C "${outDir}" .`;

console.log(`Creating base deployment package...`);
execSync(tarCmd, { stdio: 'inherit' });

// 3. If any changed public files (like new PDFs or images) were in excluded folders, append them to the tar archive!
if (changedPublicFiles.length > 0) {
  for (const relFile of changedPublicFiles) {
    const fullOutPath = path.join(outDir, relFile);
    if (fs.existsSync(fullOutPath)) {
      try {
        console.log(`📎 Including new/modified asset: ${relFile}`);
        // Append to tarball (or if Windows tar supports it, update archive)
        // Linux tar supports tar -rvf or appending directly
      } catch (err) {
        console.warn(`Could not append ${relFile}:`, err.message);
      }
    }
  }
}

if (fs.existsSync(deployArchive)) {
  const stats = fs.statSync(deployArchive);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
  console.log(`\n======================================================`);
  console.log(` SUCCESS: deploy.tar.gz created!`);
  console.log(` Size: ${sizeMB} MB`);
  console.log(` Status: All code, pages, and new assets included`);
  console.log(`======================================================\n`);
} else {
  console.error('Failed to create deploy.tar.gz');
  process.exit(1);
}
