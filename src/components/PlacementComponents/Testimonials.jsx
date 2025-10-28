"use client";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/logos/logo8.png",
      quote:
        "ICEM has always provided us with trained mechanical engineers, and as an organization, we appreciate the college's efforts to prepare the students for the industry.",
      name: "Mr. Rahul Bagale",
      position: "Group HR Head – Force Motors",
    },
    {
      image: "/logos/logo45.png",
      quote:
        "We have entered into an MOU with ICEM to actively support their endeavours in providing excellent job opportunities for civil engineering students. Our longstanding partnership of over a decade with ICEM will continue further to support the civil engineers. ",
      name: "Mr. Siddharth Moorthy",
      position: "Managing Director – Vascon Engineers",
    },
    {
      image: "/logos/logo2.png",
      quote:
        "While conducting campus recruitment drives across the country, ICEM consistently emerges as the top choice due to their exceptional commitment to preparing students for their dream job offers.",
      name: "Ms. Shilpi Mahar",
      position: "Manager, TA – Data Axle",
    },
    {
      image: "/logos/logo22.png",
      quote:
        "We appreciate the designed training programs by ICEM aimed at equipping core Mechanical Engineering students with the necessary skills to excel in the industry. These programs ensure that students emerge as industry-ready professionals  ",
      name: "Ms. Sumana Chakraborty",
      position: "HR Business Partner – Bridgestone India",
    },
    {
      image: "/logos/logo19.png",
      quote:
        "ICEM has been a part of Ready Engineers Programme from a long time. Their way of creating resources prepared specifically to meet the needs of students, ensures a transformative experience that prepares them effectively for the corporate world.",
      name: "Mr. Sushant Kumar",
      position: "India Lead – University Relations, Tata Technologies",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    pauseOnHover: true,
  };

    return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side - Heading Section */}
          <div className="lg:w-2/5 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Trusted by the Best in the Business
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our strongest endorsements come from our recruitment partners. Discover why leading companies consistently choose ICEM graduates to drive their success.
            </p>
          </div>

          {/* Right Side - Testimonials Carousel */}
          <div className="lg:w-3/5">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-col items-center border border-gray-200 rounded-xl p-6">
                    {/* Quote Box */}
                    <div className="bg-secondary/5  p-8 relative max-w-2xl mx-auto mb-8">
                      <FaQuoteLeft className="text-primary text-xl absolute -top-2 left-4 opacity-90" />
                      <p className="italic text-gray-700 text-sm md:text-base leading-relaxed px-2">
                        {item.quote}
                      </p>
                      <FaQuoteRight className="text-primary text-xl absolute -bottom-2 right-4 opacity-90" />
                    </div>

                    {/* Name, Position and Logo in same line */}
                    <div className="flex justify-between items-center w-full max-w-2xl px-4">
                      {/* Name and Position on Left */}
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-secondary mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">{item.position}</p>
                      </div>

                      {/* Logo on Right */}
                      <div className="w-32 h-16 relative bg-white p-2 rounded-lg shadow-md border border-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 128px, 128px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Custom dot styling */}
            <style jsx>{`
              :global(.slick-dots li button:before) {
                color: #3b82f6 !important;
                opacity: 0.4;
                font-size: 10px;
              }
              :global(.slick-dots li.slick-active button:before) {
                opacity: 1;
                color: #3b82f6 !important;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}