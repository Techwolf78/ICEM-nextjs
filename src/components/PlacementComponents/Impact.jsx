"use client";

import { useState, useEffect, useRef } from "react";

export default function Impact() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [animated, setAnimated] = useState([false, false, false, false]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe section visibility
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate the numbers with staggered entrance
  useEffect(() => {
    if (isVisible) {
      const targets = [27, 8.16, 350, 100];
      const duration = 2000;
      const intervalTime = 30;

      // Stagger the animations for each card
      targets.forEach((target, i) => {
        setTimeout(() => {
          // Trigger slide-in animation for this card
          setAnimated((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });

          // Start counting animation
          let start = 0;
          const increment = target / (duration / intervalTime);

          const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
              start = target;
              clearInterval(interval);
            }
            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = parseFloat(start.toFixed(2));
              return updated;
            });
          }, intervalTime);
        }, i * 300); // 300ms delay between each card
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 md:mb-12">
          Our Impact in Numbers
        </h2>

        {/* RESPONSIVE GRID LOGIC:
            - grid-cols-2: Two cards per row on mobile (looks like a dashboard)
            - lg:grid-cols-4: Four cards in a row on laptops
            - gap-3: Tighter spacing on mobile
            - md:gap-8: Wider spacing on desktop
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          
          {/* Highest Package */}
          <div
            className={`
            bg-white shadow-lg border border-blue-100 
            p-4 md:p-8 rounded-xl 
            transition-all duration-700 transform
            flex flex-col justify-center items-center
            ${
              animated[0]
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-10 md:-translate-x-20 opacity-0 scale-90"
            }
            hover:scale-105 hover:shadow-xl
          `}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">
              ₹{counts[0].toFixed(0)} LPA
            </h3>
            <p className="text-xs md:text-lg font-bold text-secondary opacity-80">
              Highest Package
            </p>
          </div>

          {/* Average Package */}
          <div
            className={`
            bg-white shadow-lg border border-blue-100 
            p-4 md:p-8 rounded-xl 
            transition-all duration-700 transform
            flex flex-col justify-center items-center
            ${
              animated[1]
                ? "translate-y-0 opacity-100 scale-100"
                : "-translate-y-10 md:-translate-y-20 opacity-0 scale-90"
            }
            hover:scale-105 hover:shadow-xl
          `}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">
              ₹{counts[1].toFixed(2)} LPA
            </h3>
            <p className="text-xs md:text-lg font-bold text-secondary opacity-80">
              Average Package
            </p>
          </div>

          {/* Companies */}
          <div
            className={`
            bg-white shadow-lg border border-blue-100 
            p-4 md:p-8 rounded-xl 
            transition-all duration-700 transform
            flex flex-col justify-center items-center
            ${
              animated[2]
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-10 md:translate-y-20 opacity-0 scale-90"
            }
            hover:scale-105 hover:shadow-xl
          `}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">
              {Math.floor(counts[2])}+
            </h3>
            <p className="text-xs md:text-lg font-bold text-secondary opacity-80">
              Recruiting Companies
            </p>
          </div>

          {/* Placement Assistance */}
          <div
            className={`
            bg-white shadow-lg border border-blue-100 
            p-4 md:p-8 rounded-xl 
            transition-all duration-700 transform
            flex flex-col justify-center items-center
            ${
              animated[3]
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-10 md:translate-x-20 opacity-0 scale-90"
            }
            hover:scale-105 hover:shadow-xl
          `}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">
              {Math.floor(counts[3])}%
            </h3>
            <p className="text-xs md:text-lg font-bold text-secondary opacity-80">
              Placement Assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}