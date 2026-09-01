"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const convertImageToWebp = (src) => {
  if (!src) return src;
  return src.replace(/\.(jpe?g|png|avif|jpg|JPG)$/i, ".webp");
};

// ================== STAFF DATA ==================
const staffData = [
  {
    sn: 1,
    id: "312",
    name: "Mrs. Meenakshi Somnath Patil",
    designation: "Assistant Professor & HOD",
    department: "E&TC",
    qualification: "ME",
    doj: "22/01/2008",
    dob: "02/10/1982",
    image: "/faculty/final_icem_branding/entc/Mrs. Meenakshi Patil.webp",
  },
  {
    sn: 2,
    id: "393",
    name: "Mr. Dhiraj Shashikant Bhagwate",
    designation: "Assistant Professor",
    department: "E&TC",
    qualification: "ME",
    doj: "04/08/2008",
    dob: "26/11/1971",
    image: "/faculty/final_icem_branding/entc/Mr. Dhiraj Bhagwate.webp",
  },

  {
    sn: 4,
    id: "3106",
    name: "Mr. Sudhir Kumar Sawarkar",
    designation: "Assistant Professor",
    department: "E&TC",
    qualification: "Dip BE ME",
    doj: "03/07/2024",
    dob: "12/10/1981",
    image: "/faculty/final_icem_branding/entc/Mr. sudhir Sawarkar.webp",
  },
  {
    sn: 5,
    id: "3107",
    name: "Ms. Priyanka Ramesh Patil",
    designation: "Assistant Professor",
    department: "E&TC",
    qualification: "BE ME",
    doj: "12/08/2024",
    dob: "07/06/1990",
    image: "/faculty/final_icem_branding/entc/Mrs. Priyanka Patil.webp",
  },
  {
    sn: 6,
    id: "3120",
    name: "Prof. Balu Chatrbhuj Tandale",
    designation: "Assistant Professor",
    department: "E&TC",
    qualification: "BE ME",
    doj: "23/12/2024",
    dob: "09/09/1991",
    image: "/programs/ENTC/balasaheb_tandale.webp",
  },
  {
    sn: 7,
    id: "3298",
    name: "Prof. Sushma N. Patwardhan",
    designation: "Assistant Professor",
    department: "E&TC",
    qualification: "ME",
    doj: "2/5/2026",
    dob: "18/09/1980",
    image: "/programs/ENTC/sushma_patwardhan.webp",
  },
  {
    sn: 8,
    id: "3455",
    name: "Prof. Pallavi M. Rokade",
    designation: "Assistant Professor",
    department: "E&TC",
    qualification: "M.Tech",
    doj: "8/7/2026",
    dob: "20/05/1990",
    image: "",
  },
];

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "fe-2025",
    label: "FY BTech (2025 Course) Pattern Syllabus",
    pdf: "/assets/pdf/syllabus/Updated-Syllabus-new-Authenticated-by-VC-Nominee.pdf",
  },
  {
    id: "fe-2024",
    label: "FY BTech (2024 Course) Pattern Syllabus",
    pdf: "/assets/pdf/syllabus/New_Syllabus_2024-25_Updated_(28-10-2024).pdf",
  },
  // {
  //   id: "fe-2019",
  //   label: "First Year Engineering (2019 Course) Pattern Syllabus",
  //   pdf: "/assets/pdf/syllabus/First_Year_Engineering_2019_Patt_Syllabus.pdf",
  // },
  {
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/programs/ENTC/se_btech.pdf",
  },
  {
    id: "ty-2024",
    label: "TY B.Tech (2024 Pattern) Structure",
    pdf: "/programs/ENTC/te_btech.pdf",
  },
  {
    id: "te",
    label: "T.E E&TC 2019 Pattern Syllabus",
    pdf: "/programs/ENTC/te_entc_2019.pdf",
  },
  {
    id: "be",
    label: "B.E EnTC 2019 Pattern Syllabus",
    pdf: "/programs/ENTC/be_entc_2019.pdf",
  },
  {
    id: "be-2024",
    label: "Final Year B.Tech (2024 Pattern) Structure",
    pdf: "/programs/ENTC/be_btech.pdf",
  },
];

// ================== MECHANICAL LABORATORIES (2-COLUMN FORMAT) ==================

// ================== FACULTY IMAGES ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`,
}));

