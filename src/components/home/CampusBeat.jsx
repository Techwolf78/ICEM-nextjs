"use client";

import Image from "next/image";
import React from "react";

const CampusBeat = () => {
  const marqueeImages = [
    "/Marquee/Marquee1.jpg",
    "/Marquee/Marquee2.jpg",
    "/Marquee/Marquee3.jpg",
    "/Marquee/Marquee4.jpg",
    "/Marquee/Marquee5.jpg",
    "/Marquee/Marquee6.jpg",
  ];

  return (
    <div className="bg-white py-10 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
          The Campus Beat
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-lg max-w-5xl leading-relaxed mb-6 sm:mb-10 text-center sm:text-left">
          From celebrity talks to Lit Fests and interactions with industry
          icons, our campus pulses with energy, big ideas, and unforgettable
          moments — making student life dynamic, buzzing, inspiring, and full of
          meaningful connections & opportunities.
        </p>
      </div>

      {/* Horizontal Scroll Only on Larger Screens */}
      <div className="hidden sm:block relative w-full overflow-hidden h-[30vh] sm:h-[50vh] md:h-[65vh]">
        {/* 🌀 Smooth Scrolling Container */}
        <div className="flex w-max h-full animate-smoothScroll gap-0.5 select-none">
          {/* First Loop */}
          {marqueeImages.map((src, i) => (
            <div
              key={`first-${i}`}
              className="relative h-full"
              style={{ aspectRatio: "2.77" }}
            >
              <Image
                src={src}
                alt={`Campus Beat ${i + 1}`}
                fill
                className="object-cover"
                quality={100}
                unoptimized
              />
            </div>
          ))}

          {/* Duplicate Loop for Seamless Scroll */}
          {marqueeImages.map((src, i) => (
            <div
              key={`first-${i}`}
              className="relative h-full"
              style={{ aspectRatio: "2.77" }}
            >
              <Image
                src={src}
                alt={`Campus Beat Duplicate ${i + 1}`}
                fill
                className="object-cover"
                quality={100}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-smoothScroll {
          animation: smoothScroll 45s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CampusBeat;
