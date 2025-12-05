"use client";

import Image from "next/image";
import React from "react";

// Static data moved outside component
const events = [
  {
    img: "/events/ArshGoyal.webp",
    title: "Guest Lecture by Arsh Goyal",
    description:
      "An inspiring session with Arsh Goyal, sharing real-world tech insights.",
  },
  {
    img: "/events/BParak.webp",
    title: "Bharat Parakrama",
    description:
      "A celebration of patriotism and valor with vibrant cultural performances.",
  },
  {
    img: "/events/EngineeringInduction.webp",
    title: "Engineering Induction Program",
    description:
      "Welcoming the new engineering batch with orientation and team-building.",
  },
  {
    img: "/events/gusto.webp",
    title: "Gusto – Annual Tech Fest",
    description: "A thrilling fest of technology, creativity, and innovation.",
  },
  {
    img: "/events/IGIIRP.webp",
    title: "Indira Global Industrial Research",
    description:
      "Encouraging collaboration between academia and industry for impactful research.",
  },
  {
    img: "/events/MBAInduction.webp",
    title: "MBA Induction Program",
    description:
      "The beginning of the management journey with insights from corporate leaders.",
  },
  {
    img: "/events/Navratri.webp",
    title: "Navratri Celebration",
    description:
      "A grand cultural evening filled with Garba, music, and colorful festivities.",
  },
  {
    img: "/events/SportsComplex.webp",
    title: "ICEM Sports Complex",
    description:
      "A flagship event connecting visionaries, innovators, and learners.",
  },
];

export default function EventsSection() {
  const marqueeList = [...events, ...events, ...events];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-secondary">
          Academic Conferences & Campus Events
        </h2>
        <p className="text-center text-gray-500 mt-2 text-sm sm:text-base">
          Glimpses of life happening at our campus
        </p>
      </div>

      <div className="relative w-full overflow-hidden group py-5">
        <div className="flex animate-marquee space-x-6 w-max hover:[animation-play-state:paused] will-change-transform backface-invisible">
          {marqueeList.map((event, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[260px] sm:w-[320px] md:w-[360px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative w-full h-40 sm:h-48 md:h-56">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 360px"
                  className="object-cover"
                  priority={index < 5}
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-800 text-base mb-2 line-clamp-1">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.33%, 0, 0);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .backface-invisible {
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </section>
  );
}
