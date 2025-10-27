"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "https://cms-backend-icem.onrender.com/api/banners/type/homepage"; // ✅ Homepage banners only

const HeroSlider = () => {
  const [desktopImages, setDesktopImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  // ✅ Fetch homepage banners
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
        setLoading(false); // ✅ Hide loader after fetch
      }
    };

    fetchImages();
  }, []);

  // ✅ Auto slide
  useEffect(() => {
    if (!desktopImages.length && !mobileImages.length) return;
    const interval = setInterval(() => handleNext(), 4000);
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
      {/* ✅ Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
          <div className="w-12 h-12 border-4 border-cyan-300 border-t-transparent rounded-full animate-spin"></div>
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
                />
              ))}
            </div>

            {/* ✅ Dots only on desktop */}
            <div className="absolute bottom-5 right-5 flex gap-2 items-center">
              {desktopImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`h-1.5 w-6 rounded-full transition-all duration-300 focus:outline-none ${
                    currentIndex % desktopImages.length === i
                      ? "bg-cyan-400 w-8"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                ></button>
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

      {/* ✅ Mobile Slider (no dots) */}
      <div className={`block md:hidden ${loading ? "opacity-0" : "opacity-100"}`}>
        {mobileImages.length > 0 ? (
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
          </>
        ) : (
          !loading && (
            <div className="flex items-center justify-center h-[300px] text-gray-400">
              No mobile banners found
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HeroSlider;
