"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
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
      className="w-full bg-white relative z-30 py-4 md:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="explore-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.4fr_0.8fr] gap-6 lg:gap-16 items-center">
          {/* LEFT COLUMN: Text Content */}
          <div
            className="order-1 flex flex-col gap-5 sm:gap-6 
    text-left items-start w-full max-w-3xl"
          >
            <div className="fade-text space-y-2">
              <h2
                id="explore-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-tight"
              >
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

            <div className="fade-text mt-3 sm:mt-4 w-full sm:w-auto">
              <Link
                href="/fra-fee-structure"
                className="group inline-flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-slate-50 border border-blue-200/80 hover:border-[#003c84] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#003c84] to-[#1d59a3] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#003c84]">
                      Fees Regulating Authority
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#003c84] transition-colors truncate">
                      FRA Fee Structure (A.Y. 2026-27)
                    </span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#003c84] group-hover:bg-[#003c84] group-hover:text-white transition-colors shrink-0 ml-1 sm:ml-3">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Logos */}
          <div className="logos-column w-full order-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:max-w-none lg:mx-0">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="fade-logo transform-gpu bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-6 
                    flex items-center justify-center 
                    h-28 sm:h-36 lg:h-40
                    transition-all duration-300 hover:-translate-y-1"
                  role="img"
                  aria-label={logo.title}
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
