"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  
  {
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/Programs/IBBAMCA/SY.pdf",
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
          "The Department offers Integrated MCA(BCA+MCA) program in Computer Applications. This program is affiliated with the University of Pune and is recognized by the Government of Maharashtra and the All-India Council of Technical Education (AICTE), New Delhi.",  
          "Welcome to the Integrated MCA Department, situated on a lush, green campus with state-of-the-art infrastructure. Our department is staffed by experienced faculty and features an employer-aligned curriculum designed to maximize your career relevance. Students will benefit from live sessions with industry experts, project-based assessments, and hands-on experience through live projects. The program provides exposure to international business practices and connects you to an extensive alumni network.",
          "Our comprehensive curriculum includes industry engagement, international visits, and guaranteed placement support. Students will participate in field projects, presentations, role plays, case studies, brainstorming sessions, and guest lectures. Additionally, we offer specialized learning opportunities through events like Outdoor Management Training, GUSTO, I-MUN, IPL, and Techno-Fiesta, all designed to equip you with the essential skills and competencies needed for a successful career."

        ],
        
         Vission: [
          "The institute envisions to develop itself into a center of academic excellence in the field of Engineering and Management education in order to develop future technocrats and managers having right knowledge, skill and attitude to serve the society and industries to fulfill their ever changing requirements."
        ], 
        
         Mission: [
          "To train our students to become best Engineering Entrepreneurs today, who will lead the organizations successfully into the future; locally, nationally and globally",
          "To provide an environment which fosters continuous improvement & innovation with related technical support & facilities to enhance student and faculty effectiveness.",
          "To provide programs focusing on the holistic development of the individual with the emphasis on personality grooming, physical fitness and a strong sense of social and environmental responsibility.",
          "To improve logic & scientific reasoning and to develop global mindset amongst the students and prepare them to work in heterogeneous environment.",
          
        ], 
      }
    },

    Faculty: {
      type: "gallery",
      content: facultyImages,
      title: "Faculty Members"
    },
    "Syllabus & Course Structure": {
      type: "syllabus",
      content: syllabusList
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
                    <h4 className="font-semibold text-secondary text-lg">{title}</h4>
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-2 space-y-2">
                    {items.map((item, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">{item}</p>
                    ))}
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

  
  


      // ========== UPDATED MECHANICAL LAB TABLE (2 COLUMNS) ==========


      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of Mechanical Engineering
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with technical excellence, research, and hands-on engineering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 border border-gray-100 sticky top-24">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Quick Links</h3>

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
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
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>

            {renderContent(sectionContent[active])}
          </div>
        </div>
      </div>
    </section>
  );
}
