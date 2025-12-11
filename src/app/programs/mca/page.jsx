"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQMCA";
import Link from "next/link";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";
import EnquireNowProgramModal from "@/components/EnquireNowProgramModal";

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
      src="/programs/MCA.webp"
      alt="Artificial Intelligence Program"
      fill
      className="
        object-cover 
        object-center 
        md:object-[60%]     /* improves framing on small desktops */
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
        2-Year Master of Computer Applications (MCA) Programme
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
          Advancing Expertise in Software Development and Systems Architecture
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
        This intensive postgraduate programme is designed to build upon foundational
        computing knowledge, delivering advanced skills in software engineering,
        application development, and modern IT infrastructure. It prepares students
        for leadership roles in the creation and management of complex software
        solutions.
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
              A comprehensive 2-year programme divided into four semesters,
              including a final semester industry project.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              💼 Internship Opportunity
            </h4>
            <p className="text-gray-700">
              Students undertake a significant live project or internship with
              leading IT firms, gaining crucial industry experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🏫 Campus Recruitment
            </h4>
            <p className="text-gray-700">
              Excellent placement opportunities with top IT product companies,
              MNCs, and IT consulting firms seeking skilled software
              professionals.
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
              Click here to read more about the eligibility criteria for our MCA
              Programme.
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
                Master of Computer Applications (MCA)
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                This programme provides a deep dive into advanced programming
                paradigms, database management, network security, and emerging
                technologies. The curriculum balances theoretical concepts with
                extensive practical exposure, ensuring graduates are equipped to
                design, develop, and manage robust and scalable software systems
                for enterprise-level challenges.
              </p>

              <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                Programme Structure
              </h3>

              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                <li>Advanced Programming & Data Structures</li>
                <li>Software Engineering & Project Management</li>
                <li>Database Management Systems & Big Data Analytics</li>
                <li>Web Technologies & Application Development</li>
                <li>Cloud Computing & DevOps Practices</li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div id="programme-structure" className="flex flex-col justify-between">
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
            Our MCA programme is structured to transform students into
            proficient software architects and developers. It emphasizes a
            strong theoretical foundation coupled with hands-on learning using
            industry-standard tools and methodologies.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/MCA/MCA1.webp"
                  alt="Interdisciplinary Expertise"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Advanced Technical Core
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    In-Depth Software Expertise :{" "}
                  </span>
                  he curriculum builds advanced competencies in object-oriented
                  design, algorithms, and system software, forming the bedrock
                  for developing complex, high-performance applications.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/MCA/MCA2.webp"
                  alt="Cutting-Edge Laboratories"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Project-Based Learning
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    Real-World Development Experience :{" "}
                  </span>
                  Engage in multiple software development projects and a
                  capstone module, simulating real IT environments to build a
                  strong portfolio and practical problem-solving skills
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/MCA/MCA3.webp"
                  alt="Industry-Relevant Skills"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Industry-Aligned Curriculum
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    Focus on Emerging Technologies :{" "}
                  </span>
                  The Programme incorporates cutting-edge topics like cloud
                  computing, data analytics, and mobile application development,
                  ensuring graduates possess skills relevant to current market
                  demands.
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
              An MCA degree opens doors to a wide array of specialized roles in
              the IT industry. Graduates are highly sought after for their
              advanced technical skills and are equipped to lead software
              projects and IT initiatives.
            </p>

            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Software Developer/Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Systems Analyst
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Database Administrator
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Web Application Architect
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                IT Consultant
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Cloud Engineer
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Data Analyst
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">✓</span>
                Project Manager (IT)
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 w-full md:w-auto">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/programs/10.webp"
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

      <EnquireNowProgramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
