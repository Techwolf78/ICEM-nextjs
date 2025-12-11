"use client";

import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQMBA";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";
import EnquireNowProgramModal from "@/components/EnquireNowProgramModal";

export default function MBA() {
  const [activeTab, setActiveTab] = useState("admissions");
  const faqRef = useRef(null);
  const [specialization, setSpecialization] = useState("marketing");
  const [isModalOpen, setIsModalOpen] = useState(false); // Added missing state

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  // Array of MBA highlight images
  // const mbaHighlightImages = [
  //   "/programs/MBA/MBA1.jpg",
  //   "/programs/MBA/MBA2.jpg", 
  //   "/programs/MBA/MBA3.jpg"
  // ];

  const imageSets = {
    marketing: [
      "/programs/MBA/MBA1.webp",
      "/programs/MBA/MBA2.webp",
      "/programs/MBA/MBA3.webp",
    ],
    finance: [
      "/programs/MBA/MBAFM1.webp",
      "/programs/MBA/MBAFM2.webp",
      "/programs/MBA/MBAFM3.webp",
    ],
    hr: [
      "/programs/MBA/MBAHR1.webp",
      "/programs/MBA/MBAHR2.webp",
      "/programs/MBA/MBAHR3.webp",
    ],
    operations: [
      "/programs/MBA/MBAOS1.webp",
      "/programs/MBA/MBAOS2.webp",
      "/programs/MBA/MBAOS3.webp",
    ],
  };

  const mbaHighlightImages = imageSets[specialization];

  // ==============================
  // MBA SPECIALIZATION CONTENT
  // ==============================
  const mbaData = {
    marketing: {
      title: "MBA in Marketing Management",
      subHeadline: "Crafting Brands and Driving Market Growth",
      overview:
        "This specialization delves into consumer behaviour, digital marketing strategies, brand management, and integrated marketing communications. It equips students with the skills to analyse markets, build powerful brands, and design data-driven campaigns that deliver measurable business results.",
      structure: [
        "Marketing Management & Consumer Behaviour",
        "Digital Marketing & Social Media Strategy",
        "Brand Management & Integrated Marketing Communications",
        "Sales & Distribution Management",
        "Strategic Marketing & Marketing Analytics",
      ],
      highlights: [
        {
          title: "Strategic Marketing Expertise",
          text: "Develop a profound understanding of market dynamics, consumer insights, and competitive strategy to make informed, impactful marketing decisions.",
        },
        {
          title: "Digital-First Approach",
          text: "Gain hands-on experience with the latest digital marketing tools and analytics platforms, preparing you for the evolving landscape of online consumer engagement.",
        },
        {
          title: "Industry Interface",
          text: "Learn from industry experts and work on live projects with leading brands, bridging the gap between theory and practical marketing challenges.",
        },
      ],
      careers: [
        "Brand Manager",
        "Digital Marketing Manager",
        "Market Research Analyst",
        "Sales Manager",
        "Product Manager",
        "Media Planner",
        "CRM Manager",
        "Head of Marketing",
      ],
    },

    finance: {
      title: "MBA in Financial Management",
      subHeadline: "Mastering the Art and Science of Value Creation",
      overview:
        "This specialization provides an in-depth understanding of corporate finance, investment analysis, financial markets, and risk management. It prepares students to make strategic financial decisions and navigate the global financial ecosystem.",
      structure: [
        "Corporate Finance & Financial Statement Analysis",
        "Investment Analysis & Portfolio Management",
        "Financial Markets & Institutions",
        "International Finance & Risk Management",
        "Mergers, Acquisitions & Corporate Valuation",
      ],
      highlights: [
        {
          title: "Analytical Rigor",
          text: "Build quantitative and analytical skills essential for modelling, valuation, and investment decision-making.",
        },
        {
          title: "Market-Ready Skills",
          text: "Gain practical exposure using financial databases, tools, and simulations.",
        },
        {
          title: "Strategic Perspective",
          text: "Understand the strategic role of finance in budgeting, governance, and corporate decision-making.",
        },
      ],
      careers: [
        "Financial Analyst",
        "Investment Banker",
        "Equity Research Analyst",
        "Risk Manager",
        "Corporate Finance Manager",
        "Wealth Manager",
        "Credit Analyst",
        "Chief Financial Officer",
      ],
    },

    hr: {
      title: "MBA in Human Resources Management",
      subHeadline: "Developing Talent, Building Organizational Culture",
      overview:
        "This specialization focuses on strategic HR, talent hiring, organizational behaviour, performance management, and employee development. It prepares future HR leaders.",
      structure: [
        "Talent Management & Acquisition",
        "Organizational Behaviour & Development",
        "Performance Management Systems & Compensation",
        "Employment Laws & Labor Relations",
        "HR Analytics & Strategic HRM",
      ],
      highlights: [
        {
          title: "Strategic HR Partnering",
          text: "Align HR strategies with business goals for talent-driven growth.",
        },
        {
          title: "People Analytics",
          text: "Use data for evidence-based decisions in hiring, retention, and performance.",
        },
        {
          title: "Leadership in Change Management",
          text: "Develop the ability to drive organizational transformation and employee engagement.",
        },
      ],
      careers: [
        "HR Business Partner",
        "Talent Acquisition Manager",
        "L&D Manager",
        "Compensation & Benefits Manager",
        "OD Consultant",
        "HR Analytics Specialist",
        "Employee Relations Manager",
        "Chief Human Resources Officer",
      ],
    },

    operations: {
      title: "MBA in Operations & Supply Chain Management",
      subHeadline: "Optimizing Systems for Efficiency and Excellence",
      overview:
        "This specialization covers supply chain dynamics, logistics, operations management, and project planning. It prepares students to manage large-scale systems efficiently.",
      structure: [
        "Operations Strategy & Supply Chain Management",
        "Logistics & Transportation Management",
        "Project Management & Quality Control",
        "Procurement & Sourcing Strategies",
        "Analytics for Operations & Decision Modelling",
      ],
      highlights: [
        {
          title: "End-to-End Supply Chain View",
          text: "Understand sourcing, production, logistics, distribution, and last-mile operations.",
        },
        {
          title: "Quantitative Problem-Solving",
          text: "Learn forecasting, optimization, and ERP tools for real-world problem solving.",
        },
        {
          title: "Global Perspective",
          text: "Explore international logistics, trade regulations, and risk mitigation strategies.",
        },
      ],
      careers: [
        "Supply Chain Analyst",
        "Operations Manager",
        "Logistics Manager",
        "Procurement Manager",
        "Project Manager",
        "Process Improvement Consultant",
        "Demand Planner",
        "Head of Supply Chain",
      ],
    },
  };

  const s = mbaData[specialization];

  return (
    <div className="w-full bg-white text-white">
      {/* =======================
          HERO SECTION
      ======================= */}
      <div className="relative w-full overflow-hidden 
  h-[55vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/programs/MBA1.webp"
      alt="Artificial Intelligence Program"
      fill
      className="
        object-cover 
        object-center 
        md:object-[60%]     /* fixes cropping on small desktop */
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
          text-2xl sm:text-2xl md:text-2xl lg:text-4xl
          font-bold leading-tight md:leading-snug
        "
      >
        2-Year Master of Business Administration (MBA) Programme
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
        This rigorous programme is designed to develop strategic thinkers and
        future business leaders. It combines core management principles with deep
        specialization, fostering analytical prowess, leadership qualities, and an
        ethical mindset to drive organizational success in a complex global
        economy.
      </p>

      {/* Buttons */}
       <div className="flex  sm:flex-row gap-3 sm:gap-4 mt-6 ">
      <button
        onClick={toggleModal}
        className="
          bg-secondary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold
          text-sm sm:text-base md:text-lg
          w-full sm:w-auto
          transition-all duration-300
          hover:bg-gray-200 hover:text-secondary
          border-2 border-transparent hover:border-secondary
          active:scale-95
        "
      >
        Enquire Now
      </button>

      <button
        onClick={handleBrochureDownload}
        className="
          bg-secondary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold
          text-sm sm:text-base md:text-lg
          w-full sm:w-auto
          transition-all duration-300
          hover:bg-white hover:text-secondary
          border-2 border-transparent hover:border-secondary
          active:scale-95
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


      {/* =======================
          WHITE INFO SECTION
      ======================= */}
      <div className="w-full bg-[#f8f8f8] text-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">🕓 Course Duration</h4>
            <p className="text-gray-700">The MBA Programme lasts 2 years.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">💼 Internship</h4>
            <p className="text-gray-700">
              Internships with leading organizations across industries.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">🏫 Placements</h4>
            <p className="text-gray-700">
              Excellent placement record with top companies nationwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">🎓 Eligibility</h4>
            <p
              onClick={scrollToFAQ}
              className="cursor-pointer hover:text-blue-600 hover:underline"
            >
              Click here to see eligibility.
            </p>
          </div>
        </div>
      </div>

      {/* =======================
          MBA SPECIALIZATION TABS
      ======================= */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:flex md:gap-4 md:flex-nowrap overflow-hidden gap-2">
          {[
            ["marketing", "MARKETING MANAGEMENT"],
            ["finance", "FINANCIAL MANAGEMENT"],
            ["hr", "HUMAN RESOURCES MANAGEMENT"],
            ["operations", "OPERATIONS & SUPPLY CHAIN MANAGEMENT"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSpecialization(key)}
              className={`px-2 md:px-4 lg:px-6 h-12 md:h-14 max-w-[200px] md:max-w-[300px] flex items-center justify-center rounded-lg font-semibold text-[10px] md:text-sm lg:text-base text-center border border-gray-200 whitespace-normal leading-tight ${
                specialization === key
                  ? "bg-secondary text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* =======================
          STRUCTURE + FORM
      ======================= */}
      <div className="w-full bg-white py-4 md:py-8 text-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="bg-white shadow-sm border border-gray-200 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              {s.title}
            </h2>
            <p className="text-gray-700 mb-6">{s.overview}</p>

            <h3 className="text-xl font-semibold text-secondary mb-3">
              Programme Structure
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {s.structure.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div id="programme-structure">
            <ApplyForm />
          </div>
        </div>
      </div>

      {/* =======================
          PROGRAM HIGHLIGHTS
      ======================= */}
      <div className="w-full bg-[#f7f7f7] py-8 md:py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-10">
            Programme Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {s.highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <div className="w-full h-40 relative">
                  <Image
                    src={mbaHighlightImages[i] || "/placeholder/program.jpg"}
                    alt={h.title}
                    fill
                    className="object-cover"
                  />
                </div>


                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {h.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =======================
          CAREER OPPORTUNITIES
      ======================= */}
      <div className="w-full bg-white py-8 md:py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-700 mb-6">
              This specialization opens pathways to impactful roles:
            </p>

            <ul className="space-y-2 text-gray-800">
              {s.careers.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full md:w-auto">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/programs/9.webp"
                alt="Career Opportunities"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </div>

      <RecruitersSection />
      <CTASection />

      <div ref={faqRef}>
        <FAQSection />
      </div>

      <EnquireNowProgramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
