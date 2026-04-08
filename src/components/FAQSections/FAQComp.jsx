"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProgramStaff from "../ProgramStaff";

// ================== STAFF DATA ==================
const staffData = [
  {
    sn: 0,
    id: "3266",
    name: "Dr. Poorna Shankar",
    designation: "Dean AI & HoD Computer Engineering",
    department: "Computer",
    qualification: "MCA, M.Phil, Ph.D, M.Tech",
    doj: "01/12/2021",
    dob: "12/06/1973",
    image: "/faculty/final_icem_branding/comp/poorna_shankar.avif",
  },
  {
    sn: 1,
    id: "496",
    name: "Mrs. Deepali Shashikant Dhadwad",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "ME",
    doj: "27/07/2009",
    dob: "25/04/1986",
    image: "/faculty/final_icem_branding/comp/Mrs. Deepali Dhadwad.webp",
  },
  {
    sn: 2,
    id: "2448",
    name: "Dr. Shwetkranti Nanasaheb Taware",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "ME Ph.D",
    doj: "01/07/2023",
    dob: "09/08/1983",
    image: "/faculty/final_icem_branding/comp/Dr. Shwetkranti Taware.webp",
  },
  {
    sn: 3,
    id: "2032",
    name: "Dr. Soumitra Shibshankar Das",
    designation: "Dean Academics VP",
    department: "Computer",
    qualification: "BE ME Ph.D",
    doj: "28/09/2021",
    dob: "31/10/1974",
    image: "/faculty/final_icem_branding/comp/soumitra_das.webp",
  },
  {
    sn: 4,
    id: "3088",
    name: "Mrs. Anita Atul Patil",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "ME",
    doj: "01/07/2024",
    dob: "25/12/1994",
    image: "/faculty/final_icem_branding/comp/Mrs. Anita Patil.webp",
  },
  {
    sn: 5,
    id: "3089",
    name: "Miss Pragati Sambhaji Malusare",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "BE M.Tech",
    doj: "01/07/2024",
    dob: "01/10/1997",
    image: "/faculty/final_icem_branding/comp/Mrs. Pragati Malusare.webp",
  },
  {
    sn: 6,
    id: "2288",
    name: "Mrs. Dipali Nikhil Junankar",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "B.E ME",
    doj: "01/11/2022",
    dob: "14/04/1980",
    image: "/faculty/final_icem_branding/comp/Mrs. Dipali Junankar.webp",
  },
  {
    sn: 7,
    id: "2366",
    name: "Dr. Sunil Damodar Rathod",
    designation: "Associate Professor",
    department: "Computer",
    qualification: "BE ME Ph.D",
    doj: "01/02/2023",
    dob: "18/10/1970",
    image: "/faculty/final_icem_branding/comp/Dr. Sunil Rathod.webp",
  },
  {
    sn: 8,
    id: "3095",
    name: "Mrs. Savitri Ashok Mote",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "B.E M.Tech",
    doj: "01/07/2024",
    dob: "02/06/1990",
    image: "/faculty/final_icem_branding/comp/Mrs. Savitri Pawar.webp",
  },
  {
    sn: 9,
    id: "3097",
    name: "Ms. Rupali Pravin Adhau",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "B.E ME",
    doj: "01/07/2024",
    dob: "25/06/1988",
    image: "/faculty/final_icem_branding/comp/Mrs. Rupali Adhau.webp",
  },
  {
    sn: 10,
    id: "3098",
    name: "Mrs. Shraddha Sandip Suryawanshi",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "B.E ME",
    doj: "01/07/2024",
    dob: "05/06/1996",
    image: "/faculty/final_icem_branding/comp/Mrs. Shraddha Suryawanshi.webp",
  },
  {
    sn: 11,
    id: "3111",
    name: "Dr. Malayaj Kumar",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "BE M.Tech Ph.D",
    doj: "26/08/2024",
    dob: "01/08/1985",
    image: "/faculty/final_icem_branding/comp/malayaj.webp",
  },
  {
    sn: 12,
    id: "3112",
    name: "Mrs. Minal Sunil Patil",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "Dip B.E ME",
    doj: "29/08/2024",
    dob: "13/01/1989",
    image: "/faculty/final_icem_branding/comp/Mrs. Minal Patil.webp",
  },
  {
    sn: 13,
    id: "3214",
    name: "Mr. Abhijit Hanumantrao Khadke",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "BE ME",
    doj: "09/08/2025",
    dob: "03/10/1973",
    image: "/faculty/final_icem_branding/comp/Abhijit Khadke.webp",
  },
  {
    sn: 14,
    id: "3265",
    name: "Ms. Vidya Ritesh Dhoke",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "BE IT M.Tech Computer",
    doj: "05/01/2026",
    dob: "02/04/1991",
    image: "/faculty/final_icem_branding/comp/Ms. Vidya Ritesh Dhoke.webp",
  },
  {
    sn: 15,
    id: "3262",
    name: "Ms. Tanuja Balkrishna Dhumal",
    designation: "Teaching Assistant",
    department: "Computer",
    qualification: "BE Computer Engg MSc Appeared",
    doj: "14/01/2026",
    dob: "21/12/2000",
    image: "/faculty/final_icem_branding/comp/Ms. Tanuja Dhumal.webp",
  },
];

