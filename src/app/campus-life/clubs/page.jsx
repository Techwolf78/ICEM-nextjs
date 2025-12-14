"use client";

import React from "react";
import Image from "next/image";
import {
  Brain,
  Code,
  Mic,
  Users,
  Zap,
  Cog,
  Cpu,
} from "lucide-react";

const clubIcons = {
  "Quanti Club": Brain,
  CodeVerse: Code,
  "Friday Tech Talks": Mic,
  "ICONS Students Club": Users,
  AgentBlazer: Zap,
  "SAE Collegiate Club": Cog,
  "Sentient Labs": Cpu,
};

export default function ClubsAndSocieties() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <div className="relative w-full h-80 md:h-96 lg:h-[65vh] overflow-hidden">
        <Image
          src="/campuslife/clubs/ClubBanner.webp"
          alt="Clubs and Societies Banner"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {/* -------------------- QUANTI CLUB -------------------- */}
          <ClubSection
            title="Quanti Club"
            icon={clubIcons["Quanti Club"]}
            image="/campuslife/clubs/quanticlub.webp"
            intro="Quanti Club is a premier student-driven initiative dedicated to fostering analytical thinking and quantitative problem-solving skills. The club serves as a platform for students to explore the fascinating intersection of logic, mathematics, and real-world applications."
            details={[
              { label: "Parent Department", value: "Department of Science & Humanities" },
              { label: "Faculty Coordinators", value: "Mr. Raghunandan Kale, Mr. Swapnil Chaudhari" },
            ]}
            vision="To create a community of innovative thinkers who use quantitative analysis to solve complex challenges."
            mission="To develop strong analytical capabilities among students through workshops, competitions, and collaborative projects that bridge theoretical concepts with practical applications."
            objectives={[
              "Enhance logical reasoning and mathematical modelling skills",
              "Organize regular workshops on data analysis and statistical tools",
              "Prepare students for national-level quantitative aptitude tests",
              "Foster interdisciplinary research and projects",
            ]}
          />

          {/* -------------------- CODEVERSE CLUB -------------------- */}
          <ClubSection
            title="CodeVerse"
            icon={clubIcons.CodeVerse}
            image="/campuslife/clubs/codeverse.webp"
            intro="CodeVerse represents the epicentre of programming excellence and digital innovation at our institution. This dynamic club empowers students to transform creative ideas into functional code and cutting-edge technological solutions."
            details={[
              { label: "Parent Department", value: "Department of Computer Engineering" },
              { label: "Faculty Coordinator", value: "Mr. Yadnesh Khotre" },
            ]}
            vision="To establish a thriving ecosystem of skilled programmers and innovators who drive technological advancement."
            mission="To provide a collaborative environment where students can enhance their coding abilities, work on real-world projects, and stay updated with emerging technologies."
            objectives={[
              "Conduct regular coding competitions and hackathons",
              "Organize workshops on latest programming languages and frameworks",
              "Facilitate collaborative project development & open-source contributions",
              "Bridge the gap between academic learning and industry requirements",
            ]}
          />

          {/* -------------------- FRIDAY TECH TALKS -------------------- */}
          <ClubSection
            title="Friday Tech Talks"
            icon={clubIcons["Friday Tech Talks"]}
            image="/placeholder.webp"
            intro="The Friday Tech Talks Club under the Department of Artificial Intelligence & Data Science is a student-driven platform designed to bridge the gap between academia and real-world industry practices. The club hosts weekly podcast-style sessions with industry professionals, entrepreneurs, and AI community leaders, offering students valuable insights into the evolving tech landscape."
            details={[
              { label: "Parent Department", value: "Artificial Intelligence & Data Science" },
              { label: "Faculty Coordinator", value: "Prof. Pallavi Chavan" },
              { label: "Student Coordinator", value: "Soham Kate (TE)" },
              { label: "Club Strength", value: "55 Active Members" },
            ]}
            vision="To make Friday Tech Talks a hub of inspiration and knowledge sharing, enabling students to learn directly from real innovators shaping the technology of tomorrow."
            objectives={[
              "Create a platform for students to interact with industry experts",
              "Enhance communication, hosting, and organizational skills",
              "Discuss emerging technologies in AI, Data Science, and Software",
              "Encourage curiosity, collaboration, and professional networking",
            ]}
            activities={[
              "Launch of Friday Tech Talks – AI/Tech Industry Interaction Series",
              "Guest Session – \"AI for Everyone: From Idea to Impact\"",
              "Interactive Q&A and student networking sessions",
            ]}
          />

          {/* -------------------- ICONS STUDENTS CLUB -------------------- */}
          <ClubSection
            title="ICONS Students Club"
            icon={clubIcons["ICONS Students Club"]}
            image="/placeholder.webp"
            intro="ICONS is the official Computer Engineering student club focused on promoting creativity, leadership, and technical excellence. The club supports students in exploring interests beyond academics through workshops, competitions, community initiatives, and cultural events."
            details={[
              { label: "Parent Department", value: "Computer Engineering" },
              { label: "Faculty Coordinator", value: "Prof. Dipali Junankar" },
              { label: "Student Coordinator", value: "—" },
              { label: "Club Strength", value: "400+ Members" },
            ]}
            objectives={[
              "Develop leadership, teamwork, and communication skills",
              "Promote peer learning and collaborative projects",
              "Encourage research and real-world technical innovation",
              "Organize social and cultural activities for holistic development",
            ]}
            activities={[
              "Tree Plantation – 05/09/25",
              "Teachers’ Day Celebration – 05/09/25",
              "Poster Presentation of B.E. Projects – 03/10/25",
              "Minor Project Hackathon for SY – 08/10/25",
              "Felicitation of ICONS team members on World Students' Day – 15/10/25",
            ]}
          />

          {/* -------------------- AGENTBLAZER -------------------- */}
          <ClubSection
            title="AgentBlazer"
            icon={clubIcons.AgentBlazer}
            image="/placeholder.webp"
            intro="AgentBlazer is a Salesforce-supported student club under the Department of Artificial Intelligence & Data Science. The club focuses on CRM, cloud computing, and AI-powered enterprise solutions, encouraging hands-on learning through Salesforce Trailhead and industry-aligned skill development."
            details={[
              { label: "Parent Department", value: "Artificial Intelligence & Data Science" },
              { label: "Faculty Coordinator", value: "Prof. Deepa Padwal" },
              { label: "Student Coordinator", value: "Madhura Raut (SY)" },
              { label: "Club Strength", value: "70 Members" },
            ]}
            vision="To strengthen industry–academia collaboration through Salesforce’s CSR initiatives and its global partner ecosystem."
            objectives={[
              "Introduce students to Salesforce technologies and certifications",
              "Promote peer learning through Trailhead quests and guided projects",
              "Organize hackathons, workshops, and expert-led tech talks",
              "Align learning with TAE-3 certifications and capstone project goals",
            ]}
            activities={[
              "Trailhead Learning Challenges (Monthly)",
              "Coding Levels – Champion, Innovator, Legend",
            ]}
          />

          {/* -------------------- SAE COLLEGIATE CLUB -------------------- */}
          <ClubSection
            title="SAE Collegiate Club"
            icon={clubIcons["SAE Collegiate Club"]}
            image="/placeholder.webp"
            intro="The SAE Collegiate Club provides students with hands-on automotive and mechanical engineering experience through competitions, workshops, expert sessions, and industrial visits. It empowers students to design, innovate, and compete at national-level SAE events."
            details={[
              { label: "Parent Department", value: "Mechanical Engineering" },
              { label: "Faculty Coordinators", value: "Prof. S.B. Chopade, Prof. Vishal Meshram" },
              { label: "Student Coordinator", value: "—" },
              { label: "Club Strength", value: "60 Members" },
            ]}
            objectives={[
              "Prepare students for SAE Supra, Baja, and Go-Kart competitions",
              "Organize technical workshops and design-focused sessions",
              "Conduct industrial visits for real-world mechanical exposure",
              "Develop teamwork, leadership, and project management skills",
            ]}
            activities={[
              "Industry Visit to Awate Auto Pvt. Ltd., Wakad – 25/08/1985",
              "Inauguration Ceremony – 16/09/2025",
              "SAE Supra Kickstart Workshop",
              "Expert Session on Product Validation by Fluid Control Pune – 01/09/2025",
              "Hands-on SolidWorks Session – 11/10/2025",
              "Lectures on Basics of Automobile Engineering – 18/09/25 to 23/09/25",
            ]}
          />

          {/* -------------------- SENTIENT LABS -------------------- */}
          <ClubSection
            title="Sentient Labs"
            icon={clubIcons["Sentient Labs"]}
            image="/placeholder.webp"
            intro="Sentient Labs is a student-driven community centered around Artificial Intelligence, Machine Learning, and Data Science. The club focuses on hands-on experimentation, coding challenges, real-world technical projects, and research-based learning that strengthens core AI/ML fundamentals."
            details={[
              { label: "Parent Department", value: "Artificial Intelligence & Data Science" },
              { label: "Faculty Coordinator", value: "Prof. Monika Patil" },
              { label: "Student Coordinator", value: "Nilay Sharma (BE)" },
              { label: "Club Strength", value: "70 Members" },
            ]}
            vision="To make Sentient Labs the heartbeat of innovation at ICEM."
            objectives={[
              "Build strong fundamentals in AI, ML, and Data Science",
              "Undertake real-world research and technical projects",
              "Encourage experimentation and innovative problem solving",
              "Conduct workshops, quizzes, code sprints, and tool deep-dives",
              "Prepare students for hackathons and national-level competitions",
            ]}
            activities={[
              "Inauguration of Sentient Labs – 15/10/2025",
              "Icebreaker Activity – \"Two Truths & One Lie: AI Edition\"",
            ]}
          />
        </div>
      </main>
    </div>
  );
}

