"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Award,
  FileText,
  Wrench,
  Activity,
  Book,
  MessageSquare,
  ChevronDown,
  FlaskRound,
  Atom,
  CircuitBoard,
  Zap,
  Code,
  Cog,
  PenTool,
} from "lucide-react";
import FAQSection from "@/components/FAQSection";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import EnquireNowProgramModal from "@/components/EnquireNowProgramModal";
import ApplyForm from "@/components/home/ApplyForm";

const convertImageToWebp = (src) => {
  if (!src) return src;
  return src.replace(/\.(jpe?g|png|avif|jpg|JPG)$/i, '.webp');
};

export default function FirstYearEngineering() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [expandedPdf, setExpandedPdf] = useState(null);
  const [currentFacility, setCurrentFacility] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFacility((prev) => (prev + 1) % facilitiesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        const contentElement = document.getElementById("tab-content");
        if (contentElement) {
          const yOffset = -100; // Adjust for navbar height
          const y =
            contentElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochures/ICEMAdmissionBrochure2025.pdf";
    link.download = "ICEM-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tabs = [
    { name: "Overview", icon: Users },
    { name: "Staff", icon: Users },
    { name: "BOS", icon: Award },
    { name: "Syllabus", icon: BookOpen },
    { name: "Magazine", icon: Book },
  ];

  const staffData = [
    {
      sn: 1,
      id: "1883",
      name: "Dr. Kiran Dattatray Devade",
      designation: "Professor & HOD",
      department: "FE",
      qualification: "Ph.D ME",
      doj: "02/11/2020",
      dob: "09/08/1980",
      image: "/faculty/final_icem_branding/fe/Dr. Kiran Devade.webp",
    },
    {
      sn: 2,
      id: "984",
      name: "Dr. Manjusha Ashwin Tomar",
      designation: "Associate Professor",
      department: "FE",
      qualification: "Ph.D M.Sc",
      doj: "26/09/2012",
      dob: "25/06/1973",
      image: "/faculty/final_icem_branding/fe/Dr. Manjusha Tomar.webp",
    },
    {
      sn: 3,
      id: "1516",
      name: "Dr. Avinash Santaram Bansode",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "Ph.D M.Phil M.Sc B.Sc",
      doj: "24/01/2017",
      dob: "13/03/1980",
      image: "/faculty/final_icem_branding/fe/Dr. Avinash Bansode.webp",
    },
    {
      sn: 4,
      id: "465",
      name: "Mrs. Pratima Amrut Gaikwad",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "ME",
      doj: "29/08/2009",
      dob: "06/05/1985",
      image: "/faculty/final_icem_branding/fe/Mrs. Pratima Gaikwad.webp",
    },
    {
      sn: 5,
      id: "645",
      name: "Mrs. Supriya Deepak Kumbhar",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "ME",
      doj: "03/09/2010",
      dob: "30/06/1983",
      image: "/faculty/final_icem_branding/fe/Mrs. Supriya Kumbhar.webp",
    },
    {
      sn: 6,
      id: "1290",
      name: "Mr. Ashwin Shriram Dharme",
      designation: "Assistant Professor & Dean Admissions",
      department: "FE",
      qualification: "MBA ME",
      doj: "15/06/2015",
      dob: "11/05/1986",
      image: "/faculty/final_icem_branding/fe/Ashwin Dharme.webp",
    },
    {
      sn: 7,
      id: "3094",
      name: "Dr. Mandakini Sanjay Dahiwade",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "B.Sc M.Sc M.Phil Ph.D",
      doj: "07/01/2024",
      dob: "02/05/1988",
      image: "/faculty/final_icem_branding/fe/Dr. Mandakini Dahiwade.webp",
    },
    {
      sn: 8,
      id: "3108",
      name: "Mrs. Priyanka Harshal Mahajan",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "ME",
      doj: "08/12/2024",
      dob: "07/01/1992",
      image: "/faculty/final_icem_branding/fe/Prof. Priyanka Mahajan.webp",
    },
    {
      sn: 9,
      id: "3116",
      name: "Ms. Trupti Nandkumar Kathale",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "B.Sc M.Sc",
      doj: "10/01/2024",
      dob: "01/06/1985",
      image: "/faculty/final_icem_branding/fe/Trupti Kathale.webp",
    },
    {
      sn: 10,
      id: "3117",
      name: "Mr. Raghunandan Vinayakrao Kale",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "B.Sc M.Sc",
      doj: "10/03/2024",
      dob: "28/03/1998",
      image: "/faculty/final_icem_branding/fe/Raghunandan sir photo.webp",
    },
    {
      sn: 11,
      id: "3118",
      name: "Mr. Swapnil Machhindra Chaudhari",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "B.Sc M.Tech",
      doj: "10/07/2024",
      dob: "02/06/1993",
      image: "/faculty/final_icem_branding/fe/Swapnil choudhary.webp",
    },
    {
      sn: 12,
      id: "3220",
      name: "Dr. Dyanand Ambadas Kamble",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "Ph.D B.Sc M.Sc Post Doctorate",
      doj: "22/09/2025",
      dob: "23/10/1982",
      image: "/faculty/final_icem_branding/fe/Dr. Dayanand Kamble.webp",
    },
    {
      sn: 13,
      id: "3224",
      name: "Mr. Rathod Shubham Shrikant",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "B.Sc M.Sc",
      doj: "01/10/2025",
      dob: "03/01/1995",
      image: "/faculty/final_icem_branding/fe/Mr. Shubham Rathod.webp",
    },
    {
      sn: 14,
      id: "3225",
      name: "Mr. Rishikesh Devendra Sonawane",
      designation: "Assistant Professor",
      department: "FE",
      qualification: "BE Mech",
      doj: "10/06/2025",
      dob: "05/10/1998",
      image: "/faculty/final_icem_branding/fe/Mr. Rishikesh Sonawane.webp",
    },
  ];

  const bosData = [
    {
      srNo: 1,
      name: "Dr. Poorna Shankar , HOD( Basic Engineering Department )",
      category: "BOS Chairman",
    },
    { srNo: 2, name: "Dr. Vikas Mathe", category: "VC Nominee" },
    {
      srNo: 3,
      name: "Dr. Nagbhushan Patil, Professor, Sharnbasava University, Kalburgi, Karnataka",
      category: "Subject Expert",
    },
    {
      srNo: 4,
      name: "Dr. Nandkumar Mandlik, Asso. Professor and Controller of Examinations, Fergusson College,Pune",
      category: "Subject Expert",
    },
    {
      srNo: 5,
      name: "Dr. Chaya Lande, Asst. Professor-Mathematics, Symbiosis Institute of Technology, Pune",
      category: "Subject Expert",
    },
    {
      srNo: 6,
      name: "Dr. Neeta Kankane, Professor, Associate Dean, Faculty of science, MITWPU. Kothrud, Pune",
      category: "Subject Expert",
    },
    {
      srNo: 7,
      name: "Dr. Amrut Gaikwad, Sr. Scientist, OLON India Pvt. Ltd. Pune",
      category: "Industry Expert",
    },
    {
      srNo: 8,
      name: "Mr. Avinash Sukhwani, Design Head, Nelilsoft Technologies, Pune",
      category: "Alumni Member",
    },
    { srNo: 9, name: "Dr. Manjusha Tomar", category: "Member" },
    { srNo: 10, name: "Prof.Pratima Gaikwad", category: "Member" },
    { srNo: 11, name: "Dr. Avinash Bansode", category: "Member" },
    { srNo: 12, name: "Dr. Mandakini Dahiwade", category: "Member" },
    { srNo: 13, name: "Prof.Dheeraj Bhagwate", category: "Member" },
    { srNo: 14, name: "Prof. Supriya Kumbhar", category: "Member" },
    { srNo: 15, name: "Prof. Ashwin Dharme", category: "Member" },
    { srNo: 16, name: "Prof. Rupali Salunke", category: "Member" },
    { srNo: 17, name: "Prof.Mayur Napte", category: "Member" },
    { srNo: 18, name: "Prof. Satyam Kalyane", category: "Member" },
    { srNo: 19, name: "Prof. Pallavi Javalekar", category: "Member" },
    { srNo: 20, name: "Prof. Sachin Gaikwad", category: "Member" },
  ];

  const syllabusData = [
    {
      name: "FY BTech (2025 Course) Pattern Syllabus",
      pdf: "/assets/pdf/syllabus/Updated-Syllabus-new-Authenticated-by-VC-Nominee.pdf",
    },
    {
      name: "FY BTech (2024 Course) Pattern Syllabus",
      pdf: "/assets/pdf/syllabus/New_Syllabus_2024-25_Updated_(28-10-2024).pdf",
    },
    {
      name: "First Year Engineering (2019 Course) Pattern Syllabus",
      pdf: "/assets/pdf/syllabus/First_Year_Engineering_2019_Patt_Syllabus.pdf",
    },
  ];

  const facilitiesData = [
    {
      name: "Chemistry Lab",
      equipment:
        "Oven, PH meter, Colorimeter, Distillation plant, Furnace, Fridge-to store Chemicals, Hot plate, Weight balance(non working)",
      icon: FlaskRound,
    },
    {
      name: "Physics Lab",
      equipment:
        "Energy Band Gap Set Up, Solar Cell Characteristic Set Up, He Ne Laser Source, Spectrometers, Microscopes, Ultrasonic Interferometer, Malus Law Set Up",
      icon: Atom,
    },
    {
      name: "Electronics Lab",
      equipment:
        "Digital storage Oscilloscope, High resolution digital multimeter, BJT photo sensor based RPM counter, Digital circuits trainer kit.",
      icon: CircuitBoard,
    },
    {
      name: "Electrical Lab",
      equipment: "DC Shunt Motor, DC Series Motor, 3 Phase Induction Motor.",
      icon: Zap,
    },
    {
      name: "Programming Lab",
      equipment:
        "Total No of Machines: 47, Configuration: HP intel core i5,8GB RAM, 500 HDD, LED 19.5' HP Monitor with Keyboard Mouse, Software Installed: Ubuntu 22.0, Projector: Epson Projector",
      icon: Code,
    },
    {
      name: "Mechanics Lab",
      equipment:
        "Parallelogram drawing table, Simple & compound beam equipment, Flat Belt equipment, Curvillinear motion equipment",
      icon: Cog,
    },
    {
      name: "Drawing Lab",
      equipment:
        "Models of Solids, Cut section of Solids, Stools and Drawing Tables",
      icon: PenTool,
    },
  ];

  const activitiesData = [
    {
      name: "Feedback and Takeaways of Autonomy",
      description:
        "The first-ever autonomy batch of ICEM College came together on 11th April 2025 for a valuable session led by academic advisor Chetan Wakalkar Sir, reflecting on their experiences after completing their first year under the newly implemented autonomous system.",
      images: [
        "/assets/images/Chetan_sir's_session_Img_1.png",
        "/assets/images/Chetan_sir's_session_Img_2.png",
      ],
      category: "Academic",
    },
    {
      name: "Magazine Unveiling",
      description:
        "The Basic Engineering Department marked a special milestone on 26th April 2025 with the unveiling of its First-Year Magazine, a celebration of creativity, achievements, and student experiences. Held in the newly inaugurated multipurpose hall, the event brought together faculty, students, and staff to witness the magazine's grand launch.",
      images: [
        "/assets/images/Magazine_unveiling_Img_1.png",
        "/assets/images/Magazine_unveiling_Img_ 2.png",
      ],
      category: "Events",
    },
    {
      name: "Project Exhibition",
      description:
        "Project Exhibition showcasing top student projects selected after evaluation of PBL took place in the multipurpose hall. The event celebrated innovation, technical expertise, and real-world problem-solving, inspiring students to push boundaries and refine their ideas.",
      images: ["/assets/images/PBL_Img_1.png", "/assets/images/PBL_Img_2.png"],
      category: "Academic",
    },
    {
      name: "Seminar and PBL Demonstration",
      description:
        "On 4th April 2025, ICEM College witnessed an engaging and intellectually stimulating event as students showcased their project demonstrations and seminar presentations across various subjects.",
      images: [
        "/assets/images/seminar_and_project_Img_1.png",
        "/assets/images/seminar_and_project_Img_2.png",
      ],
      category: "Academic",
    },
    {
      name: "PTM",
      description:
        "The First-Year Engineering Parent-Teacher Meeting (PTM) held on March 22, 2025, at ICEM provided an important platform for interaction between parents and faculty, focusing on students' academic progress, campus facilities, and overall development. This was the second PTM of the academic year, following the first PTM conducted online on November 22 and 23, 2024, during Semester 1.",
      images: [
        "/assets/images/PTM-1.jpeg",
        "/assets/images/PTM-2.jpeg",
        "/assets/images/PTM-3.jpeg",
        "/assets/images/PTM-4.jpeg",
      ],
      category: "Events",
    },
    {
      name: "AZIONARE 2K25",
      description:
        "Azionare 2K25, held on February 17, 2025, as part of the ICEM Tech-fest where students of all branches participated, was a resounding success, marking a significant milestone for the first-year students who took charge of two major events—E-Sports and the Tech Quiz. Their enthusiasm, dedication, and teamwork transformed the tech fest into an unforgettable experience for participants and attendees alike.",
      images: [
        "/assets/images/Tech_fest_1.png",
        "/assets/images/Tech_fest_2.png",
        "/assets/images/Tech_fest_3.png",
        "/assets/images/Tech_fest_4.png",
      ],
      category: "Events",
    },
    {
      name: "Mahabaleshwar Study Tour",
      description:
        "The Mahabaleshwar study tour organized by ICEM provided first-year engineering students with a holistic understanding of their field and its intersection with tourism, hospitality, and agriculture. Through visits to Gaurish Resorts, Dina Hotels and Mapro Garden students gained practical insights into sustainable infrastructure, hospitality management, agro tourism, and cultural heritage preservation.",
      images: [
        "/assets/images/Mahabaleshwar-Study_Tour_1.png",
        "/assets/images/Mahabaleshwar-Study_Tour_2.png",
        "/assets/images/Mahabaleshwar-Study_Tour_3.png",
        "/assets/images/Mahabaleshwar-Study_Tour_4.png",
      ],
      category: "Cultural",
    },
    {
      name: "From Workshop to Showcase: First-Year Students Build and Exhibit Bookshelves",
      description:
        "In a remarkable display of creativity and craftsmanship, first-year students successfully built and showcased handmade bookshelves as part of their hands-on learning experience in the college workshop.",
      images: ["/assets/images/Workshop-to-Showcase.jpg"],
      category: "Cultural",
    },
    {
      name: "VAP Certificate Distribution Ceremony",
      description:
        "The Value Added Program (VAP) Certificate Distribution Ceremony was held on February 7, 2025, celebrating the successful completion of skill-enhancing courses by students. The event was graced by esteemed dignitaries, including Principal Dr. Nilesh Uke , Vice Principal Dr. Somendra Das, Academic Dean Dr. Saurabh Gupta, HOD Dr. Poorna Shankar, and all faculty members. The ceremony recognized students' dedication to learning beyond the curriculum, equipping them with industry-relevant skills",
      images: ["/assets/images/VAP-Certificate-Distribution.jpeg"],
      category: "Events",
    },
    {
      name: "Fresher's- Rising Stars 2K24",
      description:
        "From music to dance, with every act, the freshers proved that their journey is just beginning, and their talents are bound to soar higher than ever.",
      images: [
        "/assets/images/Fresher’s-Rising-Stars-2K24-1.png",
        "/assets/images/Fresher’s-Rising-Stars-2K24-2.png",
        "/assets/images/Fresher’s-Rising-Stars-2K24-3.png",
        "/assets/images/Rising-Star-4.png",
      ],
      category: "Cultural",
    },
    {
      name: "Orientation",
      description:
        "The first-day of the orientation program for the newly admitted engineering students at Indira College of Engineering was held on 18th and 19th September 2024. The event aimed to introduce the students to the esteemed Indira Group of Institutes, the college's academic environment, the infrastructure, and the skills they will need to develop throughout their engineering journey through speeches by Principal, Dr. Nilesh Uke, HOD, Dr. Poorna Shankar and Dean of Academics, Dr. Saurabh Gupta.",
      images: [
        "/assets/images/Orientation_1.jpg",
        "/assets/images/Orientation_2.jpg",
        "/assets/images/Orientation_3.jpg",
        "/assets/images/Orientation_4.jpg",
      ],
      category: "Events",
    },
    {
      name: "Induction Programme",
      description:
        "The 18th Induction program was held on 20th September 2024. Mr. Sachin Khillari, a silver medallist at the 2024 Paralympics and an alumnus of the ICEM 2013 Batch, was honoured by Chairperson Dr. Tarita Shankar. The event aimed to evaluate creative, cooperative, creative quotient, adversity quotient, humour quotient, social quotient, emotional quotient in their engineering careers",
      images: [
        "/assets/images/Induction-Programme-1.png",
        "/assets/images/Induction-Programme-2.png",
      ],
      category: "Events",
    },
    {
      name: "Poster Making Competition",
      description:
        "Our first-year engineering students presented their impressive projects during a poster presentation organized by the Institution's Innovation Council and Basic Engineering Department. The event served as a platform for students to demonstrate their creativity and academic prowess.",
      images: [
        "/assets/images/Poster_Making_1.png",
        "/assets/images/Poster_Making_2.png",
      ],
      category: "Academic",
    },
  ];

  const testimonialsData = [
    {
      name: "Santanu Brahme",
      role: "Pre and post Sales Engineer",
      company: "Hettich India Pvt. Ltd",
      image: "/assets/images/icem/SantanuBrahme.webp",
      testimonial:
        "ICEM has a wonderful group of faculties who have a great bonding with students and parents. Various good companies come to college for campus interview, placement is also good. College has very nice environment. Thanks ICEM for the great opportunity. There's a lot that I learned when I was working in the placement cell.",
    },
    {
      name: "Vidya Nair",
      role: "Analyst IT Audit",
      company: "KPMG",
      image: "/assets/images/icem/VidyaNair.webp",
      testimonial:
        "Role of placement cell in my campus selection: First of all, I must thank one of the most active & helpful groups of ICEM - Placement cell. Placement cell played vital role in our preparation for the interviews, GDs & soft skills development. Interviews are to be faced with full confidence & that key to the success is taught through various activities held by placement cell in ICEM.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-2 lg:p-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Overview
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg mb-4">
                The Basic Engineering Department boasts a rich legacy and
                tradition of academic excellence. Committed to nurturing
                well-rounded individuals, our department places a strong
                emphasis on holistic student development, ensuring that our
                graduates not only excel academically but also possess the
                skills and values necessary for success in their professional
                and personal lives. Our rigorous academic processes, guided by a
                team of dedicated faculty members, foster a culture of inquiry,
                critical thinking, and innovation among our students. Rooted in
                a spirit of collaboration and mutual respect, our departmental
                community thrives on diversity, inclusivity, and a shared
                passion for excellence. Together, we continue to uphold our
                commitment to shaping the engineers and leaders of tomorrow,
                driving positive change in society and beyond.
              </p>
            </div>
          </div>
        );
      case "Staff":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
            {staffData.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center p-5 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-32 h-40 overflow-hidden rounded-lg mb-4 bg-gray-100 shadow-sm border border-gray-100">
                  <Image
                    src={convertImageToWebp(staff.image)}
                    alt={staff.name}
                    width={128}
                    height={160}
                    className="w-full h-full object-cover object-top"
                    onError={(error) => {
                      error.currentTarget.src = staff.image;
                    }}
                  />
                </div>

                <div className="w-full flex-1 flex flex-col">
                  <h4 className="font-bold text-gray-900 mb-1 leading-snug">
                    {staff.name}
                  </h4>
                  <p className="text-blue-700 font-semibold text-xs mb-4 uppercase tracking-wider">
                    {staff.designation}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 space-y-2 text-left">
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">ID NO:</span>
                      <span className="text-gray-700 font-medium">{staff.id}</span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">Qualification:</span>
                      <span className="text-gray-700 font-medium">{staff.qualification}</span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">Joining Date:</span>
                      <span className="text-gray-700 font-medium">{staff.doj}</span>
                    </div>
                    <div className="text-[11px]">
                      <span className="text-gray-400 font-bold uppercase mr-1">Birth Date:</span>
                      <span className="text-gray-700 font-medium">{staff.dob}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "BOS":
        return (
          <div className="bg-white rounded-2xl shadow-xl p-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Board of Studies (BOS) Members
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-4 py-2 text-left font-semibold">Sr No</th>
                    <th className="px-4 py-2 text-left font-semibold">
                      Name of Member with Designation
                    </th>
                    <th className="px-4 py-2 text-left font-semibold">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bosData.map((member, index) => (
                    <tr key={index} className="border-t border-slate-200">
                      <td className="px-4 py-2">{member.srNo}</td>
                      <td className="px-4 py-2">{member.name}</td>
                      <td className="px-4 py-2">{member.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "Syllabus":
        return (
          <div className="bg-white rounded-2xl shadow-xl p-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Syllabus
            </h3>
            <div className="space-y-4">
              {syllabusData.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg border border-slate-200"
                >
                  <button
                    onClick={() =>
                      setExpandedPdf(expandedPdf === index ? null : index)
                    }
                    className="w-full text-left p-3 font-semibold text-slate-800 hover:bg-slate-100 transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        expandedPdf === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedPdf === index && (
                    <div className="p-3 border-t border-slate-200">
                      <iframe
                        src={item.pdf}
                        width="100%"
                        height="600"
                        className="border rounded"
                        title={item.name}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "Facilities":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilitiesData.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-3 border border-slate-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg text-slate-800">
                      {facility.name}
                    </h4>
                  </div>
                  <p className="text-gray-700 font-semibold mb-2">
                    Major Equipment:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    {facility.equipment.split(", ").map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        );
      case "Activities":
        return (
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentActivity * 100}%)` }}
            >
              {activitiesData.map((activity, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-xl p-2 border border-slate-200">
                    <h4 className="font-bold text-lg text-slate-800 mb-3">
                      {activity.name}
                    </h4>
                    <p className="text-gray-700 mb-4">{activity.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {activity.images.map((image, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={image}
                          alt={`${activity.name} ${imgIndex + 1}`}
                          width={300}
                          height={200}
                          className="rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              {activitiesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentActivity(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                    index === currentActivity ? "bg-primary" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        );
      case "Magazine":
        return (
          <div className="bg-white rounded-2xl shadow-xl p-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Magazine
            </h3>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="font-semibold text-slate-800">INGENIUM 1</span>
              <a
                href="/assets/pdf/Magazine/INGENIUM_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
              >
                View PDF
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden h-[55vh] md:h-[70vh] lg:h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/programs/FE/FE2.jpg"
            alt="First Year Engineering"
            fill
            className="object-cover object-top scale-105 opacity-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
          <div className="max-w-3xl text-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
              First Year Engineering Programme
            </h2>
            <p className="text-xl md:text-3xl lg:text-4xl mt-2 bg-gradient-to-br from-cyan-400 to-sky-400 bg-clip-text text-transparent font-extrabold">
              Building a Robust Foundation for the Engineers of Tomorrow
            </p>
            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl text-sm md:text-base">
              The Basic Engineering Department boasts a rich legacy and
              tradition of academic excellence. Committed to nurturing
              well-rounded individuals, our department places a strong emphasis
              on holistic student development.
            </p>
            <div className="flex sm:flex-row gap-3 sm:gap-4 mt-6">
              <button
                onClick={toggleModal}
                className="bg-[#003c84] text-white px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm md:text-base w-full sm:w-auto transition-all duration-300 hover:bg-[#43CBD0] hover:text-white border-2 border-transparent hover:border-secondary active:scale-95 hover:transform hover:-translate-y-1"
              >
                Enquire Now
              </button>
              <button
                onClick={handleBrochureDownload}
                className="bg-[#43CBD0] text-white px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm md:text-base w-full sm:w-auto transition-all duration-300 hover:bg-[#003c84] hover:text-white border-2 border-transparent hover:border-secondary active:scale-95 hover:transform hover:-translate-y-1"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Tabbed Content Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-4"
          >
            <div className="lg:w-1/4 lg:sticky lg:top-0">
              <div className="bg-white rounded-2xl shadow-xl p-2 md:p-4 border border-slate-200">
                <h2 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  Sections
                </h2>
                <div className="space-y-2 md:space-y-3">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <motion.button
                        key={tab.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleTabClick(tab.name)}
                        className={`w-full px-2 py-2 md:px-3 md:py-3 rounded-xl font-medium transition-all duration-300 text-left flex items-center gap-2 md:gap-3 ${
                          activeTab === tab.name
                            ? "bg-gradient-to-r from-[#278da4] to-[#003c84] text-white shadow-lg"
                            : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:shadow-md"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            activeTab === tab.name
                              ? "text-white"
                              : "text-primary"
                          }`}
                        />
                        <span className="flex-1 text-sm md:text-base">
                          {tab.name}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:w-3/4" id="tab-content">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-2 border border-slate-200"
              >
                {renderTabContent()}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="w-full bg-gray-50 py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-slate-800">
            Facilities
          </h2>
          {/* Mobile Carousel */}
          <div className="md:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentFacility * 100}%)` }}
            >
              {facilitiesData.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="bg-white rounded-xl shadow-md p-4 border border-slate-200"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-base text-slate-800">
                          {facility.name}
                        </h4>
                      </div>
                      <p className="text-gray-700 font-semibold mb-2 text-sm">
                        Major Equipment:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        {facility.equipment.split(", ").map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => setCurrentFacility((prev) => (prev - 1 + facilitiesData.length) % facilitiesData.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white py-1 px-2 rounded-full hover:bg-black/70 transition-colors text-sm"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrentFacility((prev) => (prev + 1) % facilitiesData.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white py-1 px-2 rounded-full hover:bg-black/70 transition-colors text-sm"
            >
              ›
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {facilitiesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFacility(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentFacility ? "bg-primary" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-3 md:gap-6">
            {facilitiesData.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-6 border border-slate-200"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <h4 className="font-bold text-base md:text-lg text-slate-800">
                      {facility.name}
                    </h4>
                  </div>
                  <p className="text-gray-700 font-semibold mb-2 text-sm md:text-sm">
                    Major Equipment:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    {facility.equipment.split(", ").map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="w-full bg-white text-black py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 items-stretch">
          {/* LEFT TEXT SECTION */}
          <div className="bg-white px-6 md:px-8 rounded-lg shadow-sm flex flex-col justify-between border border-gray-100">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 leading-snug">
                First Year Engineering: The Gateway to Specialization
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                The First Year Engineering programme at Indira College is the
                cornerstone of a successful engineering career. It offers a
                unified curriculum that introduces students to the diverse
                fields of engineering, helping them make an informed and
                confident decision about their future specialization. Our focus
                is on building a strong conceptual base, fostering analytical
                abilities, and igniting a passion for innovation.
              </p>
              <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-2">
                Program Structure
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base">
                <li>Engineering Mathematics & Computational Methods</li>
                <li>Applied Physics & Chemistry for Engineers</li>
                <li>Fundamentals of Programming & Logic Building</li>
                <li>Engineering Graphics & Design Basics</li>
                <li>Communication Skills & Professional Ethics</li>
              </ul>
            </div>
          </div>
          {/* RIGHT FORM SECTION */}
          <div
            id="programme-structure"
            className="bg-white p-4 md:p-6 rounded-lg shadow-sm flex flex-col justify-between border border-gray-100"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 leading-snug text-center">
              Enquire Now
            </h2>
            <ApplyForm />
          </div>
        </div>
      </div>
      <RecruitersSection />
      <CTASection />

      {/* Activities Section */}
      <div className="w-full bg-gray-50 py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-[#003C84]">
            Activities
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6">
            {["All", "Academic", "Events", "Cultural"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-full font-medium text-sm md:text-base transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {activitiesData
              .filter(
                (activity) =>
                  selectedCategory === "All" ||
                  activity.category === selectedCategory
              )
              .map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => {
                    setSelectedActivity(activity);
                    setIsActivityModalOpen(true);
                  }}
                >
                  <div className="relative h-36 md:h-48 w-full">
                    <Image
                      src={activity.images[0]}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2 md:p-4">
                    <h4 className="font-bold text-md md:text-lg text-slate-800 mb-1 md:mb-2">
                      {activity.name}
                    </h4>
                    <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-4 line-clamp-3">
                      {activity.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activity.images.slice(1, 4).map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative w-16 h-16 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt={`${activity.name} ${imgIndex + 2}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                      {activity.images.length > 4 && (
                        <div className="w-8 h-8 md:w-16 md:h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-semibold text-gray-600">
                          +{activity.images.length - 4}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Activity Modal */}
      {isActivityModalOpen && selectedActivity && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-sm md:max-w-2xl lg:max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg md:text-2xl font-bold text-slate-800">
                  {selectedActivity.name}
                </h3>
                <button
                  onClick={() => setIsActivityModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl md:text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                {selectedActivity.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedActivity.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative aspect-video rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${selectedActivity.name} ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <EnquireNowProgramModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
