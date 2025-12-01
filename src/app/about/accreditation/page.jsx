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
          priority
        />
      </div>

      {/* === Approvals Section === */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4">
          ACCREDITATION AND APPROVALS
        </h2>
        <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
          Indira College of Engineering and Management, Pune is affiliated to
          Savitribai Phule Pune University (SPPU), Pune, and is accredited by
          the National Assessment and Accreditation Council (NAAC) with a 'B+'
          Grade. The institute is approved by the Government of Maharashtra and
          recognized by the University Grants Commission (UGC). Indira College
          is committed to delivering quality education in engineering and
          management, fostering academic excellence and holistic student
          development.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg shadow-gray-200">
            <Image
              src="/homepage-logos/NAAC.webp"
              alt="NAAC"
              width={350}
              height={350}
  
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg shadow-gray-200">
            <Image
              src="/homepage-logos/AICTE.webp"
              alt="UGC"
              width={350}
              height={350}

            />
          </div>
          <div className="flex flex-col items-center justify-center p-2 sm:p-4 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg shadow-gray-200">
            <Image
              src="/homepage-logos/sspu.webp"
              alt="SPPU"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg shadow-gray-200">
            <Image
              src="/homepage-logos/8th.webp"
              alt=""
              width={350}
              height={350}

            />
          </div>
        </div>
      </div>

      {/* === Awards & Recognitions Section === */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mt-4">
          {/* Intro */}
          <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            Indira College of Engineering and Management (ICEM) takes great
            pride in its consistent recognition through prestigious awards and
            rankings. These accolades reflect our unwavering commitment to
            academic excellence, innovative teaching practices, and meaningful
            industry collaboration.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6">
            National & International Awards
          </h2>

          {/* ===== AWARDS GRID WITH IMAGES ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Award 1 */}
            <div className="bg-gray-50 flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 sm:h-52 lg:h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 1.webp"
                  alt="Education Leadership Award 2023"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xs sm:text-sm text-center font-semibold text-secondary p-3 sm:p-4 lg:p-6">
                Education Leadership Award 2023
              </h3>
            </div>

            {/* Award 2 */}
            <div className="bg-gray-50 flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 sm:h-52 lg:h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 2.webp"
                  alt="Education Leadership Award at Business Leader Awards"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xs sm:text-sm text-center font-semibold text-secondary p-3 sm:p-4 lg:p-6">
                Education Leadership Award at the Business Leader of The Year
                Awards-2023 on 17th February 2023 at Mumbai, India
              </h3>
            </div>

            {/* Award 3 */}
            <div className="bg-gray-50 flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 sm:h-52 lg:h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 3.webp"
                  alt="Exemplary Leader Award at Asian Leadership Awards"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xs sm:text-sm text-center font-semibold text-secondary p-3 sm:p-4 lg:p-6">
                Exemplary Leader Award at the Asian Leadership Awards at Dubai
                on 11th Oct 2023.
              </h3>
            </div>

            {/* Award 4 */}
            <div className="bg-gray-50 flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 sm:h-52 lg:h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 4.webp"
                  alt="Pune Leadership Awards 2022"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xs sm:text-sm text-center font-semibold text-secondary p-3 sm:p-4 lg:p-6">
                Pune Leadership Awards 2022 Received award for Best Industry
                Academia Interface Received on 30th September 2022
              </h3>
            </div>

            {/* Award 5 */}
            <div className="bg-gray-50 flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 sm:h-52 lg:h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 5.webp"
                  alt="ABP News National Education Awards 2017"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xs sm:text-sm text-center font-semibold text-secondary p-3 sm:p-4 lg:p-6">
                Award for Best Academic and Industry Interface- ABP News
                National Education Awards 2017 on 6th July 2017.
              </h3>
            </div>

            {/* Award 6 */}
            <div className="bg-gray-50 flex flex-col border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 sm:h-52 lg:h-56 rounded-t-xl overflow-hidden">
                <Image
                  src="/accreditations/Awards 6.webp"
                  alt="DNA Innovative Education Awards 2016"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xs sm:text-sm text-center font-semibold text-secondary p-3 sm:p-4 lg:p-6">
                Best Emerging Institute Award - DNA Innovative Education Awards
                2016.
              </h3>
            </div>
          </div>

          {/* ===== REMAINING AWARDS — TEXT ONLY ===== */}
          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
            <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-secondary">
                Education Leadership Award
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Golden Globe Tigers Summit, Malaysia (2018 & 2015)
              </p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                International recognition for leadership in education management
                and contribution to global educational standards.
              </p>
            </div>

            <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-secondary">
                Best Industry-Academia Interface Award 2022
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Pune Brand Leadership Awards
              </p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Acknowledged for creating robust industry connections that
                enhance student employability and practical exposure.
              </p>
            </div>

            <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-secondary">
                Outstanding Engineering College 2017
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                BBC Knowledge Education Leadership Awards
              </p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Celebrated for all-round excellence in engineering education and
                infrastructure facilities.
              </p>
            </div>

            <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-secondary">
                Best Emerging Institute Award 2016
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                DNA Innovative Education Awards
              </p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Recognized as a rising institution with exceptional potential
                and innovative approaches to technical education.
              </p>
            </div>

            <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-secondary">
                Best Institute in Technical Education 2016
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                World Education Congress Global Awards
              </p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Global acknowledgment for excellence in technical education and
                skill development.
              </p>
            </div>

            <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-secondary">
                Best Outstanding Engineering Institute (West) 2015
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                ABP News National Education Leadership Awards
              </p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Early recognition establishing ICEM as a leading engineering
                institution in Western India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* === Accordion Sections === */}
      <div className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-3 sm:p-6 rounded-xl shadow-md space-y-8 sm:space-y-12">
          {Object.keys(sections).map((key) => (
            <div key={key}>
              <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6">
                {sections[key].title}
              </h2>
              {sections[key].accordions.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-gray-50 shadow-sm overflow-hidden mb-3"
                >
                  <button
                    onClick={() => toggleAccordion(key, index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-100 transition text-sm sm:text-base"
                  >
                    <span className="text-left">{item.heading}</span>
                    <span className="text-xl text-secondary ml-2">
                      {openAccordions[key] === index ? "−" : "+"}
                    </span>
                  </button>
                  {openAccordions[key] === index && (
                    <div className="p-4 bg-white border-t border-gray-200 text-gray-700">
                      {/* Show content if exists */}
                      {item.content && (
                        <p className="mb-4 text-sm sm:text-base">
                          {item.content}
                        </p>
                      )}

                      {/* Show table if isTable is true */}
                      {item.isTable && item.tableData && (
                        <div className="mb-6 overflow-x-auto">
                          <div className="min-w-full inline-block align-middle">
                            <div className="overflow-hidden border border-gray-200 rounded-lg">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                  <tr>
                                    {item.tableData.headers.map(
                                      (header, idx) => (
                                        <th
                                          key={idx}
                                          scope="col"
                                          className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                          {header}
                                        </th>
                                      )
                                    )}
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {item.tableData.rows.map((row, rowIndex) => (
                                    <tr
                                      key={rowIndex}
                                      className={
                                        rowIndex % 2 === 0
                                          ? "bg-white"
                                          : "bg-gray-50"
                                      }
                                    >
                                      {row.map((cell, cellIndex) => (
                                        <td
                                          key={cellIndex}
                                          className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap"
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PDF Section */}
                      {item.pdfs && item.pdfs.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
                            Available Documents:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.pdfs.map((pdf, pdfIndex) => (
                              <div
                                key={pdfIndex}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                              >
                                <span className="text-xs sm:text-sm font-medium text-gray-700 truncate pr-2">
                                  {pdf.name}
                                </span>
                                <div className="flex gap-2 shrink-0">
                                  <button
                                    onClick={() => handleViewPDF(pdf.url)}
                                    className="p-1 hover:bg-gray-200 rounded"
                                    title="View PDF"
                                  >
                                    <img
                                      src="/new-tab.png"
                                      alt="View PDF"
                                      className="w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDownload(pdf.url, pdf.name)
                                    }
                                    className="p-1 hover:bg-gray-200 rounded"
                                    title="Download PDF"
                                  >
                                    <GrDownload className="w-4 h-4 sm:w-5 sm:h-5" />
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
