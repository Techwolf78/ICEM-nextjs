"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ================== DATA SECTION ==================
const teachingStaff = [
  {
    sn: 1,
    id: "472",
    name: "Dr. Manjusha Tatiya",
    designation: "Head of Department",
    department: "AIDS",
    qualification: "Ph.D., M.E",
    doj: "01/07/2009",
    dob: "30/01/1983",
    image: "/faculty/final_icem_branding/aids/dr_manjusha.webp",
  },
  {
    sn: 2,
    id: "TBD",
    name: "Dr. Sachin Babar",
    designation: "Professor",
    department: "AIDS",
    qualification: "Ph.D., M.E",
    doj: "12/05/2026",
    dob: "03/06/1980",
    image: "/programs/AIDS/sachin_babar.webp",
  },
  {
    sn: 3,
    id: "3096",
    name: "Prof. Deepa Padwal",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "M.E, B.E",
    doj: "01/07/2023",
    dob: "09/02/1992",
    image: "/faculty/final_icem_branding/aids/Mrs. Deepa KadamPadwal.webp",
  },
  {
    sn: 4,
    id: "3101",
    name: "Prof. Pallavi Chavan",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "Pursuing Ph.D., M.Tech",
    doj: "17/07/2023",
    dob: "17/09/1996",
    image: "/faculty/final_icem_branding/aids/Pallavi Chavan.webp",
  },
  {
    sn: 5,
    id: "3170",
    name: "Prof. Monika Patil",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "Pursuing Ph.D., M.E",
    doj: "01/07/2025",
    dob: "10/05/1992",
    image: "/faculty/final_icem_branding/aids/Mrs. Monika Patil.webp",
  },
  {
    sn: 6,
    id: "TBD",
    name: "Prof. Tushar Mahore",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "Pursuing Ph.D., M.Tech",
    doj: "16/02/2026",
    dob: "03/05/1991",
    image: "/faculty/final_icem_branding/aids/tushar_mahore.webp",
  },
  {
    sn: 7,
    id: "TBD",
    name: "Prof. Tanuja Pade",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "Pursuing Ph.D., M.Tech",
    doj: "13/02/2026",
    dob: "16/03/1993",
    image: "/faculty/final_icem_branding/aids/tanuja_pande.webp",
  },
  {
    sn: 8,
    id: "3267",
    name: "Prof. Vivek Sahaguara",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "M.Tech, B.E",
    doj: "23/01/2026",
    dob: "18/12/1990",
    image: "/faculty/final_icem_branding/aids/Vivek Sohagora.webp",
  },
];

const newDetailedStaff = [];

const oldDetailedStaff = [
  {
    sn: 7,
    id: "TBD2",
    name: "Mr. Tushar R. Mahore",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Data Science",
    qualification: "• Pursuing PhD, Symbiosis Institute of Technology, Pune\n• M.Tech (CSE), GCOEA, Distinction\n• B.Tech (CSE), PRPCE, First Class",
    experience: "08",
    interest: "1. Natural Language Processing\n2. Data Science & Analytics\n3. Programming Languages & Paradigms",
    research: "Total: 16\nScopus Indexed: 10\nJournals: 02\nInternational Conferences / Proceedings: 07\nBook Chapters: 02\nOthers (Preprints / Review Papers): 05",
    image: "/faculty/final_icem_branding/aids/tushar_mahore.webp",
  },
  {
    sn: 9,
    id: "TBD3",
    name: "Mrs. Tanuja Pande",
    designation: "Assistant Professor",
    department: "AI & DS",
    qualification: "• Pursuing PhD, Symbiosis Institute of Technology, Pune\n• M. Tech( CSE) RTM University Nagpur(Gold Medal)\n• B. tech (CSE) RTM University Nagpur (Distinction)",
    experience: "2.9 Yrs",
    interest: "AI & ML , Image processing, Biomedical Programming Languages",
    research: "• Scopus Indexed Papers: 04",
    image: "/faculty/final_icem_branding/aids/tanuja_pande.webp",
  },
];

