"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const LiteYouTubeEmbed = dynamic(() => import("react-lite-youtube-embed"), {
  ssr: false,
});

// Videos Array
const videos = [
  {
    title:
      "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
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
    title:
      "Life at Indira University, Pune | Explore Vibrant Campus Life | Cutting Edge Facilities",
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/maxresdefault.jpg",
    url: "gEXvD4OVyXg",
  },
];

export default function CollegeUnplugged() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hasAnimated = useRef(false);

  /** Lazy GSAP Animation */
  useEffect(() => {
    if (hasAnimated.current) return;

    const section = document.querySelector("#unplugged-section");

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = true;
          const gsap = (await import("gsap")).default;
          const ScrollTrigger = (await import("gsap/ScrollTrigger"))
            .ScrollTrigger;

          gsap.registerPlugin(ScrollTrigger);

          gsap.to(".fade-up", {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: "power2.out",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }, []);

  return (
    <div
      id="unplugged-section"
      className="bg-white py-12 px-4 opacity-0 fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-10 fade-up opacity-0 translate-y-4">
          Indira College Unplugged
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 fade-up opacity-0 translate-y-4">
          {/* LEFT LIST */}
          <VideoList
            videos={videos}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          {/* RIGHT PLAYER */}
          <div className="lg:col-span-7 space-y-4 fade-up opacity-0 translate-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-xl min-h-[260px]">
              <LiteYouTubeEmbed
                id={videos[selectedIndex].url}
                title={videos[selectedIndex].title}
                poster="maxresdefault"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {videos[selectedIndex].title}
            </h3>
            <p className="text-sm text-gray-600">
              Watch the full video to explore campus life, events and
              facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Memoized video list (prevents useless re-renders) */
const VideoList = memo(({ videos, selectedIndex, setSelectedIndex }) => (
  <div className="lg:col-span-5 space-y-4">
    {videos.map((v, i) => (
      <button
        key={i}
        onClick={() => setSelectedIndex(i)}
        className={`flex w-full items-center gap-4 p-3 rounded-lg border transition-all duration-300
        ${
          selectedIndex === i
            ? "bg-white shadow-md border-blue-200"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="relative w-28 h-16 rounded-md overflow-hidden shrink-0">
          <Image
            src={v.thumbnail}
            alt={v.title}
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-left">
          <p className="text-sm font-medium text-gray-800 line-clamp-2">
            {v.title}
          </p>
        </div>

        {selectedIndex === i && (
          <span className="text-blue-600 text-xs font-semibold whitespace-nowrap">
            Playing
          </span>
        )}
      </button>
    ))}
  </div>
));
