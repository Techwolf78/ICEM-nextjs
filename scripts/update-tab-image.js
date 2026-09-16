const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\AjayPawar\\.gemini\\antigravity-ide\\brain\\74254a24-de35-427b-8f06-33d7c9946370\\.user_uploaded';
const outDir = 'C:\\Users\\AjayPawar\\Desktop\\code\\icem-revamp\\ICEM-nextjs\\public\\sop-assets';

function badge(num, x, y, color = '#dc2626') {
  return `
    <g transform="translate(${x}, ${y})">
      <circle cx="12" cy="12" r="11" fill="${color}" stroke="#ffffff" stroke-width="2.2" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.35))" />
      <text x="12" y="16.5" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">${num}</text>
    </g>
  `;
}

async function updateTab() {
  const tabCrop = { left: 345, top: 180, width: 334, height: 185 };
  const tabBase = await sharp(path.join(uploadDir, 'media_1789106116948.png'))
    .extract(tabCrop)
    .toBuffer();
  await sharp(tabBase).toFile(path.join(outDir, '03_tab_modal_clean.png'));

  const svgTab = `
    <svg width="334" height="185" xmlns="http://www.w3.org/2000/svg">
      <!-- 1. Input box: wraps the input field cleanly below label -->
      <rect x="46" y="86" width="242" height="32" rx="7" fill="none" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="4,2" />
      ${badge(1, 32, 75)}

      <!-- 2. Create Tab button -->
      <rect x="218" y="142" width="56" height="21" rx="6" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-dasharray="4,2" />
      ${badge(2, 204, 131, '#0284c7')}
    </svg>
  `;

  await sharp(tabBase)
    .composite([{ input: Buffer.from(svgTab), top: 0, left: 0 }])
    .toFile(path.join(outDir, '03_tab_modal_annotated.png'));

  console.log('03_tab_modal_annotated.png updated with exact pixel alignment!');
}

updateTab().catch(console.error);
