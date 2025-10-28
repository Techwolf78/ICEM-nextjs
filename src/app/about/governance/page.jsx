"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Governance() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const CompBrochure = "/pdfs/BEComp.pdf";

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ===== Hero Banner ===== */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/ICEM_Banner.jpg"
          alt="Governance at ICEM"
          className="w-full h-full object-cover"
          height={600}
          width={1700}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Governance at Indira College
          </h1>
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="w-full flex flex-col md:flex-row py-6">
        {/* LEFT SECTION */}
        <div className="md:w-full bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Institutional Governance and Leadership
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Governance at Indira College of Engineering and Management (ICEM)
            emphasizes transparency, accountability, and participative
            decision-making. The institution operates under the strategic vision
            of the Shree Chanakya Education Society (SCES) and adheres to
            policies aligned with AICTE, DTE, and Savitribai Phule Pune
            University.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Governing Body, Academic Council, and various statutory
            committees ensure the seamless implementation of academic,
            financial, and administrative processes. Each committee functions
            under defined responsibilities to maintain compliance, quality, and
            institutional excellence.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The governance model promotes participative leadership where faculty
            and staff contribute to strategic planning, curriculum design, and
            institutional development initiatives. Student representation in key
            bodies fosters inclusion and mutual growth.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Regular audits, feedback mechanisms, and performance reviews are key
            to ensuring that ICEM operates effectively and ethically while
            achieving its educational mission and objectives.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The institutional governance system thus ensures transparency,
            responsibility, and continual improvement in all facets of
            administration — academics, finance, infrastructure, and human
            resources.
          </p>

          {/* ===== Governance Documents Section ===== */}
          <h3 className="mt-10 text-2xl font-bold text-secondary mb-6">
            Institutional Committees & Governance Documents
          </h3>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
            {[
              {
                title: "College Development Committee (CDC)",
                pdf: CompBrochure,
                description:
                  "The CDC oversees academic development, infrastructure improvement, and faculty growth plans. Download the document below for full details.",
              },
              {
                title: "Institute Level Committees - AY 2024-25",
                pdf: CompBrochure,
                description:
                  "Institute-level committees ensure quality assurance and student engagement across all departments.",
              },
              {
                title: "Governing Body (AY 2023-24 to AY 2027-28)",
                pdf: CompBrochure,
                description:
                  "The Governing Body is responsible for strategic direction, policy formulation, and institutional oversight.",
              },
              {
                title: "Academic Council (AY 2023-24 to AY 2025-26)",
                pdf: CompBrochure,
                description:
                  "The Academic Council monitors curriculum design, academic standards, and teaching outcomes.",
              },
              {
                title: "Finance Committee (AY 2023-24 to AY 2025-26)",
                pdf: CompBrochure,
                description:
                  "This committee handles budget planning, fund utilization, and financial audits.",
              },
              {
                title: "Examination Committee (AY 2023-24 to AY 2025-26)",
                pdf: CompBrochure,
                description:
                  "The Examination Committee manages exam schedules, evaluation systems, and result publication.",
              },
            ].map((item, index) => (
              <div key={index} className="overflow-hidden">
                {/* Accordion Header */}
                <div
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="flex justify-between items-center w-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 underline underline-offset-2 hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xl font-bold text-gray-700">
                    {activeFAQ === index ? "−" : "+"}
                  </span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFAQ === index ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed">
                    <p className="mb-3">{item.description}</p>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition"
                    >
                      View / Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
  
      </div>
    </div>
  );
}