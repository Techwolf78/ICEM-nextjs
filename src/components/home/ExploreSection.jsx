// "use client";

// import React from "react";
// import Image from "next/image";

// export default function ExploreSection() {
//   const logos = [
//     { title: "NAAC Accredited", img: "/homepage-logos/NAAC.jpg" },
//     { title: "Approved by AICTE", img: "/homepage-logos/aicte.jpg" },
//     { title: "Affiliated to SPPU Pune", img: "/homepage-logos/sspu.jpg" },
//     { title: "Top Ranking", img: "/homepage-logos/8th.jpg" },
//   ];

//   return (
//     <section className="w-full bg-zinc-50 py-20">
//       <div className="max-w-7xl mx-auto rounded-2xl">
//         {/* GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 p-1 ">
//           {/* LEFT TEXT */}
//           <div className="flex flex-col justify-center col-span-3">
//             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
//               Explore Your Potential with
//             </h2>

//             <h2 className="text-2xl lg:text-3xl font-extrabold text-[#003366] mb-6 leading-snug">
//               INDIRA COLLEGE OF ENGINEERING <br /> & MANAGEMENT
//             </h2>

//             <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
//               Located near Pune, Indira College of Engineering & Management, one
//               of the leading NAAC accredited engineering institutions, offers a
//               world of learning to help you achieve your goals. Choose from
//               industry-led programs, learn from outstanding faculty in
//               state-of-the-art facilities, and access limitless placement
//               opportunities with top campus recruiters. Join a vibrant community
//               of students with ambitions as big as yours.
//             </p>
//           </div>

//           {/* RIGHT LOGO GRID */}
//           <div className="flex flex-wrap items-center gap-5 col-span-2 ">
//             {logos.map((logo, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-md overflow-hidden 
//                            flex items-center justify-center p-4 h-40
//                            transition-transform duration-300 hover:scale-[1.03]"
//               >
//                 <Image
//                   src={logo.img}
//                   alt={logo.title}
//                   width={180}
//                   height={180}
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  const sectionRef = useRef(null);

  const logos = [
    { title: "NAAC Accredited", img: "/NAAC.webp" },
    { title: "Approved by AICTE", img: "/AICTE.webp" },
    { title: "Affiliated to SPPU Pune", img: "/SPPU.webp" },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    // ================================
    // 1️⃣ TEXT & HEADING FADE-IN
    // ================================
    gsap.fromTo(
      section.querySelectorAll(".fade-text"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      }
    );

    // ================================
    // 2️⃣ LOGOS – STAGGER RIGHT ➜ LEFT
    // ================================
    gsap.fromTo(
      section.querySelectorAll(".fade-logo"),
      { autoAlpha: 0, x: 60 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: {
          each: 0.25,
          from: "end", // 👉 Right-to-left
        },
        scrollTrigger: {
          trigger: section.querySelector(".logos-wrapper"),
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative z-30 pt-20 pb-10 "
    >
      <div className="max-w-7xl mx-auto space-y-5">

        {/* HEADING */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] fade-text">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
              Explore Your Potential At
            </h2>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-secondary mt-1 leading-tight">
              INDIRA GLOBAL SCHOOL OF BUSINESS
            </h2>
          </div>
        </div>

        {/* TEXT + LOGOS */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">

          {/* TEXT */}
          <div className="fade-text">
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
              Located near Pune, Indira Global School of Business one of the
              leading NAAC-accredited MBA institution that offers a rich blend
              of management education and research driven learning. Choose from
              industry focused specializations, learn from research active
              faculty, and gain practical insights through case studies,
              projects, and data driven analysis, while accessing strong
              placements and opportunities to participate in seminars,
              conferences, and research initiatives.
            </p>
          </div>

          {/* LOGOS */}
          <div className="logos-wrapper flex gap-6 justify-start lg:justify-center items-start">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="fade-logo flex items-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.img}
                  alt={logo.title}
                  width={150}
                  height={150}
                  className="object-contain drop-shadow"
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

