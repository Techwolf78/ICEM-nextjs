"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function BannerSlider() {
  // ✅ Static local images
  const desktopImages = [
    "/Facilities/FacilitiesSports.jpg",
    "/Facilities/FacilitiesSports.jpg",
    "/Facilities/FacilitiesSports.jpg",
  ];

  const mobileImages = [
    "/Facilities/FacilitiesSports.jpg",
    "/Facilities/FacilitiesSports.jpg",
    "/Facilities/FacilitiesSports.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // ✅ Auto-slide (5s per slide)
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const totalSlides = desktopImages.length;
    if (currentIndex === totalSlides - 1) {
      setIsTransitioning(true);
      setCurrentIndex(totalSlides);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full  overflow-hidden shadow-xl">
      {/* ✅ Desktop Slider */}
      <div className="hidden md:block w-full">
        <div
          ref={sliderRef}
          className={`flex w-full ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...desktopImages, desktopImages[0]].map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-full ">
              <Image
                src={img}
                alt={`Desktop Slide ${i + 1}`}
                width={1920}
                height={1080}
                quality={100}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Slider */}
      <div className="block md:hidden w-full">
        <div
          ref={sliderRef}
          className={`flex w-full ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...mobileImages, mobileImages[0]].map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-full">
              <Image
                src={img}
                alt={`Mobile Slide ${i + 1}`}
                width={1080}
                height={720}
                quality={100}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Overlay Gradient & Text */}

      {/* ✅ Dot Indicators */}
      <div className="absolute bottom-4 right-6 flex gap-2 items-center">
        {desktopImages.map((_, i) => (
          <div
            key={i}
            className={`relative h-2 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
              currentIndex % desktopImages.length === i
                ? "w-8 bg-gray-300"
                : "w-2 bg-gray-500/60"
            }`}
            onClick={() => handleDotClick(i)}
          >
            {currentIndex % desktopImages.length === i && (
              <span className="absolute top-0 left-0 h-full w-0 bg-secondary animate-progressFill"></span>
            )}
          </div>
        ))}
      </div>

  

      {/* ✅ CSS Animations */}
      <style jsx>{`
        @keyframes progressFill {
          from {
            width: 0%;
            opacity: 0.8;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        .animate-progressFill {
          animation: progressFill 4.5s linear forwards;
        }
      `}</style>
    </div>
  );
}
