"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProgramStaff from "../ProgramStaff";

// ================== STAFF DATA ==================
const staffData = [
  {
    sn: 1,
    id: "2606",
    name: "Dr Saurabh Harishchand Gupta",
    designation: "Professor & Head of the Department",
    department: "Mechanical Engineering",
    qualification: "PhD (Mechanical)",
    experience: {
      teaching: "23 years",
      industrial: "Nil",
      research: "01 year",
    },
    areaOfInterest:
      "Refrigeration & Air conditioning, Heat Transfer, Thermodynamics",
    researchPapers: "10 Journal Papers, 25 Conference Papers",
    image: "/faculty/final_icem_branding/mech/Dr. Saurabh Gupta.webp",
  },
  {
    sn: 2,
    id: "215",
    name: "Dr. Mahesh G. Bhong",
    designation: "Associate Professor & Dean R&D",
    department: "Mechanical Engineering",
    qualification: "PhD (Mechanical)",
    experience: {
      teaching: "21 years",
      industrial: "Nil",
      research: "02 years",
    },
    areaOfInterest: "Heat Transfer, Fluid Mechanics, Automobile Engineering",
    researchPapers:
      "WOS/Scopus indexed: 10, Journal papers: 27, Conference papers: 24+",
    image: "/faculty/final_icem_branding/mech/Dr. Mahesh Bhong.webp",
  },
  {
    sn: 3,
    id: "N/A",
    name: "Dr. Kiran D. Devade",
    designation: "Professor",
    department: "Mechanical Engineering",
    qualification: "PhD (Mechanical)",
    experience: {
      teaching: "22 years",
      industrial: "01 year",
      research: "04 years",
    },
    areaOfInterest:
      "Engineering Graphics, Thermodynamics, Refrigeration, Strength of Materials, Fluid Machinery",
    researchPapers:
      "WOS/Scopus indexed: 10, Journal papers: 27, Conference papers: 24+",
    image: "/faculty/final_icem_branding/mech/kiran_devade.png",
  },
  {
    sn: 4,
    id: "594",
    name: "Prof. Sushil B.Chopade",
    designation: "Assistant Professor & Dean Industry Relation",
    department: "Mechanical Engineering",
    qualification:
      "Pursuing PhD (Mechanical), ME (Mechanical Design), BE (Mechanical)",
    experience: {
      teaching: "15+ years",
      industrial: "2 years",
      research: "3 years",
    },
    areaOfInterest:
      "Engineering Metallurgy, Workshop Techology, Dynamics of Machinery, Strength of Material",
    researchPapers: "Scopus Indexed: 03; Patent: 01; Journal Papers: 10+",
    image: "/faculty/final_icem_branding/mech/Mr. Sushil Chopade.webp",
  },
  {
    sn: 5,
    id: "422",
    name: "Prof. Hemant Vasant Darokar",
    designation: "Assistant Professor & CEO",
    department: "Mechanical Engineering",
    qualification:
      "ME (Heat Power Engineering) First class with Distinction, BE (Production Engineering) First class with Distinction",
    experience: {
      teaching: "16 years",
      industrial: "7 years",
      research: "0 years",
    },
    areaOfInterest:
      "Indirect Evaporative Cooling, Turbomachines, Thermal Engineering",
    researchPapers: "11",
    image: "/faculty/final_icem_branding/mech/Mr. Hemant Darokar.webp",
  },
  {
    sn: 6,
    id: "643",
    name: "Prof. Siddheshwar S. Shirbhate",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "Pursuing PhD (Mechanical), ME (Automotive Engineering) First class, BE (Mechanical Engineering) First class",
    experience: {
      teaching: "16 years",
      industrial: "Nil",
      research: "03 years",
    },
    areaOfInterest: "Design, Thermal Engineering",
    researchPapers: "Scopus Indexed: 02; Journal Papers: 6",
    image: "/faculty/final_icem_branding/mech/Mr. Siddheshwar Shirbhate.webp",
  },
  {
    sn: 7,
    id: "624",
    name: "Prof. Shubhangi Ashish Manwatkar",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "M.E. (Heat Power) with Distinction, B.E. (Mechanical) with First Class",
    experience: {
      teaching: "17 years",
      industrial: "0 years",
      research: "02 years",
    },
    areaOfInterest:
      "Heat Transfer, Energy Engineering, Renewable Energy, Energy Managment",
    researchPapers: "09",
    image: "/faculty/final_icem_branding/mech/Mrs. Shubhangi Manwatkar.webp",
  },
  {
    sn: 8,
    id: "739",
    name: "Prof. Vishal Abhiman Meshram",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "M.E. (Heat Power) with First Class, B.E. (Mechanical) with First Class",
    experience: {
      teaching: "15 years",
      industrial: "01 year",
      research: "02 years",
    },
    areaOfInterest:
      "Alternate Fuel, Electric Vehicle, CFD, Heat Transfer, Hydraulics & Pneumatics",
    researchPapers: "7",
    image: "/faculty/final_icem_branding/mech/Mr. Vishal Meshram.webp",
  },
  {
    sn: 9,
    id: "964",
    name: "Prof. Ashwini Atul Admane",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "M.E. (Heat Power) with First Class, B.E. (Mechanical) with Distinction",
    experience: {
      teaching: "16 years",
      industrial: "00 years",
      research: "00 years",
    },
    areaOfInterest: "Thermodynamics, Renewable Energy, Refrigeration",
    researchPapers: "05",
    image: "/faculty/final_icem_branding/mech/Mrs. Ashwini Admane.webp",
  },
  {
    sn: 10,
    id: "1288",
    name: "Prof Pranali B Khatake",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "M.E. (Mech Design) with First Class, B.E. (Mechanical) with Distinction",
    experience: {
      teaching: "15 years",
      industrial: "00 years",
      research: "00 years",
    },
    areaOfInterest: "Design, Vibration",
    researchPapers: "08",
    image: "/faculty/final_icem_branding/mech/Mrs. Pranali Khatake.webp",
  },
  {
    sn: 11,
    id: "1456",
    name: "Prof. Ashwini Gaikwad",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "M.Tech (Automobile) with Distinction, B.E (Mechanical) with Distinction",
    experience: {
      teaching: "11 years",
      industrial: "1 year",
      research: "00 years",
    },
    areaOfInterest: "Design, Automotive",
    researchPapers: "7",
    image: "/faculty/final_icem_branding/mech/Mrs. Ashwini Gaikwad.webp",
  },
  {
    sn: 12,
    id: "1520",
    name: "Prof. Sagar Uttamrao Chirade",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "M.E. (Heat Power) with First Class, B.E. (Mechanical) with First Class",
    experience: {
      teaching: "14 years",
      industrial: "00 years",
      research: "00 years",
    },
    areaOfInterest: "Food drying techniques, Heat Transfer, Fluid Mechanics",
    researchPapers: "6",
    image: "/faculty/final_icem_branding/mech/Mr. Sagar Chirade.webp",
  },
  {
    sn: 13,
    id: "1519",
    name: "Prof. Amit Gangadhar Narwade",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "M.Tech - Automobile (Vehicle Engineering and Transport Management) First Division with Distinction, B.E (Mechanical) First Division with Distinction",
    experience: {
      teaching: "09 years",
      industrial: "01 year",
      research: "00 years",
    },
    areaOfInterest:
      "Vehicle Engineering, Safety & Homologation, Engineering Materials",
    researchPapers: "05",
    image: "/faculty/final_icem_branding/mech/Mr. Amit Narwade.webp",
  },
  {
    sn: 14,
    id: "N/A",
    name: "Prof. Pravin Devidas Charde",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    qualification:
      "ME (Mechanical), BE (Mechanical Sandwich Engineering), DME (Mechanical)",
    experience: {
      total: "18 years",
      industrial: "3 years",
    },
    areaOfInterest: "Manufacturing Process, Workshop Technology",
    researchPapers: "2",
    image: "/faculty/final_icem_branding/mech/Mr. Pravin Charde.webp",
  },
  {
    sn: 15,
    id: "N/A",
    name: "Mr. Raj Uttam Gajarmal",
    designation: "Workshop Instructor (Fitting Shop)",
    department: "Mechanical Engineering",
    qualification: "ITI (Fitting), NCTVT",
    experience: {
      total: "14 years",
      industrial: "3 years",
    },
    areaOfInterest: "Workshop Technology",
    researchPapers: "--",
    image: "/faculty/final_icem_branding/mech/raj_uttam_gajarmal.jpeg",
  },
  {
    sn: 16,
    id: "N/A",
    name: "Mr. Manoj Laxman Sutar",
    designation: "Workshop Instructor (Welding)",
    department: "Mechanical Engineering",
    qualification: "ITI (Welding), NCTVT",
    experience: {
      total: "13 years",
      industrial: "6 years",
    },
    areaOfInterest: "Workshop Technology",
    researchPapers: "--",
    image: "/faculty/final_icem_branding/mech/manoj_laxman_sutar.jpeg",
  },
];

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "sybtech",
    label: "BE Mechanical Engineering 2019 Course Syllabus",
    pdf: "/programs/Mech/BESY.pdf",
  },
  {
    id: "te",
    label: "TE Mechanical Engineering 2019 Course Syllabus",
    pdf: "/programs/Mech/TESY.pdf",
  },
  {
    id: "be",
    label: "SY B Tech Mechanical Engineering 2025 Course",
    pdf: "/programs/Mech/SESY.pdf",
  },
];

