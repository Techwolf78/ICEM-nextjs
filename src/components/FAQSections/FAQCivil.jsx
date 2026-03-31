"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ================== STAFF DATA ==================
const staffData = [
  {
    sn: 1,
    id: "1200",
    name: "Mrs. Savita Achyut Jangale",
    designation: "Assistant Professor & HOD",
    department: "Civil",
    qualification: "ME",
    doj: "18/09/2014",
    dob: "31/01/1982",
    image: "/faculty/final_icem_branding/civil/Mrs. Savita Jangale.webp",
  },
  {
    sn: 2,
    id: "1326",
    name: "Mr. Vijay Kumar Saini",
    designation: "Assistant Professor",
    department: "Civil",
    qualification: "M.Tech",
    doj: "14/07/2015",
    dob: "24/08/1990",
    image: "/faculty/final_icem_branding/civil/Mr. Vijaykumar Saini.webp",
  },
  {
    sn: 3,
    id: "3086",
    name: "Mr. Shreyas Rajendra Satpute",
    designation: "Assistant Professor",
    department: "Civil",
    qualification: "ME",
    doj: "01/07/2024",
    dob: "11/11/1990",
    image: "/faculty/final_icem_branding/civil/Mr. Shreyas Satpute.webp",
  },
  {
    sn: 4,
    id: "3102",
    name: "Mr. Satyam Shamrao Kalyane",
    designation: "Assistant Professor",
    department: "Civil",
    qualification: "ME",
    doj: "01/07/2024",
    dob: "04/06/1990",
    image: "/faculty/final_icem_branding/civil/satyamkalyane.webp",
  },
];

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "sybtech",
    label: "SY B.Tech Civil Engineering (2025 Pattern) Syllabus",
    pdf: "/programs/Civil/SE.pdf",
  },
  {
    id: "te",
    label: "TE Civil Engineering (2019 Pattern) Syllabus",
    pdf: "/programs/Civil/TE.pdf",
  },
  {
    id: "be",
    label: "BE Civil Engineering (2019 Pattern) Syllabus",
    pdf: "/programs/Civil/BE.pdf",
  },
];

// ================== ACADEMIC CALENDAR DATA ==================
const academicCalendarList = [
  {
    id: "civilac",
    label: "Civil Academic Calendar",
    pdf: "/programs/Civil/CIVILAC.pdf",
  },
];

// ================== TIME TABLE DATA ==================
const timeTableList = [
  {
    id: "bett",
    label: "BE Time Table",
    pdf: "/programs/Civil/BETT.pdf",
  },
  {
    id: "tett",
    label: "TE Time Table",
    pdf: "/programs/Civil/TETT.pdf",
  },
  {
    id: "sett",
    label: "SE Time Table",
    pdf: "/programs/Civil/SETT.pdf",
  },
];

// ================== ACADEMIC PERFORMANCE DATA ==================
const academicPerformanceList = {
  "2024-25": [
    {
      id: "sem1-2024-25",
      label: "Semester 1 - Academic Year 2024-25",
      pdf: "/programs/Civil/SE.pdf", // Using existing PDF
    },
    {
      id: "sem2-2024-25",
      label: "Semester 2 - Academic Year 2024-25",
      pdf: "/programs/Civil/TE.pdf", // Using existing PDF
    },
  ],
};

// ================== RESEARCH DATA ==================
const researchList = [
  {
    id: "research",
    label: "Research Publications & Projects",
    pdf: "/programs/Civil/CivilResearch.pdf", // Using existing PDF
  },
];

// ================== INNOVATIVE PEDAGOGY DATA ==================
const innovativePedagogyList = [
  {
    id: "pedagogy",
    label: "Innovative Pedagogy Methods",
    pdf: "/programs/Civil/InnovativePedagogy.pdf", // Using existing PDF
  },
];

