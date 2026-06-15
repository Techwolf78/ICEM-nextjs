"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(10);
  const [shouldTrack, setShouldTrack] = useState(false);

  useEffect(() => {
    // 1. If loaded inside an iframe (from NPF widget redirect), break out and load on parent window.
    if (window.self !== window.top) {
      window.top.location.href = window.location.href;
      return;
    }

    // 2. Track successful form submission once per browser session/tab to avoid duplicate counts on refresh
    const hasTracked = sessionStorage.getItem("icem_conversion_tracked");
    if (!hasTracked) {
      setShouldTrack(true);
      sessionStorage.setItem("icem_conversion_tracked", "true");

      // Push event to GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission_success",
        page_path: "/thank-you",
      });
    }

    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 10000);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (typeof window !== "undefined" && window.self !== window.top) {
    return null; // Keep screen clean while breaking out of iframe
  }

  return (
    <>
      <div className="min-h-screen bg-secondary/10 flex items-center justify-center px-4">
        {/* Google Ads Conversion Event - only tracked once per session */}
        {shouldTrack && (
          <Script
            id="google-ads-conversion"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('event', 'conversion', {'send_to': 'AW-16606532987/IVt0COaGu7kZEPuqzu49'});
              `,
            }}
          />
        )}
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-primary mb-2">
              Thank You!
            </h1>
            <p className="text-secondary">
              Your enquiry has been submitted successfully. We will get back to you soon.
            </p>
            <p className="text-sm text-primary/70 mt-2">
              Redirecting to home page in {countdown} seconds...
            </p>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => window.history.back()}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Go Back
            </button>
            <a
              href="/"
              className="block w-full bg-secondary/20 text-secondary py-2 px-4 rounded-lg hover:bg-secondary/30 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
