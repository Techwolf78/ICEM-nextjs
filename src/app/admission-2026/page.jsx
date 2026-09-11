"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  ChevronRight,
  Briefcase,
  Code,
  Download,
  Eye,
  Calendar,
  AlertCircle,
  FileCheck,
  Building2,
  Wrench,
  Cog,
} from "lucide-react";

// Admission 2026 Data organized by requested programmes
const admission2026Data = {
  Common: [
    {
      title:
        "Vacancy Position – Engineering, MBA & MCA (as on 11 September 2026)",
      category: "Vacancy Position",
      pdf: "/admission/Engg_MBA_MCA_Vacancy_Position_as_on_11092026.pdf",
      date: "11 September 2026",
      isNew: true,
      description:
        "State CET Cell updated provisional vacancy position as on 11/09/2026 for First Year B.Tech Engineering, MBA, and MCA programmes for A.Y. 2026-27. Candidates are advised to check the vacancy position before applying for Institute Level / Against CAP admissions.",
    },
    {
      title:
        "Display of ACAP & Institute Level (IL) Merit Lists (Version 1) – A.Y. 2026-27",
      category: "Merit List Notice",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Provisional Merit Lists (Version 1) for First Year B.Tech Engineering, MBA, and MCA are published. Please select the respective programme tab to view and download the official merit lists. Candidates are required to report to the institute from 10/09/2026.",
    },
    {
      title: "IL Admission Fee Structure 2026-27",
      category: "Fee Structure",
      pdf: "/admission/Fee_Structure_for_IL_2026-27.pdf",
      date: "08 September 2026",
      isNew: true,
      description:
        "Approved Applicable Fees for Institute Level (IL) Admission for B.Tech First Year, Direct Second Year (DSE), FY MBA, and FY MCA for Academic Year 2026-27.",
    },
    {
      title: "FRA Notice for IL Fees",
      category: "Regulatory Notice",
      pdf: "/admission/FRA_Notice_for_IL_Fees.pdf",
      date: "31 July 2025",
      isNew: true,
      description:
        "Official Notification from Fees Regulating Authority (FRA), Maharashtra regarding maximum fees / upper limits for Institutional / Management Quota seats.",
    },
    {
      title:
        "Schedule for Institute Level / Against CAP (ACAP) Admission 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Official Schedule for B. Tech, DSE, M.Tech, MBA, MCA, and Working Professional Courses for Institute Level & Against CAP vacancy admissions.",
    },
    {
      title:
        "Advertisement for Institute Level / Against CAP Admission 2026-27",
      category: "Admission Advertisement",
      pdf: "/admission/Advertisement_of_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Official Newspaper Advertisement for Institute Level Seats and Vacant Seats after CAP rounds (Against CAP Seats) for A.Y. 2026-27.",
    },
  ],
  Engineering: [
    {
      title:
        "Provisional Merit List (Version 1) – Institute Level (IL) First Year B.Tech Engineering",
      category: "Merit List (IL)",
      pdf: "/admission/IL_FE_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Institute Level (IL) seats for First Year Under Graduate Technical Courses in Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27. Reporting & confirmation date: 10/09/2026.",
    },
    {
      title:
        "Provisional Merit List (Version 1) – Against CAP (ACAP) First Year B.Tech Engineering",
      category: "Merit List (ACAP)",
      pdf: "/admission/ACAP_FE_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for First Year Under Graduate Technical Courses in Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27. Reporting & confirmation date: 10/09/2026.",
    },
    {
      title:
        "Provisional Merit List (Version 1) – Against CAP (ACAP) Direct Second Year (DSE) Engineering",
      category: "Merit List (ACAP)",
      pdf: "/admission/DSE_ACAP_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for Direct Second Year (DSE) Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27.",
    },
    {
      title: "Vacancy Position – First Year B.Tech Engineering",
      category: "Vacancy Position",
      pdf: "/admission/BTech_FE_Vacancy_Position_08092026.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "State CET Cell provisional vacancy position after CAP Round III/IV for First Year Under Graduate Technical Courses in Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27.",
    },
    {
      title: "Vacancy Position – Engineering DSE (Direct Second Year)",
      category: "Vacancy Position",
      pdf: "/admission/DSE_Vacancy_Position_08092026.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "State CET Cell updated provisional vacancy position after CAP Round IV for Direct Second Year (DSE) Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27.",
    },
    {
      title:
        "B.Tech & DSE Institute Level / Against CAP Admission Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Schedule for B.Tech (AI&DS, Computer, E&TC, IT, Mechanical) & Direct Second Year (DSE) vacancies. Application Dates: 07/09/2026 to 08/09/2026 (B.Tech) & 09/09/2026 to 10/09/2026 (DSE).",
    },
    {
      title:
        "Engineering Institute Level / Against CAP Admission Advertisement",
      category: "Admission Advertisement",
      pdf: "/admission/Advertisement_of_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Official published advertisement for B.Tech, DSE, and M.Tech Institute Level & Against CAP seats.",
    },
  ],
  "M.Tech": [
    {
      title: "Provisional Merit List (Version 1) – Institute Level (IL) M.Tech",
      category: "Merit List (IL)",
      pdf: "/admission/ME_IL_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Institute Level (IL) seats for First Year Master of Technology (M.Tech) for A.Y. 2026-27. Reporting & confirmation date: 10/09/2026.",
    },
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) M.Tech",
      category: "Merit List (ACAP)",
      pdf: "/admission/M.Tech_ACAP_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for First Year Master of Technology (M.Tech) for A.Y. 2026-27. Reporting & confirmation date: 10/09/2026.",
    },
  ],
  MBA: [
    {
      title: "Provisional Merit List (Version 1) – Institute Level (IL) MBA",
      category: "Merit List (IL)",
      pdf: "/admission/IL_MBA_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Institute Level (IL) seats for First Year Master of Business Administration (MBA - Choice Code: 0617910110) for Academic Year 2026-27. Reporting & confirmation date: 10/09/2026.",
    },
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) MBA",
      category: "Merit List (ACAP)",
      pdf: "/admission/ACAP_MBA_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for First Year Master of Business Administration (MBA - Choice Code: 0617910110) for Academic Year 2026-27. Reporting & confirmation date: 10/09/2026.",
    },
    {
      title: "Vacancy Position – MBA (Master of Business Administration)",
      category: "Vacancy Position",
      pdf: "/admission/MBA_Vacancy_Position_08092026.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "State CET Cell provisional vacancy position after CAP Round IV for First Year Master of Business Administration (MBA - Choice Code: 0617910110) for A.Y. 2026-27.",
    },
    {
      title: "MBA Institute Level / Against CAP Admission Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Schedule for MBA Institute Level & Vacant Seats after CAP rounds (Choice Code: 0617910110). Application Dates: 07/09/2026 to 08/09/2026. Merit list: 09/09/2026.",
    },
    {
      title: "MBA Admission Advertisement 2026-27",
      category: "Admission Advertisement",
      pdf: "/admission/Advertisement_of_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Official published advertisement for MBA Institute Level and Against CAP admissions.",
    },
  ],
  MCA: [
    {
      title: "Provisional Merit List (Version 1) – Institute Level (IL) MCA",
      category: "Merit List (IL)",
      pdf: "/admission/IL_MCA_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Institute Level (IL) seats for First Year Master of Computer Applications (MCA - Choice Code: 0617924110) for Academic Year 2026-27. Reporting & confirmation date: 10/09/2026.",
    },
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) MCA",
      category: "Merit List (ACAP)",
      pdf: "/admission/ACAP_MCA_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for First Year Master of Computer Applications (MCA - Choice Code: 0617924110) for Academic Year 2026-27. Reporting & confirmation date: 10/09/2026.",
    },
    {
      title: "Vacancy Position – MCA (Master of Computer Applications)",
      category: "Vacancy Position",
      pdf: "/admission/MCA_Vacancy_Position_06092026.pdf",
      date: "06 September 2026",
      isNew: true,
      description:
        "State CET Cell provisional vacancy position after CAP Round IV for First Year Master of Computer Applications (MCA - Choice Code: 0617924110) for A.Y. 2026-27.",
    },
    {
      title: "MCA Institute Level / Against CAP Admission Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Schedule for MCA Institute Level & Vacant Seats after CAP rounds (Choice Code: 0617924110). Application Dates: 06/09/2026 to 08/09/2026. Merit list: 09/09/2026.",
    },
    {
      title: "MCA Admission Advertisement 2026-27",
      category: "Admission Advertisement",
      pdf: "/admission/Advertisement_of_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Official published advertisement for MCA Institute Level and Against CAP admissions.",
    },
  ],
  "MBA & MCA Direct Second Year (Lateral Entry)": [
    {
      title:
        "MBA & MCA Direct Second Year (Lateral Entry) IL/ACAP Round Schedule",
      category: "Admission Schedule & Notice",
      pdf: "/admission/mba_mca_lateral_entry.pdf",
      date: "August 2026",
      description:
        "Schedule for Institute Level (IL) and Against CAP (ACAP) vacancies for Direct Second Year (Lateral Entry) MBA & MCA.",
    },
  ],
  "MBA Working Professional": [
    {
      title:
        "MBA Working Professional (Vacant seats after CAP) Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Schedule for MBA Working Professional Course (Choice Code: 0617910180). Application Dates: 07/09/2026 to 08/09/2026. Reporting: 10/09/2026 to 13/09/2026.",
    },
  ],
  "DSE Mechanical Engineering Working Professional": [
    {
      title:
        "Provisional Merit List (Version 1) – Against CAP (ACAP) DSE Mechanical Engineering (Working Professional)",
      category: "Merit List (ACAP)",
      pdf: "/admission/DSWWP_ACAP_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description:
        "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for DSE Mechanical Engineering Working Professional Course (Choice Code: 0617961280) for A.Y. 2026-27. Reporting date: 13/09/2026.",
    },
    {
      title: "DSE Mechanical Engg Working Professional Course Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description:
        "Schedule for DSE Mechanical Engineering Working Professional Course (Choice Code: 0617961280). Application Dates: 07/09/2026 to 08/09/2026. Reporting: 10/09/2026 to 15/09/2026.",
    },
  ],
};

