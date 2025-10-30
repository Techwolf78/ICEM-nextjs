"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";


function NationalServiceScheme() {
  const [openIndex, setOpenIndex] = useState(null);

  const bannerImg = "/ICEM_Banner.jpg"; // put in public folder
  const beComp = "/BEComp.pdf"; // put in public folder

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

  const reports = [
    "NSS Activity Report 2022-23",
    "NSS Activity Report 2021-22",
    "NSS Activity Report 2020-21",
    "NSS Activity Report 2019-20",
    "NSS Activity Report 2018-19",
    "NSS Activity Report 2017-18",
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={bannerImg}
          alt="ICEM Campus"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            National Service Scheme (NSS)
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About National Service Scheme (NSS)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            NSS has been introduced at <b>Savitribai Phule Pune University</b>{" "}
            since 1969 as part of the academic programs. The overall objective
            is educational, and service to the community is the activity through
            which the objective is achieved.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <b>National Service Scheme (NSS)</b> helps students to cater to the
            needs of the community, develop social responsibility, and
            communicate effectively.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Objectives of NSS
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              Develop social sensitivity, moral values, and professional ethics.
            </li>
            <li>
              Arrange workshops on social issues, ethics, and moral values.
            </li>
            <li>
              Organize social service groups, clubs, and outdoor field
              activities.
            </li>
          </ul>

          {/* NSS Activity Report Accordion */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            NSS Activity Reports
          </h3>
          <div className="space-y-2">
            {reports.map((report, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800 underline hover:text-primary transition">
                    {report}
                  </span>
                  <span className="text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-white border-t border-gray-300">
                    <p className="text-gray-700 mb-2">
                      Click below to view the {report} PDF.
                    </p>
                    <a
                      href={beComp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      View Report
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
         <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default NationalServiceScheme;
