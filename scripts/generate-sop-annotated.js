const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\AjayPawar\\.gemini\\antigravity-ide\\brain\\74254a24-de35-427b-8f06-33d7c9946370\\.user_uploaded';
const outDir = 'C:\\Users\\AjayPawar\\Desktop\\code\\icem-revamp\\ICEM-nextjs\\public\\sop-assets';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Minimalist, elegant circular badge: deep navy with crisp white number & subtle shadow
function badge(num, x, y, size = 19) {
  const r = size / 2;
  const fontSize = size <= 18 ? 9.5 : 10.5;
  const textY = r + (fontSize * 0.35);
  return `
    <g transform="translate(${x}, ${y})" filter="url(#shadow)">
      <circle cx="${r}" cy="${r}" r="${r}" fill="#003c84" stroke="#ffffff" stroke-width="1.5" />
      <text x="${r}" y="${textY}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#ffffff" text-anchor="middle">${num}</text>
    </g>
  `;
}

const filterSvg = `
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#0f172a" flood-opacity="0.3" />
    </filter>
  </defs>
`;

async function run() {
  // ==========================================
  // 1. LOGIN SCREEN (324 x 310)
  // ==========================================
  const loginCrop = { left: 340, top: 155, width: 324, height: 310 };
  const loginBase = await sharp(path.join(uploadDir, 'media_1789106083049.png'))
    .extract(loginCrop)
    .toBuffer();
  await sharp(loginBase).toFile(path.join(outDir, '01_login_clean.png'));

  const svgLogin = `
    <svg width="324" height="310" xmlns="http://www.w3.org/2000/svg">
      ${filterSvg}
      ${badge(1, 16, 167, 20)}
      ${badge(2, 16, 227, 20)}
    </svg>
  `;
  await sharp(loginBase)
    .composite([{ input: Buffer.from(svgLogin), top: 0, left: 0 }])
    .toFile(path.join(outDir, '01_login_annotated.png'));
  console.log('1. Login annotated created');

  // ==========================================
  // 2. DASHBOARD SCREEN (704 x 380)
  // ==========================================
  const dashCrop = { left: 160, top: 140, width: 704, height: 380 };
  const dashBase = await sharp(path.join(uploadDir, 'media_1789106105981.png'))
    .extract(dashCrop)
    .toBuffer();
  await sharp(dashBase).toFile(path.join(outDir, '02_dashboard_clean.png'));

  const svgDash = `
    <svg width="704" height="380" xmlns="http://www.w3.org/2000/svg">
      ${filterSvg}
      <!-- 1. Above Add New Tab button -->
      ${badge(1, 480, 5, 20)}
      <!-- 2. Above Add Notice button -->
      ${badge(2, 595, 5, 20)}
      <!-- 3. Left of Common tab -->
      ${badge(3, 8, 66, 20)}
      <!-- 4. Left of Reorder arrows -->
      ${badge(4, 16, 138, 20)}
      <!-- 5. In blank space above Edit/Delete buttons -->
      ${badge(5, 605, 116, 20)}
    </svg>
  `;
  await sharp(dashBase)
    .composite([{ input: Buffer.from(svgDash), top: 0, left: 0 }])
    .toFile(path.join(outDir, '02_dashboard_annotated.png'));
  console.log('2. Dashboard annotated created');

  // ==========================================
  // 3. TAB MODAL (334 x 185)
  // ==========================================
  const tabCrop = { left: 345, top: 180, width: 334, height: 185 };
  const tabBase = await sharp(path.join(uploadDir, 'media_1789106116948.png'))
    .extract(tabCrop)
    .toBuffer();
  await sharp(tabBase).toFile(path.join(outDir, '03_tab_modal_clean.png'));

  const svgTab = `
    <svg width="334" height="185" xmlns="http://www.w3.org/2000/svg">
      ${filterSvg}
      ${badge(1, 18, 92, 20)}
      ${badge(2, 280, 142, 20)}
    </svg>
  `;
  await sharp(tabBase)
    .composite([{ input: Buffer.from(svgTab), top: 0, left: 0 }])
    .toFile(path.join(outDir, '03_tab_modal_annotated.png'));
  console.log('3. Tab modal annotated created');

  // ==========================================
  // 4. NOTICE MODAL (350 x 375 with clean 26px left margin)
  // ==========================================
  const noticeCrop = { left: 350, top: 95, width: 324, height: 375 };
  const rawNotice = await sharp(path.join(uploadDir, 'media_1789106177625.png'))
    .extract(noticeCrop)
    .toBuffer();
  await sharp(rawNotice).toFile(path.join(outDir, '04_notice_modal_clean.png'));

  const paddedNotice = await sharp(rawNotice)
    .extend({ top: 0, bottom: 0, left: 26, right: 0, background: '#ffffff' })
    .toBuffer();

  const svgNotice = `
    <svg width="350" height="375" xmlns="http://www.w3.org/2000/svg">
      ${filterSvg}
      ${badge(1, 4, 67, 19)}
      ${badge(2, 4, 107, 19)}
      ${badge(3, 4, 143, 19)}
      ${badge(4, 170, 143, 19)}
      ${badge(5, 4, 169, 19)}
      ${badge(6, 4, 210, 19)}
      ${badge(7, 4, 273, 19)}
      ${badge(8, 246, 318, 19)}
    </svg>
  `;
  await sharp(paddedNotice)
    .composite([{ input: Buffer.from(svgNotice), top: 0, left: 0 }])
    .toFile(path.join(outDir, '04_notice_modal_annotated.png'));
  console.log('4. Notice modal annotated created');

  // ==========================================
  // 5. UPLOAD PROGRESS MODAL (Cropped to progress bar)
  // ==========================================
  const progCrop = { left: 350, top: 95, width: 324, height: 165 };
  const progBase = await sharp(path.join(uploadDir, 'media_1789106297318.png'))
    .extract(progCrop)
    .toBuffer();
  await sharp(progBase).toFile(path.join(outDir, '05_upload_progress_clean.png'));

  const paddedProg = await sharp(progBase)
    .extend({ top: 0, bottom: 0, left: 26, right: 0, background: '#ffffff' })
    .toBuffer();

  const svgProg = `
    <svg width="350" height="165" xmlns="http://www.w3.org/2000/svg">
      ${filterSvg}
      ${badge(1, 4, 70, 20)}
    </svg>
  `;
  await sharp(paddedProg)
    .composite([{ input: Buffer.from(svgProg), top: 0, left: 0 }])
    .toFile(path.join(outDir, '05_upload_progress_annotated.png'));
  console.log('5. Progress modal annotated created');

  // ==========================================
  // 6. PUBLIC STUDENT VIEW (704 x 340)
  // ==========================================
  const pubCrop = { left: 160, top: 160, width: 704, height: 340 };
  const pubBase = await sharp(path.join(uploadDir, 'media_1789106297420.png'))
    .extract(pubCrop)
    .toBuffer();
  await sharp(pubBase).toFile(path.join(outDir, '06_public_view_clean.png'));

  const svgPub = `
    <svg width="704" height="340" xmlns="http://www.w3.org/2000/svg">
      ${filterSvg}
      <!-- 1. Active Tab on left menu -->
      ${badge(1, 8, 185, 20)}
      <!-- 2. Clean space to the left of Card 1 -->
      ${badge(2, 280, 115, 20)}
      <!-- 3. View / Open/Download Buttons -->
      ${badge(3, 545, 195, 20)}
    </svg>
  `;
  await sharp(pubBase)
    .composite([{ input: Buffer.from(svgPub), top: 0, left: 0 }])
    .toFile(path.join(outDir, '06_public_view_annotated.png'));
  console.log('6. Public view annotated created');
}

run().catch(console.error);
