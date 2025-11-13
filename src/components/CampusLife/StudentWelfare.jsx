import React from "react";
import { committeeMembers } from "@/static/campuslife/sdc";
import Image from "next/image";

export default function StudentWelfare() {
  return (
    <div className="space-y-8 sm:space-y-12 ">
      {/* ================= Banner Section ================= */}
      <section className="bg-gradient-to-r from-[#278da4] via-[#1c6e96] to-[#003c84] p-8 sm:p-12  text-center text-white shadow-lg">
        <div className="max-w-5xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold">Student Development Cell (SDC)</h1>
          <h2 className="text-xl text-blue-200 font-medium">
            Fostering Holistic Growth Beyond the Classroom
          </h2>

          <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto ">
            The Student Development Cell at Indira College is the cornerstone of
            our commitment to creating well-rounded, socially conscious, and
            future-ready graduates. As the official liaison with Savitribai
            Phule Pune University's Board of Students' Development, we implement
            a dynamic framework of activities designed to nurture leadership,
            resilience, and ethical citizenship.
          </p>
        </div>
      </section>

      {/* ================= SWO Message Section ================= */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left: Image */}
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/swo.jpg"
                alt="Prof. Vijay Kumar Saini"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <p className="font-bold text-lg text-blue-900">
                Prof. Vijay Kumar Saini
              </p>
              <p className="text-gray-600 text-sm">
                Student Welfare Officer (SWO)
              </p>
            </div>
          </div>

          {/* Right: Message */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">
                Message from the Student Welfare Officer
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                The office of the{" "}
                <span className="font-semibold">
                  Student Welfare Officer (SWO)
                </span>{" "}
                at ICEM is committed to ensuring the overall development and
                well-being of our students. Beyond academics, our focus is on
                fostering a vibrant campus culture that promotes leadership,
                discipline, social awareness, and ethical values among the
                student community.
              </p>
              <p className="text-base sm:text-lg">
                Through the{" "}
                <span className="font-semibold">
                  Student Council and its committees
                </span>{" "}
                , we aim to cultivate responsibility, inclusivity,and teamwork.
                Each activity — whether academic, cultural, technical, or social
                — is designed toenhance students’ skills and strengthen their
                connection with the institution. The Student WelfareOffice also
                facilitates student participation in outreach programs, welfare
                initiatives, and civicengagement activities that contribute to
                nation-building.
              </p>
              <p className="text-base sm:text-lg">
                We believe that holistic education empowers students not only to
                excel in their chosen fields but also to become compassionate
                and responsible citizens. I encourage every student to actively
                participate in college initiatives and contribute towards making
                ICEM a center of excellence in both academics and student life.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="font-semibold text-secondary text-base">
                Warm regards,
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Mandate & Objectives ================= */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Strategic Role in Student Development
          </h2>
        </div>

        <p className="text-gray-700 text-xl leading-relaxed mb-8 max-w-4xl">
          Officially recognized by SPPU, the SDC operates with a clear mandate
          to bridge academic learning with personal and professional
          development. Our core objectives are:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Scheme Implementation",
              description:
                "To propose and effectively implement various student welfare and development schemes sanctioned by the Board of Students' Development (BSD), SPPU.",
            },
            {
              title: "Student Leadership",
              description:
                "To form and guide the Student Council in accordance with BSD guidelines, empowering students to lead and execute welfare activities.",
            },
            {
              title: "Institutional Liaison",
              description:
                "To serve as the vital link between the institute and SPPU, ensuring seamless communication and compliance with university directives.",
            },
            {
              title: "Audit & Compliance",
              description:
                "To ensure the systematic follow-up, implementation, and auditing of all approved BSD schemes for maximum impact and transparency.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6  border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Key Initiatives ================= */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Key Student Development Initiatives
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "Disaster Shield 2025: Workshop on Safety & Preparedness",
              description:
                "In collaboration with the National Disaster Response Force (NDRF), this workshop equipped students with crucial disaster management skills, emergency response techniques, and life-saving protocols through hands-on training sessions.",
            },
            {
              title: "Personality Growth & Menstrual Hygiene Seminar",
              description:
                "Featuring renowned personality development trainer Ms. Priyanka Huske, this seminar focused on personal branding skills while breaking taboos through open conversations about menstrual health and hygiene awareness.",
            },
            {
              title: "Student Council Formation & Leadership Program",
              description:
                "Established in accordance with SPPU's BSD guidelines, this initiative empowers student leaders to organize welfare activities and represent student interests while developing essential governance and management skills.",
            },
          ].map((initiative, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50  border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-blue-900">
                  {initiative.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Committee Members ================= */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100">
        <div className="space-y-2 mb-8">
         
          <h2 className="text-2xl font-bold text-gray-900">
            Student Development Cell Committee
          </h2>
        </div>

        <div className="overflow-x-auto mb-6 sm:mb-10">
          <table className="w-full border border-gray-300 text-left text-gray-800 text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">Staff Name</th>
                <th className="border border-gray-300 p-2">Department</th>
                <th className="border border-gray-300 p-2">Contact No.</th>
                <th className="border border-gray-300 p-2">Mail ID</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map(([name, dept, contact, email], index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-2">{name}</td>
                  <td className="border border-gray-300 p-2">{dept}</td>
                  <td className="border border-gray-300 p-2">{contact}</td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">
                    <a
                      href={`mailto:${email}`}
                      className="text-blue-700 hover:underline"
                    >
                      {email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
