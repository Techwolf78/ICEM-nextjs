"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQComp";
import Link from "next/link";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";
import { Building2, Landmark, Rocket, GraduationCap } from "lucide-react";

export default function Civil() {
  // const [activeFAQ, setActiveFAQ] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const faqRef = useRef(null);

  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochures/ICEMAdmissionBrochure2025.pdf";
    link.download = "ICEM-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-white text-white">
      {/* -------------------------------------- HERO SECTION -------------------------------------- */}
      <div
        className="relative w-full overflow-hidden 
  h-[55vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banners/civileng.webp"
            alt="Civil Engineering Department"
            fill
            className="
        object-cover 
        object-center 
        md:object-[60%]   /* better framing on small desktop */
        scale-100 
        md:scale-105 
        lg:scale-110 
        opacity-90
      "
            priority
          />
        </div>

        {/* Gradient Overlay */}
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
              Department of Civil Engineering
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
              The Department of Civil Engineering at Indira College of
              Engineering and Management (ICEM) stands as a pillar of
              innovation, knowledge, and excellence in shaping tomorrow’s
              infrastructure leaders.
              <br />
              <br />
              The department is equipped with well-established laboratories,
              modern instruments, advanced computing facilities with licensed
              software, and interactive teaching aids such as models, visual
              charts, and multimedia content. It emphasizes research and
              development in Structural, Geotechnical, Transportation, Water
              Resources, and Environmental Engineering.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 w-full sm:w-auto">
              <button
                onClick={handleBrochureDownload}
                className="bg-secondary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-md w-full sm:w-auto"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Fade Mask */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* -------------------------------------- PROGRAM HIGHLIGHTS -------------------------------------- */}
      <div className="w-full bg-[#f7f7f7] py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Programme Highlights
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            The Civil Engineering Programme at ICEM blends strong theoretical
            foundations with practical exposure through latest software,
            cutting-edge construction practices, and hands-on learning across
            key Civil Engineering domains.
          </p>

          {/* -------------------------------------- HIGHLIGHT CARDS -------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ------------------ CARD 1 ------------------ */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/Computer/Comp1.jpg"
                  alt="Interdisciplinary Expertise"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-left text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-lg text-secondary mb-3">
                  Interdisciplinary Expertise
                </h3>

                <ul
                  className={`space-y-4 overflow-hidden transition-all duration-500 ${
                    expanded ? "max-h-[1500px]" : "max-h-[160px]"
                  }`}
                >
                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Integration with Other Domains</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • Collaboration with Computer Science, Mechanical, and
                        Environmental Engineering
                      </li>
                      <li>
                        • AI, ML, and Data Analytics in infrastructure design
                      </li>
                      <li>
                        • Remote Sensing, GIS & BIM for smart project
                        development
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Sustainability & Innovation</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • Green technologies and renewable energy concepts
                      </li>
                      <li>• Climate-resilient & sustainable construction</li>
                      <li>• Entrepreneurship & policy-driven learning</li>
                    </ul>
                  </li>

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Collaborative Learning</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Joint interdisciplinary projects & seminars</li>
                      <li>• Strong industry-academia ecosystem</li>
                    </ul>
                  </li>
                </ul>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 text-secondary w-full font-semibold text-center transition-all"
                >
                  {expanded ? "Read less ▲" : "Read more ▼"}
                </button>
              </div>
            </div>

            {/* ------------------ CARD 2 ------------------ */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/Computer/Comp2.jpg"
                  alt="Cutting Edge Laboratories"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-left text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-lg text-secondary mb-3">
                  Cutting-Edge Laboratories
                </h3>

                <ul className="ml-6 space-y-2">
                  <li>
                    • Advanced labs: Concrete, Geotechnical, Transportation,
                    Environmental & Structural Testing
                  </li>
                  <li>• Modern instruments & testing equipment</li>
                  <li>
                    • Software exposure: AutoCAD, STAAD Pro, Revit, ETABS, GIS,
                    BIM
                  </li>
                </ul>
              </div>
            </div>

            {/* ------------------ CARD 3 ------------------ */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/programs/Computer/Comp3.jpg"
                  alt="Industry Alignment"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-left text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-lg text-secondary mb-3">
                  Industry Alignment
                </h3>

                <ul
                  className={`space-y-4 overflow-hidden transition-all duration-500 ${
                    expanded ? "max-h-[1500px]" : "max-h-[150px]"
                  }`}
                >
                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Technical Skills</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• AutoCAD, STAAD Pro, Revit, ETABS, Primavera</li>
                      <li>• Survey instruments & material testing</li>
                      <li>• BIM & GIS software expertise</li>
                      <li>
                        • Strong foundation in codes & structural analysis
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Analytical & Managerial Skills</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Planning, estimation, scheduling</li>
                      <li>• Data-driven engineering decisions</li>
                      <li>• Sustainability & green building concepts</li>
                      <li>• Quality control, safety & contract management</li>
                    </ul>
                  </li>

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Professional & Soft Skills</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Communication & teamwork</li>
                      <li>• Leadership & ethical responsibility</li>
                      <li>• Adaptability & digital readiness</li>
                      <li>• Entrepreneurial mindset for start-ups</li>
                    </ul>
                  </li>
                </ul>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 text-secondary w-full font-semibold text-center transition-all"
                >
                  {expanded ? "Read less ▲" : "Read more ▼"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------- CAREER OPPORTUNITIES -------------------------------------- */}
      <div className="w-full bg-gray-50 text-black py-20">
        {" "}
        {/* Changed bg to gray-50 to make white cards pop */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Our program opens doors to diverse pathways in government, private
              industry, and research.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* LEFT: The Interactive Cards List */}
            <div className="flex-1 w-full space-y-6">
              {/* Card 1: Public Sector */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Landmark size={28} />{" "}
                    {/* Fallback: <span className="text-2xl">🏛️</span> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-secondary transition-colors">
                      Public Sector
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                        PWD, Irrigation, Smart City & Municipal Corp
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                        PSUs: NBCC, NHAI, Railways, DRDO
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                        UPSC, MPSC & Govt Engineering Roles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 2: Private Sector */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Building2 size={28} />{" "}
                    {/* Fallback: <span className="text-2xl">🏢</span> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-secondary transition-colors">
                      Private Sector
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                        Construction, Design & PMC Consultancies
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                        Real-Estate Developers & Contractors
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                        BIM, GIS & Infra-tech Companies
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 3: Higher Ed */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <GraduationCap size={28} />{" "}
                    {/* Fallback: <span className="text-2xl">🎓</span> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-secondary transition-colors">
                      Entrepreneurship & Higher Studies
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                        Start-ups in Construction & Surveying
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60"></span>
                        M.Tech / MS / PhD (India & Abroad)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Image (Sticky) */}
            {/* 'sticky top-8' keeps the image in view as you scroll down the list */}
            <div className="flex-1 w-full lg:h-[600px] relative hidden md:block">
              <div className="sticky top-8 w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/programs/1.jpg"
                  alt="Civil Engineering Careers"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay for style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                {/* Optional: Text on Image */}
                <div className="absolute bottom-6 left-6 text-white p-4">
                  <p className="font-bold text-lg">Build the World</p>
                  <p className="text-sm opacity-90">
                    From Infrastructure to Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------- OTHER SECTIONS -------------------------------------- */}
      <RecruitersSection />
    </div>
  );
}
