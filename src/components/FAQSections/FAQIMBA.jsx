"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  
  {
    id: "sybtech",
    label: "First Year (I-MBA) Integrated- Masters of Business Management Syllabus",
    pdf: "/Programs/IBCAMBA/IMBASY.pdf",
  },  
];

// ================== FACULTY IMAGES ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`
}));

// ================== MAIN COMPONENT ==================
export default function FAQENTC() {
  const [active, setActive] = useState("About Us");

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "The Department of BBA offers undergraduate programs in Human Resource Management, Marketing Management, and Financial Management. These programs are affiliated with the University of Pune and are recognized by the Government of Maharashtra and the All-India Council of Technical Education (AICTE), New Delhi.",
          "Welcome to the BBA Department, set within a lush green campus featuring Advanced infrastructure. Our department boasts experienced teaching staff and an employer-aligned curriculum designed to ensure optimal relevance for your career",
          "Students will benefit from live sessions with industry experts, project-based assessments, and real work experience through live projects. You'll gain exposure to international business practices and be part of a vast alumni network",
          "Our comprehensive program includes industry exposure, foreign visits, and 100% placement assistance. Students will engage in field projects, presentations, role plays, case studies, brainstorming sessions, and guest lectures. Additionally, we offer learning management tactics through events like Outdoor Management Training, GUSTO, I-MUN, IPL, and Youth Parliament, all aimed at equipping you with essential skills and competencies for a successful career.",
        ],

        "Programs Offered ": [
          "The Bachelor of Business Administration (BBA) is a comprehensive undergraduate program designed to equip students with a solid foundation in various aspects of business management. This overview covers the three primary specializations within the BBA program: Human Resources (HR), Finance, and Marketing. Each specialization offers a unique set of courses and experiences to prepare students for successful careers in their chosen field.",
        ],
      },
    },
    // ================= NEW SECTIONS FOR BBA / IT =================

    "Fee Structure": {
  type: "syllabus",
  content: [
    {
      id: "fee-structure",
      label: "Fee Structure (2025–26)",
      pdf: "/Programs/Computer/Feestructure2526.pdf",
    },
    {
      id: "fee-fra",
      label: "FRA Document",
      pdf: "/Programs/Computer/NewFRA.pdf",
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
          program: "Integrated MBA (BBA + MBA) Program",
          intake: "60 Seats",
          duration: "5 Years",
          type: "Full Time",
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
        "Integrated MBA Eligibility": [
          "For First Year: - (1) Candidates passing SSC and HSC or 10+2 Examination or Diploma in Engineering or D. Voc. Examination from a recognized institution in the Maharashtra State",
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
  };

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    switch (data.type) {
      case "accordion":
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
                  <p key={i} className="text-gray-700 leading-relaxed">{item}</p>
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

  
  


      // ========== UPDATED MECHANICAL LAB TABLE (2 COLUMNS) ==========


      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-8 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-6 md:mb-12">
      <h2 className="text-4xl font-bold text-secondary mb-3 md:mb-4">
        Department of MBA
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Empowering future innovators with cutting-edge education and research in MBA
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">

      {/* LEFT MENU */}
      <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-1 md:space-y-2 sticky top-24 self-start border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-lg">Quick Links</h3>

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
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

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
        <div className="mb-4 md:mb-6 pb-4 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-secondary">
            {active}
          </h3>
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
