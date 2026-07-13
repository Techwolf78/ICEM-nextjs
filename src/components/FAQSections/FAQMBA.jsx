"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ================== STAFF DATA ==================
const staffData = [
  {
    sn: 1,
    id: "1521",
    name: "Dr. Archana Ravindra Salve",
    designation: "Professor & Dean",
    department: "MBA",
    qualification: "BAMS MBA NET Ph.D",
    doj: "30/01/2017",
    dob: "13/09/1976",
    image: "/programs/MBA/archana.jpeg",
  },
  {
    sn: 2,
    id: "987",
    name: "Dr. Priyanka Amol Pawar",
    designation: "Associate Professor Dean (L&D)",
    department: "MBA",
    qualification: "B.Sc MBA Ph.D",
    doj: "17/09/2012",
    dob: "22/09/1986",
    image: "/faculty/final_Icem_branding/mba/Dr. Priyanka Pawar.webp",
  },
  {
    sn: 3,
    id: "3087",
    name: "Dr. Pravin Namdeo Thorat",
    designation: "Assistant Professor",
    department: "MBA",
    qualification: "BE MBA NET SET Ph.D",
    doj: "01/07/2024",
    dob: "23/08/1982",
    image: "/faculty/final_Icem_branding/mba/Dr. Pravin Thorat.webp",
  },
  {
    sn: 4,
    id: "3090",
    name: "Mrs. Aditee Hrishikesh Huparikar",
    designation: "Assistant Professor",
    department: "MBA",
    qualification: "M.Com MBA",
    doj: "01/07/2024",
    dob: "05/07/1985",
    image: "/faculty/final_Icem_branding/mba/Mrs. Adittee Huparikar.webp",
  },
  {
    sn: 5,
    id: "3093",
    name: "Dr. Priyanka Shirish Shinde",
    designation: "Assistant Professor & TPO",
    department: "MBA",
    qualification: "Ph.D MBA M.Phil",
    doj: "01/07/2024",
    dob: "14/05/1986",
    image: "/faculty/final_Icem_branding/mba/Dr. Priyanka Shinde.webp",
  },
  {
    sn: 6,
    id: "3113",
    name: "Mr. Mani Shankar Pandey",
    designation: "Assistant Professor",
    department: "MBA",
    qualification: "BBA PGDM",
    doj: "06/09/2024",
    dob: "08/07/1990",
    image: "/faculty/final_Icem_branding/mba/Mr. Mani Shankar Pandey.webp",
  },
];

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "mba-rules-exam-26-27",
    label: "MBA Rules & Exam Guidelines (A.Y. 2026-27)",
    pdf: "/programs/MBA/MBA RULES &  EXAM Guidelines _26-27.pdf",
  },
  {
    id: "fy-mba-structure-26-27",
    label: "FY MBA Course Structure Sem I & II (A.Y. 2026-27)",
    pdf: "/programs/MBA/FY MBA Structure SEM-I & II 2026-27 (3) (1).xlsx",
  },
  {
    id: "sy-mba-structure-26-27",
    label: "SY MBA Course Structure Sem III & IV (A.Y. 2026-27)",
    pdf: "/programs/MBA/SY MBA Structure SEM-III & IV 2026-27.xlsx",
  },
  {
    id: "fy-mba-syllabus-26-27",
    label: "FY MBA Detailed Syllabus (A.Y. 2026-27)",
    pdf: "/programs/MBA/FY MBA SYLLABUS COPY 2026-27,.docx",
  },
  {
    id: "sy-mba-syllabus-26-27",
    label: "SY MBA Detailed Syllabus (A.Y. 2026-27)",
    pdf: "/programs/MBA/SYMBA SYLLABUS COPY 2026-27.doc",
  },
  {
    id: "mba-syllabus-scan",
    label: "MBA Syllabus Structure",
    pdf: "/pdfs/MBA Syllabus structure scan_001.pdf",
  },
  {
    id: "nep-syllabus",
    label: "NEP Syllabus (Sem I-IV)",
    pdf: "/pdfs/NEP Syllabus  Sem-I II III IV  MBA 24-26.pdf",
  },
];

