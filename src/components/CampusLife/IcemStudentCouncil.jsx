"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function IcemStudentCouncil() {
  const [openIndex, setOpenIndex] = useState(null);
  const beComp = "/BEComp.pdf";

  const councilReports = [
    "Student Council A.Y. 2024-25",
    "Student Council A.Y. 2023-24",
    "Student Council A.Y. 2022-23",
    "Student Council A.Y. 2019-20",
    "Student Council A.Y. 2018-19",
    "Student Council A.Y. 2017-18",
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Main Content Section */}
      
        {/* Left Section */}
        <div className=" bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            ICEM Student Council
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The purpose of the <b>Students Council (SC)</b> is to provide
            programs, activities, and services which serve the co-curricular,
            cultural, social, recreational, and educational interests of
            students at the University and Colleges. The SC seeks to contribute
            to the development of students’ leadership skills and experience,
            program planning and development, volunteering, and fiscal
            management.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Students’ Council is established under the{" "}
            <b>Maharashtra Public Universities Act, 1994 section 40 (B)</b> and
            under the new{" "}
            <b>Maharashtra Public University Act 2016, Section 99</b>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            <b>Indira College of Engineering and Management (ICEM)</b> has
            formed its Student Council under the guidance of the above-mentioned
            Act. The following are the council members.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Student Council Reports
          </h3>

          <div className="space-y-2">
            {councilReports.map((report, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">{report}</span>
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
    </>
  );
}
