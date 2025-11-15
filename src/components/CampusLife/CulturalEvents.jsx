"use client";

import React, { useState } from "react";
import { culturalEvents } from "@/static/campuslife/cultural-events";

export default function CulturalEvents() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-semibold text-secondary mb-4">
        Cultural Activities
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        ICEM conducts various cultural activities and celebrations throughout 
        the academic year, promoting creativity, engagement, and unity among 
        students. These events showcase talent, strengthen collaboration, and 
        enrich campus life with vibrant traditions and themes.
      </p>

      <h3 className="text-xl font-semibold text-secondary mb-4">
        Cultural Event Reports & Documents
      </h3>

      <div className="space-y-2">
        {culturalEvents.map((event, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-gray-800">
                {event.title}
              </span>
              <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-4 bg-white border-t border-gray-300">
                <p className="text-gray-700 mb-2 text-sm">
                  Click below to view the document.
                </p>
                <a
                  href={event.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary underline font-semibold hover:text-tertiary transition"
                >
                  View Document
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
