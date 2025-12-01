"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { activities } from "@/static/campuslife/nss";

function NationalServiceScheme() {
  const [openIndex, setOpenIndex] = useState(null);

  const bannerImg = "/campuslife/nssbanner.webp"; // put in public folder

  return (
    <div className="max w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={bannerImg}
          alt="ICEM Campus"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-5 px-6">
        {/* Left Section */}
        <div className="w-full bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About National Service Scheme (NSS)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            NSS has been introduced at <b>Savitribai Phule Pune University</b>{" "}
            since 1969 as part of the academic programs. The overall objective
            is educational, and service to the community is the activity through
            which the objective is achieved.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <b>National Service Scheme (NSS)</b> helps students to cater to the
            needs of the community, develop social responsibility, and
            communicate effectively.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Objectives of NSS
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              Develop social sensitivity, moral values, and professional ethics.
            </li>
            <li>
              Arrange workshops on social issues, ethics, and moral values.
            </li>
            <li>
              Organize social service groups, clubs, and outdoor field
              activities.
            </li>
          </ul>

          {/* NSS Activities Section */}
          <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">
            NSS Activities
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {activities.map((act, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="relative w-36 h-28 bg-gray-200 rounded-md flex items-center justify-center text-gray-600 text-sm">
                  <Image
                    src={act.img}
                    alt={act.title}
                    fill
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {act.title}
                  </h4>
                  <p className="text-sm text-gray-500">{act.date}</p>
                  <p className="text-gray-700 mt-2">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
      </div>
    </div>
  );
}

export default NationalServiceScheme;
