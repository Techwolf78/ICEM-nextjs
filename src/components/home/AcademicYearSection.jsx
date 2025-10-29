"use client";

import React from "react";
import ProgramList from "./ProgramList";
import ApplyForm from "./ApplyForm";

const AcademicYearSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-10">
        <ProgramList />
        <ApplyForm />
      </div>
    </div>
  );
};

export default AcademicYearSection;
