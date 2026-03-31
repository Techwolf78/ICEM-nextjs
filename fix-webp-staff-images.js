const fs = require('fs');
const files = [
  'src/components/FAQSections/FAQSectionAIDS.jsx',
  'src/components/FAQSections/FAQComp.jsx',
  'src/components/FAQSections/FAQENTC.jsx',
  'src/components/FAQSections/FAQMECH.jsx',
  'src/components/FAQSections/FAQMCA.jsx',
  'src/components/FAQSections/FAQMBA.jsx',
  'src/components/FAQSections/FAQIT.jsx',
  'src/components/FAQSections/FAQIMCA.jsx',
  'src/components/FAQSections/FAQIMBA.jsx',
  'src/components/FAQSections/FAQCivil.jsx',
  'src/components/FAQSections/FAQMTechComp.jsx',
  'src/components/FAQSections/FAQMTechMech.jsx',
  'src/app/programs/fye/page.jsx',
];
for (const file of files) {
  if (!fs.existsSync(file)) {
    console.warn('Missing', file);
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  const updated = content.replace(/(image\s*:\s*["'`][^"'`]+?)\.(jpe?g|png|avif|JPG)(["'`])/g, '$1.webp$3');
  if (updated !== content) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log('Updated', file);
  } else {
    console.log('No change', file);
  }
}
