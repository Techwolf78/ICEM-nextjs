"use client";

import React, { useState, memo } from "react";
import Image from "next/image";

// Static Data
const videos = [
  {
    title:
      "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
    // Use 'maxresdefault' for the main player (high quality)
    thumbnail: "https://img.youtube.com/vi/VFNW2xjcLS4/maxresdefault.jpg",
    url: "VFNW2xjcLS4",
  },
  {
    title: "ICEM (Indira College of Engineering and Management) Award Function",
    thumbnail: "https://img.youtube.com/vi/KrkLiGVGeT0/maxresdefault.jpg",
    url: "KrkLiGVGeT0",
  },
  {
    title: "Sunidhi Chauhan at ICEM",
    thumbnail: "https://img.youtube.com/vi/UxjeDzFtpMY/maxresdefault.jpg",
    url: "UxjeDzFtpMY",
  },
  {
    title: "Life at Indira University, Pune | Explore Vibrant Campus Life",
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/maxresdefault.jpg",
    url: "gEXvD4OVyXg",
  },
];

export default function CollegeUnplugged() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle switching videos
  const handleVideoSelect = (index) => {
    setSelectedIndex(index);
    setIsPlaying(false); // Reset to thumbnail view when switching
  };

  return (
    <div className="bg-white py-4 md:py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-secondary mb-6 md:mb-10 text-center md:text-left">
          Indira College Unplugged
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* LEFT LIST */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <VideoList
              videos={videos}
              selectedIndex={selectedIndex}
              onSelect={handleVideoSelect}
            />
          </div>

          {/* RIGHT PLAYER FACADE */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-2 md:space-y-4">
            {/* THE FACADE: 
                This container holds the video. 
                It has a fixed aspect ratio (16/9) to prevent layout shifts.
            */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black group">
              {!isPlaying ? (
                /* STATE 1: STATIC IMAGE (Zero JS, Zero CPU) */
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full block cursor-pointer"
                  aria-label="Play Video"
                >
                  <Image
                    src={videos[selectedIndex].thumbnail}
                    alt={videos[selectedIndex].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    priority // Load the main video image immediately
                  />

                  {/* Custom Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-secondary ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                /* STATE 2: ACTUAL IFRAME (Loads only on click) */
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[selectedIndex].url}?autoplay=1&rel=0&vq=hd1080&modestbranding=1`}
                  title={videos[selectedIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            <div className="space-y-1">
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 leading-snug">
                {videos[selectedIndex].title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">
                Watch the full video to explore campus life, events and
                facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* MEMOIZED LIST */
const VideoList = memo(({ videos, selectedIndex, onSelect }) => (
  <div className="space-y-2 md:space-y-3">
    {videos.map((v, i) => {
      const isSelected = selectedIndex === i;

      // Use smaller thumbnails for the list to save data
      // mqdefault = 320x180 (Perfect for list)
      const listThumbnail = `https://img.youtube.com/vi/${v.url}/mqdefault.jpg`;

      return (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`
            group flex w-full items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl border text-left transition-all duration-200
            ${
              isSelected
                ? "bg-secondary/5 border-secondary shadow-sm ring-1 ring-secondary"
                : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-300"
            }
          `}
        >
          {/* THUMBNAIL */}
          <div className="relative w-24 md:w-28 lg:w-32 h-14 md:h-16 lg:h-20 rounded-lg overflow-hidden shrink-0 bg-gray-200">
            <Image
              src={listThumbnail}
              alt={v.title}
              fill
              sizes="(max-width: 640px) 30vw, 15vw"
              className={`object-cover transition-transform duration-300 ${
                !isSelected && "group-hover:scale-105"
              }`}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/20 ${
                isSelected ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                <svg
                  className="w-2.5 h-2.5 md:w-3 md:h-3 text-secondary ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1 min-w-0">
            <p
              className={`text-xs md:text-sm font-medium line-clamp-2 ${
                isSelected ? "text-secondary" : "text-gray-700"
              }`}
            >
              {v.title}
            </p>
            {isSelected && (
              <span className="inline-flex items-center mt-1 text-xs font-bold text-secondary animate-pulse">
                ● Playing
              </span>
            )}
          </div>
        </button>
      );
    })}
  </div>
));

VideoList.displayName = "VideoList";
