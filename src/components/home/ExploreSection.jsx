"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const ExploreSection = () => {
  const videoRef = useRef(null);

  // ✅ Ensure video auto-plays after hydration
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            const resumePlay = () => {
              video.play().catch(() => {});
              document.removeEventListener("scroll", resumePlay);
              document.removeEventListener("click", resumePlay);
            };
            document.addEventListener("scroll", resumePlay);
            document.addEventListener("click", resumePlay);
          });
        }
      };

      video.addEventListener("canplaythrough", playVideo, { once: true });
      playVideo();
    }
  }, []);

  // ✅ Updated logos
  const cards = [
    { title: "Savitribai Phule Pune University", img: "/SPPU.webp" },
    { title: "NAAC Accredited", img: "/NAAC.webp" },
    { title: "AICTE Approved", img: "/AICTE.webp" },
  ];

  return (
    <div className="relative bg-gray-50 mt-2 h-auto lg:h-[60vh] px-4 sm:px-6 py-0 overflow-hidden">
      {/* ✅ Desktop Layout */}
      <div className="hidden lg:flex flex-col mx-auto max-w-7xl justify-center w-full h-full ">
        {/* 🔹 Top Section */}
        <div className="w-full h-[30%] flex items-center justify-between px-6">
          {/* Left: Heading */}
          <div className="w-[50%] flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Explore Your Potential with
            </h2>
            <h2 className="text-3xl font-extrabold leading-tight text-secondary">
              INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
            </h2>
          </div>

          {/* Right: Chanakya Animation */}
          <div className="w-[50%] flex items-center justify-center">
            <div className="w-[90%] h-[15vh]  animate-slideMirror pointer-events-none opacity-90">
              <video
                ref={videoRef}
                src="/chanakya.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Section */}
        <div className="w-full h-[50%] flex items-stretch justify-between px-6 ">
          {/* Left: Paragraph */}
          <div className="w-[50%] h-full flex items-center pr-8">
            <p className="text-gray-700 text-[1.12rem] leading-relaxed text-justify">
              Located near Pune, Indira College of Engineering & Management, one
              of the leading NAAC accredited engineering institutions, offers a
              world of learning to help you achieve your goals. Choose from
              industry-led programs, learn from outstanding faculty in
              state-of-the-art facilities, and access limitless placement
              opportunities with top campus recruiters. Join a vibrant community
              of students with ambitions as big as yours.
            </p>
          </div>

          {/* Right: Logos */}
          <div className="w-[50%] h-full flex">
            <div className="grid grid-cols-3 gap-6 w-full place-items-center">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-lg flex flex-col items-center justify-center h-24 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobile / Tablet Layout */}
      <div className="lg:hidden grid grid-cols-1 gap-8 sm:gap-10 items-center relative z-10">
        {/* Floating Chanakya GIF */}
        <div className="hidden sm:block absolute top-2 right-4 sm:right-20 h-[10vh] sm:h-[12vh] w-[60vw] sm:w-[40vw] animate-slideMirror pointer-events-none opacity-90">
          <video
            ref={videoRef}
            src="/chanakya.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Heading */}
        <div className="p-3 sm:p-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug">
            Explore Your Potential with
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 sm:mb-4 leading-snug bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
            Located near Pune, Indira College of Engineering & Management, one
            of the leading NAAC accredited engineering institutions, offers a
            world of learning to help you achieve your goals. Choose from
            industry-led programs, learn from outstanding faculty in
            state-of-the-art facilities, and access limitless placement
            opportunities with top campus recruiters. Join a vibrant community
            of students with ambitions as big as yours.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 place-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg flex flex-col items-center justify-center h-20 sm:h-24 transition-transform duration-200 hover:scale-105"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={140}
                height={80}
                className="object-contain"
              />
              <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1 text-center">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
