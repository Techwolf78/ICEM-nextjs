"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

// 🔥 UPDATED: Using 'maxresdefault.jpg' for crisp images
const videos = [
  {
    title:
      "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
    thumbnail: "https://img.youtube.com/vi/VFNW2xjcLS4/maxresdefault.jpg",
    url: "https://youtu.be/VFNW2xjcLS4?si=82O2nNba-C76P6Sj",
  },
  {
    title: "ICEM (Indira College of Engineering and Management) Award Function",
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
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/maxresdefault.jpg",
    url: "https://youtu.be/gEXvD4OVyXg?si=68Sex6D7MOVnPik3",
  },
];

function toEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  const videoId = match ? match[1] : null;

  // 🔥 UPDATED: Added '&vq=hd1080' to request High Definition
  // Note: YouTube still adjusts based on user bandwidth, but this sets the preference.
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd720&rel=0`
    : url;
}

export default function CollegeUnplugged() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const itemRefs = useRef([]);
  const playerRef = useRef(null);

  // --- Animation Helper: Create Clone ---
  const createClone = (sourceRect, contentNode) => {
    const clone = document.createElement("div");
    clone.style.position = "fixed";
    clone.style.left = `${sourceRect.left}px`;
    clone.style.top = `${sourceRect.top}px`;
    clone.style.width = `${sourceRect.width}px`;
    clone.style.height = `${sourceRect.height}px`;
    clone.style.zIndex = 9999;
    clone.style.pointerEvents = "none";
    clone.style.borderRadius =
      getComputedStyle(contentNode).borderRadius || "8px";
    clone.style.overflow = "hidden";
    clone.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    clone.style.transition =
      "transform 520ms cubic-bezier(.2,.9,.3,1), left 520ms cubic-bezier(.2,.9,.3,1), top 520ms cubic-bezier(.2,.9,.3,1), width 520ms, height 520ms, opacity 320ms";
    return clone;
  };

  // --- Main Logic: Handle Video Selection ---
  const handleSelect = (clickedIndex) => {
    if (clickedIndex === selectedIndex) return;

    setIsPlaying(false);

    const fromNode = itemRefs.current[clickedIndex];
    const toNode = playerRef.current;

    if (!fromNode || !toNode) {
      setSelectedIndex(clickedIndex);
      return;
    }

    const fromRect = fromNode.getBoundingClientRect();
    const toRect = toNode.getBoundingClientRect();

    // Clone 1: Animate List Item -> Player
    const cloneFrom = createClone(fromRect, fromNode);
    cloneFrom.innerHTML = `
      <div style="display:flex;align-items:center;height:100%;background:#fff">
        <img src="${
          videos[clickedIndex].thumbnail
        }" style="width:40%;height:100%;object-fit:cover;display:block" />
        <div style="padding:10px;flex:1;display:flex;align-items:center">
          <div style="font-size:14px;color:#0f172a;font-family:inherit">${escapeHtmlShort(
            videos[clickedIndex].title
          )}</div>
        </div>
      </div>
    `;
    document.body.appendChild(cloneFrom);

    // Clone 2: Animate Player -> List Item
    const cloneTo = createClone(toRect, toNode);
    cloneTo.innerHTML = `
      <div style="width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;position:relative;">
        <img src="${videos[selectedIndex].thumbnail}" style="width:100%;height:100%;object-fit:cover;" />
        <div style="position:absolute;width:48px;height:48px;background:rgba(0,0,0,0.6);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">
             <div style="width:0;height:0;border-left:14px solid white;border-top:9px solid transparent;border-bottom:9px solid transparent;margin-left:4px"></div>
        </div>
      </div>
    `;
    document.body.appendChild(cloneTo);

    // Hide originals
    fromNode.style.visibility = "hidden";
    toNode.style.visibility = "hidden";

    // FLIP Animation Start
    requestAnimationFrame(() => {
      cloneFrom.style.left = `${toRect.left}px`;
      cloneFrom.style.top = `${toRect.top}px`;
      cloneFrom.style.width = `${toRect.width}px`;
      cloneFrom.style.height = `${toRect.height}px`;

      cloneTo.style.left = `${fromRect.left}px`;
      cloneTo.style.top = `${fromRect.top}px`;
      cloneTo.style.width = `${fromRect.width}px`;
      cloneTo.style.height = `${fromRect.height}px`;
    });

    const onFinish = () => {
      cloneFrom.remove();
      cloneTo.remove();
      fromNode.style.visibility = "";
      toNode.style.visibility = "";
      setSelectedIndex(clickedIndex);
    };

    setTimeout(onFinish, 520);
  };

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Indira College Unplugged
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          style={{ contain: "content" }}
        >
          {/* List Section */}
          <div className="lg:col-span-5 space-y-4">
            {videos.map((v, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => handleSelect(i)}
                className={`flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                  selectedIndex === i
                    ? "bg-white shadow-md border-blue-100 scale-[1.02]"
                    : "bg-gray-50 border-gray-100 hover:bg-gray-100"
                }`}
                style={{ minHeight: 72 }}
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

          {/* Player Section */}
          <div className="lg:col-span-7">
            <div
              ref={playerRef}
              className="w-full bg-black rounded-xl overflow-hidden shadow-xl relative group"
              style={{ aspectRatio: "16/9", minHeight: 240 }}
            >
              {isPlaying ? (
                <iframe
                  key={videos[selectedIndex].url}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  src={toEmbedUrl(videos[selectedIndex].url)}
                  title={videos[selectedIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
                  onClick={() => setIsPlaying(true)}
                >
                  <Image
                    src={videos[selectedIndex].thumbnail}
                    alt="Video Cover"
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform group-hover:scale-110 border border-white/40 shadow-lg z-10">
                    <div className="w-0 h-0 border-l-[18px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 p-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {videos[selectedIndex].title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
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

function escapeHtmlShort(str) {
  return String(str).replace(/[&<>"']/g, (s) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[s];
  });
}
