"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong!</h1>
      <p className="text-gray-600 mb-6">An unexpected error occurred. Please try again.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition duration-300"
      >
        Try Again
      </button>
    </div>
  );
}