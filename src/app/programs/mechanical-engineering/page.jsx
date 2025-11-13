"use client";

import React, { useState } from "react";
import FAQSection from "@/components/FAQSection";
import RecruiterSection from "../../../components/home/RecruiterSection";
import Image from "next/image";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

const CompBrochure = "/BEComp.pdf";

export default function Mech() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle Apply Now Modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Brochure Download
  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochures/ICEMAdmissionBrochure2025.pdf"; // ✅ Use public folder path directly
    link.download = "ICEM-Brochure.pdf"; // ✅ Updated filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Syllabus",
    "Course Structure",
    "Facilities",
    "Staff",
    "Activities",
    "Why Indira",
    "Features",
    "Fee",
  ];

  const mechImages = [
    "/Programs/Mech/DSC02662.JPG",
    "/Programs/Mech/DSC02667.JPG",
    "/Programs/Mech/DSC02671.JPG",
    "/Programs/Mech/DSC02675.JPG",
    "/Programs/Mech/DSC02676.JPG",
    "/Programs/Mech/DSC02678.JPG",
    "/Programs/Mech/DSC02680.JPG",
    "/Programs/Mech/DSC02683.JPG",
    "/Programs/Mech/DSC02684.JPG",
    "/Programs/Mech/DSC02686.JPG",
    "/Programs/Mech/DSC02687.JPG",
    "/Programs/Mech/DSC02688.JPG",
    "/Programs/Mech/DSC02689.JPG",
    "/Programs/Mech/DSC02690.JPG",
    "/Programs/Mech/DSC02691.JPG",
  ];

  return (
    <div className="w-full text-white">
      {/* ===== TOP DARK SECTION ===== */}
     <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/Programs/AIDS2.jpg"
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
    4-Year B.Tech Mechanical Engineering Program <br />
    with specialisation in <br />
    <span className="bg-gradient-to-br from-cyan-400 to-sky-400 bg-clip-text text-transparent font-extrabold">
      Advanced Manufacturing & Smart Technologies
    </span>
  </h2>

  <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
    The Department of Mechanical Engineering at ICEM focuses on building strong
    fundamentals in design, thermodynamics, materials, and manufacturing processes.
    The program integrates modern advancements such as automation, robotics,
    mechatronics, and smart manufacturing to prepare students for next-generation
    engineering challenges in industries and research.
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
              A comprehensive 4-year curriculum blending core mechanical
              engineering with modern specializations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              💼 Internship Opportunity
            </h4>
            <p className="text-gray-700">
              Students undertake a 6 to 8-month internship with leading
              manufacturing, automotive, and engineering corporations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🏫 Campus Recruitment
            </h4>
            <p className="text-gray-700">
              Strong placement record with top-tier recruiters from the
              automotive, aerospace, energy, and industrial automation sectors.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
              🎓 Eligibility
            </h4>
            <p className="text-gray-700">
              Click here to read more about the eligibility criteria for our
              B.E. in Mechanical Engineering.
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
          B.E. in Mechanical Engineering
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
          This programme equips students with a deep understanding of mechanics, design, thermal sciences, 
          and materials, combined with practical expertise in Computer-Aided Engineering (CAE) and intelligent systems. 
          The curriculum is designed to foster analytical thinking and innovation, ensuring graduates are ready 
          to contribute to core engineering and R&D roles.
        </p>

        <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
          Program Structure
        </h3>

        <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
          <li>Engineering Mechanics, Materials Science, and CAD</li>
          <li>Thermodynamics, Fluid Mechanics, and Heat Transfer</li>
          <li>Manufacturing Processes and Automation</li>
          <li>Machine Design, Dynamics, and Control Systems</li>
          <li>Mechatronics, Robotics, and Smart Manufacturing</li>
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
      Our B.E. in Mechanical Engineering combines rigorous theoretical
      instruction with extensive hands-on learning. The programme is
      structured to develop proficient engineers capable of designing,
      analysing, and managing complex mechanical systems for a sustainable
      and automated future.
    </p>

    {/* HIGHLIGHT CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="w-full h-48 relative">
          <Image
            src="/Programs/Mech/mech1.jpg"
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
            <span className="font-bold">Strong Engineering Foundation: </span>
            The curriculum builds expertise in core domains like machine
            design, thermodynamics, and fluid dynamics, while introducing
            advanced topics in robotics and additive manufacturing.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="w-full h-48 relative">
          <Image
            src="/Programs/Mech/mech2.jpg"
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
            <span className="font-bold">Advanced Engineering Laboratories: </span>
            Gain hands-on experience in our CAD/CAM, Automation, Fluid
            Mechanics, and Materials Testing labs, equipped with
            industry-standard software and machinery.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="w-full h-48 relative">
          <Image
            src="/Programs/Mech/mech3.jpg"
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
            <span className="font-bold">Industry-Ready Competence: </span>
            Through industry projects and internships, students develop
            the practical skills and problem-solving abilities highly
            valued by leading engineering firms.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* <section className="w-full bg-gray-50 py-16 overflow-hidden">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
          Laboratories
        </h2>

        <div className="relative w-full overflow-visible group">
          <div className="flex animate-marquee space-x-6 px-6 group-hover:pause">
            {[...mechImages, ...mechImages].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] rounded-xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-72">
                  <Image
                    src={img}
                    alt={`Mech Lab ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .group-hover\\:pause {
            animation-play-state: paused;
          }
        `}</style>
      </section> */}

      {/* ===== CAREER OPPORTUNITIES SECTION ===== */}
      <div className="w-full bg-white text-black py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          {/* LEFT TEXT SECTION */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Mechanical Engineering graduates have a wide scope in sectors like
              automotive, aerospace, energy, and robotics. They are equipped to
              take on roles that involve the design, development, testing, and
              management of mechanical systems and processes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
              <p>Design Engineer </p>
              <p>Production Engineer </p>
              <p>R&D Engineer </p>
              <p>Quality Control Engineer </p>
              <p>Thermal Engineer </p>
              <p>Project Engineer </p>
              <p>Automotive Engineer </p>
              <p>Robotics Engineer </p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION (Placeholder) */}
          <div className="flex-1">
            <div className="w-full h-[300px] bg-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">[ Image Placeholder ]</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CAMPUS RECRUITMENT SECTION ===== */}
      <RecruiterSection />

      {/* ===== NEXT STEPS SECTION ===== */}
     <div className="bg-white py-16">
  <CTASection />
</div>

 

      {/* ===== FREQUENTLY ASKED QUESTIONS SECTION ===== */}
      <FAQSection />

  
      
    </div>
  );
}
