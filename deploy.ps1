# Deployment script for ICEM Next.js site to cPanel
# Run this after 'npm run build' to create ZIPs for upload

Write-Host "Creating deployment ZIPs..."

# Clean up old ZIPs
Remove-Item .\*.zip -Force -ErrorAction SilentlyContinue

# Create ZIPs for large folders
Compress-Archive -Path .\out\_next -DestinationPath .\next.zip
Compress-Archive -Path .\out\assets -DestinationPath .\assets.zip
Compress-Archive -Path .\out\pdfs -DestinationPath .\pdfs.zip
Compress-Archive -Path .\out\programs -DestinationPath .\programs.zip

# ZIP the rest
Get-ChildItem .\out -Exclude _next,assets,pdfs,programs | Compress-Archive -DestinationPath .\rest.zip

# Check sizes
Get-Item .\next.zip, .\assets.zip, .\pdfs.zip, .\programs.zip, .\rest.zip | Select-Object Name, @{Name="SizeMB";Expression={[math]::Round($_.Length / 1MB, 2)}}

Write-Host "ZIPs created. Upload next.zip, assets.zip, pdfs.zip, programs.zip, rest.zip to cPanel public_html and extract each."