// ================== MECHANICAL LABORATORIES (2-COLUMN FORMAT) ==================
const mechanicalLabs = [
  {
    heading: "Basic Mechanical Engineering",
    description: [
      "1] Babcock Boiler Model.",
      "2] Cochran Boiler Model.",
      "3] Chain and Belt Conveyor.",
      "4] All Types of Brakes Models.",
      "5] All Types of Clutch Models.",
      "6] All Types of Gear Models.",
    ],
  },
  {
    heading: "Fluid Machinery",
    description: [
      "1] Reynolds Apparatus.",
      "2] Minor Losses Due To Pipe Fitting Apparatus.",
      "3] Venturimeter calibration and Orifice meter calibration apparatus.",
      "4] Pelton wheel test rig.",
      "5] Kaplan Turbine test rig.",
      "6] Const. speed centrifugal pump test rig.",
    ],
  },
  {
    heading: "Applied Thermodynamics",
    description: [
      "1] Steam turbine test rig.",
      "2] Two stage reciprocating air compressor test rig.",
      "3] Steam generator model E Steam 300 with economizer with mounting & accessories.",
      "4] Junkers Gas Calorimeter.",
      "5] Bomb Calorimeter.",
      "6] Orsat Gas Apparatus.",
    ],
  },
  {
    heading: "I C Engine",
    description: [
      "1] Single Cylinder 4 Stroke 5 HP Diesel Engine Test Rig.",
      "2] Four Cylinder 4 Stroke Petrol Engine Test Rig.",
      "3] Multi cylinder Diesel Engine Cut Section Model.",
      "4] Battery Ignition System.",
      "5] Four Stroke Single Cylinder Diesel Engine Cut Section Model.",
    ],
  },
  {
    heading: "Theory of Machines",
    description: [
      "1] Synchromesh Gear Box.",
      "2] Differential Gear Box.",
      "3] Epicyclic Gear Train Setup.",
      "4] Motorized Gyroscope.",
      "5] Generation involute gear tooth profile & Rack shift Equipment.",
    ],
  },
  {
    heading: "Dynamics of Machinery",
    description: [
      "1] Static & Dynamic Balancing Apparatus.",
      "2] Universal Vibration Testing m/c.",
      "3] Digital Sound Measurement Apparatus.",
    ],
  },
  {
    heading: "Workshop",
    description: [
      "1] Hearth Furnace.",
      "2] Plastic Molding Machine (MMT Brand 1/2 OZ).",
      "3] All Geared Lathe Machine (Turner make, 4 ½ ‘).",
      "4] Power Hacksaw Machine.",
      "5] Radial Drill Machine.",
      "6] Spot Welding Machine.",
      "7] Power Press M/c.",
      "8] Milling Machine (Sunrise Make) with Vertical Attachment.",
      "9] Lathe Machine (Light Duty).",
    ],
  },
  {
    heading: "Heat Transfer",
    description: [
      "1] Thermal Conductivity of Metal Rod Apparatus.",
      "2] Parallel Flow & Counter Flow Apparatus.",
      "3] Emissivity Measurement Apparatus.",
      "4] Thermal Conductivity by Guarded Hot Plate Method.",
      "5] Critical Heat Flux Apparatus.",
      "6] Natural, Forced Convection Apparatus.",
    ],
  },
  {
    heading: "Refrigeration and Air Conditioning",
    description: [
      "1] Vapour Compression Refrigeration Test Rig.",
      "2] Air Conditioning Trainer.",
      "3] ICE Plant Test Rig.",
      "4] Vapour Absorption Test Rig.",
      "5] Cut Section Model of Hermetically Compressor.",
    ],
  },
  {
    heading: "Industrial Fluid Power",
    description: [
      "1] Advanced Pneumatic Trainer.",
      "2] Advanced Hydraulic Trainer.",
      "3] Gear Pump Test Rig.",
      "4] Vane Pump Test Rig.",
      "5] Testing of Pressure Relief Valve.",
    ],
  },
  {
    heading: "Mechatronics",
    description: [
      "1] Micrologix 1000 PLC Trainer.",
      "2] PID Flow Control Trainer.",
      "3] Arduino (Atmega 328P) Development kit with Accelerometer Sensor.",
      "4] PID Trainer.",
      "5] Temperature Sensor Calibration Trainer Kit.",
    ],
  },
  {
    heading: "Metrology and Quality Control",
    description: [
      "1] Auto Collimator With Angle Dekker.",
      "2] Floating Carriage Micrometer.",
      "3] Optical Flat With Monochromatic Light Source.",
      "4] Portable Surface Roughness Tester.",
      "5] Pneumatic Comparator.",
      "6] Profile Projector (PPT-200).",
    ],
  },
  {
    heading: "Metallurgy",
    description: [
      "1] Standard Metallurgical Microscope Set.",
      "2] Trinocular Microscope With CCTV.",
      "3] Micrometer Eyepiece.",
      "4] Fluorescent Dye Penetrant Kit.",
      "5] Jominy End Quench Hardness Tester.",
      "6] Single Disc Polishing Machine.",
    ],
  },
  {
    heading: "Modeling and Analysis",
    description: [
      "Total No. of machines: 25",
      "Configuration: Intel -g(41) c2d e 7500, os-windows 7 enterprise, ram-4gb, intel core i5, hdd 500gb",
      "Software installed: Matlabtm 2010",
    ],
  },
  {
    heading: "Computer Aided Design",
    description: [
      "Total no. Of machines: 30",
      "Configuration: G(41) c-2 d hcl infinite bl 1330, os-windows 7 enterprise, ram-2gb, intel core 2 duo, hdd 300gb",
      "Software installed: Catia v5 r21, autocad 2015",
    ],
  },
  {
    heading: "PG Computer Lab",
    description: [
      "Total no. Of machines: 25",
      "Configuration: Lenovo think centre intel h61 i3, os-windows 7 enterprise, ram-4gb, intel core i3, hdd 500gb",
      "Software installed: Autocad 2015, mastercam x9, ansys 13",
    ],
  },
  {
    heading: "Electrical Vehicles Lab & Robotics Lab",
    description: [
      "Passenger EV.",
      "Goods Carrier EV.",
      "Full-fledged Robot programming lab.",
    ],
  },
];