// ================== LABORATORY DATA ==================
const labData = [
  {
    srNo: 1,
    name: "Surveying Lab",
    pcs: "25",
    equipment: "Total Station, Theodolite, Leveling Instruments",
    software: "AutoCAD, Civil 3D",
  },
  {
    srNo: 2,
    name: "Concrete Technology Lab",
    pcs: "20",
    equipment: "Compression Testing Machine, Mixers",
    software: "Structural Analysis Software",
  },
  {
    srNo: 3,
    name: "Geotechnical Lab",
    pcs: "15",
    equipment: "Triaxial Test Apparatus, Consolidation Test",
    software: "Geotechnical Software",
  },
  {
    srNo: 4,
    name: "Fluid Mechanics Lab",
    pcs: "20",
    equipment: "Flow Meters, Pumps",
    software: "CFD Software",
  },
  {
    srNo: 5,
    name: "Transportation Lab",
    pcs: "18",
    equipment: "Bitumen Testing, Aggregate Testing",
    software: "Pavement Design Software",
  },
];

// ================== IMAGE PLACEHOLDERS ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`,
}));

// ================== MAIN COMPONENT ==================
export default function FAQSectionCivil() {
  const [active, setActive] = useState("About Us");
  const [expandedPdf, setExpandedPdf] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'fee-structure') {
        setActive("About Us");
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
          "Welcome to the Department of Civil Engineering at Indira College of Engineering and Management. The department offers a comprehensive B.Tech program in Civil Engineering, affiliated with Savitribai Phule Pune University and approved by AICTE.",
          "Our curriculum focuses on structural engineering, geotechnical engineering, transportation, and environmental engineering, preparing students for diverse careers in infrastructure development.",
        ],
        "Programs Offered": [
          "B.Tech in Civil Engineering (Intake: 60)",
        ],
      },
    },
    "Sanctioned Intake": {
      type: "table",
      content: [
        {
          program: "B.Tech Civil Engineering",
          intake: "60 Seats",
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
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45% marks (at least 40% marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State), in the above subjects taken together; and the Candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority.",
          "Or Passed Diploma in Engineering and Technology and obtained at least 45% marks (at least 40% marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
        ],
        "All India Candidature Candidates, Jammu and Kashmir & Ladakh Migrant Candidates": [
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45% marks (at least 40% marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State) in the above subjects taken together; and should obtain non zero positive score in JEE (Main) B.E./B.Tech or the candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority. However, preference shall be given to the candidate obtaining non zero positive score in JEE (Main) B.E./B.Tech over the candidates who obtained non zero score in CET.",
          "Or Passed Diploma in Engineering and Technology and obtained at least 45% marks (at least 40% marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
        ],
        "NRI / OCI / PIO, Children of Indian workers in Gulf and Foreign National Candidates": [
          "The candidate should have passed the HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies, and obtained at least 45% marks in the above subjects taken together.",
        ],
        "Additional Information": [
          "Any other criterion declared from time to time by the appropriate authority as defined under the Act.",
        ],
        "Mechanical Engineering Eligibility": [
          "An interested candidate seeking engineering admission in Maharashtra must be a citizen of India. A candidate opting for engineering 1st-year admission is stated eligible if he/she has passed class 12th exam of CBSC/HSC/ICSE board with min 50% for open category, 45% for backward class from any state in India. A candidate also has to have a valid positive score in either of the examinations MH-CET/JEE-Mains, can apply for an engineering admission process.",
          "Direct 2nd-year admission requires Diploma in Engineering and Technology with at least 45% marks (40% for Backward class categories and Persons with Disability belonging to Maharashtra State) from AICTE or Government approved Institution.",
        ],
      },
    },
    "Admission Procedure": {
      type: "syllabus",
      content: [
        {
          id: "admission",
          label: "Institute Level /ACAP Admission Round Procedure",
          pdf: "/assets/pdf/Notice_ACAP_IL_Admission_Reporting.pdf",
        },
      ],
    },
    "FRA - Fee Structure": {
      type: "syllabus",
      content: [
        {
          id: "fee-structure",
          label: "Fee Structure (2025–26)",
          pdf: "/fees/Fee%20structure%202025-26%20(3).pdf",
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
    "Staff": {
      type: "staff",
      content: staffData,
    },
  };

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    switch (data.type) {
      case "accordion":
        return (
          <div className="space-y-3 md:space-y-4">
            {Object.entries(data.content).map(([title, items]) => (
              <div key={title} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">
                      {title}
                    </h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="p-3 md:p-4 pt-2 space-y-3">
                    {items.map((item, i) =>
                      typeof item === "object" && item.pdf ? (
                        <a
                          key={i}
                          href={item.pdf}
                          target="_blank"
                          className="text-secondary underline font-medium hover:text-secondary/80"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-700">
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        );
      case "text":
        return (
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {data.content}
          </div>
        );
      case "notice":
        return (
          <p className="text-gray-600 text-lg">
            {data.content}
          </p>
        );
      case "table":
        return (
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
                {data.content.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2 md:p-3">{row.program}</td>
                    <td className="p-2 md:p-3">{row.intake}</td>
                    <td className="p-2 md:p-3">{row.duration}</td>
                    <td className="p-2 md:p-3">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "syllabus":
        return (
          <div className="space-y-3 md:space-y-4">
            {data.content.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-3 md:p-4 bg-gray-50">
                  <span className="font-semibold text-gray-800">{item.label}</span>
                  <div className="flex gap-2">
                    <a
                      href={item.pdf}
                      className="px-4 py-2 bg-secondary text-white rounded-md"
                    >
                      Download
                    </a>
                    <button
                      onClick={() => setExpandedPdf(expandedPdf === item.id ? null : item.id)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md"
                    >
                      {expandedPdf === item.id ? "Hide Viewer" : "Open in Viewer"}
                    </button>
                  </div>
                </div>

                {expandedPdf === item.id && (
                  <div className="p-3 md:p-4 border-t border-gray-200">
                    <div className="border rounded-lg overflow-hidden h-[500px]">
                      <iframe
                        src={item.pdf}
                        title={item.label}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      case "academic-performance":
        return (
          <div className="space-y-4">
            {Object.entries(data.content).map(([year, items]) => (
              <div key={year} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-3">{year}</h4>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <h5 className="font-semibold text-gray-800">
                        {item.label}
                      </h5>
                      <a
                        href={item.pdf}
                        target="_blank"
                        className="px-4 py-2 bg-secondary text-white rounded-md"
                      >
                        View / Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "lab-table":
        return (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 md:p-3 border-b font-semibold">Sr. No.</th>
                  <th className="p-2 md:p-3 border-b font-semibold">Lab Name</th>
                  <th className="p-2 md:p-3 border-b font-semibold">PCs</th>
                  <th className="p-2 md:p-3 border-b font-semibold">Equipment</th>
                  <th className="p-2 md:p-3 border-b font-semibold">Software</th>
                </tr>
              </thead>
              <tbody>
                {data.content.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2 md:p-3">{row.srNo}</td>
                    <td className="p-2 md:p-3">{row.name}</td>
                    <td className="p-2 md:p-3">{row.pcs}</td>
                    <td className="p-2 md:p-3">{row.equipment}</td>
                    <td className="p-2 md:p-3">{row.software}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            {data.content.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
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
                        ID NO:
                      </span>
                      <span className="text-gray-700 font-medium">
                        {staff.id}
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
                      <span className="text-gray-700 font-medium">
                        {staff.doj}
                      </span>
                    </div>
                    <div className="text-[11px]">
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
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Department of Civil Engineering
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore detailed information about our Civil Engineering programs,
            faculty, facilities, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* LEFT SIDEBAR */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-2 border border-gray-100 sticky top-24">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-lg">
              Civil Overview
            </h3>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActive(tab);

                  if (typeof window !== "undefined" && window.innerWidth < 1024) {
                    setTimeout(() => {
                      const target = document.getElementById("civil-right-content");
                      if (target) {
                        const yOffset = -140;
                        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 120);
                  }
                }}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all ${
                  active === tab
                    ? "bg-secondary text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div id="civil-right-content" className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              {renderContent(sectionContent[active])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}