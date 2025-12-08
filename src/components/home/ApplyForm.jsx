"use client";

import React from "react";

export default function ApplyForm({ variant = "card" }) {
  const isModal = variant === "modal";
  const iframeHeight = isModal ? "500" : "600";

  return (
    <div className={`flex items-center justify-center ${isModal ? 'min-h-[500px]' : 'min-h-[600px]'}`}>
      <iframe
        src="https://widgets.nopaperforms.com/register?&w=9fa0f32fe4f405fa68dc3df39ef6a11b"
        width="100%"
        height={iframeHeight}
        frameBorder="0"
        allowFullScreen
        title="NPF Enquiry Form"
      ></iframe>
    </div>
  );
}
