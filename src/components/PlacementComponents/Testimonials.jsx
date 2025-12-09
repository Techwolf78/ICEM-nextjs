"use client";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    image: "/logos/logo30.webp",
    quote:
      "ICEM’s commitment to blending technical education with real-world readiness is evident in their students, who arrive well-prepared to contribute meaningfully from day one, making them a preferred choice for our campus recruitment.",
    name: "Mr. Urvish Pandey",
    position:
      "India Head,University Relations & Early Talent Engagement – Mastercard",
  },
  {
    image: "/placement/ultra.webp",
    quote:
      "ICEM has always provided us with trained mechanical engineers, and as an organization, we appreciate the college's efforts to prepare the students for the industry.",
    name: "Dr. Rahul Bagale",
    position: "Vice President Human Resources – Ultra Corpotech Pvt Ltd",
  },
  {
    image: "/logos/logo45.webp",
    quote:
      "We have entered into an MOU with ICEM to actively support their endeavours in providing excellent job opportunities for civil engineering students. Our longstanding partnership of over a decade with ICEM will continue further to support the civil engineers. ",
    name: "Mr. Siddharth Moorthy",
    position: "Managing Director – Vascon Engineers",
  },
  {
    image: "/placement/zinnovfinal.png",
    quote:
      "While conducting campus recruitment drives across the country, ICEM consistently emerges as the top choice due to their exceptional commitment to preparing students for their dream job offers.",
    name: "Ms. Shilpi Mahar",
    position: "Associate Director – Zinnov",
  },
  {
    image: "/placement/expleo1.webp",
    quote:
      "We appreciate the designed training programs by ICEM aimed at equipping core Mechanical Engineering students with the necessary skills to excel in the industry. These programs ensure that students emerge as industry-ready professionals  ",
    name: "Ms. Sumana Chakraborty",
    position: "General Manager,HR – Expleo Group",
  },
  {
    image: "/placement/ey1.png",
    quote:
      "ICEM has been a part of Ready Engineers Programme from a long time. Their way of creating resources prepared specifically to meet the needs of students, ensures a transformative experience that prepares them effectively for the corporate world.",
    name: "Mr. Sushant Kumar",
    position: "Assistant Director – EY",
  },
];
export default function Testimonials() {
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
    adaptiveHeight: true,
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Side - Heading Section */}
          <div className="lg:w-2/5 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-secondary mb-3 md:mb-4">
              Trusted by the Best in the Business
            </h2>
            <p className="text-gray-700 leading-relaxed text-xs md:text-sm lg:text-base">
              Our strongest endorsements come from our recruitment partners.
              Discover why leading companies consistently choose ICEM graduates
              to drive their success.
            </p>
          </div>

          {/* Right Side - Testimonials Carousel */}
          <div className="lg:w-3/5 w-full">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="px-1">
                  <div className="flex flex-col items-center border border-gray-200 rounded-xl p-2 md:p-4 lg:p-6 h-[220px] md:h-[280px] lg:h-[320px]">
                    {/* Quote Box */}
                    <div className="bg-secondary/5 p-2 md:p-3 lg:p-4 xl:p-6 relative w-full mx-auto mb-2 md:mb-3 lg:mb-4 xl:mb-6">
                      <FaQuoteLeft className="text-primary text-base md:text-lg lg:text-xl absolute -top-2 left-2 md:left-3 lg:left-4 opacity-90" />
                      <p className="italic text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed px-1 md:px-2">
                        {item.quote}
                      </p>
                      <FaQuoteRight className="text-primary text-base md:text-lg lg:text-xl absolute -bottom-2 right-2 md:right-3 lg:right-4 opacity-90" />
                    </div>

                    {/* Name, Position and Logo */}
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-2xl px-1 md:px-2 lg:px-3 xl:px-4 gap-1 md:gap-2 lg:gap-3 xl:gap-0">
                      {/* Name and Position */}
                      <div className="text-center sm:text-left flex-1">
                        <h3 className="text-sm md:text-base lg:text-lg font-bold text-secondary mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-tight">
                          {item.position}
                        </p>
                      </div>

                      {/* Logo */}
                      <div className="w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28 h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-14 relative p-0.5 md:p-1 lg:p-2 rounded-lg shadow-md border bg-white border-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, (max-width: 1280px) 80px, (max-width: 1536px) 96px, 112px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Custom dot styling */}
            <style jsx>{`
              :global(.slick-dots) {
                bottom: -30px !important;
              }
              :global(.slick-dots li button:before) {
                color: #3b82f6 !important;
                opacity: 0.4;
                font-size: 6px !important;
              }
              :global(.slick-dots li.slick-active button:before) {
                opacity: 1;
                color: #3b82f6 !important;
              }
              @media (min-width: 768px) {
                :global(.slick-dots) {
                  bottom: -35px !important;
                }
                :global(.slick-dots li button:before) {
                  font-size: 8px !important;
                }
              }
              @media (min-width: 1024px) {
                :global(.slick-dots) {
                  bottom: -40px !important;
                }
                :global(.slick-dots li button:before) {
                  font-size: 10px !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
