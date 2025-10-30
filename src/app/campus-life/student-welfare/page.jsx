import React from "react";
import Image from "next/image";
import Link from "next/link";
import IIC from "@/components/CampusLife/IIC";
import Sidebar from "@/components/Sidebar";
import StudentWelfare from "@/components/CampusLife/StudentWelfare";
import IcemStudentCouncil from "@/components/CampusLife/IcemStudentCouncil";
import InductionProgramme from "@/components/CampusLife/InductionProgramme";

export default function StudentWelfarePage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Student Development Cell"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
            Student Development Cell
          </h1>
        </div>
      </div>

      {/* Page Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-8 sm:space-y-12 lg:space-y-16">
            <section id="student-welfare">
              <StudentWelfare />
            </section>

            <section id="iic" className="scroll-mt-[110px] scroll-smooth">
              <IIC />
            </section>

            <section
              id="student-council"
              className="scroll-mt-[110px] scroll-smooth"
            >
              <IcemStudentCouncil />
            </section>
          </div>

          {/* Sidebar - Made Sticky */}
          <div className="lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