const newDetailedLabStaff = [
  {
    sn: 10,
    id: "TBD",
    name: "Ms. Apeksha Giri",
    designation: "Tech. Assistant",
    department: "AIDS",
    qualification: "M.E (E&TC)",
    doj: "01/07/2024",
    dob: "27/04/1983",
    image: "/programs/AIDS/apeksha_giri.webp",
  },
  {
    sn: 11,
    id: "TBD",
    name: "Mr. Prasad Jadhav",
    designation: "Lab Assistant",
    department: "AIDS",
    qualification: "Bachelor Of Computer Applications",
    doj: "01/07/2024",
    dob: "10/08/2000",
    image: "/faculty/final_icem_branding/aids/Mr. Prasad Jadhav.webp",
  },
];

const sanctionIntake = [
  {
    program: "B.Tech AIDS Engineering",
    intake: "60 Seats",
    duration: "4 Years",
    type: "Full Time",
  },
];

const eligibilityCriteria = [
  {
    program: "Eligibility Criteria for Admission to First Year Engineering 2024-25",
    text: `For details about First Year Engineering Admission and Eligibility Criteria, refer https://cetcell.mahacet.org/`,
  },

  {
    program: "Maharashtra State Candidature Candidates",
    text: `• The Candidate should be an Indian National.
• Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/ Biology/ Technical Vocational subject/ Computer Science/ Information Technology/ Informatics Practices/ Agriculture/ Engineering Graphics/ Business Studies.

• Obtained at least 45% marks (40% for Backward Class, EWS & PwD candidates of Maharashtra) in the above subjects taken together.

• AND appeared in all CET subjects with a non-zero score.

OR

• Passed Diploma in Engineering and Technology with at least 45% marks (40% for reserved categories).`,
  },

  {
    program:
      "All India Candidature Candidates, Jammu & Kashmir and Ladakh Migrant Candidates",
    text: `• The Candidate should be an Indian National.

• Passed HSC with Physics and Mathematics as compulsory subjects along with one of Chemistry/ Biotechnology/ Biology/ Technical Vocational subject/ Computer Science/ IT/ Informatics Practices/ Agriculture/ Engineering Graphics/ Business Studies.

• Obtained at least 45% marks (40% for reserved categories from Maharashtra).

• Must have a non-zero positive score in JEE Main B.E./B.Tech
OR
• Non-zero score in MHT-CET (JEE score preferred over CET score).

OR

• Passed Diploma in Engineering and Technology with at least 45% marks (40% for reserved categories).`,
  },

  {
    program:
      "NRI / OCI / PIO / Children of Indian workers in Gulf countries / Foreign Nationals",
    text: `• Passed HSC or equivalent examination with Physics & Mathematics and one additional subject (Chemistry/ Biotechnology/ Biology/ Technical Vocational subject/ Computer Science/ IT/ Informatics Practices/ Agriculture/ Engineering Graphics/ Business Studies).

• Obtained at least 45% marks in these subjects taken together.`,
  },

  {
    program: "Additional Information",
    text: `• Any other eligibility criteria declared by the appropriate authority under the Act.`,
  },
];


const feeInfo = `Fee structure for Academic Year 2024-25 will be updated soon.
Please contact the admission office for the latest and exact fee details.`;

const syllabusList = [
  {
    id: "be",
    label: "BE AIDS Engineering (2019 Pattern) Syllabus",
    pdf: "/programs/AIDS/BESyllabus.pdf",
  },
];

const courseStructureImages = [
  {
    id: "fe1",
    label: "FE SEM 1 Course Structure",
    src: "/programs/AIDS/FESem1.jpg",
  },
  {
    id: "fe2",
    label: "FE SEM 2 Course Structure",
    src: "/programs/AIDS/FESem2.jpg",
  },
  {
    id: "se1",
    label: "SE SEM 1 Course Structure",
    src: "/programs/AIDS/SYBtechSem1.jpg",
  },
  {
    id: "se2",
    label: "SE SEM 2 Course Structure",
    src: "/programs/AIDS/SYBtechSem2.jpg",
  },
  {
    id: "te1",
    label: "TE SEM 1 Course Structure",
    src: "/programs/AIDS/TESem1.jpg",
  },
  {
    id: "te2",
    label: "TE SEM 2 Course Structure",
    src: "/programs/AIDS/TESem2.jpg",
  },
  {
    id: "be1",
    label: "BE SEM 1 Course Structure",
    src: "/programs/AIDS/BESem1.jpg",
  },
  {
    id: "be2",
    label: "BE SEM 2 Course Structure",
    src: "/programs/AIDS/BESem2.jpg",
  },
];

