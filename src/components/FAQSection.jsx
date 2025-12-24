"use client"

import React, { useState } from "react";

// ✅ UPDATE all PDF imports to use public folder paths
const BE_Syllabus = "/BEComp.pdf";
const TE_Syllabus = "/TEComp.pdf";
const SE_Syllabus = "/SEComp.pdf";
const SY_BTech = "/BTech.pdf";
const MTech_2024 = "/MTECHFinal.pdf";
const MTech_Syllabus = "/MTECHComp.pdf";

// ✅ UPDATE admission PDFs
const AdmissionAdvertisement = "/BEComp.pdf";
const NoticeACAP = "/TEComp.pdf";
const InstituteLevelAdmission = "/SEComp.pdf";
const VacancyACAP = "/BTech.pdf";
const BTechAdmission = "/MTECHFinal.pdf";
const MBAAdmission = "/MTECHComp.pdf";

// ✅ UPDATE image imports to use Next.js Image component and public folder
import Image from "next/image";

// Remove these import statements and use public folder paths directly:
const FESEM1 = "/FESEM1.png";
const FESEM2 = "/FESEM2.png";
const SESEM1 = "/SESEM1.png";
const SESEM2 = "/SESEM2.png";
const TESEM1 = "/TESEM1.png";
const TESEM2 = "/TESEM2.png";
const BESEM1 = "/BESEM1.png";
const BESEM2 = "/BESEM2.png";


