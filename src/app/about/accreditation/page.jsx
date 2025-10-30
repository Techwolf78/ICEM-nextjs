"use client";
import { useState } from "react";
import Image from "next/image";

export default function Accreditation() {
  const [openAccordions, setOpenAccordions] = useState({
    naac: null,
    iqac: null,
    extended: null,
    bottom: null,
  });

  const toggleAccordion = (section, index) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const sections = {
    naac: {
      title: "NAAC",
      accordions: [
        {
          heading: "SSR Reports Year Wise",
          content:
            "This section will contain year-wise SSR reports and related documentation for accreditation purposes.",
        },
        {
          heading: "Criteria Wise Details",
          content:
            "Detailed information and supporting evidence for each NAAC accreditation criteria will be presented here.",
        },
        {
          heading: "AQAR Reports",
          content:
            "Annual Quality Assurance Reports (AQAR) submitted to NAAC for assessment of institutional performance.",
        },
        {
          heading: "NAAC Certificate",
          content:
            "Official NAAC accreditation certificate and other recognition documents.",
        },
      ],
    },

    iqac: {
      title: "IQAC",
      accordions: [
        {
          heading: "IQAC Committee",
          content:
            "List of IQAC committee members with their designations and institutional roles.",
        },
        {
          heading: "IQAC Notices, MOM's & Actions",
          content:
            "Meeting minutes, notices, and action reports from IQAC sessions.",
        },
        {
          heading: "IQAC Formats",
          content:
            "Standard formats used for IQAC documentation and quality assurance processes.",
        },
      ],
    },

    extended: {
      title: "IQAC (Extended)",
      accordions: [
        {
          heading: "Best Practices",
          content:
            "Documentation of best practices adopted by the institution for continual improvement.",
        },
        {
          heading: "Distinctive Practice",
          content:
            "Unique institutional practices contributing to holistic student and faculty development.",
        },
        {
          heading: "SPPU Annual Report",
          content:
            "Savitribai Phule Pune University annual report and related institutional contributions.",
        },
        {
          heading: "Code of Conduct",
          content:
            "Institutional code of conduct for staff and students ensuring ethical governance.",
        },
        {
          heading: "NIRF",
          content:
            "National Institutional Ranking Framework (NIRF) data and submissions.",
        },
        {
          heading: "Financial Statements",
          content:
            "Audited financial reports and institutional expenditure details.",
        },
        {
          heading: "Soft Skills and Aptitude Reports",
          content:
            "Reports highlighting student soft skill training, aptitude assessments, and placement readiness initiatives.",
        },
      ],
    },
  };

  const bottomAccordions = [
    {
      title: "Academic Calendar",
      content: "PDFs and content related to academic calendar year-wise.",
    },
    {
      title: "PO's and CO's",
      content:
        "Program Outcomes (POs) and Course Outcomes (COs) documents for all departments.",
    },
    {
      title: "Code Of Conduct",
      content: "Rules, regulations, and ethical guidelines followed at ICEM.",
    },
    {
      title: "Best Practices @ ICEM",
      content:
        "Innovative and effective institutional practices improving student and staff engagement.",
    },
    {
      title: "Distinctive feature of ICEM",
      content:
        "Unique institutional features and recognitions that distinguish ICEM from other colleges.",
    },
    {
      title: "Procedures and Policies",
      content:
        "Official policy documents and procedural guidelines for staff/students.",
    },
    {
      title: "Media Center",
      content:
        "Photos, videos, and press releases related to college achievements and events.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Accreditation Banner"
          className="w-full h-full object-cover"
          width={1700}
          height={600}
        />
      </div>
      {/* === Approvals Section === */}
      <div className="w-full bg-white text-gray-800 px-6 py-12">
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          ACCREDITATION AND APPROVALS
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Indira College of Engineering and Management, Pune is affiliated to
          Savitribai Phule Pune University (SPPU), Pune, and is accredited by
          the National Assessment and Accreditation Council (NAAC) with a ‘B+’
          Grade. The institute is approved by the Government of Maharashtra and
          recognized by the University Grants Commission (UGC). Indira College
          is committed to delivering quality education in engineering and
          management, fostering academic excellence and holistic student
          development.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105">
            <Image
              src="/NAAC.webp"
              alt="NAAC"
              width={200}
              height={200}
              className="mb-2"
            />
            <p className="font-semibold text-center">NAAC Accredited</p>
          </div>
           <div className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105">
            <Image
              src="/AICTE.webp"
              alt="UGC"
              width={200}
              height={200}
              className="mb-2"
            />
            <p className="font-semibold text-center">Approved by AICTE</p>
          </div>
           <div className="flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105">
            <Image
              src="/SPPU.webp"
              alt="SPPU"
              width={200}
              height={200}
              className="mb-2"
            />
            <p className="font-semibold text-center">Affiliated to SPPU Pune</p>
          </div>
           <div className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105">
            <Image
              src="/coming-soon.webp"
              alt="Coming Soon"
              width={200}
              height={200}
              className="mb-2"
            />
            <p className="font-semibold text-center">Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto py-2 px-2">
        {/* Left Section */}
        <div className="md:w-full bg-white p-3 rounded-xl shadow-md space-y-12">
          {/* === NAAC Section === */}
          {Object.keys(sections).map((key) => (
            <div key={key}>
              <h2 className="text-2xl font-semibold text-secondary mb-6">
                {sections[key].title}
              </h2>
              {sections[key].accordions.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-gray-50 shadow-sm overflow-hidden mb-3"
                >
                  <button
                    onClick={() => toggleAccordion(key, index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-100 transition"
                  >
                    {item.heading}
                    <span className="text-xl text-secondary">
                      {openAccordions[key] === index ? "−" : "+"}
                    </span>
                  </button>
                  {openAccordions[key] === index && (
                    <div className="p-4 bg-white border-t border-gray-200 text-gray-700">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
