"use client";

import { useState } from "react";

export default function Career() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const pdfFiles = [
    {
      name: "AICTE Degree Pay Qualifications And Promotions",
      file: "/pdfs/AICTE-Degree-Pay-Qualifications-And-Promotions.pdf",
    },
    {
      name: "SSC Advertisement 2025",
      file: "/pdfs/SSC-Advertisement-2025.pdf",
    },
    {
      name: "Eligibility Criteria",
      file: "/pdfs/EligibilityCriteria.pdf",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">
        Career Advertisement
      </h1>

      {/* PDF List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {pdfFiles.map((doc, index) => (
          <button
            key={index}
            className={`border rounded-lg p-4 text-left shadow-sm hover:shadow-md transition cursor-pointer ${
              selectedPdf === doc.file ? "border-secondary" : "border-gray-300"
            }`}
            onClick={() => setSelectedPdf(doc.file)}
          >
            <p className="font-medium">{doc.name}</p>
            <p className="text-xs mt-2 text-gray-500">Click to view</p>
          </button>
        ))}
      </div>

      {/* PDF Viewer */}
      {selectedPdf ? (
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Viewing: {selectedPdf.split("/").pop()}
          </h2>

          <div className="w-full h-[75vh] border rounded-lg overflow-hidden shadow">
            <iframe
              src={`${selectedPdf}#toolbar=0`}
              className="w-full h-full"
              allow="fullscreen"
            ></iframe>
          </div>

          <div className="mt-4">
            <a
              href={selectedPdf}
              download
              className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary transition"
            >
              Download PDF
            </a>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-sm italic">
          Select a document above to view it.
        </p>
      )}
    </main>
  );
}
