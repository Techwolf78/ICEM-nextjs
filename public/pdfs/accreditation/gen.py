import os

# Output file
output_file = "aqars_paths.txt"

# AQ folders to process
folders = ["AQ21", "AQ22", "AQ23"]

print("\n-----------------------------------------")
print("Generating file paths...")
print("-----------------------------------------")

paths = []

for folder in folders:
    if os.path.isdir(folder):
        print(f"Scanning: {folder}")
        
        for root, dirs, files in os.walk(folder):
            for file in files:
                if file.lower().endswith(".pdf"):
                    full_path = os.path.join(root, file)
                    
                    # Convert to web path format
                    web_path = full_path.replace("\\", "/")
                    web_path = f"/pdfs/accreditation/{web_path}"
                    
                    paths.append(web_path)
    else:
        print(f"❌ Folder not found: {folder}")

print("\nWriting output...")
with open(output_file, "w", encoding="utf-8") as f:
    f.write("\n".join(paths))

print("-----------------------------------------")
print(f"✅ Done! Saved to: {output_file}")
print("-----------------------------------------\n")
