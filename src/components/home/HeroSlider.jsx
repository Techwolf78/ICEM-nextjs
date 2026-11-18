"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSlider = () => {
  // 👉 Load banners directly from /public/banners
  const desktopSlides = [
    {
      src: "/banners/techfest_iitb_desk.webp",
      link: "https://techfest.org/competitions",
      alt: "IIT Bombay Techfest - Pune Zonals 2026-27",
    },
    {
      src: "/banners/si_icem_desk.webp",
      alt: "ICEM Banner",
    },
    {
      src: "/assets/images/banner/icem_banner_team_gemini.avif",
      alt: "ICEM Team Gemini Banner",
    },
    {
      src: "/assets/images/banner/cet_banner.avif",
      alt: "CET Banner",
    },
    {
      src: "/assets/images/banner/finalplacedstd.avif",
      alt: "Final Placed Students",
    },
    {
      src: "/placement/PlacementBanner.avif",
      alt: "Placement Banner",
    },
    {
      src: "/banners/ICEM - Website Banner 2 5.avif",
      alt: "ICEM Website Banner",
    },
    // "/banners/ICEMBANNERCLASS.webp",
    {
      src: "/banners/ICEMBANNERMECH.webp",
      alt: "ICEM Mechanical Engineering",
    },
    {
      src: "/banners/ICEMBANNERCOMP.webp",
      alt: "ICEM Computer Engineering",
    },
  ];

  const mobileSlides = [
    {
      src: "/banners/techfest_iitb_mob.webp",
      link: "https://techfest.org/competitions",
      alt: "IIT Bombay Techfest - Pune Zonals 2026-27",
    },
    {
      src: "/Home/si_icem_mob.webp",
      alt: "ICEM Mobile Banner",
    },
    {
      src: "/Home/homemobile.avif",
      alt: "ICEM Home Mobile Banner",
    },
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
    const totalSlides = desktopSlides.length;

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
    const totalMobileSlides = mobileSlides.length;

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
            <a
              href="https://techfest.org/competitions"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-8 hover:underline text-[#003c84] font-bold"
            >
              🚀 IIT Bombay Techfest Pune Zonals 2026–27 — Register Now
            </a>
            <Link href="/admission-2026" className="mr-8 hover:underline text-[#003c84] font-bold">
              🔥 ACAP & Institute Level (IL) Merit Lists (Version 1) Released for B.Tech, MBA & MCA (A.Y. 2026-27)
            </Link>
            <a href="https://sdetm.indiraicem.ac.in/" target="_blank" rel="noopener noreferrer" className="mr-8 hover:underline text-red-600 font-bold">
              INTERNATIONAL CONFERENCE (ICSDETM2026)
            </a>
            <span className="mr-8">Public Advisory Notice</span>
            <span className="mr-8">Placement Record 2025 Announced</span>

            {/* Duplicate for seamless loop */}
            <a
              href="https://techfest.org/competitions"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-8 hover:underline text-[#003c84] font-bold"
            >
              🚀 IIT Bombay Techfest Pune Zonals 2026–27 — Register Now
            </a>
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
      <div className="hidden md:block relative w-full aspect-[1600/578] overflow-hidden">
        <div
          className={`flex h-full ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...desktopSlides, desktopSlides[0]].map((slide, i) => {
            const imageEl = (
              <Image
                key={`img-${i}`}
                src={slide.src}
                alt={slide.alt || "banner"}
                className="w-full h-full object-cover object-center"
                width={1600}
                height={578}
                quality={100}
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            );

            return slide.link ? (
              <a
                key={i}
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex-shrink-0 block cursor-pointer relative"
                title={slide.alt || "banner"}
              >
                {imageEl}
              </a>
            ) : (
              <div key={i} className="w-full h-full flex-shrink-0 relative">
                {imageEl}
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 flex gap-2 z-30">
          {desktopSlides.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`relative h-2 rounded-full cursor-pointer overflow-hidden transition-all ${
                currentIndex % desktopSlides.length === i
                  ? "w-8 bg-gray-300"
                  : "w-2 bg-gray-500/60 hover:bg-gray-400"
              }`}
            >
              {currentIndex % desktopSlides.length === i && (
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
          {[...mobileSlides, mobileSlides[0]].map((slide, i) => {
            const imageEl = (
              <Image
                key={`mob-img-${i}`}
                src={slide.src}
                alt={slide.alt || "mobile banner"}
                className="w-full h-auto object-contain"
                width={1080}
                height={1350}
                quality={100}
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            );

            return slide.link ? (
              <a
                key={i}
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex-shrink-0 block cursor-pointer"
                title={slide.alt || "mobile banner"}
              >
                {imageEl}
              </a>
            ) : (
              <div key={i} className="w-full flex-shrink-0">
                {imageEl}
              </div>
            );
          })}
        </div>

        {/* Mobile Dots */}
        <div className="absolute bottom-3 right-4 flex gap-1.5 z-10">
          {mobileSlides.map((_, i) => (
            <div
              key={i}
              onClick={() => handleMobileDotClick(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                mobileIndex % mobileSlides.length === i
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
