"use client";

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trophy, Target, Zap, TrendingUp } from "lucide-react";

const HackathonTimeline = () => {
  const [expandedTheme, setExpandedTheme] = useState(null);

  const themes5_0 = [
    {
      id: 1,
      title: "Low-carbon Footprint Solutions/Technologies",
      description:
        "Decentralized renewable energy, efficient integration into low-carbon pathways for MSMEs",
    },
    {
      id: 2,
      title: "Stealth, Surveillance, and Cyber Defense Technologies",
      description:
        "Stealth UAVs, low-observable materials, electronic warfare, AR/VR combat training, AI-enabled surveillance",
    },
    {
      id: 3,
      title: "Innovation in Adoption of Industry 4.0 & 5.0",
      description:
        "Automation, robotics, cyber-physical systems, digital twins, collaborative robots (cobots), plug-and-play automation kits, GIS-based tools",
    },
    {
      id: 4,
      title: "Innovation for Business Upliftment in Coastal & Hilly Areas",
      description:
        "Climate-resilient business models, disaster-ready infrastructure, AI-powered risk forecasting, community-based early warning systems",
    },
    {
      id: 5,
      title: "Smart and Resilient Supply Chains",
      description:
        "Logistics optimization, inventory management, AI-based demand forecasting, collaborative supply chain platforms, IoT-enabled smart warehousing",
    },
  ];

  const winners5_0 = [
    {
      sNo: 1,
      name: "Deep Dinesh Biswas",
      institute: "ICEM AI & DS",
      idea: "Social Engineering Simulator Chatbot for Cybersecurity Awareness (SE bot)",
      theme: "Stealth, Surveillance, and Cyber Defense Technologies",
      amount: "10 Lakhs",
    },
    {
      sNo: 2,
      name: "Adhiraj Jagtap Anantharao",
      institute: "Pawar College of Engineering & Research, Pune - CS",
      idea: "UmbraSight An End-to-End Dark-Web Monitoring Threat-Intelligence Platform",
      theme: "Stealth, Surveillance, and Cyber Defense Technologies",
      amount: "14.5 Lakhs",
    },
    {
      sNo: 3,
      name: "Garima Kushwaha",
      institute: "ICEM Computer Engineering",
      idea: "AerialLink A Hybrid High-Altitude Drone Relay System for Coordinating Swarm Drones in Search and Rescue Operations",
      theme: "Stealth, Surveillance, and Cyber Defense Technologies",
      amount: "15 Lakhs",
    },
    {
      sNo: 4,
      name: "Joshna Lowrence Monteiro",
      institute: "ICEM MCA",
      idea: "HygieCoin- A Reward-Based Smart Disposal System for Incontinence waste",
      theme: "Innovation in Adoption of Industry 4.0 & 5.0 in MSME ecosystem",
      amount: "15 Lakhs",
    },
    {
      sNo: 5,
      name: "Samruddhi Santosh Morde",
      institute: "ICEM AI&DS",
      idea: "WildSentinel -Smart Bio-Digital Wildlife Defense Grid for Hilly MSMEs",
      theme: "Innovation for business upliftment and sustainability in coastal and hilly areas",
      amount: "12 Lakhs",
    },
  ];

  const stats5_0 = [
    { label: "Total Proposals Received", value: "45,000", icon: Zap },
    { label: "Total Registered Host Institutes", value: "794", icon: Target },
    { label: "Total Approved Ideas", value: "502", subLabel: "across India", icon: TrendingUp },
    { label: "Up to Funding ", value: "₹15 Lakhs", subLabel: "per Idea", icon: Trophy },
    { label: "Total Ideas Approved for ICEM", value: "5", icon: Zap },
    { label: "Total Funds Granted", value: "₹66.5 Lakhs", icon: Trophy },
  ];

  return (
    <div className="w-full">
      {/* MSME HACKATHON 5.0 - FEATURED SECTION */}
      <section className="py-3 md:py-6 lg:py-8 bg-gradient-to-b from-blue-50 to-white border-t-4 border-secondary">
        <div className="max-w-7xl mx-auto px-3 md:px-4">
          {/* Header with Badge */}
          <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-secondary text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold">
                ⭐ LATEST EDITION - 2025
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-secondary mb-2 md:mb-3">
              MSME Idea Hackathon 5.0
            </h2>
            <p className="text-sm md:text-base text-center text-gray-600 max-w-3xl mx-auto">
              Smart and Sustainable MSMEs – A flagship initiative launched by the Hon'ble President of India
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">Overview</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
              MSME Idea Hackathon 5.0 is a flagship initiative under the Ministry of Micro, Small & Medium Enterprises (MSME), Government of India, launched on June 27, 2025, by the Hon'ble President of India, under the MSME Champions Scheme (Incubation Component of the MSME Innovative Scheme).
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              The theme <strong>"Smart and Sustainable MSMEs"</strong> focuses on promoting inclusive innovation aligned with Viksit Bharat @2047 and Atmanirbhar Bharat, harnessing India's diverse talent pool aged 18–60 years to address pressing national challenges.
            </p>
          </div>

          {/* Key Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="md:col-span-2 bg-gradient-to-br from-secondary/10 to-transparent p-4 md:p-5 rounded-lg border border-secondary/20">
              <h3 className="text-base md:text-lg font-bold text-secondary mb-2">Key Objectives</h3>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Promote inclusive innovation aligned with Viksit Bharat @2047 and Atmanirbhar Bharat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Harness India's diverse talent pool aged 18–60 years to address pressing national challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Transform high-potential ideas into scalable MSME-driven ventures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">•</span>
                  <span>Provide access to funding, mentorship, and incubation support</span>
                </li>
              </ul>
            </div>

            {/* Stats Grid - 2 Rows x 3 Columns */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              {stats5_0.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-3 md:p-4 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="mb-2 flex justify-center">
                    <stat.icon className="w-6 md:w-8 h-6 md:h-8 text-secondary" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                  {stat.subLabel && <div className="text-xs text-gray-500 mt-1">{stat.subLabel}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* 4-Stage Evaluation Process */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3 md:mb-4">
              4-Stage Evaluation Process
            </h3>
            <div className="relative">
              {/* Timeline connector - hidden on mobile */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#00A2A5] to-[#00A2A5]/30"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-2">
                {[
                  {
                    stage: 1,
                    evaluator: "Host Institutes (HI)",
                    description: "HIs shortlist ideas using expert panels (3–5 experts from diverse domains) and submit shortlisted applications",
                  },
                  {
                    stage: 2,
                    evaluator: "Ministry of MSME (PMU)",
                    description: "First-stage screening for completeness and eligibility; forwarded to DESCs",
                  },
                  {
                    stage: 3,
                    evaluator: "Domain Expert Selection Committees (DESC)",
                    description: "Thematic DESCs (from Industry/Academia/Government) evaluate ideas and recommend to PMAC",
                  },
                  {
                    stage: 4,
                    evaluator: "Project Monitoring & Advisory Committee (PMAC)",
                    description: "Final authority to approve/reject ideas; approved ideas receive financial assistance",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Stage Card */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 p-3 md:p-4 h-full relative z-10">
                      {/* Stage Number Circle */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-9 h-9 md:w-11 md:h-11 bg-gradient-to-r from-[#00A2A5] to-[#00A2A5]/70 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
                        {item.stage}
                      </div>

                      {/* Content */}
                      <div className="pt-3 md:pt-4">
                        <h4 className="font-bold text-secondary text-xs md:text-sm mb-2 leading-tight">
                          {item.evaluator}
                        </h4>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5 Themes Section */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3 md:mb-4">
              Five Themes for Ideas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {/* First 3 cards */}
              {themes5_0.slice(0, 3).map((theme) => (
                <div
                  key={theme.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#00A2A5] to-[#00A2A5]/10 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  {/* Top Gradient Bar - Right to Left */}
                  <div className="h-2 bg-gradient-to-l from-[#00A2A5] to-[#00A2A5]/30"></div>

                  {/* Theme Number Badge */}
                  <div className="bg-gradient-to-l from-[#00A2A5] to-[#00A2A5]/70 text-white p-4 md:p-6 relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div>
                        <div className="text-5xl md:text-6xl font-bold text-white/90">{theme.id}</div>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-white/80 font-semibold uppercase tracking-wider">Theme</p>
                        <p className="text-white/70 text-xs">Hackathon 5.0</p>
                      </div>
                    </div>
                  </div>

                  {/* Theme Content */}
                  <div className="p-5 md:p-6 relative z-10">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg mb-3 leading-tight transition-colors">
                      {theme.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {theme.description}
                    </p>
                  </div>

                  {/* Bottom accent line - Right to Left */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-l from-[#00A2A5] to-[#00A2A5]/30 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Last 2 cards - Centered */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center mt-3 md:mt-4 max-w-4xl mx-auto">
              {themes5_0.slice(3, 5).map((theme) => (
                <div
                  key={theme.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white w-full md:w-1/2 lg:w-96"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#00A2A5] to-[#00A2A5]/10 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  {/* Top Gradient Bar - Right to Left */}
                  <div className="h-2 bg-gradient-to-l from-[#00A2A5] to-[#00A2A5]/30"></div>

                  {/* Theme Number Badge */}
                  <div className="bg-gradient-to-l from-[#00A2A5] to-[#00A2A5]/70 text-white p-4 md:p-6 relative">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div>
                        <div className="text-5xl md:text-6xl font-bold text-white/90">{theme.id}</div>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-white/80 font-semibold uppercase tracking-wider">Theme</p>
                        <p className="text-white/70 text-xs">Hackathon 5.0</p>
                      </div>
                    </div>
                  </div>

                  {/* Theme Content */}
                  <div className="p-5 md:p-6 relative z-10">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg mb-3 leading-tight transition-colors">
                      {theme.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {theme.description}
                    </p>
                  </div>

                  {/* Bottom accent line - Right to Left */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-l from-[#00A2A5] to-[#00A2A5]/30 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Gallery */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3 md:mb-4">
              Event Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {/* Poster Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white">
                  {/* Image Container */}
                  <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-3 md:p-4 flex items-center justify-center min-h-80">
                    <Image
                      src="/research/poster.jpg"
                      alt="MSME Hackathon 5.0 Poster"
                      width={280}
                      height={380}
                      className="w-full max-w-sm h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <h4 className="font-semibold text-gray-800 text-xs md:text-sm">Poster</h4>
                </div>
              </div>

              {/* Team Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white">
                  {/* Image Container */}
                  <div className="bg-gradient-to-b from-blue-50 to-gray-100 p-3 md:p-4 flex items-center justify-center min-h-80">
                    <Image
                      src="/research/team-hackathon5.jpeg"
                      alt="Winning Team"
                      width={280}
                      height={380}
                      className="w-full max-w-sm h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <h4 className="font-semibold text-gray-800 text-xs md:text-sm">Team</h4>
                </div>
              </div>

              {/* Winners Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white">
                  {/* Image Container */}
                  <div className="bg-gradient-to-b from-amber-50 to-gray-100 p-3 md:p-4 flex items-center justify-center min-h-80">
                    <Image
                      src="/research/winners-hackathon5.jpeg"
                      alt="Winners Recognition"
                      width={280}
                      height={380}
                      className="w-full max-w-sm h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <h4 className="font-semibold text-gray-800 text-xs md:text-sm">Winners</h4>
                </div>
              </div>
            </div>
          </div>

          {/* ICEM Winners Section */}
          <div className="bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-2 border-secondary p-4 md:p-6 mb-4 md:mb-6">
            <div className="flex items-center mb-3 md:mb-4">
              <Trophy className="w-6 md:w-8 h-6 md:h-8 text-secondary mr-2" />
              <h3 className="text-lg md:text-xl font-bold text-secondary">
                ICEM Funded Projects
              </h3>
            </div>

            <p className="text-gray-700 mb-3 md:mb-4 text-xs md:text-sm">
              Indira College of Engineering and Management, Pune secured funding for <strong>5 Winning Proposals</strong> with a total amount of <strong>₹66.5 Lakhs</strong>
            </p>

            {/* Winners Table */}
            <div className="overflow-x-auto -mx-2 md:mx-0">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs font-bold">
                      S.No
                    </th>
                    <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs font-bold">
                      Incubatee Name
                    </th>
                    <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs font-bold">
                      Institute
                    </th>
                    <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs font-bold">
                      Idea Title
                    </th>
                    <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs font-bold">
                      Theme
                    </th>
                    <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs font-bold">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {winners5_0.map((winner, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-2 md:px-3 py-2 md:py-3 text-xs font-semibold text-secondary">
                        {winner.sNo}
                      </td>
                      <td className="px-2 md:px-3 py-2 md:py-3 text-xs font-semibold text-gray-900">
                        {winner.name}
                      </td>
                      <td className="px-2 md:px-3 py-2 md:py-3 text-xs text-gray-700">
                        {winner.institute}
                      </td>
                      <td className="px-2 md:px-3 py-2 md:py-3 text-xs text-gray-700">
                        <strong>{winner.idea}</strong>
                      </td>
                      <td className="px-2 md:px-3 py-2 md:py-3 text-xs text-gray-700">
                        {winner.theme}
                      </td>
                      <td className="px-2 md:px-3 py-2 md:py-3 text-xs font-bold text-secondary">
                        {winner.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 md:mt-4 text-center text-gray-700 text-xs md:text-sm italic">
              Celebrating the winners of MSME IDEA Hackathon 5.0 – where bold ideas become impactful solutions for India's future.{" "}
              <span 
                className="font-bold text-yellow-600"
                style={{
                  textShadow: '0 0 8px rgba(217, 119, 6, 0.6), 0 0 12px rgba(251, 191, 36, 0.4)'
                }}
              >
                Congratulations
              </span>
              {" "}to all the Winners!
            </p>
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITION - HACKATHON 4.0 */}
      <section className="py-3 md:py-6 lg:py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-3 md:px-4">
          <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-center mb-3">
              <span className="bg-gray-400 text-white px-3 md:px-4 py-1 rounded-full text-xs font-bold">
                PREVIOUS EDITION
              </span>
            </div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center text-secondary mb-2 md:mb-3">
              MSME Hackathon 4.0
            </h2>
          </div>

          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
            The MSME Idea Hackathon 4.0 is a premier national-level innovation initiative by the Ministry of Micro, Small & Medium Enterprises (MSME), Government of India, under its MSME Innovative Scheme. Designed to empower India's youth, the hackathon solicits cutting-edge ideas from individuals aged 18–35 to solve real-world challenges across diverse sectors—fueling the vision of a "Viksit Bharat @2047".
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-4">
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200 shadow-md">
              <h3 className="text-base md:text-lg font-bold text-secondary mb-2 md:mb-3">
                Selection & Support Process
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 text-xs md:text-sm">
                <li>
                  <strong>Host Institute Evaluation:</strong> Each HI assembles expert panels to shortlist promising ideas.
                </li>
                <li>
                  <strong>Ministry Screening:</strong> Shortlisted ideas undergo further evaluation by the Ministry of MSME.
                </li>
                <li>
                  <strong>Funding & Incubation:</strong> Selected ideas receive up to ₹15 lakhs for development support.
                </li>
              </ol>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-secondary mb-3 md:mb-4">
                Impact & Achievements
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs md:text-sm">
                <li>
                  <strong>Massive Reach:</strong> 29,000+ submissions, 400 ideas awarded funding
                </li>
                <li>
                  <strong>National Recognition:</strong> Results announced by Hon'ble President of India
                </li>
                <li>
                  <strong>ICEM Success:</strong> Three innovative proposals secured funding
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-secondary mb-3 md:mb-4">
                ICEM Funded Projects
              </h3>
              <div className="space-y-2 md:space-y-2">
                <div className="border-l-4 border-secondary pl-2 md:pl-3">
                  <h4 className="font-bold text-secondary text-xs md:text-sm">
                    Utilization of Images for Monitoring Construction Progress
                  </h4>
                  <p className="text-xs text-gray-600">
                    Gajendra Thakur - AI&DS Branch
                  </p>
                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    ₹13.5 Lakhs
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-2 md:pl-3">
                  <h4 className="font-bold text-secondary text-xs md:text-sm">
                    Emotion Detector
                  </h4>
                  <p className="text-xs text-gray-600">
                    Sumit Kumbhar - Alard College of Pharmacy
                  </p>
                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    ₹13.5 Lakhs
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-2 md:pl-3">
                  <h4 className="font-bold text-secondary text-xs md:text-sm">
                    Hydrobot
                  </h4>
                  <p className="text-xs text-gray-600">
                    Shon Rakesh Gaikwad - Trinity College of Engineering & Research
                  </p>
                  <p className="text-secondary font-semibold text-xs md:text-sm">
                    ₹14 Lakhs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonTimeline;
