"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ================== STAFF DATA ==================
const staffData = [
  {
    sn: 1,
    id: "3105",
    name: "Dr. Awantika Bijwe",
    designation: "Assistant Professor & HOD",
    department: "MCA",
    qualification: "Ph.D. MCA ME(Comp. Eng.)",
    doj: "01/07/2024",
    dob: "26/05/1982",
    image: "/faculty/final_Icem_branding/bba_bca/Dr. Awantika Bijwe.webp",
  },
  {
    sn: 2,
    id: "2343",
    name: "Dr. Dhanashree Vishal Pisal",
    designation: "Assistant Professor",
    department: "MCA",
    qualification: "BCA MCA",
    doj: "06/01/2023",
    dob: "08/03/1989",
    image: "/faculty/final_Icem_branding/mca/Dr. Dhanashree Pisal.webp",
  },
  {
    sn: 3,
    id: "3219",
    name: "Mr. Sanjay Mathapati",
    designation: "Assistant Professor",
    department: "MCA",
    qualification: "ADCA MCM MCA",
    doj: "22/09/2025",
    dob: "22/01/1975",
    image: "/faculty/final_Icem_branding/mca/Mr. Sanjay Mathapati.webp",
  },
  {
    sn: 4,
    id: "3264",
    name: "Dr. Bhushan Ashokrao Nikam",
    designation: "Assistant Professor",
    department: "MCA",
    qualification: "B.Sc M.Sc MCA Ph.D NET",
    doj: "08/01/2026",
    dob: "23/04/1973",
    image: "/faculty/final_Icem_branding/mca/Dr. Bhushan Nikam.webp",
  },
  {
    sn: 5,
    id: "3115",
    name: "Ms. Shraddha Vishnu Murade",
    designation: "Assistant Professor",
    department: "MCA",
    qualification: "B.Sc MCA",
    doj: "24/09/2024",
    dob: "11/07/1999",
    image: "/faculty/final_Icem_branding/mba/shraddhamurade.webp",
  },
  {
    sn: 6,
    id: "3285",
    name: "Dr. Namita Chawla",
    designation: "Assistant Professor",
    department: "MCA",
    qualification: "MCA, Ph.D.; PostDoc (Pursuing)",
    doj: "23/02/2026",
    dob: "23/03/1985",
    image: "",
  },
];

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "mca-2024-26",
    label: "MCA-(2024-26) Syllabus",
    pdf: "/programs/mca/fy_sy_mca_2026_2028_syllabus.pdf",
  },
  {
    id: "mca-2025-27",
    label: "MCA-(2025-27) Syllabus",
    pdf: "/programs/mca/fy_sy_mca_2025_2027_syllabus.pdf",
  },
];

const activitiesList = [
  {
    heading: "1. Session “Innovation/Start up Eco System”",
    desc: `The Department of MASTERS IN COMPUTER APPLICATIONS at Imperial College of Engineering and Management (ICEM) organized an insightful session on the topic "Innovation/Start-Up Ecosystem" under the banner of the Institution’s Innovation Council (IIC) on 23rd July 2025.

The session was coordinated by Prof. Dhanashree Pisal, who took the initiative to facilitate this enriching experience for the students. The session was delivered by Prof. Aditi Huparikar, a knowledgeable and experienced speaker in the domain of entrepreneurship and innovation.`,
  },
  {
    heading: "2. Project Presentation on Innovative Ideas",
    desc: `The Department of MCA at Indira College of Engineering & Management organized an "Innovative Ideas Project Presentation" on 22nd April, 2025 under the Institution’s Innovation Council (IIC) initiative for FYMCA students.

This event aimed to foster creativity, problem-solving, and an entrepreneurial mindset among first-year students. Held on campus, the activity encouraged participants to present unique project ideas addressing real-world challenges across domains like technology, healthcare, education, and sustainability.`,
  },
  {
    heading: "3. Fort Cleaning Activity",
    desc: `The MCA Department organized a Fort Cleaning Activity on 7th December 2024 to promote cleanliness and heritage conservation.

Total 55 students actively participated in fort cleaning activity. The activity was coordinated by Prof. Dhanashree Patil.`,
  },
  {
    heading: "4. Copyright Filing Process",
    desc: `Institution’s Innovation Council at ICEM & MCA Department organized an IPR session on “Copyright Filing Process” on 7th Feb, 2025 from 3 pm to 5 pm.

Prof. Dhanashree Patil guided FYMCA students through the step-by-step procedure of filing a copyright application.`,
  },
  {
    heading: "5. Project Presentation on Innovative Ideas",
    desc: `The Department of MCA at Indira College of Engineering & Management organized a "Project Presentation on Innovative Ideas" on 19th Nov, 2024 under the Institution’s Innovation Council (IIC).

This initiative fostered creativity, problem-solving, and an entrepreneurial mindset among students.`,
  },
  {
    heading: "6. Teckshetra-2025",
    desc: `Department of MCA successfully organized Teckshetra 2025 on 17th Feb, 2025 with enthusiastic participation from various colleges.

Two major events were organized:

1. UI Design Competition  
2. CodeFest Competition

Both events were coordinated by Prof. Dhanashree Patil.`,
  },
  {
    heading: "7. Industry Visit",
    desc: `The MCA Department organized an insightful industry visit to the Software Technology Parks of India (STPI) on 14th November 2024.

Mr. Manhar Gadhavi delivered an interactive session on current IT trends and the importance of professional networking.`,
  },
  {
    heading: "8. OMT for FY MCA batch 2025–2027",
    desc: `The Outdoor Management Training (OMT) on September 13, 2025 was a full-day session aimed at enhancing teamwork, leadership, and problem-solving abilities.

The session was conducted from 09:00 AM to 04:30 PM under the guidance of Prof. Atul Gore Sir.`,
  },
];

