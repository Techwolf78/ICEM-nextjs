"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSection";
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
            src="/Programs/MtechComp.webp"
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
        <div className="relative max-w-[1500px] px-4 sm:px-6 md:px-12 lg:px-20 z-20">
  <div className="max-w-3xl text-white">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
      2-Year M.Tech in Computer Science
      <br className="hidden sm:block" />
      <span className="bg-gradient-to-br from-cyan-400 to-sky-400 bg-clip-text text-transparent font-extrabold">
        Mastering Cutting-Edge Computing Technologies and Theory
      </span>
    </h2>

    {/* Description */}
    <p className="mt-3 sm:mt-4 text-white/80 leading-relaxed max-w-2xl text-sm sm:text-base">
      This advanced programme offers a deep dive into specialized areas of
      computer science, blending rigorous theoretical coursework with research.
      It prepares graduates for leadership roles in technology innovation,
      specialized software development, and academia.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 w-full sm:w-auto">
      <button
        onClick={toggleModal}
        className="bg-secondary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold
        text-sm sm:text-base w-full sm:w-auto"
      >
        Enquire Now
      </button>

      <button
        onClick={handleBrochureDownload}
        className="bg-secondary text-white px-6 sm:px-8 py-3 rounded-lg
        text-sm sm:text-base w-full sm:w-auto"
      >
        Download Brochure
      </button>
    </div>

  </div>
</div>


        {/* Bottom Fade Mask */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* ===== ENHANCED TAB NAVIGATION WITH SLIDING INDICATOR ===== */}

      {/* ===== WHITE INFO SECTION ===== */}
      <div className="w-full bg-[#f8f8f8] text-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🕓 Course Duration
            </h4>
            <p className="text-gray-700">
              An intensive 2-year programme comprising advanced coursework and a
              research-based thesis.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              💼 Internship Opportunity
            </h4>
            <p className="text-gray-700">
              Research internships and projects with top IT R&D labs, tech
              giants, and innovative startups.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🏫 Campus Recruitment
            </h4>
            <p className="text-gray-700">
              Placement in specialized roles with top product-based companies,
              R&D centers, and global IT firms.
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
              M.Tech in Computer Science.
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
                M.Tech in Computer Science
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                This programme enables students to deepen their expertise in
                advanced algorithms, distributed systems, artificial
                intelligence, and cybersecurity. It is research-oriented,
                designed to create technology leaders capable of solving complex
                computational problems and driving future innovations.
              </p>

              <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                Programme Structure
              </h3>

              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                <li>Design and Analysis of Algorithms</li>
                <li>Machine Learning & Deep Learning</li>
                <li>Advanced Computer Architecture & Distributed Systems</li>
                <li>Network & Information Security</li>
                <li>
                  Electives in AI, Data Science, Cloud Computing & Research
                  Dissertation
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
            Our M.Tech in Computer Science is designed for those who wish to
            master the theoretical foundations and emerging technologies that
            define the future of computing.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/MTECHcomp/Mtechcomp1.webp"
                  alt="Interdisciplinary Expertise"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Advanced Specializations
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">Deep-Dive Learning : </span>Pursue
                  focused study in high-demand areas such as Artificial
                  Intelligence, Data Science, and Cybersecurity to become a
                  subject matter expert.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/MTECHcomp/Mtechcomp2.webp"
                  alt="Cutting-Edge Laboratories"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  Research & Development Focus
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    Innovation-Centric Curriculum :{" "}
                  </span>
                  Engage in a significant research thesis, often leading to
                  publications in reputed journals and conferences, under the
                  guidance of experienced faculty.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/MTECHcomp/Mtechcomp3.webp"
                  alt="Industry-Relevant Skills"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  High-Performance Computing Labs
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-bold">
                    State-of-the-Art Infrastructure :{" "}
                  </span>
                  Utilize advanced computing labs equipped for big data
                  analytics, cloud computing, and AI research to experiment and
                  build sophisticated systems.
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
              An M.Tech in Computer Science opens doors to prestigious roles in
              core technology research, advanced development, and strategic IT
              leadership.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
              <p>Research Scientist </p>
              <p>Machine Learning Engineer </p>
              <p>Data Architect </p>
              <p>Big Data Analyst </p>
              <p>Cloud Architect </p>
              <p>Cybersecurity Specialist </p>
              <p>Software Development Lead </p>
              <p>Algorithm Specialist</p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1">
            <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/Programs/12.webp"
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

      {/* ===== FREQUENTLY ASKED QUESTIONS SECTION =====
      <div ref={faqRef}>
        <FAQSection />
      </div> */}

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
