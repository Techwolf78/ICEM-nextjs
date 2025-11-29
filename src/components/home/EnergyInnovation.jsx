"use client";

import React from "react";
import Image from "next/image";

const DiscoverSection = () => {
  const cards = [
    {
      title: "Get Industry-ready",
      description:
        "We ensure every graduate is industry-ready through cutting-edge curriculum, innovation labs, and strong industry collaborations that keep students aligned with the latest technologies and trends.",
      image: "/Home/industry.webp",
    },
    {
      title: "Research from Day One",
      description:
        "At Indira College, research is a way of life, supported by state-of-the-art facilities, experienced faculty, and collaborations that empower students to solve real-world challenges.",
      image: "/Home/Researchfromday1.webp",
    },
    {
      title: "Corporate Partnerships & Recruitment",
      description:
        "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from recruitment drives, on-campus placements, and access to employers seeking ICEM talent.",
      image: "/Home/CorporateRelations.webp",
    },
  ];

  return (
    <section className="relative bg-[#003366] py-10 sm:py-16 px-6 lg:px-16 overflow-visible">
      {/* 🔹 Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003366] via-[#004080] to-[#002b55] opacity-90"></div>

      {/* 🔹 Soft glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full"></div>

      {/* 🔹 Section Content */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-snug">
          At Indira College of Engineering & Management, you will discover an
        </h2>
        <h2 className="text-2xl lg:text-4xl font-extrabold mb-14 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-snug pb-2">
          Energy that runs through{" "}
          <span className="text-gray-100">Everything</span> and{" "}
          <span className="text-gray-100">Everyone.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {cards.map((card, index) => (
            <div key={index} className="relative group fade-up">
              {/* ❌ Removed Glow Offset */}
              {/* (This div is now deleted) */}

              {/* Main Card */}
              <div
                className="
                  relative z-10 p-5 rounded-xl 
                  bg-white/90 backdrop-blur-xl 
                  border border-white/15 
                  shadow-[0_8px_35px_rgba(0,0,0,0.45)]
                  
                  transition-all duration-300
                  group-hover:-translate-y-2 group-hover:-translate-x-2 
                  group-hover:shadow-xl
                  
                  flex flex-col
                  h-[500px]
                "
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={260}
                  className="
                    object-cover w-full h-56
                    rounded-lg mb-4
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />

                <h3 className="text-gray-800 font-semibold text-lg mb-2 text-left">
                  {card.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed text-justify flex-grow">
                  {card.description}
                </p>

                <button
                  className="
                    flex items-center gap-2 
                    text-gray-700 
                    text-sm font-medium 
                    hover:text-secondary 
                    transition mt-3
                  "
                >
                  Know more ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
