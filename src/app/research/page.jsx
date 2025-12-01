"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import PhdGuidesTable2223 from "@/components/research/PhdGuidesTable2223";
import PhdGuidesTable2425 from "@/components/research/PhdGuidesTable2425";
import ExpandableTableSection from "@/components/research/ExpandableSection";
import PhdGuidesTable2324 from "@/components/research/PhdGuidesTable2223";
import RDCommitteeTable2425 from "@/components/research/RDCommitteeTable2425";
import RDCommitteeTableGeneral from "@/components/research/RDCommitteeTableGeneral";
import RDCommitteeTable2324 from "@/components/research/RDCommitteeTable2324";

const BEComp = "/BEComp.pdf";

const Research = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
        <Image
          src="/Facilities/BannerOverviewPage.webp"
          alt="Innovation at Indira College"
          fill
          className="object-cover"
          priority
          unoptimized={true}
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 md:px-20">
          <div className="max-w-2xl bg-black/60 p-4 md:p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-4 leading-tight">
              Innovation that Makes a Difference
            </h1>
            <p className="text-sm md:text-lg text-gray-100 leading-relaxed">
              Turn ideas into impact through real-world research, invention, and
              entrepreneurial thinking. Our research culture encourages
              curiosity, creativity, and collaboration — empowering students and
              faculty to pioneer solutions that shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <section className="py-8 md:py-10 px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4 md:mb-6">
          Research & Innovation
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-sm md:text-base">
          At Indira College, research and innovation are not confined to
          laboratories—they are embedded in the culture. We empower our students
          and faculty to imagine, investigate, and implement solutions for
          real-world challenges. From internationally recognised research
          outputs to cutting-edge prototypes, our ecosystem supports every stage
          of innovation
        </p>
      </section>

      {/* Research Highlights Summary Section */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-6 md:mb-8">
            Research Highlights 2024-25
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mb-6 md:mb-8">
            {[
              { number: "5", label: "UGC Care Group 1" },
              { number: "26", label: "Scopus Indexed" },
              { number: "8", label: "Web of Science" },
              { number: "13", label: "Peer Reviewed" },
              { number: "75", label: "Student Publications" },
              { number: "13", label: "Books" },
              { number: "6", label: "Book Chapters" },
              { number: "20", label: "Patents Published" },
              { number: "8", label: "Patents Granted" },
              { number: "30", label: "Copyright Granted" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 md:p-4 rounded-lg shadow-sm md:shadow-md border border-gray-200"
              >
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-secondary mb-1">
                  {item.number}
                </div>
                <div className="text-xs md:text-sm text-gray-700 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Seed Funding Initiative Section */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Content and Image Row */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center mb-6 md:mb-8">
            {/* Text Content - Left Side */}
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-4 md:mb-6 text-center lg:text-left">
                Seed Funding Initiative
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                The Seed Funding program at ICEM is designed to catalyze
                innovative research by providing initial financial support to
                faculty members since 2022. This initiative aims to nurture
                early-stage ideas, encourage interdisciplinary collaboration,
                and strengthen the institution's research ecosystem. Through a
                structured proposal and evaluation process, ICEM empowers
                researchers to transform concepts into impactful projects that
                align with academic and societal goals.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 w-full">
              <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/nss/seed-funding.webp"
                  alt="Seed Funding Initiative"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 md:p-6 mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-secondary mb-3 md:mb-4 text-center">
              Sanctioned Seed Funding Projects for 2025-2026
            </h3>

            <div className="overflow-x-auto -mx-2 md:mx-0">
              <div className="min-w-full inline-block align-middle">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-secondary text-white">
                      <th className="border border-gray-300 p-2 md:p-3 text-left text-xs md:text-sm">
                        S.No
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3 text-left text-xs md:text-sm">
                        Name of the Faculty
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3 text-left text-xs md:text-sm">
                        Department
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3 text-left text-xs md:text-sm">
                        Topic
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3 text-left text-xs md:text-sm">
                        Amount Sanctioned
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        1
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Dr. Saurabh Gupta
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Mechanical Engineering
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Sustainable parabolic solar cooker for rural area
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        ₹60,000/-
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        2
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Prof. Pranali Khatake
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Mechanical Engineering
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Smart Material Filters used for automobile oil
                        filtration process
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        ₹40,000/-
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        3
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Prof. Ashwini Admane
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Mechanical Engineering
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Heating Water using the waste heat from domestic
                        refrigerator condenser
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        ₹40,000/-
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        4
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Prof. Ashwini Gaikwad
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Mechanical Engineering
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        Dielectric Heating for Drying agriculture Produce and
                        Food
                      </td>
                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                        ₹40,000/-
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSME Hackathon Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-secondary mb-4 md:mb-6">
            MSME Hackathon 4.0
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            The MSME Idea Hackathon 4.0 is a premier national-level innovation
            initiative by the Ministry of Micro, Small & Medium Enterprises
            (MSME), Government of India, under its MSME Innovative Scheme.
            Designed to empower India's youth, the hackathon solicits
            cutting-edge ideas from individuals aged 18–35 to solve real-world
            challenges across diverse sectors—fueling the vision of a "Viksit
            Bharat @2047".
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-secondary mb-3 md:mb-4">
                Selection & Support Process
              </h3>
              <ol className="list-decimal list-inside space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
                <li>
                  <strong>Host Institute Evaluation:</strong> Each HI assembles
                  expert panels to shortlist promising ideas.
                </li>
                <li>
                  <strong>Ministry Screening:</strong> Shortlisted ideas undergo
                  further evaluation by the Ministry of MSME.
                </li>
                <li>
                  <strong>Funding & Incubation:</strong> Selected ideas receive
                  up to ₹15 lakhs for development support.
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-secondary mb-3 md:mb-4">
                Impact & Achievements
              </h3>
              <ul className="list-disc list-inside space-y-2 md:space-y-2 text-gray-700 text-sm md:text-base">
                <li>
                  <strong>Massive Reach:</strong> 29,000+ submissions, 400 ideas
                  awarded funding
                </li>
                <li>
                  <strong>National Recognition:</strong> Results announced by
                  Hon'ble President of India
                </li>
                <li>
                  <strong>ICEM Success:</strong> Three innovative proposals
                  secured funding
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-secondary mb-3 md:mb-4">
                ICEM Funded Projects
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="border-l-4 border-secondary pl-3 md:pl-4">
                  <h4 className="font-bold text-secondary text-sm md:text-base">
                    Utilization of Images for Monitoring Construction Progress
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Gajendra Thakur - AI&DS Branch
                  </p>
                  <p className="text-secondary font-semibold text-sm md:text-base">
                    ₹13.5 Lakhs
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-3 md:pl-4">
                  <h4 className="font-bold text-secondary text-sm md:text-base">
                    Emotion Detector
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Sumit Kumbhar - Alard College of Pharmacy
                  </p>
                  <p className="text-secondary font-semibold text-sm md:text-base">
                    ₹13.5 Lakhs
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-3 md:pl-4">
                  <h4 className="font-bold text-secondary text-sm md:text-base">
                    Hydrobot
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Shon Rakesh Gaikwad - Trinity College of Engineering &
                    Research
                  </p>
                  <p className="text-secondary font-semibold text-sm md:text-base">
                    ₹14 Lakhs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Information Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-6 md:mb-8">
            Research Information
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar Tabs - Stack vertically on mobile */}
            <div className="lg:w-1/4 bg-white shadow-md border border-gray-200 rounded-lg p-4">
              <ul className="space-y-2">
                {[
                  "Overview",
                  "Publication",
                  "IPR",
                  "Research Activities",
                  "Research Policy",
                  "Research Committee",
                ].map((tab, i) => (
                  <li
                    key={i}
                    onClick={() => setActiveTab(tab)}
                    className={`p-3 rounded-md cursor-pointer font-medium text-sm md:text-base ${
                      activeTab === tab
                        ? "bg-tertiary border-l-4 border-secondary text-secondary"
                        : "hover:bg-gray-100 text-secondary"
                    }`}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Accordion */}
            <div className="lg:w-3/4 bg-white shadow-md border border-gray-200 rounded-lg">
              {/* Overview Accordion */}
              {activeTab === "Overview" && (
                <>
                  {[
                    {
                      title: "1. About the R&D Cell",
                      content: (
                        <>
                          <p className="text-secondary text-sm md:text-base">
                            Indira College of Engineering and Management is
                            committed to inculcate research culture among
                            faculty, researchers and students. The R&D Cell aims
                            to develop and promote research and development
                            activities to realize the vision and mission of the
                            college. The research areas of academic, practical
                            and social significance will be identified and thus
                            contributing to the nation development.
                          </p>
                          <p className="mt-3 text-secondary text-sm md:text-base">
                            The research policy defines the applicable rules and
                            regulations to be adhered while carrying out various
                            research activities and norms related to safe and
                            ethical conduct of research. The R&D Cell provides
                            guidance to faculty members and students
                            consistently to write research papers, research
                            projects and IPR activities. The management
                            encourages all faculty members and students by
                            providing financial assistance for research paper
                            presentation, attending national/international
                            conferences, publishing books and filing copyrights
                            and patents. To encourage innovative ideas and
                            competitive projects, the Institute provides Seed
                            funding to the research projects to develop
                            prototype and testing.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "2. Objectives",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            To identify and inform all researchers about the
                            research opportunities available in academic,
                            industry, government and research organizations.
                          </li>
                          <li>
                            To provide a conducive environment and motivation
                            for undertaking interdisciplinary projects and
                            research.
                          </li>
                          <li>
                            To facilitate the presentation of research work in
                            national/international conferences and enhance
                            publication standards.
                          </li>
                          <li>
                            To establish centers of excellence in association
                            with industries and undertake joint research
                            projects.
                          </li>
                          <li>
                            To establish long-term relationships with research
                            organizations to widen funding and research scope.
                          </li>
                          <li>
                            To encourage participative research and promote
                            internal funded projects and consultancy services.
                          </li>
                          <li>
                            To acquire membership of renowned professional
                            bodies and build global institutional linkages.
                          </li>
                          <li>
                            To ensure quality and uphold high standards of
                            ethics and integrity in all research activities.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Memorandums of Understanding (MoUs)",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            MoU with Consortium of Technical Education for
                            innovative programs and research initiatives.
                          </li>
                          <li>
                            MoU with Shashitek Company, Bangalore for
                            internships and real-time tech projects.
                          </li>
                          <li>
                            MoU with Cyber Secured India for cyber security and
                            digital forensics training.
                          </li>
                          <li>
                            MoU with RWTH Aachen University, Germany for
                            collaborative research projects.
                          </li>
                          <li>
                            MoU with Sahyadri Pratishthan Gad Samvardhan Samiti
                            for environmental and heritage awareness.
                          </li>
                          <li>
                            MoU with India First Robotics Innovation and
                            Research LLP for robotics training.
                          </li>
                          <li>
                            MoU with IQAC Cluster India to support NAAC
                            accreditation improvement.
                          </li>
                          <li>
                            MoU with Gryphon Consultancy for training and
                            placement opportunities.
                          </li>
                          <li>
                            MoU with Edukerron to develop and monitor academic
                            work plans and projects.
                          </li>
                          <li>
                            MoU with Global Reach for international study tours,
                            lectures, and workshops.
                          </li>
                          <li>
                            MoU with MIT-ADT Incubator Forum for startup
                            mentoring programs under NITI Aayog.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "4. Research & Development Documents",
                      content: (
                        <div className="space-y-4">
                          <ExpandableTableSection
                            title="Registered Ph.D Guides"
                            tables={[
                              {
                                title: "AY [2024-2025]",
                                component: <PhdGuidesTable2425 />,
                              },
                              {
                                title: "AY [2023-2024]",
                                component: <PhdGuidesTable2324 />,
                              },
                              {
                                title: "AY [2022-2023]",
                                component: <PhdGuidesTable2223 />,
                              },
                            ]}
                          />

                          <ExpandableTableSection
                            title="Research & Development Committee"
                            tables={[
                              {
                                title: "AY [2024-2025]",
                                component: <RDCommitteeTable2425 />,
                              },
                              {
                                title: "AY [2023-2024]",
                                component: <RDCommitteeTable2324 />,
                              },
                              {
                                title: "Committee Members",
                                component: <RDCommitteeTableGeneral />,
                              },
                            ]}
                          />
                        </div>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-3 md:p-4 text-left font-medium text-sm md:text-base ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-secondary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>
                      {activeAccordion === i && (
                        <div className="p-3 md:p-4 bg-tertiary text-secondary">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* Publication Accordion */}
              {activeTab === "Publication" && (
                <>
                  {[
                    {
                      title: "1. Journals",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2023-2024]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2022-2023]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2021-2022]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Conferences",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2022-23
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2021-22
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Books",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2023-2024
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2022-2023
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2021-2022
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-3 md:p-4 text-left font-medium text-sm md:text-base ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-secondary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>
                      {activeAccordion === i && (
                        <div className="p-3 md:p-4 bg-tertiary text-secondary">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* IPR Accordion */}
              {activeTab === "IPR" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Patents",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2023-24]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2022-23]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Copyrights",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Copyrights Filed in the academic year 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Copyrights Filed in the academic year 2022-23
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Trademarks",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Trademarks Registered in the academic year 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Trademarks Registered in the academic year 2022-23
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-3 md:p-4 text-left font-medium text-sm md:text-base transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-secondary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-3 md:p-4 bg-tertiary text-secondary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Activities Accordion */}
              {activeTab === "Research Activities" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Workshops/Seminars Conducted AY-[2023-24]",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2023-24]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Workshops/Seminars Conducted AY-[2022-23]",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2022-23]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Workshops/Seminars Conducted AY-[2021-22]",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-3 md:p-4 text-left font-medium text-sm md:text-base transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-secondary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-3 md:p-4 bg-tertiary text-secondary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Policy Accordion */}
              {activeTab === "Research Policy" && (
                <div className="p-0">
                  {[
                    {
                      title: "Research Policy [2023-24]",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2023-24]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "Research Policy [2022-23]",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2022-23]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "Research Policy [2021-22]",
                      content: (
                        <ul className="list-disc pl-4 md:pl-6 space-y-2 text-secondary text-sm md:text-base">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-3 md:p-4 text-left font-medium text-sm md:text-base transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-secondary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-3 md:p-4 bg-tertiary text-secondary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Committee Accordion */}
              {activeTab === "Research Committee" && (
                <div className="p-0">
                  {[
                    {
                      title: "ICEM Research Committee AY 2025-26",
                      content: (
                        <div className="bg-white rounded-lg border border-gray-200">
                          <div className="overflow-x-auto -mx-2 md:mx-0">
                            <div className="min-w-full inline-block align-middle">
                              <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                  <tr className="bg-secondary text-white">
                                    <th className="border border-gray-300 p-2 md:p-3 text-left text-xs md:text-sm">
                                      Sr.No.
                                    </th>
                                    <th className="border border-gray-300 p-2 md:p-3 text-left text-xs md:text-sm">
                                      Name of the Staff
                                    </th>
                                    <th className="border border-gray-300 p-2 md:p-3 text-left text-xs md:text-sm">
                                      Designation
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    {
                                      name: "Dr. Poorna Shankar",
                                      designation: "Coordinator",
                                    },
                                    {
                                      name: "Dr. Sunil Damodar Rathod",
                                      designation: "Member",
                                    },
                                    {
                                      name: "Mr. Shreyas Rajendra Satpute",
                                      designation: "Member",
                                    },
                                    {
                                      name: "Dr. Manjusha Rahul Tatiya",
                                      designation: "Member",
                                    },
                                    {
                                      name: "Mr. Vishal Abhiman Meshram",
                                      designation: "Member",
                                    },
                                    {
                                      name: "Dr. Archana Ravindra Salve",
                                      designation: "Member",
                                    },
                                    {
                                      name: "Mrs. Aditee Hrishikesh Huparikar",
                                      designation: "Member",
                                    },
                                    {
                                      name: "Dr. Darshana Jignesh Desai",
                                      designation: "Member",
                                    },
                                    {
                                      name: "Dr. Mrs. Priya Jeevan Pise",
                                      designation: "Member",
                                    },
                                    {
                                      name: "Mr. Sudhir Kumar Sawarkar",
                                      designation: "Member",
                                    },
                                  ].map((member, index) => (
                                    <tr
                                      key={index}
                                      className="hover:bg-gray-50"
                                    >
                                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                                        {index + 1}
                                      </td>
                                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                                        {member.name}
                                      </td>
                                      <td className="border border-gray-300 p-2 md:p-3 text-xs md:text-sm">
                                        {member.designation}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-3 md:p-4 text-left font-medium text-sm md:text-base transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-secondary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-3 md:p-4 bg-tertiary text-secondary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
