"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { verifyPasscode, isAuthenticated } from "@/lib/auth";
import { logAuditEvent } from "@/lib/auditLogger";
import { Lock, ShieldCheck, ArrowRight, Loader2, AlertCircle, Sparkles } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function AdmissionLoginPage() {
  const [passcode, setPasscode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/admission-2026/admin");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setErrorMsg("Please enter the admin passcode.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const result = await verifyPasscode(passcode.trim());
      if (result.success) {
        logAuditEvent({
          action: "LOGIN_SUCCESS",
          targetType: "AUTH",
          targetTitle: "CMS Admin",
          details: "Administrator passcode verified successfully."
        });
        toast.success("Authentication successful! Redirecting...");
        setTimeout(() => {
          router.push("/admission-2026/admin");
        }, 500);
      } else {
        logAuditEvent({
          action: "LOGIN_FAILED",
          targetType: "AUTH",
          targetTitle: "Access Denied",
          details: "Incorrect passcode attempt rejected."
        });
        setErrorMsg(result.error || "Incorrect passcode.");
        toast.error(result.error || "Incorrect passcode.");
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-sky-100/50 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      <Toaster position="top-right" />
      
      {/* ICEM Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-sm sm:max-w-md bg-white/95 border border-blue-100 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-900/5 p-5 sm:p-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#003c84] to-[#278da4] flex items-center justify-center text-white shadow-lg shadow-blue-900/20 mb-3 sm:mb-4 border border-white/40">
            <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 text-[#003c84] border border-blue-100 mb-1.5">
            ICEM Admin Portal
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
            Admission 2026 CMS
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Notice &amp; Merit List Content Management
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span className="font-medium">{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Admin Passcode
            </label>
            <div className="relative">
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                placeholder="Enter passcode"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setErrorMsg("");
                }}
                className="w-full bg-slate-50/80 border border-slate-200 focus:border-[#003c84] focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-2xl px-4 py-3.5 text-slate-800 placeholder-slate-400 tracking-widest text-center text-2xl font-mono outline-none transition-all shadow-inner"
                autoFocus
              />
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
              Enter authorized PIN to manage admission notices
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#003c84] via-[#1d59a3] to-[#278da4] hover:from-[#003370] hover:to-[#1f7588] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Verifying credentials...</span>
              </>
            ) : (
              <>
                <span>Access CMS Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Secured with Salted SHA-256 Cloud Verification</span>
        </div>
      </div>
    </div>
  );
}
