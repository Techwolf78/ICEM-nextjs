"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react"; // Using Lucide for cleaner, modern icons

// --- Admissions Contacts Data ---
const admissionsContacts = [
  {
    department: "First Year Engineering",
    name: "Prof. Ashwin Dharme",
    phones: ["7720010705", "7720010706"],
    email: "ashwin.dharme@indiraicem.ac.in",
  },
  {
    department: "Direct Second Year Engineering",
    name: "Dr. Manjusha Tatiya",
    phones: ["8767684837"],
    email: "hodai_ds@indiraicem.ac.in",
  },
  {
    department: "MCA",
    name: "Dr. Darshana Desai",
    phones: ["8637701203"],
    landline: "02114-661560",
    email: "hodmca@indiraicem.ac.in",
  },
  {
    department: "MBA",
    name: "Dr. Archana Salve",
    phones: ["8637701202"],
    landline: "02114-661543",
    email: "hodmba@indiraicem.ac.in",
  },
  {
    department: "MTech",
    name: "Prof. Hemant Darokar",
    phones: ["9822515285"],
    email: "hemant.darokar@indiraicem.ac.in",
  },
  {
    department: "Integrated MCA (BCA+MCA)",
    name: "Dr. Awantika Bijwe",
    phones: ["9623441574"],
    landline: "02114-661583",
    email: "hodbca@indiraicem.ac.in",
  },
  {
    department: "Integrated MBA (BBA+MBA)",
    name: "Dr. Deepa Jamnik",
    phones: ["7020512131"],
    landline: "02114-661593",
    email: "hodbba@indiraicem.ac.in",
  },
];

const ContactPage = () => {
  const [iframeHeight, setIframeHeight] = useState("600");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        setIframeHeight("460");
      } else {
        setIframeHeight("600");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-12 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        {/* 2. Top Grid: Main Contact Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          {/* Left Column: Have Questions Card */}
          <div className="space-y-4 sm:space-y-6 ">
            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Have Questions?</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg">
                  We're here to help with admissions, campus visits, placements, and more.
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-secondary">📞 Quick Contact</h4>
                    <p className="text-sm text-gray-600 mb-3">Office: 02114 – 661500</p>
                    <div className="flex justify-center gap-4">
                      <a href="tel:02114661500" className="bg-secondary text-white px-4 py-2 rounded-md font-medium hover:bg-secondary/90 transition-colors text-sm">
                        Call Now
                      </a>
                      <a href="mailto:info@indiraicem.ac.in" className="bg-secondary text-white px-4 py-2 rounded-md font-medium hover:bg-secondary/90 transition-colors text-sm">
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-semibold text-lg text-gray-900">
                    Indira College of Engineering & Management
                  </p>
                  <p className="text-gray-600 mt-1">Parandwadi, Pune</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: NPF Form */}
          <div className="h-full min-h-[400px] lg:min-h-full relative">
            <div>
              <h2 className="block lg:hidden text-xl font-bold mb-4 text-center text-gray-900">Enquire Now</h2>
              <iframe
                src="https://widgets.nopaperforms.com/register?&w=9fa0f32fe4f405fa68dc3df39ef6a11b"
                width="100%"
                height="490"
                frameBorder="0"
                allowFullScreen
                title="NPF Enquiry Form"
              ></iframe>
            </div>
          </div>
        </div>

        {/* 3. For Admissions */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8 border-l-4 border-secondary pl-2 sm:pl-4">
            For Admissions
          </h2>

          {/* Mobile: Cards */}
          <div className="block lg:hidden space-y-4">
            {admissionsContacts.map((contact, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-secondary text-sm uppercase tracking-wider mb-2">
                  {contact.department}
                </h3>
                <p className="font-semibold text-gray-900 text-base mb-2">
                  {contact.name}
                </p>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Contact: </span>
                    {contact.phones.map((phone, i) => (
                      <span key={i}>
                        <a href={`tel:${phone}`} className="text-secondary hover:underline">
                          {phone}
                        </a>
                        {i < contact.phones.length - 1 && " / "}
                      </span>
                    ))}
                    {contact.landline && (
                      <span> / {contact.landline}</span>
                    )}
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Email: </span>
                    <a href={`mailto:${contact.email}`} className="text-secondary hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table */}
          <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Department</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Name of Staff</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Contact Number</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Email Id</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {admissionsContacts.map((contact, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">{contact.department}</td>
                      <td className="px-4 py-3 text-gray-900">{contact.name}</td>
                      <td className="px-4 py-3 text-gray-900">
                        {contact.phones.map((phone, i) => (
                          <span key={i}>
                            <a href={`tel:${phone}`} className="text-secondary hover:underline">
                              {phone}
                            </a>
                            {i < contact.phones.length - 1 && " / "}
                          </span>
                        ))}
                        {contact.landline && <span> / {contact.landline}</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        <a href={`mailto:${contact.email}`} className="text-secondary hover:underline">
                          {contact.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 5. Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-5">
            {/* Form Left Side (Info Cards) */}
            <div className="lg:col-span-2 bg-secondary p-8 text-white flex flex-col justify-center relative overflow-hidden min-h-[500px]">
              <div className="space-y-4 sm:space-y-6">
                {/* Programme Enquiry Card */}
                <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-secondary/10 rounded-full text-secondary">
                      <Phone size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Admissions & Enquiry
                    </h2>
                  </div>

                  <div className="space-y-2 sm:space-y-4 text-xs sm:text-sm md:text-base">
                    <div className="flex items-start gap-2 sm:gap-4">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1 shrink-0" />
                      <div>
                        <span className="block font-semibold text-gray-700">
                          Office Hours
                        </span>
                        <span className="text-gray-600">
                          Mon – Sat : 10:00 AM – 6:00 PM
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-4">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1 shrink-0" />
                      <div>
                        <span className="block font-semibold text-gray-700">
                          Call Us
                        </span>
                        <div className="text-gray-600 space-y-1">
                          <div>Office: <a href="tel:02114661500" className="hover:text-secondary transition-colors">02114 – 661500 / 666</a></div>
                          <div>Registrar: <a href="tel:02114661521" className="hover:text-secondary transition-colors">02114 – 661521</a></div>
                          <div>Library: <a href="tel:021146615550" className="hover:text-secondary transition-colors">02114 - 6615550</a></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-4">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1 shrink-0" />
                      <div>
                        <span className="block font-semibold text-gray-700">
                          Email
                        </span>
                        <div className="space-y-1">
                          <a
                            href="mailto:info@indiraicem.ac.in"
                            className="text-secondary font-medium hover:underline block"
                          >
                            info@indiraicem.ac.in
                          </a>
                          <a
                            href="mailto:admissions@indiraicem.ac.in"
                            className="text-secondary font-medium hover:underline block"
                          >
                            admissions@indiraicem.ac.in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campus Address Card */}
                <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-secondary/10 rounded-full text-secondary">
                      <MapPin size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      Campus Location
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-tight sm:leading-relaxed mb-2 sm:mb-4">
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
            </div>

            {/* Form Right Side (Map) */}
            <div className="lg:col-span-3 p-4 sm:p-12">
              <h2 className="lg:hidden text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-900 text-center">Campus Map</h2>
              <iframe
                // ✅ FIXED: Points directly to ICEM Parandwadi
                src="https://maps.google.com/maps?q=Indira%20College%20of%20Engineering%20and%20Management%20Parandwadi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height={iframeHeight}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ICEM Campus Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
