import React from "react";
import Image from "next/image";
import IIC from "@/components/CampusLife/IIC";
import Sidebar from "@/components/Sidebar";
import StudentWelfare from "@/components/CampusLife/StudentWelfare";
import IcemStudentCouncil from "@/components/CampusLife/IcemStudentCouncil";

{/* this page consists of Student Welfare, IIC, and Student Council sections */}

export default function StudentWelfarePage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[70vh] relative">
        <Image
          src="/campuslife/council.webp"
          alt="Student Development Cell"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {/* Page Layout */}
      <div className="max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content */}
          <div className="w-full space-y-6 px-2 py-3 m-3">
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

        </div>
      </div>
    </div>
  );
}