// ================== AUTONOMY SYLLABUS DATA ==================
const autonomySyllabusList = [
  {
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/programs/Computer/se_2019.pdf",
  },
  {
    id: "ty-structure",
    label: "TY B.Tech (2025 Pattern) Structure",
    pdf: "/programs/Computer/ty_bTech_structure.pdf",
  },
  {
    id: "fy-structure",
    label: "Fourth Year B.Tech (2025 Pattern) Structure",
    pdf: "/programs/Computer/fourth_year_btech_structure.pdf",
  },
];

// ================== SPPU SYLLABUS DATA ==================
const sppuSyllabusList = [
  {
    id: "te",
    label: "TE Computer Engineering (2019 Pattern) Syllabus",
    pdf: "/programs/Computer/te_2019.pdf",
  },
  {
    id: "be",
    label: "BE Computer Engineering (2019 Pattern) Syllabus",
    pdf: "/programs/Computer/be_2019.pdf",
  },
];

// ================== ACADEMIC CALENDAR DATA ==================
const academicCalendarList = [
  {
    id: "compac",
    label: "Computer Academic Calendar",
    pdf: "/programs/Computer/COMPAC.pdf",
  },
];

// ================== TIME TABLE DATA ==================
const timeTableList = [
  {
    id: "bett",
    label: "BE Time Table",
    pdf: "/programs/Computer/BETT.pdf",
  },
  {
    id: "tett",
    label: "TE Time Table",
    pdf: "/programs/Computer/TETT.pdf",
  },
  {
    id: "sett",
    label: "SE Time Table",
    pdf: "/programs/Computer/SETT.pdf",
  },
];

// ================== ACADEMIC PERFORMANCE DATA ==================
const academicPerformanceList = {
  "2024-25": [
    {
      id: "sem1-2024-25",
      label: "Semester 1 - Academic Year 2024-25",
      pdf: "/programs/Computer/SE.pdf", // Using existing PDF
    },
    {
      id: "sem2-2024-25",
      label: "Semester 2 - Academic Year 2024-25",
      pdf: "/programs/Computer/TE.pdf", // Using existing PDF
    },
  ],
};

// ================== RESEARCH DATA ==================
const researchList = [
  {
    id: "research",
    label: "Research Publications & Projects",
    pdf: "/programs/Computer/CompResearch.pdf", // Using existing PDF
  },
];

// ================== INNOVATIVE PEDAGOGY DATA ==================
const innovativePedagogyList = [
  {
    id: "pedagogy",
    label: "Innovative Pedagogy Methods",
    pdf: "/programs/Computer/InnovativePedagogy.pdf", // Using existing PDF
  },
];

