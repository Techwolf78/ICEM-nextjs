"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ================== DATA SECTION ==================
const teachingStaff = [
  {
    sn: 1,
    id: "472",
    name: "Dr. Manjusha Rahul Tatiya",
    designation: "HoD (AI & Data Science)",
    department: "AIDS",
    qualification: "Ph.D ME",
    doj: "01/07/2009",
    dob: "30/01/1983",
    image: "/faculty/final_icem_branding/aids/dr_manjusha.webp",
  },
  {
    sn: 2,
    id: "3096",
    name: "Mrs. Deepa Vishal Padwal",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "B.E ME",
    doj: "01/07/2024",
    dob: "09/02/1992",
    image: "/faculty/final_icem_branding/aids/Mrs. Deepa KadamPadwal.webp",
  },
  {
    sn: 3,
    id: "3101",
    name: "Ms. Pallavi Laxmikant Chavan",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "B.Tech M.Tech",
    doj: "01/07/2024",
    dob: "17/09/1996",
    image: "/faculty/final_icem_branding/aids/Pallavi Chavan.webp",
  },
  {
    sn: 4,
    id: "3170",
    name: "Mrs. Monika Amol Patil",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "Dip BE ME",
    doj: "07/01/2025",
    dob: "10/05/1992",
    image: "/faculty/final_icem_branding/aids/Mrs. Monika Patil.webp",
  },
  {
    sn: 5,
    id: "3263",
    name: "Mrs. Kavita Sharma",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "M.Tech MSc PG Computer Application",
    doj: "14/01/2026",
    dob: "10/07/1992",
    image: "/faculty/final_icem_branding/aids/Mrs. Kavita Sharma.webp",
  },
  {
    sn: 6,
    id: "3267",
    name: "Mr. Vivek Kumar Sohagaura",
    designation: "Assistant Professor",
    department: "AIDS",
    qualification: "B.E M.Tech Computer Science",
    doj: "23/01/2026",
    dob: "18/12/1990",
    image: "/faculty/final_icem_branding/aids/Vivek Sohagora.webp",
  },
];

const newDetailedStaff = [
  {
    sn: 7,
    id: "TBD1",
    name: "Mrs. Vidya R. Dhoke",
    designation: "Assistant Professor",
    department: "Artificial Intelligence and Data Science",
    qualification: "MTech(CSE)",
    experience: "8+",
    interest: "Generative AI and Machine Learning, Big data",
    research: "• Scopus Indexed Papers: 02\n• Scopus Indexed Papers: 04",
    image: "/faculty/final_icem_branding/aids/vidya_dhoke.webp",
  },
  {
    sn: 8,
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
    sn: 1,
    id: "TBD5",
    name: "Mr. Prasad Jadhav",
    designation: "Lab Assistant",
    department: "Artificial Intelligence And Data Science",
    qualification: "Bachelor Of Computer Applications",
    experience: "3 yrs (Industrial: 0.2, Research: 0.1)",
    interest: "Hardware, Networking, Tech Blogging",
    research: "-",
    image: "/faculty/final_icem_branding/aids/Mr. Prasad Jadhav.webp",
  },
  {
    sn: 2,
    id: "TBD4",
    name: "Ms. Apeksha S. Giri",
    designation: "Tech. Assistant",
    department: "Artificial Intelligence And Data Science",
    qualification: "M.E (E&TC)",
    experience: "8 years (Industrial: 0, Research: 0)",
    interest: "Hardware, Networking",
    research: "-",
    image: "/faculty/final_icem_branding/aids/apeksha_giri.webp",
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
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/programs/AIDS/SESyllabus.pdf",
  },
  {
    id: "te",
    label: "TE AIDS Engineering (2019 Pattern) Syllabus",
    pdf: "/programs/AIDS/TEsyllabus.pdf",
  },
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

const overviewData = [
  {
    title: "About Department",
    content: `The Department of Artificial Intelligence and Data Science at ICEM aims to be one of the leading programs to provide value-added quality education in Computer Science and Engineering with specialization in Artificial Intelligence and Data Science.`,
  },
];

export default function FAQSectionAIDS() {
  const [active, setActive] = useState("Overview");

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
              "Overview",
              "Staff",
              "Sanction Intake",
              "Eligibility Criteria",
              "Admission Procedure",
              "FRA - Fee Structure",
              "Syllabus & Course Structure",
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
            {active === "Overview" && (
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
                                  ID NO:
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {staff.id}
                                </span>
                              </div>
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
                                  ID NO:
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {staff.id}
                                </span>
                              </div>
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
                                  ID NO:
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {staff.id}
                                </span>
                              </div>
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
