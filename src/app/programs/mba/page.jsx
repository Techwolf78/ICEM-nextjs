"use client";

import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSection";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

export default function MBA() {
  const [activeTab, setActiveTab] = useState("admissions");
  const faqRef = useRef(null);
  const [specialization, setSpecialization] = useState("marketing");

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
       <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/Programs/MBA1.jpg"
                  alt="Artificial Intelligence Program"
                  fill
                  className="object-cover object-center scale-105  opacity-90"
                  priority
                />
              </div>
      
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      
              {/* Content Wrapper */}
              {/* Content Wrapper */}
              <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
                <div className="max-w-3xl text-white">
                  <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                    2-Year Master of Business Administration (MBA) Programme <br />
                    
                  </h2>
      
                  <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                    This rigorous programme is designed to develop strategic thinkers and future business leaders. It combines core management principles with deep specialization, fostering analytical prowess, leadership qualities, and an ethical mindset to drive organizational success in a complex global economy.
                  </p>
      
                  {/* Floating Stat Cards */}
      
                  {/* Buttons */}
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={toggleModal}
                      className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold 
                               "
                    >
                      Enquire Now
                    </button>
      
                    <button
                      onClick={handleBrochureDownload}
                      className="bg-secondary text-white px-8 py-3 rounded-lg"
                    >
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
      
              {/* Bottom Fade Mask */}
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

      {/* =======================
          ENHANCED TAB
      ======================= */}


      {/* =======================
          TAB CONTENT
   
          {/* =======================
              WHITE INFO SECTION
          ======================= */}
          <div className="w-full bg-[#f8f8f8] text-black py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">🕓 Course Duration</h4>
                <p className="text-gray-700">The MBA program lasts 2 years.</p>
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
            <div className="max-w-7xl mx-auto px-6 flex gap-4 flex-nowrap overflow-hidden">

              {[
                ["marketing", "MARKETING MANAGEMENT"],
                ["finance", "FINANCIAL MANAGEMENT"],
                ["hr", "HUMAN RESOURCES MANAGEMENT"],
                ["operations", "OPERATIONS & SUPPLY CHAIN MANAGEMENT"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSpecialization(key)}
                  className={`px-4 md:px-6 h-14 max-w-[300px] flex items-center justify-center rounded-lg font-semibold text-sm md:text-base text-center border whitespace-normal leading-tight ${
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
          <div className="w-full bg-white py-16 text-black">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* LEFT */}
              <div className="bg-white shadow-sm border p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-700 mb-6">{s.overview}</p>

                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Program Structure
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  {s.structure.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT */}
              <div>
                <ApplyForm />
              </div>
            </div>
          </div>

          {/* =======================
              PROGRAM HIGHLIGHTS
          ======================= */}
          <div className="w-full bg-[#f7f7f7] py-16 text-black">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-secondary mb-10">
                Program Highlights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {s.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white border rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="w-full h-40 relative">
                      <Image
                        src="/placeholder/program.jpg"
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
          <div className="w-full bg-white py-16 text-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Career Opportunities
                </h2>
                <p className="text-gray-700 mb-6">
                  This specialization opens pathways to impactful roles:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.careers.map((item, index) => (
                    <p key={index}>➜ {item}</p>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/career-opportunities.jpg"
                    alt="Career Opportunities"
                    fill
                    className="object-cover"
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
   
 

    </div>
  );
}
