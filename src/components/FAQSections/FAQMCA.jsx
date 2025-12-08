"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "sybtech",
    label: "MCA-(2024-26) Syllabus",
    pdf: "/Programs/MCA/SY2426.pdf",
  },
  {
    id: "sybtech",
    label: "MCA-(2025-27) Syllabus",
    pdf: "/Programs/MCA/SY2527.pdf",
  },
];

const activitiesList = [
  {
    heading: "1. Session “Innovation/Start up Eco System”",
    desc: `The Department of Master of Computer Applications (MCA) at Imperial College of Engineering and Management (ICEM) organized an insightful session on the topic "Innovation/Start-Up Ecosystem" under the banner of the Institution’s Innovation Council (IIC) on 23rd July 2025.

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
export default function FAQENTC() {
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
      },
    },
    // ================= NEW SECTIONS FOR IMCA =================

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

      case "eligibility-table":
        return (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <tbody>
                {data.content.map((row, idx) => (
                  <tr key={idx} className="align-top">
                    <td className="w-1/2 border border-gray-300 p-4">
                      <p className="font-semibold mb-2">{row.leftTitle}</p>
                      <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        {row.leftPoints.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </td>

                    <td className="w-1/2 border border-gray-300 p-4">
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
      case "activities":
        return (
          <div className="space-y-4">
            {data.content.map((ac, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">
                      {ac.heading}
                    </h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="p-4 pt-2 space-y-3">
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
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of MCA
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with cutting-edge education and
            research in computer science 
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
