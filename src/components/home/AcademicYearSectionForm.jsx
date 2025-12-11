"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AcademicYearSectionForm() {
  const formRef = useRef(null);
  const timeoutRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

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

    // Track form loading
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          setIsLoaded(true);
          clearTimeout(timeoutRef.current);
          observer.disconnect();
        }
      });
    });

    if (formRef.current) {
      observer.observe(formRef.current, { childList: true, subtree: true });
    }

    // Show error after 3 seconds if not loaded
    timeoutRef.current = setTimeout(() => {
      if (!isLoaded) {
        setIsError(true);
        observer.disconnect();
      }
    }, 3000);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('resize', setFormHeight);
      observer.disconnect();
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="p-3 md:p-6 h-full relative">
      {/* Title */}
      <h3 className="text-xl font-bold text-center mb-2 text-secondary">
        Enquire Now
      </h3>

      {/* NPF Form */}
      <div className="h-full">
        <div ref={formRef} className="npf_wgts w-full h-full" data-w="9fa0f32fe4f405fa68dc3df39ef6a11b"></div>
        {!isLoaded && !isError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <p>Loading form...</p>
          </div>
        )}
        {isError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <p className="text-red-500">Error: Form could not load. Domain may not be supported.</p>
          </div>
        )}
      </div>
    </div>
  );
}
