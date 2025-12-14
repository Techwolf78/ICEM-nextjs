"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const CampusBeat = () => {
  const [paused, setPaused] = useState(false);

  const marqueeImages = [
    "/marquee/Marquee1.avif",
    "/marquee/Marquee2.avif",
    "/marquee/Marquee3.avif",
    "/marquee/Marquee4.webp",
    "/marquee/Marquee5.webp",
    "/marquee/Marquee6.webp",
  ];

  // --- Detect tab visibility ---
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setPaused(true);
      } else {
        setPaused(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div className="bg-white  sm:pt-16 overflow-hidden hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl font-extrabold text-secondary mb-3 sm:mb-4 text-center sm:text-left">
          The Campus Beat
        </h2>

        <p className="text-gray-700 text-sm sm:text-lg max-w-5xl leading-relaxed mb-6 sm:mb-10 text-center sm:text-left">
          From celebrity talks to Lit fests and interactions with industry
          icons...
        </p>
      </div>

      <div className="hidden sm:block relative w-full overflow-hidden h-[30vh] sm:h-[50vh] md:h-[65vh]">
        <div
          className={`flex w-max h-full animate-smoothScroll gap-0.5 select-none ${
            paused ? "paused" : ""
          }`}
        >
          {marqueeImages.concat(marqueeImages).map((src, i) => (
            <div
              key={i}
              className="relative h-full"
              style={{ aspectRatio: "2.77" }}
            >
              <Image
                src={src}
                alt={`Campus Beat ${i + 1}`}
                fill
                sizes="100vw"
                quality={80}
                className="object-cover"
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

        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default CampusBeat;
