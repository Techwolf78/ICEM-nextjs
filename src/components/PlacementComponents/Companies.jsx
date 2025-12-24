"use client";

import React from "react";
import Image from "next/image";

const Companies = () => {
  // ✅ Load all 44 logos, excluding 13 & 15
  const allLogos = Array.from(
    { length: 44 },
    (_, i) => `/logos/logo${i + 1}.webp`
  ).filter((_, index) => ![35, 37].includes(index + 1));

  // ✅ Remove logos 18 & 25 (they are behind the circle)
  const mainLogos = allLogos.filter((_, index) => ![17, 24].includes(index));

  // ✅ Add logos 18 & 25 to the end (last row)
  const reorderedLogos = [...mainLogos, allLogos[17], allLogos[24]];

  return (
    <section
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-4 md:py-8 relative overflow-hidden"
      aria-labelledby="companies-heading"
    >
      {/* Subtle background pattern for premium feel */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(39,141,164,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ✅ Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="companies-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-4 leading-tight"
          >
            Your Career, Connected to the Best
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            The consistent quality and industry-readiness of ICEM graduates have made our campus a preferred recruitment destination for top-tier companies across the globe. These partnerships are a testament to our shared commitment to nurturing future-ready professionals
          </p>
        </div>

        {/* ✅ Recruiter Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 place-items-center relative">
          {reorderedLogos.map((logo, index) => (
            <div
              key={index}
              className={`group flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out border border-gray-200 hover:border-primary sm:px-1 ${
                // Hide the last two logos on mobile
                [40, 41].includes(index) ? "hidden sm:flex" : ""
              }`}
              role="img"
              aria-label={`Partner company logo ${index + 1}`}
            >
              <Image
                src={logo}
                alt={`Partner company logo ${index + 1}`}
                width={80}
                height={50}
                className="object-contain max-w-[70%] max-h-[60%] group-hover:brightness-110 transition-all duration-300"
                loading={index < 12 ? "eager" : "lazy"}
                priority={index < 12}
              />
            </div>
          ))}

          {/* ✅ Center Achievement Badge (hidden on mobile) */}
          <div className="hidden sm:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[linear-gradient(145deg,_#278da4_0%,_#003c84_90%)] text-white flex flex-col items-center justify-center shadow-2xl border-[4px] border-[#D4AF37] ring-4 ring-gray-100 hover:ring-gray-200 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold mb-1">350+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Global Partners</div>
              <div className="w-8 h-1 bg-white/30 rounded-full mt-2"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Companies;
