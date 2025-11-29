"use client";

import { Mail, LayoutGrid } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="fixed bottom-2 left-5 right-5 z-[9999] md:hidden bg-secondary text-white shadow-2xl rounded-full transition-all duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-center px-4 py-3">
        {" "}
        {/* Use justify-around for better spacing with fewer items */}
        {/* Facebook Link */}
        <Link
          href="https://www.facebook.com/ICEM.AVIRAT/"
          target="_blank"
          // Class for white, rounded background and padding
          className="p-3 bg-white rounded-full transition-all duration-200 active:scale-110 shadow-md hover:shadow-lg"
        >
          <FaFacebookF className="text-secondary" size={24} />{" "}
          {/* Change icon color to match 'secondary' background */}
        </Link>
        {/* LinkedIn Link */}
        <Link
          href="https://www.linkedin.com/company/indira-college-of-engineering-and-management-pune/"
          target="_blank"
          className="p-3 bg-white rounded-full transition-all duration-200 active:scale-110 shadow-md hover:shadow-lg"
        >
          <FaLinkedinIn className="text-secondary" size={24} />
        </Link>
        {/* Mail Link - A great opportunity for a primary CTA style */}
        <Link
          href="mailto:admissions@indiraicem.ac.in"
          target="_blank"
          // Slightly larger/more prominent for the primary CTA
          className="p-3 bg-white rounded-full transition-all duration-200 active:scale-95 shadow-xl hover:shadow-2xl"
        >
          <Mail size={24} className="text-secondary" />
        </Link>
        {/* Instagram Link */}
        <Link
          href="https://www.instagram.com/icem_pune/"
          target="_blank"
          className="p-3 bg-white rounded-full transition-all duration-200 active:scale-110 shadow-md hover:shadow-lg"
        >
          <FaInstagram className="text-secondary" size={24} />
        </Link>
      </div>
    </div>
  );
}
