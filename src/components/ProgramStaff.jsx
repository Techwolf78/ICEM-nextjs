"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const formatStaffValue = (value) => {
  if (!value) return "";
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object") {
    return Object.entries(value)
      .map(([key, item]) => `${key}: ${item}`)
      .join(", ");
  }
  return value;
};

export default function ProgramStaff({ staffData }) {
  if (!staffData || staffData.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No staff information available for this department.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
      {staffData.map((staff, index) => (
        <motion.div
          key={staff.id || index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-md p-4 border border-slate-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-28 overflow-hidden rounded-lg shadow-sm bg-gray-100">
                {staff.image ? (
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    width={80}
                    height={112}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/10 text-secondary">
                    <span className="text-xl font-bold">
                      {staff.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-lg text-slate-800 mb-1 truncate">
                {staff.name}
              </h4>
              <p className="text-primary font-semibold text-sm mb-2 leading-tight">
                {staff.designation}
              </p>
              <div className="space-y-1 text-xs text-gray-700">
                <p>
                  <strong className="text-slate-900">Department:</strong> {staff.department}
                </p>
                <p>
                  <strong className="text-slate-900">Qualification:</strong> {staff.qualification}
                </p>
                {staff.subject && (
                  <p>
                    <strong className="text-slate-900">Subject:</strong> {staff.subject}
                  </p>
                )}
                {staff.areaOfInterest && (
                  <p>
                    <strong className="text-slate-900">Area of Interest:</strong>{" "}
                    {formatStaffValue(staff.areaOfInterest)}
                  </p>
                )}
                {staff.experience && (
                  <p>
                    <strong className="text-slate-900">Experience:</strong>{" "}
                    {formatStaffValue(staff.experience)}
                  </p>
                )}
                {staff.researchPapers && (
                  <p>
                    <strong className="text-slate-900">Research Papers:</strong>{" "}
                    {formatStaffValue(staff.researchPapers)}
                  </p>
                )}
                {staff.doj && (
                  <p>
                    <strong className="text-slate-900">DOJ:</strong> {staff.doj}
                  </p>
                )}
                {staff.dob && (
                  <p>
                    <strong className="text-slate-900">DOB:</strong> {staff.dob}
                  </p>
                )}
                {staff.email && (
                  <p>
                    <strong className="text-slate-900">Email:</strong>{" "}
                    <a
                      href={`mailto:${staff.email}`}
                      className="text-blue-600 hover:underline break-all"
                    >
                      {staff.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
