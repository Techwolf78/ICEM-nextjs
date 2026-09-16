"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "@/lib/auth";
import { db, storage } from "@/lib/firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import {
  GraduationCap,
  Plus,
  ArrowUp,
  ArrowDown,
  Trash2,
  Edit,
  ExternalLink,
  LogOut,
  UploadCloud,
  FileText,
  Loader2,
  Eye,
  Calendar,
  Layers,
  Building2,
  FileCheck,
  FolderPlus,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { logAuditEvent } from "@/lib/auditLogger";

const DEFAULT_PROGRAM_OPTIONS = [
  "Notice/Vacancy",
  "Engineering",
  "M.Tech",
  "MBA",
  "MCA",
  "MBA & MCA Direct Second Year (Lateral Entry)",
  "MBA Working Professional",
  "DSE Mechanical Engineering Working Professional"
];

export default function AdmissionAdminCMS() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Notice/Vacancy");
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Separate Modals
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [isTabModalOpen, setIsTabModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // New Tab Modal State
  const [newTabName, setNewTabName] = useState("");
  const [isCreatingTab, setIsCreatingTab] = useState(false);

  // Notice Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "Merit List (IL)",
    date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    isNew: true,
    description: "",
    pdf: "",
    program: "Notice/Vacancy"
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatusText, setUploadStatusText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const noticeFormRef = useRef(null);

  // Lock background scroll when modal is open and prevent background scrolling
  useEffect(() => {
    if (isNoticeModalOpen || isTabModalOpen) {
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.stop();
      }
      const prevDocOverflow = document.documentElement.style.overflow;
      const prevBodyOverflow = document.body.style.overflow;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      return () => {
        document.documentElement.style.overflow = prevDocOverflow;
        document.body.style.overflow = prevBodyOverflow;
        document.body.style.paddingRight = "";
        if (typeof window !== "undefined" && window.__lenis) {
          window.__lenis.start();
        }
      };
    }
  }, [isNoticeModalOpen, isTabModalOpen]);

  // Check Auth
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/admission-2026/login");
    }
  }, [router]);

  // Real-time Firestore sync for admission_2026 collection
  useEffect(() => {
    const qNotices = query(collection(db, "admission_2026"));
    const unsubscribeNotices = onSnapshot(
      qNotices,
      (snapshot) => {
        const items = [];
        snapshot.forEach((docSnap) => {
          items.push({ id: docSnap.id, ...docSnap.data() });
        });
        setNotices(items);
        setLoading(false);
      },
      (error) => {
        console.error("Firestore notices listen error:", error);
        toast.error("Failed to load live notices: " + error.message);
        setLoading(false);
      }
    );

    return () => unsubscribeNotices();
  }, []);

  // Compute all available programmes (defaults + all programs in admission_2026)
  const allProgramNames = Array.from(
    new Set([
      ...DEFAULT_PROGRAM_OPTIONS,
      ...notices
        .map((n) => (n.program === "Common" ? "Notice/Vacancy" : n.program))
        .filter(Boolean)
    ])
  );

  // Filter and sort items for active tab (excluding metadata documents)
  const currentTabItems = notices
    .filter((n) => {
      const prog = n.program === "Common" ? "Notice/Vacancy" : n.program;
      return prog === activeTab && !n.isTabDefinition;
    })
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || (b.createdAt || "").localeCompare(a.createdAt || ""));

  // Reorder Item Up / Down with deterministic sequential ordering
  const handleMove = async (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentTabItems.length) return;

    // 1. Physically swap the items in the array
    const updated = [...currentTabItems];
    const [movedItem] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, movedItem);

    // 2. Assign unique sequential order (1, 2, 3...) to every notice in this tab
    try {
      const batch = writeBatch(db);
      updated.forEach((item, idx) => {
        batch.update(doc(db, "admission_2026", item.id), { order: idx + 1 });
      });

      await batch.commit();
      logAuditEvent({
        action: "REORDER_NOTICE",
        targetType: "NOTICE",
        targetTitle: movedItem.title || "Notice",
        program: activeTab,
        details: `Moved notice "${movedItem.title}" ${direction.toUpperCase()} from position #${index + 1} to #${targetIndex + 1}`
      });
      toast.success("Order updated live!");
    } catch (err) {
      console.error("Reorder error:", err);
      toast.error("Failed to reorder: " + err.message);
    }
  };

  // Open Notice Modal
  const openNoticeModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title || "",
        category: item.category || "Merit List (IL)",
        date: item.date || "",
        isNew: item.isNew ?? true,
        description: item.description || "",
        pdf: item.pdf || "",
        program: (item.program === "Common" ? "Notice/Vacancy" : item.program) || activeTab
      });
    } else {
      setEditingItem(null);
      setFormData({
        title: "",
        category: "Merit List (IL)",
        date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
        isNew: true,
        description: "",
        pdf: "",
        program: activeTab || "Notice/Vacancy"
      });
    }
    setSelectedFile(null);
    setUploadProgress(0);
    setUploadStatusText("");
    setIsNoticeModalOpen(true);
  };

  // Create Brand New Tab inside admission_2026 collection
  const handleCreateNewTab = async (e) => {
    e.preventDefault();
    const cleanTabName = newTabName.trim();
    if (!cleanTabName) {
      toast.error("Please enter a programme tab name.");
      return;
    }

    if (allProgramNames.map((t) => t.toLowerCase()).includes(cleanTabName.toLowerCase())) {
      toast.error("This programme tab already exists!");
      setActiveTab(cleanTabName);
      setIsTabModalOpen(false);
      return;
    }

    setIsCreatingTab(true);
    try {
      // Saved directly inside admission_2026 collection (which already has full write permissions)
      const tabDocId = `tab_def_${cleanTabName.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase()}`;
      await setDoc(doc(db, "admission_2026", tabDocId), {
        program: cleanTabName,
        isTabDefinition: true,
        createdAt: new Date().toISOString()
      });

      logAuditEvent({
        action: "CREATE_TAB",
        targetType: "TAB",
        targetTitle: cleanTabName,
        program: cleanTabName,
        details: `Created new programme tab "${cleanTabName}"`
      });

      toast.success(`Tab "${cleanTabName}" created successfully!`);
      setActiveTab(cleanTabName);
      setNewTabName("");
      setIsTabModalOpen(false);
    } catch (err) {
      console.error("Tab create error:", err);
      toast.error("Failed to create tab: " + err.message);
    } finally {
      setIsCreatingTab(false);
    }
  };

  // Delete an empty custom tab
  const handleDeleteCustomTab = async (tabName) => {
    if (!confirm(`Are you sure you want to remove the custom tab "${tabName}"?`)) return;
    try {
      const tabDocId = `tab_def_${tabName.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase()}`;
      await deleteDoc(doc(db, "admission_2026", tabDocId));
      logAuditEvent({
        action: "DELETE_TAB",
        targetType: "TAB",
        targetTitle: tabName,
        program: tabName,
        details: `Removed empty programme tab "${tabName}"`
      });
      toast.success(`Tab "${tabName}" removed successfully.`);
      setActiveTab("Notice/Vacancy");
    } catch (err) {
      toast.error("Failed to delete tab: " + err.message);
    }
  };

  // Handle Notice Form Submit with full instant visual progress feedback
  const handleNoticeSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error("Please enter a title.");
      return;
    }

    if (!editingItem && !selectedFile && !formData.pdf) {
      toast.error("Please select a PDF document to upload.");
      return;
    }

    if (selectedFile) {
      if (!selectedFile.name.toLowerCase().endsWith(".pdf") && selectedFile.type !== "application/pdf") {
        toast.error("Only PDF files are supported. Please choose a .pdf document.");
        return;
      }
      if (selectedFile.size > 25 * 1024 * 1024) {
        toast.error("File exceeds 25 MB limit. Please compress your PDF before uploading.");
        return;
      }
    }

    setIsSubmitting(true);
    setUploadProgress(selectedFile ? 5 : 50);
    setUploadStatusText(selectedFile ? "Initializing cloud upload..." : "Updating database notice...");

    let finalPdfUrl = formData.pdf;

    try {
      // 1. Upload new PDF if selected
      if (selectedFile) {
        setUploadStatusText(`Uploading ${selectedFile.name}...`);
        const cleanName = selectedFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const fileRef = ref(storage, `admission-2026/${Date.now()}_${cleanName}`);
        const uploadTask = uploadBytesResumable(fileRef, selectedFile);

        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setUploadProgress(progress);
              setUploadStatusText(`Uploading PDF: ${progress}% (${(snapshot.bytesTransferred / 1024 / 1024).toFixed(1)} MB / ${(snapshot.totalBytes / 1024 / 1024).toFixed(1)} MB)`);
            },
            (error) => reject(error),
            async () => {
              setUploadStatusText("Processing PDF link & publishing to website...");
              finalPdfUrl = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            }
          );
        });
      }

      setUploadStatusText("Saving notice to live website...");
      setUploadProgress(95);

      // 2. Save Notice to Firestore
      if (editingItem) {
        await updateDoc(doc(db, "admission_2026", editingItem.id), {
          ...formData,
          pdf: finalPdfUrl,
          updatedAt: new Date().toISOString()
        });
        logAuditEvent({
          action: "EDIT_NOTICE",
          targetType: "NOTICE",
          targetTitle: formData.title,
          program: formData.program,
          details: `Updated notice "${formData.title}" in tab "${formData.program}"${selectedFile ? ` (Uploaded new PDF: ${selectedFile.name})` : ""}`
        });
        toast.success("Notice updated successfully!");
      } else {
        const progItems = notices.filter((n) => n.program === formData.program && !n.isTabDefinition);
        const batch = writeBatch(db);
        const newNoticeRef = doc(collection(db, "admission_2026"));

        // New notice gets position #1 (top of list)
        batch.set(newNoticeRef, {
          ...formData,
          pdf: finalPdfUrl,
          order: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });

        // Shift all existing notices down so every item has a unique sequential order (2, 3, 4...)
        const sortedExisting = [...progItems].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
        sortedExisting.forEach((item, idx) => {
          batch.update(doc(db, "admission_2026", item.id), { order: idx + 2 });
        });

        await batch.commit();
        logAuditEvent({
          action: "ADD_NOTICE",
          targetType: "NOTICE",
          targetTitle: formData.title,
          program: formData.program,
          details: `Published new notice "${formData.title}" in tab "${formData.program}" with PDF: ${selectedFile ? selectedFile.name : (formData.pdf || "None")}`
        });
        toast.success("New notice published live!");
      }

      setUploadProgress(100);
      setUploadStatusText("Published live!");
      setTimeout(() => {
        setIsNoticeModalOpen(false);
      }, 400);
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to save notice: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Notice
  const handleDelete = async (item) => {
    if (!confirm(`Are you sure you want to delete "${item.title}"?`)) return;

    try {
      await deleteDoc(doc(db, "admission_2026", item.id));
      logAuditEvent({
        action: "DELETE_NOTICE",
        targetType: "NOTICE",
        targetTitle: item.title,
        program: item.program,
        details: `Deleted notice "${item.title}" from tab "${item.program}"`
      });
      toast.success("Notice removed from live website.");
    } catch (err) {
      toast.error("Failed to delete: " + err.message);
    }
  };

  const handleLogout = () => {
    logAuditEvent({
      action: "LOGOUT",
      targetType: "AUTH",
      targetTitle: "Admin Session",
      details: "Administrator logged out from CMS"
    });
    logout();
    router.replace("/admission-2026/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/40 text-slate-800 pb-24">
      <Toaster position="top-right" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 border-b border-slate-200/80 backdrop-blur-md px-3 sm:px-8 py-2.5 sm:py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#003c84] to-[#278da4] flex items-center justify-center text-white shadow-md shadow-blue-900/15 shrink-0">
              <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg font-bold text-slate-900 flex items-center gap-1.5 truncate">
                <span>ICEM Admission CMS</span>
                <span className="text-[10px] sm:text-[11px] bg-emerald-50 text-emerald-700 font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                  ● Live Sync
                </span>
              </h1>
              <p className="text-[11px] text-slate-500 hidden md:block truncate">
                Manage notices, merit lists, dynamic tabs &amp; instant PDF uploads
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <a
              href="/admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#003c84] text-xs font-semibold border border-blue-200/80 transition"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Public</span>
              <span className="sm:hidden">Site</span>
              <ExternalLink className="w-3 h-3 text-[#003c84] hidden sm:inline" />
            </a>

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
        {/* Actions bar with 2 Separate Buttons */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xs border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Manage Notices &amp; Programmes</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select a tab below to rearrange/edit, or use the buttons to add a notice or create a new tab.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
            {/* 1. SEPARATE BUTTON: CREATE NEW TAB */}
            <button
              onClick={() => {
                setNewTabName("");
                setIsTabModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#003c84] text-xs sm:text-sm font-semibold border border-blue-200 shadow-2xs transition cursor-pointer"
            >
              <FolderPlus className="w-4 h-4 text-[#003c84]" />
              <span>+ Add New Tab</span>
            </button>

            {/* 2. SEPARATE BUTTON: ADD NOTICE / UPLOAD PDF */}
            <button
              onClick={() => openNoticeModal()}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#003c84] via-[#1d59a3] to-[#278da4] hover:from-[#003370] hover:to-[#1f7588] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-900/20 transition transform active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Notice / Upload PDF</span>
            </button>
          </div>
        </div>

        {/* Program Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {allProgramNames.map((programName) => {
            const count = notices.filter((n) => {
              const prog = n.program === "Common" ? "Notice/Vacancy" : n.program;
              return prog === programName && !n.isTabDefinition;
            }).length;
            const isActive = activeTab === programName;
            return (
              <button
                key={programName}
                onClick={() => setActiveTab(programName)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#003c84] text-white shadow-md shadow-blue-900/15 border border-[#003c84]"
                    : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs"
                }`}
              >
                <span>{programName}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-blue-50 text-[#003c84] border border-blue-100"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Notices Table / List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Loader2 className="w-8 h-8 animate-spin text-[#003c84] mb-3" />
            <p className="text-slate-500 text-sm font-medium">Connecting to live cloud database...</p>
          </div>
        ) : currentTabItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-200 text-center px-4">
            <FileText className="w-12 h-12 text-slate-300 mb-3" />
            <h3 className="text-base font-bold text-slate-700">No notices in &quot;{activeTab}&quot; yet</h3>
            <p className="text-slate-500 text-xs mt-1 max-w-sm">
              Click &quot;Add Notice / Upload PDF&quot; above to upload your first merit list or document to this tab.
            </p>
            {!DEFAULT_PROGRAM_OPTIONS.includes(activeTab) && (
              <button
                onClick={() => handleDeleteCustomTab(activeTab)}
                className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-semibold border border-rose-200 transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove Empty Tab &quot;{activeTab}&quot;</span>
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {currentTabItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-blue-300 rounded-2xl p-4 sm:p-5 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm"
              >
                {/* Notice Info */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {/* Order controls */}
                  <div className="flex flex-col items-center gap-1 bg-slate-50 p-1.5 rounded-xl border border-slate-200 shrink-0">
                    <button
                      onClick={() => handleMove(index, "up")}
                      disabled={index === 0}
                      title="Move Up"
                      className="p-1 hover:bg-blue-50 text-slate-600 hover:text-[#003c84] rounded disabled:opacity-20 disabled:hover:bg-transparent cursor-pointer"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-mono text-slate-500 font-bold">
                      {index + 1}
                    </span>
                    <button
                      onClick={() => handleMove(index, "down")}
                      disabled={index === currentTabItems.length - 1}
                      title="Move Down"
                      className="p-1 hover:bg-blue-50 text-slate-600 hover:text-[#003c84] rounded disabled:opacity-20 disabled:hover:bg-transparent cursor-pointer"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] md:text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-[#003c84]">
                        {item.category}
                      </span>
                      {item.isNew && (
                        <span className="text-[10px] md:text-xs font-extrabold px-1.5 py-0.5 rounded bg-amber-500 text-white">
                          NEW
                        </span>
                      )}
                      <span className="text-[10px] md:text-xs text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug break-words">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    <div className="pt-1">
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#003c84] hover:text-[#1d59a3] font-semibold underline-offset-4 hover:underline"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Document / PDF</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Edit / Delete Buttons */}
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button
                    onClick={() => openNoticeModal(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => handleDelete(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-semibold border border-rose-200 transition cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ================= MODAL 1: ADD NEW TAB (SEPARATE) ================= */}
      {isTabModalOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overscroll-contain"
        >
          <div
            data-lenis-prevent
            className="w-full max-w-md bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150 overscroll-contain"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-white shrink-0">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <FolderPlus className="w-4 h-4 sm:w-5 sm:h-5 text-[#003c84]" />
                <span>Create New Programme Tab</span>
              </h3>
              <button
                onClick={() => setIsTabModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              id="tabForm"
              data-lenis-prevent
              onSubmit={handleCreateNewTab}
              className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3.5 overscroll-contain"
            >
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Programme / Degree Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BCA, B.Sc Computer Science, Polytechnic"
                  value={newTabName}
                  onChange={(e) => setNewTabName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#003c84] focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none"
                  autoFocus
                />
                <p className="text-[11px] text-slate-400 mt-1.5">
                  This creates an empty tab ready for notices to be added.
                </p>
              </div>
            </form>

            <div className="px-4 sm:px-6 py-3 border-t border-slate-100 bg-slate-50/80 shrink-0 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setIsTabModalOpen(false)}
                className="px-3.5 sm:px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="tabForm"
                disabled={isCreatingTab}
                className="px-4 sm:px-5 py-2 rounded-xl bg-[#003c84] hover:bg-[#1d59a3] text-white text-xs font-semibold shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isCreatingTab ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Creating...</span>
                  </>
                ) : (
                  <span>Create Tab</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 2: ADD / EDIT NOTICE (SEPARATE) ================= */}
      {isNoticeModalOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 backdrop-blur-xs overscroll-contain"
          onClick={(e) => {
            if (e.target === e.currentTarget && !isSubmitting) setIsNoticeModalOpen(false);
          }}
          onWheel={(e) => {
            // Forward mouse wheel from backdrop directly to form
            if (noticeFormRef.current) {
              noticeFormRef.current.scrollTop += e.deltaY;
            }
          }}
        >
          <div
            data-lenis-prevent
            className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150 overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header (Always Pinned at Top) */}
            <div
              data-lenis-prevent
              className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-white shrink-0 select-none"
              onWheel={(e) => {
                if (noticeFormRef.current) {
                  noticeFormRef.current.scrollTop += e.deltaY;
                }
              }}
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                {editingItem ? <Edit className="w-4 h-4 sm:w-5 sm:h-5 text-[#003c84]" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-[#003c84]" />}
                <span>{editingItem ? "Edit Admission Notice" : "Upload New Notice / PDF"}</span>
              </h3>
              <button
                onClick={() => {
                  if (!isSubmitting) setIsNoticeModalOpen(false);
                }}
                disabled={isSubmitting}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer disabled:opacity-30"
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <form
              id="noticeForm"
              ref={noticeFormRef}
              data-lenis-prevent
              onSubmit={handleNoticeSubmit}
              className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3 sm:space-y-3.5 overscroll-contain"
            >
              {/* Submitting Overlay / Loading Banner */}
              {isSubmitting && (
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-[#003c84] flex flex-col gap-2 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-[#003c84]" />
                      <span className="font-bold text-xs sm:text-sm">{uploadStatusText || "Uploading & publishing..."}</span>
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs font-extrabold bg-blue-200/80 px-2 py-0.5 rounded-full">
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-blue-200/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#003c84] to-[#278da4] transition-all duration-300 rounded-full"
                      style={{ width: `${Math.max(uploadProgress, 8)}%` }}
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#003c84]" />
                    Please keep this window open while your PDF uploads directly to Google Cloud.
                  </p>
                </div>
              )}

              {/* Select Programme Tab */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Target Programme Tab
                </label>
                <select
                  disabled={isSubmitting}
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#003c84] focus:bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 outline-none disabled:opacity-50"
                >
                  {allProgramNames.map((pName) => (
                    <option key={pName} value={pName}>
                      {pName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Notice Title *
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Provisional Merit List (Version 1) – First Year B.Tech"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#003c84] focus:bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 outline-none disabled:opacity-50"
                />
              </div>

              {/* Category & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Category Badge
                  </label>
                  <input
                    type="text"
                    disabled={isSubmitting}
                    placeholder="e.g. Merit List (IL), Vacancy Position"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#003c84] focus:bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 outline-none disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Display Date
                  </label>
                  <input
                    type="text"
                    disabled={isSubmitting}
                    placeholder="e.g. 11 September 2026"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#003c84] focus:bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 outline-none disabled:opacity-50"
                  />
                </div>
              </div>

              {/* New Badge Toggle */}
              <div className="flex items-center gap-2.5 py-0.5">
                <input
                  type="checkbox"
                  id="isNewToggle"
                  disabled={isSubmitting}
                  checked={formData.isNew}
                  onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
                  className="w-4 h-4 accent-[#003c84] rounded cursor-pointer disabled:opacity-50"
                />
                <label htmlFor="isNewToggle" className="text-xs sm:text-sm text-slate-700 font-semibold cursor-pointer">
                  Show &quot;NEW&quot; highlight badge
                </label>
              </div>

              {/* Description */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Detailed Description (Optional)
                </label>
                <textarea
                  rows={2}
                  disabled={isSubmitting}
                  placeholder="Provide instructions, reporting schedule, or guidelines for candidates..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#003c84] focus:bg-white rounded-xl p-2.5 text-xs sm:text-sm text-slate-800 outline-none resize-none disabled:opacity-50"
                />
              </div>

              {/* PDF Document File */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  PDF Document File
                </label>
                
                <div className={`border-2 border-dashed rounded-xl p-3 sm:p-3.5 text-center transition ${isSubmitting ? 'border-slate-200 bg-slate-50 opacity-60' : 'border-blue-200 hover:border-blue-400 bg-blue-50/40'}`}>
                  <input
                    type="file"
                    accept="application/pdf"
                    id="pdfFileInput"
                    disabled={isSubmitting}
                    onChange={(e) => setSelectedFile(e.target.files[0] || null)}
                    className="hidden"
                  />
                  <label htmlFor="pdfFileInput" className={`${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'} flex flex-col items-center justify-center gap-1.5`}>
                    <UploadCloud className="w-6 h-6 text-[#003c84]" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {selectedFile ? (
                        <span className="text-emerald-600 font-bold break-all">{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                      ) : (
                        "Click to select a PDF from your computer"
                      )}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-400">PDF files up to 25 MB</span>
                  </label>
                </div>

                {formData.pdf && !selectedFile && (
                  <p className="text-[11px] text-slate-500 mt-1 truncate">
                    Current Document: <span className="text-slate-700 font-mono font-medium">{formData.pdf}</span>
                  </p>
                )}
              </div>
            </form>

            {/* Modal Footer (Always Pinned at Bottom) */}
            <div
              data-lenis-prevent
              className="px-4 sm:px-6 py-3 border-t border-slate-100 bg-slate-50/80 shrink-0 flex items-center justify-end gap-2.5"
              onWheel={(e) => {
                if (noticeFormRef.current) {
                  noticeFormRef.current.scrollTop += e.deltaY;
                }
              }}
            >
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setIsNoticeModalOpen(false)}
                className="px-3.5 sm:px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold transition cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="noticeForm"
                disabled={isSubmitting}
                className="px-4 sm:px-6 py-2 rounded-xl bg-gradient-to-r from-[#003c84] via-[#1d59a3] to-[#278da4] hover:from-[#003370] hover:to-[#1f7588] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-900/20 transition flex items-center gap-1.5 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{uploadStatusText || "Uploading..."}</span>
                  </>
                ) : (
                  <span>{editingItem ? "Update Notice" : "Publish Notice Live"}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
