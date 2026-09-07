# Deployment script for ICEM Next.js site to cPanel using tar.exe (super fast!)
# Run this after 'npm run build' to create ZIPs for upload

Write-Host "Cleaning up old ZIPs..."
Remove-Item .\*.zip -Force -ErrorAction SilentlyContinue

Write-Host "Creating deployment ZIPs with tar.exe..."

# Create ZIPs for folders reliably
Write-Host "Creating zip files..."
python -c @"
import zipfile, os, sys

def make_zip(zip_name, folders):
    print(f'Creating {zip_name}...')
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED, allowZip64=True) as zipf:
        for folder in folders:
            full_dir = os.path.join('out', folder)
            if os.path.isfile(full_dir):
                zipf.write(full_dir, folder)
            elif os.path.isdir(full_dir):
                for root, dirs, files in os.walk(full_dir):
                    for file in files:
                        abs_path = os.path.join(root, file)
                        rel_path = os.path.relpath(abs_path, 'out')
                        zipf.write(abs_path, rel_path)

make_zip('next.zip', ['_next'])
make_zip('assets-images.zip', ['assets/images', 'assets/bannerimages'])
make_zip('assets-pdf.zip', ['assets/pdf'])
make_zip('pdfs.zip', ['pdfs'])
make_zip('programs.zip', ['programs'])

# rest.zip
exclude = {'_next', 'assets', 'pdfs', 'programs'}
rest_items = [f for f in os.listdir('out') if f not in exclude]
make_zip('rest.zip', rest_items)
"@

Write-Host "`nGenerated Deployment Packages:"
Get-ChildItem .\*.zip | Select-Object Name, @{Name="SizeMB";Expression={[math]::Round($_.Length / 1MB, 2)}}

Write-Host "`nZIPs created successfully! Upload next.zip, assets-images.zip, assets-pdf.zip, pdfs.zip, programs.zip, rest.zip to cPanel public_html and extract each."