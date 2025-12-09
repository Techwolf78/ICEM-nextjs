"use client";

import { useState, useEffect } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedActionBar from "@/components/FixedActionBar";
import Loader from "@/components/Loader";
import LenisProvider from "@/components/LenisProvider";
import { Scroll } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title> Indira College of Engineering & Management, Pune (ICEM)</title>
        <meta
          name="title"
          content="ICEM | Indira College of Engineering & Management, Pune"
        />
        <meta
          name="description"
          content="Admissions open 2025. Explore engineering, MBA, MCA, AI & DS, Mechanical & IT programs at ICEM Pune — NAAC accredited, industry-ready campus."
        />
        <meta
          name="keywords"
          content="Engineering College Pune, Best Engineering College Pune, AI & DS Pune, BTech Pune, MBA Pune, MCA Pune, ICEM, Indira College"
        />
        <meta
          name="author"
          content="Indira College of Engineering & Management"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        <link rel="canonical" href="https://indiraicem.ac.in" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indiraicem.ac.in" />
        <meta property="og:site_name" content="ICEM Pune" />
        <meta
          property="og:title"
          content="ICEM | Indira College of Engineering & Management, Pune"
        />
        <meta
          property="og:description"
          content="Official website of ICEM Pune. Apply now for Engineering, MBA, MCA, and AI & DS programs. NAAC accredited and industry aligned."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://indiraicem.ac.in" />
        <meta
          property="twitter:title"
          content="ICEM | Indira College of Engineering & Management"
        />
        <meta
          property="twitter:description"
          content="Admissions open for 2025. Engineering, MBA, MCA, AI & DS & more. Explore ICEM Pune."
        />
        <meta property="twitter:image" content="/og-image.jpg" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#003c84" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="ICEM Pune" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link rel="icon" type="image/png" href="/shortLogo.png" />
        <link rel="apple-touch-icon" href="/shortLogo.png" />

        <meta name="language" content="English" />
        <meta name="country" content="IN" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.5822;73.7380" />
        <meta name="ICBM" content="18.5822, 73.7380" />
      </head>

      <body className="min-h-screen bg-white" suppressHydrationWarning={true}>
        <Loader isLoading={isLoading} />

        <Navbar />
        <ScrollToTop />
        <FixedActionBar />
        {/* <MobileNav /> */}
        {/* ✔ Wrap entire scrollable content with Lenis */}
        <LenisProvider>
          <main className="flex-grow">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
