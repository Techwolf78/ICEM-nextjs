"use client"
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

export default function MBA() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("admissions");
  const [activeSpecialization, setActiveSpecialization] = useState("marketing");

  // ✅ Ref for FAQ Section
  const faqRef = useRef(null);

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

  // Specializations data
  const specializations = {
    marketing: {
      name: "Marketing Management",
      subtitle: "Crafting Brands and Driving Market Growth",
      overview: "This specialization delves into consumer behaviour, digital marketing strategies, brand management, and integrated marketing communications. It equips students with the skills to analyse markets, build powerful brands, and design data-driven campaigns that deliver measurable business results.",
      structure: [
        "Marketing Management & Consumer Behaviour",
        "Digital Marketing & Social Media Strategy",
        "Brand Management & Integrated Marketing Communications",
        "Sales & Distribution Management",
        "Strategic Marketing & Marketing Analytics"
      ],
      highlights: [
        {
          title: "Strategic Marketing Expertise",
          description: "Develop a profound understanding of market dynamics, consumer insights, and competitive strategy to make informed, impactful marketing decisions."
        },
        {
          title: "Digital-First Approach",
          description: "Gain hands-on experience with the latest digital marketing tools and analytics platforms, preparing you for the evolving landscape of online consumer engagement."
        },
        {
          title: "Industry Interface",
          description: "Learn from industry experts and work on live projects with leading brands, bridging the gap between theoretical knowledge and real-world marketing challenges."
        }
      ],
      careers: [
        "Brand Manager",
        "Digital Marketing Manager",
        "Market Research Analyst",
        "Sales Manager",
        "Product Manager",
        "Media Planner",
        "CRM Manager",
        "Head of Marketing"
      ]
    },
    finance: {
      name: "Financial Management",
      subtitle: "Mastering the Art and Science of Value Creation",
      overview: "This specialization provides an in-depth understanding of corporate finance, investment analysis, financial markets, and risk management. It prepares students to make strategic financial decisions, manage corporate portfolios, and navigate the complexities of the global financial ecosystem.",
      structure: [
        "Corporate Finance & Financial Statement Analysis",
        "Investment Analysis & Portfolio Management",
        "Financial Markets & Institutions",
        "International Finance & Risk Management",
        "Mergers, Acquisitions & Corporate Valuation"
      ],
      highlights: [
        {
          title: "Analytical Rigor",
          description: "Build strong quantitative and analytical skills essential for financial modelling, valuation, and data-driven investment decision-making."
        },
        {
          title: "Market-Ready Skills",
          description: "Use financial databases and simulation tools to gain practical exposure to live market scenarios and financial instruments."
        },
        {
          title: "Strategic Perspective",
          description: "Understand the strategic role of finance in business operations, from capital budgeting and fundraising to corporate governance and compliance."
        }
      ],
      careers: [
        "Financial Analyst",
        "Investment Banker",
        "Equity Research Analyst",
        "Risk Manager",
        "Corporate Finance Manager",
        "Wealth Manager",
        "Credit Analyst",
        "Chief Financial Officer"
      ]
    },
    hr: {
      name: "Human Resources Management",
      subtitle: "Developing Talent, Building Organizational Culture",
      overview: "This specialization focuses on strategic human resource management, talent acquisition, organizational behaviour, performance management, and employee development. It empowers students to become HR leaders who can build high-performance cultures and drive positive organizational change.",
      structure: [
        "Talent Management & Acquisition",
        "Organizational Behaviour & Development",
        "Performance Management Systems & Compensation",
        "Employment Laws & Labor Relations",
        "HR Analytics & Strategic HRM"
      ],
      highlights: [
        {
          title: "Strategic HR Partnering",
          description: "Learn to align HR strategies with business goals, focusing on talent as a key competitive advantage and driver of organizational success."
        },
        {
          title: "People Analytics",
          description: "Develop expertise in using data and analytics for evidence-based decision-making in areas like recruitment, retention, and performance."
        },
        {
          title: "Leadership in Change Management",
          description: "Acquire the skills to lead organizational development initiatives, manage transitions, and foster an inclusive and engaging work environment."
        }
      ],
      careers: [
        "HR Business Partner",
        "Talent Acquisition Manager",
        "Learning & Development Manager",
        "Compensation & Benefits Manager",
        "Organizational Development Consultant",
        "HR Analytics Specialist",
        "Employee Relations Manager",
        "Chief Human Resources Officer"
      ]
    },
    operations: {
      name: "Operations & Supply Chain Management",
      subtitle: "Optimizing Systems for Efficiency and Excellence",
      overview: "This specialization covers the end-to-end management of operations, logistics, supply chain dynamics, and project management. It prepares students to design, manage, and optimize efficient processes and complex global supply chains in both manufacturing and service sectors.",
      structure: [
        "Operations Strategy & Supply Chain Management",
        "Logistics & Transportation Management",
        "Project Management & Quality Control",
        "Procurement & Sourcing Strategies",
        "Analytics for Operations & Decision Modelling"
      ],
      highlights: [
        {
          title: "End-to-End Supply Chain View",
          description: "Gain a holistic understanding of the entire supply chain, from sourcing and procurement to production, logistics, and last-mile delivery."
        },
        {
          title: "Quantitative Problem-Solving",
          description: "Master quantitative techniques and ERP tools to solve complex operational problems, improve efficiency, and reduce costs."
        },
        {
          title: "Global Perspective",
          description: "Understand the challenges and strategies of managing global operations, including international logistics, trade regulations, and risk mitigation."
        }
      ],
      careers: [
        "Supply Chain Analyst",
        "Operations Manager",
        "Logistics Manager",
        "Procurement Manager",
        "Project Manager",
        "Process Improvement Consultant",
        "Demand Planner",
        "Head of Supply Chain"
      ]
    }
  };

  const currentSpec = specializations[activeSpecialization];

  return (
    <div className="w-full bg-white text-white">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Programs/MBA1.jpg"
            alt="MBA Program"
            fill
            className="object-cover object-center scale-105 opacity-90"
            priority
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        {/* Content Wrapper */}
        <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              2-Year MBA Program <br />
              with specialisation in <br />
              <span className="bg-gradient-to-br from-cyan-400 to-sky-400 bg-clip-text text-transparent font-extrabold">
                {currentSpec.name}
              </span>
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
              {currentSpec.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={toggleModal}
                className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold"
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

      {/* ===== SPECIALIZATION SELECTOR ===== */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="flex overflow-x-auto mx-auto">
          {Object.entries(specializations).map(([key, spec]) => (
            <button
              key={key}
              className={`flex-shrink-0 px-6 py-4 font-medium text-md transition-all duration-150 whitespace-nowrap ${
                activeSpecialization === key
                  ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveSpecialization(key)}
            >
              {spec.name}
            </button>
          ))}
        </div>
      </div>

      {/* ===== ENHANCED TAB NAVIGATION WITH SLIDING INDICATOR ===== */}
      <div className="my-4 relative bg-white border-b border-gray-200">
        <div className="flex mx-auto">
          <button
            className={`flex-1 py-4 font-medium text-md transition-all duration-150 ${
              activeTab === "admissions"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("admissions")}
          >
            Admissions & Programs
          </button>
          <button
            className={`flex-1 py-4 font-medium text-md transition-all duration-150 ${
              activeTab === "department"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("department")}
          >
            Department Info & Staff
          </button>
        </div>
        {/* Sliding Indicator */}
        <div
          className="absolute bottom-0 h-1 bg-blue-600 transition-transform duration-150 ease-out"
          style={{
            width: "50%",
            transform: `translateX(${getActiveTabIndex() * 100}%)`,
          }}
        ></div>
      </div>

      {/* ===== TAB CONTENT ===== */}
      {activeTab === "admissions" ? (
        <>
          {/* ===== WHITE INFO SECTION ===== */}
          <div className="w-full bg-[#f8f8f8] text-black py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🕓 Course Duration
                </h4>
                <p className="text-gray-700">
                  The MBA program spans 2 years, providing comprehensive business education with specialized expertise in your chosen field.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  💼 Internship Opportunity
                </h4>
                <p className="text-gray-700">
                  Students undertake summer internships with leading corporations to gain real-world business experience and industry exposure.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🏫 Campus Recruitment
                </h4>
                <p className="text-gray-700">
                  Placement opportunities with top companies across various sectors, including Fortune 500 corporations and leading Indian firms.
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
                  Click here to read more about eligibility for our MBA Program with Specialisation in {currentSpec.name}.
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
                    MBA in {currentSpec.name}
                  </h2>

                  <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    {currentSpec.overview}
                  </p>

                  <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                    Programme Structure
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                    {currentSpec.structure.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT FORM SECTION */}
              <div className="flex flex-col justify-between">
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
                Our MBA program with specialization in {currentSpec.name} offers a unique blend of theoretical knowledge and practical application. With a focus on industry-relevant skills, strategic thinking, and leadership development, the program equips students to excel in their chosen fields and drive organizational success.
              </p>

              {/* HIGHLIGHT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentSpec.highlights.map((highlight, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                    <div className="w-full h-48 relative">
                      <Image
                        src={`/images/mba-${activeSpecialization}-${index + 1}.jpg`}
                        alt={highlight.title}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <div className="p-6 text-left">
                      <h3 className="font-semibold text-lg text-secondary mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
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
                  The {currentSpec.name} specialization opens doors to diverse career opportunities across various industries. Graduates are prepared for leadership roles that drive business growth, optimize operations, and create sustainable value in today's dynamic business environment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
                  {currentSpec.careers.map((career, index) => (
                    <p key={index}>➜ {career}</p>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="flex-1">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src={`/images/mba-${activeSpecialization}-career.jpg`}
                    alt={`Career Opportunities in ${currentSpec.name}`}
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
            <FAQSection />
          </div>
        </>
      ) : (
        /* ===== DEPARTMENT INFO & STAFF SECTION ===== */
        <div className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Department Information & Staff
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              This section is currently under development. Department details,
              faculty information, and staff profiles will be available soon.
            </p>
            <div className="bg-gray-100 rounded-lg p-12">
              <p className="text-gray-500 text-xl">Content Coming Soon</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== APPLY NOW MODAL ===== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[680px] p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={toggleModal}
              aria-label="Close"
              className="absolute top-3 right-3 text-gray-600 hover:text-primary text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 text-secondary">
              Enquire Now
            </h2>

            {/* Modal form - matches the long form */}
            <form className="space-y-4 modal-form">
              <input
                type="text"
                placeholder="Enter Name *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Enter Email Address *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex gap-2">
                <select className="w-24 border border-gray-300 rounded px-2 py-2">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number *"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select State *</option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select City *</option>
                </select>
              </div>

              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select Discipline Applying For *</option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select Course *</option>
                </select>
              </div>

              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select Program *</option>
              </select>

              <input
                type="text"
                placeholder="Enter CET Score"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="flex gap-3 items-center">
                <div className="bg-gray-100 border border-gray-300 rounded-md w-1/2 flex items-center justify-center py-2">
                  <span className="text-lg font-bold text-gray-700 select-none">
                    8fcb09
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" id="agreeModal" />
                <label htmlFor="agreeModal" className="text-sm text-gray-700">
                  I agree to receive information regarding my submitted enquiry*
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-md transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 