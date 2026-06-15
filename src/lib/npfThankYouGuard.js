"use client";

const THANK_YOU_PATH = "/thank-you";
const TOKEN_PARAM = "npf_token";
const TOKEN_STORAGE_KEY = "icem_npf_thank_you_token";

function createToken() {
  if (typeof window !== "undefined" && window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function deleteCookie(name) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; domain=.indiraicem.ac.in; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax`;
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax`;
}

export function createNpfThankYouUrl() {
  if (typeof window === "undefined") {
    return THANK_YOU_PATH;
  }

  const token = createToken();
  window.sessionStorage.setItem(TOKEN_STORAGE_KEY, token);

  return `${THANK_YOU_PATH}?${TOKEN_PARAM}=${encodeURIComponent(token)}`;
}

export function consumeValidNpfThankYouVisit() {
  if (typeof window === "undefined") {
    return false;
  }

  const params = new URLSearchParams(window.location.search);
  const token = params.get(TOKEN_PARAM);
  
  // 1. Try sessionStorage first
  const storedToken = window.sessionStorage.getItem(TOKEN_STORAGE_KEY);
  
  // 2. Try cookie second (for cross-subdomain submission)
  const cookieToken = getCookie(TOKEN_STORAGE_KEY);
  
  const isValid = Boolean(
    token && 
    ((storedToken && token === storedToken) || (cookieToken && token === cookieToken))
  );

  // Clean up both
  window.sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  deleteCookie(TOKEN_STORAGE_KEY);

  return isValid;
}
