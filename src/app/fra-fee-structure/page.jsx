"use client";

import React, { useState } from "react";
import { FileText, Download, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

const fraDocuments = [
  {
    title: "FRA Fee Structure (A.Y. 2026-27)",
    subtitle: "Official Fee Regulating Authority details for Academic Year 2026-27",
    pdf: "/fees/fra_fees_2026-27.pdf",
    language: "English",
  },
  {
    title: "Fee Structure (Marathi Version)",
    subtitle: "Official Fee Regulating Authority details translated in Marathi",
    pdf: "/fees/fee_structure_marathi.pdf",
    language: "Marathi",
  },
];

export default function FraFeeStructure() {
  const [selectedDoc, setSelectedDoc] = useState(fraDocuments[0]);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pb-8">
      {/* Super Compact Header */}
      <div className="bg-gradient-to-r from-[#278da4] to-[#003c84] text-white py-4 md:py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-lg md:text-2xl font-bold tracking-tight">
                FRA Fee Structure
              </h1>
              <p className="text-xs text-white/80 hidden md:block">
                Official Fees Regulating Authority documents for A.Y. 2026-27
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <a
              href={selectedDoc.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Open</span>
            </a>
            <a
              href={selectedDoc.pdf}
              download
              className="inline-flex items-center gap-1.5 bg-white text-gray-900 hover:bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-4">
        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          
          {/* Document Selectors Column */}
          <div className="w-full lg:w-[320px] flex-shrink-0 space-y-4">
            <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 hidden lg:block">
                Select Document
              </h2>
              
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                {fraDocuments.map((doc, index) => {
                  const isSelected = selectedDoc.pdf === doc.pdf;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDoc(doc)}
                      className={`flex-1 min-w-[130px] lg:w-full text-left p-2.5 lg:p-4 rounded-lg border transition-all duration-200 ${
                        isSelected
                          ? "border-[#003c84] bg-blue-50/50 shadow-sm font-semibold"
                          : "border-slate-200 hover:bg-slate-50 text-gray-600"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`p-1.5 rounded-md shrink-0 ${isSelected ? "bg-[#003c84] text-white" : "bg-slate-100 text-slate-400"}`}>
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          {/* Shorter text on mobile, full title on desktop */}
                          <h3 className="text-xs md:text-sm text-gray-950 font-semibold lg:font-bold leading-tight">
                            <span className="lg:hidden">
                              {doc.language === "Marathi" ? "Marathi Version" : "English Version"}
                            </span>
                            <span className="hidden lg:inline">{doc.title}</span>
                          </h3>
                          {/* Description shown only on desktop */}
                          <p className="text-[11px] text-slate-500 mt-1 hidden lg:block leading-normal">
                            {doc.subtitle}
                          </p>
                          <span className={`inline-block text-[9px] font-medium px-2 py-0.5 rounded-full mt-2 ${
                            doc.language === "Marathi" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"
                          }`}>
                            {doc.language}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions Card - Restored for Desktop only */}
            <div className="bg-gradient-to-br from-[#003c84] to-[#0a5cbf] rounded-xl p-4 shadow-sm text-white space-y-3 hidden lg:block">
              <h3 className="font-bold text-sm">Direct Download</h3>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Download the files directly to your device for offline viewing or printing.
              </p>
              <div className="space-y-2 pt-1">
                {fraDocuments.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.pdf}
                    download
                    className="flex items-center justify-between bg-white/10 hover:bg-white/20 p-2.5 rounded-lg text-xs font-semibold transition-all"
                  >
                    <span>{doc.language === "Marathi" ? "Marathi Version" : "English Version"}</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* PDF Viewer Container */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[70vh] lg:h-[75vh]">
              {/* Active document title banner */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-gray-500">
                <span className="font-medium truncate pr-4">
                  Viewing: {selectedDoc.title}
                </span>
                <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0">
                  {selectedDoc.language}
                </span>
              </div>

              {/* PDF frame container */}
              <div className="flex-1 bg-slate-100 relative">
                <iframe
                  src={`${selectedDoc.pdf}#toolbar=1`}
                  title={selectedDoc.title}
                  className="w-full h-full border-0 bg-white"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
