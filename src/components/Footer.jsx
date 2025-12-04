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
// Added 'label' for Accessibility (Lighthouse Score)
const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-full bg-gray-100 hover:bg-secondary text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 shadow-[0_-5px_25px_-5px_rgba(0,0,0,0.1)]">
      {/* Main Footer Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
        {/* =======================================================
          COLUMN 1: Logo, Contact & Socials (Spans 2 cols on Desktop)
          ======================================================= 
        */}
        <div className="space-y-8 md:col-span-2 lg:col-span-2">
          {/* Logo - Constrained width for better mobile look */}
          <div className="relative w-64 h-auto">
            <Image
              src="/Logo.webp"
              alt="ICEM Logo"
              width={400}
              height={150} // Adjusted aspect ratio assumption
              className="object-contain"
              priority={false} // Lazy load footer images
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-5 px-1">
            {/* Address */}
            <div className="text-gray-500 leading-relaxed hover:text-gray-700 transition-colors duration-200">
              <span className="font-extrabold block mb-1 text-lg text-gray-800">
                Indira Chanakya Campus (ICC)
              </span>
              <p className="max-w-md">
                S.No. 64,65, Gat No. 276 At Post: Parandwadi, Near Somatne
                phata, Tal.: Maval, Dist. Pune – 410 506
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
              {/* Phone */}
              <p className="flex items-center gap-3 text-gray-600 font-semibold group">
                <span className="p-2 bg-secondary/10 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <FaPhoneAlt size={14} />
                </span>
                <a
                  href="tel:+02114661500"
                  className="hover:text-secondary transition-colors"
                >
                  02114 – 661500 / 666
                </a>
              </p>

              {/* Email */}
              <p className="flex items-center gap-3 text-gray-600 font-semibold group">
                <span className="p-2 bg-secondary/10 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <FaEnvelope size={14} />
                </span>
                <a
                  href="mailto:info@indiraicem.ac.in"
                  className="hover:text-secondary transition-colors"
                >
                  info@indiraicem.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <SocialIcon
              href="https://www.facebook.com/ICEM.AVIRAT/"
              label="Facebook"
            >
              <FaFacebookF size={18} />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/"
              label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/icem_pune/"
              label="Instagram"
            >
              <FaInstagram size={18} />
            </SocialIcon>
            <SocialIcon
              href="mailto:admissions@indiraicem.ac.in"
              label="Email Admissions"
            >
              <Mail size={18} />
            </SocialIcon>
          </div>
        </div>

        {/* =======================================================
          COLUMN 2: Quick Links
          ======================================================= 
        */}
        <div className="lg:pl-8">
          <h3 className="text-lg font-bold text-gray-800 mb-6 border-b-2 border-secondary w-max pb-1">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm font-medium text-gray-500">
            {[
              { name: "Career", link: "/career" },
              { name: "Feedback", link: "/Feedback" },
              { name: "Privacy Policy", link: "/privacy-policy" },
              {
                name: "Fees Regulating Authority",
                link: "/fees-regulating-authority",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="hover:text-secondary hover:translate-x-1 transition-all inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* External Links */}
            <li>
              <a
                href="https://www.unipune.ac.in"
                target="_blank"
                className="hover:text-secondary hover:translate-x-1 transition-all inline-block"
              >
                SPPU
              </a>
            </li>
            <li>
              <a
                href="https://www.aicte-india.org"
                target="_blank"
                className="hover:text-secondary hover:translate-x-1 transition-all inline-block"
              >
                AICTE
              </a>
            </li>
            <li>
              <a
                href="https://mahadbt.maharashtra.gov.in"
                target="_blank"
                className="hover:text-secondary hover:translate-x-1 transition-all inline-block"
              >
                MahaDBT
              </a>
            </li>
          </ul>
        </div>

        {/* =======================================================
          COLUMN 3: Official Documents
          ======================================================= 
        */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-6 border-b-2 border-secondary w-max pb-1">
            Official Documents
          </h3>

          <ul className="space-y-3 text-sm font-medium text-gray-500">
            {[
              { name: "Staff Grievance Form (PDF)", link: "/pdfs/SGForm.pdf" },
              {
                name: "Women Welfare Policy (PDF)",
                link: "/pdfs/WomenWelfarePolicy.pdf",
              },
              {
                name: "Anti Ragging Policy (PDF)",
                link: "/pdfs/code_of_conduct_Anti_Ragging_Policy.pdf",
              },
              {
                name: "Faculty Application Form (PDF)",
                link: "/pdfs/Application-Format.pdf",
              },
              {
                name: "Mandatory Disclosure (PDF)",
                link: "/pdfs/MandatoryDisclosure22022024.pdf",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  target="_blank"
                  className="hover:text-secondary hover:translate-x-1 transition-all inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar - Copyright ===== */}
      <div className="bg-secondary text-white text-center text-xs sm:text-sm py-4 px-4">
        <p className="opacity-90">
          © {new Date().getFullYear()} Indira College of Engineering and
          Management — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
