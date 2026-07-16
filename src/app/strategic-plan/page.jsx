"use client";

import React from "react";
import { FileText, Download, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StrategicPlan() {
  const pdfUrl = "/assets/pdf/strategic_plan_26_30.pdf";
  const title = "Strategic Plan (2026-2030)";
  const subtitle = "Official Strategic Development and Action Plan for NBA Accreditation";

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pb-8 animate-in fade-in-0 duration-300">
      {/* Header */}
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
                Strategic Plan
              </h1>
              <p className="text-xs text-white/80 hidden md:block">
                {subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Open PDF in New Tab</span>
            </a>
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 bg-white text-gray-900 hover:bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-6">
        {/* Main Content Area */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden flex flex-col h-[75vh] md:h-[80vh]">
          {/* Active document title banner */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between text-xs text-gray-500">
            <span className="font-semibold text-sm text-slate-800 truncate flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" /> {title}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0">
              PDF Document
            </span>
          </div>

          {/* PDF frame container */}
          <div className="flex-1 bg-slate-100 relative">
            <iframe
              src={`${pdfUrl}#toolbar=1`}
              title={title}
              className="w-full h-full border-0 bg-white"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
