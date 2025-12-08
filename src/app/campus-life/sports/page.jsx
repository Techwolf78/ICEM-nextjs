"use client";
import React from "react";
import Image from "next/image";
import { achievements, highlight } from "@/static/campuslife/sports";

export default function SportsRecreation() {
  const bannerImg = "/Facilities/FacilitiesSports.jpg";

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[75vh]">
        <Image
          src={bannerImg}
          alt="ICEM Sports"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main Content */}
        <div className="w-full bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About Sports & Recreation
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            At <b>ICEM</b>, we believe in the holistic development of our
            students, and sports play a vital role in shaping character,
            building teamwork, and promoting physical fitness.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our institute provides state-of-the-art sports facilities and
            encourages students to participate in various indoor and outdoor
            sports activities at university, state, and national levels.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Sports Facilities
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Well-equipped gymnasium with modern equipment</li>
            <li>Indoor sports complex for table tennis, chess, and carrom</li>
            <li>Outdoor playground for cricket, football, and athletics</li>
            <li>Basketball and volleyball courts</li>
          </ul>

          {/* Sports Infrastructure Marquee */}
          <h2 className="text-2xl font-bold text-secondary mt-10 mb-6">
            Sports Infrastructure
          </h2>

          {/* Single Marquee Image */}
          <div className="relative w-full overflow-hidden h-[50vh] mb-12 ">
            <div className="flex w-[200%] animate-smoothScroll h-full">
              {/* Image 1 */}
              <div className="relative w-full h-full flex-shrink-0">
                <Image
                  src="/sports/sportsmarque.webp"
                  alt="Sports Infrastructure"
                  fill
                  className="object-cover"
                  unoptimized={true}
                  priority
                />
              </div>

              {/* Image 2 */}
              <div className="relative w-full h-full flex-shrink-0">
                <Image
                  src="/sports/sportsmarque.webp"
                  alt="Sports Infrastructure duplicate"
                  fill
                  className="object-cover"
                  unoptimized={true}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Sports Achievements Section */}
          <h3 className="text-2xl font-semibold text-secondary mb-6">
            Sports Achievements
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col"
              >
                {/* Image Placeholder */}
                <div className=" relative w-full h-40 bg-gray-200 rounded-sm flex items-center justify-center text-gray-500 text-sm mb-4">
                  <Image
                    src={item.img || "/sports/tabletennis.webp"}
                    alt="Achievement Icon"
                    fill
                    className="object-cover rounded-sm"
                    unoptimized={true}
                  />
                </div>

                {/* Text */}
                <h4 className="text-lg font-semibold text-secondary mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Special Highlight Section */}
          <div className="sm:mt-18 sm:p-0 bg-secondary-50 rounded-xl ">
            {/* Title */}

            {/* Highlight Section */}
            <div className="relative border-2 border-gray-200 rounded-2xl p-2 sm:p-8 sm:pl-125 shadow-md  flex flex-col sm:flex-row  items-center gap-6">
              {/* Floating Image - Desktop */}
              <div className="hidden sm:block absolute -left-3 top-1/3 -translate-y-1/2 z-20">
                <Image
                  src="/sports/sachin.png"
                  alt="Arjuna Award Winner"
                  height={440}
                  width={460}
                  className="object-contain drop-shadow-lg shadow-gray-400 select-none"
                  unoptimized
                />
              </div>

              {/* Floating Image - Mobile (inline instead of absolute) */}
              <div className="sm:hidden flex justify-center mb-4">
                <Image
                  src="/sports/sachin.png"
                  alt="Arjuna Award Winner"
                  height={300}
                  width={300}
                  className="object-contain drop-shadow-lg shadow-gray-400 select-none"
                  unoptimized
                />
              </div>

              {/* Text Section */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {highlight.title}
                </h3>

                <p className="text-gray-800 leading-relaxed mb-3">
                  {highlight.description1}
                </p>

                <p className="text-gray-800 leading-relaxed">
                  {highlight.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-smoothScroll {
          animation: smoothScroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