const laboratories = [
  {
    srNo: 1,
    labNo: "A-413",
    labName: "Programming Lab",
    totalPcs: 25,
    configuration:
      "AMD Ryzen 5 8500G w/Radeon 740M Graphics (3.55 GHz), Installed RAM - 16.0 GB (15.1 usable), 64-bit Operating System, x64-based Processor",
    software:
      "Ubuntu OS: Python, g++, Lamp Server, jdk, flex, yacc, sbcl, nasm, TASM, samba, wireshark",
  },
  {
    srNo: 2,
    labNo: "A-414",
    labName: "Artificial Intelligence and Research Lab",
    totalPcs: 25,
    configuration:
      "Lenovo V520-15IKL, RAM - 8 GB, Intel Core-i7 07700x8, Graphics - NV106, Hard Disk - 1TB, OS Type - 64-bit",
    software:
      "Ubuntu OS: Python, g++, Lamp Server, jdk, flex, yacc, sbcl, nasm, TASM, samba, wireshark",
  },
  {
    srNo: 3,
    labNo: "A-415",
    labName: "Operating System & Networking Lab",
    totalPcs: 25,
    configuration:
      "Processor - 12th Gen Intel(R) Core(TM) i5-12500 (3.00 GHz), Installed RAM - 8.00 GB (7.69 GB usable), System type - 64-bit operating system, x64-based processor",
    software:
      "Ubuntu OS: Python, g++, Lamp Server, jdk, flex, yacc, sbcl, nasm, TASM, samba, wireshark, packet tracer",
  },
  {
    srNo: 4,
    labNo: "A-416",
    labName: "Project Lab",
    totalPcs: 25,
    configuration:
      "Processor - 12th Gen Intel(R) Core(TM) i5-12500 (3.00 GHz), Installed RAM - 8.00 GB (7.69 GB usable), System type - 64-bit operating system, x64-based processor",
    software:
      "Ubuntu OS: Python, g++, Lamp Server, jdk, flex, yacc, sbcl, nasm, TASM, samba, wireshark, packet tracer",
  },
];

const academicPerformance = [
  {
    year: "2024-2025",
    semester: "Sem I",
    results: [
      {
        label: "SE Result Analysis",
        href: "/programs/AIDS/SE AI and DS sem I 24-25 (1).pdf",
      },
      {
        label: "TE Result Analysis",
        href: "/programs/AIDS/TE AI and DS sem I 24-25.pdf",
      },
    ],
  },
  {
    year: "2024-2025",
    semester: "Sem II",
    results: [
      {
        label: "SE Result Analysis",
        href: "/programs/AIDS/SE Result Analysis-2024-25-SEM II_Final.pdf",
      },
      {
        label: "TE Result Analysis",
        href: "/programs/AIDS/TE Result Analysis-2024-25-SEM II -Final.pdf",
      },
    ],
  },
  {
    year: "2025-2026",
    semester: "Sem I",
    results: [
      {
        label: "SY Result Analysis",
        href: "/programs/AIDS/SY Result Analysis-2025-26-SEM I .pdf",
      },
      {
        label: "TE Result Analysis",
        href: "/programs/AIDS/TE Result Analysis-2025-26-SEM I.pdf",
      },
      {
        label: "BE Result Analysis",
        href: "/programs/AIDS/BE Result Analysis-2025-26-SEM I.pdf",
      },
    ],
  },
];

