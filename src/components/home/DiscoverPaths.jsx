"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. PERFORMANCE: Move static data OUTSIDE the component.
// This prevents React from recreating this array on every single re-render (e.g., when you click "View More").
const courses = [
  {
    name: "Computer Engineering",
    img: "/programs/Computer/Comp.webp",
    link: "/programs/computer-engineering",
  },
  {
    name: "Mechanical Engineering",
    img: "/programs/Mech/Mech.webp",
    link: "/programs/mechanical-engineering",
  },
  {
    name: "Artificial Intelligence and Data Science",
    img: "/programs/AIDS/AIDS.webp",
    link: "/programs/ai-ds",
  },
  {
    name: "Electronics and Telecommunication",
    img: "/programs/ENTC/ENTC.webp",
    link: "/programs/entc",
  },
  {
    name: "Information Technology",
    img: "/programs/IT/IT.webp",
    link: "/programs/it",
  },
  { name: "MBA", img: "/programs/MBA/SectionMBA.webp", link: "/programs/mba" },
  { name: "MCA", img: "/programs/MBA/IMBA.webp", link: "/programs/mca" },
  {
    name: "Integrated MBA (BBA + MBA)",
    img: "/programs/MBA/MBA.webp",
    link: "/programs/imba",
  },
  {
    name: "Integrated MCA (BCA + MCA)",
    img: "/programs/MCA/MCA.webp",
    link: "/programs/imca",
  },
];

const DiscoverPaths = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-gray-50 py-4 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-10 sm:mb-14 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary mb-4 leading-tight">
            Discover Your Path to Success
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl">
            Explore our comprehensive programs designed to shape your future
            career with industry-relevant skills and expert guidance.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-6">
          {courses.map((course, index) => {
            const isHiddenOnMobile =
              index > 3 && !showAll ? "hidden sm:block" : "block";

            return (
              <Link
                key={index}
                href={course.link}
                // 2. PERFORMANCE: 'will-change-transform' helps browsers optimize the hover animation
                className={`
                  ${isHiddenOnMobile}
                  group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl 
                  transition-all duration-300 overflow-hidden 
                  border border-gray-100 hover:border-gray-200
                  transform hover:-translate-y-1 will-change-transform
                `}
              >
                {/* Image Container */}
                <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={course.img}
                    alt={course.name}
                    fill
                    // 3. PERFORMANCE: 'priority'
                    // Load the first 3 images immediately (LCP boost). Lazy load the rest.
                    priority={index < 3}
                    // 4. PERFORMANCE: Optimized 'sizes'
                    // 100vw on mobile (1 col), 50vw on tablet (2 cols), 33vw on desktop (3 cols)
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Card Label */}
                <div className="absolute bottom-0 left-0 right-0">
                  {/* Note: Backdrop blur is expensive on low-end mobiles. 
                      If mobile performance lags, remove backdrop-blur-md */}
                  <div className="bg-secondary backdrop-blur-md rounded-b-xl p-3 sm:p-4 shadow-lg border-t border-white/20">
                    <h3 className="text-sm sm:text-base font-bold text-white text-center leading-tight line-clamp-2 group-hover:text-secondary-light transition-colors duration-300">
                      {course.name}
                    </h3>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="flex justify-center mt-8 sm:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 text-sm font-bold bg-secondary text-white rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300 flex items-center gap-2"
            >
              View More Programs
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverPaths;