// ================== FACULTY IMAGES ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`,
}));

// ================== MENTOR-MENTEE DATA ==================
const mentorMenteeData = [
  {
    mentor: "Prof. Ashwini Admane (TY)",
    students: [
      "BAISANE KRISHNA SHARAD",
      "JADHAV SAMRUDDHI SACHIN",
      "SHINDE VAISHNAV ASHOK",
      "BHADRE SHWETA RATNASHIL",
      "MANE CHETAN SAYAJI",
      "VAYDANDE JANHAVI VIJAY",
      "KALORE SHITAL GANESH",
      "POL AASHISH CHANDRASHEKHAR",
      "BHAMARE ROHIT RAJENDRA",
      "KADAM ATHARV SANDEEP",
      "KASKAR PRATHAMESH SAKHARAM",
      "SALUNKE MAYURESH RAJESH",
      "RAUT NEHA PRASHANT",
      "GHOTKULE SIDDHI SHAHAJI",
      "JADHAV UDDHAV VIJAY",
      "GUPTA ADARSH SANJAY",
      "SAWANT OMKAR DHANANJAY",
      "HULE SARTHAK BALU",
      "KAVITAKE SOHAM BALASO",
      "SONDARE MAHARUDRA SATISH",
    ],
  },
  {
    mentor: "Prof. Ashwini Gaikwad (TY)",
    students: [
      "KAKAD SHUBHAM VITTHAL",
      "BALA MEGHA",
      "JAGDALE RAJ NANDKUMAR",
      "SAWANT SIDDESH DATTATRAY",
      "TALWAR GANESH BASAVRAJ",
      "DESHMUKH SAI AMBARISH",
      "KALE SHUBHAM NAVNATH",
      "SAWANT SHREYA JALINDAR",
      "LAVATE VAISHNAVI SANJAY",
      "GOWARDIPE ROSHAN SHIVAJI",
      "KAWALE HEMANT SADASHIV",
      "RATHOD YUVRAJ DINKAR",
      "GUPTA ADITYA SANJAY",
      "GAWADE YASH RAMKRISHNA",
      "CHAVAN MAYUR PRASHANTKUMAR",
      "SONAR RUCHA JAYANT",
      "SHETE SHLOK SACHIN",
      "GURAV RASHMITA MARUTI",
      "DHAGADI TINAL RAMESH",
      "MIRAJKAR MITHILESH SANJAY",
    ],
  },
  {
    mentor: "Prof. Vishal Meshram (TY)",
    students: [
      "NISHCHAY DHIRAJ GAIKWAD",
      "GARJE ARVIND VASANT",
      "SHINDE PRATIK RAMDAS",
      "GHODKE PRANAV PRADIP",
      "UDACHANAKAR SHRIKRISHANA KHAJAPPA",
      "BHAMARE APARNA SURESH",
      "KAMBLE VIVEK ANKUSH",
      "MURKAL TANISHQ SURESH",
      "PAWAR OM ANANTRAO",
      "RAUT NIKHIL DHANANJAY",
      "SALSKAR SMARTH SURAJ",
      "CHANDANE CHETANA RUPESH",
      "KHULAPE GAYATRI DNYANESHWAR",
      "KESKAR GANESH MAHADEV",
      "GOSAVI SIDDHARTH RAVINDRA",
      "BADGUJAR VARUNKUMAR AMOL",
      "NIMBORE SANIKA LAXMAN",
      "PATIL BHAVESH EKNATH",
      "PATIL VAISHNAVI SUDHAKAR",
      "VISHAL NITIN PATIL",
    ],
  },
  {
    mentor: "Prof. Pravin Charde (TY)",
    students: [
      "SOHAM SANDIP BHOJANE",
      "TAMBOLI RIJAVAN IQBAL",
      "VEDSHRI SHAILESH RAJURKAR",
      "SHRUSHTI SANTOSH BHOSALE",
      "MAHESH GANESH TAKALE",
      "JOSHI CHINMAY MANGESH",
      "CHAVAN SUBHANRAO BHANUDAS",
      "BALIKAI SAEEL SWAPNIL",
      "ADARSH KUMAR",
      "BIRADAR SHIVAM KAILAS",
      "DETHE ASHISH VIJAY",
      "KAMBLE SIDDHARTH SHYAM",
      "ALTE AMIT DILIP",
      "PATIL TANISHQ NITIN",
      "KADAM AADESH SANDEEP",
      "JADHAV SAHIL BALU",
      "KATORE SANDESH VIJAY",
      "PADWAL ATHARVA HANAMANT",
      "KADAM VIJAY SAMBHAJI",
    ],
  },
  {
    mentor: "Prof. Shubhangi Manvatkar (BE)",
    students: [
      "Athare Adesh Rajendra",
      "Alhat Prathemesh Sanjay",
      "Bandgar Sahil Ravindra",
      "Benne Sanju Manik",
      "Dhatore Shrawani Mangesh",
      "Ganvir Harsha Bhayya",
      "Gawali Om Pankaj",
      "Giri Tanuhri Deepak",
      "Jadhav Kirti Dnyaneshwar",
      "Kadam Vedant Pravin",
      "Kedari Akshay Anil",
      "Kedari Atharv Sandip",
      "Konde Pranjal Prakash",
      "Kule Abhishek Rajaram",
      "Kunal Raj",
      "Mhaskar Omkar Rajendra",
      "Patil Rajwardhan Rajendra",
      "BANDGAR SAHIL RAVINDRA",
      "Patrikar Priti Dilip",
    ],
  },
  {
    mentor: "Prof. Amit Narwade (BE)",
    students: [
      "Pawar Ashwini Vilas",
      "Purbiya Nilesh Madhav Lal",
      "Sabne Nitesh Anil",
      "Salunkhe Keval Santosh",
      "Sutar Sameer Naamdev",
      "Shinde Mayur Arjun",
      "Nair Siddharth Sudheerkumar",
      "Singh Satyamkumar Sanjay",
      "Attarde Soham Vivek",
      "Sonar Lokesh Jitendra",
      "Sonawane Vinod Bharat",
      "Muli Sumit Sanjayrao",
      "Supekar Ritesh Nilesh",
      "Surwase Om Haribhau",
      "Vaswani Devesh Vijay",
      "Veer Siddhesh Ramdas",
      "Warute Tanay Vinay",
      "Yelwande Utkarsh Tanaji",
    ],
  },
  {
    mentor: "Prof. Pranali Khatake (BE)",
    students: [
      "Dhotre Rohit Uttam",
      "Gaikwad Chetan Ramesh",
      "Gaikwad Madhav Pandurang",
      "Gaikwad Vishwajeet Udhavrao",
      "Giri Bramhanand Jalindar",
      "Jadhav Abhishek Satish",
      "Jadhav Yogesh Kashinath",
      "Kadam Amol Jagannath",
      "Patil Satishkumar Annasaheb",
      "Mengane Shital Sunil",
      "Sutar Mrunal Santosh",
      "Ingale Sonali Vijaykumar",
      "Mahadar Varsha Pandurang",
      "Bhosale Vedant Maruti",
      "Chaurasiya Aadarsh",
      "Anand Yadav",
      "SHRIKANT SANTOSH SHINDE",
      "Yadav Sunny Jiyalal",
    ],
  },
];

