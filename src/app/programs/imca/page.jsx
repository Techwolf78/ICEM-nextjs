"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import Image from "next/image";

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
      <div className="w-full bg-primary py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* LEFT TEXT SECTION */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              4-Year B.E. imca Program <br />
              with specialisation in <br />
              <span className="text-secondary">
                Artificial Intelligence & Future Technologies
              </span>
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed">
              This innovative program blends foundational computer science
              knowledge with cutting-edge skills in Artificial Intelligence,
              Blockchain, Cloud Computing, and Cyber Security, helping prepare
              students for high-impact careers in the tech industry.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={toggleModal}
                className="bg-secondary hover:bg-white hover:text-black text-white px-6 py-2 rounded-md transition-colors"
              >
                Enquire Now
              </button>
              <button
                onClick={handleBrochureDownload}
                className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md transition-colors"
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1">
            <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/images/computer-hero.jpg"
                alt="Computer Engineering Program"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
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
                  The program spans 4 years, providing comprehensive education
                  in computer science and emerging technologies.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  💼 Internship Opportunity
                </h4>
                <p className="text-gray-700">
                  Students undertake a 6-month to 1-year internship with global
                  tech leaders to gain real-world experience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🏫 Campus Recruitment
                </h4>
                <p className="text-gray-700">
                  Placement opportunities with top tech companies, including
                  Fortune 500 corporations.
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
                  Click here to read more about eligibility for our imca Program
                  with Specialisation in AI & Future Tech.
                </p>
              </div>
            </div>
          </div>

          {/* ===== PROGRAM STRUCTURE + APPLY FORM SECTION ===== */}
          <div className="w-full bg-white text-black py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-4 sm:px-6 items-start">
              {/* LEFT TEXT SECTION */}
              <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 leading-snug">
                  Integrated MCA
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  The program prepares graduates to drive innovation in
                  industries like AI, Cloud Computing, Cyber Security, and
                  Blockchain. It combines academic rigor with practical
                  experience, ensuring students gain real-world skills and
                  exposure to emerging technologies.
                </p>

                <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                  Program Structure
                </h3>

                <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
                  <li>➜ Computer Science and Programming Foundations</li>
                  <li>➜ Data Structures and Advanced Algorithms</li>
                  <li>➜ Artificial Intelligence and Machine Learning</li>
                  <li>➜ Blockchain and Cybersecurity</li>
                  <li>➜ Cloud Computing and Emerging Tech Labs</li>
                </ul>
              </div>

              {/* RIGHT FORM SECTION */}
              <div className="flex-1 bg-gray-50 p-4 sm:p-8 rounded-lg shadow-md max-h-[750px] overflow-y-auto w-full">
                <form className="space-y-4 modal-form">
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Enter Name *"
                    className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Enter Email Address *"
                    className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  {/* Mobile Number */}
                  <div className="flex flex-col sm:flex-row border border-gray-300 rounded-md overflow-hidden">
                    <select className="bg-gray-100 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2 text-gray-700 outline-none">
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Enter Mobile Number *"
                      className="flex-1 px-3 sm:px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* State & City */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-primary">
                      <option>Select State *</option>
                      <option>Maharashtra</option>
                      <option>Gujarat</option>
                      <option>Karnataka</option>
                    </select>

                    <select className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-primary">
                      <option>Select City *</option>
                      <option>Pune</option>
                      <option>Mumbai</option>
                      <option>Nashik</option>
                    </select>
                  </div>

                  {/* Discipline & Course */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-primary">
                      <option>Select Discipline Applying For *</option>
                      <option>Engineering</option>
                      <option>Management</option>
                      <option>Computer Applications</option>
                    </select>

                    <select className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-primary">
                      <option>Select Course *</option>
                      <option>B.E.</option>
                      <option>MBA</option>
                      <option>MCA</option>
                    </select>
                  </div>

                  {/* Program */}
                  <select className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-primary">
                    <option>Select Program *</option>
                    <option>Computer Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>AI & Data Science</option>
                    <option>IT</option>
                  </select>

                  {/* CET Score */}
                  <input
                    type="text"
                    placeholder="Enter CET Score"
                    className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  {/* Captcha Section */}
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    <div className="bg-white border border-gray-300 rounded-md flex-1 sm:w-1/2 flex items-center justify-center py-2">
                      <span className="text-lg font-bold text-gray-700 select-none">
                        8fcb09
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Captcha"
                      className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-2 mt-2">
                    <input type="checkbox" className="mt-1" />
                    <p className="text-xs text-gray-700 leading-snug">
                      I agree to receive information regarding my submitted
                      enquiry*
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-md mt-3 transition-colors"
                  >
                    SUBMIT
                  </button>
                </form>
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
                Our B.E. in Computer Science with Artificial Intelligence &
                Future Technologies offers a unique blend of cutting-edge
                knowledge and practical experience. With a focus on innovation,
                industry-aligned projects, and hands-on labs, the program equips
                students to lead in emerging technologies, while our strong
                industry connections ensure enhanced career opportunities and
                real-world exposure.
              </p>

              {/* HIGHLIGHT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/images/interdisciplinary-expertise.jpg"
                      alt="Interdisciplinary Expertise"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Interdisciplinary Expertise
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The Computer Science program with a specialisation in AI &
                      Future Technologies provides a multidisciplinary
                      foundation in AI, Blockchain, Cloud Computing, and Cyber
                      Security, preparing students to tackle complex challenges
                      in a fast-paced industry.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/images/cutting-edge-labs.jpg"
                      alt="Cutting-Edge Laboratories"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Cutting-Edge Laboratories
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Hands-on experience in high-tech environments using
                      industry-standard tools. Students engage in real-world
                      projects bridging theory and practice, building critical
                      skills for modern tech careers.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/images/industry-skills.jpg"
                      alt="Industry-Relevant Skills"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Industry-Relevant Skills
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This program equips students to master technologies like
                      AI, Cloud Computing, and Blockchain, fostering innovation
                      and ensuring readiness for the future tech industry.
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
                  The field of AI and future technologies offers diverse career
                  opportunities across various sectors. Professionals can shape
                  innovations in industries like healthcare, finance, and tech,
                  with roles focusing on data, security, and emerging
                  technologies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
                  <p>➜ Artificial Intelligence Engineer</p>
                  <p>➜ Data Scientist</p>
                  <p>➜ Blockchain Developer</p>
                  <p>➜ Cyber Security Analyst</p>
                  <p>➜ Cloud Solutions Architect</p>
                  <p>➜ Machine Learning Specialist</p>
                  <p>➜ AI Researcher</p>
                  <p>➜ Robotics Engineer</p>
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
          <div className="w-full bg-[#f7f7f7] text-black py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Campus Recruitment
              </h2>
              <p className="text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
                The program prepares students to excel in diverse fields,
                including AI research labs, Blockchain start-ups, Cyber Security
                firms, and Cloud Computing giants. Some of our top recruiters
                are:
              </p>

              {/* LOGO GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {Array(18)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="h-20 bg-white shadow-md rounded-md flex items-center justify-center text-gray-500"
                    >
                      <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                        Logo {index + 1}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* ===== NEXT STEPS SECTION ===== */}
          <div className="w-full bg-[#f7f7f7] py-16 flex justify-center px-6">
            <div className="bg-primary rounded-2xl max-w-5xl w-full text-center text-white py-12 px-6">
              <h2 className="text-3xl font-semibold mb-4">The Next Steps</h2>
              <p className="text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                The steps you take today shape your future. At Indira College,
                we empower bright minds with strong fundamentals, a global
                perspective, and leadership skills to make a meaningful change
                in the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBrochureDownload}
                  className="bg-secondary hover:bg-white hover:text-black text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  Download Brochure
                </button>
                <button
                  onClick={toggleModal}
                  className="bg-white hover:bg-white hover:text-black text-secondary px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>

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
