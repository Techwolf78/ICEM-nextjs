"use client";
import { useState } from "react";
import Image from "next/image";
import { GrDownload } from "react-icons/gr";

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

  const sections = {
    naac: {
      title: "NAAC",
      accordions: [
        {
          heading: "SSR Reports Year Wise",

          pdfs: [
            {
              name: "SSR Report 2023",
              url: "/pdfs/accreditation/ICEM-SSR_NAAC-Final-25-March.pdf",
            },
          ],
        },
        {
          heading: "Criteria Wise Details",

          pdfs: [
            {
              name: "Criteria 1 - Action Taken Report",
              url: "/pdfs/accreditation/1.4.1-Action-taken-report.pdf",
            },
            {
              name: "Criteria 1 - Feedback Report",
              url: "/pdfs/accreditation/1.4.2-Feedback-report.pdf",
            },
          ],
        },
        {
          heading: "AQAR Reports",

          pdfs: [
            { name: "AQAR 2018-19", url: "/pdfs/accreditation/AQAR 18-19.pdf" },
            { name: "AQAR 2019-20", url: "/pdfs/accreditation/AQAR 19-20.pdf" },
            { name: "AQAR 2020-21", url: "/pdfs/accreditation/AQAR 20-21.pdf" },
          ],
        },
        {
          heading: "Academic Calendar",

          pdfs: [
            {
              name: "Academic Calendar 2021-22 Sem I",
              url: "/pdfs/accreditation/calendar 2021-22 Sem I.pdf",
            },
            {
              name: "Academic Calendar 2021-22 Sem II",
              url: "/pdfs/accreditation/calendar 2021-22 Sem II.pdf",
            },
            {
              name: "Academic Calendar 2020-21 Sem I",
              url: "/pdfs/accreditation/calendar 20-21 Sem I.pdf",
            },
            {
              name: "Academic Calendar 2020-21 Sem II",
              url: "/pdfs/accreditation/calendar 20-21 Sem II.pdf",
            },
            {
              name: "Academic Calendar 2019-20 Sem I",
              url: "/pdfs/accreditation/calendar 2019-20 Sem I.pdf",
            },
            {
              name: "Academic Calendar 2019-20 Sem II",
              url: "/pdfs/accreditation/calendar 2019-20 Sem II.pdf",
            },
            {
              name: "Academic Calendar 2018-19 Sem I",
              url: "/pdfs/accreditation/calendar 2018-19 Sem I.pdf",
            },
            {
              name: "Academic Calendar 2018-19 Sem II",
              url: "/pdfs/accreditation/calendar 2018-19 Sem II.pdf",
            },
            {
              name: "Academic Calendar 2017-18 Sem II",
              url: "/pdfs/accreditation/calendar 2017-18 Sem II.pdf",
            },
          ],
        },
        {
          heading: "PO's and CO's",

          pdfs: [
            {
              name: "Basic Engineering Vision and Mission_FE",
              url: "/pdfs/accreditation/Basic Engineering Vision and Mission_FE.pdf",
            },
            {
              name: "Civil Engineering Department PEO-PSO-PO",
              url: "/pdfs/accreditation/Civil Engineering Department PEO-PSO-PO.pdf",
            },
            {
              name: "CO_all_19-20",
              url: "/pdfs/accreditation/CO_all_19-20.pdf",
            },
            {
              name: "Institute Mission, Vision",
              url: "/pdfs/accreditation/Institute Mission, Vision.pdf",
            },
            {
              name: "MBA Department -PEO-PSO-PO",
              url: "/pdfs/accreditation/MBA Department -PEO-PSO-PO.pdf",
            },
            {
              name: "Mechanical Engineering Department -PEO-PSO-PO",
              url: "/pdfs/accreditation/Mechanical Engineering Department -PEO-PSO-PO.pdf",
            },
          ],
        },
        {
          heading: "Code of Conduct Handbook",

          pdfs: [
            {
              name: "Code of Conduct Handbook",
              url: "/pdfs/accreditation/Code of Conduct Handbook.pdf",
            },
          ],
        },
        {
          heading: "NAAC Certificate",

          pdfs: [
            {
              name: "NAAC Certificate",
              url: "/pdfs/accreditaion/NAAC-Cerificate-of-Accreditation-2024.pdf",
            },
          ],
        },
        {
          heading: "Procedures and Policies",

          pdfs: [
            {
              name: "Procedures and Policies",
              url: "/pdfs/accreditation/4.4.2 merged.pdf",
            },
          ],
        },
        {
          heading: "Media Center",

          pdfs: [
            {
              name: "NAAC Certificate",
              url: "/pdfs/accreditation/4.4.2 merged.pdf",
            },
          ],
        },
      ],
    },

    iqac: {
      title: "IQAC",
      accordions: [
        {
          heading: "IQAC Committee",

          pdfs: [
            {
              name: "IQAC Committee 2023-24",
              url: "/pdfs/iqac-committee-2024.pdf",
            },
            {
              name: "IQAC Roles & Responsibilities",
              url: "/pdfs/iqac-roles.pdf",
            },
          ],
        }, //in IQAC add the table instead of pdfs
        {
          heading: "IQAC Notices, MOM's & Actions",

          pdfs: [
            {
              name: "Internal Quality Assurance Cell Meeting - 28th March 2023",
              url: "/pdfs/accreditation/28th March 2023.pdf",
            },
            {
              name: "	Internal Quality Assurance Cell Meeting - 24th Dec 2022",
              url: "/pdfs/accreditation/24th Dec 2022.pdf",
            },
            {
              name: "Internal Quality Assurance Cell Meeting - 11th June 2022",
              url: "/pdfs/accreditation/11th June 2022.pdf",
            },
          ],
        },
        {
          heading: "IQAC Formats",

          pdfs: [
            { name: "Quality Assurance Format", url: "/pdfs/qa-format.pdf" },
            { name: "Feedback Forms", url: "/pdfs/feedback-forms.pdf" },
            { name: "Monitoring Formats", url: "/pdfs/monitoring-formats.pdf" },
          ],
        },
      ],
    },

    extended: {
      title: "IQAC (Extended)",
      accordions: [
        {
          heading: "Best Practices",

          pdfs: [
            {
              name: "Best Practices 2023",
              url: "/pdfs/accreditation/Best-Practices.pdf",
            },
            {
              name: "Liaison with Industry",
              url: "/pdfs/accreditation/Liaison with Industry.pdf",
            },
            {
              name: "Scholar Club",
              url: "/pdfs/accreditation/Scholar Club.pdf",
            },
          ],
        },
        {
          heading: "Distinctive Practice",

          pdfs: [
            {
              name: "Distinctive Practices Report",
              url: "/pdfs/accreditation/Distinctiveness.pdf",
            },
            {
              name: "Talent Management Cell",
              url: "/pdfs/accreditation/Talent Management Cell.pdf",
            },
          ],
        },
        {
          heading: "SPPU Annual Report",

          pdfs: [
            {
              name: "Annual Report 2023-24",
              url: "/pdfs/accreditation/Annual Report 2023-24.pdf",
            },
            {
              name: "Annual Report 2022-23",
              url: "/pdfs/accreditation/AnnualReport_2022-23.pdf",
            },
            {
              name: "Annual Report 2021-22",
              url: "/pdfs/accreditation/AnnualReport_2021-2022_CEGP013110.pdf",
            },
          ],
        },
        {
          heading: "Code of Conduct",

          pdfs: [
            {
              name: "Staff Code of Conduct",
              url: "/pdfs/accreditation/Code of  Conduct 2021-22",
            },
          ],
        },
        {
          heading: "NIRF",

          pdfs: [
            { name: "NIRF Data 2023", url: "/pdfs/nirf-2023.pdf" },
            {
              name: "NIRF Submission Report",
              url: "/pdfs/nirf-submission.pdf",
            },
          ],
        },
        {
          heading: "Financial Statements",

          pdfs: [
            { name: "Audit Report 2022-23", url: "/pdfs/audit-2023.pdf" },
            {
              name: "Financial Statement 2023",
              url: "/pdfs/financial-2023.pdf",
            },
          ],
        },
        {
          heading: "Soft Skills and Aptitude Reports",

          pdfs: [
            {
              name: "Soft Skills Report 2023",
              url: "/pdfs/soft-skills-2023.pdf",
            },
            {
              name: "Aptitude Test Results",
              url: "/pdfs/aptitude-results.pdf",
            },
            { name: "Placement Training", url: "/pdfs/placement-training.pdf" },
          ],
        },
      ],
    },
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
