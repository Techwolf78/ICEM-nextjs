"use client";

import { useState, useEffect } from "react";

const words = ["Future", "Success", "Career", "Journey", "Impact", "Legacy"];
export default function Typingsection() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Words to cycle through dynamically

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing forward
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        // Deleting backward
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <>
      {/* Typing Text Section */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Crafting Your{" "}
              <span className="text-secondary font-extrabold">
                {currentText}
                <span className="ml-2 animate-blink">|</span>
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Cursor Blink Animation */}
      <style>
        {`
    @keyframes blink {
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 1s step-start infinite;
    }
  `}
      </style>
    </>
  );
}
