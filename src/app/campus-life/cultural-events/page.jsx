"use client";

import React from "react";
import Image from "next/image";
import CulturalEvents from "@/components/CampusLife/CulturalEvents";

/**
 * Render the Cultural Activities page with a full-width banner and main content area.
 *
 * The component displays a responsive banner image at the top and a centered layout
 * that hosts the CulturalEvents content.
 *
 * @returns {JSX.Element} A React element containing the Cultural Activities page layout.
 */
export default function CulturalActivitiesPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-auto relative">
        <Image
          src="/banners/bannercultural.webp"
          alt="Cultural Activities"
          height={1080}
          width={1920}
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
