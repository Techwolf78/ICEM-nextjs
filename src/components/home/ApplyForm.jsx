"use client";

import React, { useState, useEffect } from "react";

export default function ApplyForm({ variant = "card" }) {
  const isModal = variant === "modal";
  const [iframeHeight, setIframeHeight] = useState(isModal ? "500" : "600");
  const [minHeight, setMinHeight] = useState(isModal ? "500px" : "600px");

  const redirectUrl = '/thank-you';

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
    <div id="contact-form" className="flex items-center justify-center" style={{ minHeight }}>
      <iframe
        src={`https://widgets.nopaperforms.com/register?&r=${redirectUrl}&w=9fa0f32fe4f405fa68dc3df39ef6a11b`}
        width="100%"
        height={iframeHeight}
        frameBorder="0"
        allowFullScreen
        title="NPF Enquiry Form"
      ></iframe>
    </div>
  );
}
