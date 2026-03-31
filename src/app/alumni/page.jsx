"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const alumniProfiles = [
  {
    id: 1,
    name: "Aaditya Narayan",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Aaditya Narayan.webp",
  },
  {
    id: 2,
    name: "Anmol Bajpai",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Anmol Bajpai.webp",
  },
  {
    id: 3,
    name: "Arpita Jha",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Arpita Jha.webp",
  },
  {
    id: 4,
    name: "Bharat Thorat",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Bharat Thorat.webp",
  },
  {
    id: 5,
    name: "Ganesh Lawand",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Ganesh Lawand.webp",
  },
  {
    id: 6,
    name: "Gaurav Pate",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Gaurav Pate.webp",
  },
  {
    id: 7,
    name: "Ishita Gupta",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Ishita Gupta.webp",
  },
  {
    id: 8,
    name: "Mandar Adsul",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Mandar Adsul.webp",
  },
  {
    id: 9,
    name: "Prayush Parekh",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Prayush Parekh.webp",
  },
  {
    id: 10,
    name: "Rajita Roy",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Rajita Roy.webp",
  },
  {
    id: 11,
    name: "Sourabh Madukar",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Sourabh Madukar.webp",
  },
  {
    id: 12,
    name: "Swapnil Patil",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Swapnil Patil.webp",
  },
  {
    id: 13,
    name: "Vaishnavi Shinde",
    position: "Alumni",
    company: "ICEM",
    year: "2024",
    image: "/alumni/Vaishnavi Shinde.webp",
  },
];
export default function Alumni() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    graduationYear: "",
    course: "",
    currentCompany: "",
    position: "",
    linkedin: "",
    message: "",
  });

  const [flipped, setFlipped] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for registering! We will get back to you soon.");
  };

  const toggleFlip = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setFlipped((prev) => ({
        ...prev,
        [id]: true,
      }));
    }
  };

  const handleMouseLeave = (id) => {
    if (!isMobile) {
      setFlipped((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
  };

  const testimonials = [
    {
      name: "Hansala",
      branch: "Mechanical Engineering",
      year: "2013",
      story:
        "An Indira alumnus who graduated in 2013, secured a position as a Mechanical Engineer at Vanderlande. Presently, he is based in Jidah, Saudi Arabia and has extensively explored 30-40 countries during his business travels.",
    },
    {
      name: "Arpita Jha",
      branch: "Computer Engineering",
      year: "2019",
      story:
        "An exemplary scholar from Indira, initially served as a content writer. Subsequently, she received an Internship+ PPO offer from Microsoft, but instead she chose to embark on her entrepreneurial journey.",
    },
    {
      name: "Apoorva Kakkar",
      branch: "Mechanical Engineering",
      year: "2015",
      story:
        "Our alumni works as a Business Data Modeller at ABN Amro Bank, Netherlands, bringing innovation and expertise to the international banking sector.",
    },
    {
      name: "Nikhil Pawar",
      branch: "Mechanical Engineering",
      year: "2013",
      story:
        "A former student of Indira, commenced his professional journey at Bridgestone in 2013 & presently holds the esteemed position of a global supply manager at Tesla in Germany.",
    },
    {
      name: "Major Ankur Tyagi",
      branch: "Mechanical Engineering",
      year: "2012",
      story:
        "One of our esteemed students, holds the rank of Major in the Indian Army. Indira takes immense pride in having him as an alumnus serving the nation.",
    },
    {
      name: "Swapnil Patil",
      branch: "Civil Engineering",
      year: "2014",
      story:
        "Works as an Assistant Executive Engineer, Government of Maharashtra, dedicating his expertise to infrastructure development and public service.",
    },
    {
      name: "Ibraheem",
      branch: "Mechanical Engineering",
      year: "2016",
      story:
        "A shining Indira alumnus who has made a mark in the world of patents, acquiring them from various countries. Additionally, Ibraheem is a National Level Shooter. In 2018, he successfully built an impressive portfolio of patents and authored a book centered around his accomplishments.",
    },
    {
      name: "Nileshkumar Kshirsagar",
      branch: "MBA",
      year: "2011",
      story:
        "An alumnus of Indira who graduated in 2011, has displayed exceptional achievements and is currently serving as an IAS officer in the Chhattisgarh Cadre.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => handleNext(), 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const totalSlides = testimonials.length;

    if (currentIndex === totalSlides - 1) {
      setIsTransitioning(true);
      setCurrentIndex(totalSlides);

      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 600);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <>
      <Head>
        <title>ICEM Alumni Network</title>
        <meta
          name="description"
          content="Connect with ICEM alumni and stay updated with our alumni network."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ===== Header ===== */}
          <header className="text-center mb-20">
            <h1 className="text-4xl font-bold text-secondary tracking-tight mb-4">
              ICEM Alumni Network
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stay connected with your alma mater and fellow alumni. Join our
              growing network of leaders and accomplished professionals.
            </p>
          </header>

          {/* ===== Alumni Flip Cards Section ===== */}
          <section className="mb-24">
            <h2 className="text-3xl font-semibold text-secondary mb-10 text-center lg:text-left">
              Our Distinguished Alumni
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {alumniProfiles.map((alumni) => (
                <div key={alumni.id} className="text-center w-full">
                  {/* --- Flip Card Wrapper --- */}
                  <div
                    className="relative w-full aspect-square cursor-pointer perspective"
                    onClick={() => isMobile && toggleFlip(alumni.id)}
                    onMouseEnter={() => handleMouseEnter(alumni.id)}
                    onMouseLeave={() => handleMouseLeave(alumni.id)}
                  >
                    {/* --- Flip Card Inner --- */}
                    <div
                      className="relative w-full h-full transition-transform duration-500 transform-gpu"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: flipped[alumni.id]
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                      }}
                    >
                      {/* Front */}
                      <div
                        className="absolute inset-0 rounded-xl shadow-md overflow-hidden bg-gray-200"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <Image
                          src={alumni.image}
                          alt={alumni.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Back */}
                      <div
                        className="absolute inset-0 rounded-xl shadow-md bg-secondary flex flex-col items-center justify-center p-4 text-white text-center"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <h3 className="font-bold text-base">{alumni.name}</h3>
                        <p className="text-sm font-medium opacity-90 mt-1">
                          {alumni.position}
                        </p>
                        <p className="text-xs opacity-80">{alumni.company}</p>

                        <p className="text-xs border-t border-white/30 pt-2 mt-3 w-full">
                          Batch: {alumni.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --- Text Below Card --- */}
                  <h3 className="mt-4 font-semibold text-gray-800">
                    {alumni.name}
                  </h3>
                  <p className="text-sm text-gray-600">{alumni.position}</p>
                  <p className="text-xs text-gray-500">{alumni.company}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Alumni Success Stories Carousel ===== */}
          {/* ===== Alumni Success Stories Carousel ===== */}
          <section className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-lg border border-gray-200 mt-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-secondary mb-2 tracking-tight">
                Alumni Success Stories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover the inspiring journeys of our alumni who have excelled
                across the globe.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div
                className={`flex ${
                  isTransitioning
                    ? "transition-transform duration-600 ease-in-out"
                    : ""
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {[...testimonials, testimonials[0]].map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-3 md:px-6">
                    <div className="bg-gradient-to-br from-white to-blue-50/60 border border-gray-200 rounded-2xl shadow-md p-6 md:p-10 h-[355px] md:h-[320px] lg:h-[290px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
                      {/* Alumni Info - NOW AT TOP */}
                      <div className="border-b border-gray-300 pb-4 mb-6">
                        <h3 className="text-xl font-bold text-secondary mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-primary font-semibold mb-1">
                          {item.branch}
                        </p>
                        <p className="text-sm text-gray-600 font-medium">
                          Batch: {item.year}
                        </p>
                      </div>

                      {/* Story - NOW BELOW */}
                      <div>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg italic">
                          "{item.story}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`relative h-2 rounded-full cursor-pointer overflow-hidden transition-all ${
                      currentIndex % testimonials.length === i
                        ? "w-8 bg-gray-300"
                        : "w-2 bg-gray-500/60"
                    }`}
                  >
                    {currentIndex % testimonials.length === i && (
                      <span className="absolute top-0 left-0 h-full w-0 bg-secondary animate-progressFill"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Slider Styling */}
            <style jsx>{`
              @keyframes progressFill {
                from {
                  width: 0%;
                }
                to {
                  width: 100%;
                }
              }
              .animate-progressFill {
                animation: progressFill 2.5s linear forwards;
              }
            `}</style>
          </section>
        </div>
      </div>
    </>
  );
}