// ================== FACULTY IMAGES ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`,
}));

// ================== MAIN COMPONENT ==================
export default function FAQMBA() {
  const [active, setActive] = useState("About Us");
  const [activePreviewId, setActivePreviewId] = useState(null);

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "Indira College of Engineering and Management (ICEM), Pune is committed to its pursuit of excellence by focusing on holistic development, thereby nurturing well-rounded and competent individuals – the proud Indiraites. At the heart of the ICEM MBA philosophy lies a steadfast conviction to evolve as one of India’s best business schools in the field of management education, dedicated to shaping a better and more progressive future for generations to come",
          "It is well recognized that sustained economic growth is driven by skilled managers and visionary leaders who can provide the strategic impetus for development across all sectors. This vision is being realized through the remarkable advancement of business management education in India. The impact of this transformation has extended across diverse segments of academia and industry, fostering an environment where knowledge, innovation, and leadership converge to build a stronger nation.",
        ],
        // Vision: [
        //   "To be an internationally-recognized leader in global business education, scholarly excellence, and collaborative community engagement."
        // ],
        // Mission: [
        //   "To serve our diverse student and alumni population, our multicultural business community, and the global community of scholars by advancing business knowledge and sharing expertise.",
        //   "We prepare our students to succeed as responsible global citizens in a dynamic, technology-driven business climate -creating a growing legacy for our alumni. · We serve the business community through professional education, collaboration, and research – strengtheningregional and local industries while providing qualified graduates who can tackle the demands of today's complex business environment",
        //   "We conduct innovative research -- nurturing our faculty& intellectual growth and developing the talents of future scholars."
        // ],
      },
    },
    // ================= NEW SECTIONS FOR IMCA =================

    "FRA - Fee Structure": {
      type: "syllabus",
      content: [
        {
          id: "fra-fee-structure-26-27",
          label: "FRA Fee Structure (A.Y. 2026-27)",
          pdf: "/fees/fra_fees_2026-27.pdf",
        },
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
          program: "MBA",
          intake: "60 Seats",
          duration: "2 Years",
          type: "Full Time",
        },
      ],
    },

    // "Eligibility Criteria": {
    //   type: "text",
    //   content: `Coming Soon`,
    // },

    "Eligibility Criteria": {
      type: "accordion",
      content: {
        "Eligibility Criteria for Admission to First Year Engineering 2024-25":
          [
            "For details about First Year Engineering Admission and Eligibility Criteria, refer https://cetcell.mahacet.org/",
          ],
        "Maharashtra State Candidature Candidates": [
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State), in the above subjects taken together; and the Candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority.",
          "Or",
          "Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
        ],
        "All India Candidature Candidates, Union Territory of Jammu and Kashmir and Union Territory of Ladakh Migrant Candidature Candidates":
          [
            "The Candidate should be an Indian National.",
            "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State) in the above subjects taken together; and should obtain non zero positive score in JEE (Main) B.E./B.Tech or the candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority. However, preference shall be given to the candidate obtaining non zero positive score in JEE (Main) B.E./B.Tech over the candidates who obtained non zero score in CET.",
            "Or",
            "Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
          ],
        "NRI / OCI / PIO, Children of Indian workers in the Gulf countries and Foreign National Candidature Candidates":
          [
            "The candidate should have passed the HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies, and obtained at least 45 % marks in the above subjects taken together.",
          ],
        "Additional Information": [
          "Any other criterion declared from time to time by the appropriate authority as defined under the Act.",
        ],
        // "Information Technology Eligibility": [
        //   "Eligibility for admission to the Integrated MCA program requires candidates to have passed 10+2 from any recognized board with Mathematics or Statistics.Admission is based on merit and institutional selection guidelines. No entrance exam required.",
        // ],
      },
    },

    // Faculty: {
    //   type: "gallery",
    //   content: facultyImages,
    //   title: "Faculty Members",
    // },

    "Syllabus & Course Structure": {
      type: "syllabus",
      content: syllabusList,
    },
    Staff: {
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

                  <div className="p-3 md:p-4 pt-2 space-y-2">
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
                      ),
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
        return <p className="text-gray-600 text-lg">{data.content}</p>;
      case "table":
        return (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 md:p-3 border-b font-semibold">Program</th>
                  <th className="p-2 md:p-3 border-b font-semibold">Intake</th>
                  <th className="p-2 md:p-3 border-b font-semibold">
                    Duration
                  </th>
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
            {data.content.map((item) => {
              const isExcelOrDoc =
                item.pdf.endsWith(".xlsx") ||
                item.pdf.endsWith(".xls") ||
                item.pdf.endsWith(".docx") ||
                item.pdf.endsWith(".doc");
              const isPdf = item.pdf.endsWith(".pdf");
              const isPreviewOpen = activePreviewId === item.id;

              return (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-3 md:p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h5 className="font-semibold text-gray-800">
                      {item.label}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {isPdf && (
                        <button
                          onClick={() =>
                            setActivePreviewId(isPreviewOpen ? null : item.id)
                          }
                          className="px-4 py-2 bg-secondary text-white rounded-md text-sm hover:bg-secondary/90 transition-colors"
                        >
                          {isPreviewOpen ? "Close Preview" : "View"}
                        </button>
                      )}
                      <a
                        href={item.pdf}
                        download
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300 transition-colors font-medium"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                  {isPdf && isPreviewOpen && (
                    <div className="mt-4 border-t pt-4">
                      <iframe
                        src={item.pdf}
                        className="w-full h-[600px] border rounded-lg"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );

      case "entcLabs":
        return (
          <div>
            <h4 className="font-semibold text-secondary text-lg mb-3 md:mb-4">
              Department Laboratories
            </h4>

            <div className="overflow-x-auto border border-gray-300 rounded-lg">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="border p-2 md:p-3">Sr. No.</th>
                    <th className="border p-2 md:p-3">Lab No.</th>
                    <th className="border p-2 md:p-3">Lab Name</th>
                    <th className="border p-2 md:p-3">Total PCs</th>
                    <th className="border p-2 md:p-3">Configuration</th>
                    <th className="border p-2 md:p-3">Software Installed</th>
                  </tr>
                </thead>

                <tbody>
                  {data.content.map((lab, index) => (
                    <tr key={index} className="border-b align-top">
                      <td className="border p-2 md:p-3">{lab.srNo}</td>
                      <td className="border p-2 md:p-3">{lab.labNo}</td>
                      <td className="border p-2 md:p-3">{lab.labName}</td>
                      <td className="border p-2 md:p-3">{lab.totalPCs}</td>
                      <td className="border p-2 md:p-3 whitespace-pre-line">
                        {lab.configuration}
                      </td>
                      <td className="border p-2 md:p-3 whitespace-pre-line">
                        {lab.software}
                      </td>
                    </tr>
                  ))}

                  {/* Total PCs Row */}
                  <tr className="font-semibold bg-gray-50">
                    <td className="border p-2 md:p-3" colSpan={3}>
                      Total PCs
                    </td>
                    <td className="border p-2 md:p-3">75</td>
                    <td className="border p-2 md:p-3" colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      // ========== UPDATED MECHANICAL LAB TABLE (2 COLUMNS) ==========

      default:
        return null;
      case "staff":
        const StaffPhoto = ({ src, alt }) => {
          const [currentSrc, setCurrentSrc] = useState(
            src || "/faculty/newFaculty/placeholder.avif",
          );
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
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
                      <span className="text-gray-700 font-medium font-mono">
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
                      <span className="text-gray-700 font-medium font-mono">
                        {staff.doj}
                      </span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">
                        Birth Date:
                      </span>
                      <span className="text-gray-700 font-medium font-mono">
                        {staff.dob}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of MBA
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with cutting-edge education and
            research in business administration and management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-1 md:space-y-2 sticky top-24 self-start border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-lg">
              Quick Links
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
                        const yOffset = -160; // 🔥 adjust this if needed (navbar height)
                        const y =
                          el.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;

                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 50);
                  }
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
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
            <div className="mb-4 md:mb-6 pb-4 border-b border-gray-200">
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
