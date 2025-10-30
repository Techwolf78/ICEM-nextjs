"use client";
import { useState } from "react";
import Image from "next/image";

export default function Examination() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const CompBrochure = "/pdfs/BEComp.pdf";

  const rightLinks = [
    "Overview",
    "Examination Schedule",
    "Exam Forms & Fees",
    "Results & Grade Cards",
    "Revaluation Process",
    "Exam Rules & Regulations",
    "Hall Tickets",
    "Important Dates",
    "Examination Committee",
    "Contact Exam Section",
    "Academic Calendar",
    "Governance",
  ];

  const quickLinks = [
    "Download Exam Forms",
    "Exam Time Table",
    "Result Portal",
    "Revaluation Application",
    "Apply for ATKT",
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ===== Hero Banner ===== */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Examination at ICEM"
          className="w-full h-full object-cover"
          width={1700}
          height={600}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Examination System
          </h1>
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* LEFT SECTION */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Examination & Evaluation System
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Examination Department at Indira College of Engineering and
            Management (ICEM) ensures a fair, transparent, and efficient
            evaluation process in accordance with Savitribai Phule Pune
            University guidelines. Our examination system is designed to assess
            students' academic performance comprehensively while maintaining the
            highest standards of integrity.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The department manages all aspects of examinations including
            scheduling, hall ticket issuance, answer sheet evaluation, result
            declaration, and grade card distribution. We follow a systematic
            approach to ensure timely completion of all examination-related
            processes.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Students can access their examination schedules, download hall
            tickets, check results, and apply for revaluation through our online
            portal. The examination committee works diligently to address any
            concerns and ensure a smooth examination experience for all
            students.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Regular internal assessments, practical examinations, and
            semester-end theory examinations are conducted as per the academic
            calendar. The evaluation process includes both internal and external
            examiners to maintain objectivity and fairness.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The examination system at ICEM is continuously improved based on
            feedback from students, faculty, and industry requirements to ensure
            it remains relevant and effective in measuring student learning
            outcomes.
          </p>

          {/* ===== FAQ Accordion Section ===== */}
          <h3 className="mt-10 text-2xl font-bold mb-6">
            Examination Documents & Resources
          </h3>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
            {[
              {
                title: "Examination Schedule - Semester I & II",
                pdf: CompBrochure,
                description:
                  "Complete examination timetable for all undergraduate and postgraduate programs including theory and practical examinations.",
              },
              {
                title: "Examination Rules & Regulations 2024-25",
                pdf: CompBrochure,
                description:
                  "Official examination rules, code of conduct, and guidelines for students appearing for university examinations.",
              },
              {
                title: "Revaluation & Verification Process",
                pdf: CompBrochure,
                description:
                  "Detailed procedure for applying for answer sheet revaluation and verification of marks.",
              },
              {
                title: "ATKT (Allowed to Keep Term) Rules",
                pdf: CompBrochure,
                description:
                  "Guidelines and eligibility criteria for ATKT students and examination patterns.",
              },
              {
                title: "Examination Fee Structure 2024-25",
                pdf: CompBrochure,
                description:
                  "Complete fee structure for various examinations including regular, backlog, and improvement examinations.",
              },
              {
                title: "Hall Ticket Download Guidelines",
                pdf: CompBrochure,
                description:
                  "Step-by-step process for downloading hall tickets and important instructions for examination day.",
              },

              // 🔹 NEW SECTION 1: CONTROLLER OF EXAMINATION
              {
                title: "Controller & Examination Officers",
                description: (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Mrs. Meenakshi Patil
                      </h4>
                      <p className="text-sm">
                        <strong>Designation:</strong> Controller of Examination
                        <br />
                        <strong>Qualification:</strong> ME Electronics
                        Engineering, First Class. PhD (Pursuing)
                        <br />
                        <strong>Total Experience:</strong> 16 years
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Mr. Somnath Bhote
                      </h4>
                      <p className="text-sm">
                        <strong>Designation:</strong> Examination Officer
                        <br />
                        <strong>Qualification:</strong> M.A. Economics, B.Lib,
                        M.Lib
                        <br />
                        <strong>Total Experience:</strong> 14 years
                      </p>
                    </div>
                  </div>
                ),
              },

              // 🔹 NEW SECTION 2: EXAMINATION COMMITTEE
              {
                title: "Examination Committee (2024-25)",
                description: (
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100 text-gray-800">
                      <tr>
                        <th className="border px-3 py-2">Sr. No</th>
                        <th className="border px-3 py-2">Name</th>
                        <th className="border px-3 py-2">Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1", "Dr. Nilesh Uke, Principal, ICEM", "Chairman"],
                        [
                          "2",
                          "Dr. Mahesh Kakade, Director, BEE-SPPU, Pune",
                          "Member nominated by Principal, ICEM",
                        ],
                        [
                          "3",
                          "Dr. Saurabh Gupta, Dean Academics, ICEM",
                          "Vice – Chairman",
                        ],
                        [
                          "4",
                          "Mrs. Pallavi Chavan, Assistant Prof. AI & DS",
                          "Member",
                        ],
                        [
                          "5",
                          "Mrs. Ashwini Gaikwad, Assistant Prof. Mechanical",
                          "Member",
                        ],
                        ["6", "Dr. Manjusha Tomar, Asso. Prof. FE", "Member"],
                        [
                          "7",
                          "Mrs. Swetkranti Taware, Assistant Prof. Computer",
                          "Member",
                        ],
                        [
                          "8",
                          "Dr. Pravin Thorat, Assistant Prof. MBA",
                          "Member",
                        ],
                        [
                          "9",
                          "Mrs. Shreya Shennai, Assistant Prof. MCA",
                          "Member",
                        ],
                        [
                          "10",
                          "Mr. Sudhir Sawarkar, Assistant Prof. E&TC",
                          "Member",
                        ],
                        [
                          "11",
                          "Mrs. Meenakshi Patil, COE, ICEM",
                          "Member Secretary",
                        ],
                      ].map(([no, name, designation]) => (
                        <tr key={no} className="border">
                          <td className="border px-3 py-2 text-center">{no}</td>
                          <td className="border px-3 py-2">{name}</td>
                          <td className="border px-3 py-2 text-center">
                            {designation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ),
              },

              // 🔹 NEW SECTION 3: TIMETABLE EXAMINATION
              {
                title: "Timetable Examination Notices (2024-25)",
                description: (
                  <ul className="list-disc ml-6 text-sm space-y-2">
                    <li>
                      FY B.Tech 2024 Pattern Vacation Exam Timetable for Apr-May
                      2025
                    </li>
                    <li>
                      BBA MBA 2024 Pattern 15 Endsem Exam Timetable for Apr-May
                      2025
                    </li>
                    <li>
                      BCA MCA 2024 Pattern 16 Endsem Exam Timetable for Apr-May
                      2025
                    </li>
                    <li>
                      FY M.Tech 2024 Pattern Vacation Exam Timetable for Feb
                      2025
                    </li>
                    <li>
                      FY MCA 2024 Pattern Vacation Exam Timetable for Feb 2025
                    </li>
                    <li>
                      FY Integrated MCA 2024 Pattern Endsem Exam Timetable for
                      Nov-Dec 2024
                    </li>
                    <li>
                      FY MBA 2024 Pattern Endsem Exam Timetable for Nov-Dec 2024
                    </li>
                    <li>
                      FY B.Tech 2024 Pattern Endsem Exam Timetable for Nov-Dec
                      2024
                    </li>
                  </ul>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="overflow-hidden">
                {/* Accordion Header */}
                <div
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="flex justify-between items-center w-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 underline underline-offset-2">
                    {item.title}
                  </span>
                  <span className="text-xl font-bold text-gray-700">
                    {activeFAQ === index ? "−" : "+"}
                  </span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFAQ === index ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed">
                    {typeof item.description === "string" ? (
                      <>
                        <p className="mb-3">{item.description}</p>
                        {item.pdf && (
                          <a
                            href={item.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition"
                          >
                            View / Download PDF
                          </a>
                        )}
                      </>
                    ) : (
                      item.description
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Examination Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">
                Exam Timelines
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Form Submission: 15 days before exams</li>
                <li>• Hall Tickets: 7 days before exams</li>
                <li>• Results: Within 45 days of exams</li>
                <li>• Revaluation: Within 15 days of results</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">
                Important Contacts
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Exam Controller: Dr. Smitha Patil</li>
                <li>• Deputy Controller: Prof. Rajesh Kumar</li>
                <li>• Exam Section: exam@indiraicem.ac.in</li>
                <li>• Helpline: 020-12345678</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="md:w-1/3 bg-[#111] text-white p-6 rounded-xl shadow-md flex flex-col gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
              Examination Links
            </h3>
            <ul className="space-y-3 text-sm">
              {rightLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
              Quick Actions
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates Box */}
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 text-sm">
            <h4 className="font-semibold text-yellow-400 mb-2">
              Upcoming Exams
            </h4>
            <ul className="text-gray-300 leading-relaxed space-y-2">
              <li className="flex justify-between">
                <span>Winter 2024 Theory:</span>
                <span className="text-yellow-400">Dec 15-30</span>
              </li>
              <li className="flex justify-between">
                <span>Practical Exams:</span>
                <span className="text-yellow-400">Dec 10-14</span>
              </li>
              <li className="flex justify-between">
                <span>Form Last Date:</span>
                <span className="text-yellow-400">Nov 30</span>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 text-sm">
            <h4 className="font-semibold text-secondary mb-2">Exam Helpline</h4>
            <p className="text-gray-300 leading-relaxed">
              For examination-related queries, contact our examination section
              during office hours.
            </p>
            <p className="mt-3 text-secondary font-medium">
              ✉ exam@indiraicem.ac.in
            </p>
            <p className="text-secondary font-medium">📞 +91 98765 43210</p>
            <p className="text-gray-400 text-xs mt-2">
              Timing: 10:00 AM - 5:00 PM (Mon-Sat)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
