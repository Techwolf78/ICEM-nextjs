"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Mail } from "lucide-react";

// Helper component for styled social links
// Changed background to match the light theme and hover accent to teal (your secondary)
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-200 hover:bg-secondary text-gray-600 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    // Changed main background to white/light gray
    <footer className="bg-white text-gray-700 border-t border-gray-200 shadow-xl">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ===== Logo + Contact ===== */}
        <div className="space-y-6 md:col-span-2 lg:col-span-1">
          <Image
            src="/Logo.png"
            alt="ICEM Logo"
            width={200}
            height={200}
            className="h-16 w-auto object-contain"
          />

          <p className="text-sm text-gray-500 leading-relaxed">
            <span className="font-semibold block mb-2 text-gray-700">
              📍 Indira Chanakya Campus (ICC)
            </span>
            S.No. 64,65, Gat No. 276, Parandwadi,
            <br />
            Near Somatne Phata, Tal. Maval, Pune – 410506
          </p>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-3 text-gray-600">
              {/* Used secondary as a placeholder for your secondary color */}
              <FaPhoneAlt className="text-secondary w-4 h-4" />{" "}
              <span>02114 – 661500 / 666</span>
            </p>
            <p className="flex items-center gap-3 text-gray-600">
              {/* Used secondary as a placeholder for your secondary color */}
              <FaEnvelope className="text-secondary w-4 h-4" />{" "}
              <span>info@indiraicem.ac.in</span>
            </p>
          </div>
        </div>

        {/* Social Icons - Moved for better prominence on mobile/tablet */}
        <div className="flex gap-3 pt-2 md:hidden">
          <SocialIcon href="https://www.facebook.com/ICEM.AVIRAT/">
            <FaFacebookF size={18} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/?originalSubdomain=in">
            <FaLinkedinIn size={18} />
          </SocialIcon>
          <SocialIcon href="mailto:admissions@indiraicem.ac.in">
            <Mail size={18} />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/icem_pune/">
            <FaInstagram size={18} />
          </SocialIcon>
        </div>

        {/* ===== Important Links ===== */}
        <div className="lg:pl-8">
          {/* Used secondary for the accent color */}
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-secondary w-max pb-1">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              {/* Used teal-400 for hover accent color */}
              <Link
                href="/career"
                className="hover:text-secondary transition-colors"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/Feedback"
                className="hover:text-secondary transition-colors"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/fees-regulating-authority"
                className="hover:text-secondary transition-colors"
              >
                Fees Regulating Authority
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/Application-Format.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Faculty Application Form
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/MandatoryDisclosure22022024.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Mandatory Disclosure
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Official Documents & Social (Combined) ===== */}
        <div>
          {/* Used secondary for the accent color */}
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-secondary w-max pb-1">
            Official Documents
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link
                href="/pdfs/SGForm.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Staff Grievance Form
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/WomeWelfarePolicy.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Women Welfare Policy
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/code_of_conduct_Anti_Ragging_Policy.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Anti Ragging Policy
              </Link>
            </li>
            <li>
              <a
                href="https://www.unipune.ac.in"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                SPPU
              </a>
            </li>
            <li>
              <a
                href="https://www.aicte-india.org"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                AICTE
              </a>
            </li>
            <li>
              <a
                href="https://mahadbt.maharashtra.gov.in"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                MahaDBT
              </a>
            </li>
          </ul>

          {/* Social Icons - Visible on Desktop/Tablet */}
          <div className="hidden md:flex gap-3 pt-8">
            <SocialIcon href="https://www.facebook.com/ICEM.AVIRAT/">
              <FaFacebookF size={18} />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/?originalSubdomain=in">
              <FaLinkedinIn size={18} />
            </SocialIcon>
            <SocialIcon href="mailto:admissions@indiraicem.ac.in">
              <Mail size={18} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/icem_pune/">
              <FaInstagram size={18} />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar - Copyright ===== */}
      {/* Changed background to a slightly darker shade for contrast */}
      <div className="bg-gray-100 border-t border-gray-200 text-gray-500 text-center text-xs sm:text-sm py-4">
        © {new Date().getFullYear()} Indira College of Engineering and
        Management — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
