"use client";
import { useState } from "react";
import Image from "next/image";
import { GrDownload } from "react-icons/gr";
import { sections } from "../../../static/accreditation/accreditation";

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

  const handleDownload = async (pdfUrl, pdfName) => {
    try {
      // Fetch the PDF file
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error("PDF file not found");
      }

      // Convert response to blob
      const blob = await response.blob();

      // Create blob URL
      const blobUrl = window.URL.createObjectURL(blob);

      // Create temporary link and trigger download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = pdfName;
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Error downloading PDF. Please try again later.");
    }
  };

  // Function to view PDF in new tab
  const handleViewPDF = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  

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
                      <p className="mb-4">{item.content}</p>
                      {/* PDF Section */}
                      {item.pdfs && item.pdfs.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Available Documents:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {item.pdfs.map((pdf, pdfIndex) => (
                              <div
                                key={pdfIndex}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                              >
                                <span className="text-sm font-medium text-gray-700">
                                  {pdf.name}
                                </span>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleViewPDF(pdf.url)}
                                    className="px-3 py-1"
                                  >
                                    <img
                                      src="/new-tab.png"
                                      alt="View PDF"
                                      className="w-5 h-5"
                                    />
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDownload(pdf.url, pdf.name)
                                    }
                                    className="px-3 py-1"
                                  >
                                    <GrDownload />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
