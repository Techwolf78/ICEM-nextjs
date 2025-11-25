"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

const Academics = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const iacReports = [
    {
      title: "SPPU Academic Calendar_2025-26.pdf",
      file: "/pdfs/academic/SPPU Academic Calendar_2025-26.pdf",
    },
    {
      title: "SY Autonomy",
      file: "/pdfs/academic/SY Autonomy.pdf",
    },
    {
      title: "FY Autonomy",
      file: "/pdfs/academic/FY Autonomy.pdf",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="w-full h-[60vh] relative">
        <Image
          src={"/BannerOverviewPage.jpg"}
          alt="ICEM Campus"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Academic Cell
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* About Section */}
        <div className="w-full bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About the Academic Cell
          </h2>

          {/* Dean Info Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column - Dean Profile */}
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="w-50 h-60 rounded-lg shadow-md overflow-hidden bg-gray-200 mb-4">
                <Image
                  src="/campuslife/dean.jpg"
                  alt="Dr. Saurabh Harishchand Gupta"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                Dr. Saurabh Harishchand Gupta
              </h3>
              <p className="text-gray-600 text-center mb-6">Dean (Academics)</p>
              
              <div className="w-full">
                <p className="text-gray-700 leading-relaxed text-justify">
                  The <b>Academic Cell</b> is one of the core departments on the
                  campus serving the academic community. It ensures the smooth
                  functioning of all academic operations and facilitates
                  continuous improvement in teaching and learning processes. The
                  cell plays a vital role in academic coordination, planning, and
                  monitoring across all departments of the institution.
                </p>
              </div>
            </div>

            {/* Right Column - Key Activities */}
            <div className="lg:w-2/3 border border-gray-200 rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-secondary mb-6">
                Key Activities Undertaken by the Academic Cell:
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Coordinate the Academic Calendar and teaching plan for the college.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Coordinate with departments for load calculations and faculty assignments.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Counselling on NEP 2020.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Curriculum development and review.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Time Table preparation and monthly review ensuring effective implementation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Classroom allotment and scheduling.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Review and monitor proper conduction of classes and adherence to teaching plan.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Ensure proper conduction of teacher reviews, student feedback, and mentoring.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Collate and report continuous student assessment marks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Oversee preparation of provisional and final detention lists.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Monitor result analysis and academic performance trends.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Coordinate and conduct <b>Founders Day (Graduation Ceremony)</b>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Implement and monitor the Peer Teaching Scheme.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Collect and analyze feedback (online & classroom).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Drive academic reforms and ensure effective implementation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>Coordinate <b>Digital Learning</b> initiatives and monitor online TLP.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* IAC Reports Section */}
        <div className="w-full bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-secondary mb-6">
            IAC Reports
          </h3>
          <div className="space-y-4">
            {iacReports.map((report, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg bg-gray-50 overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-[16px] font-semibold hover:text-secondary transition-colors">
                    {report.title}
                  </span>
                  <span className="text-xl text-gray-700 font-medium min-w-[20px] text-center">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200 animate-fadeIn">
                    <p className="text-gray-700 mb-3">
                      Click below to view the {report.title} document.
                    </p>
                    <a
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary font-semibold hover:text-tertiary transition-colors duration-200 underline"
                    >
                      View Report
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;