"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const CampusBeat = () => {
  const [paused, setPaused] = useState(false);

  const marqueeImages = [
    "/marquee/Marquee1.webp",
    "/marquee/Marquee2.webp",
    "/marquee/Marquee3.webp",
    "/marquee/Marquee4.webp",
    "/marquee/Marquee5.webp",
    "/marquee/Marquee6.webp",
  ];

  // Quadruple the list for seamless looping on wide screens
  const seamlessList = [
    ...marqueeImages,
    ...marqueeImages,
    ...marqueeImages,
    ...marqueeImages,
  ];

  useEffect(() => {
    const handleVisibility = () => {
      setPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div className="bg-white py-10 sm:py-16 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary mb-3 sm:mb-4 text-center sm:text-left">
          The Campus Beat
        </h2>
        <p className="text-gray-600 text-sm sm:text-lg max-w-5xl leading-relaxed mb-8 sm:mb-12 text-center sm:text-left">
          From celebrity talks to Lit fests and interactions with industry
          icons...
        </p>
      </div>

      {/* MARQUEE CONTAINER */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Height Control: 
           Since your images are wide (2.5:1), we need a decent height 
           so they don't look like thin strips.
        */}
        <div className="relative h-[25vh] sm:h-[40vh] md:h-[55vh] w-full">
          <div
            className={`flex h-full w-max animate-smoothScroll ${
              paused ? "paused" : ""
            }`}
            style={{
              willChange: "transform",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {seamlessList.map((src, i) => (
              <div
                key={i}
                // flex-shrink-0 PREVENTS SQUISHING
                className="relative h-full flex-shrink-0 border-r-4 border-white"
                // EXACT ASPECT RATIO (Width / Height)
                // This forces the width to calculate correctly based on the height
                style={{ aspectRatio: "5000/1973" }}
              >
                <Image
                  src={src}
                  alt={`Campus Beat ${i + 1}`}
                  fill
                  // QUALITY SETTINGS
                  quality={100} // Maximum JPEG quality
                  priority={i < 4} // Load first few instantly
                  // Use 'contain' if you want to see the WHOLE image without cropping
                  // Use 'cover' if you want it to fill the height perfectly (recommended)
                  className="object-cover"
                  // Since image is 5000px, we give the browser hints
                  sizes="(max-height: 500px) 1200px, 2000px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes smoothScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-smoothScroll {
          /* Adjusted speed for wider images */
          animation: smoothScroll 120s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
        @media (max-width: 640px) {
          .animate-smoothScroll {
            animation-duration: 60s; /* Faster on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default CampusBeat;
