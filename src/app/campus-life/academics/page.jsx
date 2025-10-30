"use client";

import React, { useState } from "react";
import Image from "next/image";

const Academics = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const rightLinks = [
    "Student Welfare",
    "Induction Programme",
    "Student Council",
    "National Service Scheme (NSS)",
    "ICEM Awards",
    "Academic Cell",
    "Academic Calendar",
    "Statutory Committee",
    "Non-Statutory Committee",
    "Grievance Redressal",
  ];

  const quickLinks = [
    "Eligibility & Fees",
    "Download Certificate Formats",
    "Admission Helpline",
    "Availability of Forms",
    "Apply Online",
  ];

  const iacReports = [
    "IAC 2024-25 – Odd Semester",
    "IAC 2023-24 – Even Semester",
    "IAC 2021-22 – Sem-I",
    "IAC 2021-22 – Sem-II",
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About the Academic Cell
          </h2>

          {/* Dean Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <div className="w-40 h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-lg shadow-md">
              [ Image Placeholder ]
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Dr. Saurabh Harishchand Gupta
              </h3>
              <p className="text-gray-600">Dean (Academics)</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            The <b>Academic Cell</b> is one of the core departments on the
            campus serving the academic community. It ensures the smooth
            functioning of all academic operations and facilitates continuous
            improvement in teaching and learning processes. The cell plays a
            vital role in academic coordination, planning, and monitoring across
            all departments of the institution.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Key Activities Undertaken by the Academic Cell:
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>
              Coordinate the Academic Calendar and teaching plan for the
              college.
            </li>
            <li>
              Coordinate with departments for load calculations and faculty
              assignments.
            </li>
            <li>Counselling on NEP 2020.</li>
            <li>Curriculum development and review.</li>
            <li>
              Time Table preparation and monthly review ensuring effective
              implementation.
            </li>
            <li>Classroom allotment and scheduling.</li>
            <li>
              Review and monitor proper conduction of classes and adherence to
              teaching plan.
            </li>
            <li>
              Ensure proper conduction of teacher reviews, student feedback, and
              mentoring.
            </li>
            <li>Collate and report continuous student assessment marks.</li>
            <li>
              Oversee preparation of provisional and final detention lists.
            </li>
            <li>Monitor result analysis and academic performance trends.</li>
            <li>
              Coordinate and conduct <b>Founders Day (Graduation Ceremony)</b>.
            </li>
            <li>Implement and monitor the Peer Teaching Scheme.</li>
            <li>Collect and analyze feedback (online & classroom).</li>
            <li>Drive academic reforms and ensure effective implementation.</li>
            <li>
              Coordinate <b>Digital Learning</b> initiatives and monitor online
              TLP.
            </li>
          </ul>

          {/* IAC Report Section */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            IAC Reports
          </h3>

          <div className="space-y-3">
            {iacReports.map((report, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg bg-gray-50 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-100 transition"
                >
                  <span className="underline text-[16px] font-semibold hover:text-secondary transition">
                    {report}
                  </span>
                  <span className="text-xl text-gray-700">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 mb-2">
                      Click below to view the {report} document.
                    </p>
                    <a
                      href={"/BEComp.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary font-semibold underline hover:text-tertiary transition"
                    >
                      View Report
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* Sidebar Links */}
          <ul className="space-y-4 mb-8">
            {rightLinks.map((link, index) => (
              <li
                key={index}
                className="pb-2 border-b border-white/30 hover:text-tertiary cursor-pointer transition-all hover:underline"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Contact Form */}
          <div className="bg-tertiary p-6 rounded-lg mb-8">
            <h3 className="text-center text-lg font-bold mb-4 text-secondary">
              GET IN TOUCH WITH US
            </h3>
            <form className="space-y-3 modal-form">
              <input
                type="text"
                placeholder="YOUR NAME*"
                className="w-full p-2 text-black rounded"
              />
              <div className="flex items-center bg-white rounded">
                <span className="pl-2 text-black">🇮🇳</span>
                <input
                  type="text"
                  placeholder="PHONE NUMBER*"
                  className="w-full p-2 text-black rounded-r"
                />
              </div>
              <input
                type="email"
                placeholder="YOUR EMAIL ID"
                className="w-full p-2 text-black rounded"
              />
              <select className="w-full p-2 text-black rounded">
                <option>Select Program</option>
                <option>Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              <input
                type="text"
                placeholder="STATE"
                className="w-full p-2 text-black rounded"
              />
              <p className="text-xs text-gray-300">
                By providing your contact details, you agree to receive updates
                from Indira College through WhatsApp.
              </p>
              <button
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-2 rounded hover:bg-white hover:text-[#003c84] transition-colors duration-300"
              >
                Apply Now
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-secondary font-bold mb-4 border-t border-white/30 pt-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm hover:text-tertiary cursor-pointer transition"
                >
                  <span className="text-secondary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
