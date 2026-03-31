"use client";

import React from "react";
import Image from "next/image";
import { clubsAndSocieties } from "@/static/campuslife/clubs-and-societies";

export default function ClubsAndSocietiesold() {
  return (
    <>
    <div className="space-y-12">
      {clubsAndSocieties.map((club, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-2xl p-8 border border-gray-200"
        >
          {/* Header */}
          <div className={`flex gap-8 items-start ${club.image ? 'flex-col md:flex-row' : 'flex-col'}`}>
            
            {/* Club Photo - only if image exists */}
            {club.image && (
              <div className="w-full md:w-1/3 h-56 bg-gray-200 rounded-xl overflow-hidden">
                <Image
                  src={club.image}
                  alt={`${club.name} Club`}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Club Basic Info */}
            <div className={`${club.image ? 'flex-1' : ''} space-y-3`}>
              <h2 className="text-2xl font-bold text-secondary">{club.name}</h2>
              <p className="text-gray-600"><b>Department:</b> {club.department}</p>
              <p className="text-gray-600"><b>Faculty Coordinator:</b> {club.facultyCoordinator}</p>
              {club.studentCoordinator && (
                <p className="text-gray-600"><b>Student Coordinator:</b> {club.studentCoordinator}</p>
              )}
              <p className="text-gray-600"><b>Club Strength:</b> {club.strength} Students</p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-secondary mb-2">About the Club</h3>
            <p className="text-gray-700 leading-relaxed">{club.about}</p>

            {club.clubStrengthInfo && (
              <p className="text-gray-700 leading-relaxed mt-2">{club.clubStrengthInfo}</p>
            )}
          </div>

          {/* Objectives */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-secondary mb-2">Objectives</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {club.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          {club.vision && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-secondary mb-2">Vision</h3>
              <p className="text-gray-700 leading-relaxed">{club.vision}</p>
            </div>
          )}

          {/* Activities */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-secondary mb-2">Club Activities</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {club.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
