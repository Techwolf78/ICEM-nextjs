"use client";

import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import stateCityData from "../../../public/States/Indian_Cities_In_States_JSON.json";

// Country Codes
const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+971", country: "UAE" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
];

// Programs & Courses
const engineeringPrograms = [
  "Computer Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "AIDS Engineering",
  "Electronics & Telecommunication",
  "Civil Engineering",
];

const ugCourses = ["BBA", "BCA", "Engineering", "Direct Second Year"];
const pgCourses = ["MBA", "MCA", "M-Tech"];

// --- Custom Select Component (Replacement for native <select>) ---
// This component manages its own open/close state and controls the input value via props.
const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  name,
  required,
  disabled = false,
  className = "",
  // Used for displaying complex options (e.g., country code + country name)
  optionFormatter = (opt) => opt,
  // Used to map array of strings/objects into a standard { label, value } format
  getLabel = (opt) => opt,
  getValue = (opt) => opt,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => getValue(opt) === value);
  const selectedDisplayValue = selectedOption
    ? getLabel(selectedOption)
    : placeholder;
  const isPlaceholder = !value;

  const selectButtonClass = `
    w-full border border-gray-300 bg-white rounded-md px-3 py-2 
    focus:outline-none focus:ring-2 focus:ring-secondary 
    appearance-none cursor-pointer flex justify-between items-center relative 
    transition-colors
  `;

  const optionsContainerClass =
    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto";

  return (
    <div className={`relative  ${className}`} ref={wrapperRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`${selectButtonClass} ${
          isPlaceholder ? "text-gray-400" : "text-gray-700"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        disabled={disabled}
      >
        <span className="truncate">{selectedDisplayValue}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform text-gray-700 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Hidden input to ensure form submission works via FormData */}
      <input type="hidden" name={name} value={value} required={required} />

      {isOpen && (
        <div className={optionsContainerClass}>
          {options.length > 0 ? (
            options.map((option, index) => {
              const optionValue = getValue(option);
              const optionDisplay = optionFormatter(option);
              const isSelected = optionValue === value;

              return (
                <div
                  key={index}
                  onClick={() => handleSelect(optionValue)}
                  className={`px-3 py-2 cursor-pointer text-gray-700 transition-colors 
                    ${
                      isSelected
                        ? `bg-secondary text-white font-semibold`
                        : "hover:bg-gray-100"
                    }
                  `}
                >
                  {optionDisplay}
                </div>
              );
            })
          ) : (
            <div className="px-3 py-2 text-gray-500">No options available</div>
          )}
        </div>
      )}
    </div>
  );
};
// ------------------------------------------------------------------

export default function ApplyForm({ variant = "card" }) {
  const isModal = variant === "modal";

  // State for all form select controls
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // New state for City
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(""); // New state for Program
  const [cities, setCities] = useState([]);
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(false);

  // Load cities when state changes
  useEffect(() => {
    const newCities = selectedState ? stateCityData[selectedState] : [];
    setCities(newCities);
    setSelectedCity(""); // Reset city when state changes
  }, [selectedState]);

  // Reset dependent fields when parent changes
  useEffect(() => {
    setSelectedCourse("");
    setSelectedProgram("");
  }, [selectedDiscipline]);

  useEffect(() => {
    setSelectedProgram("");
  }, [selectedCourse]);

  const inputClass =
    "w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 " +
    `focus:outline-none focus:ring-2 focus:ring-secondary`;

  // ------------------- AJAX SUBMIT (NO REDIRECT) -------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Collect data using FormData
    const formData = new FormData(e.target);

    // Explicitly set values for all controls managed by CustomSelect
    // The hidden inputs help, but setting explicitly ensures correctness.
    formData.set("countryCode", countryCode);
    formData.set("state", selectedState);
    formData.set("city", selectedCity);
    formData.set("discipline", selectedDiscipline);
    formData.set("course", selectedCourse);
    formData.set("program", selectedProgram);

    formData.append("_template", "box"); // nicer email UI
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/ajax/gauravipatilgip@gmail.com", {
        method: "POST",
        body: formData,
      });

      toast.success("Form submitted successfully!");
      e.target.reset();

      // Reset dependent dropdown states
      setSelectedState("");
      setSelectedCity("");
      setSelectedDiscipline("");
      setSelectedCourse("");
      setSelectedProgram("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit! Try again.");
    }

    setLoading(false);
  };

  // --- Options preparation for CustomSelect ---

  // Country Code options
  const ccOptions = countryCodes.map((c) => c.code);
  const ccFormatter = (c) => {
    const detail = countryCodes.find((item) => item.code === c);
    return detail ? `${detail.code} (${detail.country})` : c;
  };

  // State options
  const stateOptions = Object.keys(stateCityData);

  // City options
  const cityOptions = cities;

  // Discipline options
  const disciplineOptions = ["UG", "PG"];

  // Course options (dynamic based on selectedDiscipline)
  const getCourseOptions = () => {
    if (selectedDiscipline === "UG") return ugCourses;
    if (selectedDiscipline === "PG") return pgCourses;
    return [];
  };

  // Program options (dynamic based on selectedCourse)
  const getProgramOptions = () => {
    if (
      ["Engineering", "Direct Second Year"].includes(selectedCourse) ||
      selectedCourse === "M-Tech"
    ) {
      // M-Tech needs a formatted name
      return engineeringPrograms.map((p) =>
        selectedCourse === "M-Tech" ? `M-Tech in ${p}` : p
      );
    }
    if (selectedCourse === "BBA") return ["BBA"];
    if (selectedCourse === "BCA") return ["BCA"];
    if (selectedCourse === "MBA") return ["MBA"];
    if (selectedCourse === "MCA") return ["MCA"];
    return [];
  };

  // ------------------------------------------

  return (
    <div
      id="contact-form"
      className={`w-full scroll-pt-[15vh] ${
        isModal
          ? "p-0"
          : "bg-white rounded-lg p-6 shadow-md border border-gray-200"
      }`}
    >
      {!isModal && (
        <h3 className={`text-xl font-semibold text-secondary mb-6 text-center`}>
          Enquire Now
        </h3>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 ${isModal ? "mt-4 px-2" : ""}`}
      >
        {/* NAME */}
        <input
          type="text"
          name="name"
          required
          placeholder="Enter Name *"
          className={inputClass}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          required
          placeholder="Enter Email Address *"
          className={inputClass}
        />

        {/* PHONE NUMBER */}
        <div className="flex gap-3 w-full">
          <div className="flex-[1.1] min-w-[130px]">
            {/* Country Code - CustomSelect */}
            <CustomSelect
              name="countryCode"
              value={countryCode}
              onChange={setCountryCode}
              options={ccOptions}
              placeholder="Code"
              required={true}
              optionFormatter={ccFormatter}
            />
          </div>

          <input
            type="tel"
            name="mobile"
            required
            placeholder="Enter Mobile Number *"
            className={`flex-[2] ${inputClass}`}
          />
        </div>

        {/* STATE + CITY */}
        <div className="flex gap-3">
          <div className="flex-1">
            {/* STATE - CustomSelect */}
            <CustomSelect
              name="state"
              value={selectedState}
              onChange={setSelectedState}
              options={stateOptions}
              placeholder="Select State *"
              required={true}
            />
          </div>

          <div className="flex-1">
            {/* CITY - CustomSelect */}
            <CustomSelect
              name="city"
              value={selectedCity}
              onChange={setSelectedCity}
              options={cityOptions}
              placeholder={
                selectedState ? "Select City *" : "Select State First"
              }
              required={true}
              disabled={!selectedState}
              className={!selectedState ? "text-gray-400" : ""}
            />
          </div>
        </div>

        {/* DISCIPLINE */}
        <div>
          {/* DISCIPLINE - CustomSelect */}
          <CustomSelect
            name="discipline"
            value={selectedDiscipline}
            onChange={setSelectedDiscipline}
            options={disciplineOptions}
            placeholder="Select Discipline *"
            required={true}
          />
        </div>

        {/* COURSE */}
        <div>
          {/* COURSE - CustomSelect */}
          <CustomSelect
            name="course"
            value={selectedCourse}
            onChange={setSelectedCourse}
            options={getCourseOptions()}
            placeholder="Select Course *"
            required={true}
            disabled={!selectedDiscipline}
          />
        </div>

        {/* PROGRAM */}
        <div>
          {/* PROGRAM - CustomSelect */}
          <CustomSelect
            name="program"
            value={selectedProgram}
            onChange={setSelectedProgram}
            options={getProgramOptions()}
            placeholder="Select Program *"
            required={true}
            disabled={!selectedCourse}
          />
        </div>

        {/* CET */}
        <input
          type="text"
          name="cetScore"
          placeholder="Enter CET Score"
          className={inputClass}
        />

        {/* CAPTCHA */}
        <div className="flex gap-3 items-center">
          <div className="bg-white border border-gray-300 rounded-md w-1/2 flex items-center justify-center py-2 font-bold text-gray-700">
            8fcb09
          </div>

          <input
            type="text"
            name="captcha"
            required
            placeholder="Enter Captcha"
            className={`flex-1 ${inputClass}`}
          />
        </div>

        {/* CHECKBOX */}
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" required name="agreement" />
          <label className="text-sm text-gray-700">
            I agree to receive information regarding my submitted enquiry*
          </label>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-secondary transition-colors text-white font-semibold py-2 rounded-md`}
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}
