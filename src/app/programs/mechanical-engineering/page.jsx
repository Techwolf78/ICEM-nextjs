"use client";

import React, { useState } from "react";
import FAQSection from "@/components/FAQSections/FAQMECH";
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

  

  const labsGallery = [
    {
      image: "/Programs/Mech/DSC02662.webp",
      title: "Metrology and Quality Control",
      details: [
        "Auto Collimator With Angle Dekker",
        "Floating Carriage Micrometer",
        "Optical Flat With Monochromatic Light Source",
        "Portable Surface Roughness Tester",
        "Pneumatic Comparator",
        "Profile Projector (PPT-200)",
      ],
    },
    {
      image: "/Programs/Mech/DSC02667.webp",
      title: "Mechatronics",
      details: [
        "Micrologix 1000 PLC Trainer",
        "PID Flow Control Trainer",
        "Arduino Development Kit",
        "PID Trainer",
        "Temperature Sensor Calibration Trainer Kit",
      ],
    },
    {
      image: "/Programs/Mech/DSC02671.webp",
      title: "Refrigeration & Air Conditioning",
      details: [
        "Compression Refrigeration Test Rig",
        "Air Conditioning Trainer",
        "ICE Plant Test Rig",
        "Vapour Absorption Test Rig",
        "Cut Section of Hermetic Compressor",
      ],
    },
    {
      image: "/Programs/Mech/DSC02675.webp",
      title: "Industrial Fluid Power",
      details: [
        "Advanced Pneumatic Trainer",
        "Advanced Hydraulic Trainer",
        "Gear Pump Test Rig",
        "Vane Pump Test Rig",
        "Pressure Relief Valve Testing",
      ],
    },
    {
      image: "/Programs/Mech/DSC02676.webp",
      title: "Heat Mass Transfer",
      details: [
        "Thermal Conductivity of Metal Rod Apparatus",
        "Parallel & Counter Flow Apparatus",
        "Emissivity Measurement Apparatus",
        "Thermal Conductivity of Insulating Powder",
        "Critical Heat Flux Apparatus",
        "Natural Convection Apparatus",
        "Forced Convection Apparatus",
        "Pin Fin Apparatus",
      ],
    },
    {
      image: "/Programs/Mech/DSC02678.webp",
      title: "Theory of Machines",
      details: [
        "Synchromesh Gear Box",
        "Differential Gear Box",
        "Epicyclic Gear Train Setup",
        "Motorized Gyroscope",
        "Gear Tooth Profile Generation Setup",
      ],
    },
    {
      image: "/Programs/Mech/DSC02680.webp",
      title: "Dynamics of Machinery",
      details: [
        "Static & Dynamic Balancing Apparatus",
        "Universal Vibration Testing Machine",
        "Digital Sound Measurement Apparatus",
      ],
    },
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
        <div className="relative max-w-[1500px] px-4 sm:px-6 md:px-12 lg:px-20 z-20">
  <div className="max-w-3xl text-white">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
      4-Year B.Tech Mechanical Engineering Programme
      <br className="hidden sm:block" />
      with specialisation in
      <br className="hidden sm:block" />
      <span className="bg-gradient-to-br from-cyan-400 to-sky-400 bg-clip-text text-transparent font-extrabold">
        Electric Vehicle Technologies
      </span>
    </h2>

    {/* Description */}
    <p className="mt-3 sm:mt-4 text-white/80 leading-relaxed max-w-2xl text-sm sm:text-base">
      This programme equips students with the knowledge and skills to design,
      develop, and optimize intelligent, automated, and sustainable systems.
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
                B.Tech Mechanical Engineering with Specialization in Electric
                Vehicle Technologies
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                The programme nurture the graduates in technically skilled,
                industry-ready, and socially responsible engineers — empowering
                them to shape tomorrow’s engineering solutions today.
              </p>

              <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
                Programme Structure
              </h3>

              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                <li>Modern Infrastructure & Labs</li>
                <li>Experienced Mentoring</li>
                <li>EV Technology Integration</li>
                <li>Industry Collaboration</li>
                <li>Outcome-Based Learning</li>
                <li>Career & Higher Education Pathways</li>
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
            Our B.Tech Mechanical Engineering with Specialization in Electric
            Vehicle Technologies offers a dynamic blend of advanced technical
            knowledge and practical experience. With a strong focus on
            innovation, hands-on learning, and industry-driven projects, the
            Programme prepares students to excel in emerging areas such as
            electric vehicle, automation, and smart manufacturing. Backed by
            state-of-the-art laboratories & robust industry collaborations,
            students gain real-world exposure and enhanced career opportunities
            in the evolving field of mechanical engineering.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/Mech/mech1.webp"
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
                    Strong Engineering Foundation:{" "}
                  </span>
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
                  src="/Programs/Mech/mech2.webp"
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
                    Advanced Engineering Laboratories:{" "}
                  </span>
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
                  src="/Programs/Mech/mech3.webp"
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

      {/* ===== LABS GALLERY SECTION ===== */}
      {/* ===== LABS GALLERY SECTION ===== */}
      <div className="w-full bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Mechanical Engineering Laboratories
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our state-of-the-art laboratories that support practical
            learning, innovation, and hands-on engineering experience.
          </p>

          {/* 🔥 4 Column Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {labsGallery.map((lab, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* IMAGE */}
                <Image
                  src={lab.image}
                  alt={lab.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-56 transform group-hover:scale-110 transition-all duration-500"
                />

                {/* HEADING BAR */}
                <div className="absolute bottom-0 w-full bg-black/60 p-3 text-white text-center font-semibold text-lg">
                  {lab.title}
                </div>

                {/* HOVER OVERLAY */}
                <div
                  className="
            absolute inset-0 bg-black/80 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300 
            flex flex-col items-center justify-center p-6
          "
                >
                  <h3 className="text-white font-bold text-lg mb-3">
                    {lab.title}
                  </h3>
                  <ul className="text-white text-sm space-y-1 text-left">
                    {lab.details.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
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
              This Programme is equipped to excel in both traditional mechanical
              roles and emerging technology sectors. With expertise in design,
              automation, electric vehicle, and smart manufacturing. students
              are prepared for dynamic careers across industries driving the
              future of engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
              <p>Mechanical Design Engineer </p>
              <p>Mechatronics Engineer </p>
              <p>Automation Engineer/Electric Vehicle Engineer</p>
              <p>Product Development Engineer </p>
              <p>Manufacturing / Production Engineer </p>
              <p>Research & Development Engineer </p>
              <p>Maintenance and Reliability Engineer</p>
              <p>CAD/CAM Specialist </p>
              <p>Quality and Process Engineer</p>
              <p>Project Engineer or Technical Consultant </p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION (Placeholder) */}
          <div className="flex-1">
            <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/Programs/2.webp"
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
      <RecruiterSection />

      {/* ===== NEXT STEPS SECTION ===== */}
      <div className="bg-white py-16">
        <CTASection />
      </div>

      {/* ===== FREQUENTLY ASKED QUESTIONS SECTION ===== */}
      <FAQSection />

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
