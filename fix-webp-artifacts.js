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
files.forEach((file) => {
  if (!fs.existsSync(file)) {
    console.warn('Missing', file);
    return;
  }
  let c = fs.readFileSync(file, 'utf8');
  let nc = c.replace(/(\.webp)\$4(,?)/g, '$1"$2');
  if (nc !== c) {
    fs.writeFileSync(file, nc, 'utf8');
    console.log('Fixed', file);
  }
});
