"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "fe",
    label: "FE B.Tech (2025 Pattern) Syllabus",
    pdf: "/Programs/ENTC/FE.pdf",
  },
  {
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/Programs/ENTC/SE.pdf",
  },
  {
    id: "te",
    label: "TE ENTC Engineering (2019 Pattern) Syllabus",
    pdf: "/Programs/ENTC/TE.pdf",
  },
  {
    id: "be",
    label: "BE ENTC (2019 Pattern) Syllabus",
    pdf: "/Programs/ENTC/BE.pdf",
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
export default function FAQENTC() {
  const [active, setActive] = useState("About Us");

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
          program: "B.Tech Electronics & Telecommunication Engineering",
          intake: "30 Seats",
          duration: "4 Years",
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
  };

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    switch (data.type) {
      case "accordion":
        return (
          <div className="space-y-4">
            {Object.entries(data.content).map(([title, items]) => (
              <div key={title} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">
                      {title}
                    </h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="p-4 pt-2 space-y-2">
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

      case "syllabus":
        return (
          <div className="space-y-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
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
      case "table":
        return (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 border-b font-semibold">Program</th>
                  <th className="p-3 border-b font-semibold">Intake</th>
                  <th className="p-3 border-b font-semibold">Duration</th>
                  <th className="p-3 border-b font-semibold">Type</th>
                </tr>
              </thead>

              <tbody>
                {data.content.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{row.program}</td>
                    <td className="p-3">{row.intake}</td>
                    <td className="p-3">{row.duration}</td>
                    <td className="p-3">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of Electronics & Telecommunication Engineering
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with cutting-edge education and
            research in electronics and telecommunication engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 sticky top-24 self-start border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">
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
            className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100"
          >
            <div className="mb-6 pb-4 border-b border-gray-200">
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
