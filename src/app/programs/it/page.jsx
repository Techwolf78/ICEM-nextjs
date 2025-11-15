"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQIT";
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
                       src="/Programs/IT2.jpg"
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
                         4-Year B.E. Information Technology Programme <br></br>
                         <span className="bg-gradient-to-br from-cyan-400  to-sky-400 bg-clip-text text-transparent font-extrabold ">
                           Architecting Business Solutions with Modern Technology
                         </span>
                       </h2>
           
                       <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                         This programme provides a robust foundation in software development, network systems, and data management, integrated with cutting-edge expertise in cloud computing, cybersecurity, and enterprise IT solutions. It prepares students to manage and optimize the technology infrastructure that drives modern organizations.
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




          {/* ===== WHITE INFO SECTION ===== */}
          <div className="w-full bg-[#f8f8f8] text-black py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🕓 Course Duration
                </h4>
                <p className="text-gray-700">
                  A comprehensive 4-year curriculum designed to build proficiency in IT systems, software engineering, and infrastructure management.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  💼 Internship Opportunity
                </h4>
                <p className="text-gray-700">
                  Students undertake a 6-month internship with leading IT services, consulting firms, and corporate IT divisions to gain industry experience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🏫 Campus Recruitment
                </h4>
                <p className="text-gray-700">
                  Excellent placement record with top IT services companies, MNCs, and tech startups seeking skilled IT professionals.
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
                  Click here to read more about the eligibility criteria for our B.E. in Information Technology.
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
          B.E. in Information Technology
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
          This programme equips students with comprehensive knowledge of software engineering, database management, 
          network security, and web technologies. The curriculum emphasizes practical IT solutioning, ensuring graduates 
          can design, implement, and manage secure and scalable business systems.
        </p>

        <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
          Program Structure
        </h3>

        <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
          <li>Object-Oriented Programming & Data Structures</li>
          <li>Database Management Systems & Data Warehousing</li>
          <li>Computer Networks & Information Security</li>
          <li>Web Technologies & Application Development</li>
          <li>Cloud Computing & DevOps Practices</li>
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
      Program Highlights
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
      Our B.E. in Information Technology blends core computing principles with specialized training in enterprise-grade technologies. The programme is designed to create IT professionals who can bridge the gap between business needs and technological implementation.
    </p>

    {/* HIGHLIGHT CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="w-full h-48 relative">
          <Image
            src="/Programs/IT/IT1.jpg"
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
            <span className="font-bold">Enterprise Technology Focus : </span>
            The curriculum builds expertise in software development, network architecture, and database systems, forming the foundation for implementing and managing large-scale IT solutions.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="w-full h-48 relative">
          <Image
            src="/Programs/IT/IT2.jpg"
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
            <span className="font-bold">Advanced IT Infrastructure Labs : </span>
            Gain hands-on experience in our networking, cybersecurity, and cloud computing labs, equipped with industry-standard tools for system administration, development, and security auditing.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="w-full h-48 relative">
          <Image
            src="/Programs/IT/IT3.jpg"
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
            <span className="font-bold">Industry-Ready Competence : </span>
            Through live projects and internships, students develop practical skills in system integration, software development life cycles, and IT service management, making them assets to any technology-driven organization.
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
                  Information Technology graduates are pivotal across all sectors, including finance, healthcare, e-commerce, and consulting. They are equipped for roles that involve developing software, managing IT infrastructure, and ensuring the security and efficiency of business operations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
                  <p>Software Developer/Engineer </p>
                  <p>IT Project Manager </p>
                  <p>Systems Analyst </p>
                  <p>Network Administrator </p>
                  <p>Database Administrator </p>
                  <p>Cloud Engineer </p>
                  <p>Cybersecurity Analyst </p>
                  <p>DevOps Engineer </p>
                </div>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="flex-1">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/career-opportunities.jpg"
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
  
  


    </div>
  );
}
