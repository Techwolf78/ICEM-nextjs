# Deployment script for ICEM Next.js site to cPanel using tar.exe (super fast!)
# Run this after 'npm run build' to create ZIPs for upload

Write-Host "Cleaning up old ZIPs..."
Remove-Item .\*.zip -Force -ErrorAction SilentlyContinue

Write-Host "Creating deployment ZIPs with tar.exe..."

# Create ZIPs for large folders
tar -a -cf next.zip -C .\out _next
tar -a -cf assets.zip -C .\out assets
tar -a -cf pdfs.zip -C .\out pdfs
tar -a -cf programs.zip -C .\out programs

# ZIP the rest
$excludeList = @('_next', 'assets', 'pdfs', 'programs')
$files = Get-ChildItem .\out | Where-Object { $excludeList -notcontains $_.Name } | Select-Object -ExpandProperty Name
tar -a -cf rest.zip -C .\out $files

# Check sizes
Get-Item .\next.zip, .\assets.zip, .\pdfs.zip, .\programs.zip, .\rest.zip | Select-Object Name, @{Name="SizeMB";Expression={[math]::Round($_.Length / 1MB, 2)}}

Write-Host "ZIPs created successfully! Upload next.zip, assets.zip, pdfs.zip, programs.zip, rest.zip to cPanel public_html and extract each."