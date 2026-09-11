# deploy-next.ps1
# Creates a zip containing ONLY .next and public/admission

$ErrorActionPreference = "Stop"

$projectRoot = $PSScriptRoot
$timestamp   = Get-Date -Format "yyyyMMdd_HHmmss"
$stagingDir  = Join-Path $projectRoot "_deploy_staging_$timestamp"
$zipName     = "next-build-$timestamp.zip"
$zipPath     = Join-Path $projectRoot $zipName

Write-Host "Cleaning old staging..." -ForegroundColor Cyan
if (Test-Path $stagingDir) {
    Remove-Item $stagingDir -Recurse -Force
}

Write-Host "Creating staging folder..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path $stagingDir | Out-Null
New-Item -ItemType Directory -Path (Join-Path $stagingDir "public") | Out-Null

# 1. Copy .next
Write-Host "Copying .next ..." -ForegroundColor Yellow
Copy-Item -Path (Join-Path $projectRoot ".next") -Destination (Join-Path $stagingDir ".next") -Recurse -Force

# 2. Copy public/admission only
Write-Host "Copying public/admission ..." -ForegroundColor Yellow
$admissionSrc = Join-Path $projectRoot "public\admission"
if (Test-Path $admissionSrc) {
    Copy-Item -Path $admissionSrc -Destination (Join-Path $stagingDir "public\admission") -Recurse -Force
}
else {
    Write-Host "public/admission not found - skipping." -ForegroundColor Red
}

# 3. Zip it
Write-Host "Creating zip: $zipName" -ForegroundColor Cyan
Compress-Archive -Path (Join-Path $stagingDir "*") -DestinationPath $zipPath -Force

# 4. Cleanup staging
Remove-Item $stagingDir -Recurse -Force

# Done
$sizeMB = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
Write-Host ""
Write-Host "Done! Upload this file to cPanel app root and extract:" -ForegroundColor Green
Write-Host "   $zipPath ($sizeMB MB)" -ForegroundColor Green