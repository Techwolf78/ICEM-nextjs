"use client";

import React, { useState } from "react";
import Image from "next/image";
import { awards } from "../../../static/campuslife/awards";

const IcemAwards = () => {
  const [expanded, setExpanded] = useState(null);
  // Images are in /public folder
  const bannerImg = "/awards/award3.jpg";

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* ===== Banner Section ===== */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src={bannerImg}
          alt="Awards Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
          unoptimized={true}
          className="transition-transform duration-700 ease-out "
        />
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-secondary mb-10 text-center transform transition-all duration-500 ease-out hover:scale-105">
          Awards @ Indira College of Engineering and Management
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-200 cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-2 overflow-hidden transform opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-secondary hover:text-primary transition-colors duration-300 ease-in-out">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 transition-colors duration-300">
                  {award.date}
                </p>
                {/* Description with smooth expand/collapse */}
                <div className="mt-3">
                  <p
                    className={`text-sm text-gray-600 transition-all duration-500 ease-in-out overflow-hidden ${
                      expanded === award.id
                        ? "max-h-96 opacity-100"
                        : "max-h-20 opacity-90"
                    }`}
                  >
                    {award.shortDescription}
                  </p>

                  <button
                    onClick={() =>
                      setExpanded(expanded === award.id ? null : award.id)
                    }
                    className="text-secondary text-sm font-medium mt-3 hover:underline transition-all duration-300 ease-in-out transform hover:translate-x-1"
                  >
                    {expanded === award.id ? "Read Less" : "Read More"}
                    <span className="inline-block ml-1 transition-transform duration-300">
                      {expanded === award.id ? "↑" : "↓"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom styles for the fade-in-up animation */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default IcemAwards;