const programIcons = {
  Common: FileCheck,
  Engineering: GraduationCap,
  "M.Tech": Cog,
  MBA: Briefcase,
  MCA: Code,
  "MBA & MCA Direct Second Year (Lateral Entry)": Building2,
  "MBA Working Professional": Briefcase,
  "DSE Mechanical Engineering Working Professional": Wrench,
};

const mobileProgramLabels = {
  Common: "Common",
  Engineering: "Engineering",
  "M.Tech": "M.Tech",
  MBA: "MBA",
  MCA: "MCA",
  "MBA & MCA Direct Second Year (Lateral Entry)": "MBA / MCA (Lateral)",
  "MBA Working Professional": "MBA Working Prof.",
  "DSE Mechanical Engineering Working Professional": "DSE Mech (Working Prof.)",
};

export default function Admission2026Page() {
  const [activeTab, setActiveTab] = useState("Common");
  const [previewPdf, setPreviewPdf] = useState(null);

  const programs = Object.keys(admission2026Data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/30 pt-4 md:pt-[6vh] pb-8 md:pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#003c84] via-[#1d59a3] to-[#278da4] text-white py-5 md:py-12 shadow-xl relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-[11px] md:text-xs uppercase tracking-wider mb-2 md:mb-4"
            >
              Academic Year 2026 - 2027
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-5xl font-extrabold mb-1.5 md:mb-4 tracking-tight text-white drop-shadow-sm"
            >
              Admission 2026
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs md:text-xl text-blue-100/90 leading-relaxed font-light line-clamp-1 md:line-clamp-none"
            >
              Official Notices, Round Schedules, Cut-offs & Programme-wise
              Documents for IL/ACAP Admissions
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-2.5 sm:px-4 py-3 md:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Quick Merit List Alert Banner - Compact / High-Impact Bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-3 md:mb-5 py-2 px-3 md:py-2 md:px-4 rounded-xl bg-gradient-to-r from-[#003c84] via-[#1d59a3] to-[#278da4] text-white shadow-md flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-4 border border-blue-400/20"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-500 text-white tracking-wider shrink-0 leading-none">
                Live Now
              </span>
              <span className="font-bold text-xs md:text-sm text-white shrink-0">
                Merit Lists Released (ACAP / IL 2026-27):
              </span>
              <span className="text-xs text-blue-100/90 truncate hidden xl:inline">
                Version 1 Merit Lists for B.Tech First Year, MBA, and MCA
                published. Reporting starts 10/09/2026.
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 ml-auto md:ml-0">
              <button
                onClick={() => {
                  setActiveTab("Engineering");
                  setPreviewPdf(null);
                }}
                className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-white/15 hover:bg-white/25 border border-white/25 text-[11px] md:text-xs font-semibold backdrop-blur-sm transition-all text-white hover:shadow cursor-pointer"
              >
                B.Tech (FE)
              </button>
              <button
                onClick={() => {
                  setActiveTab("MBA");
                  setPreviewPdf(null);
                }}
                className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-white/15 hover:bg-white/25 border border-white/25 text-[11px] md:text-xs font-semibold backdrop-blur-sm transition-all text-white hover:shadow cursor-pointer"
              >
                MBA
              </button>
              <button
                onClick={() => {
                  setActiveTab("MCA");
                  setPreviewPdf(null);
                }}
                className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-white/15 hover:bg-white/25 border border-white/25 text-[11px] md:text-xs font-semibold backdrop-blur-sm transition-all text-white hover:shadow cursor-pointer"
              >
                MCA
              </button>
            </div>
          </motion.div>

          {/* Mobile Programmes Tabs - Uniform 2-Column Grid */}
          <div className="lg:hidden mb-4 grid grid-cols-2 gap-2">
            {programs.map((program, idx) => {
              const Icon = programIcons[program];
              const count = admission2026Data[program].length;
              const isActive = activeTab === program;
              const isLast = idx === programs.length - 1;

              return (
                <button
                  key={program}
                  onClick={() => {
                    setActiveTab(program);
                    setPreviewPdf(null);
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between gap-1.5 border text-left shadow-2xs ${
                    isLast ? "col-span-2" : "col-span-1"
                  } ${
                    isActive
                      ? "bg-[#003c84] text-white border-[#003c84] shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Icon
                      className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-[#003c84]"}`}
                    />
                    <span className="truncate leading-tight">
                      {mobileProgramLabels[program] || program}
                    </span>
                  </div>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold shrink-0 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-[#003c84] border border-blue-100"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Desktop Sidebar Navigation */}
            <div className="hidden lg:block lg:w-1/3 xl:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 p-5 sticky top-28">
                <h2 className="text-lg font-bold text-slate-800 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-[#003c84]" />
                  <span>Programmes</span>
                </h2>
                <div className="space-y-2">
                  {programs.map((program) => {
                    const Icon = programIcons[program];
                    const count = admission2026Data[program].length;
                    const isActive = activeTab === program;

                    return (
                      <motion.button
                        key={program}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setActiveTab(program);
                          setPreviewPdf(null);
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 text-left flex items-center justify-between gap-3 ${
                          isActive
                            ? "bg-gradient-to-r from-[#003c84] to-[#278da4] text-white shadow-md shadow-blue-900/10 font-semibold"
                            : "bg-slate-50/70 text-slate-700 hover:bg-slate-100/80 border border-slate-200/60"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Icon
                            className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#003c84]"}`}
                          />
                          <span className="truncate">{program}</span>
                        </div>
                        {count > 0 ? (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-bold shrink-0 ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-blue-100 text-[#003c84]"
                            }`}
                          >
                            {count}
                          </span>
                        ) : (
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Document Listing & Details */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-slate-200/80 p-3.5 sm:p-5 md:p-8"
              >
                <div className="flex items-center justify-between pb-3 mb-3 md:pb-6 md:mb-6 border-b border-slate-100 flex-wrap gap-2">
                  <div className="flex items-center gap-2 md:gap-3">
                    {React.createElement(programIcons[activeTab], {
                      className: "w-5 h-5 md:w-7 md:h-7 text-[#003c84]",
                    })}
                    <h3 className="text-lg md:text-2xl font-bold text-slate-800">
                      {activeTab}
                    </h3>
                  </div>
                  <span className="text-[11px] md:text-xs font-semibold px-2.5 py-0.5 md:px-3 md:py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {admission2026Data[activeTab].length} Document(s) Uploaded
                  </span>
                </div>

                {/* List of Documents */}
                {admission2026Data[activeTab].length > 0 ? (
                  <div className="space-y-2.5 sm:space-y-3.5">
                    {admission2026Data[activeTab].map((doc, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-slate-50/80 hover:bg-slate-100/60 rounded-xl p-3 sm:p-4 border border-slate-200/80 transition-all duration-200"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 sm:gap-4">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap mb-1">
                              <span className="text-[10px] md:text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84]">
                                {doc.category}
                              </span>
                              {doc.isNew && (
                                <span className="text-[10px] md:text-xs font-extrabold px-1.5 py-0.5 rounded bg-amber-500 text-white animate-pulse">
                                  NEW
                                </span>
                              )}
                              <span className="text-[10px] md:text-xs text-slate-500 flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {doc.date}
                              </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                              {doc.title}
                            </h4>
                          </div>

                          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                            <button
                              onClick={() =>
                                setPreviewPdf(
                                  previewPdf === doc.pdf ? null : doc.pdf,
                                )
                              }
                              className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-200/80 text-slate-700 hover:bg-slate-300 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>
                                {previewPdf === doc.pdf ? "Hide" : "View"}
                              </span>
                            </button>
                            <a
                              href={doc.pdf}
                              download
                              className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#003c84] text-white hover:bg-[#1d59a3] transition-colors shadow-sm"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Download</span>
                            </a>
                          </div>
                        </div>

                        {/* Inline PDF Preview */}
                        <AnimatePresence>
                          {previewPdf === doc.pdf && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-3 pt-3 border-t border-slate-200"
                            >
                              <div className="bg-slate-900 rounded-lg p-1.5 shadow-inner overflow-hidden">
                                <iframe
                                  src={`${doc.pdf}#toolbar=0`}
                                  className="w-full h-[450px] md:h-[600px] rounded border-0"
                                  title={doc.title}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 md:py-16 px-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                    <AlertCircle className="w-8 h-8 md:w-12 md:h-12 text-slate-400 mx-auto mb-2" />
                    <h4 className="text-sm md:text-lg font-semibold text-slate-700 mb-1">
                      No Documents Uploaded Yet
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto">
                      Admission notices, schedules, and merit lists for{" "}
                      <strong>{activeTab}</strong> will be updated here as soon
                      as they are released by the college.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
