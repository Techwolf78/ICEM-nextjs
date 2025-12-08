"use client";
import React, { useEffect, useRef } from "react";

export default function NavEnquireModal({ isOpen, onClose }) {
  const formRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);

      // Set responsive height for the form
      const setFormHeight = () => {
        if (formRef.current) {
          const height = window.innerWidth < 640 ? '300px' : window.innerWidth < 768 ? '350px' : '520px';
          formRef.current.setAttribute('data-height', height);
        }
      };

      setFormHeight(); // Set initial height

      // Update on resize
      window.addEventListener('resize', setFormHeight);

      return () => {
        document.body.removeChild(script);
        window.removeEventListener('resize', setFormHeight);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-md flex justify-center items-center z-[9999] p-4">
      <div className="bg-white w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-[70vh] sm:h-[80vh] md:h-[90vh] p-4 sm:p-5 md:p-6 rounded-2xl shadow-2xl relative 
                      overflow-y-auto flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl sm:text-3xl 
                     transition-all duration-300 hover:scale-125 bg-gray-100 hover:bg-red-50 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-secondary border-b pb-2 flex-shrink-0">
          Enquire Now
        </h2>

        {/* NPF Form */}
        <div className="flex-1 flex items-center justify-centermd:min-h-[520px]">
          <div ref={formRef} className="npf_wgts w-full" data-height="520px" data-w="9fa0f32fe4f405fa68dc3df39ef6a11b"></div>
        </div>
      </div>
    </div>
  );
}