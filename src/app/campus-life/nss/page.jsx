"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { activities } from "@/static/campuslife/nss";

function NationalServiceScheme() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openReport, setOpenReport] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedNewspaper, setSelectedNewspaper] = useState(null);

  const bannerImg = "/campuslife/nssbanner.webp"; // put in public folder

  return (
    <div className="max w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={bannerImg}
          alt="ICEM Campus"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-5 px-6">
        {/* Left Section */}
        <div className="w-full bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About National Service Scheme (NSS)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            NSS has been introduced at <b>Savitribai Phule Pune University</b>{" "}
            since 1969 as part of the academic programs. The overall objective
            is educational, and service to the community is the activity through
            which the objective is achieved.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <b>National Service Scheme (NSS)</b> helps students to cater to the
            needs of the community, develop social responsibility, and
            communicate effectively.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Objectives of NSS
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              Develop social sensitivity, moral values, and professional ethics.
            </li>
            <li>
              Arrange workshops on social issues, ethics, and moral values.
            </li>
            <li>
              Organize social service groups, clubs, and outdoor field
              activities.
            </li>
          </ul>

          {/* NSS Activities Section */}
          <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">
            NSS Activities
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {activities.map((act, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-36 h-28 bg-gray-200 rounded-md flex items-center justify-center text-gray-600 text-sm">
                  <Image
                    src={act.img}
                    alt={act.title}
                    fill
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {act.title}
                  </h4>
                  <p className="text-sm text-gray-500">{act.date}</p>
                  <p className="text-gray-700 mt-2">
                    {act.desc.length > 100 ? `${act.desc.substring(0, 100)}...` : act.desc}
                  </p>
                  <button
                    onClick={() => setSelectedActivity(act)}
                    className="text-secondary text-sm mt-2 hover:underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newspaper Articles Section */}
          <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">
            Newspaper Articles
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
              >
                <div className="relative w-full h-64 bg-white">
                  <Image
                    src={`/newspaperarticles/news${num}.jpg`}
                    alt={`Newspaper Article ${num}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 backdrop-blur-sm bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedNewspaper(num)}
                      className="px-4 py-2 bg-white text-secondary rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-medium text-gray-800">
                    Newspaper Article {num}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Gallery Section */}
          <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">
            Photo Gallery
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-48 bg-gray-100">
                  <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>

          {/* NSS Annual Reports Section */}
          <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">
            NSS Annual Reports
          </h3>

          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenReport(openReport === 'regular' ? null : 'regular')}
                className="w-full flex justify-between items-center px-4 py-4 text-left focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 hover:bg-gray-50 transition-colors duration-200"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Report on Regular Activities 2024-25
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Comprehensive report of NSS regular activities and initiatives for the academic year 2024-25.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/nssreport/Report on regular activities 2024-25.pdf"
                    download
                    className="inline-flex items-center px-3 py-1 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition-colors duration-200 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Download
                  </a>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openReport === 'regular' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openReport === 'regular' && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="bg-gray-50 rounded-lg p-3 mt-3">
                    <iframe
                      src="/nssreport/Report on regular activities 2024-25.pdf"
                      className="w-full h-[500px] border-0 rounded-md"
                      title="Report on Regular Activities 2024-25"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenReport(openReport === 'special' ? null : 'special')}
                className="w-full flex justify-between items-center px-4 py-4 text-left focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 hover:bg-gray-50 transition-colors duration-200"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Report on Special Camp 2024-25
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Detailed report covering NSS special camp activities and community service initiatives for 2024-25.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/nssreport/Report on Special Camp 2024-25.pdf"
                    download
                    className="inline-flex items-center px-3 py-1 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition-colors duration-200 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Download
                  </a>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openReport === 'special' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openReport === 'special' && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="bg-gray-50 rounded-lg p-3 mt-3">
                    <iframe
                      src="/nssreport/Report on Special Camp 2024-25.pdf"
                      className="w-full h-[500px] border-0 rounded-md"
                      title="Report on Special Camp 2024-25"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* NSS Coordinator Message */}
          <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">
            Message from NSS Coordinator
          </h3>

          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/nss/photo passport.jpg"
                  alt="NSS Coordinator"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-secondary mb-2">
                  Dr. [Coordinator Name]
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  NSS Coordinator, ICEM
                </p>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "The National Service Scheme (NSS) at ICEM plays a vital role in shaping socially responsible citizens.
                  Through various community service activities, our students develop empathy, leadership skills, and
                  a deep sense of commitment to societal welfare. NSS is not just about service; it's about creating
                  positive change and building a better tomorrow. I encourage all students to actively participate
                  in NSS activities and contribute to the community while gaining invaluable life experiences."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
      </div>

      {/* Activity Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-secondary">{selectedActivity.title}</h3>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-4">
                <div className="relative w-full h-64 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={selectedActivity.img}
                    alt={selectedActivity.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 font-medium">{selectedActivity.date}</p>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedActivity.desc}</p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newspaper Article Modal */}
      {selectedNewspaper && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-secondary">Newspaper Article {selectedNewspaper}</h3>
                <button
                  onClick={() => setSelectedNewspaper(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-4">
                <div className="relative w-full bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={`/newspaperarticles/news${selectedNewspaper}.jpg`}
                    alt={`Newspaper Article ${selectedNewspaper}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Full newspaper article view
                </div>
                <div className="flex gap-3">
                  <a
                    href={`/newspaperarticles/news${selectedNewspaper}.jpg`}
                    download={`newspaper-article-${selectedNewspaper}.jpg`}
                    className="px-4 py-2 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition-colors duration-200"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => setSelectedNewspaper(null)}
                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NationalServiceScheme;
