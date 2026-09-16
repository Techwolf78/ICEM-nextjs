"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "@/lib/auth";
import { subscribeAuditLogs, logAuditEvent } from "@/lib/auditLogger";
import {
  ShieldCheck,
  ArrowLeft,
  Search,
  Filter,
  Download,
  Clock,
  PlusCircle,
  Edit3,
  Trash2,
  ArrowUpDown,
  FolderPlus,
  FolderMinus,
  LogIn,
  LogOut,
  AlertTriangle,
  Loader2,
  FileText,
  Laptop,
  Smartphone,
  Eye,
  Calendar,
  CheckCircle2,
  RefreshCw
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function AdmissionAuditPage() {
  const router = useRouter();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFilter, setActionFilter] = useState("ALL");
  const [programFilter, setProgramFilter] = useState("ALL");

  // Check Authentication
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/admission-2026/login");
    }
  }, [router]);

  // Real-time Firestore subscription to audit logs
  useEffect(() => {
    const unsubscribe = subscribeAuditLogs((newLogs) => {
      setLogs(newLogs);
      setLoading(false);
    }, 200);

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    logAuditEvent({
      action: "LOGOUT",
      targetType: "AUTH",
      targetTitle: "Admin Session",
      details: "Administrator logged out from audit view"
    });
    logout();
    router.replace("/admission-2026/login");
  };

  // Filter logs based on search, action, and program
  const filteredLogs = logs.filter((log) => {
    // Action filter
    if (actionFilter !== "ALL") {
      if (actionFilter === "NOTICES" && !["ADD_NOTICE", "EDIT_NOTICE", "DELETE_NOTICE"].includes(log.action)) return false;
      if (actionFilter === "REORDER" && log.action !== "REORDER_NOTICE") return false;
      if (actionFilter === "TABS" && !["CREATE_TAB", "DELETE_TAB"].includes(log.action)) return false;
      if (actionFilter === "AUTH" && !["LOGIN_SUCCESS", "LOGIN_FAILED", "LOGOUT"].includes(log.action)) return false;
    }

    // Program filter
    if (programFilter !== "ALL" && log.program !== programFilter) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (log.targetTitle || "").toLowerCase().includes(q);
      const matchDetails = (log.details || "").toLowerCase().includes(q);
      const matchAction = (log.action || "").toLowerCase().includes(q);
      const matchProg = (log.program || "").toLowerCase().includes(q);
      return matchTitle || matchDetails || matchAction || matchProg;
    }

    return true;
  });

  // Unique programs in logs
  const availablePrograms = Array.from(
    new Set(logs.map((l) => l.program).filter(Boolean))
  );

  // Statistics
  const totalLogs = logs.length;
  const noticeEvents = logs.filter((l) => ["ADD_NOTICE", "EDIT_NOTICE", "DELETE_NOTICE"].includes(l.action)).length;
  const reorderEvents = logs.filter((l) => l.action === "REORDER_NOTICE").length;
  const tabEvents = logs.filter((l) => ["CREATE_TAB", "DELETE_TAB"].includes(l.action)).length;
  const authEvents = logs.filter((l) => ["LOGIN_SUCCESS", "LOGIN_FAILED", "LOGOUT"].includes(l.action)).length;

  // Export logs to CSV
  const handleExportCSV = () => {
    if (filteredLogs.length === 0) {
      toast.error("No logs to export.");
      return;
    }

    const headers = ["Timestamp", "Action", "Target Type", "Title / Item", "Programme", "Details", "Device"];
    const rows = filteredLogs.map((l) => [
      `"${l.timestamp || ""}"`,
      `"${l.action || ""}"`,
      `"${l.targetType || ""}"`,
      `"${(l.targetTitle || "").replace(/"/g, '""')}"`,
      `"${(l.program || "").replace(/"/g, '""')}"`,
      `"${(l.details || "").replace(/"/g, '""')}"`,
      `"${l.clientDevice || ""}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `icem_admission_audit_trail_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Audit log CSV downloaded!");
  };

  // Action badge and visual config
  const getActionConfig = (action) => {
    switch (action) {
      case "ADD_NOTICE":
        return {
          label: "Added Notice",
          color: "bg-emerald-50 text-emerald-700 border-emerald-200",
          icon: PlusCircle,
          dotColor: "bg-emerald-500"
        };
      case "EDIT_NOTICE":
        return {
          label: "Edited Notice",
          color: "bg-blue-50 text-[#003c84] border-blue-200",
          icon: Edit3,
          dotColor: "bg-blue-500"
        };
      case "DELETE_NOTICE":
        return {
          label: "Deleted Notice",
          color: "bg-rose-50 text-rose-700 border-rose-200",
          icon: Trash2,
          dotColor: "bg-rose-500"
        };
      case "REORDER_NOTICE":
        return {
          label: "Reordered",
          color: "bg-amber-50 text-amber-800 border-amber-200",
          icon: ArrowUpDown,
          dotColor: "bg-amber-500"
        };
      case "CREATE_TAB":
        return {
          label: "Created Tab",
          color: "bg-purple-50 text-purple-700 border-purple-200",
          icon: FolderPlus,
          dotColor: "bg-purple-500"
        };
      case "DELETE_TAB":
        return {
          label: "Removed Tab",
          color: "bg-rose-50 text-rose-700 border-rose-200",
          icon: FolderMinus,
          dotColor: "bg-rose-500"
        };
      case "LOGIN_SUCCESS":
        return {
          label: "Admin Login",
          color: "bg-cyan-50 text-cyan-800 border-cyan-200",
          icon: LogIn,
          dotColor: "bg-cyan-500"
        };
      case "LOGIN_FAILED":
        return {
          label: "Failed Login",
          color: "bg-red-50 text-red-700 border-red-200",
          icon: AlertTriangle,
          dotColor: "bg-red-500"
        };
      case "LOGOUT":
        return {
          label: "Logged Out",
          color: "bg-slate-100 text-slate-700 border-slate-200",
          icon: LogOut,
          dotColor: "bg-slate-400"
        };
      default:
        return {
          label: action || "Event",
          color: "bg-slate-100 text-slate-700 border-slate-200",
          icon: Clock,
          dotColor: "bg-slate-400"
        };
    }
  };

  // Helper for human-readable relative time
  const formatTimeAgo = (isoString) => {
    if (!isoString) return "";
    const seconds = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/40 text-slate-800 pb-24">
      <Toaster position="top-right" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 border-b border-slate-200/80 backdrop-blur-md px-3 sm:px-8 py-2.5 sm:py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={() => router.push("/admission-2026/admin")}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer shrink-0"
              title="Back to CMS"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">CMS</span>
            </button>

            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#003c84] to-[#278da4] flex items-center justify-center text-white shadow-md shadow-blue-900/15 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-lg font-bold text-slate-900 flex items-center gap-1.5 truncate">
                  <span>System Audit</span>
                  <span className="text-[10px] sm:text-[11px] bg-emerald-50 text-emerald-700 font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </h1>
                <p className="text-[11px] text-slate-500 hidden md:block truncate">
                  Complete activity history &amp; change logs for ICEM Admission 2026
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-[#003c84] hover:bg-[#1d59a3] text-white text-xs font-semibold shadow-xs transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
              <span className="sm:hidden">CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-xs font-semibold border border-slate-200 hover:border-rose-200 transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-8 pt-4 sm:pt-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mb-4 sm:mb-6">
          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Logs</span>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-0.5">{totalLogs}</div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 block truncate">Stored events</span>
          </div>
          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Notices Changed</span>
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 mt-0.5">{noticeEvents}</div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 block truncate">Adds, edits, dels</span>
          </div>
          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-600 uppercase tracking-wider">Reorders</span>
            <div className="text-xl sm:text-2xl font-extrabold text-amber-600 mt-0.5">{reorderEvents}</div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 block truncate">Sequence moves</span>
          </div>
          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#003c84] uppercase tracking-wider">Tabs &amp; Auth</span>
            <div className="text-xl sm:text-2xl font-extrabold text-[#003c84] mt-0.5">{tabEvents + authEvents}</div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 block truncate">{tabEvents} tabs, {authEvents} auth</span>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white rounded-2xl p-5 shadow-2xs border border-slate-200/80 mb-6 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search audit trail by title, action, details, programme..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#003c84] focus:bg-white rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Programme Filter */}
            <div className="w-full md:w-56">
              <select
                value={programFilter}
                onChange={(e) => setProgramFilter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#003c84] focus:bg-white rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 outline-none transition"
              >
                <option value="ALL">All Programmes</option>
                {availablePrograms.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: "ALL", label: "All Events" },
              { id: "NOTICES", label: "Notices (Add / Edit / Del)" },
              { id: "REORDER", label: "Reorder / Move" },
              { id: "TABS", label: "Program Tabs" },
              { id: "AUTH", label: "Authentication / Logins" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActionFilter(f.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  actionFilter === f.id
                    ? "bg-[#003c84] text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Logs Timeline List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Loader2 className="w-8 h-8 animate-spin text-[#003c84] mb-3" />
            <p className="text-slate-500 text-sm font-medium">Loading live audit records...</p>
          </div>
        ) : filteredLogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-200 text-center px-4">
            <ShieldCheck className="w-12 h-12 text-slate-300 mb-3" />
            <h3 className="text-base font-bold text-slate-700">No audit events match your criteria</h3>
            <p className="text-slate-500 text-xs mt-1 max-w-sm">
              Try clearing your search or changing the filter to see all recorded administrative logs.
            </p>
            {(searchQuery || actionFilter !== "ALL" || programFilter !== "ALL") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActionFilter("ALL");
                  setProgramFilter("ALL");
                }}
                className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-[#003c84] text-xs font-semibold border border-blue-200 hover:bg-blue-100 transition cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredLogs.map((log) => {
              const cfg = getActionConfig(log.action);
              const Icon = cfg.icon;
              const formattedDate = log.timestamp
                ? new Date(log.timestamp).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true
                  })
                : "Unknown";

              return (
                <div
                  key={log.id}
                  className="bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-blue-200 rounded-2xl p-4 sm:p-5 transition-all shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5"
                >
                  {/* Left: Action Icon + Details */}
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${cfg.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${cfg.color}`}>
                          {cfg.label}
                        </span>

                        {log.program && log.program !== "General" && (
                          <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                            {log.program}
                          </span>
                        )}

                        <span className="text-xs text-slate-400 flex items-center gap-1 ml-auto sm:ml-0 font-medium">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {formatTimeAgo(log.timestamp)}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-800 break-words">
                        {log.targetTitle}
                      </h4>

                      {log.details && (
                        <p className="text-xs text-slate-600 mt-0.5 break-words">
                          {log.details}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Timestamp & Device Metadata */}
                  <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 w-full sm:w-auto">
                    <div className="text-[11px] font-mono text-slate-500 flex items-center sm:justify-end gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center sm:justify-end gap-1 mt-0.5">
                      {log.clientDevice === "Mobile Device" ? (
                        <Smartphone className="w-3 h-3" />
                      ) : (
                        <Laptop className="w-3 h-3" />
                      )}
                      <span>{log.clientDevice || "Web Browser"}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
