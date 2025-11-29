"use client";
import Image from "next/image";
import { sections } from "@/static/placement/skills";

export default function Upskilling({}) {
  return (
    <>
      {/* Upskilling for the Future Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
            Upskilling for the Future   
          </h2>

          {/* Container for Side-by-Side Sections */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Interpersonal Skills Section (Left/Top) */}
            <div className="flex-1 mb-6 md:mb-0">
              <div className="flex flex-col bg-white border border-gray-200 shadow-md overflow-hidden rounded-lg h-full">
                {/* Image and Title container - kept the vertical stacking for image/content within this block */}
                <div className="relative w-full min-h-[200px] bg-gray-50 flex items-center justify-center text-secondary font-semibold text-lg border-b border-gray-200">
                  <Image
                    src="/placement/Interpersonal Skills.webp"
                    alt="Interpersonal Skills"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay to ensure title is readable */}
                  <div className="absolute inset-0 bg-black/50"></div>
                  <h3 className="relative z-10 text-4xl font-extrabold text-white p-4">
                    Interpersonal Skills
                  </h3>
                </div>

                <div className="p-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                    <li>
                      Effective Communication Skills (Verbal, Non-Verbal,
                      Emotional Intelligence)
                    </li>
                    <li>
                      Questioning Skills to Clarify Doubts and Assumptions
                    </li>
                    <li>Improving Listening Skills</li>
                    <li>
                      Mock GD & Mock PI (Group Discussion & Personal Interview)
                    </li>
                    <li>Effective Writing Skills – Emails & Chats</li>
                    <li>7Cs of Professional Communication</li>
                    <li>Telephone Communication Skills – Seven Aspects</li>
                    <li>Managerial Communication Skills</li>
                    <li>Conflict Management in Teams</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aptitude Section (Right/Bottom) */}
            <div className="flex-1">
              <div className="flex flex-col bg-white border border-gray-200 shadow-md overflow-hidden rounded-lg h-full">
                {/* Image and Title container - kept the vertical stacking for image/content within this block */}
                <div className="relative w-full min-h-[200px] bg-gray-50 flex items-center justify-center text-secondary font-semibold text-lg border-b border-gray-200">
                  <Image
                    src="/placement/Aptitude.webp"
                    alt="Aptitude"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay to ensure title is readable */}
                  <div className="absolute inset-0 bg-black/50"></div>
                  <h3 className="relative z-10 text-4xl font-extrabold text-white p-4">
                    Aptitude
                  </h3>
                </div>

                <div className="p-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                    <li>Algebra and Number Theory</li>
                    <li>
                      Arithmetic and Mensuration (e.g., Work, Time, Distance)
                    </li>
                    <li>Permutations and Combinations</li>
                    <li>Logical Reasoning and Puzzles</li>
                    <li>Data Interpretation and Sufficiency</li>
                    <li>Data Analysis and Probability</li>
                    <li>Modern and Financial Mathematics</li>
                    <li>Problem-Solving Techniques</li>
                    <li>Gamification (Application of aptitude skills)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering - Technical Section */}

      <section className="py-10 bg-gray-50 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
          ENGINEERING - TECHNICAL SKILLS
        </h2>
        <div className="relative w-full overflow-hidden py-6 px-4 sm:px-6 lg:px-8">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>
          {/* Scrolling container */}
          <div className="flex gap-6 will-change-transform animate-scroll">
            {[...sections, ...sections].map((section, idx) => (
              <div
                key={idx}
                className="min-w-[380px] bg-white border border-gray-200 shadow-md rounded-lg p-4 pr-8"
              >
                <h3 className="text-lg font-bold text-secondary mb-4 uppercase tracking-wide text-center">
                  {section.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="relative h-18 sm:h-20 md:h-24 w-18 sm:w-20 md:w-24 bg-white border border-gray-200 flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all rounded-md overflow-hidden group"
                    >
                      {/* Icon */}
                      <div className="flex-1 flex items-center justify-center w-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="object-contain transition-transform duration-300 group-hover:scale-110 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                        />
                      </div>

                      {/* Name */}
                      <div className="w-full bg-white border-t border-gray-100">
                        <p className="text-[9px] sm:text-[10px] md:text-[11px] text-secondary font-semibold text-center leading-tight px-1 py-1.5">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
              width: fit-content;
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
