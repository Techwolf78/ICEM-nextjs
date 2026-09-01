# Deployment script for ICEM Next.js site to cPanel using tar.exe (super fast!)
# Run this after 'npm run build' to create ZIPs for upload

Write-Host "Cleaning up old ZIPs..."
Remove-Item .\*.zip -Force -ErrorAction SilentlyContinue

Write-Host "Creating deployment ZIPs with tar.exe..."

# Create ZIPs for large folders sequentially
Write-Host "Zipping _next..."
tar -a -cf next.zip -C .\out _next

Write-Host "Zipping assets..."
tar -a -cf assets.zip -C .\out assets

Write-Host "Zipping pdfs..."
tar -a -cf pdfs.zip -C .\out pdfs

Write-Host "Zipping programs..."
tar -a -cf programs.zip -C .\out programs

Write-Host "Zipping rest..."
$excludeList = @('_next', 'assets', 'pdfs', 'programs')
$restItems = Get-ChildItem .\out | Where-Object { $excludeList -notcontains $_.Name } | Select-Object -ExpandProperty FullName
Compress-Archive -Path $restItems -DestinationPath .\rest.zip -Force

Write-Host "`nGenerated Deployment Packages:"
Get-ChildItem .\*.zip | Select-Object Name, @{Name="SizeMB";Expression={[math]::Round($_.Length / 1MB, 2)}}

Write-Host "`nZIPs created successfully! Upload next.zip, assets.zip, pdfs.zip, programs.zip, rest.zip to cPanel public_html and extract each."