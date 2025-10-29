"use client";

import React from "react";

const ApplyForm = () => {
  return (
    <div id="contact-form" className="bg-white rounded-lg p-4 sm:p-8 shadow-md border border-gray-200 w-full overflow-hidden">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center">
        Enquire Now
      </h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter Name *"
          className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
        />

        <input
          type="email"
          placeholder="Enter Email Address *"
          className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="flex flex-col sm:flex-row gap-2">
          <select className="w-full sm:w-24 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
            <option>+91</option>
          </select>
          <input
            type="tel"
            placeholder="Enter Mobile Number *"
            className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <select className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Select State *</option>
          </select>
          <select className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Select City *</option>
          </select>
        </div>

        <select className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Select Discipline Applying For *</option>
        </select>

        <select className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Select Course *</option>
        </select>

        <select className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Select Program *</option>
        </select>

        <input
          type="text"
          placeholder="Enter CET Score"
          className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center py-2 sm:w-1/2">
            <span className="text-lg font-bold text-gray-700 select-none">
              8fcb09
            </span>
          </div>
          <input
            type="text"
            placeholder="Enter Captcha"
            className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-start gap-2 mt-2">
          <input type="checkbox" id="agree" className="mt-1" />
          <label
            htmlFor="agree"
            className="text-xs sm:text-sm text-gray-700 leading-snug"
          >
            I agree to receive information regarding my submitted enquiry*
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary  text-white px-8 py-3 rounded-lg font-semibold"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
