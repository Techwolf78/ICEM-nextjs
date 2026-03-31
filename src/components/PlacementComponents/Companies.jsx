"use client";

import React, { useMemo } from "react";
import Image from "next/image";

const Companies = () => {
  // ✅ Load all 44 logos, excluding 13 & 15
  const allLogos = useMemo(() => Array.from(
    { length: 44 },
    (_, i) => `/logos/logo${i + 1}.webp`
  ).filter((_, index) => ![35, 37].includes(index + 1)), []);

  // ✅ Remove logos 18 & 25 (they are behind the circle)
  const mainLogos = useMemo(() => allLogos.filter((_, index) => ![17, 24].includes(index)), [allLogos]);

  // ✅ Add logos 18 & 25 to the end (last row)
  const reorderedLogos = useMemo(() => [...mainLogos, allLogos[17], allLogos[24]], [mainLogos, allLogos]);

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
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-2 gap-y-2 sm:gap-x-1 sm:gap-y-4 place-items-center relative">
          {reorderedLogos.map((logo, index) => (
            <div
              key={index}
              className={`group flex items-center justify-center w-24 h-12 md:w-28 md:h-16 bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out border border-gray-200 hover:border-primary ${
                [17, 24].includes(index) ? "lg:invisible" : ""
              } ${
                [39, 40, 41].includes(index) ? "hidden lg:flex" : ""
              }`}
              role="img"
              aria-label={`Partner company logo ${index + 1}`}
            >
              <Image
                src={logo}
                alt={`Partner company logo ${index + 1}`}
                width={100}
                height={40}
                className="object-covermax-w-full max-h-full group-hover:brightness-110 transition-all duration-300"
                loading={index < 12 ? "eager" : "lazy"}
                priority={index < 12}
              />
            </div>
          ))}

          {/* ✅ Center Achievement Badge (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-[linear-gradient(145deg,_#278da4_0%,_#003c84_90%)] text-white flex flex-col items-center justify-center shadow-2xl border-[4px] border-[#D4AF37] ring-4 ring-gray-100 hover:ring-gray-200 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold mb-1">350+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Corporates</div>
              <div className="w-8 h-1 bg-white/30 rounded-full mt-2"></div>
            </div>
          </div>
        </div>

        {/* Mobile small text below logos in right corner */}
        <div className="block lg:hidden text-right">
          <span className="text-xs text-gray-700 font-medium">
            350+ more...
          </span>
        </div>

      </div>
    </section>
  );
};

export default Companies;
