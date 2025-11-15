"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full h-72 md:h-96 bg-gray-200 rounded-xl overflow-hidden">
      <Image
        src={images[index]}
        alt="Event photo"
        fill
        className="object-cover transition-all duration-300"
      />

      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
