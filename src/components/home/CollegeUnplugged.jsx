"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const videos = [
  {
    title:
      "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
    thumbnail: "https://img.youtube.com/vi/VFNW2xjcLS4/0.jpg",
    url: "https://youtu.be/VFNW2xjcLS4?si=82O2nNba-C76P6Sj",
  },
  {
    title:
      "ICEM (Indira College of Engineering and Management) Award Function",
    thumbnail: "https://img.youtube.com/vi/KrkLiGVGeT0/maxresdefault.jpg",
    url: "https://youtu.be/KrkLiGVGeT0?si=-OHivtfzbudfoUWz",
  },
  {
    title: "Sunidhi Chauhan at ICEM",
    thumbnail: "https://img.youtube.com/vi/UxjeDzFtpMY/maxresdefault.jpg",
    url: "https://youtu.be/UxjeDzFtpMY?si=1PQkCtSjM5gDA0ez",
  },
  {
    title:
      "Life at Indira University, Pune | Explore Vibrant Campus Life | Cutting Edge Facilities",
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/0.jpg",
    url: "https://youtu.be/gEXvD4OVyXg?si=68Sex6D7MOVnPik3",
  },
];

function toEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  const videoId = match ? match[1] : null;

  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd720&rel=0`
    : url;
}

export default function CollegeUnplugged() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef([]);

  return (
    <div className="bg-white py-12 px-4 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary mb-10">
          Indira College Unplugged
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT LIST */}
          <div className="lg:col-span-5 space-y-4">
            {videos.map((v, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => setSelectedIndex(i)}
                className={`flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-all duration-300 
                  ${
                    selectedIndex === i
                      ? "bg-white shadow-md border-blue-200"
                      : "bg-gray-50 border-gray-200"
                  }`}
              >
                <div className="relative w-28 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 line-clamp-2">
                    {v.title}
                  </div>
                </div>

                {selectedIndex === i && (
                  <div className="ml-2 text-xs text-blue-600 font-medium whitespace-nowrap">
                    Playing
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT VIDEO PLAYER */}
          <div className="lg:col-span-7">
            <div className="w-full bg-black rounded-xl overflow-hidden shadow-lg min-h-[260px] lg:min-h-[360px] transition-all duration-500">
              <iframe
                id="youtube-frame"
                key={videos[selectedIndex].url}
                width="100%"
                height="100%"
                className="min-h-[260px] lg:min-h-[360px]"
                src={toEmbedUrl(videos[selectedIndex].url)}
                title={videos[selectedIndex].title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 p-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {videos[selectedIndex].title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
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
