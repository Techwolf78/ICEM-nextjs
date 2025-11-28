"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import CulturalEvents from "@/components/CampusLife/CulturalEvents";

export default function CulturalActivitiesPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[75vh] relative">
        <Image
          src="/cultural-events/bannercultural2.jpg"
          alt="Cultural Activities"
          fill
          style={{ objectFit: "cover" }}
          priority
          unoptimized={true}
        />
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content */}
          <div className="w-full space-y-6 px-2 py-3 m-3">
            <CulturalEvents />
          </div>

          {/* Sidebar */}
          
        </div>
      </div>
    </div>
  );
}
