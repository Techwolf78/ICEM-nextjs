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

          {/* Interpersonal Skills */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm mb-6 overflow-hidden rounded-lg">
            <div className="relative w-full flex-1 min-h-[200px] bg-gray-50 md:w-[35%] flex items-center justify-center text-secondary font-semibold text-lg p-6 border-r border-gray-200">
              <Image
                src="/Interpersonal Skills.jpg"
                alt="Interpersonal Skills"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:w-[65%]">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Interpersonal Skills
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>
                  Effective Communication Skills & Importance of Verbal and
                  Non-Verbal Communication
                </li>
                <li>Questioning Skills to Clarify Doubts and Assumptions</li>
                <li>Improving Listening Skills</li>
                <li>Mock GD & Mock PI</li>
                <li>Effective Writing Skills – Emails & Chats</li>
                <li>Emotional Intelligence in Communication</li>
                <li>7Cs of Professional Communication</li>
                <li>Telephone Communication Skills – Seven Aspects</li>
                <li>Managerial Communication Skills</li>
                <li>Conflict Management in Teams</li>
              </ul>
            </div>
          </div>

          {/* Aptitude */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden rounded-lg">
            <div className="relative w-full flex-1 min-h-[350px] bg-gray-50 md:w-[35%] flex items-center justify-center text-secondary font-semibold text-lg p-6 border-r border-gray-200">
              <Image
                src="/Aptitude.jpg"
                alt="Aptitude"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:w-[65%]">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Aptitude
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>Algebra and Number Theory</li>
                <li>Arithmetic and Mensuration</li>
                <li>Work, Time and Distance</li>
                <li>Permutations and Combinations</li>
                <li>Data Interpretation and Sufficiency</li>
                <li>Modern and Financial Mathematics</li>
                <li>Gamification</li>
                <li>Logical Reasoning and Puzzles</li>
                <li>Data Analysis and Probability</li>
                <li>Problem-Solving</li>
              </ul>
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