function ClubSection({
  title,
  icon: Icon,
  image,
  intro,
  details,
  vision,
  mission,
  objectives,
  activities,
}) {
  return (
    <section className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden group">
      <div className="p-6 md:p-8 lg:p-10">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-secondary rounded-xl text-white shadow-md">
            <Icon size={28} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
        </div>

        {/* IMAGE */}
        <div className="relative rounded-xl overflow-hidden shadow-md mb-6 group-hover:shadow-lg transition-shadow">
          <Image
            src={image}
            alt={`${title} Club`}
            width={1200}
            height={600}
            className="object-cover w-full h-48 md:h-64 lg:h-80"
            unoptimized
          />
        </div>

        {/* INTRO */}
        <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
          {intro}
        </p>

        {/* DETAILS */}
        {details && details.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-secondary mb-3">Details</h3>
            <div className="grid gap-2 text-gray-700">
              {details.map((detail, index) => (
                <p key={index}>
                  <span className="font-medium">{detail.label}:</span> {detail.value}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* VISION */}
        {vision && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-secondary mb-2">Vision</h3>
            <p className="text-gray-700 leading-relaxed">{vision}</p>
          </div>
        )}

        {/* MISSION */}
        {mission && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-secondary mb-2">Mission</h3>
            <p className="text-gray-700 leading-relaxed">{mission}</p>
          </div>
        )}

        {/* OBJECTIVES */}
        {objectives && objectives.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-secondary mb-3">Objectives</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
              {objectives.map((obj, index) => (
                <li key={index} className="leading-relaxed">{obj}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ACTIVITIES */}
        {activities && activities.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-3">Activities</h3>
            <ul className="space-y-2 text-gray-700">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
