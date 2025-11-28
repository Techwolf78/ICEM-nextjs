"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  const sectionRef = useRef(null);

  const logos = [
    { title: "NAAC Accredited", img: "/homepage-logos/NAAC.jpg" },
    { title: "Top Ranking", img: "/homepage-logos/8th.jpg" },
    { title: "Approved by AICTE", img: "/homepage-logos/aicte.jpg" },
    { title: "Affiliated to SPPU Pune", img: "/homepage-logos/sspu.jpg" },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    // TEXT ANIMATION
    gsap.fromTo(
      section.querySelectorAll(".fade-text"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: { trigger: section, start: "top 85%", once: true },
      }
    );

    // LOGO ANIMATION
    gsap.fromTo(
      section.querySelectorAll(".fade-logo"),
      { autoAlpha: 0, x: 60 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: section.querySelector(".logos-column"),
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative z-30 py-10  sm:pt-20 sm:pb-10 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* GRID: LEFT | RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-6">
            {/* HEADING */}
            <div className="fade-text">
              <h2 className="text-xl lg:text-3xl text-center sm:text-left font-semibold text-gray-800 leading-tight">
                Explore Your Potential At
              </h2>
              <h2 className="text-xl lg:text-3xl text-center sm:text-left font-extrabold text-secondary mt-1 leading-tight">
                INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
              </h2>
            </div>

            {/* TEXT */}
            <p className="fade-text text-gray-700 text-md lg:text-xl leading-relaxed text-justify">
              Located near Pune, Indira College of Engineering & Management, one
              of the leading NAAC accredited engineering institutions, offers a
              world of learning to help you achieve your goals. Choose from
              industry-led programs, learn from outstanding faculty in
              state-of-the-art facilities, and access limitless placement
              opportunities with top campus recruiters. Join a vibrant community
              of students with ambitions as big as yours.
            </p>
          </div>

          {/* RIGHT COLUMN — LOGOS (2×2 GRID) */}
          <div className="logos-column grid grid-cols-2 gap-6 items-start">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="fade-logo bg-white rounded-xl shadow-md p-5 
                 flex items-center justify-center h-32
                 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.img}
                  alt={logo.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
