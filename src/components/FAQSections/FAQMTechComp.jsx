"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ================== STAFF DATA ==================
const staffData = [
  {
    sn: 1,
    id: "2032",
    name: "Dr. Soumitra Shibshankar Das",
    designation: "Professor",
    department: "Computer",
    qualification: "BE ME Ph.D",
    doj: "-",
    dob: "-",
    image: "/faculty/final_icem_branding/comp/soumitra_das.webp",
  },
  {
    sn: 2,
    id: "2448",
    name: "Dr. Shwetkranti Nanasaheb Taware",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "ME Ph.D",
    doj: "-",
    dob: "-",
    image: "/faculty/final_icem_branding/comp/Dr. Shwetkranti Taware.webp",
  },
  {
    sn: 3,
    id: "2366",
    name: "Dr. Sunil Damodar Rathod",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "BE ME Ph.D",
    doj: "-",
    dob: "-",
    image: "/faculty/final_icem_branding/comp/Dr. Sunil Rathod.webp",
  },
  {
    sn: 4,
    id: "3111",
    name: "Dr. Malayaj Kumar",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "BE M.Tech Ph.D",
    doj: "-",
    dob: "-",
    image: "/faculty/final_icem_branding/comp/malayaj.webp",
  },
];

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "mtech-syllabus",
    label: "M.Tech 2024-25 Final Syllabus",
    pdf: "/assets/pdf/syllabus/MTECH _2024_25_Final.pdf",
  },
];

// ================== MAIN COMPONENT ==================
export default function FAQMTechComp() {
  const [active, setActive] = useState("About Us");

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "The M.Tech program in Computer Science at ICEM is designed to provide advanced knowledge and skills in the field of computing. The program focuses on research and development, preparing students for leadership roles in the IT industry and academia.",
          "Students benefit from a research-oriented curriculum, state-of-the-art laboratories, and guidance from experienced faculty members. The program covers advanced topics such as Algorithms, Machine Learning, Cybersecurity, and Distributed Systems.",
        ],
      },
    },

    "Sanctioned Intake": {
      type: "table",
      content: [
        {
          program: "M.Tech in Computer Science",
          intake: "12 Seats",
          duration: "2 Years",
          type: "Full Time",
        },
      ],
    },

    "Eligibility Criteria": {
      type: "accordion",
      content: {
        "Eligibility for M.Tech Admission": [
          "The candidate should be an Indian National.",
          "Passed Bachelor Degree in the relevant field of Engineering and Technology from All India Council for Technical Education or Central or State Government approved institutions or equivalent, with at least 50% marks (at least 45% marks in case of candidates of Backward class categories and persons with disability belonging to Maharashtra State only).",
          "Passed Graduate Aptitude Test in Engineering (GATE) conducted by Indian Institute of Technology.",
          "For sponsored candidates, minimum of two years of full time work experience in a registered firm/ company/ industry/ educational and/ or research institute/ any Government Department or Government Autonomous Organization in the relevant field in which admission is being sought.",
        ],
      },
    },

    "Staff": {
      type: "staff",
      content: staffData,
    },
  };

  const tabs = Object.keys(sectionContent);

  const renderContent = (data) => {
    switch (data.type) {
      case "accordion":
        return (
          <div className="space-y-3 md:space-y-4">
            {Object.entries(data.content).map(([title, items]) => (
              <div key={title} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">{title}</h4>
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-3 md:p-4 pt-2 space-y-2">
                    {items.map((item, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">{item}</p>
                    ))}
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
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h5 className="font-semibold text-gray-800">{item.label}</h5>
                <a href={item.pdf} target="_blank" className="px-4 py-2 bg-secondary text-white rounded-md">
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
                  <h4 className="font-bold text-gray-900 mb-1 leading-snug">{staff.name}</h4>
                  <p className="text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">{staff.designation}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 space-y-2 text-left">
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">ID NO:</span>
                      <span className="text-gray-700 font-medium font-mono">{staff.id}</span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">Qualification:</span>
                      <span className="text-gray-700 font-medium">{staff.qualification}</span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">Department:</span>
                      <span className="text-gray-700 font-medium">{staff.department}</span>
                    </div>
                    {staff.doj !== "-" && (
                      <div className="text-[11px]">
                        <span className="text-gray-400 font-bold uppercase mr-1">DOJ:</span>
                        <span className="text-gray-700 font-medium">{staff.doj}</span>
                      </div>
                    )}
                    {staff.dob !== "-" && (
                      <div className="text-[11px]">
                        <span className="text-gray-400 font-bold uppercase mr-1">DOB:</span>
                        <span className="text-gray-700 font-medium">{staff.dob}</span>
                      </div>
                    )}
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
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-3 md:mb-4">M-Tech in Computer Science</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Advanced research and specialization in computing technologies
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-1 md:space-y-2 sticky top-24 self-start border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-lg">Quick Links</h3>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`block w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 ${
                  active === tab ? "bg-secondary text-white shadow-md" : "hover:bg-gray-50 text-gray-700 hover:text-secondary hover:border-l-4 hover:border-secondary"
                }`}
              >
                <span className="font-medium">{tab}</span>
              </button>
            ))}
          </nav>
          <div id="right-content" className="lg:col-span-3 bg-white rounded-xl shadow-sm p-4 md:p-8 border border-gray-100">
            <div className="mb-4 md:mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>
            <div className="content-area">{renderContent(sectionContent[active])}</div>
          </div>
        </div>
      </div>
    </section>
  );
}