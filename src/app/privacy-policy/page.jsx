"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 text-gray-800 leading-relaxed">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-4xl font-bold text-secondary mb-6">
          Privacy Policy
        </h1>

        {/* Section 1 */}
        <p className="sm:text-lg mb-6">
          <strong>
            Indira College of Engineering & Management (ICEM) Privacy Statement
          </strong>
        </p>
        <p className="text-sm sm:text-base mb-6">
          We respect the privacy of all visitors to our website. Through the
          course of operations, we collect information about visitors through
          multiple methods and for a number of reasons.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mt-6 mb-3">
          Anonymous Information
        </h2>
        <p className="text-sm sm:text-base mb-6">
          Anonymous information concerning the browsing habits of our visitors
          is collected to inform future design decisions that enhance user
          experience. This anonymous user information is collected through
          third-party vendors, including Google, that specialize in website
          analytics.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mt-6 mb-3">
          Personal Information
        </h2>
        <p className="text-sm sm:text-base mb-6">
          Any personal or contact information voluntarily shared by users
          through online forms is protected through internal processes and is
          never sold to third parties. During regular operations, we may store
          some contact information with trusted third-party providers used for
          communication purposes.
        </p>
        <p className="text-sm sm:text-base mb-6">
          When you voluntarily send us electronic mail or fill out a form, we
          keep a record of this information to respond appropriately. We collect
          information from you only when you register on our site or submit a
          form. When doing so, you may be asked to enter your name, email
          address, or phone number. However, you may also visit our site
          anonymously.
        </p>
        <p className="text-sm sm:text-base mb-6">
          In case you have submitted your personal information and contact
          details, we reserve the right to contact you via Call, SMS, Email, or
          WhatsApp about our products and offers—even if your number is
          registered under DND (Do Not Disturb).
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mt-6 mb-3">Links</h2>
        <p className="text-sm sm:text-base mb-6">
          Our website contains links to other websites. Please note that when
          you follow these links, you are entering another website and our
          privacy policy is no longer in effect. We encourage you to read the
          privacy statements of these linked sites.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mt-6 mb-3">Cookies</h2>
        <p className="text-sm sm:text-base mb-6">
          We track website traffic through the Google Analytics platform. We and
          third-party vendors, including Google, use cookies stored on your
          device to analyze how interactions with advertising and services
          relate to website traffic.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mt-6 mb-3">
          Changes to This Policy
        </h2>
        <p className="text-sm sm:text-base mb-6">
          Our Privacy Statement may change from time to time. We will update any
          changes on this page and, if the changes are significant, we may
          provide a more prominent notice.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mt-6 mb-3">Questions</h2>
        <p className="text-sm sm:text-base">
          If you have any questions about this statement, please contact us at:{" "}
          <a
            href="mailto:info@indiraicem.ac.in"
            className="text-secondary underline hover:text-secondary"
          >
            info@indiraicem.ac.in
          </a>
        </p>
      </main>
    </>
  );
}
