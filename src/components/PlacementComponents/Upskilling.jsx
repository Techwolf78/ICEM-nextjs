"use client";
import Image from "next/image";
import { Users, Brain, ChevronRight } from "lucide-react";
import { sections } from "@/static/placement/skills";

export default function Upskilling({}) {
  return (
    <>
      {/* Upskilling for the Future Section */}
      <section className="py-4 md:py-8 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="upskilling-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4 md:mb-12">
            <h2 id="upskilling-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 leading-tight">
              Upskilling for the Future
            </h2>
          </div>

          {/* Container for Side-by-Side Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Interpersonal Skills Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-48 md:h-56">
                <Image
                  src="/placement/Interpersonal Skills.webp"
                  alt="Interpersonal Skills training session showcasing communication and teamwork"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Interpersonal Skills
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <ul className="space-y-3" role="list">
                  {[
                    "Effective Communication Skills (Verbal, Non-Verbal, Emotional Intelligence)",
                    "Questioning Skills to Clarify Doubts and Assumptions",
                    "Improving Listening Skills",
                    "Mock GD & Mock PI (Group Discussion & Personal Interview)",
                    "Effective Writing Skills – Emails & Chats",
                    "7Cs of Professional Communication",
                    "Telephone Communication Skills – Seven Aspects",
                    "Managerial Communication Skills",
                    "Conflict Management in Teams"
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Aptitude Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-48 md:h-56">
                <Image
                  src="/placement/Aptitude.webp"
                  alt="Aptitude training session focusing on logical reasoning and problem-solving"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Aptitude
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <ul className="space-y-3" role="list">
                  {[
                    "Algebra and Number Theory",
                    "Arithmetic and Mensuration (e.g., Work, Time, Distance)",
                    "Permutations and Combinations",
                    "Logical Reasoning and Puzzles",
                    "Data Interpretation and Sufficiency",
                    "Data Analysis and Probability",
                    "Modern and Financial Mathematics",
                    "Problem-Solving Techniques",
                    "Gamification (Application of aptitude skills)"
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering - Technical Section */}
      <section className="py-4 md:py-8 bg-gray-50 overflow-hidden" aria-labelledby="technical-skills-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4 md:mb-8">
            <h2 id="technical-skills-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 leading-tight">
              Engineering - Technical Skills
            </h2>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>
            {/* Scrolling container */}
            <div className="flex gap-6 will-change-transform animate-scroll">
              {[...sections, ...sections].map((section, idx) => (
                <div
                  key={idx}
                  className="min-w-[320px] bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors duration-200">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={32}
                            height={32}
                            className="object-contain group-hover:scale-110 transition-transform duration-200"
                          />
                        </div>
                        <p className="text-xs md:text-sm text-gray-700 font-medium text-center leading-tight">
                          {item.name}
                        </p>
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
        </div>
      </section>
    </>
  );
}
