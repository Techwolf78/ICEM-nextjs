"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiX } from "react-icons/hi";

export default function NavEnquireModal({ isOpen, onClose }) {
  const enquireFormRef = useRef(null);
  const [showEnquireSkeleton, setShowEnquireSkeleton] = useState(true);
  const [enquireMessage, setEnquireMessage] = useState("Loading form...");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowEnquireSkeleton(true); // Reset skeleton on open
      setEnquireMessage("Loading form..."); // Reset message
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);

      // Observe changes in the form div
      const observer = new MutationObserver(() => {
        if (enquireFormRef.current && enquireFormRef.current.innerHTML.trim().length > 100) {
          setShowEnquireSkeleton(false);
          observer.disconnect();
        }
      });

      if (enquireFormRef.current) {
        observer.observe(enquireFormRef.current, { childList: true, subtree: true });
      }

      // Fallback: if no content after 1 second, show error
      const fallbackTimer = setTimeout(() => {
        if (showEnquireSkeleton) {
          setEnquireMessage("NPF form not supported on this domain");
          observer.disconnect();
        }
      }, 1000);

      return () => {
        document.body.removeChild(script);
        observer.disconnect();
        clearTimeout(fallbackTimer);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* ===== Enquire Drawer ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[28rem] bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-70 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-secondary text-white p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">Enquire Now</h3>
          <button
            onClick={onClose}
            className="hover:scale-110 transition-transform duration-300 text-white hover:text-gray-200"
          >
            <HiX size={24} />
          </button>
        </div>

        <div className="p-6 text-gray-800 h-full overflow-y-auto relative">
          {showEnquireSkeleton && (
            <div className="absolute inset-0 w-full h-full bg-gray-100 rounded-lg p-4 animate-pulse z-10 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                <div className="h-8 bg-gray-300 rounded w-full"></div>
                <div className="h-8 bg-gray-300 rounded w-full"></div>
                <div className="h-8 bg-gray-300 rounded w-full"></div>
                <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
              </div>
              <div className={`mt-4 text-center text-sm font-semibold ${enquireMessage === "Loading form..." ? "text-gray-500" : "text-red-500"}`}>
                {enquireMessage}
              </div>
            </div>
          )}
          <div ref={enquireFormRef} className="npf_wgts w-full" data-height="1000px" data-w="9fa0f32fe4f405fa68dc3df39ef6a11b"></div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-70 z-60 animate-in fade-in-0 duration-300"
          onClick={onClose}
        />
      )}
    </>
  );
}
