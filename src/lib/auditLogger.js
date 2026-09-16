import { db } from "@/lib/firebase";
import { collection, addDoc, onSnapshot, query, orderBy, limit } from "firebase/firestore";

/**
 * Log an audit action to Firestore
 */
export async function logAuditEvent({
  action,
  targetType = "NOTICE",
  targetTitle = "",
  program = "General",
  details = "",
  metadata = {}
}) {
  try {
    const auditColRef = collection(db, "admission_2026", "audit_feed", "logs");
    
    // Extract lightweight client info
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "Unknown";
    const isMobile = typeof navigator !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);
    const browserSummary = isMobile ? "Mobile Device" : "Desktop Browser";

    const logEntry = {
      action, // e.g. 'ADD_NOTICE', 'EDIT_NOTICE', 'DELETE_NOTICE', 'REORDER_NOTICE', 'CREATE_TAB', 'DELETE_TAB', 'LOGIN_SUCCESS', 'LOGOUT'
      targetType, // 'NOTICE' | 'TAB' | 'AUTH' | 'PDF'
      targetTitle: targetTitle || "N/A",
      program: program || "General",
      details: details || "",
      metadata: metadata || {},
      clientDevice: browserSummary,
      userAgent: userAgent.slice(0, 150),
      timestamp: new Date().toISOString(),
      timestampMs: Date.now()
    };

    await addDoc(auditColRef, logEntry);
  } catch (err) {
    // Non-blocking: audit log failure should never crash user actions
    console.warn("Audit log warning (non-blocking):", err.message);
  }
}

/**
 * Real-time subscription to audit logs
 */
export function subscribeAuditLogs(callback, limitCount = 150) {
  const auditColRef = collection(db, "admission_2026", "audit_feed", "logs");
  const q = query(auditColRef, orderBy("timestampMs", "desc"), limit(limitCount));

  return onSnapshot(
    q,
    (snapshot) => {
      const logs = [];
      snapshot.forEach((docSnap) => {
        logs.push({ id: docSnap.id, ...docSnap.data() });
      });
      callback(logs);
    },
    (err) => {
      console.error("Audit log subscription error:", err);
      callback([]);
    }
  );
}
