"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { activities } from "@/static/campuslife/nss";


function NationalServiceScheme() {
  // Images for the NSS Photo Gallery (only from /nss/gallery)
  const galleryImages = [
    { src: "/nss/gallery/blood1.jpg", alt: "Blood Donation Camp" },
    { src: "/nss/gallery/blood2.jpeg", alt: "Blood Donation Camp" },
    { src: "/nss/gallery/blood3.jpg", alt: "Blood Donation Camp" },
    { src: "/nss/gallery/blood4.jpeg", alt: "Blood Donation Camp" },
    { src: "/nss/gallery/helmet1.JPG", alt: "Helmet Awareness" },
    { src: "/nss/gallery/helmet2.JPG", alt: "Helmet Awareness" },
    { src: "/nss/gallery/nssday.jpeg", alt: "NSS Day" },
    { src: "/nss/gallery/paint1.jpeg", alt: "Painting Event" },
    { src: "/nss/gallery/paint2.jpeg", alt: "Painting Event" },
    { src: "/nss/gallery/repday1.jpg", alt: "Republic Day" },
    { src: "/nss/gallery/repday2.jpg", alt: "Republic Day" },
    { src: "/nss/gallery/tashanbaaz.jpg", alt: "Tashanbaaz Event" },
    { src: "/nss/gallery/tree1.jpg", alt: "Tree Plantation" },
    { src: "/nss/gallery/tree2.jpg", alt: "Tree Plantation" },
    { src: "/nss/gallery/tree3.jpg", alt: "Tree Plantation" },
    { src: "/nss/gallery/tree6.JPG", alt: "Tree Plantation" },
  ];

  // State for gallery slider
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Auto-rotate gallery images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Helper for slider navigation
  const goToGalleryIndex = (idx) => {
    if (idx < 0) idx = galleryImages.length - 1;
    if (idx >= galleryImages.length) idx = 0;
    setGalleryIndex(idx);
  };
  const [openIndex, setOpenIndex] = useState(null);
  const [openReport, setOpenReport] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedNewspaper, setSelectedNewspaper] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);

  // List of all NSS report PDFs in the public/nssreport folder
  const nssReports = [
    {
      file: "Report on regular activities 2024-25.pdf",
      title: "Report on Regular Activities 2024-25",
      desc: "Comprehensive report of NSS regular activities and initiatives for the academic year 2024-25."
    },
    {
      file: "Report on Special Camp 2024-25.pdf",
      title: "Report on Special Camp 2024-25",
      desc: "Detailed report covering NSS special camp activities and community service initiatives for 2024-25."
    },
    {
      file: "NSSCampReport2022-23.pdf",
      title: "NSS Camp Report 2022-23",
      desc: "Special camp report for the academic year 2022-23."
    },
    {
      file: "NSSCampReport2021-22.pdf",
      title: "NSS Camp Report 2021-22",
      desc: "Special camp report for the academic year 2021-22."
    },
    {
      file: "NSSCampReport2020-21.pdf",
      title: "NSS Camp Report 2020-21",
      desc: "Special camp report for the academic year 2020-21."
    },
    {
      file: "NSSCampReport2019-20.pdf",
      title: "NSS Camp Report 2019-20",
      desc: "Special camp report for the academic year 2019-20."
    },
    {
      file: "NSS Camp 18-19.pdf",
      title: "NSS Camp Report 2018-19",
      desc: "Special camp report for the academic year 2018-19."
    },
    {
      file: "NSS Activity 18-19.pdf",
      title: "NSS Activity Report 2018-19",
      desc: "Annual report of NSS activities for the academic year 2018-19."
    },
    {
      file: "NSS Camp 17-18.pdf",
      title: "NSS Camp Report 2017-18",
      desc: "Special camp report for the academic year 2017-18."
    },
    {
      file: "NSS Activity 17-18.pdf",
      title: "NSS Activity Report 2017-18",
      desc: "Annual report of NSS activities for the academic year 2017-18."
    },
    {
      file: "NSS CAMP 16-17.pdf",
      title: "NSS Camp Report 2016-17",
      desc: "Special camp report for the academic year 2016-17."
    },
    {
      file: "NSS Activity 16 -17.pdf",
      title: "NSS Activity Report 2016-17",
      desc: "Annual report of NSS activities for the academic year 2016-17."
    },
    {
      file: "NSS CAMP 15-16.pdf",
      title: "NSS Camp Report 2015-16",
      desc: "Special camp report for the academic year 2015-16."
    },
    {
      file: "NSS Activity 15-16.pdf",
      title: "NSS Activity Report 2015-16",
      desc: "Annual report of NSS activities for the academic year 2015-16."
    },
  ];

  const bannerImg = "/campuslife/nssbanner.webp"; // put in public folder

  return (
    <div className="max w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full">
        <Image
          src={bannerImg}
          alt="ICEM Campus"
          layout="responsive"
          width={1920}
          height={600}
          style={{ objectFit: "contain" }}
          className="object-contain rounded-b-xl bg-black"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-5 px-6">
        {/* Left Section */}
        <div className="w-full bg-white p-6 rounded-xl shadow-md">
          {/* Removed redundant main heading for Vision, Mission & Objectives */}

          <h3 className="text-xl font-semibold text-secondary mb-2">Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To develop socially responsible, disciplined, and committed youth who actively contribute to nation-building through selfless service and community engagement.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-2">Mission</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To inculcate the spirit of voluntary service, leadership, and social awareness among students by engaging them in constructive community development activities, thereby fostering empathy, civic responsibility, and national integration.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">Objectives of NSS</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>To understand the community in which students work and identify its needs and challenges.</li>
            <li>To develop a sense of social and civic responsibility among students.</li>
            <li>To promote leadership qualities, teamwork, and democratic values through group activities.</li>
            <li>To encourage students to apply their academic knowledge to solve real-life social problems.</li>
            <li>To create awareness on health, hygiene, environment, education, and social issues.</li>
            <li>To foster national integration, social harmony, and unity in diversity.</li>
            <li>To develop moral values, discipline, and a spirit of selfless service in youth.</li>
            <li>To prepare students to become responsible and sensitive citizens of the nation.</li>
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
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-lg aspect-[1/1] rounded-xl overflow-hidden flex items-center justify-center bg-gray-100 p-4">
              <button
                aria-label="Previous image"
                onClick={() => goToGalleryIndex(galleryIndex - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-secondary rounded-full p-1 shadow"
                style={{outline: 'none', border: 'none'}}>
                <span className="text-base">&#8592;</span>
              </button>
              <Image
                src={galleryImages[galleryIndex].src}
                alt={galleryImages[galleryIndex].alt}
                fill
                className="object-contain border-4 border-white shadow-md bg-white"
                sizes="(max-width: 768px) 100vw, 90vw"
                placeholder="blur"
                blurDataURL="/nss/img1.webp"
                loading="lazy"
              />
              <button
                aria-label="Next image"
                onClick={() => goToGalleryIndex(galleryIndex + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-secondary rounded-full p-1 shadow"
                style={{outline: 'none', border: 'none'}}>
                <span className="text-base">&#8594;</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 justify-center">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.src}
                  aria-label={`Go to image ${idx + 1}`}
                  onClick={() => goToGalleryIndex(idx)}
                  className={`w-3 h-3 rounded-full border border-secondary ${galleryIndex === idx ? 'bg-secondary' : 'bg-gray-200'} transition-colors`}
                  style={{outline: 'none', borderWidth: 2}}
                />
              ))}
            </div>
            <div className="mt-2 text-sm text-gray-600 text-center">
              {galleryImages[galleryIndex].alt}
            </div>
          </div>

          {/* NSS Annual Reports Section */}
          <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">
            NSS Annual Reports
          </h3>
          <div className="space-y-3">
            {nssReports.map((report, idx) => (
              <div key={report.file} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setSelectedReport(selectedReport === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-4 py-4 text-left focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{report.title}</h4>
                    <p className="text-gray-600 mt-1">{report.desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`/nssreport/${encodeURIComponent(report.file)}`}
                      download
                      className="inline-flex items-center px-3 py-1 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition-colors duration-200 text-sm"
                      onClick={e => e.stopPropagation()}
                    >
                      Download
                    </a>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${selectedReport === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {selectedReport === idx && (
                  <div className="px-4 pb-4 border-t border-gray-200">
                    <div className="bg-gray-50 rounded-lg p-3 mt-3">
                      <iframe
                        src={`/nssreport/${encodeURIComponent(report.file)}`}
                        className="w-full h-[500px] border-0 rounded-md"
                        title={report.title}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
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
                  Mr. Pravin Charde
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  NSS Coordinator, ICEM
                </p>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  The National Service Scheme (NSS) serves as a powerful platform for nurturing socially responsible, disciplined, and compassionate citizens. At our institution, NSS is not merely an activity but a movement that bridges academic excellence with meaningful community service.<br/><br/>
                  Through well-planned initiatives such as special 7-day residential camps, health and hygiene awareness programs, environmental conservation drives, blood donation camps, and rural outreach activities, our NSS volunteers actively contribute to the holistic development of society. These engagements instill leadership qualities, teamwork, empathy, and a strong sense of national responsibility among students.<br/><br/>
                  I deeply appreciate the unwavering commitment and enthusiasm of our NSS volunteers, programme officers, and supporting staff. Their sincere efforts truly embody the spirit of the NSS motto, “Not Me, But You.” I strongly encourage every student to participate in NSS activities and become an agent of positive social change.<br/><br/>
                  Together, let us continue our mission of service, dedication, and nation-building.<br/>
                  <span className="font-bold">“Not Me, But You”</span>
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
