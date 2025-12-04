"use client";

import React from "react";
import Image from "next/image";
import ClubsAndSocietiesold from "@/components/CampusLife/ClubsAndSocieties";

export default function ClubsAndSocieties() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO BANNER */}
      <div className="relative w-full h-[65vh]">
        <Image
          src="/campuslife/clubs/ClubBanner.webp"
          alt="Clubs and Societies"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        {/* -------------------- QUANTI CLUB -------------------- */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">Quanti Club</h2>

          {/* IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow border border-gray-200 h-100 w-auto">
            <Image
              src="/campuslife/clubs/quanticlub.webp"
              alt="Quanti Club"
              fill
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            Quanti Club is a premier student-driven initiative dedicated to
            fostering analytical thinking and quantitative problem-solving
            skills. The club serves as a platform for students to explore the
            fascinating intersection of logic, mathematics, and real-world
            applications.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Parent Department:</strong> Department of Science &
              Humanities
            </p>
            <p>
              <strong>Faculty Coordinators:</strong>
            </p>
            <ul className="list-disc ml-6">
              <li>Mr. Raghunandan Kale</li>
              <li>Mr. Swapnil Chaudhari</li>
            </ul>
          </div>

          {/* VISION */}
          <h3 className="text-xl font-semibold text-secondary">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To create a community of innovative thinkers who use quantitative
            analysis to solve complex challenges.
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
            <li>
              Organize regular workshops on data analysis and statistical tools
            </li>
            <li>
              Prepare students for national-level quantitative aptitude tests
            </li>
            <li>Foster interdisciplinary research and projects</li>
          </ul>
        </section>

        {/* -------------------- CODEVERSE CLUB -------------------- */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">CodeVerse</h2>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/campuslife/clubs/codeverse.webp"
              alt="CodeVerse Club"
              width={1200}
              height={700}
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            CodeVerse represents the epicentre of programming excellence and
            digital innovation at our institution. This dynamic club empowers
            students to transform creative ideas into functional code and
            cutting-edge technological solutions.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Parent Department:</strong> Department of Computer
              Engineering
            </p>
            <p>
              <strong>Faculty Coordinator:</strong> Mr. Yadnesh Khotre
            </p>
          </div>

          {/* VISION */}
          <h3 className="text-xl font-semibold text-secondary">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To establish a thriving ecosystem of skilled programmers and
            innovators who drive technological advancement.
          </p>

          {/* MISSION */}
          <h3 className="text-xl font-semibold text-secondary">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To provide a collaborative environment where students can enhance
            their coding abilities, work on real-world projects, and stay
            updated with emerging technologies.
          </p>

          {/* OBJECTIVES */}
          <h3 className="text-xl font-semibold text-secondary">Objectives</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
            <li>Conduct regular coding competitions and hackathons</li>
            <li>
              Organize workshops on latest programming languages and frameworks
            </li>
            <li>
              Facilitate collaborative project development & open-source
              contributions
            </li>
            <li>
              Bridge the gap between academic learning and industry requirements
            </li>
          </ul>
        </section>
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">
            Friday Tech Talks
          </h2>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/placeholder.webp"
              alt="Friday Tech Talks Club"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            The Friday Tech Talks Club under the Department of Artificial
            Intelligence & Data Science is a student-driven platform designed to
            bridge the gap between academia and real-world industry practices.
            The club hosts weekly podcast-style sessions with industry
            professionals, entrepreneurs, and AI community leaders, offering
            students valuable insights into the evolving tech landscape.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Parent Department:</strong> Artificial Intelligence & Data
              Science
            </p>
            <p>
              <strong>Faculty Coordinator:</strong> Prof. Pallavi Chavan
            </p>
            <p>
              <strong>Student Coordinator:</strong> Soham Kate (TE)
            </p>
            <p>
              <strong>Club Strength:</strong> 55 Active Members
            </p>
          </div>

          {/* VISION */}
          <h3 className="text-xl font-semibold text-secondary">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To make Friday Tech Talks a hub of inspiration and knowledge
            sharing, enabling students to learn directly from real innovators
            shaping the technology of tomorrow.
          </p>

          {/* OBJECTIVES */}
          <h3 className="text-xl font-semibold text-secondary">Objectives</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
            <li>
              Create a platform for students to interact with industry experts
            </li>
            <li>Enhance communication, hosting, and organizational skills</li>
            <li>
              Discuss emerging technologies in AI, Data Science, and Software
            </li>
            <li>
              Encourage curiosity, collaboration, and professional networking
            </li>
          </ul>

          {/* ACTIVITIES */}
          <h3 className="text-xl font-semibold text-secondary">Activities</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              Launch of Friday Tech Talks – AI/Tech Industry Interaction Series
            </li>
            <li>Guest Session – "AI for Everyone: From Idea to Impact"</li>
            <li>Interactive Q&A and student networking sessions</li>
          </ul>
        </section>
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">
            ICONS Students Club
          </h2>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/placeholder.webp"
              alt="ICONS Students Club"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            ICONS is the official Computer Engineering student club focused on
            promoting creativity, leadership, and technical excellence. The club
            supports students in exploring interests beyond academics through
            workshops, competitions, community initiatives, and cultural events.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Parent Department:</strong> Computer Engineering
            </p>
            <p>
              <strong>Faculty Coordinator:</strong> Prof. Dipali Junankar
            </p>
            <p>
              <strong>Student Coordinator:</strong> —
            </p>
            <p>
              <strong>Club Strength:</strong> 400+ Members
            </p>
          </div>

          {/* OBJECTIVES */}
          <h3 className="text-xl font-semibold text-secondary">Objectives</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
            <li>Develop leadership, teamwork, and communication skills</li>
            <li>Promote peer learning and collaborative projects</li>
            <li>Encourage research and real-world technical innovation</li>
            <li>
              Organize social and cultural activities for holistic development
            </li>
          </ul>

          {/* ACTIVITIES */}
          <h3 className="text-xl font-semibold text-secondary">Activities</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Tree Plantation – 05/09/25</li>
            <li>Teachers’ Day Celebration – 05/09/25</li>
            <li>Poster Presentation of B.E. Projects – 03/10/25</li>
            <li>Minor Project Hackathon for SY – 08/10/25</li>
            <li>
              Felicitation of ICONS team members on World Students' Day –
              15/10/25
            </li>
          </ul>
        </section>
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">AgentBlazer</h2>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/placeholder.webp"
              alt="AgentBlazer Club"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            AgentBlazer is a Salesforce-supported student club under the
            Department of Artificial Intelligence & Data Science. The club
            focuses on CRM, cloud computing, and AI-powered enterprise
            solutions, encouraging hands-on learning through Salesforce
            Trailhead and industry-aligned skill development.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Parent Department:</strong> Artificial Intelligence & Data
              Science
            </p>
            <p>
              <strong>Faculty Coordinator:</strong> Prof. Deepa Padwal
            </p>
            <p>
              <strong>Student Coordinator:</strong> Madhura Raut (SY)
            </p>
            <p>
              <strong>Club Strength:</strong> 70 Members
            </p>
          </div>

          {/* VISION */}
          <h3 className="text-xl font-semibold text-secondary">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To strengthen industry–academia collaboration through Salesforce’s
            CSR initiatives and its global partner ecosystem.
          </p>

          {/* OBJECTIVES */}
          <h3 className="text-xl font-semibold text-secondary">Objectives</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
            <li>
              Introduce students to Salesforce technologies and certifications
            </li>
            <li>
              Promote peer learning through Trailhead quests and guided projects
            </li>
            <li>Organize hackathons, workshops, and expert-led tech talks</li>
            <li>
              Align learning with TAE-3 certifications and capstone project
              goals
            </li>
          </ul>

          {/* ACTIVITIES */}
          <h3 className="text-xl font-semibold text-secondary">Activities</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Trailhead Learning Challenges (Monthly)</li>
            <li>Coding Levels – Champion, Innovator, Legend</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">
            SAE Collegiate Club
          </h2>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/placeholder.webp"
              alt="SAE Collegiate Club"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            The SAE Collegiate Club provides students with hands-on automotive
            and mechanical engineering experience through competitions,
            workshops, expert sessions, and industrial visits. It empowers
            students to design, innovate, and compete at national-level SAE
            events.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Parent Department:</strong> Mechanical Engineering
            </p>
            <p>
              <strong>Faculty Coordinators:</strong> Prof. S.B. Chopade, Prof.
              Vishal Meshram
            </p>
            <p>
              <strong>Student Coordinator:</strong> —
            </p>
            <p>
              <strong>Club Strength:</strong> 60 Members
            </p>
          </div>

          {/* OBJECTIVES */}
          <h3 className="text-xl font-semibold text-secondary">Objectives</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
            <li>
              Prepare students for SAE Supra, Baja, and Go-Kart competitions
            </li>
            <li>Organize technical workshops and design-focused sessions</li>
            <li>
              Conduct industrial visits for real-world mechanical exposure
            </li>
            <li>Develop teamwork, leadership, and project management skills</li>
          </ul>

          {/* ACTIVITIES */}
          <h3 className="text-xl font-semibold text-secondary">Activities</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Industry Visit to Awate Auto Pvt. Ltd., Wakad – 25/08/1985</li>
            <li>Inauguration Ceremony – 16/09/2025</li>
            <li>SAE Supra Kickstart Workshop</li>
            <li>
              Expert Session on Product Validation by Fluid Control Pune –
              01/09/2025
            </li>
            <li>Hands-on SolidWorks Session – 11/10/2025</li>
            <li>
              Lectures on Basics of Automobile Engineering – 18/09/25 to
              23/09/25
            </li>
          </ul>
        </section>
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">
            Sentient Labs
          </h2>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow border">
            <Image
              src="/placeholder.webp"
              alt="Sentient Labs"
              width={1200}
              height={600}
              className="object-cover w-full h-64 md:h-80"
              unoptimized
            />
          </div>

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed">
            Sentient Labs is a student-driven community centered around
            Artificial Intelligence, Machine Learning, and Data Science. The
            club focuses on hands-on experimentation, coding challenges,
            real-world technical projects, and research-based learning that
            strengthens core AI/ML fundamentals.
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Parent Department:</strong> Artificial Intelligence & Data
              Science
            </p>
            <p>
              <strong>Faculty Coordinator:</strong> Prof. Monika Patil
            </p>
            <p>
              <strong>Student Coordinator:</strong> Nilay Sharma (BE)
            </p>
            <p>
              <strong>Club Strength:</strong> 70 Members
            </p>
          </div>

          {/* VISION */}
          <h3 className="text-xl font-semibold text-secondary">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To make Sentient Labs the heartbeat of innovation at ICEM.
          </p>

          {/* OBJECTIVES */}
          <h3 className="text-xl font-semibold text-secondary">Objectives</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc ml-6">
            <li>Build strong fundamentals in AI, ML, and Data Science</li>
            <li>Undertake real-world research and technical projects</li>
            <li>Encourage experimentation and innovative problem solving</li>
            <li>
              Conduct workshops, quizzes, code sprints, and tool deep-dives
            </li>
            <li>
              Prepare students for hackathons and national-level competitions
            </li>
          </ul>

          {/* ACTIVITIES */}
          <h3 className="text-xl font-semibold text-secondary">Activities</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Inauguration of Sentient Labs – 15/10/2025</li>
            <li>Icebreaker Activity – "Two Truths & One Lie: AI Edition"</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
