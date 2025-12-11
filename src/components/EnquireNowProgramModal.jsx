"use client";
import React, { useState, useEffect, useRef } from "react";

export default function EnquireNowProgramModal({ isOpen, onClose }) {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [message, setMessage] = useState("Loading form...");
  const timerRef = useRef(null);

  const handleIframeLoad = () => {
    setShowSkeleton(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShowSkeleton(true);
      setMessage("Loading form...");
      timerRef.current = setTimeout(() => {
        if (showSkeleton) {
          setMessage("NPF form not supported on this domain");
        }
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const redirectUrl = '/thank-you';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-[999] p-4">
      <div className="bg-white w-full max-w-xl h-[65vh] md:h-[95vh] p-2 rounded-2xl shadow-2xl relative 
                      overflow-y-auto flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl 
                     transition-all duration-300 hover:scale-110 bg-transparent border-2 border-black rounded-full w-6 h-6 flex items-center justify-center z-10"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-secondary border-b pb-1 flex-shrink-0">
          Enquire Now
        </h2>

        {/* NPF Form or Skeleton */}
        <div className="flex-1 flex items-center justify-center relative">
          {showSkeleton && (
            <div className="absolute inset-0 w-full h-full bg-gray-100 rounded-lg p-4 animate-pulse z-10">
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
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="NPF Enquiry Form"
            className="rounded-lg"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </div>
  );
}