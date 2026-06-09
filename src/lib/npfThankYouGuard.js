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
  const storedToken = window.sessionStorage.getItem(TOKEN_STORAGE_KEY);
  const isValid = Boolean(token && storedToken && token === storedToken);

  window.sessionStorage.removeItem(TOKEN_STORAGE_KEY);

  return isValid;
}
