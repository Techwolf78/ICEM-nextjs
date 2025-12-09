"use client";
import React, { useEffect, useRef } from "react";

export default function AcademicYearSectionForm() {
  const formRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    // Set responsive height for the form
    const setFormHeight = () => {
      if (formRef.current) {
        const height = window.innerWidth < 640 ? '510px' : window.innerWidth < 768 ? '350px' : '520px';
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
  }, []);

  return (
    <div className="p-3 md:p-6 h-full">
      {/* Title */}
      <h3 className="text-xl font-bold text-center mb-2 text-secondary">
        Enquire Now
      </h3>

      {/* NPF Form */}
      <div className="h-full">
        <div ref={formRef} className="npf_wgts w-full h-full" data-w="9fa0f32fe4f405fa68dc3df39ef6a11b"></div>
      </div>
    </div>
  );
}