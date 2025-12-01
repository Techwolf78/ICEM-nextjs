"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Using next/image for optimization

export default function Loader({ isLoading }) {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Check if the browser is Safari (and not Chrome/Android pretending to be Safari)
    const checkSafari = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(checkSafari);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="text-center space-y-6">
        {/* Floating animation */}
        <div className="animate-float">
          <div className="w-32 h-32 bg-transparent rounded-2xl flex items-center justify-center mx-auto">
            {/* CONDITIONAL RENDERING */}
            {isSafari ? (
              /* 🍎 SAFARI USERS: Get the static PNG (100% Safe) */
              <Image
                src="/chanakya.png"
                alt="Loading..."
                width={128}
                height={128}
                className="w-32 h-32 object-contain pointer-events-none"
                priority // Load instantly
              />
            ) : (
              /* 🪟 CHROME/WINDOWS USERS: Get the animated WebM */
              <video
                src="/chanakya.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-32 h-32 object-contain rounded-lg pointer-events-none"
              />
            )}
          </div>
        </div>

        {/* Pulsing dots */}
        <div className="flex justify-center space-x-2">
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
