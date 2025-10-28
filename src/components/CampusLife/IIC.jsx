"use client";

import React from "react";

export default function IIC() {
  const establishmentCert = "/Establisment_Certificate.pdf";
  const iicRatingCert = "/IIC_Rating_Certificate_2023-24.pdf";

  const iicTeam = [
    ["1", "Dr. Nilesh Uke, Director", "Head of Institute"],
    ["2", "Dr. Saurabh Gupta, Dean-Academics", "President"],
    ["3", "Ms. Supriya Kumbhar, Asst Prof- FY", "Convener"],
    ["4", "Ms. Minal Patil, Asst Prof-Computer", "Members"],
    ["5", "Ms. Deepa Padwal, Asst Prof-AI/DS", "Members"],
    ["6", "Mr. Vishal Meshram, Asst Prof-Mechanical", "Members"],
    ["7", "Ms. Priyanka Patil, Asst Prof-E&TC", "Members"],
    ["8", "Ms. Aditi Hupparikar, Asst Prof-MBA", "Members"],
    ["9", "Ms. Dhanshri Pisal, Asst Prof-MCA", "Members"],
    ["10", "Ms. Trupti Kathale, Asst Prof-FY", "Members"],
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6">
        Institution's Innovation Council (IIC)
      </h2>

      <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
        <b>Indira College of Engineering and Management</b> has established the <b>Institution's Innovation Council (ICEM - IIC)</b> under the guidelines of the Ministry of Education's Innovation Cell (MIC) to promote innovation and entrepreneurship at the institute level.
      </p>

      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
        <b>Establishment Year:</b> December 2021
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
        Objective of ICEM – IIC
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
        To encourage, inspire and nurture young minds of students by supporting them to work with new ideas and transform them into prototypes as well as products, thus creating a vibrant local innovation ecosystem within the institute.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
        Functions of ICEM – IIC
      </h3>

      <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 mb-6 sm:mb-10 text-sm sm:text-base">
        <li>Conduct various innovation and entrepreneurship-related activities prescribed by the Ministry of Education's Innovation Cell.</li>
        <li>Mentor, identify, and reward innovations, while sharing success stories.</li>
        <li>Organize periodic workshops, seminars, and interactions with entrepreneurs, investors, and professionals to create a mentor pool for student innovators.</li>
        <li>Highlight innovative projects carried out by institution's faculty and students.</li>
        <li>Conduct idea competitions, business plan competitions, mini challenges, and hackathons with active industry involvement.</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
        ICEM – IIC Team
      </h3>
      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
        The team consists of the following members:
      </p>

      <div className="overflow-x-auto mb-6 sm:mb-10">
        <table className="w-full border border-gray-300 text-left text-gray-800 text-xs sm:text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-center">Sr. No.</th>
              <th className="border p-2">Name of Member</th>
              <th className="border p-2">Position assigned in IIC</th>
            </tr>
          </thead>
          <tbody>
            {iicTeam.map(([sr, name, pos]) => (
              <tr key={sr} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2 text-center">{sr}</td>
                <td className="border p-2">{name}</td>
                <td className="border p-2">{pos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Certificates Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-4 sm:p-5 shadow-sm text-center">
          <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">
            Establishment Certificate
          </h4>
          <a
            href={establishmentCert}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline text-sm sm:text-base"
          >
            View Certificate
          </a>
        </div>

        <div className="border border-gray-200 bg-gray-50 rounded-lg p-4 sm:p-5 shadow-sm text-center">
          <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">
            IIC Rating Certificate 2023–24
          </h4>
          <a
            href={iicRatingCert}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline text-sm sm:text-base"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
}