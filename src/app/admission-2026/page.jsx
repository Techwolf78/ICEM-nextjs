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
  Wrench
} from "lucide-react";

// Admission 2026 Data organized by requested programmes
const admission2026Data = {
  "Engineering": [
    // Documents will be added upon receipt
  ],
  "MBA": [
    // Documents will be added upon receipt
  ],
  "MCA": [
    // Documents will be added upon receipt
  ],
  "MBA & MCA Direct Second Year (Lateral Entry)": [
    {
      title: "MBA & MCA Direct Second Year (Lateral Entry) IL/ACAP Round Schedule",
      category: "Admission Schedule & Notice",
      pdf: "/admission/mba_mca_lateral_entry.pdf",
      date: "August 2026",
      description: "Schedule for Institute Level (IL) and Against CAP (ACAP) vacancies for Direct Second Year (Lateral Entry) MBA & MCA."
    }
  ],
  "MBA Working Professional": [
    // Documents will be added upon receipt
  ],
  "DSE Mechanical Engineering Working Professional": [
    // Documents will be added upon receipt
  ]
};

const programIcons = {
  "Engineering": GraduationCap,
  "MBA": Briefcase,
  "MCA": Code,
  "MBA & MCA Direct Second Year (Lateral Entry)": Building2,
  "MBA Working Professional": Briefcase,
  "DSE Mechanical Engineering Working Professional": Wrench
};

export default function Admission2026Page() {
  const [activeTab, setActiveTab] = useState("MBA & MCA Direct Second Year (Lateral Entry)");
  const [previewPdf, setPreviewPdf] = useState(null);

  const programs = Object.keys(admission2026Data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/30 pt-12 md:pt-[6vh] pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#003c84] via-[#1d59a3] to-[#278da4] text-white py-12 shadow-xl relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-xs uppercase tracking-wider mb-4"
            >
              Academic Year 2026 - 2027
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-sm"
            >
              Admission 2026
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base md:text-xl text-blue-100/90 leading-relaxed font-light"
            >
              Official Notices, Round Schedules, Cut-offs & Programme-wise Documents for IL/ACAP Admissions
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/3 xl:w-1/4">
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
                          <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#003c84]"}`} />
                          <span className="truncate">{program}</span>
                        </div>
                        {count > 0 ? (
                          <span className={`text-xs px-2 py-0.5 rounded-full font-bold shrink-0 ${
                            isActive ? "bg-white/20 text-white" : "bg-blue-100 text-[#003c84]"
                          }`}>
                            {count}
                          </span>
                        ) : (
                          <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Document Listing & Details */}
            <div className="lg:w-2/3 xl:w-3/4">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-200/80 p-6 md:p-8"
              >
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    {React.createElement(programIcons[activeTab], { className: "w-7 h-7 text-[#003c84]" })}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                      {activeTab}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {admission2026Data[activeTab].length} Document(s) Uploaded
                  </span>
                </div>

                {/* List of Documents */}
                {admission2026Data[activeTab].length > 0 ? (
                  <div className="space-y-4">
                    {admission2026Data[activeTab].map((doc, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="bg-slate-50/80 hover:bg-slate-100/60 rounded-xl p-5 border border-slate-200/80 transition-all duration-200"
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-50 text-[#003c84] rounded-lg shrink-0 border border-blue-100">
                              <FileCheck className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-100 text-[#003c84]">
                                  {doc.category}
                                </span>
                                {doc.isNew && (
                                  <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-amber-500 text-white animate-pulse">
                                    NEW
                                  </span>
                                )}
                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                  <Calendar className="w-3 h-3" /> {doc.date}
                                </span>
                              </div>
                              <h4 className="text-lg font-bold text-slate-800 leading-snug">
                                {doc.title}
                              </h4>
                              {doc.description && (
                                <p className="text-sm text-slate-600 mt-1">
                                  {doc.description}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
                            <button
                              onClick={() => setPreviewPdf(previewPdf === doc.pdf ? null : doc.pdf)}
                              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                              <span>{previewPdf === doc.pdf ? "Hide" : "View"}</span>
                            </button>
                            <a
                              href={doc.pdf}
                              download
                              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-[#003c84] text-white hover:bg-[#1d59a3] transition-colors shadow-sm"
                            >
                              <Download className="w-4 h-4" />
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
                              className="mt-5 pt-5 border-t border-slate-200"
                            >
                              <div className="bg-slate-900 rounded-lg p-2 shadow-inner overflow-hidden">
                                <iframe
                                  src={`${doc.pdf}#toolbar=0`}
                                  className="w-full h-[600px] rounded border-0"
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
                  <div className="text-center py-16 px-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                    <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-slate-700 mb-1">
                      No Documents Uploaded Yet
                    </h4>
                    <p className="text-sm text-slate-500 max-w-md mx-auto">
                      Admission notices, schedules, and merit lists for <strong>{activeTab}</strong> will be updated here as soon as they are released by the college.
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
