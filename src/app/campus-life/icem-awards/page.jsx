"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const IcemAwards = () => {
  const router = useRouter();

  // Images are in /public folder
  const bannerImg = "/BannerOverviewPage.jpg";
  const placeholderImg = "/award-placeholder.jpg";

  const awards = [
    {
      id: 1,
      title: "Best Academia Industry Alliance Award",
      date: "25th April, 2025",
      image: placeholderImg,
      shortDescription:
        "Indira College of Engineering and Management received 'Best Academia Industry Alliance Award' by Education World at The Grand, New Delhi for AY 2025-26.",
    },
    {
      id: 2,
      title: "Innovation and Excellence Awards 2022",
      date: "26th March, 2022",
      image: placeholderImg,
      shortDescription:
        "Indira Innovation Excellence Awards honored leading innovators and professionals under the theme ‘Innovate to Excel’.",
    },
    {
      id: 3,
      title: "International Innovation Summit & HR Awards 2018 (3i)",
      date: "2018",
      image: placeholderImg,
      shortDescription:
        "11th Indira International Innovation Summit celebrated innovation and entrepreneurship through student-industry interaction and HR awards.",
    },
    {
      id: 4,
      title: "Indira Engineering and Architecture Excellence Awards 2017",
      date: "18th January, 2017",
      image: placeholderImg,
      shortDescription:
        "10th Indira Engineering & Architecture Awards celebrated a decade of excellence, graced by Lt. Gen. A.K. Singh and a live concert by Badshah.",
    },
    {
      id: 5,
      title: "9th 3i Summit & HR Excellence Awards 2016",
      date: "15th January, 2016",
      image: placeholderImg,
      shortDescription:
        "The 9th Indira International Innovation Summit explored 'Innovating in Digital India' to foster creativity, entrepreneurship, and academia linkages.",
    },
    {
      id: 6,
      title:
        "8th International Innovation Summit and HR Excellence Awards 2015",
      date: "23rd January, 2015",
      image: placeholderImg,
      shortDescription:
        "Under the theme ‘Youth, Innovation and Entrepreneurship’, the 8th Summit emphasized innovation as key to national growth.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* ===== Banner Section ===== */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={bannerImg}
          alt="Awards Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Awards & Achievements
          </h1>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-secondary mb-10 text-center">
          Awards @ Indira College of Engineering and Management
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {awards.map((award) => (
            <div
              key={award.id}
              onClick={() =>
                router.push(`/campus-life/icem-awards/${award.id}`)
              }
              className="bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-200 cursor-pointer transition-transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-secondary hover:text-primary transition-colors">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {award.shortDescription}
                </p>
                <p className="text-xs text-tertiary mt-3 font-medium">
                  {award.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IcemAwards;
