"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Cpu,
  Cog,
  BrainCircuit,
  Radio,
  BookOpen,
  Building,
  Building2,
  Laptop,
  Briefcase,
  Code2,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const ProgramList = () => {
  const [isSafari, setIsSafari] = useState(true);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
      ua.indexOf("safari") > -1 && ua.indexOf("chrome") === -1;

    if (!isSafariBrowser) {
      setIsSafari(false);
    }
  }, []);

  const programs = [
    {
      name: "Computer Engineering",
      link: "/programs/computer-engineering",
      icon: Cpu,
    },
    {
      name: "Mechanical Engineering",
      link: "/programs/mechanical-engineering",
      icon: Cog,
    },
    {
      name: "Artificial Intelligence and Data Science",
      link: "/programs/ai-ds",
      icon: BrainCircuit,
    },
    {
      name: "Electronics and Telecommunication",
      link: "/programs/entc",
      icon: Radio,
    },
    { name: "Information Technology", link: "/programs/it", icon: Laptop },
    { name: "Civil Engineering", link: "/programs/civil", icon: Building },
    {
      name: "Integrated MBA (BBA + MBA)",
      link: "/programs/imba",
      icon: Building2,
    },
    { name: "Integrated MCA (BCA + MCA)", link: "/programs/imca", icon: Code2 },
    { name: "MBA", link: "/programs/mba", icon: Briefcase },
    { name: "MCA", link: "/programs/mca", icon: Code2 },
    {
      name: "M-Tech in Mechanical Engineering",
      link: "/programs/mtech-mech",
      icon: Wrench,
    },
    {
      name: "M-Tech in Computer Science",
      link: "/programs/mtech-comp",
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-lg p-4 sm:p-8 shadow-sm border border-gray-200 h-full flex flex-col">
      <style jsx global>{`
        @keyframes paceAndFlip {
          /* 0% - 49.9%: Move Left to Right (Face Right) */
          0% {
            left: 0%;
            transform: scaleX(1);
          }
          48.9% {
            left: 85%; /* Adjust this limit if he goes too far */
            transform: scaleX(1);
          }

          /* 50%: Instant Flip to Face Left */
          50% {
            left: 85%;
            transform: scaleX(-1);
          }

          /* 50% - 99.9%: Move Right to Left (Face Left) */
          97.9% {
            left: 0%;
            transform: scaleX(-1);
          }

          /* 100%: Instant Flip back to Face Right to restart loop */
          100% {
            left: 0%;
            transform: scaleX(1);
          }
        }

        .animate-pace {
          /* Linear ensures constant speed with no easing/slowing down at edges */
          animation: paceAndFlip 15s linear infinite;
          will-change: left, transform;
        }
      `}</style>

      {/* ✅ Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        ACADEMIC <span className="text-secondary">YEAR 2026</span>
      </h2>

      {/* ✅ Program Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-5  text-gray-800 mb-4 flex-grow">
        {programs.map(({ name, link, icon: Icon }, index) => (
          <Link
            key={index}
            href={link}
            className="flex items-center gap-3 text-sm sm:text-base hover:text-primary transition-colors"
          >
            <Icon size={18} className="text-secondary" />
            <span className="hover:underline hover:text-primary">{name}</span>
          </Link>
        ))}
      </div>

      {/* ✅ Media Section */}
      <div className="mt-4 relative w-full aspect-[2/1] overflow-hidden  ">
        {isSafari ? (
          <Image
            src="/Home/academic.webp"
            alt="Academic"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover rounded-lg"
            priority
          />
        ) : (
          <div className="w-full h-full relative">
            <video
              src="/chanakya.webm"
              autoPlay
              loop
              muted
              playsInline
              className="absolute bottom-6 sm:bottom-20 h-28 sm:h-40 w-auto animate-pace object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramList;