const overviewData = [
  {
    title: "About Department",
    content: (
      <div className="space-y-4">
        <p>
          Welcome to the{" "}
          <strong>Department of Artificial Intelligence and Data Science (AIDS)</strong>{" "}
          at <strong>Indira College of Engineering and Management (ICEM)</strong>,
          a dynamic center of innovation, research, and technological advancement.
          As a part of an <strong>Autonomous Institute</strong>, the department
          enjoys the flexibility to design and continuously update its curriculum
          in line with the latest industry trends, emerging technologies, and
          global academic standards. This autonomy enables the department to
          introduce{" "}
          <strong>
            industry-oriented courses, value-added certifications, project-based
            learning, and multidisciplinary electives
          </strong>
          , ensuring that students are well-prepared for the ever-evolving
          technological landscape.
        </p>

        <p>
          The department is dedicated to nurturing skilled professionals and
          future leaders in the rapidly growing domains of{" "}
          <strong>Artificial Intelligence and Data Science</strong>. With a strong
          emphasis on both theoretical foundations and practical applications, the
          curriculum encompasses areas such as{" "}
          <strong>
            Machine Learning, Deep Learning, Data Analytics, Big Data
            Technologies, Computer Vision, Natural Language Processing, Cloud
            Computing, Data Engineering, and Business Intelligence
          </strong>
          .
        </p>

        <p>
          Our faculty team comprises experienced academicians, researchers, and
          industry experts who mentor students through innovative teaching
          methodologies, experiential learning, and interdisciplinary research
          activities. The department is equipped with{" "}
          <strong>
            state-of-the-art computing laboratories, AI and Data Analytics labs,
            high-performance computing resources, and IOT Lab
          </strong>
          , creating a vibrant and technology-driven learning environment.
        </p>

        <p>
          Beyond academics, the department strongly encourages holistic
          development through active participation in professional bodies and
          student chapters such as <strong>CSI, ISTE, IEEE</strong>. Students
          actively participate in{" "}
          <strong>
            hackathons, coding competitions, data science challenges, research
            conferences, workshops, technical festivals, and innovation
            competitions at state, national, and international levels
          </strong>
          , consistently bringing laurels to the institution.
        </p>

        <p>
          To enhance employability and professional competence, the department
          offers specialized training in{" "}
          <strong>
            programming, aptitude development, soft skills, cloud technologies,
            data visualization tools, competitive coding, placement preparation,
            higher education guidance, and GATE coaching
          </strong>
          . The autonomous curriculum further facilitates{" "}
          <strong>
            industry internships, mini and major projects, research-based
            learning, and outcome-based education
          </strong>
          , enabling students to acquire both technical expertise and
          problem-solving abilities.
        </p>

        <p>
          With an excellent placement record and strong industry connect, our
          graduates have secured positions in leading{" "}
          <strong>
            multinational companies, AI startups, analytics firms, and research
            organizations
          </strong>
          , while many pursue higher studies and research at reputed universities
          across the world. The{" "}
          <strong>Department of Artificial Intelligence and Data Science at ICEM</strong>{" "}
          continues to be a <strong>center of excellence</strong>, empowering
          students with the knowledge, skills, and confidence to become{" "}
          <strong>
            innovators, data scientists, AI engineers, entrepreneurs, and
            responsible technology leaders in the digital era
          </strong>
          .
        </p>
      </div>
    ),
  },
];

const visionMissionData = {
  vision:
    "To revolutionize pool of knowledge and develop innovative, ethical, responsible, and global leaders who will transform Institute and community services.",
  mission: [
    "To offer an industry ready curriculum and happy learning environment, enabling our learners to become responsible citizens with holistic skill sets, to solve worldwide challenges.",
    "To inculcate impactful research through global collaborations with faculties, students & industry, using comprehensive technology and infrastructure to nurture innovation.",
    "To be a contributor towards a sustainable future by promoting conservation, prosperity, and social impact.",
  ],
};

