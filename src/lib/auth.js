import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

// Hash utility using browser native Web Crypto API (SHA-256)
export async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function verifyPasscode(passcode) {
  try {
    const authDocRef = doc(db, "_admin_config", "admission_auth");
    const snapshot = await getDoc(authDocRef);

    if (!snapshot.exists()) {
      return { success: false, error: "Auth configuration not found in database." };
    }

    const { salt, passcodeHash } = snapshot.data();
    const calculatedHash = await sha256(passcode + salt);

    if (calculatedHash === passcodeHash) {
      // Store authenticated session token
      const sessionToken = await sha256(calculatedHash + Date.now().toString());
      sessionStorage.setItem("icem_admission_admin_token", sessionToken);
      sessionStorage.setItem("icem_admission_admin_auth_time", Date.now().toString());
      return { success: true };
    } else {
      return { success: false, error: "Incorrect passcode. Please try again." };
    }
  } catch (err) {
    console.error("Auth verification error:", err);
    return { success: false, error: err.message || "Failed to verify credentials." };
  }
}

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  const token = sessionStorage.getItem("icem_admission_admin_token");
  const authTime = sessionStorage.getItem("icem_admission_admin_auth_time");

  if (!token || !authTime) return false;

  // Session expires in 12 hours
  const elapsed = Date.now() - parseInt(authTime, 10);
  if (elapsed > 12 * 60 * 60 * 1000) {
    sessionStorage.removeItem("icem_admission_admin_token");
    sessionStorage.removeItem("icem_admission_admin_auth_time");
    return false;
  }

  return true;
}

export function logout() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem("icem_admission_admin_token");
  sessionStorage.removeItem("icem_admission_admin_auth_time");
}
