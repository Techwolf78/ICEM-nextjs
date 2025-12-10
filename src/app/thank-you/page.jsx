"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 6000);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZNKKDM');
          `,
        }}
      />
      <div className="min-h-screen bg-secondary/10 flex items-center justify-center px-4">
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
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PZNKKDM"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
}