const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeSyllabus, setActiveSyllabus] = useState(null);
  const [activeStructure, setActiveStructure] = useState(null);
  const [activeAdmission, setActiveAdmission] = useState(null);
  const [activeAboutUs, setActiveAboutUs] = useState(null);
  const [activeTab, setActiveTab] = useState("About Us"); // Default tab

  const faqCategories = [
    "About Us",
    "Documents Required",
    "Admission Procedure",
    "Fee Structure",
    "Scholarship",
    "Course Structure & Credits",
    "Facilities",
  ];

  // ✅ Scholarship Table Data
  const scholarshipTableData = [
    {
      category: "ST/SC/Neo-Buddhist/VJNT",
      eligibility:
        "• For SC/ST- No income limit\n• For others income < 8.00 Lacs",
      scholarship: "Tuition Fee and Exam Fees",
    },
    {
      category: "SBC",
      eligibility: "Parent's annual income < 8.00 Lacs.",
      scholarship: "Tuition Fee and Exam Fees",
    },
    {
      category: "OBC",
      eligibility: "Parent's annual income < 8.00 Lacs.",
      scholarship: "50% of Tuition and Exam Fee",
    },
    {
      category: "EBC",
      eligibility:
        "• EBC students admitted through (CAP)\n• Parent's annual income < 8.00 Lacs.",
      scholarship: "50% of Tuition and Exam Fee",
    },
    {
      category: "Dr. Panjabrao Deshmukh (Hostel Scheme)",
      eligibility:
        "Students whose parents are certified as a marginal farmer or whose parents are registered laborers.",
      scholarship:
        "• For child of Registered Labor / Alpabhudharak (Marginal Land Holder) - For institute in MMRDA - Rs.30,000/- for 10 months.\n• For Annual Family income up to 8 Lakhs - For institute in MMRDA- Rs.10,000/- for 10 months.",
    },
    {
      category:
        "Minority Communities (Muslim, Buddhist, Christian, Sikh, Parsi, Jain & Jews Community)",
      eligibility: "Parent's annual income < 8.00 Lacs.",
      scholarship:
        "Scholarship Amount Maximum Rs.25,000/- Per Annum or Actual Tuition Fees whichever is less",
    },
    {
      category: "TFWS",
      eligibility: "Parent's annual income less than Rs. 8 Lakh",
      scholarship: "Waiver is limited to the tuition fee",
    },
    {
      category: "Indira Scholar Scholarship",
      eligibility:
        "Applicable to Meritorious students of Civil and Mechanical only (For First year and DSE students)",
      scholarship: "Please Contact: Prof. Ashwin Dharme 9764408057",
    },
  ];

  // ✅ Admission Advertisement PDF Data
  const admissionAdvertisementData = [
    {
      id: "advertisement",
      name: "Admission Advertisement",
      pdf: AdmissionAdvertisement,
    },
    {
      id: "notice-acap",
      name: "Notice ACAP IL Admission Reporting",
      pdf: NoticeACAP,
    },
    {
      id: "institute-level",
      name: "Institute Level & Against CAP Admission",
      pdf: InstituteLevelAdmission,
    },
    {
      id: "vacancy-acap",
      name: "Vacancy of ACAP and Institute Level Admission",
      pdf: VacancyACAP,
    },
    {
      id: "btech-admission",
      name: "Institute Level & Against CAP Admission (BTech)",
      pdf: BTechAdmission,
    },
    {
      id: "mba-admission",
      name: "Institute Level & Against CAP Admission (MBA)",
      pdf: MBAAdmission,
    },
    { id: "notice", name: "Notice", pdf: NoticeACAP },
  ];

  // ✅ IL & ACAP Merit List PDF Data
  const meritListData = [
    { id: "btech", name: "BTECH Merit List", pdf: BTechAdmission },
    { id: "mtech", name: "MTECH Merit List", pdf: MTech_Syllabus },
    { id: "mba", name: "MBA Merit List", pdf: MBAAdmission },
    { id: "mca", name: "MCA Merit List", pdf: AdmissionAdvertisement },
    {
      id: "bba-mba",
      name: "BBA/MBA Integrated Merit List",
      pdf: InstituteLevelAdmission,
    },
    { id: "bca-mca", name: "BCA/MCA Integrated Merit List", pdf: VacancyACAP },
  ];

  // ✅ Overview Accreditation Questions
  const faqData = [
    {
      question: "About Department",
      answer: `Keeping in view the emerging IT industry challenges, the computer department at ICEM is known for its academic excellence along with professional learning flexibility for turning the students and providing enhanced training in advanced technologies. The students are trained in core domain areas like Computational Complexity Theory, Applications and Databases, Computer Graphics, Programming and Algorithms.

The Computer Engineering Department at ICEM is well equipped with the Highly Qualified and Skilled Teaching Staff with Industrial Experience, Sophisticated Laboratories and state-of-art infrastructure.

The Department focusses on inculcating in-depth knowledge of all fields of Computer Engineering as well as imparting knowledge of discipline, teamwork, communication skills and an ability to work with a diverse set of constraints. The Department regularly arranges guest lectures, seminars and workshops to train the students in all these aspects. The trainers are from Academia as well as from Industry.

The Department also provides extra inputs through in-house certification programs, aptitude, soft skills, technical training & GATE coaching for Final Year students. To build the overall personality of every student the department also arranges Hackathon, Tech-Fest, Paper Presentations, various competitions which are for the students and organized by the students.`,
    },
    {
      question: "Programs Offered",
      answer: `Department of Computer Engineering was established in 2007 by offering undergraduate program (B.Tech) and postgraduate program (M.Tech) in Computer Engineering. The program is affiliated to University of Pune, recognized by Govt. of Maharashtra & All India Council of Technical Education (AICTE) New Delhi.`,
    },
    {
      question: "VISION",
      answer: `To become an acclaimed center of excellence by rendering modern technology, academics and research for creating holistic, socio-economic professionals with interdisciplinary potential.`,
    },
    {
      question: "MISSION",
      answer: `To foster strong fundamental concepts to students and inspire them to find creative solutions with critical thinking and disciplined time managed environment.
To impart knowledge and skill based education in collaboration with industry, academia and research organizations.
To develop a center of excellence and setup a research laboratory to develop software applications for the society with the association of industry.
To enlighten students with the latest technologies through carefully designed training modules with the alliance of Alumni and Industry as a part of value added education.
To nurture and nourish effective communication, interpersonal skills, and create awareness of ethical and social responsibilities.`,
    },
  ];

  // ✅ Admission Related Data
  const admissionData = {
    sanctionIntake: [
      {
        program: "B.Tech Computer Engineering",
        intake: "180 Seats",
        duration: "4 Years",
        type: "Full Time",
      },
      {
        program: "M.Tech Computer Engineering",
        intake: "24 Seats",
        duration: "2 Years",
        type: "Full Time",
      },
    ],
    eligibilityCriteria: [
      {
        program: "B.Tech Computer Engineering",
        criteria: `• Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subject.
• Obtained at least 45% marks (40% in case of candidate belonging to reserved category) in the above subjects taken together.
• Valid score in JEE Main/MHT-CET or equivalent entrance examination.`,
      },
      {
        program: "M.Tech Computer Engineering",
        criteria: `• Passed Bachelor's degree or equivalent in the relevant field.
• Obtained at least 50% marks (45% in case of candidate belonging to reserved category) in the qualifying examination.
• Valid score in GATE or equivalent entrance examination.`,
      },
    ],
    documentsRequired: [
      "10th Standard Mark Sheet & Passing Certificate",
      "12th Standard Mark Sheet & Passing Certificate",
      "Graduation Mark Sheets & Degree Certificate (for M.Tech)",
      "Transfer Certificate / School Leaving Certificate",
      "Migration Certificate (if applicable)",
      "Domicile Certificate",
      "Nationality Certificate / Birth Certificate",
      "Aadhar Card",
      "Passport Size Photographs",
      "Caste Certificate (if applicable)",
      "Caste Validity Certificate (if applicable)",
      "Non-Creamy Layer Certificate (if applicable)",
      "Gap Certificate (if applicable)",
      "JEE Main/MHT-CET/GATE Score Card",
      "Allotment Letter from Admission Authority",
    ],
    admissionProcedure: [
      "Register for the respective entrance examination (JEE Main/MHT-CET for B.Tech, GATE for M.Tech)",
      "Participate in the Centralized Admission Process (CAP) conducted by Maharashtra State",
      "Fill the option form for college preference",
      "Get allotted to Indira College of Engineering & Management through CAP rounds",
      "Complete the document verification process",
      "Pay the admission fees to confirm the seat",
      "Report to the college for final admission formalities",
    ],
    scholarship: [
      {
        name: "Government Scholarships",
        details: `• EBC Scholarship
• OBC Scholarship
• SC/ST Scholarship
• NT/DNT Scholarship
• Minority Scholarship`,
      },
      {
        name: "State Government Schemes",
        details: `• Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna
• Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna
• Post Matric Scholarship Scheme`,
      },
      {
        name: "Institute Scholarships",
        details: `• Merit-based scholarships for top performers
• Fee concession for economically weaker sections
• Sports quota scholarships
• Special scholarships for female students`,
      },
    ],
  };

  // ✅ Syllabus Data
  const syllabusData = [
    {
      category: "Syllabus for Computer Engineering (SPPU Courses)",
      items: [
        {
          id: "be",
          name: "BE Computer Engineering (2019 Course) Pattern Syllabus",
          pdf: BE_Syllabus,
        },
        {
          id: "te",
          name: "TE Computer Engineering (2019 Course) Pattern Syllabus",
          pdf: TE_Syllabus,
        },
        {
          id: "se",
          name: "SE Computer Engineering (2019 Course) Pattern Syllabus",
          pdf: SE_Syllabus,
        },
      ],
    },
    {
      category: "Syllabus for Computer Engineering (Autonomous Courses)",
      items: [
        { id: "sybtech", name: "SY BTech 2025 course", pdf: SY_BTech },
        {
          id: "mtech2024",
          name: "MTech Computer Engineering 2024 course",
          pdf: MTech_2024,
        },
        {
          id: "mtechsyl",
          name: "M Tech Computer Engineering Syllabus",
          pdf: MTech_Syllabus,
        },
      ],
    },
  ];

  // ✅ Fee Structure Data
  const feeStructureData = [
    {
      id: "fee-structure",
      label: "Fee Structure (2025–26)",
      pdf: "/programs/Computer/Feestructure2526.pdf",
    },
    {
      id: "fee-fra",
      label: "FRA Document",
      pdf: "/programs/Computer/NewFRA.pdf",
    },
    {
      id: "fra-2025",
      label: "FRA 2025-26",
      pdf: "/fees/FRA 2025.pdf",
    },
    {
      id: "institute-fra",
      label: "Institute Level Admission FRA Fees",
      pdf: "/fees/Insttitute level admission FRA FEEs.pdf",
    },
  ];

  // ✅ Course Structure (Images)
  const courseStructure = [
    { id: "fe1", name: "FE SEM 1 Course Structure", img: FESEM1 },
    { id: "fe2", name: "FE SEM 2 Course Structure", img: FESEM2 },
    { id: "se1", name: "SE SEM 1 Course Structure", img: SESEM1 },
    { id: "se2", name: "SE SEM 2 Course Structure", img: SESEM2 },
    { id: "te1", name: "TE SEM 1 Course Structure", img: TESEM1 },
    { id: "te2", name: "TE SEM 2 Course Structure", img: TESEM2 },
    { id: "be1", name: "BE SEM 1 Course Structure", img: BESEM1 },
    { id: "be2", name: "BE SEM 2 Course Structure", img: BESEM2 },
  ];

  // ✅ Facilities Data (Labs)
  const labs = [
    {
      id: 1,
      name: "Programming Lab-I",
      pcs: 17,
      config:
        "ASUS Intel Core i5, 8GB RAM, 512 SSD, 19.5' LED | Lenovo Think Center Core i7, 8GB RAM, 1TB HDD",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Flex, Mysql, Nasm, TASM, Samba, Eclipse, Libgraph, yacc",
    },
    {
      id: 2,
      name: "Programming Lab-II",
      pcs: 20,
      config: "Lenovo Think Center Core i7, 8GB RAM, 1TB HDD, 19.5' LED",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Flex, Mysql, Nasm, TASM, Samba, Eclipse, Libgraph, yacc",
    },
    {
      id: 3,
      name: "Artificial Intelligence and Research Lab-I",
      pcs: 29,
      config: "Lenovo Think Center Core i7, 8GB RAM, 1TB HDD, 19.5' LED",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Tensorflow, Keras, OpenGL, yacc",
    },
    {
      id: 4,
      name: "Artificial Intelligence and Research Lab-II",
      pcs: 20,
      config:
        "HP Pro Tower 280 G9 Intel i5-12500, 8GB RAM, 512GB NVME HDD, 19.5' LED",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Mysql, Netbeans, Android Studio, yacc",
    },
    {
      id: 5,
      name: "Project Lab",
      pcs: 22,
      config: "HCL Infinity Intel C2D, 2GB RAM, 320GB HDD, 18.5' Monitor",
      software: "UBUNTU OS: Python, JDK, C++, G++, NASM, MongoDB, Mysql",
    },
    {
      id: 6,
      name: "Database Management System Lab",
      pcs: 38,
      config:
        "Lenovo Think Center Core i7, 8GB RAM, 1TB HDD | HCL Infinity Intel C2D, 2GB RAM, 320GB HDD",
      software:
        "UBUNTU OS: Python, JDK, G++, Lamp Server, Flex, SBCL, Mysql, Nasm, TASM, NS2, Oracle, Samba, Eclipse, Libgraph, yacc",
    },
    {
      id: 7,
      name: "iOS (Apple) Lab",
      pcs: 10,
      config: "Apple M1 Chip with 8-Core CPU & 7-Core GPU, 8GB RAM, 256GB SSD",
      software: "MAC OS",
    },
    {
      id: 8,
      name: "Operating System and Networking Lab",
      pcs: 39,
      config:
        "ASUS Intel Core i5, 8GB RAM, 512 SSD | HCL Infinity Intel C2D, 2GB RAM, 320GB HDD",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Mysql, Packet Tracer, Wireshark, Samba, Eclipse, Libgraph",
    },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] text-black py-4 sm:py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 sm:mb-6 md:mb-10 text-center">
          Department of First Year Engineering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* LEFT MENU */}
          <div className="bg-white rounded-lg shadow-sm p-2 sm:p-3 md:p-4 space-y-1 text-xs sm:text-sm font-medium text-gray-700">
            {faqCategories.map((tab, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveSyllabus(null);
                  setActiveStructure(null);
                  setActiveAdmission(null);
                  setActiveAboutUs(null);
                }}
                className={`px-2 sm:px-3 py-2 rounded cursor-pointer hover:bg-gray-100 transition-all ${
                  activeTab === tab
                    ? "border-l-4 border-secondary bg-gray-50 font-semibold text-secondary"
                    : ""
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-6">
            {/* ✅ About Us */}
            {activeTab === "About Us" && (
              <div>
                <div
                  onClick={() =>
                    setActiveAboutUs(activeAboutUs === "about" ? null : "about")
                  }
                  className="flex justify-between items-center px-2 sm:px-3 md:px-4 py-2 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-md"
                >
                  <span className="font-semibold text-secondary">
                    About First Year Engineering
                  </span>
                  <span className="text-xl font-bold text-secondary">
                    {activeAboutUs === "about" ? "−" : "+"}
                  </span>
                </div>
                {activeAboutUs === "about" && (
                  <div className="p-2 sm:p-3 md:p-4 bg-white whitespace-pre-line">
                    The First Year Engineering program at Indira College of Engineering and Management is the foundational cornerstone of your engineering journey. Designed to build a robust base in core scientific and engineering principles, this year focuses on subjects like Physics, Chemistry, Mathematics, Programming, and Engineering Graphics.
                  </div>
                )}
              </div>
            )}

            {/* ✅ Documents Required */}
            {activeTab === "Documents Required" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-3 md:mb-4">
                  Documents Required for Admission
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {admissionData.documentsRequired.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 p-2 sm:p-3 border rounded-lg bg-gray-50"
                    >
                      <span className="text-secondary font-bold">•</span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Admission Procedure */}
            {activeTab === "Admission Procedure" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-3 md:mb-4">
                  Admission Procedure
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {admissionData.admissionProcedure.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg bg-gray-50"
                    >
                      <span className="bg-secondary text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Fee Structure */}
            {activeTab === "Fee Structure" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-3 md:mb-4">
                  Fee Structure
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {feeStructureData.map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 mb-3 md:mb-0">
                        <h5 className="font-semibold text-gray-800">{item.label}</h5>
                      </div>
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors text-sm font-medium text-center"
                      >
                        View / Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Scholarship - Updated with Table */}
            {activeTab === "Scholarship" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-3 md:mb-4">
                  Scholarship Schemes
                </h3>

                {/* Scholarship Table */}
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <h4 className="font-semibold mb-1 sm:mb-2 md:mb-3 text-secondary">
                    Scholarship Details
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border p-2 sm:p-3 text-left text-secondary">
                            Scholarship Category
                          </th>
                          <th className="border p-2 sm:p-3 text-left text-secondary">
                            Scholarship Eligibility
                          </th>
                          <th className="border p-2 sm:p-3 text-left text-secondary">
                            Nature of Scholarship
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {scholarshipTableData.map((scholarship, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border p-2 sm:p-3 font-medium text-secondary">
                              {scholarship.category}
                            </td>
                            <td className="border p-2 sm:p-3 whitespace-pre-line">
                              {scholarship.eligibility}
                            </td>
                            <td className="border p-2 sm:p-3 whitespace-pre-line">
                              {scholarship.scholarship}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-2 sm:p-3 md:p-4">
                  <p className="text-sm text-secondary mb-2">
                    <strong>Note:</strong> Above information is for basic
                    understanding.
                  </p>
                  <p className="text-sm text-secondary mb-2">
                    Exact present rules / reforms, documents required and
                    eligibility is available on Scholarship Schemes:
                    <a
                      href="https://mahadbtmahait.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary underline ml-1 font-medium"
                    >
                      https://mahadbtmahait.gov.in/
                    </a>
                  </p>
                  <p className="text-sm text-secondary">
                    If applied to scholarship without complete documents,
                    application will be rejected and candidates has to pay full
                    fees.
                  </p>
                </div>

                {/* Existing Scholarship Accordions */}
                {admissionData.scholarship.map((scheme, index) => (
                  <div key={index} className="border rounded-md mb-2 sm:mb-3 md:mb-4 mt-2 sm:mt-3 md:mt-4">
                    <div
                      onClick={() =>
                        setActiveAdmission(
                          activeAdmission === `scholarship-${index}`
                            ? null
                            : `scholarship-${index}`
                        )
                      }
                      className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <span className="font-semibold text-secondary">
                        {scheme.name}
                      </span>
                      <span className="text-xl font-bold text-secondary">
                        {activeAdmission === `scholarship-${index}` ? "−" : "+"}
                      </span>
                    </div>
                    {activeAdmission === `scholarship-${index}` && (
                      <div className="p-2 sm:p-3 md:p-4 bg-white whitespace-pre-line">
                        {scheme.details}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Facilities */}
            {activeTab === "Facilities" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-3 md:mb-4">
                  Department of Computer Engineering Laboratories
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-300 text-left">
                    <thead className="bg-gray-100 font-semibold">
                      <tr>
                        <th className="border p-2 text-secondary">Sr. No.</th>
                        <th className="border p-2 text-secondary">Lab Name</th>
                        <th className="border p-2 text-secondary">Total PCs</th>
                        <th className="border p-2 text-secondary">
                          Configuration
                        </th>
                        <th className="border p-2 text-secondary">
                          Software Installed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {labs.map((lab) => (
                        <tr key={lab.id} className="hover:bg-gray-50">
                          <td className="border p-2">{lab.id}</td>
                          <td className="border p-2 font-medium text-secondary">
                            {lab.name}
                          </td>
                          <td className="border p-2">{lab.pcs}</td>
                          <td className="border p-2">{lab.config}</td>
                          <td className="border p-2">{lab.software}</td>
                        </tr>
                      ))}
                      <tr className="font-bold bg-gray-100">
                        <td
                          className="border p-2 text-center text-secondary"
                          colSpan={2}
                        >
                          Total
                        </td>
                        <td className="border p-2 text-secondary">195</td>
                        <td
                          className="border p-2 text-secondary"
                          colSpan={2}
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ✅ Course Structure */}
            {activeTab === "Course Structure & Credits" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2 sm:mb-3 md:mb-4">
                  Course Structure & Credit Details
                </h3>
                {courseStructure.map((item) => (
                  <div key={item.id} className="border rounded-md mb-2">
                    <div
                      onClick={() =>
                        setActiveStructure(
                          activeStructure === item.id ? null : item.id
                        )
                      }
                      className="flex justify-between items-center px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <span className="text-secondary">{item.name}</span>
                      <span className="text-xl font-bold text-secondary">
                        {activeStructure === item.id ? "−" : "+"}
                      </span>
                    </div>
                    {activeStructure === item.id && (
                      <div className="p-2 sm:p-3 bg-gray-50 flex justify-center">
                        <div className="relative w-full max-w-4xl h-[600px] sm:h-[700px]">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-contain rounded-md border"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
