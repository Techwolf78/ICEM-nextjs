"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function InstagramMosaic() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Script Loading
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.instgrm) window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    }

    // 2. Resize Observer
    let timeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Ensure ScrollTrigger exists before calling refresh
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.refresh();
        }
      }, 500);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  const posts = [
    "https://www.instagram.com/p/DP0GgGyCEa9/?utm_source=ig_embed", // Post 1 (Always visible)
    "https://www.instagram.com/p/DPv1b_BjHqw/?utm_source=ig_embed", // Post 2 (Hidden on mobile)
    "https://www.instagram.com/p/DPLxX_7jFyx/?utm_source=ig_embed", // Post 3 (Hidden on mobile)
  ];

  return (
    <section className="w-full py-12 bg-white relative z-10">
      <h2 className="text-3xl font-semibold text-center mb-10">
        <span className="text-secondary">#Connect</span> with us on Socials
      </h2>

      <div
        ref={containerRef}
        // Change grid-cols: grid-cols-1 for mobile, md:grid-cols-2 for tablet/desktop
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto"
        style={{ contain: "content" }}
      >
        {posts.map((url, index) => (
          <Link
            key={index}
            href={url} // Make the whole card clickable
            target="_blank"
            rel="noopener noreferrer"
            // Hide the 2nd and 3rd posts on mobile (index > 0)
            className={`w-full flex justify-center items-center relative cursor-pointer transition-transform hover:scale-[1.02] ${
              index > 0 ? "hidden md:flex" : "" // ONLY Post 1 (index 0) is visible on mobile
            }`}
            style={{ minHeight: "550px" }}
          >
            {/* Overlay div to ensure clicks work on the link, 
                not getting eaten by the iframe
            */}
            <div className="absolute inset-0 z-20 bg-transparent" />

            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "12px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5), 0 4px 10px 0 rgba(0,0,0,0.15)",
                margin: "auto",
                padding: 0,
                width: "100%",
                maxWidth: "350px",
                // ⬇️ THE FIX: Disable mouse interaction on the iframe itself
                pointerEvents: "none",
              }}
            ></blockquote>
          </Link>
        ))}
      </div>
    </section>
  );
}
