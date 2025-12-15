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
    image: "/logos/juspay.png",
    quote:
      "ICEM’s emphasis on both technical excellence and practical application prepares students exceptionally well. Their graduates bring not just skills, but a solution-oriented mindset to Juspay.",
    name: "Dr. Shipra Pandit",
    position: "Director - HR, Juspay"
  },
  {
    image: "/logos/logo30.webp",
    quote:
      "ICEM’s commitment to blending technical education with real-world readiness is evident in their students, who arrive well-prepared to contribute meaningfully from day one, making them a preferred choice for our campus recruitment.",
    name: "Mr. Urvish Pandey",
    position:
      "India Head, University Relations & Early Talent Engagement – Mastercard"
  },
  {
    image: "/placement/ultra.webp",
    quote:
      "ICEM has always provided us with trained mechanical engineers, and as an organization, we appreciate the college's efforts to prepare the students for the industry.",
    name: "Dr. Rahul Bagale",
    position: "Vice President Human Resources – Ultra Corpotech Pvt Ltd"
  },
  {
    image: "/logos/logo45.webp",
    quote:
      "We have entered into an MOU with ICEM to actively support their endeavours in providing excellent job opportunities for civil engineering students. Our longstanding partnership of over a decade with ICEM will continue further to support the civil engineers.",
    name: "Mr. Siddharth Moorthy",
    position: "Managing Director – Vascon Engineers"
  },
  {
    image: "/placement/zinnovfinal.png",
    quote:
      "While conducting campus recruitment drives across the country, ICEM consistently emerges as the top choice due to their exceptional commitment to preparing students for their dream job offers.",
    name: "Ms. Shilpi Mahar",
    position: "Associate Director – Zinnov"
  },
  {
    image: "/placement/expleo1.webp",
    quote:
      "We appreciate the designed training programs by ICEM aimed at equipping core Mechanical Engineering students with the necessary skills to excel in the industry. These programs ensure that students emerge as industry-ready professionals",
    name: "Ms. Sumana Chakraborty",
    position: "General Manager, HR – Expleo Group"
  },
  {
    image: "/placement/ey1.png",
    quote:
      "ICEM has been a part of Ready Engineers Programme for a long time. Their way of creating resources prepared specifically to meet the needs of students ensures a transformative experience that prepares them effectively for the corporate world.",
    name: "Mr. Sushant Kumar",
    position: "Assistant Director – Early Career Program, EY"
  },
  {
    image: "/placement/philips.jpg",
    quote:
      "We consistently find ICEM students to be proactive learners and strong team players—traits that resonate deeply with the culture of innovation and collaborative excellence at Philips.",
    name: "Mr. Vispi Karkaria",
    position: "Early Career Talent India - Philips"
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
    <section className="py-4 md:py-8 pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-8">
          <h2 id="testimonials-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 leading-tight">
            Trusted by the Best in the Business
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our strongest endorsements come from our recruitment partners. Discover why leading companies consistently choose ICEM graduates to drive their success.
          </p>
        </div>

          {/* Testimonials Carousel */}
          <div className="lg:w-4/5 w-full mx-auto">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 h-auto min-h-[280px] md:min-h-[320px] flex flex-col md:flex-row gap-6 border border-gray-100">
                    {/* Content Section - Left Side */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Quote Box */}
                      <div className="flex-1 flex flex-col justify-center mb-6">
                        <div className="relative">
                          <FaQuoteLeft className="text-primary/20 text-2xl md:text-3xl absolute -top-2 -left-2" />
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed px-6 md:px-8 italic">
                            {item.quote}
                          </p>
                          <FaQuoteRight className="text-primary/20 text-2xl md:text-3xl absolute -bottom-2 -right-2" />
                        </div>
                      </div>

                      {/* Name and Position */}
                      <div className="border-t border-gray-100 pt-4">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-tight">
                          {item.position}
                        </p>
                      </div>
                    </div>

                    {/* Logo Section - Right Side */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-xl shadow-sm border bg-white border-gray-200 flex items-center justify-center p-3">
                        <Image
                          src={item.image}
                          alt={`${item.name} logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 96px, 128px"
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
                bottom: -40px !important;
              }
              :global(.slick-dots li) {
                margin: 0 4px;
              }
              :global(.slick-dots li button:before) {
                width: 12px !important;
                height: 12px !important;
                border-radius: 50% !important;
                background: #e5e7eb !important;
                border: 2px solid #e5e7eb !important;
                opacity: 1 !important;
                transition: all 0.3s ease !important;
                content: '' !important;
              }
              :global(.slick-dots li.slick-active button:before) {
                background: #3b82f6 !important;
                border-color: #3b82f6 !important;
                transform: scale(1.2);
              }
              :global(.slick-dots li button:hover:before) {
                background: #60a5fa !important;
                border-color: #60a5fa !important;
              }
              @media (min-width: 768px) {
                :global(.slick-dots) {
                  bottom: -50px !important;
                }
                :global(.slick-dots li button:before) {
                  width: 14px !important;
                  height: 14px !important;
                }
              }
            `}</style>
          </div>
        </div>
    </section>
  );
}
