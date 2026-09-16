const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const assetsDir = path.join(root, 'public', 'sop-assets');
const tempProfileDir = path.join(assetsDir, 'temp-chrome-profile');

function getBase64Image(filename) {
  const filePath = path.join(assetsDir, filename);
  if (!fs.existsSync(filePath)) return '';
  const buffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

const imgLogin = getBase64Image('01_login_annotated.png');
const imgDash = getBase64Image('02_dashboard_annotated.png');
const imgTab = getBase64Image('03_tab_modal_annotated.png');
const imgNotice = getBase64Image('04_notice_modal_annotated.png');
const imgProgress = getBase64Image('05_upload_progress_annotated.png');
const imgPublic = getBase64Image('06_public_view_annotated.png');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ICEM Admission 2026 CMS — Standard Operating Procedure (SOP)</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 9mm 12mm 9mm 12mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      background: #ffffff;
      line-height: 1.35;
      font-size: 11px;
      margin: 0;
      padding: 0;
    }

    .page {
      height: 279mm;
      max-height: 279mm;
      page-break-after: always;
      break-after: page;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .page:last-child {
      page-break-after: avoid;
      break-after: avoid;
    }

    /* Minimal Institutional Header */
    .header-bar {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 2px solid #003c84;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }

    .institution-name {
      font-size: 15px;
      font-weight: 800;
      color: #003c84;
      letter-spacing: -0.2px;
      margin: 0;
      text-transform: uppercase;
    }

    .institution-sub {
      font-size: 9.5px;
      color: #64748b;
      font-weight: 500;
      margin-top: 1px;
    }

    .doc-meta-table {
      text-align: right;
      font-size: 9px;
      color: #475569;
      line-height: 1.3;
    }

    .doc-meta-table strong {
      color: #003c84;
      font-weight: 700;
    }

    /* Document Title */
    .doc-title-section {
      margin-bottom: 8px;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 6px;
    }

    .doc-title {
      font-size: 17px;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 3px 0;
      letter-spacing: -0.3px;
    }

    .doc-scope {
      font-size: 11px;
      color: #475569;
      margin: 0;
      line-height: 1.4;
    }

    /* Clean Section Containers */
    .section-box {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 11px;
      margin-bottom: 8px;
      background: #ffffff;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-bottom: 5px;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 4px;
    }

    .section-badge {
      font-size: 9px;
      font-weight: 800;
      color: #ffffff;
      background: #003c84;
      padding: 1.5px 6px;
      border-radius: 3px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .section-title {
      font-size: 12.5px;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }

    /* Grids & Previews */
    .preview-grid {
      display: grid;
      grid-template-columns: 210px 1fr;
      gap: 12px;
      align-items: start;
      margin-top: 5px;
    }

    .preview-grid-wide {
      display: grid;
      grid-template-columns: 245px 1fr;
      gap: 12px;
      align-items: start;
      margin-top: 5px;
    }

    .image-frame {
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 3px;
      background: #f8fafc;
      text-align: center;
    }

    .image-frame img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      border-radius: 3px;
    }

    .image-caption {
      font-size: 9px;
      font-weight: 600;
      color: #64748b;
      margin-top: 3px;
    }

    /* Minimal Uniform Callouts */
    .callout-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .callout-row {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      margin-bottom: 5px;
      font-size: 11px;
      line-height: 1.35;
    }

    .pin {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #003c84;
      color: #ffffff;
      font-weight: 700;
      font-size: 9.5px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .callout-desc strong {
      color: #0f172a;
      font-weight: 700;
    }

    /* Executive Note Box */
    .note-box {
      border-left: 2.5px solid #003c84;
      background: #f8fafc;
      padding: 4px 8px;
      font-size: 10.5px;
      color: #334155;
      margin-top: 4px;
      border-radius: 0 3px 3px 0;
      line-height: 1.35;
    }

    .note-box strong {
      color: #003c84;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .url-display {
      font-family: 'Consolas', 'Courier New', monospace;
      font-size: 11px;
      font-weight: 600;
      color: #003c84;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 3px;
      padding: 3px 8px;
      display: inline-block;
      margin: 3px 0 5px 0;
    }

    /* Minimalist Table */
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10.5px;
      line-height: 1.3;
    }

    table.data-table th {
      background: #f8fafc;
      color: #334155;
      font-size: 9.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      padding: 4px 6px;
      border: 1px solid #cbd5e1;
      text-align: left;
    }

    table.data-table td {
      padding: 3.5px 6px;
      border: 1px solid #e2e8f0;
      vertical-align: middle;
      color: #334155;
    }

    table.data-table tr:nth-child(even) {
      background: #fcfcfd;
    }

    .btn-badge {
      display: inline-block;
      padding: 1.5px 5px;
      border-radius: 3px;
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      color: #1e293b;
      font-size: 9.5px;
      font-weight: 600;
      font-family: monospace;
    }

    .btn-badge.danger {
      border-color: #fecdd3;
      background: #fff5f5;
      color: #9f1239;
    }

    /* Running Footer */
    .doc-footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 4px;
      margin-top: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9px;
      color: #64748b;
    }
  </style>
</head>
<body>

  <!-- ======================================================= -->
  <!-- PAGE 1: ACCESS, AUTHENTICATION & DASHBOARD STRUCTURE    -->
  <!-- ======================================================= -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div>
          <div class="institution-name">Indira College of Engineering &amp; Management</div>
          <div class="institution-sub">Parandwadi, Pune • Autonomous Institute Affiliated to SPPU • Approved by AICTE</div>
        </div>
        <div class="doc-meta-table">
          <div><strong>STANDARD OPERATING PROCEDURE</strong></div>
          <div>DOC ID: ICEM/SOP/ADM-2026/01</div>
          <div>REV: 1.1 | March 2026</div>
        </div>
      </div>

      <div class="doc-title-section">
        <h1 class="doc-title">Admission 2026 CMS &amp; Merit List Portal — Operational Manual</h1>
        <p class="doc-scope">
          This manual provides standardized operating instructions for administrative officers, admission coordinators, and staff on authenticating into the Content Management System (CMS), managing academic programme categories, publishing official notices, and maintaining merit lists.
        </p>
      </div>

      <!-- SECTION 01: LOGIN -->
      <div class="section-box">
        <div class="section-header">
          <span class="section-badge">Section 01</span>
          <h2 class="section-title">Portal Access &amp; Administrative Authentication</h2>
        </div>
        <p style="margin: 0 0 3px 0;">
          Launch a standard web browser (Google Chrome, Microsoft Edge, or Firefox) and navigate to the administrative URL:
        </p>
        <div>
          <span class="url-display">https://indiraicem.ac.in/admission-2026/admin/</span>
        </div>
        <p style="margin: 0 0 5px 0; color: #64748b; font-size: 10px;">
          Note: If an active session is not detected, the system immediately presents the secure passcode authentication screen.
        </p>

        <div class="preview-grid">
          <div class="image-frame">
            <img src="${imgLogin}" alt="Screen 1: Authentication Form" style="max-height: 130px;" />
            <div class="image-caption">Screen 1: Administrative Sign-In Interface</div>
          </div>
          <div>
            <ul class="callout-list">
              <li class="callout-row">
                <span class="pin">1</span>
                <div class="callout-desc">
                  <strong>Passcode Entry Field:</strong> Click the input box labeled <i>"Enter passcode"</i> and input the authorized administrative passcode issued by the IT department.
                </div>
              </li>
              <li class="callout-row">
                <span class="pin">2</span>
                <div class="callout-desc">
                  <strong>Access CMS Dashboard Button:</strong> Click the button to validate credentials and enter the live management dashboard.
                </div>
              </li>
            </ul>
            <div class="note-box">
              <strong>Security Protocol:</strong> Access credentials are restricted to authorized admissions staff. Do not disclose the passcode to students or external parties. Always sign out or close the browser tab upon completing administrative tasks.
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 02: DASHBOARD OVERVIEW -->
      <div class="section-box" style="margin-bottom: 0;">
        <div class="section-header">
          <span class="section-badge">Section 02</span>
          <h2 class="section-title">Administrative Dashboard Structure &amp; Controls</h2>
        </div>
        <p style="margin: 0 0 4px 0;">
          Upon authentication, the dashboard displays active categories, published notices, and administrative toolbars:
        </p>

        <div class="image-frame" style="margin-bottom: 6px;">
          <img src="${imgDash}" alt="Screen 2: Dashboard Overview" style="width: 100%; max-height: 140px; object-fit: contain;" />
          <div class="image-caption">Screen 2: Central Management Dashboard &amp; Action Bar</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <ul class="callout-list">
            <li class="callout-row">
              <span class="pin">1</span>
              <div class="callout-desc">
                <strong>+ Add New Tab:</strong> Create a new academic programme tab (e.g., <i>BCA, Polytechnic</i>).
              </div>
            </li>
            <li class="callout-row">
              <span class="pin">2</span>
              <div class="callout-desc">
                <strong>Add Notice / Upload PDF:</strong> Open the publishing dialog to upload a new notice or merit list.
              </div>
            </li>
            <li class="callout-row">
              <span class="pin">3</span>
              <div class="callout-desc">
                <strong>Programme Tabs Navigation:</strong> Switch between programme views (Common, Engineering, MBA) to inspect active notices.
              </div>
            </li>
          </ul>
          <ul class="callout-list">
            <li class="callout-row">
              <span class="pin">4</span>
              <div class="callout-desc">
                <strong>Priority Ordering (▲ / ▼):</strong> Reorder notices to position critical documents at the top (#1).
              </div>
            </li>
            <li class="callout-row">
              <span class="pin">5</span>
              <div class="callout-desc">
                <strong>Edit &amp; Delete Operations:</strong> Modify text details, replace PDF attachments, or remove obsolete notices.
              </div>
            </li>
          </ul>
        </div>

        <div class="note-box" style="margin-top: 4px;">
          <strong>Cloud Synchronization:</strong> The status bar indicates <i>● Live Sync</i>. All database updates and document changes propagate to the public portal within 2 seconds.
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <span>Indira College of Engineering &amp; Management • Admissions Office</span>
      <span>ICEM/SOP/ADM-2026/01</span>
      <span>Page 1 of 3</span>
    </div>
  </div>

  <!-- ======================================================= -->
  <!-- PAGE 2: PROGRAMME TABS & DOCUMENT PUBLISHING (8 STEPS)  -->
  <!-- ======================================================= -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div>
          <div class="institution-name">Indira College of Engineering &amp; Management</div>
          <div class="institution-sub">Admission 2026 CMS • Standard Operating Procedure</div>
        </div>
        <div class="doc-meta-table">
          <div><strong>SECTION 03 &amp; 04</strong></div>
          <div>Programme Tabs &amp; Document Upload</div>
        </div>
      </div>

      <!-- SECTION 03: CREATE TAB -->
      <div class="section-box">
        <div class="section-header">
          <span class="section-badge">Section 03</span>
          <h2 class="section-title">Creating &amp; Managing Programme Tabs</h2>
        </div>
        <p style="margin: 0 0 4px 0;">
          Create a new programme category whenever a new course, degree, or specialized admission vertical is introduced:
        </p>

        <div class="preview-grid">
          <div class="image-frame">
            <img src="${imgTab}" alt="Screen 3: Tab Modal" style="max-height: 105px;" />
            <div class="image-caption">Screen 3: Add Programme Tab Dialog</div>
          </div>
          <div>
            <ul class="callout-list">
              <li class="callout-row">
                <span class="pin">1</span>
                <div class="callout-desc">
                  <strong>Programme / Degree Name:</strong> Enter the formal course abbreviation or title (e.g., <code>BCA</code>, <code>Polytechnic</code>, <code>MCA</code>).
                </div>
              </li>
              <li class="callout-row">
                <span class="pin">2</span>
                <div class="callout-desc">
                  <strong>Create Tab Button:</strong> Click to initialize the category. The new tab appears instantly with an initial count of 0 documents.
                </div>
              </li>
            </ul>
            <div class="note-box">
              <strong>Category Deletion Rule:</strong> Only categories with 0 documents display the <i>"Remove Empty Tab"</i> button. Categories with active notices cannot be deleted until all notices are reallocated or removed.
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 04: NOTICE UPLOAD -->
      <div class="section-box" style="margin-bottom: 0;">
        <div class="section-header">
          <span class="section-badge">Section 04</span>
          <h2 class="section-title">Notice Publication &amp; PDF Upload (All 8 Functional Controls)</h2>
        </div>
        <p style="margin: 0 0 5px 0;">
          Click the <b>"+ Add Notice / Upload PDF"</b> button. The publication form contains eight required and optional fields:
        </p>

        <div class="preview-grid-wide">
          <div class="image-frame">
            <img src="${imgNotice}" alt="Screen 4: Notice Upload Form" style="max-height: 250px;" />
            <div class="image-caption">Screen 4: Document Publishing Form</div>
          </div>
          <div>
            <table class="data-table">
              <thead>
                <tr>
                  <th style="width: 24px; text-align: center;">#</th>
                  <th style="width: 120px;">Control Name</th>
                  <th>Operational Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align: center;"><span class="pin">1</span></td>
                  <td><strong>Target Programme Tab</strong></td>
                  <td>Select the intended academic category (e.g., <i>Engineering, MBA, MCA, M.Tech, Common</i>).</td>
                </tr>
                <tr>
                  <td style="text-align: center;"><span class="pin">2</span></td>
                  <td><strong>Notice Title *</strong></td>
                  <td>Enter the official headline visible to candidates. (e.g., <i>Provisional Merit List – First Year B.Tech A.Y. 2026-27</i>).</td>
                </tr>
                <tr>
                  <td style="text-align: center;"><span class="pin">3</span></td>
                  <td><strong>Category Badge</strong></td>
                  <td>Select or enter the document tag (e.g., <i>Merit List (IL), Vacancy Position, Fee Structure, Schedule</i>).</td>
                </tr>
                <tr>
                  <td style="text-align: center;"><span class="pin">4</span></td>
                  <td><strong>Display Date</strong></td>
                  <td>Specify the effective date shown to students. Defaults to the current calendar date.</td>
                </tr>
                <tr>
                  <td style="text-align: center;"><span class="pin">5</span></td>
                  <td><strong>"NEW" Priority Tag</strong></td>
                  <td>Check this box to append a prominent <b>NEW</b> tag to the notice for high-priority student visibility.</td>
                </tr>
                <tr>
                  <td style="text-align: center;"><span class="pin">6</span></td>
                  <td><strong>Detailed Description</strong></td>
                  <td><i>(Optional)</i> Enter supplementary candidate instructions, reporting venue, deadlines, or required certificates.</td>
                </tr>
                <tr>
                  <td style="text-align: center;"><span class="pin">7</span></td>
                  <td><strong>PDF Document File</strong></td>
                  <td>Click the dashed zone to select the official PDF from local storage (max 25 MB). Selected filename displays in bold.</td>
                </tr>
                <tr>
                  <td style="text-align: center;"><span class="pin">8</span></td>
                  <td><strong>Publish Notice Live</strong></td>
                  <td>Click to commit. The document is uploaded to secure cloud storage and published immediately to the public website.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-footer">
      <span>Indira College of Engineering &amp; Management • Admissions Office</span>
      <span>ICEM/SOP/ADM-2026/01</span>
      <span>Page 2 of 3</span>
    </div>
  </div>

  <!-- ======================================================= -->
  <!-- PAGE 3: CLOUD SYNC, PUBLIC AUDIT & NOTICE OPERATIONS    -->
  <!-- ======================================================= -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div>
          <div class="institution-name">Indira College of Engineering &amp; Management</div>
          <div class="institution-sub">Admission 2026 CMS • Standard Operating Procedure</div>
        </div>
        <div class="doc-meta-table">
          <div><strong>SECTION 05, 06 &amp; 07</strong></div>
          <div>Verification &amp; Maintenance</div>
        </div>
      </div>

      <!-- SECTION 05: UPLOAD PROGRESS -->
      <div class="section-box">
        <div class="section-header">
          <span class="section-badge">Section 05</span>
          <h2 class="section-title">Upload Progress &amp; Form Navigation</h2>
        </div>
        <p style="margin: 0 0 4px 0;">
          When <b>"Publish Notice Live"</b> is clicked, the system displays real-time upload status:
        </p>

        <div class="preview-grid">
          <div class="image-frame">
            <img src="${imgProgress}" alt="Screen 5: Upload Progress" style="max-height: 105px;" />
            <div class="image-caption">Screen 5: Cloud Upload Progress Indicator</div>
          </div>
          <div>
            <ul class="callout-list">
              <li class="callout-row">
                <span class="pin">1</span>
                <div class="callout-desc">
                  <strong>Live Upload Percentage:</strong> Displays transferred megabytes and percentage from 0% to 100%.
                </div>
              </li>
            </ul>
            <div class="note-box">
              <strong>Upload Completion:</strong> Allow 3 to 5 seconds for the cloud transfer to finalize. The modal automatically closes upon successful publication and displays a confirmation notification.
            </div>
            <div class="note-box" style="margin-top: 3px;">
              <strong>Independent Modal Scrolling:</strong> The upload dialog supports direct mouse wheel and touchpad scrolling without moving the underlying dashboard.
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 06: PUBLIC VERIFICATION -->
      <div class="section-box">
        <div class="section-header">
          <span class="section-badge">Section 06</span>
          <h2 class="section-title">Public Portal Verification (Candidate View)</h2>
        </div>
        <p style="margin: 0 0 4px 0;">
          Select <b>"View Public"</b> in the top header at any time to verify live presentation on the public admissions page:
        </p>

        <div class="image-frame" style="margin-bottom: 5px;">
          <img src="${imgPublic}" alt="Screen 6: Public Portal" style="width: 100%; max-height: 120px; object-fit: contain;" />
          <div class="image-caption">Screen 6: Public Candidate Admission Portal</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 6px 8px;">
            <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 2px;">
              <span class="pin">1</span>
              <strong style="color: #003c84; font-size: 11px;">Programme Menu</strong>
            </div>
            <span style="font-size: 10px; color: #475569;">Candidates navigate categories on the left (Engineering, MBA, MCA, M.Tech).</span>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 6px 8px;">
            <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 2px;">
              <span class="pin">2</span>
              <strong style="color: #003c84; font-size: 11px;">Live Notice Stream</strong>
            </div>
            <span style="font-size: 10px; color: #475569;">Presents notice headlines, publication dates, category badges, and priority tags.</span>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 6px 8px;">
            <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 2px;">
              <span class="pin">3</span>
              <strong style="color: #003c84; font-size: 11px;">Document Access</strong>
            </div>
            <span style="font-size: 10px; color: #475569;">Candidates can view documents inline or download PDF files directly.</span>
          </div>
        </div>
      </div>

      <!-- SECTION 07: NOTICE MANAGEMENT -->
      <div class="section-box" style="margin-bottom: 0;">
        <div class="section-header">
          <span class="section-badge">Section 07</span>
          <h2 class="section-title">Notice Maintenance (Reorder, Edit, Delete)</h2>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 110px;">Operation</th>
              <th style="width: 100px;">Control</th>
              <th>Standard Operating Procedure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Reorder Priority</strong></td>
              <td><span class="btn-badge">▲ Up / ▼ Down</span></td>
              <td>Click the Up or Down arrow to modify document ranking. The topmost item (#1) appears first on the live candidate portal.</td>
            </tr>
            <tr>
              <td><strong>Modify Notice</strong></td>
              <td><span class="btn-badge">Edit</span></td>
              <td>Click <b>Edit</b> to update headlines, modify category tags, adjust dates, or replace the attached PDF file. Click <i>"Update Notice"</i> to save.</td>
            </tr>
            <tr>
              <td><strong>Remove Notice</strong></td>
              <td><span class="btn-badge danger">Delete</span></td>
              <td>Click <b>Delete</b>. Confirm the browser prompt (<i>"Are you sure you want to delete this notice?"</i>) to permanently remove the document.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="doc-footer">
      <span>Indira College of Engineering &amp; Management • Admissions Office</span>
      <span>ICEM/SOP/ADM-2026/01 • Classification: Internal Administrative</span>
      <span>Page 3 of 3</span>
    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync(path.join(assetsDir, 'sop.html'), htmlContent, 'utf-8');
console.log('HTML written successfully to:', path.join(assetsDir, 'sop.html'));

const pdfPath = path.join(root, 'ICEM_Admission_CMS_User_Manual_SOP.pdf');
if (fs.existsSync(pdfPath)) {
  try { fs.unlinkSync(pdfPath); } catch (e) {}
}

const htmlFileUrl = `file:///${path.join(assetsDir, 'sop.html').replace(/\\/g, '/')}`;
const chromeExe = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

if (!fs.existsSync(tempProfileDir)) {
  fs.mkdirSync(tempProfileDir, { recursive: true });
}

console.log('Printing HTML to PDF using Google Chrome headless...');
try {
  execFileSync(chromeExe, [
    '--headless=new',
    `--user-data-dir=${tempProfileDir}`,
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdfPath}`,
    htmlFileUrl
  ], { stdio: 'inherit' });
} catch (err) {
  console.error('execFileSync error:', err);
}

if (fs.existsSync(pdfPath)) {
  const stats = fs.statSync(pdfPath);
  console.log('\n======================================================');
  console.log(' SUCCESS! Created Official Minimalist SOP PDF:');
  console.log(` File: ICEM_Admission_CMS_User_Manual_SOP.pdf`);
  console.log(` Size: ${(stats.size / 1024).toFixed(1)} KB`);
  console.log(` Location: ${pdfPath}`);
  console.log('======================================================\n');
} else {
  console.error('Failed to create PDF.');
}