// ================== LABORATORY DATA ==================
const labData = [
  {
    srNo: 1,
    name: "Programming Language & Software Engineering Lab - I",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 and Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 2,
    name: "Programming Language & Software Engineering Lab - II",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 and Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 3,
    name: "Data Science Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 4,
    name: "Project & Research Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 5,
    name: "Project Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 and Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 6,
    name: "Database Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 with standard configurations with Internet Connectivity",
    software:
      "Windows and Linux OS with all Open Source Software's and Open Source Databases and RDBMS.",
  },
  {
    srNo: 7,
    name: "iOS (Apple) Lab",
    pcs: "10",
    equipment:
      "Apple M1 with standard configurations with Internet Connectivity",
    software: "iOS Operating System with all Mac Compliant Softwares.",
  },
  {
    srNo: 8,
    name: "Networking & Cyber Security Lab",
    pcs: "25",
    equipment:
      "Core2Duo with standard configurations with Internet Connectivity",
    software: "Chrome OS Flex and Linux with Open Source Software's.",
  },
  {
    srNo: 9,
    name: "System Programming & Operating System Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 10,
    name: "PG Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
];

// ================== IMAGE PLACEHOLDERS ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`,
}));

// ================== MAIN COMPONENT ==================
export default function FAQSectionComputer() {
  const [active, setActive] = useState("FRA - Fee Structure");
  const [syllabusTab, setSyllabusTab] = useState("autonomy");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'fee-structure') {
        setActive("FRA - Fee Structure");
        setTimeout(() => {
          const element = document.getElementById('fee-structure');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  }, []);

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "Welcome to the Department of Computer Engineering at Indira College of Engineering and Management, a vibrant hub of innovation, academic excellence, and professional growth. The department is committed to producing competent and creative engineers who can meet the dynamic challenges of the global IT industry. With a strong focus on both theoretical and practical learning, the department offers comprehensive training in core domains such as Programming, Algorithms, Databases, Artificial Intelligence, Cyber security, and Computational Theory and Data Structures.",

          "Our faculty members are a blend of experienced academicians and industry professionals who mentor students through innovative teaching methods, research projects, and hands-on learning. The department is equipped with state-of-the-art laboratories, modern computing facilities, and smart classrooms that foster a rich learning environment. We take immense pride in our collaborations with AWS Academy, Robotic Process Academy, UiPath, and CSI Cyber security, which provide students access to global certifications, internships, and real-world project experiences.",

          "Beyond academics, the department encourages holistic development through active participation in professional bodies such as CSI, ISTE, IEEE, and the Google Developer Students Club (GDSC). Students regularly engage in hackathons, coding competitions, seminars, workshops, and national as well as international events and state and national sports, consistently bringing laurels to the institution. To enhance employability, specialized training Programmes in aptitude, soft skills, technical certifications, Guidance for Higher Studies and GATE coaching are integrated into the curriculum.",

          "With a remarkable placement record for the past five years, our graduates are excelling in top multinational companies and pursuing higher studies at reputed universities worldwide. The Department of Computer Engineering at ICEM continues to be a center of excellence empowering students with the knowledge, skills, and confidence to become leaders and innovators in the digital era.",
        ],

        "Programs Offered": [
          "The Department of Computer Engineering was established in 2007, offering both Undergraduate (B.Tech) and Postgraduate (M.Tech) Programmes in Computer Engineering. The Programmes are affiliated to Savitribai Phule Pune University (SPPU), recognized by the Government of Maharashtra, and approved by the All India Council for Technical Education (AICTE), New Delhi. The institute proudly holds the status of an Autonomous Institute under SPPU, enabling the department to design and implement a dynamic, industry-oriented curriculum that meets global standards and fosters innovation, research, and excellence in technical education",
        ],
      },
    },

    "POs, PSOs, PEOs": {
      type: "accordion",
      content: {
        "Programme Outcomes (POs)": [
          "Apply Knowledge of Mathematics, Science and Engineering: Relate & apply fundamental\nknowledge of mathematics, science and engineering paradigm to real world problems.",
          "Problem Analysis: Analyze, identify and formulate tangible products/services/solutions/\napplications with computing requirements.",
          "Design and Development of algorithms : Design, implement, and evaluate a computer – based\nsolution applicable to public health, ecological safety, human resource management.",
          "Analysis design and modeling of complex problems: Understand management and engineering\nprinciples meets need of atomization of industry.",
          "Usage of latest open source tools and technologies: Select & use current techniques, skills, and\ntools to solve societal, health, safety, cultural issues by analyzing the local and global impact.",
          "Social contribution of Engineers: Distinguish a problem; design a solution for the needs of the\nsociety in health, safety, public, private sectors applying relevant engineering practices.",
          "Environment and Sustainability: Understand the affecting factors thru' various fields of engineering\nto the environment context, develop the solutions which would support green Environment initiative.",
          "Professional Development and Ethics: Inculcate ethical values amongst students to develop best\nengineering practices.",
          "Commitment at Individual level and as a team: Work effectively in multidisciplinary environment\nas individual & diverse team structure too.",
          "Communication skills: Learn an emphatic communication to function effective on teams,\nincluding diversified and multidisciplinary goal.",
          "Project Planning & Management for Complex Solutions: Use of modeling techniques to design\nexperiments, by analyzing and interpreting data",
          "Self-learning: Recognize the need of continuous expertized development through\nlifelong learning.",
        ],
        "Programme Specific Outcomes (PSOs)": [
          "Professional Skills: The ability to understand, analyze and develop high-end applications to meet\nthe current industrial requirements using varied algorithmic strategies and system software.",
          "Problem-Solving Skills: The ability to apply standard practices and strategies in software project\ndevelopment using open-ended programming environments to deliver a quality product.",
          "Successful Career and Entrepreneurship: The ability to employ modern computer languages,\nenvironments, and platforms in creating innovative career paths to be an entrepreneur.",
        ],
        "Programme Educational Objectives (PEOs)": [
          "To build graduates for successful careers in Computer Engineering those are able to serve state\nand regional industries, government agencies, or national and international industries.",
          "To build graduates that identifies the underlying scientific foundation of Computer Aided\nInnovation and also to evaluate their effectiveness and efficiency",
          "To build graduates who engage in self-development activities through further professional studies\nand personal research that will allow them to adapt technological challenges.",
          "To build graduates in computer engineering who are acquiring knowledge of the discipline,\nteamwork, communication skills and an ability to work with a diverse set of constraints.",
        ],
      },
    },

    "FRA - Fee Structure": {
  type: "syllabus",
  content: [
    {
      id: "fee-structure",
      label: "Fee Structure (2025–26)",
      pdf: "/programs/Computer/Feestructure2526.pdf",
    },
    {
      id: "fra-proposal-2026",
      label: "FRA Fees Approval proposal 2026-27",
      pdf: "/pdfs/FRA%20Proposal%202026-27.pdf",
    },
    {
      id: "fee-fra",
      label: "FRA Document",
      pdf: "/programs/Computer/NewFRA.pdf",
    },
    {
      id: "fra-2025",
      label: "FRA 2025-26",
      pdf: "/fees/FRA%202025.pdf",
    },
    {
      id: "institute-fra",
      label: "Institute Level Admission FRA Fees",
      pdf: "/fees/Insttitute%20level%20admission%20FRA%20FEEs.pdf",
    },
  ],
},


    "Admission Procedure": {
      type: "syllabus",
      content: [
        {
          id: "admission",
          label: "Institute Level /ACAP Admission Round Procedure",
          pdf: "/pdfs/AdmissionProcedure.pdf",
        },
      ],
    },

    "Sanctioned Intake": {
      type: "table",
      content: [
        {
          program: "B.Tech Computer Engineering",
          intake: "150 Seats",
          duration: "4 Years",
          type: "Full Time",
        },
      ],
    },

    "Eligibility Criteria": {
      type: "accordion",
      content: {
        "Eligibility Criteria for Admission to First Year Engineering 2024-25": [
          "For details about First Year Engineering Admission and Eligibility Criteria, refer https://cetcell.mahacet.org/",
        ],
        "Maharashtra State Candidature Candidates": [
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State), in the above subjects taken together; and the Candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority.",
          "Or",
          "Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
        ],
        "All India Candidature Candidates, Union Territory of Jammu and Kashmir and Union Territory of Ladakh Migrant Candidature Candidates": [
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State) in the above subjects taken together; and should obtain non zero positive score in JEE (Main) B.E./B.Tech or the candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority. However, preference shall be given to the candidate obtaining non zero positive score in JEE (Main) B.E./B.Tech over the candidates who obtained non zero score in CET.",
          "Or",
          "Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
        ],
        "NRI / OCI / PIO, Children of Indian workers in the Gulf countries and Foreign National Candidature Candidates": [
          "The candidate should have passed the HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies, and obtained at least 45 % marks in the above subjects taken together.",
        ],
        "Additional Information": [
          "Any other criterion declared from time to time by the appropriate authority as defined under the Act.",
        ],
      },
    },

    Research: {
      type: "syllabus",
      content: researchList,
      title: "Research Publications & Projects",
    },

    "Academic Performance": {
  type: "syllabus",
  content: [
    {
      id: "ap-1",
      label: "SE - A.Y. 2024-25 SEM I",
      pdf: "/programs/Computer/SEAcademicPerformance5.pdf",
    },
    {
      id: "ap-2",
      label: "TE - A.Y. 2024-25 SEM I",
      pdf: "/programs/Computer/TEAcademicPerformance4.pdf",
    },
    {
      id: "ap-3",
      label: "BE - A.Y. 2024-25 SEM I",
      pdf: "/programs/Computer/BEAcademicPerformance6.pdf",
    },
    {
      id: "ap-4",
      label: "SE - A.Y. 2024-25 SEM II",
      pdf: "/programs/Computer/SEAcademicPerformance2.pdf",
    },
    {
      id: "ap-5",
      label: "TE - A.Y. 2024-25 SEM II",
      pdf: "/programs/Computer/TEAcademicPerformance1.pdf",
    },
    {
      id: "ap-6",
      label: "BE - A.Y. 2024-25 SEM II",
      pdf: "/programs/Computer/BEAcademicPerformance3.pdf",
    },
  ],
},



    "Innovative Pedagogy": {
      type: "syllabus",
      content: innovativePedagogyList,
      title: "Innovative Pedagogy Methods",
    },

    "Syllabus & Course Structure": {
      type: "syllabus",
      content: {
        tabs: [
          {
            id: "autonomy",
            label: "Autonomy Structure and Syllabus",
            list: autonomySyllabusList,
          },
          {
            id: "sppu",
            label: "SPPU Syllabus",
            list: sppuSyllabusList,
          },
        ],
      },
    },

    Laboratories: {
      type: "labs",
      content: labData,
    },

    "Academic Calendar": {
      type: "syllabus",
      content: academicCalendarList,
      title: "Academic Calendars",
    },

    "Time Table": {
      type: "syllabus",
      content: timeTableList,
      title: "Time Tables",
    },

    // Achievements: {
    //   type: "notice",
    //   content:
    //     "Achievements information is currently under development and will be available soon.",
    // },
    "Staff": {
      type: "staff",
      content: staffData,
    },
  };

  const tabs = Object.keys(sectionContent);

  // Render different content types
  const renderContent = (contentData) => {
    switch (contentData.type) {
      case "text":
        return (
          <div className="prose prose-gray max-w-none">
            {contentData.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .split(/(\*\*.*?\*\*)/g)
                  .map((part, i) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={i} className="text-secondary font-semibold">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
              </p>
            ))}
          </div>
        );

      case "list":
        return (
          <ul className="space-y-3">
            {contentData.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-secondary mr-3 mt-1">•</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );

      case "accordion":
        return (
          <div className="space-y-3 md:space-y-4">
            {Object.entries(contentData.content).map(([title, items]) => (
              <div key={title} className="border border-gray-200 rounded-lg">
                <details className="group" open={title.includes("Eligibility")}>
                  <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">
                      {title}
                    </h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="p-3 md:p-4 pt-2 space-y-2 md:space-y-3">
                    {items.map((item, index) =>
                      typeof item === "object" && item.pdf ? (
                        <a
                          key={index}
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary font-medium underline hover:text-secondary/80"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <p
                          key={index}
                          className="flex items-start text-gray-700 text-justify [text-align-last:left] [hyphens:auto] tracking-tight leading-relaxed whitespace-pre-line"
                        >
                          <span className="text-secondary mr-2 mt-1 shrink-0">•</span>
                          <span>{item}</span>
                        </p>
                      )
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        );

      case "table":
        return (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="p-2 md:p-3 border-b font-semibold">Programme</th>
                  <th className="p-2 md:p-3 border-b font-semibold">Intake</th>
                  <th className="p-2 md:p-3 border-b font-semibold">Duration</th>
                  <th className="p-2 md:p-3 border-b font-semibold">Type</th>
                </tr>
              </thead>

              <tbody>
                {contentData.content.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 border-b last:border-b-0"
                  >
                    <td className="p-2 md:p-3 text-gray-700">{row.program}</td>
                    <td className="p-2 md:p-3 text-gray-700">{row.intake}</td>
                    <td className="p-2 md:p-3 text-gray-700">{row.duration}</td>
                    <td className="p-2 md:p-3 text-gray-700">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "syllabus":
        if (contentData.content && contentData.content.tabs) {
          const activeTab = contentData.content.tabs.find(
            (tab) => tab.id === syllabusTab
          ) || contentData.content.tabs[0];

          return (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
                {contentData.content.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSyllabusTab(tab.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      syllabusTab === tab.id
                        ? "bg-secondary text-white"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="space-y-3 md:space-y-4">
                {activeTab.list.map((item) => (
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
          );
        }

        return (
          <div className="space-y-3 md:space-y-4">
            {contentData.content.map((item) => (
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
        );

      case "labs":
        return (
          <div className="overflow-hidden">
            <h4 className="font-semibold text-secondary text-lg mb-3 md:mb-4">
              Laboratory Facilities
            </h4>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="p-2 md:p-3 border-b font-semibold w-16">Sr.No.</th>
                    <th className="p-2 md:p-3 border-b font-semibold min-w-[200px]">
                      Lab Name
                    </th>
                    <th className="p-2 md:p-3 border-b font-semibold w-24">
                      No. of PCs
                    </th>
                    <th className="p-2 md:p-3 border-b font-semibold min-w-[250px]">
                      Major Equipment
                    </th>
                    <th className="p-2 md:p-3 border-b font-semibold min-w-[200px]">
                      Software Installed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contentData.content.map((lab) => (
                    <tr
                      key={lab.srNo}
                      className="hover:bg-gray-50 border-b last:border-b-0"
                    >
                      <td className="p-2 md:p-3 text-gray-600">{lab.srNo}</td>
                      <td className="p-2 md:p-3 font-medium text-gray-800">
                        {lab.name}
                      </td>
                      <td className="p-2 md:p-3 text-gray-600">{lab.pcs}</td>
                      <td className="p-2 md:p-3 text-gray-700">{lab.equipment}</td>
                      <td className="p-2 md:p-3 text-gray-700">{lab.software}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "notice":
        return (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800">{contentData.content}</p>
          </div>
        );
      case "staff":
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
            {contentData.content.map((staff, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300"
              >
                <StaffPhoto src={staff.image} alt={staff.name} />

                <div className="w-full flex-1 flex flex-col">
                  <h4 className="font-bold text-gray-900 mb-1 leading-snug">
                    {staff.name}
                  </h4>
                  <p className="text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">
                    {staff.designation}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 space-y-2 text-left">
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">
                        Department:
                      </span>
                      <span className="text-gray-700 font-medium">
                        {staff.department}
                      </span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">
                        Qualification:
                      </span>
                      <span className="text-gray-700 font-medium">
                        {staff.qualification}
                      </span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">
                        Joining Date:
                      </span>
                      <span className="text-gray-700 font-medium">{staff.doj}</span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">
                        Birth Date:
                      </span>
                      <span className="text-gray-700 font-medium">{staff.dob}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-3 md:mb-4">
            Department of Computer Engineering
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with cutting-edge education and
            research in computer science and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-1 md:space-y-2 sticky top-24 self-start border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-lg text-center">
              Computer Overview
            </h3>

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActive(tab);

                  if (window.innerWidth < 1024) {
                    setTimeout(() => {
                      const el = document.getElementById("right-content");
                      if (el) {
                        const yOffset = -160;
                        const y =
                          el.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;

                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 50);
                  }
                }}
                className={`block w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary hover:border-l-4 hover:border-secondary"
                }`}
              >
                <span className="font-medium">{tab}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div
            id="right-content"
            className="lg:col-span-3 bg-white rounded-xl shadow-sm p-4 md:p-8 border border-gray-100"
          >
            <div className="mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>

            <div className="content-area">
              {renderContent(sectionContent[active])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
