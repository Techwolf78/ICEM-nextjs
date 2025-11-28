"use client";

import { useState } from "react";

export default function Feedback() {
  const [showReport, setShowReport] = useState(false);

  const feedbackOptions = [
    {
      label: "Faculty Feedback",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdA4-hcBBH-r45uImrg9FkGHYd_WuBNxaD1V1SJl17oHyrdRA/viewform",
    },
    {
      label: "Student Feedback",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe2-sCB9tIfiRenUmudOMhxFJuwNAo2rDsN5N5pwgkIjihtLg/viewform?usp=send_form",
    },
    {
      label: "Alumni Feedback",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfy2pzJ63oex27Ets1ypbG7ajNSrvnVzhezvMajs9CHJP7wiA/viewform?usp=send_form",
    },
    {
      label: "Employer Feedback",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeDJTAFqd9GWlu05Fph7sVmYWuhjoiqlszCGU5WsfQmgeBLeA/viewform?usp=send_form",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
        Feedback Portal
      </h1>

      <p className="text-gray-600 mb-8 text-sm sm:text-base">
        Help us improve by providing valuable feedback. Choose your category and
        submit your response.
      </p>

      {/* Buttons Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {feedbackOptions.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400  rounded-lg p-4 text-center shadow-lg hover:shadow-xl hover:bg-gray-50 transition block"
          >
            <p className="font-semibold">{item.label}</p>
            <p className="text-xs text-gray-500 mt-1">Submit Feedback</p>
          </a>
        ))}
      </div>

      {/* Feedback Report Viewer */}
      <div className="mb-6">
        <button
          onClick={() => setShowReport(!showReport)}
          className="px-4 py-2 bg-secondary w-full text-white rounded-md hover:bg-secondary transition"
        >
          {showReport ? "Hide Feedback Report" : "View Feedback Report"}
        </button>
      </div>

      {showReport && (
        <div className="w-full h-[75vh] border rounded-lg overflow-hidden shadow">
          <iframe
            src="/pdfs/FeedbackReport.pdf#toolbar=0"
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </main>
  );
}
