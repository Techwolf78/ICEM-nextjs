"use client";

import React from "react";
import Image from "next/image";

export default function ClubsAndSocieties() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO BANNER */}
      <div className="relative w-full h-[65vh]">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Clubs and Societies"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Clubs & Societies
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-9xl mx-auto px-6 py-10 space-y-12">

        {/* -------------------- QUANTI CLUB -------------------- */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">
            Quanti Club
          </h2>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/quanti.jpg"
              alt="Quanti Club"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            Quanti Club is a premier student-driven initiative dedicated to fostering
            analytical thinking and quantitative problem-solving skills. The club
            serves as a platform for students to explore the fascinating intersection
            of logic, mathematics, and real-world applications.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p><strong>Parent Department:</strong> Department of Science & Humanities</p>
            <p><strong>Faculty Coordinators:</strong></p>
            <ul className="list-disc ml-6">
              <li>Mr. Raghunandan Kale</li>
              <li>Mr. Swapnil Chaudhari</li>
            </ul>
          </div>

          {/* VISION */}
          <h3 className="text-xl font-semibold text-secondary">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To create a community of innovative thinkers who use quantitative analysis
            to solve complex challenges.
          </p>

          {/* MISSION */}
          <h3 className="text-xl font-semibold text-secondary">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To develop strong analytical capabilities among students through
            workshops, competitions, and collaborative projects that bridge
            theoretical concepts with practical applications.
          </p>

          {/* OBJECTIVES */}
          <h3 className="text-xl font-semibold text-secondary">Objectives</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
            <li>Enhance logical reasoning and mathematical modelling skills</li>
            <li>Organize regular workshops on data analysis and statistical tools</li>
            <li>Prepare students for national-level quantitative aptitude tests</li>
            <li>Foster interdisciplinary research and projects</li>
          </ul>
        </section>

        {/* -------------------- CODEVERSE CLUB -------------------- */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">
            CodeVerse
          </h2>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/codeverse.jpg"
              alt="CodeVerse Club"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            CodeVerse represents the epicentre of programming excellence and digital
            innovation at our institution. This dynamic club empowers students to
            transform creative ideas into functional code and cutting-edge
            technological solutions.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p><strong>Parent Department:</strong> Department of Computer Engineering</p>
            <p><strong>Faculty Coordinator:</strong> Mr. Yadnesh Khotre</p>
          </div>

          {/* VISION */}
          <h3 className="text-xl font-semibold text-secondary">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To establish a thriving ecosystem of skilled programmers and innovators
            who drive technological advancement.
          </p>

          {/* MISSION */}
          <h3 className="text-xl font-semibold text-secondary">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To provide a collaborative environment where students can enhance their
            coding abilities, work on real-world projects, and stay updated with
            emerging technologies.
          </p>

          {/* OBJECTIVES */}
          <h3 className="text-xl font-semibold text-secondary">Objectives</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
            <li>Conduct regular coding competitions and hackathons</li>
            <li>Organize workshops on latest programming languages and frameworks</li>
            <li>Facilitate collaborative project development & open-source contributions</li>
            <li>Bridge the gap between academic learning and industry requirements</li>
          </ul>
        </section>

      </main>
    </div>
  );
}
