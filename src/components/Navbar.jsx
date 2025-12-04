"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import { Mail } from "lucide-react";
import {
  FiChevronDown,
  FiChevronUp,
  FiHome,
  FiBriefcase,
  FiUsers,
  FiMapPin,
  FiAward,
  FiInfo,
} from "react-icons/fi";
import ApplyForm from "./home/ApplyForm";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Define the main navigation items for easy staggering
const mobileNavItems = [
  { name: "quickLinks", label: "Quick Links" },
  { name: "aboutUs", label: "About Us" },
  { name: "campusLife", label: "Campus Life" },
  { name: "programs", label: "Programs & Admission" },
  { name: "placement", label: "Placement", href: "/placement" },
  { name: "examination", label: "Examination", href: "/about/examination" },
  { name: "alumni", label: "Alumni", href: "/alumni" },
  { name: "research", label: "Research", href: "/research" },
];

const Navbar = () => {
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [notify, setNotify] = useState(false);
  const tourRef = useRef(null);

  useEffect(() => {
    if (notify) {
      const timer = setTimeout(() => setNotify(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [notify]);

  // ✅ Refs to manage hover timers and outside clicks (no flicker)
  const dropdownTimeoutRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleHelpline = () => setIsHelplineOpen(!isHelplineOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // === Hover Handlers (fixed flicker) ===
  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // === Close dropdown if click outside ===
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

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
              label: "Overview",
              link: "/about/overview",
            },

            { label: "Facilities", link: "/about/facilities" },
            { label: "Governance", link: "/about/governance" },
            { label: "Accreditation", link: "/about/accreditation" },
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
            { label: "IIC", link: "/campus-life/student-welfare#iic" },
            {
              label: "Induction Programme",
              link: "/campus-life/induction-programme",
            },
            {
              label: "Student Council",
              link: "/campus-life/student-welfare#student-council",
            },
            { label: "National Service Scheme", link: "/campus-life/nss" },
            { label: "Award Functions", link: "/campus-life/icem-awards" },
            { label: "Academics", link: "/campus-life/academics" },
            { label: "Committies", link: "/campus-life/committees" },
            {
              label: "Grievance Redressals",
              link: "/campus-life/committees#grievance",
            },
          ],
        },
        {
          title: "Campus Activities",
          items: [
            { label: "Cultural Events", link: "/campus-life/cultural-events" },
            { label: "Sports & Recreation", link: "/campus-life/sports" },
            { label: "Clubs & Societies", link: "/campus-life/clubs" },
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

            { label: "Information Technology", link: "/programs/it" },
            { label: "Integrated MBA (BBA + MBA)", link: "/programs/imba" },
            { label: "Integrated MCA (BCA + MCA)", link: "/programs/imca" },
            { label: "Civil Engineering", link: "/programs/civil" },
          ],
        },
        {
          title: "Postgraduate Programs",
          items: [
            { label: "MBA", link: "/programs/mba" },
            { label: "MCA", link: "/programs/mca" },

            {
              label: "M-Tech in Computer Science",
              link: "/programs/mtech-comp",
            },
          ],
        },
      ],
    },

    // Simplified Quick Links content structure for mobile menu
    quickLinks: {
      title: "Top Resources",
      sections: [
        {
          items: [
            {
              label: "Pay Fee",
              link: "https://rapid.grayquest.com/iudp-master",
            },
            {
              label: "ERP Staff",
              link: "https://indira.edupluscampus.com/",
            },
            {
              label: "ERP Student",
              link: "https://myindira.edupluscampus.com/",
            },
            {
              label: "360° Tour",
              link: "https://indiraicem.ac.in/ICEM-360-degree-virtual-tour/",
            },
            {
              label: "Leaving Certificate",
              link: "https://lc-icem-sumedh.vercel.app",
            },
            { label: "Contact Us", link: "/contact" },
          ],
        },
      ],
    },

    // NOTE: Placement and Accreditation links will use the simplified
    // mobile dropdown content rendering, even though they are complex objects
    placement: {
      title: "Placement",
      sections: [
        {
          items: [
            { label: "Placement Team", link: "/placement/team" }, // Assuming paths
            { label: "Our Recruiters", link: "/placement/recruiters" },
            { label: "Placed Students", link: "/placement/students" },
            { label: "Placement Policy", link: "/placement/policy" },
          ],
        },
      ],
    },

    // NOTE: This structure is currently not linked in the main mobile loop.
    // I'll skip adding a dedicated mobile handler for it for brevity.
    accreditation: {
      title: "Accreditation",
      sections: [
        {
          title: "NAAC",
          items: [
            { label: "SSR reports year wise", link: "/naac/ssr" },
            { label: "Criteria wise Details", link: "/naac/criteria" },
            { label: "AQAR reports", link: "/naac/aqar" },
            { label: "NAAC Certificate", link: "/naac/certificate" },
          ],
        },
        {
          title: "IQAC",
          items: [
            { label: "IQAC Committee", link: "/iqac/committee" },
            { label: "IQAC Notices", link: "/iqac/notices" },
            { label: "MOMS & Actions", link: "/iqac/moms" },
            { label: "IQAC Formats", link: "/iqac/formats" },
          ],
        },
        {
          title: "Reports & Others",
          items: [
            { label: "NIRF", link: "/reports/nirf" },
            { label: "Financial Statements", link: "/reports/financial" },
          ],
        },
      ],
    },
  };

  const renderDropdownContent = (content) => (
    <div className="max-w-8xl px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in-0 zoom-in-95 duration-300 ">
      {content.sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            {section.title || content.title}
          </h3>
          <ul className="space-y-4 text-gray-800 text-sm">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex justify-between items-center border-b border-black pb-2 group"
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className="font-semibold flex justify-between items-center w-full text-gray-800 hover:text-primary transition-all duration-200 group-hover:translate-x-1"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>{item.label || item}</span>
                    <TbExternalLink className="font-semibold text-gray-900 transition-transform duration-200 group-hover:scale-110" />
                  </Link>
                ) : (
                  <div className="font-semibold flex justify-between items-center w-full text-gray-600">
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

  const renderMobileDropdown = (content) => (
    <div className="bg-gray-50 rounded-lg mt-2 overflow-hidden **animate-in fade-in slide-in-from-top-2 duration-300 ease-in-out**">
      {content.sections.map((section, index) => (
        <div key={index} className="border-t border-gray-200 first:border-t-0">
          {section.title && (
            <h4 className="font-semibold text-secondary px-4 py-2 bg-gray-100">
              {section.title}
            </h4>
          )}
          <ul className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                // STAGGERED ANIMATION: Fade in and slide in from the left slowly
                className="**animate-in fade-in-0 slide-in-from-left-2 duration-300**"
                style={{ animationDelay: `${itemIndex * 50}ms` }}
              >
                <Link
                  href={item.link || "#"}
                  target={
                    item.link && item.link.startsWith("http")
                      ? "_blank"
                      : "_self"
                  }
                  rel={
                    item.link && item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : ""
                  }
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200 hover:translate-x-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label || item}</span>
                  <TbExternalLink className="text-gray-500 text-xs transition-transform duration-200 hover:scale-110" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* ===== NAVBAR (Fixed) ===== */}
      <nav
        ref={navbarRef}
        className="w-full h-[12vh]  flex bg-white shadow-sm font-sans fixed top-0 left-0 right-0 z-50"
      >
        {/* Left: Logo */}
        <div className="w-full md:w-[30%] h-full flex items-center justify-start md:pl-0 md:justify-center">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              height={240}
              width={240}
              className="h-40 w-[80%] md:h-24 md:w-full cursor-pointer object-contain transition-transform duration-300 "
              priority
              unoptimized={true}
            />
          </Link>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex sm:w-[70%] h-full flex-col ">
          {/* Top Bar */}
          <div className="flex justify-end w-full h-[45%] text-xs lg:text-sm text-black">
            <div className="flex gap-1">
              <div className="flex items-center font-semibold gap-1">
                <Link
                  href="https://rapid.grayquest.com/iudp-master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors duration-200 px-1"
                >
                  Pay Fee
                </Link>

                <span className="text-gray-400">|</span>

                <Link
                  href="https://indira.edupluscampus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors duration-200 px-1 lg:px-2"
                >
                  ERP Login Staff
                </Link>

                <span className="text-gray-400">|</span>

                <Link
                  href="https://myindira.edupluscampus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors duration-200 px-1 lg:px-2"
                >
                  ERP Login Student
                </Link>

                <span className="text-gray-400">|</span>

                {/* 🔔 Tooltip Trigger */}
                <button
                  ref={tourRef}
                  onClick={() => setNotify(true)}
                  className="relative hover:text-secondary transition-colors duration-200 px-1 lg:px-2"
                >
                  360<sup>°</sup> Tour
                </button>

                <span className="text-gray-400">|</span>

                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors duration-200 px-1 lg:px-2"
                >
                  Contact Us
                </Link>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => console.log("Open main enquiry modal")}
                className="bg-secondary hover:scale-[1.03] text-white px-4 py-1 font-semibold transition-all duration-200"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* 🎉 Tooltip Notification */}
          {notify && (
            <div className="absolute right-[20vh] top-8 bg-gray-900 text-white text-xs px-3 py-2 rounded-md shadow-md animate-fadeIn z-[999]">
              🚧 Virtual Tour Coming Soon!
            </div>
          )}

          {/* Bottom Nav Links */}
          <div className="flex justify-end items-center h-[55%] text-black font-semibold whitespace-nowrap text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base">
            <div
              className="flex  h-full  items-center gap-1 cursor-pointer hover:text-secondary transition-all duration-200 group"
              onPointerEnter={() => handleMouseEnter("aboutUs")}
              onPointerLeave={handleMouseLeave}
            >
              <span>About Us</span>
              <FiChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  activeDropdown === "aboutUs" ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className="flex items-center gap-1  px-2 xl:px-4 cursor-pointer hover:text-secondary transition-all duration-200 group"
              onPointerEnter={() => handleMouseEnter("campusLife")}
              onPointerLeave={handleMouseLeave}
            >
              <span>Campus Life</span>
              <FiChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  activeDropdown === "campusLife" ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className="flex items-center gap-2  px-2 xl:px-4  cursor-pointer hover:text-secondary transition-all duration-200 group"
              onPointerEnter={() => handleMouseEnter("programs")}
              onPointerLeave={handleMouseLeave}
            >
              <span>Programs & Admission</span>
              <FiChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  activeDropdown === "programs" ? "rotate-180" : ""
                }`}
              />
            </div>
            <Link
              href="/placement"
              className="hover:text-secondary  px-2 xl:px-4   transition-colors duration-200 group"
            >
              Placement
            </Link>
            <Link
              href="/about/examination"
              className="hover:text-secondary  px-2 xl:px-4  transition-colors duration-200 group"
            >
              Examination
            </Link>
            <Link
              href="/alumni"
              className="hover:text-secondary  px-2 xl:px-4  transition-colors duration-200 group"
            >
              Alumni
            </Link>
            <Link
              href="/research"
              className="hover:text-secondary  px-2 xl:px-4  transition-colors duration-200 group"
            >
              Research
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden w-[20%] flex items-center justify-center pr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-text-align-justify-icon lucide-text-align-justify"
            >
              <path d="M3 5h18" />
              <path d="M3 12h18" />
              <path d="M3 19h18" />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu - Desktop */}
        {activeDropdown && (
          <div
            onPointerEnter={() => handleMouseEnter(activeDropdown)}
            onPointerLeave={handleMouseLeave}
            className="absolute top-full left-0 w-full backdrop-blur-sm bg-white/60 shadow-xl border-t border-gray-200 z-50 hidden md:block animate-in fade-in-0 slide-in-from-top-2 duration-300"
          >
            {renderDropdownContent(dropdownContent[activeDropdown])}
          </div>
        )}
      </nav>

      {/* Add padding to main content to account for fixed navbar */}
      <div className="pt-[12vh]"></div>

      {/* Mobile Menu - Slides from bottom to top */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="md:hidden fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-50 z-40 animate-in fade-in-0 duration-300"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 transform transition-all duration-500 **ease-[cubic-bezier(0.65,0.05,0.36,1)]** ${
              // Slightly adjusted ease for a smoother slide
              isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "85vh" }}
          >
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-base font-semibold text-gray-900">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-700 transition-all duration-300 hover:scale-110"
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
                {/* 🔹 Main Nav Items (with stagger animation applied) */}
                {mobileNavItems.map((navItem, index) => {
                  // Determine if it's a dropdown or a single link
                  const isDropdown = !navItem.href;

                  // Get the content for the dropdown if it exists
                  const content = dropdownContent[navItem.name];

                  if (isDropdown) {
                    return (
                      <div
                        key={navItem.name}
                        className="border-b border-gray-200 **animate-in fade-in-0 slide-in-from-top-1 duration-300**"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <button
                          onClick={() => toggleMobileDropdown(navItem.name)}
                          className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                        >
                          <span>{navItem.label}</span>
                          <span className="text-lg transition-transform duration-300">
                            {mobileDropdown === navItem.name ? (
                              <FiChevronUp className="w-4 h-4" />
                            ) : (
                              <FiChevronDown className="w-4 h-4" />
                            )}
                          </span>
                        </button>
                        {mobileDropdown === navItem.name &&
                          content &&
                          renderMobileDropdown(content)}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={navItem.name}
                        className="border-b border-gray-200 **animate-in fade-in-0 slide-in-from-top-1 duration-300**"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Link
                          href={navItem.href}
                          className="flex items-center justify-between py-3 text-sm font-medium text-gray-900 hover:text-primary transition-all duration-200 hover:translate-x-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {navItem.label}
                          <TbExternalLink className="text-gray-500 text-xs transition-transform duration-200 hover:scale-110" />
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>

              {/* 🔹 Compact Enquire Now Button */}
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={() => {
                    toggleModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#278da4] to-[#003c84] text-white py-2 text-sm font-semibold rounded-md hover:from-[#278da4]/90 hover:to-[#003c84]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===== Helpline Drawer (Unchanged) ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-50 ${
          isHelplineOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">Admissions Helpline</h3>
          <button
            onClick={toggleHelpline}
            className="hover:scale-110 transition-transform duration-300"
          >
            <HiX size={24} />
          </button>
        </div>

        <div className="p-6 text-gray-800 space-y-6 overflow-y-auto h-full">
          <div className="animate-in fade-in-0 slide-in-from-right-2 duration-500">
            <p className="text-sm text-gray-600">
              For more information give a miss call on
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-2 transition-all duration-300 hover:shadow-md">
              <p className="text-2xl font-bold text-primary text-center">
                1800 267 1999
              </p>
            </div>
          </div>
        </div>
      </div>

      {isHelplineOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-in fade-in-0 duration-300"
          onClick={toggleHelpline}
        />
      )}

      {/* ===== APPLY NOW MODAL (Unchanged) ===== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60]"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="max-w-7xl" onClick={(e) => e.stopPropagation()}>
            <ApplyForm />
          </div>
        </div>
      )}

      {/* ===== MOBILE FAB (Social Bar) - New Initial Animation ===== */}
      {!isMobileMenuOpen && (
        <div className="fixed bottom-2 left-5 right-5 z-[9999] md:hidden bg-secondary text-white shadow-2xl rounded-full transition-all duration-300 hover:scale-[1.02] **animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out**">
          <div className="flex justify-between items-center px-4 py-3">
            {/* Facebook Link */}
            <Link
              href="https://www.facebook.com/ICEM.AVIRAT/"
              target="_blank"
              className="p-3 bg-white rounded-full transition-all duration-200 active:scale-110 shadow-md hover:shadow-lg"
            >
              <FaFacebookF className="text-secondary" size={18} />
            </Link>
            {/* LinkedIn Link */}
            <Link
              href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/"
              target="_blank"
              className="p-3 bg-white rounded-full transition-all duration-200 active:scale-110 shadow-md hover:shadow-lg"
            >
              <FaLinkedinIn className="text-secondary" size={18} />
            </Link>
            {/* Mail Link - Primary CTA */}
            <Link
              href="mailto:admissions@indiraicem.ac.in"
              target="_blank"
              className="p-3 bg-white rounded-full transition-all duration-200 active:scale-95 shadow-xl hover:shadow-2xl"
            >
              <Mail size={18} className="text-secondary" />
            </Link>
            {/* Instagram Link */}
            <Link
              href="https://www.instagram.com/icem_pune/"
              target="_blank"
              className="p-3 bg-white rounded-full transition-all duration-200 active:scale-110 shadow-md hover:shadow-lg"
            >
              <FaInstagram className="text-secondary" size={18} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
