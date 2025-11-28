"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function EventsSection() {
  const [paused, setPaused] = useState(false);

  const events = [
    {
      img: "/events/ArshGoyal.JPG",
      title: "Guest Lecture by Arsh Goyal",
      description:
        "An inspiring session with Arsh Goyal, sharing real-world tech insights and industry experience.",
    },
    {
      img: "/events/BParak.jpg",
      title: "Bharat Parakrama",
      description:
        "A celebration of patriotism and valor with vibrant cultural performances and student participation.",
    },
    {
      img: "/events/EngineeringInduction.jpg",
      title: "Engineering Induction Program",
      description:
        "Welcoming the new engineering batch with orientation, team-building, and innovation showcases.",
    },
    {
      img: "/events/gusto.jpg",
      title: "Gusto – Annual Tech Fest",
      description:
        "A thrilling fest of technology, creativity, and innovation featuring workshops and competitions.",
    },
    {
      img: "/events/IGIIRP.JPG",
      title: "Indira Global Industrial Research Program",
      description:
        "Encouraging collaboration between academia and industry for impactful research and innovation.",
    },
    {
      img: "/events/MBAInduction.jpg",
      title: "MBA Induction Program",
      description:
        "The beginning of the management journey with insights from corporate leaders and alumni.",
    },
    {
      img: "/events/Navratri.JPG",
      title: "Navratri Celebration",
      description:
        "A grand cultural evening filled with Garba, music, and colorful traditional festivities.",
    },
    {
      img: "/events/SportsComplex.JPG",
      title: "ICEM Sports Complex",
      description:
        "A flagship event connecting visionaries, innovators, and learners from diverse industries.",
    },
  ];

  // 👇 Pause when switching tab
  useEffect(() => {
    const handleVisibility = () => {
      setPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <section className="w-full  bg-gray-50 py-10 sm:py-16 overflow-hidden">
      <h2 className="text-xl sm:text-3xl font-bold text-center text-secondary mb-10">
        Academic Conferences & Campus Events
      </h2>

      <div className="relative w-full overflow-visible group">
        <div
          className={`flex animate-marquee space-x-6 px-6 ${
            paused ? "paused" : ""
          } sm:group-hover:paused`}
        >
          {[...events, ...events].map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100"
            >
              <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-64 rounded-t-xl overflow-hidden">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-1">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation + pause class */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .paused {
          animation-play-state: paused !important;
        }

        .group-hover\:paused:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
