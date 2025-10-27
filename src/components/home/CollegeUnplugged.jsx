"use client";

import React, { useState } from "react";
import Image from "next/image";

const videos = [
  {
    title:
      "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
    thumbnail: "https://img.youtube.com/vi/VFNW2xjcLS4/0.jpg",
    url: "https://youtu.be/VFNW2xjcLS4?si=82O2nNba-C76P6Sj",
  },
  {
    title: "ICEM (Indira College of Engineering and Management) Award Function",
    thumbnail: "https://img.youtube.com/vi/KrkLiGVGeT0/0.jpg",
    url: "https://youtu.be/KrkLiGVGeT0?si=-OHivtfzbudfoUWz",
  },
  {
    title: "Sunidhi Chauhan at ICEM",
    thumbnail: "https://img.youtube.com/vi/UxjeDzFtpMY/0.jpg",
    url: "https://youtu.be/UxjeDzFtpMY?si=1PQkCtSjM5gDA0ez",
  },
  {
    title:
      "Life at Indira University, Pune | Explore Vibrant Campus Life | Cutting Edge Facilities",
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/0.jpg",
    url: "https://youtu.be/gEXvD4OVyXg?si=68Sex6D7MOVnPik3",
  },
];

// ✅ Converts YouTube links into embeddable iframe URLs
function toEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  const videoId = match ? match[1] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

const CollegeUnplugged = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">
          Indira College Unplugged
        </h2>

        {/* ✅ Combined Layout */}
        <div className="flex flex-col lg:flex-row gap-10 transition-all duration-700 ease-in-out">
          {/* LEFT — Video List */}
          <div className="w-full lg:w-[45%] space-y-4 transition-all duration-700 ease-in-out">
            {videos.map((video, index) => {
              const isActive = selectedVideo.title === video.title;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedVideo(video)}
                  className={`group relative flex items-center gap-4 cursor-pointer overflow-hidden rounded-xl border transition-all duration-500 ease-in-out ${
                    isActive
                      ? "bg-gradient-to-r from-blue-50 to-white border-blue-400 shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {/* Thumbnail */}
                  <div
                    className={`relative flex-shrink-0 overflow-hidden rounded-md transition-all duration-500 ease-in-out ${
                      isActive
                        ? "w-32 h-20 sm:w-40 sm:h-24"
                        : "w-28 h-18 sm:w-32 sm:h-20"
                    }`}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <div className="pr-3 sm:pr-4 flex-1">
                    <h3
                      className={`font-medium text-gray-800 leading-snug transition-all duration-500 ${
                        isActive
                          ? "text-base sm:text-lg text-blue-800"
                          : "text-sm sm:text-base line-clamp-2"
                      }`}
                    >
                      {video.title}
                    </h3>
                  </div>

                  {/* Blue highlight bar (left edge) */}
                  {isActive && (
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-500 transition-all duration-500"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT — Main Video Player */}
          <div className="relative w-full lg:w-[55%] flex justify-center items-center transition-all duration-700 ease-in-out">
            <div className="w-full h-56 sm:h-72 md:h-80 lg:h-[400px] bg-black rounded-xl overflow-hidden shadow-xl transition-all duration-700 ease-in-out">
              <iframe
                key={selectedVideo.url}
                width="100%"
                height="100%"
                src={toEmbedUrl(selectedVideo.url)}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="transition-all duration-700 ease-in-out"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeUnplugged;
