"use client";

import React from "react";
import ProgramList from "./ProgramList";
import AcademicYearSectionForm from "./AcademicYearSectionForm";

const AcademicYearSection = () => {
  return (
    <section className="bg-gray-50 py-4  md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-4 md:gap-12  items-start">
          {/* LEFT: Program List */}
          <div className="w-full order-2 lg:order-1">
            <ProgramList />
          </div>

          {/* RIGHT: Apply Form 
             - sticky top-24: Makes the form float on desktop
             - order-1: On Mobile, form comes FIRST (conversion priority)
          */}
          <div className="w-full order-1 lg:order-2 lg:sticky lg:top-24 z-10 h-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full">
              <AcademicYearSectionForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicYearSection;
