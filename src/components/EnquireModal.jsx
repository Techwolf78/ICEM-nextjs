"use client";
import React, { useState, useEffect, useRef } from "react";

export default function EnquireModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-[999] p-4">
      <div className="bg-white w-full max-w-5xl h-[90vh] p-6 rounded-2xl shadow-2xl relative 
                      overflow-y-auto flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl 
                     transition-all duration-300 hover:scale-125 bg-gray-100 hover:bg-red-50 rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-secondary border-b pb-2 flex-shrink-0">
          Enquire Now
        </h2>

        {/* NPF Form */}
        <div className="flex-1 flex items-center justify-center">
          {error ? (
            <div className="text-center text-red-500">
              Domain is not eligible for this nopaperforms form.
            </div>
          ) : (
            <iframe
              src="https://widgets.nopaperforms.com/register?&w=9fa0f32fe4f405fa68dc3df39ef6a11b"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="NPF Enquiry Form"
              className="rounded-lg"
              onLoad={() => setIsLoaded(true)}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
