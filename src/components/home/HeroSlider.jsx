"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSlider = () => {
  // 👉 Load banners directly from /public/banners
  const desktopImages = [
    "/banners/si_icem_desk.webp",
    "/assets/images/banner/icem_banner_team_gemini.avif",
    "/assets/images/banner/cet_banner.avif",
    "/assets/images/banner/finalplacedstd.avif",
    "/placement/PlacementBanner.avif",
    "/banners/ICEM - Website Banner 2 5.avif",
    // "/banners/ICEMBANNERCLASS.webp",
    "/banners/ICEMBANNERMECH.webp",
    "/banners/ICEMBANNERCOMP.webp",
  ];

  const mobileImages = [
    "/Home/si_icem_mob.webp",
    "/Home/homemobile.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobileTransitioning, setIsMobileTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const mobileInterval = setInterval(() => handleMobileNext(), 5000);
    return () => clearInterval(mobileInterval);
  }, [mobileIndex]);

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

  const handleMobileNext = () => {
    const totalMobileSlides = mobileImages.length;

    if (mobileIndex === totalMobileSlides - 1) {
      setIsMobileTransitioning(true);
      setMobileIndex(totalMobileSlides);

      setTimeout(() => {
        setIsMobileTransitioning(false);
        setMobileIndex(0);
      }, 700);
    } else {
      setIsMobileTransitioning(true);
      setMobileIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleMobileDotClick = (index) => {
    setIsMobileTransitioning(true);
    setMobileIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* ---------------- TOP SPOTLIGHT SECTION ---------------- */}
      <div className="w-full h-[3vh] sm:h-[4vh] bg-white border-b border-gray-200 flex items-center overflow-hidden relative ">
        <div className="relative flex items-center justify-center font-semibold text-xs sm:text-sm px-2 sm:px-8 py-2 clip-ribbon-left z-10 bg-secondary text-white">
          SPOTLIGHT
        </div>

        <div className="flex-1 overflow-hidden whitespace-nowrap bg-white">
          <div className="flex animate-seamlessMarquee font-semibold text-xs sm:text-sm py-1 sm:py-2 text-secondary">
            <Link href="/admission-2026" className="mr-8 hover:underline text-[#003c84] font-bold">
              🔥 ACAP & Institute Level (IL) Merit Lists (Version 1) Released for B.Tech, MBA & MCA (A.Y. 2026-27)
            </Link>
            <a href="https://sdetm.indiraicem.ac.in/" target="_blank" rel="noopener noreferrer" className="mr-8 hover:underline text-red-600 font-bold">
              INTERNATIONAL CONFERENCE (ICSDETM2026)
            </a>
            <span className="mr-8">Public Advisory Notice</span>
            <span className="mr-8">Placement Record 2025 Announced</span>

            {/* Duplicate for seamless loop */}
            <Link href="/admission-2026" className="mr-8 hover:underline text-[#003c84] font-bold">
              🔥 ACAP & Institute Level (IL) Merit Lists (Version 1) Released for B.Tech, MBA & MCA (A.Y. 2026-27)
            </Link>
            <a href="https://sdetm.indiraicem.ac.in/" target="_blank" rel="noopener noreferrer" className="mr-8 hover:underline text-red-600 font-bold">
              INTERNATIONAL CONFERENCE (ICSDETM2026)
            </a>
            <span className="mr-8">Public Advisory Notice</span>
            <span className="mr-8">Placement Record 2025 Announced</span>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary to-transparent"></div>
      </div>

      {/* ---------------- DESKTOP SLIDER ---------------- */}
      <div className="hidden md:block">
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...desktopImages, desktopImages[0]].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="banner"
              className="w-full h-auto object-cover flex-shrink-0"
              width={1600}
              height={700}
              quality={100}
              priority
              fetchPriority="high"
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          {desktopImages.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`relative h-2 rounded-full cursor-pointer overflow-hidden transition-all ${
                currentIndex % desktopImages.length === i
                  ? "w-8 bg-gray-300"
                  : "w-2 bg-gray-500/60"
              }`}
            >
              {currentIndex % desktopImages.length === i && (
                <span className="absolute top-0 left-0 h-full w-0 bg-secondary animate-progressFill"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- MOBILE SLIDER ---------------- */}
      <div className="md:hidden relative overflow-hidden">
        <div
          className={`flex ${
            isMobileTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
        >
          {[...mobileImages, mobileImages[0]].map((img, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <Image
                src={img}
                alt="mobile banner"
                className="w-full h-auto object-contain"
                width={1080}
                height={1350}
                quality={100}
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>

        {/* Mobile Dots */}
        <div className="absolute bottom-3 right-4 flex gap-1.5 z-10">
          {mobileImages.map((_, i) => (
            <div
              key={i}
              onClick={() => handleMobileDotClick(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                mobileIndex % mobileImages.length === i
                  ? "w-6 bg-secondary"
                  : "w-2 bg-gray-400/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ---------------- CSS ANIMATIONS ---------------- */}
      <style jsx>{`
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progressFill {
          animation: progressFill 3s linear forwards;
        }

        @keyframes seamlessMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-seamlessMarquee {
          animation: seamlessMarquee 10s linear infinite;
        }

        .clip-ribbon-left {
          clip-path: polygon(0 0, 100% 0, 96% 50%, 100% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
