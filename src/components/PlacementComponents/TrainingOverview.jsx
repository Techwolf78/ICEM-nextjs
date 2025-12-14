"use client";

import { useState, useEffect, useRef } from "react";

const trainingData = [
  {
    count: 2100,
    singleLabel: "Training Hours Yearly", // ✅ single-line box
  },
  {
    countTop: 200,
    countBottom: 200,
    labelTop: "Hours of Aptitude Training",
    labelBottom: "Hours of Soft Skills Training",
  },
  {
    countTop: 250,
    countBottom: 250,
    labelTop: "Hours of Mechanical Technical Training",
    labelBottom: "Hours of Information Technology Training",
  },
  {
    countTop: 250,
    countBottom: 250,
    labelTop: "Hours of Computer Technical Training",
    labelBottom: "Hours of AI-DS Technical Training",
  },
  {
    countTop: 250,
    countBottom: 150,
    labelTop: "Hours of EnTC Technical Training",
    labelBottom: "Hours of Last Mile Industry Readiness Programme",
  },
  {
    countTop: 150,
    countBottom: 150,
    labelTop: "Hours of MCA Technical Training",
    labelBottom: "Hours of MBA Domain Training",
  },
];

/**
 * Render the Training Overview section with animated statistic cards that begin counting when the section is at least 30% visible.
 *
 * Displays a responsive grid of cards (single- or two-line) whose numeric values animate from 0 to their configured target over approximately 2000ms once the section enters the viewport.
 *
 * @returns {JSX.Element} The TrainingOverview section containing the heading, description, and animated statistic cards.
 */
export default function TrainingOverview() {
  const [counts, setCounts] = useState(
    trainingData.map((item) => {
      if (item.singleLabel) {
        return { single: 0 };
      } else {
        return { top: 0, bottom: 0 };
      }
    })
  );
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  
  // ✅ Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Animate counts
  useEffect(() => {
    if (isVisible) {
      trainingData.forEach((item, index) => {
        if (item.singleLabel) {
          // Single count
          let start = 0;
          const end = item.count;
          const duration = 2000;
          const increment = end / (duration / 30);

          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(interval);
              start = end;
            }
            setCounts((prev) => {
              const updated = [...prev];
              updated[index] = { single: Math.floor(start) };
              return updated;
            });
          }, 30);
        } else {
          // Two counts
          const endTop = item.countTop;
          const endBottom = item.countBottom;
          let startTop = 0;
          let startBottom = 0;
          const duration = 2000;
          const incrementTop = endTop / (duration / 30);
          const incrementBottom = endBottom / (duration / 30);

          const interval = setInterval(() => {
            startTop += incrementTop;
            startBottom += incrementBottom;
            if (startTop >= endTop) startTop = endTop;
            if (startBottom >= endBottom) startBottom = endBottom;
            if (startTop >= endTop && startBottom >= endBottom) {
              clearInterval(interval);
            }
            setCounts((prev) => {
              const updated = [...prev];
              updated[index] = { top: Math.floor(startTop), bottom: Math.floor(startBottom) };
              return updated;
            });
          }, 30);
        }
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-4 md:py-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6">
          Training Overview
        </h2>

        {/* Section Description */}
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Structured training across core and domain-specific areas,
          meticulously designed to equip students with the skills, knowledge,
          and industry readiness required for professional success.
        </p>

        {/* ✅ Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {trainingData.map((item, index) => {
            const isSingle = !!item.singleLabel;

            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-secondary text-white"
                    : "bg-white text-gray-900 border border-gray-200"
                } flex flex-col items-center justify-center py-6 sm:py-8 lg:py-10 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                {/* ✅ Single-line card */}
                {isSingle ? (
                  <>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2">
                      {counts[index].single}+
                    </h3>
                    <p className="text-sm md:text-base font-medium text-center">
                      {item.singleLabel}
                    </p>
                  </>
                ) : (
                  /* ✅ Two-line card */
                  <>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2">
                      {counts[index].top}+
                    </h3>
                    <p className="text-sm md:text-base font-medium text-center mb-3">
                      {item.labelTop}
                    </p>
                    <div  
                      className={`w-3/4 h-px my-3 ${
                        index % 2 === 0
                          ? "bg-white/60"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2">
                      {counts[index].bottom}+
                    </h3>
                    <p className="text-sm md:text-base font-medium text-center">
                      {item.labelBottom}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
