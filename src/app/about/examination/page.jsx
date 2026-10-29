"use client";
import { useState } from "react";
import Image from "next/image";
import { Clock, Mail, Phone, ExternalLink, Eye, FolderOpen } from "lucide-react";

// ================== WINTER 2026 TIMETABLE DATA ==================
const winter2026Folders = [
  {
    name: "B.Tech",
    fullName: "Bachelor of Technology (B.Tech)",
    timetables: [
      {
        title: "FY B.Tech Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/b-tech/FY_BTech_2024_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "FY B.Tech Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2025 Pattern",
        pdf: "/exam/winter-2026/b-tech/FY_BTech_2025_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "SY B.Tech Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/b-tech/SY_BTech_2024_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "SY B.Tech Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2025 Pattern",
        pdf: "/exam/winter-2026/b-tech/SY_BTech_2025_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "TY B.Tech Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/b-tech/TY_BTech_2024_Pattern_Nov_Dec_2026.pdf",
      },
    ],
  },
  {
    name: "IMBA / BBA",
    fullName: "Integrated MBA / BBA",
    timetables: [
      {
        title: "FY BBA / IMBA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2025 Pattern",
        pdf: "/exam/winter-2026/imba-bba/FY_BBA_IMBA_2025_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "SY BBA / IMBA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/imba-bba/SY_BBA_IMBA_2024_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "SY BBA / IMBA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2025 Pattern",
        pdf: "/exam/winter-2026/imba-bba/SY_BBA_IMBA_2025_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "TY BBA / IMBA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/imba-bba/TY_BBA_IMBA_2024_Pattern_Nov_Dec_2026.pdf",
      },
    ],
  },
  {
    name: "IMCA / BCA",
    fullName: "Integrated MCA / BCA",
    timetables: [
      {
        title: "FY BCA / IMCA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/imca-bca/FY_BCA_IMCA_2024_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "FY BCA / IMCA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2025 Pattern",
        pdf: "/exam/winter-2026/imca-bca/FY_BCA_IMCA_2025_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "SY BCA / IMCA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/imca-bca/SY_BCA_IMCA_2024_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "SY BCA / IMCA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2025 Pattern",
        pdf: "/exam/winter-2026/imca-bca/SY_BCA_IMCA_2025_Pattern_Nov_Dec_2026.pdf",
      },
      {
        title: "TY BCA / IMCA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/imca-bca/TY_BCA_IMCA_2024_Pattern_Nov_Dec_2026.pdf",
      },
    ],
  },
  {
    name: "MBA",
    fullName: "Master of Business Administration (MBA)",
    timetables: [
      {
        title: "SY MBA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2024 Pattern",
        pdf: "/exam/winter-2026/mba/SY_MBA_2024_Pattern_Nov_Dec_2026.pdf",
      },
    ],
  },
  {
    name: "MCA",
    fullName: "Master of Computer Applications (MCA)",
    timetables: [
      {
        title: "SY MCA Endsem Exam Timetable – Nov/Dec 2026",
        pattern: "2025 Pattern",
        pdf: "/exam/winter-2026/mca/SY_MCA_2025_Pattern_Nov_Dec_2026.pdf",
      },
    ],
  },
  {
    name: "M.Tech",
    fullName: "Master of Technology (M.Tech)",
    timetables: [],
    notice: "Timetable will be published here upon release by the Examination Cell.",
  },
];

