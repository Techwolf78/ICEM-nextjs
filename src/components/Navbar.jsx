"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";

const Navbar = () => {
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleHelpline = () => setIsHelplineOpen(!isHelplineOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 150);
    setDropdownTimeout(timeout);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName);
  };

  const dropdownContent = {
    aboutUs: {
      title: "Our Navigation",
      sections: [
        {
          items: [
            {
              label: "Indira College of Engineering and Management (ICEM)",
              link: "/about/overview",
            },
            {
              label: "Shree Chanakya Education Society",
              link: "/about/chanakya-edu",
            },

            {
              label: "Chairpersons Profile & Chief Mentor IGL",
              link: "/about/cfcm",
            },
            { label: "Facilities", link: "/about/facilities" },
            { label: "Governance", link: "/about/governance" },

            { label: "Accreditation", link: "about/accreditation" },
          ],
        },
      ],
    },

    campusLife: {
      title: "Campus Life",
      sections: [
        {
          title: "Student Services",
          items: [
            {
              label: "Student Welfare",
              link: "/campus-life/student-welfare",
            },
            { label: "IIC", link: "/campus-life/iic" },
            {
              label: "Induction Programme",
              link: "/campus-life/induction-programme",
            },
            {
              label: "Student Council",
              link: "/campus-life/student-council",
            },
            { label: "National Service Scheme", link: "/campus-life/nss" },
            { label: "ICEM Awards", link: "/campus-life/icem-awards" },
            { label: "Academics", link: "/campus-life/academics" },
            { label: "Committies", link: "/campus-life/committees" },
            {
              label: "Grievance Redressals",
              link: "/campus-life/grievance-redressals",
            },
          ],
        },
        {
          title: "Campus Activities",
          items: [
            { label: "Cultural Events", link: "/campus-life/cultural-events" },
            { label: "Sports & Recreation", link: "/campus-life/sports" },
            { label: "Clubs & Societies", link: "/campus-life/clubs" },
            { label: "Technical Fest", link: "/campus-life/tech-fest" },
            { label: "Workshops & Seminars", link: "/campus-life/workshops" },
            { label: "Annual Fest", link: "/campus-life/annual-fest" },
          ],
        },
      ],
    },

    programs: {
      title: "Programs & Admission",
      sections: [
        {
          title: "Undergraduate Programs",
          items: [
            {
              label: "Computer Engineering",
              link: "/programs/computer-engineering",
            },
            {
              label: "Mechanical Engineering",
              link: "/programs/mechanical-engineering",
            },
            {
              label: "Artificial Intelligence and Data Science",
              link: "/programs/ai-ds",
            },
            {
              label: "Electronics and Telecommunication",
              link: "/programs/entc",
            },
            { label: "First Year Engineering", link: "/programs/fye" },
            { label: "Information Technology", link: "/programs/it" },
            { label: "Integrated MBA (BBA + MBA)", link: "/programs/imba" },
            { label: "Integrated MCA (BCA + MCA)", link: "/programs/imca" },
          ],
        },
        {
          title: "Postgraduate Programs",
          items: [
            { label: "MBA", link: "/programs/mba" },
            { label: "MCA", link: "/programs/mca" },
            {
              label: "M-Tech in Mechanical Engineering",
              link: "/programs/mtech-mech",
            },
            {
              label: "M-Tech in Computer Science",
              link: "/programs/mtech-comp",
            },
          ],
        },
      ],
    },

    placement: {
      title: "Placement",
      sections: [
        {
          items: [
            "Placement Team",
            "Our Recruiters",
            "Placed Students",
            "Placement Policy",
          ],
        },
      ],
    },

    accreditation: {
      title: "Accreditation",
      sections: [
        {
          title: "NAAC",
          items: [
            "SSR reports year wise",
            "Criteria wise Details",
            "AQAR reports",
            "NAAC Certificate",
          ],
        },
        {
          title: "IQAC",
          items: [
            "IQAC Committee",
            "IQAC Notices",
            "MOMS & Actions",
            "IQAC Formats",
            "Best Practices",
            "Distinctive Practice",
          ],
        },
        {
          title: "Reports & Others",
          items: [
            "SPPU Annual Report",
            "Code of Conduct",
            "NIRF",
            "Financial Statements",
            "Soft Skills & Aptitude",
            "Reports",
          ],
        },
      ],
    },
  };

  const renderDropdownContent = (content) => (
    <div className="max-w-8xl px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {content.sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            {section.title || content.title}
          </h3>
          <ul className="space-y-4 text-gray-800 text-sm">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex justify-between items-center border-b border-gray-300 pb-2"
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className="font-semibold flex justify-between items-center w-full text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>{item.label || item}</span>
                    <TbExternalLink className="font-semibold text-gray-900" />
                  </Link>
                ) : (
                  <div className="font-semibold flex justify-between items-center w-full">
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-400 opacity-50" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderMobileDropdown = (content, dropdownName) => (
    <div className="bg-gray-50 rounded-lg mt-2 overflow-hidden">
      {content.sections.map((section, index) => (
        <div key={index} className="border-t border-gray-200 first:border-t-0">
          {section.title && (
            <h4 className="font-semibold text-secondary px-4 py-2 bg-gray-100">
              {section.title}
            </h4>
          )}
          <ul className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.link ? (
                  <Link
                    href={item.link}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-500 text-xs" />
                  </Link>
                ) : (
                  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500">
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-400 text-xs" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="w-full h-[12vh] flex bg-white shadow-sm font-sans relative sticky top-0 z-50">
        {/* Left: Logo - 80% width on mobile */}
        <div className="w-full md:w-[30%] h-full flex items-center justify-start  md:pl-0 md:justify-center">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              height={240} // increased intrinsic height
              width={240} // increased intrinsic width
              className="h-40  w-[80%] md:h-24 md:w-full cursor-pointer object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Section - Desktop (unchanged) */}
        <div className="hidden md:flex  w-[70%] h-full flex-col ">
          {/* Top Bar */}
          <div className="flex justify-end w-full h-[45%] text-xs text-gray-700">
            <div className="flex gap-8">
              <div className="flex items-center gap-2 font-bold">
                <a
                  href="https://rapid.grayquest.com/iudp-master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Pay Fee
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="https://indira.edupluscampus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  ERP Login Staff
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="https://myindira.edupluscampus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  ERP Login Student
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="https://indiraicem.ac.in/ICEM-360-degree-virtual-tour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  360<sup>0</sup> Tour
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="https://lc-icem-sumedh.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Leaving Certificate
                </a>
                <span className="text-gray-400">|</span>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </div>

              {/* Buttons */}
              <div className="flex">
                <button
                  onClick={toggleModal}
                  className="bg-gradient-to-r from-[#278da4] to-[#003c84] text-white px-8 py-1 text-xs hover:from-[#278da4]/90 hover:to-[#003c84]/90 font-bold border-r border-white transition-all duration-300"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Nav Links */}
          <div className="flex justify-end items-center h-[55%] text-black px-6 text-sm font-semibold whitespace-nowrap gap-10">
            <div
              className="flex items-center gap-1  cursor-pointer hover:text-primary"
              onMouseEnter={() => handleMouseEnter("aboutUs")}
              onMouseLeave={handleMouseLeave}
            >
              <span>About Us</span>
            </div>
            <div
              className="flex items-center gap-1  cursor-pointer hover:text-primary"
              onMouseEnter={() => handleMouseEnter("campusLife")}
              onMouseLeave={handleMouseLeave}
            >
              <span>Campus Life</span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-primary"
              onMouseEnter={() => handleMouseEnter("programs")}
              onMouseLeave={handleMouseLeave}
            >
              <span>Programs & Admission</span>
            </div>
            <Link href="/placement" className="hover:text-primary">
              Placement
            </Link>
            <Link href="/about/examination" className="hover:text-primary">
              Examination
            </Link>

            <Link href="/alumni" className="hover:text-primary">
              Alumni
            </Link>
            <Link href="/research" className="hover:text-primary">
              Research
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button - 20% width on mobile */}
        <div className="md:hidden w-[20%] flex items-center justify-center pr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            <HiMenuAlt2 size={28} />
          </button>
        </div>

        {/* Dropdown Menu - Desktop */}
        {activeDropdown && (
          <div
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 w-full backdrop-blur-md bg-white/60 shadow-xl border-t border-gray-200 z-50 hidden md:block"
          >
            {renderDropdownContent(dropdownContent[activeDropdown])}
          </div>
        )}
      </nav>

      {/* Mobile Menu - Slides from bottom to top */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="md:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
              isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "85vh" }}
          >
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-base font-semibold text-gray-900">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <HiX size={22} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(85vh - 60px)" }}
            >
              <div className="p-3 space-y-0">
                {/* 🔹 Quick Links Dropdown */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("quickLinks")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-colors"
                  >
                    <span>Quick Links</span>
                    <span className="text-lg">
                      {mobileDropdown === "quickLinks" ? "−" : "+"}
                    </span>
                  </button>

                  {mobileDropdown === "quickLinks" && (
                    <div className="bg-gray-50 rounded-lg mt-1 overflow-hidden">
                      <ul className="space-y-1 text-xs font-medium text-gray-700">
                        <li>
                          <a
                            href="https://rapid.grayquest.com/iudp-master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            Pay Fee
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://indira.edupluscampus.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            ERP Staff
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://myindira.edupluscampus.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            ERP Student
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://indiraicem.ac.in/ICEM-360-degree-virtual-tour/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            360° Tour
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://lc-icem-sumedh.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            Leaving Certificate
                          </a>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* 🔹 About Us */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("aboutUs")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-colors"
                  >
                    <span>About Us</span>
                    <span className="text-lg">
                      {mobileDropdown === "aboutUs" ? "−" : "+"}
                    </span>
                  </button>
                  {mobileDropdown === "aboutUs" &&
                    renderMobileDropdown(dropdownContent.aboutUs, "aboutUs")}
                </div>

                {/* 🔹 Campus Life */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("campusLife")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-colors"
                  >
                    <span>Campus Life</span>
                    <span className="text-lg">
                      {mobileDropdown === "campusLife" ? "−" : "+"}
                    </span>
                  </button>
                  {mobileDropdown === "campusLife" &&
                    renderMobileDropdown(
                      dropdownContent.campusLife,
                      "campusLife"
                    )}
                </div>

                {/* 🔹 Programs & Admission */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("programs")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-colors"
                  >
                    <span>Programs & Admission</span>
                    <span className="text-lg">
                      {mobileDropdown === "programs" ? "−" : "+"}
                    </span>
                  </button>
                  {mobileDropdown === "programs" &&
                    renderMobileDropdown(dropdownContent.programs, "programs")}
                </div>

                {/* 🔹 Single Links */}
                <div className="border-b border-gray-200">
                  <Link
                    href="/placement"
                    className="block py-3 text-sm font-medium text-gray-900 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Placement
                  </Link>
                </div>

                <div className="border-b border-gray-200">
                  <div className="block py-3 text-sm font-medium text-gray-900">
                    Career Development
                  </div>
                </div>

                <div className="border-b border-gray-200">
                  <Link
                    href="/alumni"
                    className="block py-3 text-sm font-medium text-gray-900 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Alumni
                  </Link>
                </div>

                <div className="border-b border-gray-200">
                  <Link
                    href="/research"
                    className="block py-3 text-sm font-medium text-gray-900 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Research
                  </Link>
                </div>
              </div>

              {/* 🔹 Compact Enquire Now Button */}
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={() => {
                    toggleModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary text-white py-2 text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===== Helpline Drawer ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isHelplineOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">Admissions Helpline</h3>
          <button onClick={toggleHelpline}>
            <HiX size={24} />
          </button>
        </div>

        <div className="p-6 text-gray-800 space-y-6 overflow-y-auto h-full">
          <div>
            <p className="text-sm text-gray-600">
              For more information give a miss call on
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-primary text-center">
                1800 267 1999
              </p>
            </div>
          </div>
        </div>
      </div>

      {isHelplineOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleHelpline}
        />
      )}

      {/* ===== APPLY NOW MODAL ===== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60]">
          <div className="bg-white w-[90%] md:w-[680px] p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              aria-label="Close"
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
              Apply Now
            </h2>

            <form className="space-y-4">
              {/* Name & Email */}
              <input
                type="text"
                placeholder="Enter Name *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]"
              />
              <input
                type="email"
                placeholder="Enter Email Address *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]"
              />

              {/* Mobile */}
              <div className="flex gap-2">
                <select className="w-24 border border-gray-300 rounded-md px-2 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]">
                  <option value="" selected className="text-gray-400">
                    +91
                  </option>
                  <option value="" className="text-gray-400">
                    +92
                  </option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number *"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]"
                />
              </div>

              {/* State & City */}
              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]">
                  <option value="" disabled selected className="text-gray-400">
                    Select State *
                  </option>
                  <option value="Maharashtra" className="text-gray-900">
                    Maharashtra
                  </option>
                  <option value="Karnataka" className="text-gray-900">
                    Karnataka
                  </option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]">
                  <option value="" disabled selected className="text-gray-400">
                    Select City *
                  </option>
                  <option value="Pune" className="text-gray-900">
                    Pune
                  </option>
                  <option value="Mumbai" className="text-gray-900">
                    Mumbai
                  </option>
                </select>
              </div>

              {/* Discipline & Course */}
              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]">
                  <option value="" disabled selected className="text-gray-400">
                    Select Discipline Applying For *
                  </option>
                  <option value="Engineering" className="text-gray-900">
                    Engineering
                  </option>
                  <option value="Management" className="text-gray-900">
                    Management
                  </option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]">
                  <option value="" disabled selected className="text-gray-400">
                    Select Course *
                  </option>
                  <option
                    value="Computer Engineering"
                    className="text-gray-900"
                  >
                    Computer Engineering
                  </option>
                  <option
                    value="Mechanical Engineering"
                    className="text-gray-900"
                  >
                    Mechanical Engineering
                  </option>
                </select>
              </div>

              {/* Program */}
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]">
                <option value="" disabled selected className="text-gray-400">
                  Select Program *
                </option>
                <option value="B.Tech" className="text-gray-900">
                  B.Tech
                </option>
                <option value="M.Tech" className="text-gray-900">
                  M.Tech
                </option>
              </select>

              {/* CET Score */}
              <input
                type="text"
                placeholder="Enter CET Score"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]"
              />

              {/* Captcha */}
              <div className="flex gap-3 items-center">
                <div className="bg-gray-100 border border-gray-300 rounded-md w-1/2 flex items-center justify-center py-2 text-gray-700 font-bold select-none">
                  8fcb09
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D]"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" id="agreeModal" />
                <label htmlFor="agreeModal" className="text-sm text-gray-700">
                  I agree to receive information regarding my submitted enquiry*
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E85C0D] hover:bg-[#d14f08] text-white font-semibold py-2 rounded-md transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
