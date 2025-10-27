"use client";
import React from "react";
import Image from "next/image";

const ExploreSection = () => {
  const cards = [
    { title: "NAAC", img: null },
    { title: "NIRF", img: null },
    { title: "QS Ranking", img: null },
    { title: "World Ranking", img: null },
  ];

  return (
    <div className="relative bg-gray-50 mt-2   h-auto lg:h-[55vh] px-4 sm:px-6 py-0 overflow-hidden">
      {/* ✅ Desktop Layout */}
      <div className="hidden lg:flex flex-col mx-auto max-w-7xl justify-center  w-full h-full">
        {/* 🔹 Top Section */}
        <div className="w-full h-[20%] flex items-center justify-between  px-6">
          {/* Left: Heading */}
          <div className="w-[50%] flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              Explore Your Potential with
            </h2>
            <h2 className="text-2xl font-bold text-secondary leading-tight">
              INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
            </h2>
          </div>

          {/* Right: Chanakya Animation */}
          <div className="w-[50%] flex items-center justify-center">
            <div className="w-[90%] h-[12vh] max-h-[90px] animate-slideMirror pointer-events-none opacity-90">
              <video
                src="/chanakya.webm"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Section */}
        <div className="w-full h-[50%] flex items-stretch justify-between  px-6">
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
          <div className="w-[50%] h-full flex items-center">
            <div className="grid grid-cols-2 gap-6 w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-lg flex items-center justify-center h-24 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {card.img ? (
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={200}
                      height={80}
                      className="object-contain rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm text-center px-2">
                      [ {card.title} Image Here ]
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobile / Tablet Layout (unchanged) */}
      <div className="lg:hidden grid grid-cols-1 gap-8 sm:gap-10 items-center relative z-10">
        {/* Floating Chanakya GIF */}
        <div className="hidden sm:block absolute top-2 right-4 sm:right-20 h-[10vh] sm:h-[12vh] w-[60vw] sm:w-[40vw] animate-slideMirror pointer-events-none opacity-90">
          <video
            src="/chanakya.webm"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-contain"
          />
        </div>

        {/* Heading */}
        <div className="p-3 sm:p-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug">
            Explore Your Potential with
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary mb-3 sm:mb-4 leading-snug">
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
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg flex items-center justify-center h-24 sm:h-28 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {card.img ? (
                <Image
                  src={card.img}
                  alt={card.title}
                  width={200}
                  height={80}
                  className="object-contain rounded-md"
                />
              ) : (
                <span className="text-gray-400 text-xs sm:text-sm text-center px-2">
                  [ {card.title} Image Here ]
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