// ================== OLD TIMETABLES DATA ==================
const oldTimetables = {
  undergraduate: [
    {
      title: "Vacation Examination Timetable – July 2026",
      pdf: "/exam/47_vacation_exam_re_exam_timetable_july_2026.pdf",
    },
    {
      title:
        "FY B.Tech / FY IMBA / FY IMCA / FY MCA Vacation Examination Timetable – Nov/Dec 2025 (Feb 2026)",
      pdf: "/assets/pdf/Examination/FY_BTECH _FY_MCAINT_FY_MBAINT_FY_MCA_ VacationExamTimeTable_(Re-EXAM).pdf",
    },
    {
      title:
        "All SY B.Tech / SY MBA / SY MCA (INT) / SY MBA (INT) / SY MBA / SY MCA / FY MBA (2024 Pattern – Regular) VACATION Examination Timetable for JAN 2026",
      pdf: "/exam/VACATION_EXAMINATION _Time Table_JAN 2026.pdf",
    },
    {
      title: "FY B.Tech Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/FY.BTech._2025-PATTERN_ENDSEM EXAM-TIMETABLE-FOR-NOV_DEC 2025.pdf",
    },
    {
      title: "FY IMBA / BBA Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/FY Integrated MBA _BBA2025 PATTERN_ ENDSEM EXAM TIMETABLE FOR NOV-DEC-2025.pdf",
    },
    {
      title: "FY IMCA / BCA Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/FY Integrated MCA _BCA _2025 PATTERN_ ENDSEM EXAM TIMETABLE FOR NOV-DEC-2025.pdf",
    },
    {
      title: "SY B.Tech Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/SYBTECH25.pdf",
    },
    {
      title: "SY IMBA / BBA Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/SYBBA25.pdf",
    },
    {
      title: "SY IMCA / BCA Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/SYBCA.pdf",
    },
  ],
  postgraduate: [
    {
      title: "FY MBA Endsemester Examination Timetable – Apr/May 2026",
      pdf: "/assets/pdf/Examination/fy_mba_may_2026.PDF",
    },
    {
      title: "SY MBA Endsemester Examination Timetable – Apr/May 2026",
      pdf: "/assets/pdf/Examination/sy_mba_may_2026.PDF",
    },
    {
      title: "FY MCA Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/FY.MCA._2025-PATTERN_ENDSEM EXAM-TIMETABLE-FOR-NOV-DEC 2025.pdf",
    },
    {
      title: "FY MTech Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/FY.MTech._2024-PATTERN_ENDSEM EXAM-TIMETABLE-FOR-NOV_DEC 2025.pdf",
    },
    {
      title: "FY MBA Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/FY.MBA. _2024  PATTERN_ ENDSEM EXAM TIMETABLE FOR NOV-DEC-2025.pdf",
    },
    {
      title: "SY MBA Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/SYMBA25.pdf",
    },
    {
      title: "SY MCA Endsemester Examination Timetable – Nov/Dec 2025",
      pdf: "/exam/SYMCA25.pdf",
    },
  ],
};

