"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ApplyForm({ variant = "card" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isLoaded && !error) {
      timerRef.current = setTimeout(() => {
        setError(true);
      }, 5000);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isLoaded, error]);

  const isModal = variant === "modal";
  const iframeHeight = isModal ? "500" : "600";

  if (error) {
    return (
      <div className={`flex items-center justify-center ${isModal ? 'min-h-[500px]' : 'min-h-[600px]'}`}>
        <div className="text-center text-red-500">
          Domain is not eligible for this nopaperforms form.
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${isModal ? 'min-h-[500px]' : 'min-h-[600px]'}`}>
      <iframe
        src="https://widgets.nopaperforms.com/register?&w=9fa0f32fe4f405fa68dc3df39ef6a11b"
        width="100%"
        height={iframeHeight}
        frameBorder="0"
        allowFullScreen
        title="NPF Enquiry Form"
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  );
}
