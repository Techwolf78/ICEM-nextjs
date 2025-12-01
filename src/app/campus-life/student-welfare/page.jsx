import React from "react";
import Image from "next/image";
import IIC from "@/components/CampusLife/IIC";
import Sidebar from "@/components/Sidebar";
import StudentWelfare from "@/components/CampusLife/StudentWelfare";
import IcemStudentCouncil from "@/components/CampusLife/IcemStudentCouncil";

{/* this page consists of Student Welfare, IIC, and Student Council sections */}

export default function StudentWelfarePage() {
  return (
    <div className="w-full mx-auto bg-white text-gray-800">
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* Main Content */}
          <div className="py-6 ">
            <section id="student-welfare">
              <StudentWelfare />
            </section>
            <section id="iic" className="scroll-mt-[110px] scroll-smooth py-6">
              <IIC />
            </section>

            <section
              id="student-council"
              className="scroll-mt-[110px] scroll-smooth py-6"
            >
              <IcemStudentCouncil />
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