// ================== TIMETABLES COMPONENT ==================
function ExaminationTimetablesSection() {
  const [activeSession, setActiveSession] = useState("winter2026");
  const [activeFolder, setActiveFolder] = useState("B.Tech");

  const currentFolder = winter2026Folders.find((f) => f.name === activeFolder);

  return (
    <div className="space-y-3 sm:space-y-5">
      {/* 1. Main Session Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          type="button"
          onClick={() => setActiveSession("winter2026")}
          className={`pb-2.5 sm:pb-3 px-2.5 sm:px-4 font-semibold text-xs sm:text-base border-b-2 transition-colors cursor-pointer text-center ${
            activeSession === "winter2026"
              ? "border-secondary text-secondary"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          Nov/ Dec 2026 ( Winter Session )
        </button>
        <button
          type="button"
          onClick={() => setActiveSession("old")}
          className={`pb-2.5 sm:pb-3 px-2.5 sm:px-4 font-semibold text-xs sm:text-base border-b-2 transition-colors cursor-pointer text-center ${
            activeSession === "old"
              ? "border-secondary text-secondary"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          Old Timetables
        </button>
      </div>

      {/* 2. Winter 2026 Content */}
      {activeSession === "winter2026" && (
        <div className="space-y-3 sm:space-y-4">
          {/* Program Folder Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5 sm:pt-1">
            {winter2026Folders.map((f) => (
              <button
                key={f.name}
                type="button"
                onClick={() => setActiveFolder(f.name)}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-md text-[11px] sm:text-sm font-medium transition cursor-pointer border ${
                  activeFolder === f.name
                    ? "bg-secondary text-white border-secondary shadow-xs"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                <FolderOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{f.name}</span>
              </button>
            ))}
          </div>

          {/* Active Folder Content Container */}
          {currentFolder && (
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs">
              <div className="bg-gray-50 px-3 py-2 sm:px-4 sm:py-2.5 border-b border-gray-200 flex items-center justify-between">
                <span className="font-semibold text-gray-900 text-xs sm:text-base">
                  <span className="sm:hidden">{currentFolder.name} Timetables</span>
                  <span className="hidden sm:inline">{currentFolder.fullName} Timetables</span>
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium">
                  {currentFolder.timetables.length > 0
                    ? `${currentFolder.timetables.length} Timetable${currentFolder.timetables.length > 1 ? "s" : ""}`
                    : "Pending"}
                </span>
              </div>

              {currentFolder.timetables.length > 0 ? (
                <>
                  {/* Desktop Table View */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-left text-sm divide-y divide-gray-200">
                      <thead className="bg-gray-50/50 text-gray-600 text-xs uppercase font-semibold">
                        <tr>
                          <th className="py-2.5 px-4 w-12 text-center">Sr.</th>
                          <th className="py-2.5 px-4">Examination Timetable</th>
                          <th className="py-2.5 px-4 w-32">Pattern</th>
                          <th className="py-2.5 px-4 w-36 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {currentFolder.timetables.map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                            <td className="py-3 px-4 text-center text-gray-500 font-medium">
                              {idx + 1}
                            </td>
                            <td className="py-3 px-4">
                              <a
                                href={item.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary font-medium hover:underline inline-block"
                              >
                                {item.title}
                              </a>
                            </td>
                            <td className="py-3 px-4 text-gray-600 text-xs">
                              {item.pattern}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <a
                                href={item.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-white rounded text-xs font-medium hover:bg-secondary/90 transition shadow-xs"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>View</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Compact Aesthetic List View */}
                  <div className="sm:hidden divide-y divide-gray-100">
                    {currentFolder.timetables.map((item, idx) => (
                      <div
                        key={idx}
                        className="px-2.5 py-2.5 flex items-center justify-between gap-2.5 hover:bg-gray-50/60 transition-colors"
                      >
                        <div className="flex items-start gap-2 min-w-0 flex-1">
                          <span className="text-[11px] font-semibold text-gray-400 mt-0.5 shrink-0 w-3.5 text-right">
                            {idx + 1}.
                          </span>
                          <div className="min-w-0 flex-1">
                            <a
                              href={item.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-secondary hover:underline leading-snug line-clamp-2 block"
                            >
                              {item.title}
                            </a>
                            {item.pattern && (
                              <span className="inline-block mt-1 text-[10px] text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded">
                                {item.pattern}
                              </span>
                            )}
                          </div>
                        </div>
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-secondary text-white rounded text-[11px] font-medium shrink-0 active:scale-95 transition shadow-xs"
                        >
                          <Eye className="w-3 h-3" />
                          <span>View</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="p-4 sm:p-6 text-center text-xs sm:text-sm text-gray-500">
                  <p className="italic">{currentFolder.notice}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. Old Timetables Content */}
      {activeSession === "old" && (
        <div className="space-y-4 sm:space-y-5">
          {/* Undergraduate Programs */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs">
            <div className="bg-gray-50 px-3 py-2 sm:px-4 sm:py-2.5 border-b border-gray-200 font-semibold text-gray-900 text-xs sm:text-base">
              Undergraduate Programs (Past Sessions)
            </div>

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left text-sm divide-y divide-gray-200">
                <thead className="bg-gray-50/50 text-gray-600 text-xs uppercase font-semibold">
                  <tr>
                    <th className="py-2.5 px-4 w-12 text-center">Sr.</th>
                    <th className="py-2.5 px-4">Examination Timetable</th>
                    <th className="py-2.5 px-4 w-36 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {oldTimetables.undergraduate.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3 px-4 text-center text-gray-500 font-medium">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary font-medium hover:underline inline-block"
                        >
                          {item.title}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-white rounded text-xs font-medium hover:bg-secondary/90 transition shadow-xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Compact List */}
            <div className="sm:hidden divide-y divide-gray-100">
              {oldTimetables.undergraduate.map((item, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-2.5 flex items-center justify-between gap-2.5 hover:bg-gray-50/60 transition-colors"
                >
                  <div className="flex items-start gap-2 min-w-0 flex-1">
                    <span className="text-[11px] font-semibold text-gray-400 mt-0.5 shrink-0 w-3.5 text-right">
                      {idx + 1}.
                    </span>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-secondary hover:underline leading-snug line-clamp-2 block"
                    >
                      {item.title}
                    </a>
                  </div>
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-secondary text-white rounded text-[11px] font-medium shrink-0 active:scale-95 transition shadow-xs"
                  >
                    <Eye className="w-3 h-3" />
                    <span>View</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs">
            <div className="bg-gray-50 px-3 py-2 sm:px-4 sm:py-2.5 border-b border-gray-200 font-semibold text-gray-900 text-xs sm:text-base">
              Postgraduate Programs (Past Sessions)
            </div>

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left text-sm divide-y divide-gray-200">
                <thead className="bg-gray-50/50 text-gray-600 text-xs uppercase font-semibold">
                  <tr>
                    <th className="py-2.5 px-4 w-12 text-center">Sr.</th>
                    <th className="py-2.5 px-4">Examination Timetable</th>
                    <th className="py-2.5 px-4 w-36 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {oldTimetables.postgraduate.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3 px-4 text-center text-gray-500 font-medium">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary font-medium hover:underline inline-block"
                        >
                          {item.title}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-white rounded text-xs font-medium hover:bg-secondary/90 transition shadow-xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Compact List */}
            <div className="sm:hidden divide-y divide-gray-100">
              {oldTimetables.postgraduate.map((item, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-2.5 flex items-center justify-between gap-2.5 hover:bg-gray-50/60 transition-colors"
                >
                  <div className="flex items-start gap-2 min-w-0 flex-1">
                    <span className="text-[11px] font-semibold text-gray-400 mt-0.5 shrink-0 w-3.5 text-right">
                      {idx + 1}.
                    </span>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-secondary hover:underline leading-snug line-clamp-2 block"
                    >
                      {item.title}
                    </a>
                  </div>
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-secondary text-white rounded text-[11px] font-medium shrink-0 active:scale-95 transition shadow-xs"
                  >
                    <Eye className="w-3 h-3" />
                    <span>View</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
                          Mr. Somnath Bhote
                        </h4>
                        <p>Examination Officer</p>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Examination Timetable",
                  description: <ExaminationTimetablesSection />,
                },
                {
                  title: "Notices",
                  description: (
                    <div className="text-gray-800 text-sm leading-relaxed space-y-6">
                      <h4 className="font-semibold text-lg mb-2">
                        Examination Notices
                      </h4>
                      <ul className="list-decimal ml-6 space-y-2">
                        <li>
                          <a
                            href="/exam/21_EXAM Form Noties FY B.TECH_FY MCA_FY MBAINT_FYMCAINT 2024 pattern.pdf"
                            target="_blank"
                            className="text-secondary hover:underline"
                          >
                            FY B.TECH / FY MCA / FY MBA (INT) / FY MCA (INT)
                            2024 Pattern Exam Notice
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
                      activeFAQ === index ? "max-h-[6000px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-2 py-2 sm:px-6 sm:py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed">
                      {typeof item.description === "string" ? (
                        <>
                          <p className="mb-3">{item.description}</p>
                          {item.pdf && (
                            <a
                              href={item.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition shadow-xs"
                            >
                              <Eye className="w-4 h-4" />
                              <span>View Document (PDF)</span>
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
