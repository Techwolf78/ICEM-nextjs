"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";
import EnquireNowProgramModal from "@/components/EnquireNowProgramModal";

export default function ENTC() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("admissions");

  // ✅ Ref for FAQ Section
  const faqRef = useRef(null);

  const [active, setActive] = useState("About Us");

  // ================== SYLLABUS DATA ==================
  const syllabusList = [
    {
      id: "fe",
      label: "FY B.Tech (2025 Pattern) Syllabus",
      pdf: "/programs/ENTC/FE.pdf",
    },
    {
      id: "sybtech",
      label: "SY B.Tech (2025 Pattern) Syllabus",
      pdf: "/programs/ENTC/SE.pdf",
    },
    {
      id: "te",
      label: "TE ENTC Engineering (2019 Pattern) Syllabus",
      pdf: "/programs/ENTC/TE.pdf",
    },
    {
      id: "be",
      label: "BE ENTC (2019 Pattern) Syllabus",
      pdf: "/programs/ENTC/BE.pdf",
    },
  ];

  // ================== MECHANICAL LABORATORIES (2-COLUMN FORMAT) ==================

  // ================== FACULTY IMAGES ==================
  const facultyImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/images/faculty-${(i % 4) + 1}.jpg`,
    alt: `Faculty Member ${i + 1}`,
  }));

  // ================== MAIN COMPONENT ==================
  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "The Electronics & Telecommunication (E&TC) Department at Indira College of Engineering and Management, Pune, aims to create industry-ready engineers with a strong foundation in communication systems, electronics, and modern technologies.",

          " Our program blends theory and hands-on learning through well-equipped laboratories, project-based courses, and industry collaborations, preparing students for careers in telecom, embedded systems, VLSI, and IT domains",
        ],
        // Vision: [
        //   "To revolutionize pool of knowledge and develop innovative, ethical, responsitble, and global leaders who will transform Institute and community services."
        // ],
        // Mission: [
        //   "To offer an industry ready curriculum and happy learníng environment, enabling our learners To become responsible citizens with holistic skill sets, to solve worldwide challenges.",
        //   "To inculcate impactful research through global collaborations with facuties, students & industry, using comprehensive technology and infrastructure to nurture innovation.",
        //   "To be a contributor towards a sustainable future by promoting conservation, prosperity, and social impact."
        // ],
      },
    },
    // ================= NEW SECTIONS FOR ENTC =================

    "FRA - Fee Structure": {
      type: "syllabus",
      content: [
        {
          id: "fee-structure",
          label: "Fee Structure (2025–26)",
          pdf: "/programs/Computer/Feestructure2526.pdf",
        },
        {
          id: "fee-fra",
          label: "FRA Document",
          pdf: "/programs/Computer/NewFRA.pdf",
        },
      ],
    },

    "Admission Procedure": {
      type: "syllabus",
      content: [
        {
          id: "admission",
          label: "Institute Level /ACAP Admission Round Procedure",
          pdf: "/pdfs/AdmissionProcedure.pdf",
        },
      ],
    },

    "Sanctioned Intake": {
      type: "table",
      content: [
        {
          program: "B.Tech Electronics & Telecommunication Engineering",
          intake: "30 Seats",
          duration: "4 Years",
          type: "Full Time",
        },
      ],
    },

  //     "Eligibility Criteria": {
  //       type: "text",
  //       content: `
  // `,
  //     },

    "Eligibility Criteria": {
      type: "accordion",
      content: {
        "Eligibility Criteria for Admission to First Year Engineering 2024-25": [
          "For details about First Year Engineering Admission and Eligibility Criteria, refer https://cetcell.mahacet.org/",
        ],
        "Maharashtra State Candidature Candidates": [
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State), in the above subjects taken together; and the Candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority.",
          "Or",
          "Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
        ],
        "All India Candidature Candidates, Union Territory of Jammu and Kashmir and Union Territory of Ladakh Migrant Candidature Candidates": [
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State) in the above subjects taken together; and should obtain non zero positive score in JEE (Main) B.E./B.Tech or the candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority. However, preference shall be given to the candidate obtaining non zero positive score in JEE (Main) B.E./B.Tech over the candidates who obtained non zero score in CET.",
          "Or",
          "Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
        ],
        "NRI / OCI / PIO, Children of Indian workers in the Gulf countries and Foreign National Candidature Candidates": [
          "The candidate should have passed the HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies, and obtained at least 45 % marks in the above subjects taken together.",
        ],
        "Additional Information": [
          "Any other criterion declared from time to time by the appropriate authority as defined under the Act.",
        ],
        "ENTC Eligibility": [
          "Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subject.Obtained at least 45% marks (40% in case of candidate belonging to reserved category) in the above subjects taken together.Valid score in JEE Main/MHT-CET or equivalent entrance examination.",
        ],
      },
    },

    // Faculty: {
    //   type: "gallery",
    //   content: facultyImages,
    //   title: "Faculty Members",
    // },

    "Syllabus & Course Structure": {
      type: "syllabus",
      content: syllabusList,
    },

    "Laboratories": {
      type: "labs-with-images",
      content: {
        labs: [
          { srNo: 1, labName: "Software Lab" },
          { srNo: 2, labName: "Microcontroller Lab" },
          { srNo: 3, labName: "Digital Electronics Lab" },
          { srNo: 4, labName: "Electronic circuit" },
          { srNo: 5, labName: "Embedded & VLSI Lab" },
          { srNo: 6, labName: "Communication Lab" },
        ],
        images: [
          "/programs/ENTC/entc_lab1.avif",
          "/programs/ENTC/entc_lab2.avif",
        ],
      },
    },

    "Staff": {
      type: "staff-cards",
      content: [
        {
          image: "/assets/images/icemFaculty/Bhagwate_Dhiraj.jpg",
          name: "Bhagwate Dhiraj Shashikant",
          designation: "Assistant Professor",
          qualification: "M.E. E&TC Engineering with 1st Class, PhD Pursuing",
          experience: "15 Years, Research: 02",
          areaOfInterest: "Power Electronics",
          researchPapers: "Scopus indexed: Journal papers: 4, Conference papers: 6"
        },
        {
          image: "/assets/images/icemFaculty/MeenakshiPatil.jpg",
          name: "Mrs. Meenakshi Patil",
          designation: "In-Charge HOD ENTC Dept, Assistant Professor & Controller of Examination",
          qualification: "Ph.D. (Pursuing), M.E. Electronics, B.E. E&TC",
          experience: "18 Years",
          areaOfInterest: "Image Processing, IoT",
          researchPapers: "Scopus indexed: 1, Journal papers: 3, Conference papers: 5"
        },
        {
          image: "/assets/images/icemFaculty/RupaliSalunke.jpg",
          name: "Mrs. Roopali Vilas Salunke",
          designation: "Assistant Professor & Industry Institute Partnership Cell",
          qualification: "Ph.D. Pursuing",
          experience: "17 Years, Industry: 03, Research: 07",
          areaOfInterest: "Digital Twin, Automation",
          researchPapers: "Scopus indexed: 01, Journal papers: 02, Conference papers: 04"
        },
        {
          image: "/assets/images/icemFaculty/Sudhir-Sawarkar.jpg",
          name: "Mr. Sudhir Sawarkar",
          designation: "Assistant Professor",
          qualification: "M.E. (Digital Tech. & Instrumentation)",
          experience: "13 Years",
          areaOfInterest: "ML",
          researchPapers: "Scopus indexed: 0, Journal papers: 0, Conference papers: 4"
        },
        {
          image: "/assets/images/icemFaculty/Priyanka-R-Patil.jpg",
          name: "Mrs. Priyanka R. Patil",
          designation: "Assistant Professor",
          qualification: "M.E. (Embedded System & VLSI) with 1st Class SPPU",
          experience: "1.5 Years",
          areaOfInterest: "IoT, Sensor, Computer Network",
          researchPapers: "Scopus indexed: 0, Journal papers: 2, Conference papers: 1"
        },
        {
          image: "/assets/images/icemFaculty/Balu-Chatrbhuj-Tandale-New.png",
          name: "Prof. Tandale Balu Chatrbhuj",
          designation: "Assistant Professor",
          qualification: "M.E. ENTC, B.E. ENTC",
          experience: "11 Years, Research: 0",
          areaOfInterest: "Image Processing",
          researchPapers: "Scopus indexed: 0, Journal papers: 0, Conference papers: 7"
        }
      ],
    },

    "Newsletter": {
      type: "syllabus",
      content: [
        {
          id: "newsletter",
          label: "ENTC Newsletter",
          pdf: "/programs/ENTC/entc_newsletter.pdf",
        },
      ],
    },
  };

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    switch (data.type) {
      case "accordion":
        return (
          <div className="space-y-3 md:space-y-4">
            {Object.entries(data.content).map(([title, items]) => (
              <div key={title} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">
                      {title}
                    </h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="p-3 md:p-4 pt-2 space-y-2">
                    {items.map((item, i) =>
                      typeof item === "object" && item.pdf ? (
                        <a
                          key={i}
                          href={item.pdf}
                          target="_blank"
                          className="text-secondary underline font-medium hover:text-secondary/80"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-700">
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        );

      case "syllabus":
        return (
          <div className="space-y-3 md:space-y-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <h5 className="font-semibold text-gray-800">{item.label}</h5>
                <a
                  href={item.pdf}
                  target="_blank"
                  className="px-4 py-2 bg-secondary text-white rounded-md"
                >
                  View / Download
                </a>
              </div>
            ))}
          </div>
        );
      case "text":
        return (
          <div className="space-y-3 text-gray-700 leading-relaxed whitespace-pre-line">
            {data.content
              .split("\n")
              .filter((line) => line.trim() !== "")
              .map((line, i) => (
                <p key={i}>{line}</p>
              ))}
          </div>
        );

      case "notice":
        return <p className="text-gray-600 text-lg">{data.content}</p>;
      case "labs-with-images":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Our Laboratories</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.content.labs.map((lab, index) => (
                  <li key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">{lab.srNo}</span>
                    <span className="text-gray-800 font-medium">{lab.labName}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Laboratory Facilities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.content.images.map((imgSrc, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={imgSrc}
                      alt={`Laboratory Facility ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "staff-cards":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.content.map((staff, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-3 border-2 border-gray-200"
                  />
                  <h4 className="text-base font-semibold text-gray-800 mb-1">{staff.name}</h4>
                  <p className="text-secondary font-medium text-sm mb-2">{staff.designation}</p>
                  <div className="space-y-1 text-xs text-gray-600 text-left">
                    <p><strong>Qualification:</strong> {staff.qualification}</p>
                    <p><strong>Experience:</strong> {staff.experience}</p>
                    <p><strong>Area of Interest:</strong> {staff.areaOfInterest}</p>
                    <p><strong>Research Papers:</strong> {staff.researchPapers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "table":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left">Program</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Intake</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {data.content.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">{row.program}</td>
                    <td className="border border-gray-200 px-4 py-2">{row.intake}</td>
                    <td className="border border-gray-200 px-4 py-2">{row.duration}</td>
                    <td className="border border-gray-200 px-4 py-2">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  // Toggle Apply Now Modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Brochure Download
  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochures/ICEMAdmissionBrochure2025.pdf";
    link.download = "ICEM-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Smooth scroll function
  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Calculate active tab index for sliding indicator
  const getActiveTabIndex = () => {
    switch (activeTab) {
      case "admissions":
        return 0;
      case "department":
        return 1;
      default:
        return 0;
    }
  };

  return (
    <div className="w-full bg-white text-white">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full overflow-hidden 
  h-[55vh] md:h-[70vh] lg:h-[75vh] flex items-center">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/programs/Entc1.webp"
      alt="Artificial Intelligence Program"
      fill
      className="
        object-cover 
        object-center 
        md:object-[60%]     /* shifts image left on mid screens */
        scale-100 
        md:scale-105 
        lg:scale-110 
        opacity-90
      "
      priority
    />
  </div>

  {/* Dark Gradient Overlay */}
  <div
    className="
      absolute inset-0 
      bg-gradient-to-r 
      from-black/85 
      via-black/60 
      to-transparent 
      md:via-black/50 
      lg:via-black/40 
      z-10
    "
  />

  {/* Content Wrapper */}
  <div className="relative max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-20 z-20">
    <div className="max-w-2xl md:max-w-xl lg:max-w-3xl text-white">

      {/* Heading */}
      <h2
        className="
          text-xl sm:text-2xl md:text-3xl lg:text-4xl 
          font-bold leading-tight md:leading-snug
        "
      >
        4-Year B.Tech Programme in Electronics <br /> & Telecommunication Engineering
        <br /> 
        <span
          className="
            bg-gradient-to-br 
            from-cyan-400 
            to-sky-400 
            bg-clip-text 
            text-transparent 
            font-extrabold
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
          "
        >
           Engineering the Connected World of Tomorrow
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-3 sm:mt-4 
          text-white/80 
          leading-relaxed 
          max-w-xl md:max-w-md lg:max-w-xl
          text-xs sm:text-sm md:text-base text-justify
        "
      >
        This programme provides a comprehensive foundation in analog and digital
        electronics, communication systems, and signal processing, integrated
        with modern knowledge in VLSI, embedded systems, and IoT. It prepares
        students to design and innovate at the forefront of connectivity and smart
        technology.
      </p>

    {/* Buttons - FIXED */}
    <div className="flex  sm:flex-row gap-3 sm:gap-4 mt-6 ">
      <button
        onClick={toggleModal}
        className="
          bg-[#003c84] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold
          text-xs sm:text-base md:text-lg
          w-full sm:w-auto
          transition-all duration-300
          hover:bg-[#43CBD0] hover:text-white
          border-2 border-transparent hover:border-secondary
          active:scale-95
          hover:transform hover:-translate-y-1
        "
      >
        Enquire Now
      </button>

      <button
        onClick={handleBrochureDownload}
        className="
          bg-[#003c84] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold
          text-xs sm:text-base md:text-lg
          w-full sm:w-auto
          transition-all duration-300
          hover:bg-[#43CBD0] hover:text-white
          border-2 border-transparent hover:border-secondary
          active:scale-95
          hover:transform hover:-translate-y-1
        "
      >
        Download Brochure
      </button>
    </div>

    </div>
  </div>

  {/* Bottom Fade Mask */}
  <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent" />
</div>


      {/* ===== WHITE INFO SECTION ===== */}
      <div className="w-full bg-[#f8f8f8] text-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🕓 Course Duration
            </h4>
            <p className="text-gray-700">
              A rigorous 4-year curriculum structured to build expertise from
              fundamental electronics to advanced telecommunication systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              💼 Internship Opportunity
            </h4>
            <p className="text-gray-700">
              Students undertake a 6-month internship with leading companies in
              telecommunications, consumer electronics, and embedded systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🏫 Campus Recruitment
            </h4>
            <p className="text-gray-700">
              Strong placement record with top recruiters from the telecom, IT
              hardware, semiconductor, and networking industries.
            </p>
          </div>

          {/* ✅ Updated Eligibility section with scroll functionality */}
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🎓 Eligibility
            </h4>
            <p
              onClick={scrollToFAQ}
              className="text-gray-700 cursor-pointer hover:text-blue-600 hover:underline transition-colors"
            >
              Click here to read more about the eligibility criteria for our
              B.E. in Electronics & Telecommunication Engineering.
            </p>
          </div>
        </div>
      </div>

      {/* ===== PROGRAM STRUCTURE + APPLY FORM SECTION ===== */}
      <div className="w-full bg-white text-black py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6 items-stretch">
          {/* LEFT TEXT SECTION */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-between border border-gray-100">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 leading-snug">
                B.E. in Electronics & Telecommunication Engineering
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                This programme equips students with a deep understanding of
                electronic circuits, communication theory, and electromagnetic
                waves, combined with practical expertise in designing and
                implementing telecommunication systems. The curriculum is
                designed to foster innovation in areas like wireless technology,
                embedded systems, and network infrastructure, ensuring graduates
                are industry-ready.
              </p>

              <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                Programme Structure
              </h3>

              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                <li>Electronic Circuits & Devices</li>
                <li>Digital Signal Processing & Microcontrollers</li>
                <li>Analog & Digital Communication Systems</li>
                <li>VLSI Design & Embedded Systems</li>
                <li>
                  Wireless & Mobile Communication, Internet of Things (IoT)
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div id="programme-structure" className="bg-white p-4 rounded-lg shadow-sm flex flex-col justify-between border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 leading-snug text-center">
              Enquire Now
            </h2>
            <ApplyForm />
          </div>
        </div>
      </div>

      {/* ===== PROGRAM HIGHLIGHTS SECTION ===== */}
      <div className="w-full bg-[#f7f7f7] py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Programme Highlights
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our B.E. in Electronics & Telecommunication Engineering blends
            theoretical rigor with extensive hands-on laboratory work. The
            Programme is structured to develop engineers capable of designing,
            analyzing, and managing the electronic and communication systems
            that are vital to modern infrastructure.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/ENTC/Entc1.webp"
                  alt="Core & Specialized Knowledge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Core & Specialized Knowledge
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    Strong Electronics Foundation :{" "}
                  </span>
                  The curriculum builds a formidable understanding of core
                  concepts in circuit design, signal processing, and
                  communication engineering, forming the bedrock for innovation
                  in telecommunications.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/ENTC/Entc2.webp"
                  alt="Labs & Practical Exposure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Labs & Practical Exposure
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    Advanced Electronics & Communication Laboratories :{" "}
                  </span>
                  Gain hands-on experience in our VLSI, DSP, Microwave, and
                  Embedded Systems labs, equipped with industry-standard
                  software and hardware for prototyping and testing.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/ENTC/Entc3.webp"
                  alt="Industry Alignment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Industry Alignment
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    Industry-Ready Competence :{" "}
                  </span>
                  Through industry projects and internships, students develop
                  practical skills in system design and problem-solving, making
                  them highly valuable to leading electronics and telecom firms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAREER OPPORTUNITIES SECTION ===== */}
      <div className="w-full bg-white text-black py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          {/* LEFT TEXT SECTION */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Electronics & Telecommunication Engineering graduates are
              essential to sectors like telecommunications, broadcasting,
              networking, and consumer electronics. They are equipped for roles
              involving the design, development, and maintenance of electronic
              devices and communication systems.
            </p>

            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Electronics Design Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Network Planning Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Embedded Systems Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                RF Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Telecommunications Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                VLSI Design Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Signal Processing Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                IoT Solutions Architect
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 w-full md:w-auto">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/programs/4.webp"
                alt="Career Opportunities in Electronics & Telecommunication Engineering"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAMPUS RECRUITMENT SECTION ===== */}
      <RecruitersSection />

      {/* ===== NEXT STEPS SECTION ===== */}
      <CTASection />

      {/* ===== FREQUENTLY ASKED QUESTIONS SECTION ===== */}
      <div ref={faqRef}>
        <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6 md:mb-12">
              <h2 className="text-4xl font-bold text-secondary mb-4">
                Department of Electronics & Telecommunication Engineering
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Empowering future innovators with cutting-edge education and
                research in electronics and telecommunication engineering
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
              {/* LEFT MENU */}
              <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-1 md:space-y-2 sticky top-24 self-start border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-lg">
                  Quick Links
                </h3>

                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActive(tab);

                      if (window.innerWidth < 1024) {
                        setTimeout(() => {
                          const el = document.getElementById("right-content");
                          if (el) {
                            const yOffset = -160; // 🔥 adjust this if needed (navbar height)
                            const y =
                              el.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;

                            window.scrollTo({ top: y, behavior: "smooth" });
                          }
                        }, 50);
                      }
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      active === tab
                        ? "bg-secondary text-white shadow-md"
                        : "hover:bg-gray-50 text-gray-700 hover:text-secondary hover:border-l-4 hover:border-secondary"
                    }`}
                  >
                    <span className="font-medium">{tab}</span>
                  </button>
                ))}
              </nav>

              {/* RIGHT CONTENT */}
              <div
                id="right-content"
                className="lg:col-span-3 bg-white rounded-xl shadow-sm p-4 md:p-8 border border-gray-100"
              >
                <div className="mb-4 md:mb-6 pb-4 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-secondary">{active}</h3>
                </div>

                <div className="content-area">
                  {renderContent(sectionContent[active])}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <EnquireNowProgramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
