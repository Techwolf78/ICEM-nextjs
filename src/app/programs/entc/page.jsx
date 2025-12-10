"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQENTC";
import Link from "next/link";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

export default function ENTC() {
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
  h-[55vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center">

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
          text-2xl sm:text-2xl md:text-2xl lg:text-4xl 
          font-bold leading-tight md:leading-snug
        "
      >
        4-Year B.Tech Programme in Electronics <br className="hidden sm:block" /> & Telecommunication Engineering
        <br className="hidden sm:block" /> 
        <span
          className="
            bg-gradient-to-br 
            from-cyan-400 
            to-sky-400 
            bg-clip-text 
            text-transparent 
            font-extrabold
            text-2xl sm:text-2xl md:text-2xl lg:text-4xl
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
        <FAQSection />
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
