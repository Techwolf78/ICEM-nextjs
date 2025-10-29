"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "https://cms-backend-icem.onrender.com/api/banners/type/homepage";

const HeroSlider = () => {
  const [desktopImages, setDesktopImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(API_URL);
        if (res.data && res.data.length > 0) {
          const desktopUrls = res.data.map((b) => b.desktopImageUrl).filter(Boolean);
          const mobileUrls = res.data.map((b) => b.mobileImageUrl).filter(Boolean);
          setDesktopImages(desktopUrls);
          setMobileImages(mobileUrls);
        } else {
          toast("No homepage banners found — using fallback images");
          setDesktopImages([
            "/banners/ICEMBANNER27.jpg",
            "/banners/ICEMBANNER6.jpg",
            "/banners/ICEMBANNERCOMP.jpg",
          ]);
          setMobileImages([
            "/banners/mobile1.jpg",
            "/banners/mobile2.jpg",
            "/banners/mobile3.jpg",
          ]);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
        toast.error("Failed to load banners from server");
        setDesktopImages([
          "/banners/ICEMBANNER27.jpg",
          "/banners/ICEMBANNER6.jpg",
          "/banners/ICEMBANNERCOMP.jpg",
        ]);
        setMobileImages([
          "/banners/mobile1.jpg",
          "/banners/mobile2.jpg",
          "/banners/mobile3.jpg",
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (!desktopImages.length && !mobileImages.length) return;
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex, desktopImages, mobileImages]);

  const handleNext = () => {
    const totalSlides = desktopImages.length || mobileImages.length;
    if (totalSlides === 0) return;

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
    <div className="relative w-full overflow-hidden">
      {/* ✅ SPOTLIGHT Ribbon + Seamless Marquee (TOP) */}
      <div className="w-full bg-white border-b border-gray-200 flex items-center overflow-hidden relative">
  {/* Gradient Ribbon with Right Side Cut (< shape) */}
  <div className="relative flex items-center justify-center font-semibold text-sm px-8 py-2 clip-ribbon-left z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 text-white drop-shadow-[0_0_10px_rgba(0,200,255,0.5)]">
    SPOTLIGHT
  </div>

  {/* Seamless Marquee Text */}
  <div className="flex-1 overflow-hidden whitespace-nowrap relative bg-white">
    <div className="flex animate-seamlessMarquee font-semibold text-sm py-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_10px_rgba(0,200,255,0.5)]">
      <span className="mr-12">🔹 Public Advisory Notice</span>
      <span className="mr-12">🔹 All 4 PG Programs Computer Engineering</span>
      <span className="mr-12">🔹 Admission Open for Academic Year 2025-26</span>
      <span className="mr-12">🔹 Placement Record 2025 Announced</span>

      {/* Duplicate for seamless looping */}
      <span className="mr-12">🔹 Public Advisory Notice</span>
      <span className="mr-12">🔹 All 4 PG Programs Computer Engineering</span>
      <span className="mr-12">🔹 Admission Open for Academic Year 2025-26</span>
      <span className="mr-12">🔹 Placement Record 2025 Announced</span>
    </div>
  </div>

  {/* Right Fade Gradient */}
  <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary to-transparent pointer-events-none"></div>
</div>




      {/* ✅ Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
          <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* ✅ Desktop Slider */}
      <div className={`hidden md:block ${loading ? "opacity-0" : "opacity-100"}`}>
        {desktopImages.length > 0 ? (
          <>
            <div
              ref={sliderRef}
              className={`flex ${
                isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {[...desktopImages, desktopImages[0]].map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Desktop Slide ${i + 1}`}
                  className="w-full object-cover flex-shrink-0"
                  height={700}
                  width={1700}
                  quality={100}
                  unoptimized={true}
                  priority
                  optimization={false}
                />
              ))}
            </div>

            {/* ✅ Dots */}
            <div className="absolute bottom-6 right-6 flex gap-2 items-center">
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
                    <span className="absolute top-0 left-0 h-full w-0 bg-primary animate-progressFill"></span>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          !loading && (
            <div className="flex items-center justify-center h-[400px] text-gray-400">
              No desktop banners found
            </div>
          )
        )}
      </div>

      {/* ✅ Mobile Slider */}
      <div className={`block md:hidden ${loading ? "opacity-0" : "opacity-100"}`}>
        {mobileImages.length > 0 ? (
          <div
            ref={sliderRef}
            className={`flex ${
              isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {[...mobileImages, mobileImages[0]].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Mobile Slide ${i + 1}`}
                className="w-full object-cover flex-shrink-0"
                height={400}
                width={700}
                quality={100}
                unoptimized={true}
              />
            ))}
          </div>
        ) : (
          !loading && (
            <div className="flex items-center justify-center h-[300px] text-gray-400">
              No mobile banners found
            </div>
          )
        )}
      </div>

      {/* ✅ Custom Styles */}
      <style jsx>{`
        /* Dot progress animation */
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
          animation: progressFill 3s linear forwards;
        }

        /* Seamless Marquee Loop */
        @keyframes seamlessMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-seamlessMarquee {
          display: inline-flex;
          white-space: nowrap;
          animation: seamlessMarquee 25s linear infinite;
          will-change: transform;
        }

        /* Blue Ribbon (fixed white edge fix) */
        .clip-ribbon-left {
          position: relative;
          background: linear-gradient(90deg, #00b2e5 0%, #0099cc 100%);
          clip-path: polygon(0 0, 100% 0, 96% 50%, 100% 100%, 0 100%);
          isolation: isolate;
        }

        .clip-ribbon-left::after {
          content: "";
          position: absolute;
          top: 0;
          right: -3px;
          width: 6px;
          height: 100%;
          background: linear-gradient(90deg, #00b2e5 0%, #0099cc 100%);
          z-index: 11;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
