"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register the plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ExploreSection = () => {
  const sectionRef = useRef(null);

  const logos = [
    { title: "NAAC Accredited", img: "/homepage-logos/NAAC.webp" },
    { title: "Top Ranking", img: "/homepage-logos/8th.webp" },
    { title: "Approved by AICTE", img: "/homepage-logos/AICTE.webp" },
    { title: "Affiliated to SPPU Pune", img: "/homepage-logos/sspu.webp" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PRE-OPTIMIZATION:
      // Tell the browser these elements will change.
      // This prevents the "paint flash" on the first frame of animation.
      gsap.set(".fade-text, .fade-logo", {
        willChange: "transform, opacity",
        backfaceVisibility: "hidden", // Fixes font blurring on Mac
      });

      // 2. TEXT ANIMATION
      gsap.fromTo(
        ".fade-text",
        {
          autoAlpha: 0,
          y: 40,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          force3D: true, // FORCE GPU ACCELERATION
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          // Clean up "will-change" after animation to save memory
          onComplete: () => {
            gsap.set(".fade-text", { willChange: "auto" });
          },
        }
      );

      // 3. LOGO ANIMATION
      gsap.fromTo(
        ".fade-logo",
        {
          autoAlpha: 0,
          y: 30,
          scale: 0.95,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          force3D: true, // FORCE GPU ACCELERATION
          scrollTrigger: {
            trigger: ".logos-column",
            start: "top 85%",
            once: true,
          },
          onComplete: () => {
            gsap.set(".fade-logo", { willChange: "auto" });
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative z-30 py-12 sm:pt-12  px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.4fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Text Content */}
          {/* LEFT COLUMN: Text Content */}
          <div
            className="order-1 flex flex-col gap-5 sm:gap-6 
    text-left items-start w-full max-w-3xl"
          >
            <div className="fade-text space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-tight">
                Explore Your Potential At
              </h2>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
                INDIRA COLLEGE OF ENGINEERING & MANAGEMENT
              </h2>
            </div>

            <p
              className="fade-text text-gray-600 
      text-base sm:text-lg md:text-xl 
      leading-relaxed sm:leading-loose 
      w-full text-justify"
            >
              Located near Pune, Indira College of Engineering & Management, one
              of the leading NAAC accredited engineering institutions, offers a
              world of learning to help you achieve your goals. Choose from
              industry-led programs, learn from outstanding faculty in
              state-of-the-art facilities, and access limitless placement
              opportunities.
            </p>
          </div>

          {/* RIGHT COLUMN: Logos */}
          <div className="logos-column w-full order-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:max-w-none lg:mx-0">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  // Added 'transform-gpu' class for extra safety
                  className="fade-logo transform-gpu bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-6 
                    flex items-center justify-center 
                    h-28 sm:h-36 lg:h-40
                    transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.img}
                      alt={logo.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
