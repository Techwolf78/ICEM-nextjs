"use client";
import React from "react";
import Image from "next/image";

export default function BannerSlider({activeSection}) {
  // ✅ Static local images
  const desktopImages = {
    Sports : "/Facilities/FacilitiesSports.jpg",
    Transport :"/Facilities/FacilitiesGymTransport.jpg",
    Canteen :"/Facilities/FacilitiesCanteen.jpg",
    Hostel : "/Facilities/FacilitiesHostel.jpg",
    Library :"/Facilities/FacilitiesLibrary.jpg",
    Gym :"/Facilities/FacilitiesGymTransport.jpg",
    "Primary Health Centre": "/Facilities/FacilitiesGymTransport.jpg",
  };
   
  const mobileImages = {
   Sports : "/Facilities/FacilitiesSports.jpg",
    Transport :"/Facilities/FacilitiesGymTransport.jpg",
    Canteen :"/Facilities/FacilitiesCanteen.jpg",
    Hostel : "/Facilities/FacilitiesHostel.jpg",
    Library :"/Facilities/FacilitiesLibrary.jpg",
    Gym :"/Facilities/FacilitiesGymTransport.jpg",
    "Primary Health Centre": "/Facilities/FacilitiesGymTransport.jpg",
  };

  return (
    <div className="relative w-full overflow-hidden bg-transparent">
      {/* ✅ Desktop Slider */}
      <div className="hidden md:block w-full overflow-hidden">
        <div className="">
              <Image
                src={desktopImages[activeSection]|| desktopImages.Sports}
                alt={`${activeSection} Facility`}
                width={1920}
                height={1080}
                className="w-full max-h-[75vh] object-contain "
                priority
                unoptimized
              />
        </div>
      </div>

      {/* ✅ Mobile Slider */}
      <div className="block md:hidden w-full">
        <div className="relative flex-shrink-0 w-full">
          <Image
            src={mobileImages[activeSection] || mobileImages.Sports}
            alt={`${activeSection} Facility`}
            width={1080}
            height={720}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* ✅ CSS Animations */}
      <style jsx>{`
        @keyframes progressFill {
          from {
            width: 0%;
            opacity: 0.8;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        .animate-progressFill {
          animation: progressFill 4.5s linear forwards;
        }
      `}</style>
    </div>
  );
}