// ================== FACULTY IMAGES ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`,
}));

// ================== MAIN COMPONENT ==================
export default function FAQMCA() {
  const [active, setActive] = useState("About Us");

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "The knowledge and skills required for planning; designing and building Complex, Intelligent Software Systems are highly valued in all industrial sectors like business, health care, education and manufacturing. Master program in Computer Application (M.C.A) is steady stream of the essential knowledge, skills and foundation for acquiring a wide range of rewarding careers into the rapidly expanding world of the Information Technology.",

          "The Curriculum is well updated with latest technology like Big Data Analytics, Cloud Computing, Service Oriented Architecture, and Python Programming along with core subjects and management skill development for being successful tech-managers, utilizing the resources to their fullest.",

          "The department of MCA is affiliated to Savitribai Phule Pune University (SPPU) and approved by All India Council for Technical Education (AICTE), New-Delhi at Indira College of Engineering & Management with intake of 60 students.",
        ],
        "Vision": [
          "To offer a well-balanced program of instructions, practical experience and to provide opportunities for overall development, groom the students in excellent professionals, knowledge seekers and good human being."
        ],
        "Mission": [
          "To prepare learner-sensitive educators with the knowledge, skills, and dispositions to contribute to a better society.",
          "To ensure quality learning & teaching take place in the classroom every day.",
          "To provide equitable access to quality education for the students.",
          "Teacher facilitate learning & constantly nature every learner.",
          "Our Mission is to foster the success of our students and their communities through innovative, flexible learning opportunities for people of all ages, backgrounds, and aspirations resulting in self-fulfillment and competitiveness in an increasingly global society.",
          "To strive for excellence in development and deployment of computer applications by empowering students.",
          "To impart quality and value based education to raise satisfaction level of all stakeholders and enhancing sense of social responsibility."
        ]
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
          program: "MCA",
          intake: "60 Seats",
          duration: "2 Years",
          type: "Full Time",
        },
      ],
    },

    // "Eligibility Criteria": {
    //   type: "eligibility-table",
      // content: [
      //   {
      //     leftTitle:
      //       "1. For Maharashtra State Candidates, All India Candidature Candidates, Union Territory of Jammu and Kashmir and Union Territory of Ladakh Migrant Candidature Candidates.",
      //     leftPoints: [
      //       "(i) should be a citizen of India;",
      //       "(ii) should have passed any graduation degree (e.g.: B.E. or B.Tech. or B.Sc or B.Com. or B.A. or B. Voc. or BCA etc.,) preferably with Mathematics at 10+2 level or at Graduation level and obtained at least fifty per cent marks (at least forty-five per cent in case of candidates of Reserved Categories, Economically Weaker Section and Persons with Disability category belonging to the Maharashtra State) in the qualifying examination;",
      //       "(iii) should have obtained non zero score in MAH–MCA–CET 2025 conducted by the Competent Authority.",
      //     ],

      //     rightTitle:
      //       "2. Non Resident Indian (NRI) or Overseas Citizen of India (OCI) or Person of Indian Origin (PIO), Children of Indian workers in the Gulf countries, Foreign National Candidature Candidates.",
      //     rightPoints: [
      //       "(i) The candidate should have passed any graduation degree (e.g.: B.E. or B.Tech. or B.Sc or B.Com. or B.A. or B.Voc. or BCA etc.,) preferably with Mathematics at 10+2 level or at Graduation level and obtained at least fifty percent marks in the qualifying examination;",
      //       "(ii) Any other eligibility criteria and requirement declared from time to time by the appropriate authority as defined under the Act;",
      //     ],
      //   },
      // ],
    // },

    "Eligibility Criteria": {
      type: "accordion",
      content: {
        "Eligibility Criteria for Admission to MCA 2025-26": [
          "(A) First Year Admission",
          "(1)",
          "For Maharashtra State Candidature Candidates, All India Candidature Candidates, Union Territory of Jammu and Kashmir and Union Territory of Ladakh Migrant Candidature Candidates",
          "The candidate,-",
          "(i) should be a citizen of India;",
          "(ii) should have passed any graduation degree (e.g.: B.E. or B.Tech. or B.Sc or B.Com. or B.A. or B. Voc. or BCA etc.,) preferably with Mathematics at 10+2 level or at Graduation level and obtained at least fifty per cent. marks (at least forty five per cent. in case of candidates of Reserved Categories, Economically Weaker Section and Persons with Disability category belonging to the Maharashtra State) in the qualifying examination;",
          "(iii) should have obtained non zero score in MAH-MCA CET 2025 conducted by the Competent Authority.",
          "(2)",
          "Non Resident Indian (NRI) or Overseas Citizen of India (OCI) or Person of Indian Origin (PIO), Children of Indian workers in the Gulf countries, Foreign National Candidature Candidates",
          "(i) The candidate should have passed any graduation degree (e.g.: B.E. or B.Tech. or B.Sc or B.Com. or B.A. or B. Voc. or BCA etc.,) preferably with Mathematics at 10+2 level or at Graduation level and obtained at least fifty per cent. marks in the qualifying examination;",
          "(ii) Any other eligibility criteria and requirement declared from time to time by the appropriate authority as defined under the Act.",
          "(B) Second Year (Lateral Entry) Admission",
          "Maharashtra State Candidature Candidates and All India Candidature Candidates",
          "(i) The candidate should be a citizen of India;",
          "(ii) The candidate should have passed B.Tech. (Computer Science and Engineering (CSE) or Information Technology (IT)) or B.E. (Computer Science and Engineering (CSE) or Information Technology (IT)) or Bachelor of Computer Applications (BCA) (4 years);",
          "(iii) Any other eligibility criteria and requirement declared from time to time by the appropriate authority as defined under the Act.",
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
    "Staff": {
      type: "staff",
      content: staffData,
    },
    Activities: {
      type: "activities",
      content: activitiesList,
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
                    {title === "Vision" || title === "Mission" ? (
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {items.map((item, i) => (
                          <li key={i} className="text-gray-700 leading-relaxed">
                            {item.trim()}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      items.map((item, i) => {
                      if (typeof item === "object" && item.pdf) {
                        return (
                          <a
                            key={i}
                            href={item.pdf}
                            target="_blank"
                            className="text-secondary underline font-medium hover:text-secondary/80"
                          >
                            {item.label}
                          </a>
                        );
                      }

                      const trimmed = item.trim();
                      const isSection = /^\([A-Z]\)$/.test(trimmed);
                      const isSubpoint = /^\(i{1,3}\)/.test(trimmed);

                      let className = "text-gray-700";
                      if (isSection) {
                        className = "text-gray-800 font-semibold";
                      }

                      let style = {};
                      if (isSubpoint) {
                        style = { paddingLeft: "1.25rem" };
                      }

                      return (
                        <p key={i} className={className} style={style}>
                          {trimmed}
                        </p>
                      );
                    }))}
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

      case "eligibility-table":
        return (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <tbody>
                {data.content.map((row, idx) => (
                  <tr key={idx} className="align-top">
                    <td className="w-1/2 border border-gray-300 p-3 md:p-4">
                      <p className="font-semibold mb-2">{row.leftTitle}</p>
                      <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        {row.leftPoints.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </td>

                    <td className="w-1/2 border border-gray-300 p-3 md:p-4">
                      <p className="font-semibold mb-2">{row.rightTitle}</p>
                      <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        {row.rightPoints.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </td>
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
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
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
      case "activities":
        return (
          <div className="space-y-3 md:space-y-4">
            {data.content.map((ac, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">
                      {ac.heading}
                    </h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="p-3 md:p-4 pt-2 space-y-3">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {ac.desc}
                    </p>

                    {/* IMAGE SPACE */}
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">
                        [ Image will be added here ]
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        );

      // ========== UPDATED MECHANICAL LAB TABLE (2 COLUMNS) ==========

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of MCA
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with cutting-edge education and
            research in computer science 
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
