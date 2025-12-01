"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQIMCA";
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
  h-[55vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/Programs/MCA1.webp"
      alt="Artificial Intelligence Program"
      fill
      className="
        object-cover 
        object-center 
        md:object-[60%]   /* improves framing on small desktop */
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
        5-Year Integrated MCA Programme (BCA + MCA)
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
          A Comprehensive Journey in Computer Applications
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
        This streamlined dual-degree programme offers an uninterrupted and
        in-depth exploration of computer applications. It seamlessly blends the
        foundational concepts of a Bachelor's in Computer Applications (BCA) with
        the advanced, specialized knowledge of a Master's in Computer Applications
        (MCA), creating highly competent software professionals ready for the
        tech industry.
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
              A unified 5-year curriculum designed for a continuous and
              progressive learning experience in computer applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              💼 Internship Opportunity
            </h4>
            <p className="text-gray-700">
              Multiple industry internships and live projects throughout the
              programme ensure cumulative practical experience and professional
              growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🏫 Campus Recruitment
            </h4>
            <p className="text-gray-700">
              Graduates are prepared for advanced roles in software development
              and are highly recruited by top IT firms and tech startups.
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
              Integrated MCA Programme.
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
                Integrated MCA (BCA + MCA)
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                This integrated programme is designed for students committed to
                a long-term career in software development and IT. It begins
                with building a strong programming and logical foundation in the
                BCA phase and advances to complex software engineering, system
                design, and emerging technologies in the MCA phase. This
                cohesive structure ensures a deep, end-to-end understanding of
                creating and managing software solutions.
              </p>

              <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                Programme Structure
              </h3>

              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                <li>Programming Fundamentals & Object-Oriented Design</li>
                <li>Data Structures, Algorithms, and Database Management</li>
                <li>Web Technologies & Application Development</li>
                <li>Software Engineering & Project Management</li>
                <li>Advanced Java, Cloud Computing, and Data Analytics</li>
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
            Our Integrated MCA provides a distinct advantage by offering a
            continuous learning path that transforms students into proficient
            software architects and developers with a significant head start in
            their careers.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/IBBAMCA/IBBAMCA1.webp"
                  alt="Interdisciplinary Expertise"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Unified Learning Pathway
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    A Cohesive Academic Journey :{" "}
                  </span>
                  Benefit from a curriculum where BCA fundamentals are directly
                  leveraged and expanded upon in the MCA years, ensuring a
                  seamless and deep mastery of computer applications without
                  academic gaps.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/IBBAMCA/IBBAMCA2.webp"
                  alt="Cutting-Edge Laboratories"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Advanced Skill Acquisition
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    Master Complex Technologies Sooner :{" "}
                  </span>
                  Engage with advanced topics like enterprise application
                  development, big data, and machine learning earlier in your
                  academic career, building a sophisticated and highly relevant
                  skill set.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/IBBAMCA/IBBAMCA3.webp"
                  alt="Industry-Relevant Skills"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Project-Driven Experience
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">Build a Robust Portfolio : </span>
                  Participate in numerous software development projects,
                  capstone modules, and hackathons over five years, graduating
                  with a substantial portfolio that showcases your practical
                  expertise to employers.
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
              Graduates of the Integrated MCA programme are equipped for
              high-demand roles that require both solid foundational knowledge
              and advanced technical capabilities, making them ideal candidates
              for core software development positions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
              <p>Software Developer/Engineer </p>
              <p>Systems Analyst </p>
              <p>Web Application Architect </p>
              <p>Database Administrator </p>
              <p>IT Consultant </p>
              <p>Cloud Support Engineer </p>
              <p>Data Analyst </p>
              <p>➜Project Lead (IT) </p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1">
            <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/Programs/8.webp"
                alt="Career Opportunities in AI and Future Technologies"
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
