"use client";

import React from "react";
import Image from "next/image";

export default function ExploreSection() {
  const logos = [
    { title: "NAAC Accredited", img: "/homepage-logos/NAAC.jpg" },
    { title: "Approved by AICTE", img: "/homepage-logos/aicte.jpg" },
    { title: "Affiliated to SPPU Pune", img: "/homepage-logos/sspu.jpg" },
    { title: "Top Ranking", img: "/homepage-logos/8th.jpg" },
  ];

  return (
    <section className="w-full bg-zinc-50 py-20">
      <div className="max-w-7xl mx-auto rounded-2xl">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 p-1 ">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center col-span-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
              Explore Your Potential with
            </h2>

            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#003366] mb-6 leading-snug">
              INDIRA COLLEGE OF ENGINEERING <br /> & MANAGEMENT
            </h2>

            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
              Located near Pune, Indira College of Engineering & Management, one
              of the leading NAAC accredited engineering institutions, offers a
              world of learning to help you achieve your goals. Choose from
              industry-led programs, learn from outstanding faculty in
              state-of-the-art facilities, and access limitless placement
              opportunities with top campus recruiters. Join a vibrant community
              of students with ambitions as big as yours.
            </p>
          </div>

          {/* RIGHT LOGO GRID */}
          <div className="flex flex-wrap items-center gap-5 col-span-2 ">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden 
                           flex items-center justify-center p-4 h-40
                           transition-transform duration-300 hover:scale-[1.03]"
              >
                <Image
                  src={logo.img}
                  alt={logo.title}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
