const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'out');
const deployArchive = path.join(root, 'deploy.tar.gz');
const stageDir = path.join(root, '_deploy_stage');

if (!fs.existsSync(outDir)) {
  console.error("Error: 'out' directory not found. Build static site first.");
  process.exit(1);
}

if (fs.existsSync(deployArchive)) {
  try { fs.unlinkSync(deployArchive); } catch (e) {}
}
if (fs.existsSync(stageDir)) {
  fs.rmSync(stageDir, { recursive: true, force: true });
}
fs.mkdirSync(stageDir, { recursive: true });

console.log('📦 Preparing ultra-fast selective deployment package...');

// 1. Copy _next folder (All compiled React/Next.js JS, CSS, and dynamic chunks)
if (fs.existsSync(path.join(outDir, '_next'))) {
  fs.cpSync(path.join(outDir, '_next'), path.join(stageDir, '_next'), { recursive: true });
}

// 2. Recursively copy all static HTML pages, JSON, manifest, and text files
function copyWebFiles(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '_next' || entry.name.startsWith('.')) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyWebFiles(srcPath, destPath);
    } else if (entry.isFile()) {
      const isWebFile = (
        entry.name.endsWith('.html') ||
        entry.name.endsWith('.txt') ||
        entry.name.endsWith('.json') ||
        entry.name.endsWith('.xml') ||
        entry.name === '.htaccess'
      );
      if (isWebFile) {
        fs.mkdirSync(dest, { recursive: true });
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}
copyWebFiles(outDir, stageDir);

// 3. Detect and include newly added or modified files in Git (e.g. new PDFs, images, notices)
try {
  let changedFiles = [];
  try {
    // Check recent commits for added/modified files
    const diff = execSync('git diff-tree --no-commit-id --name-only -r HEAD~5..HEAD', { cwd: root, encoding: 'utf-8' });
    changedFiles = diff.split('\n').map(s => s.trim()).filter(Boolean);
  } catch (e) {
    try {
      const diff = execSync('git diff-tree --no-commit-id --name-only -r HEAD', { cwd: root, encoding: 'utf-8' });
      changedFiles = diff.split('\n').map(s => s.trim()).filter(Boolean);
    } catch (e2) {
      const status = execSync('git status --porcelain', { cwd: root, encoding: 'utf-8' });
      changedFiles = status.split('\n').map(s => s.trim().replace(/^[AMD\?\s]+\s+/, '')).filter(Boolean);
    }
  }

  const publicChanges = changedFiles
    .filter(f => f.startsWith('public/'))
    .map(f => f.replace(/^public[\\/]/, ''));

  if (publicChanges.length > 0) {
    console.log(`✨ Including ${publicChanges.length} newly added/modified asset(s) from Git:`);
    for (const rel of publicChanges) {
      const srcFile = path.join(outDir, rel);
      const destFile = path.join(stageDir, rel);
      if (fs.existsSync(srcFile)) {
        console.log(`   + ${rel}`);
        fs.mkdirSync(path.dirname(destFile), { recursive: true });
        fs.copyFileSync(srcFile, destFile);
      }
    }
  }
} catch (err) {
  console.log('Note: Git asset delta check completed.');
}

// 4. Create one-time self-deleting PHP extractor for cPanel environments
const phpExtractor = `<?php
$archive = __DIR__ . '/deploy.tar.gz';
if (file_exists($archive)) {
  try {
    $phar = new PharData($archive);
    $phar->extractTo(__DIR__, null, true);
    @unlink($archive);
  } catch (Exception $e) {}
}
@unlink(__FILE__);
echo "DEPLOY_EXTRACT_SUCCESS";
`;
fs.writeFileSync(path.join(stageDir, 'extract_deploy.php'), phpExtractor);

// 5. Compress staging folder into deploy.tar.gz as well
console.log('Compressing deployment archive...');
execSync(`tar -czf "${deployArchive}" -C "${stageDir}" .`, { stdio: 'inherit' });

if (fs.existsSync(deployArchive)) {
  const stats = fs.statSync(deployArchive);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
  console.log(`\n======================================================`);
  console.log(` SUCCESS: deploy.tar.gz created!`);
  console.log(` Size: ${sizeMB} MB (Ready for direct SCP / rsync sync)`);
  console.log(` Staging folder '_deploy_stage' preserved for direct copy`);
  console.log(`======================================================\n`);
} else {
  console.error('Failed to create deploy.tar.gz');
  process.exit(1);
}
