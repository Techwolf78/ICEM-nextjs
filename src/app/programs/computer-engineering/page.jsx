"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQComp";
import Link from "next/link";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

export default function Computer() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("admissions");

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

  return (
    <div className="w-full bg-white text-white">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full overflow-hidden 
  h-[75vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/Programs/computer.webp"
      alt="Artificial Intelligence Program"
      fill
      className="
        object-cover 
        object-center 
        md:object-[60%]  /* shift image slightly left on mid screens */
        scale-100 
        md:scale-105 
        lg:scale-110 
        opacity-90
      "
      priority
    />
  </div>

  {/* Dark Gradient Overlay */}
  <div className="
    absolute inset-0 
    bg-gradient-to-r 
    from-black/85 
    via-black/60 
    to-transparent 
    md:via-black/50 
    lg:via-black/40 
    z-10
  " />

  {/* Content Wrapper */}
  <div className="relative max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-20 z-20">
  <div className="max-w-2xl md:max-w-xl lg:max-w-3xl text-white">
    
    {/* Heading */}
    <h2 className="
      text-2xl sm:text-2xl md:text-2xl lg:text-4xl 
      font-bold leading-tight md:leading-snug
    ">
      4-Year B.Tech Computer Engineering Programme 
      with specialisation in <br className="hidden sm:block" />
      <span  className="
        bg-gradient-to-br 
        from-cyan-400 
        to-sky-400 
        bg-clip-text 
        text-transparent 
        font-extrabold
        text-2xl sm:text-2xl md:text-2xl lg:text-4xl
      ">
           Advanced Computing & Emerging Technologies
      </span>
    </h2>

    {/* Description */}
    <p className="
      mt-3 sm:mt-4 
      text-white/80 
      leading-relaxed 
      max-w-xl md:max-w-md lg:max-w-xl
      text-xs sm:text-sm md:text-base text-justify
    ">
      The Department of Computer Engineering at ICEM aims to provide a
      comprehensive foundation in software, hardware, and system design while
      integrating modern innovations in cloud computing, artificial intelligence,
      cybersecurity, and data analytics. The Programme prepares students for
      dynamic careers in technology and innovation-driven industries.
    </p>

    {/* Buttons - FIXED */}
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

      {/* ===== WHITE INFO SECTION ===== */}
      <div className="w-full bg-[#f8f8f8] text-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🕓 Course Duration
            </h4>
            <p className="text-gray-700">
              A rigorous 4-year programme structured to build deep expertise in
              software develop ment, computer architecture, and system design.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              💼 Internship Opportunity
            </h4>
            <p className="text-gray-700">
              Mandatory industry internships with leading tech firms provide
              hands-on experience in real-world software and hardware projects.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🏫 Campus Recruitment
            </h4>
            <p className="text-gray-700">
              Exceptional placement record with top-tier IT product companies,
              MNCs, and R&D labs seeking core engineering talent.
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
              B.E. in Computer Engineering.
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
                BTech in Computer Engineering
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                This programme provides a deep and rigorous foundation in the
                principles of computing, from algorithmic thinking and software
                development to computer architecture and network systems. It
                combines academic depth with extensive practical exposure,
                ensuring graduates are industry-ready and capable of driving
                technological innovation.
              </p>

              <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                Programme Structure
              </h3>

              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                <li>Programming Fundamentals & Object-Oriented Design</li>
                <li>Data Structures, Algorithms, and Complexity Analysis</li>
                <li>Computer Architecture and Organization</li>
                <li>Database Management Systems and Software Engineering</li>
                <li>Operating Systems, Computer Networks, and Cybersecurity</li>
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
            Our B.E. in Computer Engineering is designed to create versatile and
            proficient engineers. The curriculum emphasizes strong theoretical
            foundations, hands-on project-based learning, and the development of
            problem-solving skills critical for success in the core software and
            hardware industries.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/Computer/Comp1.webp"
                  alt="Strong Foundational Core"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Strong Foundational Core
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The Programme builds a formidable understanding of core
                  computer science concepts, including algorithms, data
                  structures, and systems programming, forming the bedrock for
                  all advanced specializations and innovation.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/Computer/Comp2.webp"
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
                  Students gain hands-on experience in state-of-the-art labs
                  equipped with modern tools for software development,
                  networking, and hardware interfacing, ensuring seamless
                  translation of theory into practice.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/Computer/Comp3.webp"
                  alt="Industry-Relevant Skills"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Industry Alignment
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The curriculum is continuously updated to include current
                  trends, preparing graduates with the skills demanded by top
                  employers in software development, system design, and IT
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===== CAREER OPPORTUNITIES SECTION ===== */}
      {/* ===== CAREER OPPORTUNITIES SECTION ===== */}
      <div className="w-full bg-white text-black py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          {/* LEFT TEXT SECTION */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A degree in Computer Engineering opens doors to a vast spectrum of
              roles in the global tech industry. Graduates are equipped to
              design, develop, and manage the complex software and hardware
              systems that power modern enterprises and consumer technologies.
            </p>

            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Software Development Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Systems Architect
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                DevOps Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Database Administrator
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Network Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Full-Stack Developer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Embedded Systems Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                IT Project Manager
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 w-full md:w-auto">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/Programs/1.webp"
                alt="Career Opportunities in Computer Engineering"
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
      <div className="bg-white py-16">
        <CTASection />
      </div>
      /* ===== DEPARTMENT INFO & STAFF SECTION ===== */
      <div className="w-full bg-white ">
        {/* ===== FREQUENTLY ASKED QUESTIONS SECTION ===== */}
        <div ref={faqRef}>
          <FAQSection />
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60]"
          onClick={() => setIsModalOpen(false)} // Close when clicking outside
        >
          <div
            className="max-w-7xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
          >
            <ApplyForm />
          </div>
        </div>
      )}
    </div>
  );
}