// ================== MAIN COMPONENT ==================
export default function FAQSection() {
  const [active, setActive] = useState("About Us");
  // track visibility of staff cards when image fails
  const [staffVisible, setStaffVisible] = useState({});

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "The Electronics & Telecommunication (E&TC) Department at Indira College of Engineering and Management, Pune, aims to create industry-ready engineers with a strong foundation in communication systems, electronics, and modern technologies.",

          " Our program blends theory and hands-on learning through well-equipped laboratories, project-based courses, and industry collaborations, preparing students for careers in telecom, embedded systems, VLSI, and IT domains",
        ],
        // Vision: [
        //   "To revolutionize pool of knowledge and develop innovative, ethical, responsitble, and global leaders who will transform Institute and community services."
        // ],
        // Mission: [
        //   "To offer an industry ready curriculum and happy learníng environment, enabling our learners To become responsible citizens with holistic skill sets, to solve worldwide challenges.",
        //   "To inculcate impactful research through global collaborations with facuties, students & industry, using comprehensive technology and infrastructure to nurture innovation.",
        //   "To be a contributor towards a sustainable future by promoting conservation, prosperity, and social impact."
        // ],
      },
    },
    // ================= NEW SECTIONS FOR ENTC =================

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
          program: "F.Y. B.Tech",
          intake: "60",
        },
        {
          program: "S.Y. B.Tech",
          intake: "30",
        },
        {
          program: "T.Y. B.Tech",
          intake: "30",
        },
        {
          program: "Final Year",
          intake: "30",
        },
      ],
    },

    //     "Eligibility Criteria": {
    //       type: "text",
    //       content: `
    // `,
    //     },

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
        "ENTC Eligibility": [
          "Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subject.Obtained at least 45% marks (40% in case of candidate belonging to reserved category) in the above subjects taken together.Valid score in JEE Main/MHT-CET or equivalent entrance examination.",
        ],
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

    Laboratories: {
      type: "labs",
      content: {
        labs: [
          { srNo: 1, labName: "Software Lab" },
          { srNo: 2, labName: "Microcontroller Lab" },
          { srNo: 3, labName: "Digital Electronics Lab" },
          { srNo: 4, labName: "Electronic circuit" },
          { srNo: 5, labName: "Embedded & VLSI Lab" },
          { srNo: 6, labName: "Communication Lab" },
        ],
        images: [
          {
            src: "/programs/ENTC/entc_lab1.avif",
            title: "Electronics & System Demonstration",
          },
          {
            src: "/programs/ENTC/entc_lab2.avif",
            title: "Hardware & Circuit Laboratory",
          },
          {
            src: "/programs/ENTC/entc_lab_facility_apple.webp",
            title: "Apple Lab",
          },
          {
            src: "/programs/ENTC/entc_lab_facility_software.webp",
            title: "Software Laboratory",
          },
        ],
      },
    },

    Staff: {
      type: "staff",
      content: staffData,
    },

    Newsletter: {
      type: "syllabus",
      content: [
        {
          id: "newsletter",
          label: "ENTC Newsletter",
          pdf: "/programs/ENTC/entc_newsletter.pdf",
        },
      ],
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

      case "syllabus":
        return (
          <div className="space-y-3 md:space-y-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <h5 className="font-semibold text-gray-800">{item.label}</h5>
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
        );
      case "text":
        return (
          <div className="space-y-3 text-gray-700 leading-relaxed whitespace-pre-line">
            {data.content
              .split("\n")
              .filter((line) => line.trim() !== "")
              .map((line, i) => (
                <p key={i}>{line}</p>
              ))}
          </div>
        );

      case "notice":
        return <p className="text-gray-600 text-lg">{data.content}</p>;
      case "table": {
        const hasDuration = data.content.some((row) => row.duration);
        const hasType = data.content.some((row) => row.type);

        return (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="p-2 md:p-3 border-b font-semibold">
                    Programme
                  </th>
                  <th className="p-2 md:p-3 border-b font-semibold">Intake</th>
                  {hasDuration && (
                    <th className="p-2 md:p-3 border-b font-semibold">
                      Duration
                    </th>
                  )}
                  {hasType && (
                    <th className="p-2 md:p-3 border-b font-semibold">Type</th>
                  )}
                </tr>
              </thead>

              <tbody>
                {data.content.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 border-b last:border-b-0"
                  >
                    <td className="p-2 md:p-3 text-gray-700 font-medium">
                      {row.program}
                    </td>
                    <td className="p-2 md:p-3 text-gray-700">{row.intake}</td>
                    {hasDuration && (
                      <td className="p-2 md:p-3 text-gray-700">
                        {row.duration}
                      </td>
                    )}
                    {hasType && (
                      <td className="p-2 md:p-3 text-gray-700">{row.type}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      case "labs":
        const labList = Array.isArray(data.content)
          ? data.content
          : data.content?.labs || [];
        const labImages = data.content?.images || [];

        return (
          <div className="space-y-8">
            {/* Laboratories List */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-1.5 h-6 bg-secondary rounded-full inline-block"></span>
                <h4 className="text-xl font-bold text-gray-900 tracking-tight">
                  Our Specialized Laboratories
                </h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {labList.map((lab, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-center space-x-3.5 p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200/80 shadow-xs hover:border-secondary/40 hover:shadow-sm transition-all duration-200"
                  >
                    <span className="bg-secondary text-white rounded-lg w-9 h-9 flex items-center justify-center text-sm font-bold shadow-xs shrink-0">
                      {lab.srNo < 10 ? `0${lab.srNo}` : lab.srNo}
                    </span>
                    <span className="text-gray-800 font-semibold text-base leading-snug">
                      {lab.labName}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Laboratory Images */}
            {labImages.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-6 bg-secondary rounded-full inline-block"></span>
                    <h4 className="text-xl font-bold text-gray-900 tracking-tight">
                      Laboratory Facilities & Infrastructure
                    </h4>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {labImages.map((item, index) => {
                    const src = item.src || item;
                    const title =
                      item.title ||
                      (index === 0
                        ? "Electronics & System Demonstration"
                        : "Hands-on Student Practical Work");

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-900"
                      >
                        <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                          <Image
                            src={src}
                            alt={title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300" />
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <span className="text-sm font-semibold text-white drop-shadow-sm leading-snug">
                              {title}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );

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
                src={convertImageToWebp(currentSrc)}
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
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of Electronics & Telecommunication Engineering
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with cutting-edge education and
            research in electronics and telecommunication engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
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
