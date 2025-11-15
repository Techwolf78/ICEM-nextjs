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

  

   
          <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/Programs/computer.jpg"
                alt="Artificial Intelligence Program"
                fill
                className="object-cover object-center scale-105  opacity-90"
                priority
              />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

            {/* Content Wrapper */}
            <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
              <div className="max-w-3xl text-white">
                <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                  4-Year B.Tech Computer Engineering Program <br />
                  with specialisation in <br />
                  <span className="bg-gradient-to-br from-cyan-400 to-sky-400 bg-clip-text text-transparent font-extrabold">
                    Advanced Computing & Emerging Technologies
                  </span>
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                  The Department of Computer Engineering at ICEM aims to provide
                  a comprehensive foundation in software, hardware, and system
                  design while integrating modern innovations in cloud
                  computing, artificial intelligence, cybersecurity, and data
                  analytics. The program prepares students for dynamic careers
                  in technology and innovation-driven industries.
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
          {/* ===== WHITE INFO SECTION ===== */}
          <div className="w-full bg-[#f8f8f8] text-black py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🕓 Course Duration
                </h4>
                <p className="text-gray-700">
                  A rigorous 4-year programme structured to build deep expertise
                  in software develop ment, computer architecture, and system
                  design.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  💼 Internship Opportunity
                </h4>
                <p className="text-gray-700">
                  Mandatory industry internships with leading tech firms provide
                  hands-on experience in real-world software and hardware
                  projects.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🏫 Campus Recruitment
                </h4>
                <p className="text-gray-700">
                  Exceptional placement record with top-tier IT product
                  companies, MNCs, and R&D labs seeking core engineering talent.
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
                    This programme provides a deep and rigorous foundation in
                    the principles of computing, from algorithmic thinking and
                    software development to computer architecture and network
                    systems. It combines academic depth with extensive practical
                    exposure, ensuring graduates are industry-ready and capable
                    of driving technological innovation.
                  </p>

                  <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                    Program Structure
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                    <li>Programming Fundamentals & Object-Oriented Design</li>
                    <li>
                      Data Structures, Algorithms, and Complexity Analysis
                    </li>
                    <li>Computer Architecture and Organization</li>
                    <li>
                      Database Management Systems and Software Engineering
                    </li>
                    <li>
                      Operating Systems, Computer Networks, and Cybersecurity
                    </li>
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
                Our B.E. in Computer Engineering is designed to create versatile
                and proficient engineers. The curriculum emphasizes strong
                theoretical foundations, hands-on project-based learning, and
                the development of problem-solving skills critical for success
                in the core software and hardware industries.
              </p>

              {/* HIGHLIGHT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Programs/Computer/Comp1.jpg"
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
                      The program builds a formidable understanding of core
                      computer science concepts, including algorithms, data
                      structures, and systems programming, forming the bedrock
                      for all advanced specializations and innovation.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Programs/Computer/Comp2.jpg"
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
                      src="/Programs/Computer/Comp3.jpg"
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
                      trends, preparing graduates with the skills demanded by
                      top employers in software development, system design, and
                      IT services.
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
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Career Opportunities
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  A degree in Computer Engineering opens doors to a vast
                  spectrum of roles in the global tech industry. Graduates are
                  equipped to design, develop, and manage the complex software
                  and hardware systems that power modern enterprises and
                  consumer technologies.
                </p>

                {/* Bullet List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-gray-800 text-base leading-relaxed list-disc list-inside">
                  <li>Software Development Engineer</li>
                  <li>Systems Architect</li>
                  <li>DevOps Engineer</li>
                  <li>Database Administrator</li>
                  <li>Network Engineer</li>
                  <li>Full-Stack Developer</li>
                  <li>Embedded Systems Engineer</li>
                  <li>IT Project Manager</li>
                </ul>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="flex-1 flex justify-center">
                <div className="w-full h-[320px] relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <Image
                    src="/Programs/ENTC/Entc3.jpg"
                    alt="Career Opportunities in Computer Engineering"
                    fill
                    className="object-cover object-center"
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

    </div>
  );
}
