"use client";

import React from "react";
import Image from "next/image";

const EnergyInnovation = () => {
  const cards = [
    {
      title: "Get Industry-ready",
      description:
        "We ensure every graduate is industry-ready through cutting-edge curriculum, innovation labs, and strong industry collaborations that keep students aligned with the latest technologies and trends.",
      img: "/ir.JPG",
    },
    {
      title: "Research from Day One",
      description:
        "At Indira College, research is a way of life, supported by state-of-the-art facilities, experienced faculty, and collaborations that empower students to solve real-world challenges.",
      img: "/Researchfromday1.jpg",
    },
    {
      title: "Corporate Partnerships & Recruitment",
      description:
        "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from exclusive recruitment drives, on-campus placements, and direct access to sought-after employers actively seeking ICEM talent.",
      img: "/coorporateR.JPG",
    },
  ];

  return (
    <div className="bg-primary text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* ✅ Heading */}
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-14 leading-snug">
          At Indira College of Engineering & Management, you will discover an{" "}
          <span className="block sm:inline">
            Energy that runs through Everything and Everyone.
          </span>
        </h2>

        {/* ✅ Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-left">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group transition-all duration-500 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-white/20 hover:border-white/30 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative w-full h-44 sm:h-52 md:h-56 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-between flex-grow px-5 py-6 sm:px-6">
                <div>
                  <h3 className="text-base sm:text-lg flex justify-center  font-semibold mb-2 ">
                    {card.title}
                  </h3>
                  <p className="text-white/85 text-sm sm:text-base leading-relaxed text-justify mb-6">
                    {card.description}
                  </p>
                </div>

                {/* ✅ Centered "Know more" Button */}
                <div className="flex justify-center">
                  <button className="text-white font-semibold  hover:bg-white/80 hover:text-[#278da4] transition-all duration-300 rounded-full px-5 py-2 text-sm sm:text-base ">
                    Know more 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnergyInnovation;
