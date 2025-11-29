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
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-200 hover:bg-secondary text-gray-600 hover:text-white transition-colors duration-200 shadow-sm hover:shadow-md"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 shadow-xl">
      {/* Main Footer Content Container - Uses max-w-7xl and generous padding */}
      {/* Grid columns: 1 on mobile, 2 on md (tablet), 4 on lg (desktop) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
        {/*
          // =======================================================
          // ===== Column 1: Logo, Contact & Socials (md:col-span-2) =====
          // =======================================================
        */}
        <div className="space-y-8 md:col-span-2 lg:col-span-2">
          {" "}
          {/* Spans 2 columns on MD */}
          {/* Logo */}
          <Image
            src="/Logo.webp"
            alt="ICEM Logo"
            width={400}
            height={500}
            className="h-auto w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
          />
          {/* Contact Information (New Consolidated Block) */}
          <div className="space-y-4 text-sm  px-4">
            {/* Address */}
            <p className="text-gray-500 leading-relaxed hover:text-gray-700 transition-colors duration-200 cursor-default">
              <span className="font-extrabold block mb-1 text-lg text-gray-700">
                Indira Chanakya Campus (ICC)
              </span>
              S.No. 64,65, Gat No. 276 At Post : Parandwadi, Near Somatne phata,
              Tal. : Maval, Dist. Pune – 410 506
            </p>
            <div className="flex items-center justify-start gap-10">
              {/* Phone */}
              <p className="flex items-center gap-3 text-gray-600 font-semibold group">
                <FaPhoneAlt className="text-secondary w-5 h-5 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+02114661500"
                  className="hover:text-primary transition-colors"
                >
                  02114 – 661500 / 666
                </a>
              </p>

              {/* Email */}
              <p className="flex items-center gap-3 text-gray-600 font-semibold group">
                <FaEnvelope className="text-secondary w-5 h-5 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@indiraicem.ac.in"
                  className="hover:text-primary transition-colors"
                >
                  info@indiraicem.ac.in
                </a>
              </p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 pt-4 px-4">
            <SocialIcon href="https://www.facebook.com/ICEM.AVIRAT/">
              <FaFacebookF size={20} />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/?originalSubdomain=in">
              <FaLinkedinIn size={20} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/icem_pune/">
              <FaInstagram size={20} />
            </SocialIcon>
            <SocialIcon href="mailto:admissions@indiraicem.ac.in">
              <Mail size={20} />
            </SocialIcon>
          </div>
        </div>

        {/* // =======================================================
          // ===== Column 2: Quick Links (Now in the second column) =====
          // This column used to be the third, but the Contact Info section 
          // was merged into the first column.
          // =======================================================
        */}
        <div className="lg:pl-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-secondary w-max pb-1">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>
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
        </div>

        {/* // =======================================================
          // ===== Column 3: Official Documents (Now in the third column) =====
          // =======================================================
        */}
        <div>
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
                Staff Grievance Form (PDF)
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/WomeWelfarePolicy.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Women Welfare Policy (PDF)
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/code_of_conduct_Anti_Ragging_Policy.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Anti Ragging Policy (PDF)
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/Application-Format.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Faculty Application Form (PDF)
              </Link>
            </li>
            <li>
              <Link
                href="/pdfs/MandatoryDisclosure22022024.pdf"
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                Mandatory Disclosure (PDF)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar - Copyright ===== */}
      <div className="bg-secondary border-t border-gray-200 text-gray-100 text-center text-xs sm:text-sm py-4">
        © {new Date().getFullYear()} Indira College of Engineering and
        Management — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
