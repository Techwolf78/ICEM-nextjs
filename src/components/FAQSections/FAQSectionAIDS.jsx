"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== DATA SECTION ==================
const sanctionIntake = [
  { program: "B.Tech AIDS Engineering", intake: "60 Seats", duration: "4 Years", type: "Full Time" },
];

const eligibilityCriteria = [
  {
    program: "B.Tech AIDS Engineering",
    text: `• Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subject.
• Obtained at least 45% marks (40% in case of candidate belonging to reserved category) in the above subjects taken together.
• Valid score in JEE Main/MHT-CET or equivalent entrance examination.`,
  },
];

const feeInfo = `Fee structure for Academic Year 2024-25 will be updated soon.
Please contact the admission office for the latest and exact fee details.`;

const syllabusList = [
  { id: "sybtech", label: "SY B.Tech (2025 Pattern) Syllabus", pdf: "/Programs/AIDS/SESyllabus.pdf" },
  { id: "te", label: "TE AIDS Engineering (2019 Pattern) Syllabus", pdf: "/Programs/AIDS/TEsyllabus.pdf" },
  { id: "be", label: "BE AIDS Engineering (2019 Pattern) Syllabus", pdf: "/Programs/AIDS/BESyllabus.pdf" },
];

const courseStructureImages = [
  { id: "fe1", label: "FE SEM 1 Course Structure", src: "/Programs/AIDS/FESem1.jpg" },
  { id: "fe2", label: "FE SEM 2 Course Structure", src: "/Programs/AIDS/FESem2.jpg" },
  { id: "se1", label: "SE SEM 1 Course Structure", src: "/Programs/AIDS/SYBtechSem1.jpg" },
  { id: "se2", label: "SE SEM 2 Course Structure", src: "/Programs/AIDS/SYBtechSem2.jpg" },
  { id: "te1", label: "TE SEM 1 Course Structure", src: "/Programs/AIDS/TESem1.jpg" },
  { id: "te2", label: "TE SEM 2 Course Structure", src: "/Programs/AIDS/TESem2.jpg" },
  { id: "be1", label: "BE SEM 1 Course Structure", src: "/Programs/AIDS/BESem1.jpg" },
  { id: "be2", label: "BE SEM 2 Course Structure", src: "/Programs/AIDS/BESem2.jpg" },
];

// ================== OVERVIEW SECTION ==================
const overviewData = [
  {
    title: "About Department",
    content: `The Department of Artificial Intelligence and Data Science at ICEM aims to be one of the leading programs to provide value-added quality education in Computer Science and Engineering with specialization in Artificial Intelligence and Data Science.`,
  },
  {
    title: "Vision",
    content: `To revolutionize pool of knowledge and develop innovative, ethical, responsible, and global leaders who will transform Institute and community services.`,
  },
  {
    title: "Mission",
    content: `• To offer an industry ready curriculum and happy learning environment, enabling our learners to become responsible citizens with holistic skill sets, to solve worldwide challenges.
• To inculcate impactful research through global collaborations with faculties, students & industry, using comprehensive technology and infrastructure to nurture innovation.
• To be a contributor towards a sustainable future by promoting conservation, prosperity, and social impact.`,
  },
];

// ================== MAIN COMPONENT ==================
export default function FAQSectionAIDS() {
  const [active, setActive] = useState("Overview");
  const [openOverview, setOpenOverview] = useState(null);
  const [openEligibility, setOpenEligibility] = useState(null);

  return (
    <section className="w-full bg-[#f7f7f7] text-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-secondary mb-8">Department / Admission</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT MENU */}
          <nav className="bg-white rounded-lg shadow-sm p-4 space-y-2 text-sm font-medium">
            {[
              "Overview",
              "Sanction Intake",
              "Eligibility Criteria",
              "Admission Procedure",
              "Fee Structure",
              "Syllabus & Course Structure",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`block w-full text-left px-3 py-2 rounded cursor-pointer hover:bg-gray-100 transition-all ${
                  active === tab ? "border-l-4 border-secondary bg-gray-50 font-semibold text-secondary" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6 space-y-6">
            {/* ✅ OVERVIEW */}
            {active === "Overview" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Overview</h3>
                {overviewData.map((item, idx) => (
                  <div key={idx} className="border rounded-md mb-3 overflow-hidden">
                    <button
                      onClick={() => setOpenOverview(openOverview === idx ? null : idx)}
                      className="flex justify-between items-center px-4 py-3 w-full text-left bg-gray-50 hover:bg-gray-100 font-medium"
                    >
                      <span className="text-secondary">{item.title}</span>
                      <span className="text-xl font-bold text-secondary">{openOverview === idx ? "−" : "+"}</span>
                    </button>
                    {openOverview === idx && (
                      <div className="p-4 bg-white text-gray-700 whitespace-pre-line">{item.content}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ SANCTION INTAKE */}
            {active === "Sanction Intake" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Sanctioned Intake</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left">Program</th>
                        <th className="border p-3 text-left">Intake</th>
                        <th className="border p-3 text-left">Duration</th>
                        <th className="border p-3 text-left">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sanctionIntake.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">{row.program}</td>
                          <td className="border p-3">{row.intake}</td>
                          <td className="border p-3">{row.duration}</td>
                          <td className="border p-3">{row.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ✅ ELIGIBILITY CRITERIA */}
            {active === "Eligibility Criteria" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Eligibility Criteria</h3>
                {eligibilityCriteria.map((item, idx) => (
                  <div key={idx} className="border rounded-md mb-3">
                    <button
                      onClick={() => setOpenEligibility(openEligibility === idx ? null : idx)}
                      className="flex justify-between items-center px-4 py-3 w-full text-left bg-gray-50 hover:bg-gray-100"
                    >
                      <span className="font-semibold text-secondary">{item.program}</span>
                      <span className="text-xl font-bold text-secondary">{openEligibility === idx ? "−" : "+"}</span>
                    </button>
                    {openEligibility === idx && (
                      <div className="p-4 bg-white text-gray-700 whitespace-pre-line">{item.text}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ ADMISSION PROCEDURE */}
            {active === "Admission Procedure" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Admission Procedure</h3>
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    Admission procedure for Academic Year 2024-25 will be updated soon.
                  </p>
                </div>
              </div>
            )}

            {/* ✅ FEE STRUCTURE */}
            {active === "Fee Structure" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Fee Structure</h3>
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-3 whitespace-pre-line">{feeInfo}</p>
                  <p className="text-sm text-gray-500">Contact Admissions for exact and updated fees.</p>
                </div>
              </div>
            )}

            {/* ✅ SYLLABUS & COURSE STRUCTURE */}
            {active === "Syllabus & Course Structure" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Syllabus & Course Structure</h3>

                {/* PDF Links */}
                <div className="space-y-3 mb-6">
                  {syllabusList.map((s) => (
                    <div key={s.id} className="flex items-center justify-between border rounded-md p-3 bg-gray-50">
                      <div className="font-semibold text-secondary">{s.label}</div>
                      <a
                        href={s.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 border rounded text-sm font-medium hover:bg-gray-100"
                      >
                        View / Download
                      </a>
                    </div>
                  ))}
                </div>

                {/* Course Structure Images */}
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Course Structure (click to view full image)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courseStructureImages.map((img) => (
                      <div key={img.id} className="border rounded overflow-hidden bg-white">
                        <div className="relative w-full h-48">
                          <a href={img.src} target="_blank" rel="noopener noreferrer">
                            <Image
                              src={img.src}
                              alt={img.label}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 33vw"
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
