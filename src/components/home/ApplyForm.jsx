"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ApplyForm({ variant = "card" }) {
  const isModal = variant === "modal";
  const [iframeHeight, setIframeHeight] = useState(isModal ? "500" : "600");
  const [minHeight, setMinHeight] = useState(isModal ? "500px" : "600px");
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [message, setMessage] = useState("Loading form...");
  const timerRef = useRef(null);

  const redirectUrl = '/thank-you';

  const handleIframeLoad = () => {
    setShowSkeleton(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (showSkeleton) {
        setMessage("NPF form not supported on this domain");
      }
    }, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        setIframeHeight("500");
        setMinHeight("500px");
      } else {
        setIframeHeight(isModal ? "500" : "600");
        setMinHeight(isModal ? "500px" : "600px");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isModal]);

  return (
    <div id="contact-form" className="flex items-center justify-center relative" style={{ minHeight }}>
      {showSkeleton && (
        <div className="absolute inset-0 w-full h-full bg-gray-100 rounded-lg p-4 animate-pulse z-10 flex flex-col justify-center">
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            <div className="h-8 bg-gray-300 rounded w-full"></div>
            <div className="h-8 bg-gray-300 rounded w-full"></div>
            <div className="h-8 bg-gray-300 rounded w-full"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
          <div className={`mt-4 text-center text-sm font-semibold ${message === "Loading form..." ? "text-gray-500" : "text-red-500"}`}>
            {message}
          </div>
        </div>
      )}
      <iframe
        src={`https://widgets.nopaperforms.com/register?&r=${redirectUrl}&w=9fa0f32fe4f405fa68dc3df39ef6a11b`}
        width="100%"
        height={iframeHeight}
        frameBorder="0"
        allowFullScreen
        title="NPF Enquiry Form"
        onLoad={handleIframeLoad}
      ></iframe>
    </div>
  );
}
