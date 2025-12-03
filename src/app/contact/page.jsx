"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, User, Globe } from "lucide-react"; // Using Lucide for cleaner, modern icons
import ApplyForm from "@/components/home/ApplyForm";

// --- Data ---
const adminContacts = [
  {
    role: "Registrar",
    name: "Mr. Ganesh Pokale",
    email: "registrar@indiraicem.ac.in",
  },
  {
    role: "Deputy CAFO - Finance & Accounts",
    name: "Preeti Chandak",
    email: "finance@indiraicem.ac.in",
  },
  {
    role: "Director of Admissions",
    name: "Dr. Prakash Mainkar",
    email: "director.admissions@indiraicem.ac.in",
  },
  {
    role: "Controller of Examination",
    name: "Dr. Rahul Joshi",
    email: "coe@indiraicem.ac.in",
  },
];

const internationalContacts = [
  {
    name: "Prateek Patil",
    role: "International Admissions",
    email: "international.admissions@indiraicem.ac.in",
    phone: "+91 77200 61619",
  },
  {
    name: "Amruta Sakhare",
    role: "International Admissions",
    email: "international.admissions@indiraicem.ac.in",
    phone: "+91 74474 54556",
  },
  {
    name: "Mudasir Naik",
    role: "International Admissions",
    email: "international.admissions@indiraicem.ac.in",
    phone: "+91 70309 63294",
  },
  {
    name: "Ninad Sapre",
    role: "International Admissions",
    email: "international.admissions@indiraicem.ac.in",
    phone: "+91 86528 42525",
  },
];

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        {/* 2. Top Grid: Main Contact Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Info Cards */}
          <div className="space-y-6">
            {/* Programme Enquiry Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                  <Phone size={24} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Admissions & Enquiry
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-700">
                      Office Hours
                    </span>
                    <span className="text-gray-600">
                      Mon – Sat : 10:00 AM – 6:00 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-700">
                      Call Us
                    </span>
                    <a
                      href="tel:+912066737800"
                      className="text-gray-600 hover:text-secondary transition-colors block"
                    >
                      +91 20-6673 7800 / 7801
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-700">
                      Email Admissions
                    </span>
                    <a
                      href="mailto:admissions@indiraicem.ac.in"
                      className="text-secondary font-medium hover:underline"
                    >
                      admissions@indiraicem.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                  <MapPin size={24} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Campus Location
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Indira College of Engineering and Management</strong>
                <br />
                Gat No. 276, Tal. Maval, S.No. 64, 65,
                <br />
                Indira College Road, Parandvadi,
                <br />
                Maharashtra 410506
              </p>
              <a
                href="https://maps.app.goo.gl/xTcc7i8yTaG5bGzb9"
                target="_blank"
                className="inline-flex items-center text-secondary font-semibold hover:gap-2 transition-all"
              >
                Get Directions <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="h-full min-h-[400px] lg:min-h-full bg-gray-200 rounded-2xl overflow-hidden shadow-md border border-gray-200 relative">
            <iframe
              // ✅ FIXED: Points directly to ICEM Parandwadi
              src="https://maps.google.com/maps?q=Indira%20College%20of%20Engineering%20and%20Management%20Parandwadi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="ICEM Campus Map"
            ></iframe>
          </div>
        </div>

        {/* 3. Administrative Offices Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-4">
            Administrative Offices
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {adminContacts.map((contact, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <User className="w-8 h-8 text-gray-300 group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">
                  {contact.role}
                </h3>
                <p className="font-semibold text-gray-900 text-lg mb-3">
                  {contact.name}
                </p>
                <Link
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-secondary transition-colors"
                >
                  <Mail size={14} />
                  {contact.email}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 4. International Admissions Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-4 flex items-center gap-3">
            International Admissions <Globe className="text-gray-400 w-5 h-5" />
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {internationalContacts.map((contact, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <Globe className="w-8 h-8 text-gray-300 group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">
                  {contact.role}
                </h3>
                <p className="font-semibold text-gray-900 text-lg mb-3">
                  {contact.name}
                </p>
                <div className="space-y-2">
                  <Link
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-xs text-gray-500 hover:text-secondary truncate"
                  >
                    <Mail size={12} />
                    {contact.email}
                  </Link>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 text-xs text-gray-500 hover:text-secondary"
                  >
                    <Phone size={12} />
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-5">
            {/* Form Left Side (Visual) */}
            <div className="hidden lg:block lg:col-span-2 bg-secondary p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Have Questions?</h3>
                <p className="text-indigo-100 mb-8 leading-relaxed">
                  Whether you're interested in our engineering programs,
                  management courses, or just want to visit the campus, we'd
                  love to hear from you.
                </p>
              </div>
              <div className="relative z-10">
                <p className="font-semibold">
                  Indira College of Engineering & Management
                </p>
                <p className="text-sm text-indigo-200 mt-1">Parandwadi, Pune</p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Form Right Side (Inputs) */}
            <div className="lg:col-span-3 p-8 sm:p-12">
             <ApplyForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
