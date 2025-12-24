"use client";
import { useState } from "react";
import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";

export default function Examination() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const ExamCommittee = "/ExamCommittee.pdf";
  const ExamFees = "/ExamFees.pdf";

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ================= HERO BANNER ================= */}
      {/* <div className="w-full h-auto relative">
        <Image
          src="/Facilities/BannerOverviewPage.webp"
          alt="Examination at ICEM"
          className="w-full h-full object-cover"
          width={1700}
          height={600}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Examination Section
          </h1>
        </div>
      </div> */}

      {/* ================= MAIN CONTENT (CENTERED WITH MAX WIDTH) ================= */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 py-4 md:py-8">
          {/* ===== Examination System ===== */}
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4 md:mb-6">
              Examination & Evaluation System
            </h2>

            <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
              The Examination Department at Indira College of Engineering and
              Management (ICEM) ensures a fair, transparent, and efficient
              evaluation process in accordance with Savitribai Phule Pune
              University guidelines. Our examination system is designed to
              assess students' academic performance comprehensively while
              maintaining the highest standards of integrity.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
              The department manages all aspects of examinations including
              scheduling, hall ticket issuance, answer sheet evaluation, result
              declaration, and grade card distribution. We follow a systematic
              approach to ensure timely completion of all examination-related
              processes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
              Students can access their examination schedules, download hall
              tickets, check results, and apply for revaluation through our
              online portal. The examination committee works diligently to
              address any concerns and ensure a smooth examination experience
              for all students.
            </p>

            <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
              Regular internal assessments, practical examinations, and
              semester-end theory examinations are conducted as per the academic
              calendar. The evaluation process includes both internal and
              external examiners to maintain objectivity and fairness.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The examination system at ICEM is continuously improved based on
              feedback from students, faculty, and industry requirements to
              ensure it remains relevant and effective in measuring student
              learning outcomes.
            </p>
          </div>

          {/* ===== DOCUMENTS + ACCORDION ===== */}
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-md mb-6 md:mb-12">
            <h3 className="mt-2 md:mt-4 text-2xl font-bold mb-4 md:mb-6">
              Examination Documents & Resources
            </h3>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
              {[
                {
                  title: "Revaluation & Verification Process",
                  description: (
                    <div className="space-y-2 md:space-y-4 text-sm leading-relaxed text-gray-700">
                      <p>
                        After the declaration of results, students can apply for
                        revaluation through their ERP login by paying the
                        prescribed revaluation and photocopy fees.
                      </p>

                      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-3 text-gray-800 text-sm">
                        <p className="font-semibold">Important Note:</p>
                        The marks obtained after revaluation will be treated as
                        final.
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Examination Fee Structure 2025-26",
                  pdf: ExamFees,
                  description:
                    "Complete fee structure for various examinations including regular, backlog, and improvement examinations.",
                },
                {
                  title: "Examination Committee (2025-26)",
                  pdf: ExamCommittee,
                  description:
                    "The Examination Committee is responsible for coordinating all examination activities, ensuring proper conduct of theory and practical exams, maintaining confidentiality, and overseeing smooth execution of evaluation and result processes.",
                },
                {
                  title: "Controller & Examination Officers",
                  description: (
                    <div className="space-y-6 text-sm leading-relaxed text-gray-700">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Prof. Meenakshi Patil
                        </h4>
                        <p>Controller of Examination</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Prof. Mani Shankar Pandey
                        </h4>
                        <p>Deputy Controller of Examination</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Mr. Somnath Bhote
                        </h4>
                        <p>Examination Officer</p>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Examination Timetable",
                  description: (
                    <div className="text-gray-800 text-sm leading-relaxed space-y-6">
                      {/* UG */}
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Undergraduate Programs
                        </h4>

                        <ul className="list-decimal ml-6 space-y-2">
                          <li>
                            <a
                              href="/exam/FY.BTech._2025-PATTERN_ENDSEM EXAM-TIMETABLE-FOR-NOV_DEC 2025.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              FY B.Tech Endsemester Examination Timetable –
                              Nov/Dec 2025
                            </a>
                          </li>

                          <li>
                            <a
                              href="/exam/FY Integrated MBA _BBA2025 PATTERN_ ENDSEM EXAM TIMETABLE FOR NOV-DEC-2025.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              FY IMBA / BBA Endsemester Examination Timetable –
                              Nov/Dec 2025
                            </a>
                          </li>

                          <li>
                            <a
                              href="/exam/FY Integrated MCA _BCA _2025 PATTERN_ ENDSEM EXAM TIMETABLE FOR NOV-DEC-2025.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              FY IMCA / BCA Endsemester Examination Timetable –
                              Nov/Dec 2025
                            </a>
                          </li>

                          <li>
                            <a
                              href="/exam/SYBTECH25.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              SY B.Tech Endsemester Examination Timetable –
                              Nov/Dec 2025
                            </a>
                          </li>

                          <li>
                            <a
                              href="/exam/SYBBA25.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              SY IMBA / BBA Endsemester Examination Timetable –
                              Nov/Dec 2025
                            </a>
                          </li>

                          <li>
                            <a
                              href="/exam/SYBCA.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              SY IMCA / BCA Endsemester Examination Timetable –
                              Nov/Dec 2025
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* PG */}
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Postgraduate Programs
                        </h4>

                        <ul className="list-decimal ml-6 space-y-2">
                          <li>
                            <a
                              href="/exam/FY.MCA._2025-PATTERN_ENDSEM EXAM-TIMETABLE-FOR-NOV-DEC 2025.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              FY MCA Endsemester Examination Timetable – Nov/Dec
                              2025
                            </a>
                          </li>
                          <li>
                            <a
                              href="/exam/FY.MTech._2024-PATTERN_ENDSEM EXAM-TIMETABLE-FOR-NOV_DEC 2025.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              FY MTech Endsemester Examination Timetable –
                              Nov/Dec 2025
                            </a>
                          </li>
                          <li>
                            <a
                              href="/exam/FY.MBA. _2024  PATTERN_ ENDSEM EXAM TIMETABLE FOR NOV-DEC-2025.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              FY MBA Endsemester Examination Timetable – Nov/Dec
                              2025
                            </a>
                          </li>
                          <li>
                            <a
                              href="/exam/SYMBA25.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              SY MBA Endsemester Examination Timetable – Nov/Dec
                              2025
                            </a>
                          </li>

                          <li>
                            <a
                              href="/exam/SYMCA25.pdf"
                              target="_blank"
                              className="text-secondary hover:underline"
                            >
                              SY MCA Endsemester Examination Timetable – Nov/Dec
                              2025
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Notices",
                  description: (
                    <div className="text-gray-800 text-sm leading-relaxed space-y-6">
                      <h4 className="font-semibold text-lg mb-2">Examination Notices</h4>
                      <ul className="list-decimal ml-6 space-y-2">
                        <li>
                          <a
                            href="/exam/21_EXAM Form Noties FY B.TECH_FY MCA_FY MBAINT_FYMCAINT 2024 pattern.pdf"
                            target="_blank"
                            className="text-secondary hover:underline"
                          >
                            FY B.TECH / FY MCA / FY MBA (INT) / FY MCA (INT) 2024 Pattern Exam Notice
                          </a>
                        </li>
                        <li>
                          <a
                            href="/exam/22_EXAM Form Noties FY _MBA 2024 pattern.pdf"
                            target="_blank"
                            className="text-secondary hover:underline"
                          >
                            FY MBA 2024 Pattern Exam Notice
                          </a>
                        </li>
                      </ul>
                    </div>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="overflow-hidden">
                  {/* ===== ACCORDION HEADER ===== */}
                  <div
                    onClick={() =>
                      setActiveFAQ(activeFAQ === index ? null : index)
                    }
                    className="flex justify-between items-center w-full px-2 md:px-4 py-2 md:py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900 underline underline-offset-2">
                      {item.title}
                    </span>
                    <span className="text-xl font-bold text-gray-700">
                      {activeFAQ === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* ===== ACCORDION CONTENT ===== */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeFAQ === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-4 py-2 md:px-6 md:py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed">
                      {typeof item.description === "string" ? (
                        <>
                          <p className="mb-3">{item.description}</p>
                          {item.pdf && (
                            <a
                              href={item.pdf}
                              target="_blank"
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
          </div>

          {/* ===== CONTACT BOX ===== */}
          <div className="bg-green-50 p-2 md:p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2 md:mb-4">
              For examination-related queries, contact our examination section
              during office hours.
            </h4>
            <ul className="text-sm text-green-700 space-y-2 md:space-y-3">
              <li className="flex gap-4 items-center">
                <Mail /> exam@indiraicem.ac.in
              </li>
              <li className="flex gap-4 items-center">
                <Phone /> 02114 – 661529
              </li>
              <li className="flex gap-4 items-center">
                <Clock /> 10:00 AM – 5:00 PM (Mon–Sat)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
