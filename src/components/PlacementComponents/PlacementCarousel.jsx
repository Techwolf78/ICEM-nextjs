"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "https://cms-backend-icem.onrender.com/api/banners/type/placement"; // ✅ Placement banners only

const PlacementCarousel = () => {
  const [desktopImages, setDesktopImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  // ✅ Fetch placement banners
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
          toast("No placement banners found — using fallback images");
          setDesktopImages([
            "/banners/placement-banner1.jpg",
            "/banners/placement-banner2.jpg",
          ]);
          setMobileImages([
            "/banners/placement-mobile1.jpg",
            "/banners/placement-mobile2.jpg",
          ]);
        }
      } catch (error) {
        console.error("Error fetching placement banners:", error);
        toast.error("Failed to load placement banners from server");
        setDesktopImages([
          "/banners/placement-banner1.jpg",
          "/banners/placement-banner2.jpg",
        ]);
        setMobileImages([
          "/banners/placement-mobile1.jpg",
          "/banners/placement-mobile2.jpg",
        ]);
      } finally {
        setLoading(false);
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
                  alt={`Placement Desktop Slide ${i + 1}`}
                  className="w-full object-cover flex-shrink-0"
                  height={700}
                  width={1700}
                  quality={100}
                  unoptimized={true}
                  priority
                />
              ))}
            </div>

            {/* ✅ Dots (desktop only) */}
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
              No desktop placement banners found
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
                  alt={`Placement Mobile Slide ${i + 1}`}
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
              No mobile placement banners found
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PlacementCarousel;
