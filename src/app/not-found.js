"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">

      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/Logo.png"
          alt="ICEM Logo"
          width={160}
          height={160}
          className="mx-auto object-contain"
          priority
        />
      </div>

      {/* Illustration
      <div className="w-full max-w-sm mb-8">
        <Image
          src="/404.svg"
          alt="Not Found Illustration"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div> */}

      {/* Title */}
      <h1 className="text-5xl font-bold text-secondary mb-4">
        404
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md mb-6">
        The page you're looking for doesn’t exist or may have been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition duration-300 shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
}
