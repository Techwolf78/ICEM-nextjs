"use client";

import React from "react";
import Image from "next/image";

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

const DiscoverSection = () => {
  return (
    <section className="relative bg-[#003366] py-12 sm:py-20 px-6 lg:px-8 overflow-hidden">
      {/* BACKGROUND LAYERS (Optimized) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003366] via-[#004080] to-[#002b55] opacity-90 pointer-events-none"></div>

      {/* 2. PERFORMANCE: Fixed Blur 
         - Using translate-x/y center instead of expensive calculation
         - 'opacity-40' reduces visual noise
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-snug">
            At Indira College of Engineering & Management, you will discover an
          </h2>
          <h2 className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight pb-2">
            Energy that runs through{" "}
            <span className="text-white">Everything</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group relative flex flex-col h-full
                p-5 rounded-2xl
                /* 3. PERFORMANCE: Removed backdrop-blur */
                /* Used high opacity white for the 'frosted' look without the GPU cost */
                bg-white border border-white/10
                shadow-2xl shadow-black/20
                
                /* 4. PERFORMANCE: Hardware Acceleration */
                transition-transform duration-300 ease-out
                hover:-translate-y-2 will-change-transform
              "
            >
              {/* IMAGE WRAPPER */}
              <div className="relative w-full h-56 mb-6 overflow-hidden rounded-xl bg-gray-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  // 5. PERFORMANCE: Precise Sizes
                  // 100vw on mobile, 33vw on desktop
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                    object-cover transition-transform duration-500 
                    group-hover:scale-105 will-change-transform
                  "
                />
              </div>

              {/* CONTENT */}
              <h3 className="text-gray-900 font-bold text-xl mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-justify flex-grow">
                {card.description}
              </p>

              <button className="flex items-center gap-2 text-secondary font-bold text-sm mt-6 group-hover:gap-3 transition-all">
                Know more
                <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