const programOutcomes = [
  {
    code: "PO1",
    text: "Apply the knowledge of mathematics, science, Engineering fundamentals, and an Engineering specialization to the solution of complex Engineering problems.",
  },
  {
    code: "PO2",
    text: "Identify, formulate, review research literature and analyze complex Engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and Engineering sciences.",
  },
  {
    code: "PO3",
    text: "Design solutions for complex Engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and Environmental considerations.",
  },
  {
    code: "PO4",
    text: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
  },
  {
    code: "PO5",
    text: "Create, select, and apply appropriate techniques, resources, and modern Engineering and IT tools including prediction and modeling to complex Engineering activities with an understanding of the limitations.",
  },
  {
    code: "PO6",
    text: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practices.",
  },
  {
    code: "PO7",
    text: "Understand the impact of the professional Engineering solutions in societal and Environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
  },
  {
    code: "PO8",
    text: "Apply ethical principles and commit to professional ethics and responsibilities and norms of Engineering practice.",
  },
  {
    code: "PO9",
    text: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
  },
  {
    code: "PO10",
    text: "Communicate effectively on complex Engineering activities with the Engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  },
  {
    code: "PO11",
    text: "Demonstrate knowledge and understanding of the Engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary Environments.",
  },
  {
    code: "PO12",
    text: "Recognize the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.",
  },
];

const programSpecificOutcomes = [
  {
    code: "PSO1",
    title: "Professional Skills",
    text: "The ability to understand, analyze and develop computer programs in the areas related to algorithms, system software, multimedia, web design, big data analytics, and networking for efficient design of computer-based systems of varying complexities.",
  },
  {
    code: "PSO2",
    title: "Problem-Solving Skills",
    text: "The ability to apply standard practices and strategies in software project development using open-ended programming environments to deliver a quality product for business success.",
  },
  {
    code: "PSO3",
    title: "Successful Career and Entrepreneurship",
    text: "The ability to employ modern computer languages, environments, and platforms in creating innovative career paths to be an entrepreneur, and a zest for higher studies.",
  },
];

const programEducationalObjectives = [
  {
    code: "PEO1",
    text: "Drive excellence in education through an innovative curriculum and dynamic learning environment, to craft responsible leaders to shape a promising future.",
  },
  {
    code: "PEO2",
    text: "Develop impactful research through global collaborations for knowledge discovery and infrastructure to boost innovation.",
  },
  {
    code: "PEO3",
    text: "Preparing graduates with effective managerial skill and entrepreneurial mindset set with collaborative teamwork.",
  },
  {
    code: "PEO4",
    text: "Contribute towards a sustainable future talent by promoting environment, nurturing prosperity, and positive social impact in our ecosystem.",
  },
];

export default function FAQSectionAIDS() {
  const [active, setActive] = useState("About AIDS Department");

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of Artificial Intelligence & Data Science
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with AI knowledge and industry-ready
            Data Science skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* LEFT SIDEBAR */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-1 md:space-y-2 border border-gray-100 sticky top-24">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-lg">
              AIDS Overview
            </h3>

            {[
              "About AIDS Department",
              "Vision Mission",
              "POs, PSOs, PEOs",
              "FRA - Fee Structure",
              "Sanction Intake",
              "Eligibility Criteria",
              "Admission Procedure",
              "Staff",
              "Syllabus & Course Structure",
              "Laboratories",
              "Academic Performance",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActive(tab);

                  // 🔥 Auto-scroll only on mobile screens
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth < 1024
                  ) {
                    setTimeout(() => {
                      const target =
                        document.getElementById("aids-right-content");
                      if (target) {
                        const yOffset = -160;
                        const y =
                          target.getBoundingClientRect().top +
                          window.scrollY +
                          yOffset;

                        window.scrollTo({
                          top: y,
                          behavior: "smooth",
                        });
                      }
                    }, 120);
                  }
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div
            id="aids-right-content"
            className="lg:col-span-3 bg-white rounded-xl shadow-sm p-4 md:p-8 border border-gray-100"
          >
            <div className="mb-4 md:mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>

            {/* ================= OVERVIEW ================= */}
            {active === "About AIDS Department" && (
              <div className="space-y-3 md:space-y-4">
                {overviewData.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg">
                    <details className="group" {...(i === 0 && { open: true })}>
                      <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg list-none">
                        <h4 className="font-semibold text-secondary text-lg">
                          {item.title}
                        </h4>
                        <span className="transition-transform group-open:rotate-180">
                          ▼
                        </span>
                      </summary>

                      <div className="p-3 md:p-4 text-gray-700 whitespace-pre-line">
                        {item.content}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            )}

            {/* ================= VISION & MISSION ================= */}
            {active === "Vision Mission" && (
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-blue-50/60 p-4 md:p-6">
                  <h4 className="text-xl font-bold text-secondary mb-3">
                    Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {visionMissionData.vision}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6">
                  <h4 className="text-xl font-bold text-secondary mb-4">
                    Mission
                  </h4>
                  <ul className="space-y-3 text-gray-700 leading-relaxed">
                    {visionMissionData.mission.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* ================= POS, PSOS & PEOS ================= */}
            {active === "POs, PSOs, PEOs" && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-4">
                    Programme Outcomes (POs)
                  </h4>
                  <div className="space-y-3">
                    {programOutcomes.map((item) => (
                      <div
                        key={item.code}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                      >
                        <h5 className="font-bold text-secondary mb-2">
                          {item.code}
                        </h5>
                        <p className="text-gray-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-secondary mb-4">
                    Program Specific Outcomes (PSOs)
                  </h4>
                  <div className="space-y-3">
                    {programSpecificOutcomes.map((item) => (
                      <div
                        key={item.code}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                      >
                        <h5 className="font-bold text-secondary mb-2">
                          {item.code} {item.title}
                        </h5>
                        <p className="text-gray-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-secondary mb-4">
                    Program Educational Objectives (PEOs)
                  </h4>
                  <div className="space-y-3">
                    {programEducationalObjectives.map((item) => (
                      <div
                        key={item.code}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                      >
                        <h5 className="font-bold text-secondary mb-2">
                          {item.code}
                        </h5>
                        <p className="text-gray-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ================= LABORATORIES ================= */}
            {active === "Laboratories" && (
              <div className="space-y-4">
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 border-b font-semibold">Sr. No.</th>
                        <th className="p-3 border-b font-semibold">Lab No.</th>
                        <th className="p-3 border-b font-semibold">Lab Name</th>
                        <th className="p-3 border-b font-semibold">Total PCs</th>
                        <th className="p-3 border-b font-semibold">Configuration</th>
                        <th className="p-3 border-b font-semibold">Software Installed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {laboratories.map((lab) => (
                        <tr key={lab.labNo} className="border-b align-top hover:bg-gray-50">
                          <td className="p-3 font-medium">{lab.srNo}</td>
                          <td className="p-3 font-medium text-secondary">{lab.labNo}</td>
                          <td className="p-3 font-medium">{lab.labName}</td>
                          <td className="p-3">{lab.totalPcs}</td>
                          <td className="p-3 min-w-[260px] text-gray-700 leading-relaxed">
                            {lab.configuration}
                          </td>
                          <td className="p-3 min-w-[260px] text-gray-700 leading-relaxed">
                            {lab.software}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50/60">
                        <td className="p-3 font-bold text-secondary" colSpan={3}>
                          Total PCs
                        </td>
                        <td className="p-3 font-bold text-gray-800">100</td>
                        <td className="p-3" colSpan={2}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= ACADEMIC PERFORMANCE ================= */}
            {active === "Academic Performance" && (
              <div className="space-y-5">
                {academicPerformance.map((group) => (
                  <div
                    key={`${group.year}-${group.semester}`}
                    className="rounded-xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm"
                  >
                    <h4 className="text-xl font-bold text-secondary mb-4">
                      {group.year} {group.semester}
                    </h4>
                    <div className="space-y-3">
                      {group.results.map((result) => (
                        <div
                          key={result.href}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
                        >
                          <h5 className="font-semibold text-gray-800">
                            {result.label}
                          </h5>
                          <a
                            href={result.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-secondary text-white rounded-md text-center"
                          >
                            View / Download
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ================= STAFF ================= */}
            {active === "Staff" && (() => {
              const StaffPhoto = ({ src, alt }) => {
                const [currentSrc, setCurrentSrc] = useState(src || "/faculty/newFaculty/placeholder.avif");
                const [hasError, setHasError] = useState(false);

                return hasError ? (
                  <div className="w-32 h-40 flex items-center justify-center rounded-lg mb-4 bg-gray-100 shadow-sm border border-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full p-2 text-gray-300"
                      aria-hidden="true"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                      <path d="M18.36 16.46a7 7 0 00-12.72 0c-.35.58.1 1.28.77 1.28h11.38c.66 0 1.12-.7.57-1.28z" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-32 h-40 overflow-hidden rounded-lg mb-4 bg-gray-100 shadow-sm border border-gray-100">
                    <Image
                      src={currentSrc}
                      alt={alt}
                      width={128}
                      height={160}
                      className="w-full h-full object-cover object-top"
                      onError={() => {
                        setHasError(true);
                      }}
                    />
                  </div>
                );
              };

              return (
                <div className="space-y-12">
                  {/* Teaching Staff Section */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-6 border-l-4 border-secondary pl-4">
                      Teaching Staff
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4">
                      {teachingStaff.map((staff, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300"
                        >
                          <StaffPhoto src={staff.image} alt={staff.name} />

                          <div className="w-full flex-1 flex flex-col pt-4">
                            <h4 className="font-bold text-gray-900 mb-1 leading-snug">
                              {staff.name}
                            </h4>
                            <p className="text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">
                              {staff.designation}
                            </p>

                            <div className="space-y-4 text-left pt-4 border-t border-gray-100">
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Qualification:
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {staff.qualification}
                                </span>
                              </div>
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Joining Date:
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {staff.doj}
                                </span>
                              </div>
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Birth Date:
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {staff.dob}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* New Detailed Teaching Staff */}
                      {newDetailedStaff.map((staff, index) => (
                        <motion.div
                          key={`detailed-${index}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (index + teachingStaff.length) * 0.05, duration: 0.3 }}
                          className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300"
                        >
                          <StaffPhoto src={staff.image} alt={staff.name} />

                          <div className="w-full flex-1 flex flex-col pt-4">
                            <h4 className="font-bold text-gray-900 mb-1 leading-snug">
                              {staff.name}
                            </h4>
                            <p className="text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">
                              {staff.designation}
                            </p>

                            <div className="space-y-4 text-left pt-4 border-t border-gray-100">
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Qualification:
                                </span>
                                <span className="text-gray-700 font-medium whitespace-pre-line text-[13px] leading-tight block mt-1">
                                  {staff.qualification}
                                </span>
                              </div>
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Joining Date:
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {staff.doj}
                                </span>
                              </div>
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Birth Date:
                                </span>
                                <span className="text-gray-700 font-medium text-[13px] leading-tight block">
                                  {staff.dob}
                                </span>
                              </div>
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Research:
                                </span>
                                <span className="text-gray-700 font-medium text-[12px] leading-snug whitespace-pre-line block mt-1">
                                  {staff.research}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Lab Assistant Staff Section */}
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-6 border-l-4 border-secondary pl-4">
                      Lab Assistant
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4">
                      {newDetailedLabStaff.map((staff, index) => (
                        <motion.div
                          key={`lab-${index}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300"
                        >
                          <StaffPhoto src={staff.image} alt={staff.name} />

                          <div className="w-full flex-1 flex flex-col pt-4">
                            <h4 className="font-bold text-gray-900 mb-1 leading-snug">
                              {staff.name}
                            </h4>
                            <p className="text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">
                              {staff.designation}
                            </p>

                            <div className="space-y-4 text-left pt-4 border-t border-gray-100">
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Qualification:
                                </span>
                                <span className="text-gray-700 font-medium whitespace-pre-line text-[13px] leading-tight block mt-1">
                                  {staff.qualification}
                                </span>
                              </div>
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Exp (Years):
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {staff.experience}
                                </span>
                              </div>
                              <div className="text-[14px]">
                                <span className="text-gray-400 font-bold uppercase mr-1">
                                  Interest:
                                </span>
                                <span className="text-gray-700 font-medium text-[13px] leading-tight block">
                                  {staff.interest}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* ================= SANCTION INTAKE ================= */}
            {active === "Sanction Intake" && (
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2 md:p-3 border-b font-semibold">Program</th>
                      <th className="p-2 md:p-3 border-b font-semibold">Intake</th>
                      <th className="p-2 md:p-3 border-b font-semibold">Duration</th>
                      <th className="p-2 md:p-3 border-b font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sanctionIntake.map((row, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-2 md:p-3 font-medium">{row.program}</td>
                        <td className="p-2 md:p-3">{row.intake}</td>
                        <td className="p-2 md:p-3">{row.duration}</td>
                        <td className="p-2 md:p-3">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ================= ELIGIBILITY CRITERIA ================= */}
            {active === "Eligibility Criteria" && (
              <div className="space-y-3 md:space-y-4">
                {eligibilityCriteria.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg">
                    <details className="group" {...(i === 0 && { open: true })}>
                      <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg list-none font-semibold text-secondary">
                        {item.program}
                        <span className="transition-transform group-open:rotate-180">
                          ▼
                        </span>
                      </summary>

                      <div className="p-3 md:p-4 text-gray-700 whitespace-pre-line">
                        {item.text}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            )}

            {/* ================= ADMISSION PROCEDURE ================= */}
            {active === "Admission Procedure" && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h5 className="font-semibold text-gray-800">Institute Level /ACAP Admission Round Procedure</h5>
                <a
                  href="/pdfs/AdmissionProcedure.pdf"
                  target="_blank"
                  className="px-4 py-2 bg-secondary text-white rounded-md mt-2 sm:mt-0"
                >
                  View / Download
                </a>
              </div>
            )}

            {/* ================= FRA - FEE STRUCTURE ================= */}
            {active === "FRA - Fee Structure" && (
  <div className="space-y-3 md:space-y-4">
    {/* FRA Fee Structure A.Y. 2026-27 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
      <h5 className="font-semibold text-gray-800">
        FRA Fee Structure (A.Y. 2026-27)
      </h5>
      <a
        href="/fees/fra_fees_2026-27.pdf"
        target="_blank"
        className="px-4 py-2 bg-secondary text-white rounded-md mt-2 sm:mt-0"
      >
        View / Download
      </a>
    </div>

    {/* Fee Structure 26-27 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
      <h5 className="font-semibold text-gray-800">
        Fee Structure (2026-27)
      </h5>
      <a
        href="/programs/AIDS/fra_fees_26-27.pdf"
        target="_blank"
        className="px-4 py-2 bg-secondary text-white rounded-md mt-2 sm:mt-0"
      >
        View / Download
      </a>
    </div>

    {/* Fee Structure 25–26 */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
      <h5 className="font-semibold text-gray-800">
        Fee Structure (2025–26)
      </h5>
      <a
        href="/programs/Computer/Feestructure2526.pdf"
        target="_blank"
        className="px-4 py-2 bg-secondary text-white rounded-md mt-2 sm:mt-0"
      >
        View / Download
      </a>
    </div>

    {/* FRA Document */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
      <h5 className="font-semibold text-gray-800">
        FRA Document
      </h5>
      <a
        href="/programs/Computer/NewFRA.pdf"
        target="_blank"
        className="px-4 py-2 bg-secondary text-white rounded-md mt-2 sm:mt-0"
      >
        View / Download
      </a>
    </div>
  </div>
)}


            {/* ================= SYLLABUS & COURSE STRUCTURE ================= */}
            {active === "Syllabus & Course Structure" && (
              <div className="space-y-4 md:space-y-8">
                {/* PDFs */}
                <div className="space-y-3 md:space-y-4">
                  {syllabusList.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <h5 className="font-semibold text-gray-800">
                        {item.label}
                      </h5>
                      <a
                        href={item.pdf}
                        target="_blank"
                        className="px-4 py-2 bg-secondary text-white rounded-md mt-2 sm:mt-0"
                      >
                        View / Download
                      </a>
                    </div>
                  ))}
                </div>

                {/* Course Structure Images */}
                <div>
                  <h4 className="font-semibold text-secondary mb-2 md:mb-3">
                    Course Structure
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {courseStructureImages.map((img) => (
                      <div
                        key={img.id}
                        className="border rounded-lg shadow-sm bg-white overflow-hidden"
                      >
                        <div className="relative w-full h-48">
                          <a href={img.src} target="_blank">
                            <Image
                              src={img.src}
                              alt={img.label}
                              fill
                              className="object-contain p-2"
                            />
                          </a>
                        </div>
                        <div className="p-3 text-sm">{img.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