// ================== MAIN COMPONENT ==================
export default function FAQMECH() {
  const [active, setActive] = useState("About Us");
  const [academicSubTab, setAcademicSubTab] = useState("Time Table");
  const [mentorSearchQuery, setMentorSearchQuery] = useState("");
  const [selectedTrainingImage, setSelectedTrainingImage] = useState(null);

  const academicSubTabs = [
    "Time Table",
    "TG (Mentor-Mentee)",
    "Student Training and Skill Development Activities",
    "Mechanical Engineering Students Association (MESA) Activities",
    "Exam",
    "Placement Highlights 2025-26",
    "Alumni Engagement Activities",
  ];

  const renderSubTabIcon = (subTab) => {
    switch (subTab) {
      case "Time Table":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        );
      case "TG (Mentor-Mentee)":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        );
      case "Student Training and Skill Development Activities":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        );
      case "Mechanical Engineering Students Association (MESA) Activities":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        );
      case "Exam":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        );
      case "Placement Highlights 2025-26":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            ></path>
          </svg>
        );
      case "Alumni Engagement Activities":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const getSubTabDescription = (subTab) => {
    switch (subTab) {
      case "Time Table":
        return "Time Table AY 2026-27 Sem I (Theory) download below.";
      case "TG (Mentor-Mentee)":
        return "Teacher Guardian (TG) allocation, mentoring schedules, and support group details will be listed here.";
      case "Student Training and Skill Development Activities":
        return "";
      case "Mechanical Engineering Students Association (MESA) Activities":
        return "Co-curricular events, student chapters, workshops, and MESA committee activities list.";
      case "Exam":
        return "Internal examination schedules and university circulars will be posted here.";
      case "Placement Highlights 2025-26":
        return "Placement records, top recruiters, and selection statistics report for the academic cohort is available below.";
      case "Alumni Engagement Activities":
        return "";
      default:
        return "";
    }
  };

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "Welcome to the Department of Mechanical Engineering at Indira College of Engineering and Management. Established in 2007, the department has been a hub of innovation, hands-on learning, and technical excellence.",

          "From 2025–26, the department is proud to launch B.Tech Mechanical Engineering with Specialization in Electric Vehicle Technology, aligning our curriculum with the rapidly growing EV industry and future mobility solutions.",
        ],
        "Programs Offered": [
          "Department of Mechanical Engineering was established in 2007 by offering undergraduate and Post Graduate program in Mechanical Engineering. The program is affiliated to University of Pune, recognized by Govt. of Maharashtra & All India Council of Technical Education (AICTE) New Delhi.",
          "B.E. in Mechanical Engineering (SPPU) – Intake: 60",
          "M.E. (Mechanical Engineering) – Intake: 12",
          "B. Tech (Mechanical - EV Specialization) – Newly introduced",
        ],
      },
    },

    "Vision, Mission, PEOs & PSOs": {
      type: "accordion",
      content: {
        "Department Vision": [
          "Be a Nationally recognized Mechanical Engineering Department that provides right academic ambience and nurtures innate talent of students.",
        ],
        "Department Mission": [
          "M1: Provide strong fundamental and advanced knowledge in Mechanical Engineering.",
          "M2: Develop technical and practical skills through hands-on learning and modern engineering tools.",
          "M3: Build positive professional attitudes, including ethics, teamwork, and responsibility.",
          "M4: Prepare students for engineering careers through industry exposure and continuous learning.",
        ],
        "Programme Educational Objectives (PEOs)": [
          "PEO 1: Graduates will apply knowledge gained in engineering and science to improve lives and livelihoods through a successful career in Mechanical Engineering and other related fields.",
          "PEO 2: Graduates will become innovators, entrepreneurs to address social, technical and business challenges.",
          "PEO 3: Graduates will engage in lifelong learning such as higher studies, research and other Continuous professional development activities.",
        ],
        "Programme Specific Outcomes (PSOs)": [
          "PSO 1: Career Readiness - Graduates will be ready for successful careers in mechanical industries using modern engineering skills.",
          "PSO 2: Higher Education & Research - Graduates will be prepared to pursue higher studies and take up research in advanced areas of mechanical engineering.",
          "PSO 3: Service to Society & Nation - Graduates will apply mechanical engineering knowledge to create solutions useful for society and national development.",
        ],
      },
    },
    // ================= NEW SECTIONS (MECHANICAL) =================

    "FRA - Fee Structure": {
      type: "syllabus",
      content: [
        {
          id: "fee-structure",
          label: "Fee Structure (2025–26)",
          pdf: "/programs/Computer/Feestructure2526.pdf",
        },
        {
          id: "fee-fra",
          label: "FRA Document",
          pdf: "/programs/Mech/NewFRA.pdf",
        },
        {
          id: "fee-proposal-26-27",
          label: "FRA Proposal 26-27",
          pdf: "/programs/Mech/FRA_Proposal_2026-27.pdf",
        },
        {
          id: "new-fra",
          label: "New FRA",
          pdf: "/programs/Mech/NewFRA.pdf",
        },
        {
          id: "institute-level-admission-fra-fees",
          label: "Institute Level Admission FRA Fees",
          pdf: "/programs/Mech/Insttitute_level_admission_FRA_FEEs.pdf",
        },
      ],
    },

    "Admission Procedure": {
      type: "syllabus",
      content: [
        {
          id: "admission",
          label: "Institute Level /ACAP Admission Round Procedure",
          pdf: "/pdfs/AdmissionProcedure.pdf",
        },
      ],
    },

    "Sanctioned Intake": {
      type: "table",
      content: [
        {
          program: "B.Tech Mechanical Engineering",
          intake: "60 Seats",
          duration: "4 Years",
          type: "Full Time",
        },
        {
          program: "M. Tech Mechanical Engineering",
          intake: "12 seats",
          duration: "2 Year",
          type: "Full Time",
        },
      ],
    },

    "Eligibility Criteria": {
      type: "accordion",
      content: {
        "Eligibility Criteria for Admission to First Year Engineering 2024-25":
          [
            "For details about First Year Engineering Admission and Eligibility Criteria, refer https://cetcell.mahacet.org/",
          ],
        "Maharashtra State Candidature Candidates": [
          "The Candidate should be an Indian National.",
          "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State), in the above subjects taken together; and the Candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority.",
          "Or",
          "Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
        ],
        "All India Candidature Candidates, Union Territory of Jammu and Kashmir and Union Territory of Ladakh Migrant Candidature Candidates":
          [
            "The Candidate should be an Indian National.",
            "Passed HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State) in the above subjects taken together; and should obtain non zero positive score in JEE (Main) B.E./B.Tech or the candidate should have appeared in all the subjects in CET and should obtain non zero score in CET conducted by the Competent Authority. However, preference shall be given to the candidate obtaining non zero positive score in JEE (Main) B.E./B.Tech over the candidates who obtained non zero score in CET.",
            "Or",
            "Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at least 40 % marks, in case of Backward Class categories, Economically Weaker Section and Persons with Disability category candidates belonging to Maharashtra State).",
          ],
        "NRI / OCI / PIO, Children of Indian workers in the Gulf countries and Foreign National Candidature Candidates":
          [
            "The candidate should have passed the HSC or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry or Biotechnology or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Agriculture or Engineering Graphics or Business Studies, and obtained at least 45 % marks in the above subjects taken together.",
          ],
        "Additional Information": [
          "Any other criterion declared from time to time by the appropriate authority as defined under the Act.",
        ],
        "Mechanical Engineering Eligibility": [
          "An interested candidate seeking engineering admission in Maharashtra must be a citizen of India. A candidate opting for engineering 1st-year admission is stated eligible if he/she has passed class 12th exam of CBSC/HSC/ICSE board with min 50% for open category, 45% for backward class from any state in India. A candidate also has to have a valid positive score in either of the examinations MH-CET/JEE-Mains, can apply for an engineering admission process.",

          "Engineering admission criteria for Direct 2nd-year admission – The Candidate opting for engineering 2nd-year admission should be an Indian Citizen. Candidate must have completed Diploma Course in Engineering and Technology with at least 45% marks (40% for Backward class categories and Persons with Disability belonging to Maharashtra State) from AICTE or Government approved Institution.",
        ],
      },
    },

    "Syllabus & Course Structure": {
      type: "syllabus",
      content: syllabusList,
    },

    "Academic Performance": {
      type: "academicPerformance",
    },

    // Laboratories: {
    //   type: "mechLabs",
    //   content: mechanicalLabs,
    // },
    Staff: {
      type: "staff",
      content: staffData,
    },
  };

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    switch (data.type) {
      case "syllabus":
        return (
          <div className="space-y-3 md:space-y-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h5 className="font-semibold text-gray-800">{item.label}</h5>
                <a
                  href={item.pdf}
                  target="_blank"
                  className="px-4 py-2 bg-secondary text-white rounded-md"
                >
                  View / Download
                </a>
              </div>
            ))}
          </div>
        );
      case "accordion":
        return (
          <div className="space-y-3 md:space-y-4">
            {Object.entries(data.content).map(([title, items], index) => {
              const shouldOpen = index === 0 && items.length <= 5;

              return (
                <div key={title} className="border border-gray-200 rounded-lg">
                  <details
                    className="group"
                    {...(shouldOpen && { open: true })}
                  >
                    <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                      <h4 className="font-semibold text-secondary text-lg">
                        {title}
                      </h4>
                      <span className="transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>

                    <div className="p-3 md:p-4 pt-2 space-y-2">
                      {items.map((item, i) =>
                        typeof item === "object" && item.pdf ? (
                          <a
                            key={i}
                            href={item.pdf}
                            target="_blank"
                            className="text-secondary underline font-medium hover:text-secondary/80"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <p key={i} className="text-gray-700 leading-relaxed">
                            {item}
                          </p>
                        ),
                      )}
                    </div>
                  </details>
                </div>
              );
            })}
          </div>
        );
      case "text":
        return (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {Array.isArray(data.content) ? (
              data.content.map((para, i) => (
                <p key={i} className="text-gray-700">
                  {para}
                </p>
              ))
            ) : (
              <p>{data.content}</p>
            )}
          </div>
        );

      case "notice":
        return <p className="text-gray-600 text-lg">{data.content}</p>;
      case "staff":
        const StaffPhoto = ({ src, alt }) => {
          const [currentSrc, setCurrentSrc] = useState(
            src || "/faculty/newFaculty/placeholder.avif",
          );
          const [hasError, setHasError] = useState(false);

          return hasError ? (
            <div className="w-32 h-40 flex items-center justify-center rounded-lg mb-4 bg-gray-100 shadow-sm border border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full p-2 text-gray-300"
                aria-hidden="true"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                <path d="M18.36 16.46a7 7 0 00-12.72 0c-.35.58.1 1.28.77 1.28h11.38c.66 0 1.12-.7.57-1.28z" />
              </svg>
            </div>
          ) : (
            <div className="w-32 h-40 overflow-hidden rounded-lg mb-4 bg-gray-100 shadow-sm border border-gray-100">
              <Image
                src={currentSrc}
                alt={alt}
                width={128}
                height={160}
                className="w-full h-full object-cover object-top"
                onError={() => {
                  setHasError(true);
                }}
              />
            </div>
          );
        };

        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
            {data.content.map((staff, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300"
              >
                <StaffPhoto src={staff.image} alt={staff.name} />

                <div className="w-full flex-1 flex flex-col">
                  <h4 className="font-bold text-gray-900 mb-1 leading-snug">
                    {staff.name}
                  </h4>
                  <p className="text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">
                    {staff.designation}
                  </p>

                  <div className="pt-4 border-t border-gray-100 space-y-2 text-left">
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">
                        Department:
                      </span>
                      <span className="text-gray-700 font-medium">
                        {staff.department}
                      </span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">
                        Qualification:
                      </span>
                      <span className="text-gray-700 font-medium">
                        {staff.qualification}
                      </span>
                    </div>
                    {staff.experience ? (
                      <div className="text-[11px]">
                        <span className="text-gray-400 font-bold uppercase mr-1">
                          Experience:
                        </span>
                        <span className="text-gray-700 font-medium">
                          {[
                            staff.experience.total,
                            staff.experience.teaching
                              ? `Teaching: ${staff.experience.teaching}`
                              : null,
                            staff.experience.industrial
                              ? `Industrial: ${staff.experience.industrial}`
                              : null,
                            staff.experience.research
                              ? `Research: ${staff.experience.research}`
                              : null,
                          ]
                            .filter(Boolean)
                            .join(" • ")}
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="text-[11px]">
                          <span className="text-gray-400 font-bold uppercase mr-1">
                            Joining Date:
                          </span>
                          <span className="text-gray-700 font-medium">
                            {staff.doj}
                          </span>
                        </div>
                        <div className="text-[11px]">
                          <span className="text-gray-400 font-bold uppercase mr-1">
                            Birth Date:
                          </span>
                          <span className="text-gray-700 font-medium">
                            {staff.dob}
                          </span>
                        </div>
                      </>
                    )}
                    {staff.areaOfInterest && (
                      <div className="text-[11px]">
                        <span className="text-gray-400 font-bold uppercase mr-1">
                          Area of Interest:
                        </span>
                        <span className="text-gray-700 font-medium">
                          {Array.isArray(staff.areaOfInterest)
                            ? staff.areaOfInterest.join(", ")
                            : staff.areaOfInterest}
                        </span>
                      </div>
                    )}
                    {staff.researchPapers && (
                      <div className="text-[11px]">
                        <span className="text-gray-400 font-bold uppercase mr-1">
                          Research Papers:
                        </span>
                        <span className="text-gray-700 font-medium block">
                          {typeof staff.researchPapers === "string"
                            ? staff.researchPapers
                            : staff.researchPapers.wosScopus
                              ? `WOS/Scopus: ${staff.researchPapers.wosScopus}`
                              : ""}
                          {staff.researchPapers.journal
                            ? ` • Journal: ${staff.researchPapers.journal}`
                            : ""}
                          {staff.researchPapers.conference
                            ? ` • Conference: ${staff.researchPapers.conference}`
                            : ""}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "table":
        return (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 md:p-3 border-b font-semibold">Program</th>
                  <th className="p-2 md:p-3 border-b font-semibold">Intake</th>
                  <th className="p-2 md:p-3 border-b font-semibold">
                    Duration
                  </th>
                  <th className="p-2 md:p-3 border-b font-semibold">Type</th>
                </tr>
              </thead>

              <tbody>
                {data.content.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2 md:p-3">{row.program}</td>
                    <td className="p-2 md:p-3">{row.intake}</td>
                    <td className="p-2 md:p-3">{row.duration}</td>
                    <td className="p-2 md:p-3">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      // ========== UPDATED MECHANICAL LAB TABLE (2 COLUMNS) ==========
      case "mechLabs":
        return (
          <div>
            <h4 className="font-semibold text-secondary text-lg mb-3 md:mb-4">
              Mechanical Engineering Laboratories
            </h4>

            <div className="border border-gray-200 rounded-lg overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody>
                  {data.content.map((lab, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      {/* COLUMN 1 – HEADING */}
                      <td className="p-3 md:p-4 font-semibold text-gray-900 w-1/3 align-top">
                        {lab.heading}
                      </td>

                      {/* COLUMN 2 – DESCRIPTION */}
                      <td className="p-3 md:p-4 text-gray-700 space-y-1">
                        {lab.description.map((item, i) => (
                          <div key={i}>{item}</div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "academicPerformance":
        return (
          <div className="space-y-6">
            {/* Subtabs Navigation */}
            <div className="flex flex-wrap gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
              {academicSubTabs.map((subTab) => (
                <button
                  key={subTab}
                  onClick={() => setAcademicSubTab(subTab)}
                  className={`rounded-lg px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-200 ${
                    academicSubTab === subTab
                      ? "bg-secondary text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 hover:text-secondary"
                  }`}
                >
                  {subTab}
                </button>
              ))}
            </div>

            {/* Subtab Content */}
            {academicSubTab === "TG (Mentor-Mentee)" ? (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm min-h-[220px]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      Mentor-Mentee List - 2026_27
                    </h4>
                    <p className="text-sm text-gray-500">
                      Tentative Mentor-Mentee List for A.Y 26-27
                    </p>
                  </div>
                  <div className="relative w-full sm:w-72">
                    <input
                      type="text"
                      placeholder="Search student or mentor name..."
                      value={mentorSearchQuery}
                      onChange={(e) => setMentorSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                    <svg
                      className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  {mentorMenteeData
                    .map((item) => {
                      const matchesMentor = item.mentor
                        .toLowerCase()
                        .includes(mentorSearchQuery.toLowerCase());
                      const filteredStudents = item.students.filter((student) =>
                        student
                          .toLowerCase()
                          .includes(mentorSearchQuery.toLowerCase()),
                      );

                      if (!matchesMentor && filteredStudents.length === 0)
                        return null;

                      return {
                        ...item,
                        filteredStudents,
                        showAll: matchesMentor || mentorSearchQuery === "",
                      };
                    })
                    .filter(Boolean)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                      >
                        <details
                          className="group"
                          open={mentorSearchQuery !== ""}
                        >
                          <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100/80 transition-colors">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-secondary text-base">
                                {item.mentor}
                              </span>
                              <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full border border-blue-100">
                                {item.showAll
                                  ? `${item.students.length} Mentees`
                                  : `${item.filteredStudents.length} Matches`}
                              </span>
                            </div>
                            <span className="text-gray-400 transition-transform group-open:rotate-180">
                              ▼
                            </span>
                          </summary>
                          <div className="p-4 bg-white border-t border-gray-100">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                              {(item.showAll
                                ? item.students
                                : item.filteredStudents
                              ).map((student, idx) => {
                                const isMatched =
                                  mentorSearchQuery !== "" &&
                                  student
                                    .toLowerCase()
                                    .includes(mentorSearchQuery.toLowerCase());
                                return (
                                  <div
                                    key={idx}
                                    className={`p-2.5 rounded-lg border text-sm transition-all ${
                                      isMatched
                                        ? "bg-blue-50 border-blue-200 font-semibold text-blue-900 shadow-sm"
                                        : "bg-gray-50/50 border-gray-100 text-gray-700 hover:bg-gray-50"
                                    }`}
                                  >
                                    <span className="text-xs text-gray-400 font-bold mr-1.5">
                                      {idx + 1}.
                                    </span>
                                    {student}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </details>
                      </div>
                    ))}
                </div>
              </div>
            ) : academicSubTab ===
                "Mechanical Engineering Students Association (MESA) Activities" ||
              academicSubTab === "Placement Highlights 2025-26" ? (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col text-left">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {academicSubTab}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {getSubTabDescription(academicSubTab)}
                  </p>
                </div>
                <div className="w-full h-[650px] border border-gray-200 rounded-lg overflow-hidden bg-gray-50 relative">
                  <iframe
                    src={
                      academicSubTab ===
                      "Mechanical Engineering Students Association (MESA) Activities"
                        ? "/programs/Mech/mesa_2526_semii.pdf#toolbar=1"
                        : "/programs/Mech/placement_mech.pdf#toolbar=1"
                    }
                    className="w-full h-full border-0"
                    title={academicSubTab}
                  />
                </div>
              </div>
            ) : academicSubTab ===
              "Student Training and Skill Development Activities" ? (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left">
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900">
                    Student Training and Skill Development Activities
                  </h4>
                </div>
                <div className="space-y-8 text-gray-700 leading-relaxed text-base">
                  <p className="text-gray-800 font-medium">
                    The Department of Mechanical Engineering, in association
                    with Gryphon Academy Pvt. Ltd., organized two comprehensive
                    company-specific technical training programs for Mechanical
                    Engineering students.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 text-xs font-bold bg-secondary text-white rounded-md uppercase tracking-wider">
                          Training Program I
                        </span>
                        <span className="text-sm font-semibold text-gray-500">
                          (27 January – 2 February 2026)
                        </span>
                      </div>
                      <h5 className="font-bold text-gray-900 text-base mb-3">
                        Automation and Industrial Awareness
                      </h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          Advanced AutoCAD
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          Advanced SolidWorks
                        </li>
                      </ul>
                    </div>

                    <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 text-xs font-bold bg-secondary text-white rounded-md uppercase tracking-wider">
                          Training Program II
                        </span>
                        <span className="text-sm font-semibold text-gray-500">
                          (31 March – 10 April 2026)
                        </span>
                      </div>
                      <h5 className="font-bold text-gray-900 text-base mb-3">
                        Aptitude Development
                      </h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          Communication and Professional Skills
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          Problem-Solving and Analytical Thinking
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 bg-gray-50/50 border border-gray-100 rounded-xl flex items-start gap-3">
                    <div className="p-2 bg-white border border-gray-100 rounded-lg text-secondary shadow-sm">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 font-medium">
                        Additionally, students participated in a Technical
                        Conference in Mumbai, where they interacted with
                        industry experts and explored emerging technologies and
                        industrial trends.
                      </p>
                    </div>
                  </div>

                  {/* Photo Gallery */}
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-secondary rounded-full" />
                      Training & Activities Gallery
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {[
                        "20260127_114304AMByGPSMapCamera.webp",
                        "20260201_100621AMByGPSMapCamera.webp",
                        "20260202_113018AMByGPSMapCamera.webp",
                        "20260223_14104PMByGPSMapCamera 1.webp",
                        "20260223_14125PMByGPSMapCamera 1.webp",
                        "20260224_114357AMByGPSMapCamera 1.webp",
                        "20260403_115535AMByGPSMapCamera 1.webp",
                        "20260404_103022AMByGPSMapCamera 1.webp",
                        "20260406_110859AMByGPSMapCamera 1.webp",
                        "20260410_21224PMByGPSMapCamera.webp",
                        "3455.webp",
                      ].map((imgName, index) => (
                        <div
                          key={index}
                          className="group relative aspect-video rounded-lg overflow-hidden border border-gray-200 bg-gray-100 shadow-sm cursor-pointer"
                          onClick={() =>
                            setSelectedTrainingImage(
                              `/programs/Mech/std_train_skill_dev/${imgName}`,
                            )
                          }
                        >
                          <img
                            src={`/programs/Mech/std_train_skill_dev/${imgName}`}
                            alt={`Training session ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-semibold rounded-full shadow-sm">
                              View Image
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : academicSubTab === "Alumni Engagement Activities" ? (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left">
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900">
                    Alumni Engagement Activities
                  </h4>
                </div>
                <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                  <p>
                    The Department of Mechanical Engineering successfully
                    organized a series of Alumni Expert Talks aimed at bridging
                    the gap between academia and industry. Distinguished alumni
                    from various professional domains interacted with students
                    and shared their industry experiences, entrepreneurial
                    journeys, and technological insights.
                  </p>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-4 text-lg">
                      Highlights:
                    </h5>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="text-secondary font-bold text-lg mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            Mr. Shreyash Awate (Managing Director, Awate Auto
                            Wakad)
                          </strong>
                          <br />
                          delivered a session on &ldquo;Entrepreneurship Beyond
                          the Classroom&rdquo;
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-secondary font-bold text-lg mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            Mr. Yogesh Patil (Engineer, Fluid Control R&D Lab)
                          </strong>
                          <br />
                          conducted an expert talk on &ldquo;From Spark to
                          Torque: Real-World Engine Design Insights&rdquo;.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-secondary font-bold text-lg mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            Mr. Bharat Thorat (Production Engineer, Tata Motors)
                          </strong>
                          <br />
                          guided students on &ldquo;Industry 4.0 and Smart
                          Manufacturing&rdquo;.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-secondary font-bold text-lg mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            Mr. Sahil Sonigara (Director, Parshwanath Sales by
                            Nilkamal Homes)
                          </strong>
                          <br />
                          shared entrepreneurial experiences through his session
                          on &ldquo;Engineering Entrepreneurship&rdquo;.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-secondary font-bold text-lg mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            Mr. Suraj Raipure (Deputy Manager, JSW Genentech
                            Ltd.)
                          </strong>
                          <br />
                          delivered expert talks on &ldquo;Product Design and
                          Development&rdquo; and &ldquo;Future of Vehicle
                          Industry&rdquo;.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-secondary font-bold text-lg mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            Mr. Aniket Shende (CEO, Cutting Edge Technology) and
                            Mr. Rohan Deshpande (Senior Purchasing Specialist,
                            SLB OneSubsea)
                          </strong>
                          <br />
                          addressed students on the &ldquo;Impact of Technical
                          Events on Student Learning and Professional
                          Development&rdquo;
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm min-h-[220px] flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-secondary">
                  {renderSubTabIcon(academicSubTab)}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {academicSubTab}
                </h4>
                <p className="text-gray-500 max-w-md">
                  {getSubTabDescription(academicSubTab)}
                </p>
                {academicSubTab === "Time Table" ? (
                  <div className="mt-6">
                    <a
                      href="/programs/Mech/new_time_table.xlsx"
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-secondary/90 transition-colors duration-200"
                    >
                      <span>Download Time Table AY 2026-27 Sem I (Theory)</span>
                      <svg
                        className="w-4.5 h-4.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                    </a>
                  </div>
                ) : (
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      Details Coming Soon
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of Mechanical Engineering
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with cutting-edge education and
            research in mechanical engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-1 md:space-y-2 sticky top-24 self-start border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-lg text-center">
              Mechanical Overview
            </h3>

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActive(tab);

                  if (window.innerWidth < 1024) {
                    setTimeout(() => {
                      const el = document.getElementById("right-content");
                      if (el) {
                        const yOffset = -160; // 🔥 adjust this if needed (navbar height)
                        const y =
                          el.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;

                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 50);
                  }
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary hover:border-l-4 hover:border-secondary"
                }`}
              >
                <span className="font-medium">{tab}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div
            id="right-content"
            className="lg:col-span-3 bg-white rounded-xl shadow-sm p-4 md:p-8 border border-gray-100"
          >
            <div className="mb-4 md:mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>

            <div className="content-area">
              {renderContent(sectionContent[active])}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedTrainingImage && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedTrainingImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              onClick={() => setSelectedTrainingImage(null)}
              className="absolute -top-12 right-0 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors focus:outline-none"
              title="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedTrainingImage}
              alt="Expanded training session"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}
