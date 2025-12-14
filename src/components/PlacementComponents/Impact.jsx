"use client";

import { useState, useEffect, useRef } from "react";
import { FaTrophy, FaChartLine, FaBuilding, FaUserCheck } from "react-icons/fa";

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

  const stats = [
    {
      icon: <FaTrophy className="text-2xl md:text-3xl text-secondary mb-2" />,
      value: counts[0].toFixed(0),
      suffix: " LPA",
      label: "Highest Package",
      bgColor: "#E2F4F6",
    },
    {
      icon: <FaChartLine className="text-2xl md:text-3xl text-secondary mb-2" />,
      value: counts[1].toFixed(2),
      suffix: " LPA",
      label: "Average Package",
      bgColor: "#E2F4F6",
    },
    {
      icon: <FaBuilding className="text-2xl md:text-3xl text-secondary mb-2" />,
      value: Math.floor(counts[2]),
      suffix: "+",
      label: "Recruiting Companies",
      bgColor: "#E2F4F6",
    },
    {
      icon: <FaUserCheck className="text-2xl md:text-3xl text-secondary mb-2" />,
      value: Math.floor(counts[3]),
      suffix: "%",
      label: "Placement Assistance",
      bgColor: "#E2F4F6",
    },
  ];

  return (
    <section ref={sectionRef} className="pb-4 md:pb-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 leading-tight">
          Our Impact in Numbers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                border border-gray-200/50
                p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg
                transition-all duration-500 transform hover:-translate-y-1
                flex flex-col items-center justify-center text-center
                ${index === 0 || index === 3 ? 'col-span-2 lg:col-span-1' : ''}
                ${animated[index] ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
              style={{ 
                backgroundColor: stat.bgColor,
                transitionDelay: `${index * 150}ms` 
              }}
            >
              <div className="mb-3 md:mb-4" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="mb-2">
                <span className="text-3xl md:text-5xl font-bold text-gray-900 tabular-nums">
                  {stat.value}
                </span>
                <span className="text-lg md:text-xl font-semibold text-gray-700 ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
