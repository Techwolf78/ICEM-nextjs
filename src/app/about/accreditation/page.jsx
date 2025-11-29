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
    <div className="w-full mx-auto bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-auto relative">
        <Image
          src="/Facilities/BannerOverviewPage.webp"
          alt="Accreditation Banner"
          className="w-full h-full object-cover"
          width={1700}
          height={600}
        />
      </div>
      {/* === Approvals Section === */}
      <div className="max-w-7xl mx-auto bg-white text-gray-800 px-6 py-12">
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg shadow-gray-200">
            <Image
              src="/homepage-logos/NAAC.jpg"
              alt="NAAC"
              width={350}
              height={350}
              className="mb-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg shadow-gray-200">
            <Image
              src="/homepage-logos/aicte.jpg"
              alt="UGC"
              width={350}
              height={350}
              className="mb-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg shadow-gray-200">
            <Image
              src="/homepage-logos/sspu.jpg"
              alt="SPPU"
              width={300}
              height={300}
              className="mb-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg shadow-gray-200">
            <Image
              src="/homepage-logos/8th.jpg"
              alt=""
              width={350}
              height={350}
              className="mb-2"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 px-6">
        {/* === Awards & Recognitions Section === */}
        <div className="mt-4">
          {/* Intro */}
          <p className="text-gray-700 leading-relaxed mb-8">
            Indira College of Engineering and Management (ICEM) takes great
            pride in its consistent recognition through prestigious awards and
            rankings. These accolades reflect our unwavering commitment to
            academic excellence, innovative teaching practices, and meaningful
            industry collaboration.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-6">
            National & International Awards
          </h2>

          {/* ===== FIRST 4 AWARDS WITH IMAGES ===== */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
            {/* Award 1 */}
            <div className="bg-gray-100 flex flex-col border border-gray-200 rounded-xl shadow-sm">
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 1.jpg"
                  alt="Education Leadership Award 2023"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              <h3 className="text-sm text-center font-semibold text-secondary p-4">
                Education Leadership Award 2023
              </h3>
            </div>

            {/* Award 2 */}
            <div className="bg-gray-100 flex flex-col border border-gray-200 rounded-xl shadow-sm">
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 2.jpg"
                  alt="Education Leadership Award 2023"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              <h3 className="text-sm text-center font-semibold text-secondary p-4">
                Education Leadership Award at the Business Leader of The Year
                Awards-2023 on 17th February 2023 at Mumbai, India
              </h3>
            </div>

            {/* Award 3 */}
            <div className="bg-gray-100 flex flex-col border border-gray-200 rounded-xl shadow-sm">
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 3.jpg"
                  alt="Education Leadership Award 2023"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              <h3 className="text-sm text-center font-semibold text-secondary p-4">
                Exemplary Leader Award at the Asian Leadership Awards at Dubai
                on 11th Oct 2023.
              </h3>
            </div>

            {/* Award 5 */}
            <div className="bg-gray-100 flex flex-col border border-gray-200 rounded-xl shadow-sm">
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 4.jpg"
                  alt="Pune Leadership Awards 2022"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              <h3 className="text-sm text-center font-semibold text-secondary p-4">
                Pune Leadership Awards 2022 Received award for Best Industry
                Academia Interface Received on 30th September 2022
              </h3>
            </div>

            <div className="bg-gray-100 flex flex-col border border-gray-200 rounded-xl shadow-sm">
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 5.jpg"
                  alt="Pune Leadership Awards 2022"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              <h3 className="text-sm text-center font-semibold text-secondary p-4">
                Award for Best Academic and Industry Interface- ABP News
                National Education Awards 2017 on 6th July 2017.
              </h3>
            </div>
              <div className="bg-gray-100 flex flex-col border border-gray-200 rounded-xl shadow-sm">
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 6.jpg"
                  alt="Pune Leadership Awards 2022"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              <h3 className="text-sm text-center font-semibold text-secondary p-4">
                Best Emerging Institute Award - DNA Innovative Education Awards 2016.
              </h3>
            </div>
          </div>

          {/* ===== REMAINING AWARDS — TEXT ONLY ===== */}
          <div className="mt-10 space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">
                Education Leadership Award
              </h3>
              <p className="text-sm text-gray-500">
                Golden Globe Tigers Summit, Malaysia (2018 & 2015)
              </p>
              <p className="text-gray-700 mt-2">
                International recognition for leadership in education management
                and contribution to global educational standards.
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">
                Best Industry-Academia Interface Award 2022
              </h3>
              <p className="text-sm text-gray-500">
                Pune Brand Leadership Awards
              </p>
              <p className="text-gray-700 mt-2">
                Acknowledged for creating robust industry connections that
                enhance student employability and practical exposure.
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">
                Outstanding Engineering College 2017
              </h3>
              <p className="text-sm text-gray-500">
                BBC Knowledge Education Leadership Awards
              </p>
              <p className="text-gray-700 mt-2">
                Celebrated for all-round excellence in engineering education and
                infrastructure facilities.
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">
                Best Emerging Institute Award 2016
              </h3>
              <p className="text-sm text-gray-500">
                DNA Innovative Education Awards
              </p>
              <p className="text-gray-700 mt-2">
                Recognized as a rising institution with exceptional potential
                and innovative approaches to technical education.
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">
                Best Institute in Technical Education 2016
              </h3>
              <p className="text-sm text-gray-500">
                World Education Congress Global Awards
              </p>
              <p className="text-gray-700 mt-2">
                Global acknowledgment for excellence in technical education and
                skill development.
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">
                Best Outstanding Engineering Institute (West) 2015
              </h3>
              <p className="text-sm text-gray-500">
                ABP News National Education Leadership Awards
              </p>
              <p className="text-gray-700 mt-2">
                Early recognition establishing ICEM as a leading engineering
                institution in Western India.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-2 px-2">
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
