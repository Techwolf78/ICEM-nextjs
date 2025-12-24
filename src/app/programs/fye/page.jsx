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

export default function FirstYearEngineering() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [expandedPdf, setExpandedPdf] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activitiesData.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        const contentElement = document.getElementById('tab-content');
        if (contentElement) {
          const yOffset = -100; // Adjust for navbar height
          const y = contentElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
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
    { name: "Facilities", icon: Wrench },
    { name: "Activities", icon: Activity },
    { name: "Magazine", icon: Book },
  ];

  const staffData = [
    {
      name: "Dr. Poorna Shankar",
      designation: "HOD- Basic Engineering Department & Dean R&D",
      department: "Basic Engineering Department",
      qualification: "MCA, M.Phil(Gold Medalist), M.Tech, Ph.D (Computer Science)",
      subject: "Artificial Intelligence, Machine Learning",
      areaOfInterest: "Artificial Intelligence, Machine Learning, Data Analytics, Big Data, Deep Learning",
      email: "poornashankar@indiraicem.ac.in",
      experience: "29 Years",
      image: "/assets/images/icem/Poorna_Shankar.jpg",
    },
    {
      name: "Dr. Manjusha Tomar",
      designation: "Associate Professor",
      department: "Basic Engineering Department",
      qualification: "Ph.D",
      subject: "Mathematics",
      areaOfInterest: "Optimization Techniques",
      email: "manjusha.tomar@indiraicem.ac.in",
      experience: "20 Years",
      image: "/assets/images/icemFaculty/Dr _Manjusha_Tomar.jpg",
    },
    {
      name: "Prof. Pratima Gaikwad",
      designation: "Assistant Professor",
      department: "Basic Engineering Department",
      qualification: "ME (Phd Pursuing)",
      subject: "Power Electronics And Drives",
      areaOfInterest: "Power Electronics And Drives",
      email: "pratima.uploankar@indiraicem.ac.in",
      experience: "14 Years",
      image: "/assets/images/icemFaculty/Pratima_Gaikwad.jpg",
    },
    {
      name: "Dr. Avinash Bansode",
      designation: "Assistant Professor",
      department: "Basic Engineering Department",
      qualification: "Ph. D. (Physics)",
      subject: "Physics",
      areaOfInterest: "Teaching And Learning",
      email: "avinash.bansode@indiraicem.ac.in",
      experience: "8 Years",
      image: "/assets/images/icemFaculty/Dr_Avinash_Bansode.jpg",
    },
    {
      name: "Prof. Supriya Kumbhar",
      designation: "Assistant Professor",
      department: "Basic Engineering Department",
      qualification: "ME Mechanical",
      subject: "MDCG, Engg Drawing, Autocad, Design, NMO",
      areaOfInterest: "Design Engineering",
      email: "supriya.kumbhar@indiraicem.ac.in",
      experience: "18 Years",
      image: "/assets/images/icemFaculty/Mrs. Supriya_Kumbhar.jpg",
    },
    {
      name: "Mr. Ashwin Dharme",
      designation: "Dean Admissions",
      department: "Basic Engineering Department",
      qualification: "ME,MBA",
      subject: "Mechanical",
      areaOfInterest: "Mechanical",
      email: "ashwin.dharme@indiraicem.ac.in",
      experience: "14 Years",
      image: "/assets/images/icemFaculty/Ashwin_Dharme.jpg",
    },
    {
      name: "Mr. Gore Atul Kundlik",
      designation: "Director Of Physical Education & Sports",
      department: "Basic Engineering Department",
      qualification: "M.P.Ed. (NET)",
      subject: "Physical Education & Sports",
      areaOfInterest: "Sports",
      email: "gore.atul@indiraicem.ac.in",
      experience: "15 Years",
      image: "/assets/images/icemFaculty/Gore_Atul.jpg",
    },
    {
      name: "Prof. Mandakini Sanjay Dahiwade",
      designation: "Assistant Professor",
      department: "Basic Engineering Department",
      qualification: "Ph.D",
      subject: "Chemistry",
      areaOfInterest: "Spectroscopy, Analysis",
      email: "mandakini.dahiwade@indiraicem.ac.in",
      experience: "2 Years",
      image: "/assets/images/icemFaculty/Mandakini_Dahiwade.jpg",
    },
    {
      name: "Prof. Priyanka Harashal Mahajan",
      designation: "Assistant professor",
      department: "First year Engineering",
      qualification: "M.E (Electrical Power System)",
      subject: "Basic Electrical Engineering, Electrical and electronics Engineering",
      areaOfInterest: "Power System",
      email: "priyanka.mahajan@indiraicem.ac.in",
      experience: "1 Years",
      image: "/assets/images/icemFaculty/Prof_Priyanka-Mahajan.png",
    },
    {
      name: "Dr. Dinkar Kisan Choudhari",
      designation: "Assistant professor",
      department: "First year Engineering",
      qualification: "PhD",
      subject: "Chemistry",
      areaOfInterest: "Synthesis of biological activity molecules and intermolecular interactions by single crystal X ray difference studies",
      email: "dinkar.choudhari@indiraicem.ac.in",
      experience: "9 Years",
      image: "/assets/images/icemFaculty/Dr_Dinkar-Chaudhari.png",
    },
    {
      name: "Prof. Pragati Yuvraj Kharbade",
      designation: "Assistant professor",
      department: "First year Engineering",
      qualification: "M.Sc",
      subject: "Physics",
      areaOfInterest: "Modern physics",
      email: "Pragati.kharbade@indiraicem.ac.in",
      experience: "3 Years",
      image: "/assets/images/icemFaculty/Prof_Pragati-Kharbade.png",
    },
    {
      name: "Prof. Suresh Mohanrao Renge",
      designation: "Assistant professor",
      department: "First year Engineering",
      qualification: "MSc(Math),GATE, MH SET",
      subject: "Mathematics",
      areaOfInterest: "Complex Analysis",
      email: "Suresh.renge@indiraicem.ac.in",
      experience: "2 Years",
      image: "/assets/images/icemFaculty/Prof_Suresh-Renge.png",
    },
    {
      name: "Swapnil Machindra Chaudhari",
      designation: "Assistant professor",
      department: "Basic Engineering Science",
      qualification: "B.SC(Mathematics), B.ED, M.TECH(IMWCA), SET(Mathematical Science)",
      subject: "Mathematics",
      areaOfInterest: "Applied Mathematics",
      email: "swapnil.chaudhari@indiraicem.ac.in",
      experience: "7 Years",
      image: "/assets/images/icemFaculty/Swapnil-choudhary-Img.png",
    },
    {
      name: "Raghunandan Vinayakrao Kale",
      designation: "Assistant professor",
      department: "Basic Engineering Science",
      qualification: "M.SC Mathematics",
      subject: "Mathematics",
      areaOfInterest: "Calculus",
      email: "raghunandan.kale@indiraicem.ac.in",
      experience: "1 Years",
      image: "/assets/images/icemFaculty/Raghunandan-Kale-Img.png",
    },
    {
      name: "Kathale Trupti N.",
      designation: "Assistant professor",
      department: "Basic Engineering Science",
      qualification: "M.Sc.",
      subject: "Mathematics",
      areaOfInterest: "Applied Mathematics",
      email: "trupti.kathale@indiraicem.ac.in",
      experience: "17 Years",
      image: "/assets/images/icemFaculty/Kathale-Trupti-Img.png",
    },
    {
      name: "Mr.Bashir Rajasab Sumbad",
      designation: "Lab Assistant",
      department: "Basic Engineering Department",
      qualification: "ITI Nctvt",
      subject: "Basic Electrical Engineering",
      areaOfInterest: "Basic Electrical Engineering",
      email: "bashir.sombad@indiraicem.ac.in",
      experience: "17 Years",
      image: "/assets/images/icemFaculty/Bashir_Sumbad.jpg",
    },
    {
      name: "Mr. Nitin Hindurao Khandait",
      designation: "Lab Assistant",
      department: "Basic Engineering Department",
      qualification: "MBA, Bsc (Chem), PGDHM",
      subject: "Chemistry",
      areaOfInterest: "Chemistry",
      email: "nitin.khandait@indiraicem.ac.in",
      experience: "19 Years",
      image: "/assets/images/icemFaculty/Nitin_Khandait.jpg",
    },
    {
      name: "Mr. Kishor Haribhau Chavan",
      designation: "Lab Assistant",
      department: "Basic engineering and science",
      qualification: "B Sc. & DMLT",
      subject: "Physics",
      areaOfInterest: "Reading, playing cricket",
      email: "kishor.chavan@indiraicem.ac.in",
      experience: "20+ Years",
      image: "/assets/images/icemFaculty/Mr_Kishor-Chavan.png",
    },
  ];

  const bosData = [
    { srNo: 1, name: "Dr. Poorna Shankar , HOD( Basic Engineering Department )", category: "BOS Chairman" },
    { srNo: 2, name: "Dr. Vikas Mathe", category: "VC Nominee" },
    { srNo: 3, name: "Dr. Nagbhushan Patil, Professor, Sharnbasava University, Kalburgi, Karnataka", category: "Subject Expert" },
    { srNo: 4, name: "Dr. Nandkumar Mandlik, Asso. Professor and Controller of Examinations, Fergusson College,Pune", category: "Subject Expert" },
    { srNo: 5, name: "Dr. Chaya Lande, Asst. Professor-Mathematics, Symbiosis Institute of Technology, Pune", category: "Subject Expert" },
    { srNo: 6, name: "Dr. Neeta Kankane, Professor, Associate Dean, Faculty of science, MITWPU. Kothrud, Pune", category: "Subject Expert" },
    { srNo: 7, name: "Dr. Amrut Gaikwad, Sr. Scientist, OLON India Pvt. Ltd. Pune", category: "Industry Expert" },
    { srNo: 8, name: "Mr. Avinash Sukhwani, Design Head, Nelilsoft Technologies, Pune", category: "Alumni Member" },
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
    { name: "FY BTech (2025 Course) Pattern Syllabus", pdf: "/assets/pdf/syllabus/Updated-Syllabus-new-Authenticated-by-VC-Nominee.pdf" },
    { name: "FY BTech (2024 Course) Pattern Syllabus", pdf: "/assets/pdf/syllabus/New_Syllabus_2024-25_Updated_(28-10-2024).pdf" },
    { name: "First Year Engineering (2019 Course) Pattern Syllabus", pdf: "/assets/pdf/syllabus/First_Year_Engineering_2019_Patt_Syllabus.pdf" },
  ];

  const facilitiesData = [
    {
      name: "Chemistry Lab",
      equipment: "Oven, PH meter, Colorimeter, Distillation plant, Furnace, Fridge-to store Chemicals, Hot plate, Weight balance(non working)",
      icon: FlaskRound,
    },
    {
      name: "Physics Lab",
      equipment: "Energy Band Gap Set Up, Solar Cell Characteristic Set Up, He Ne Laser Source, Spectrometers, Microscopes, Ultrasonic Interferometer, Malus Law Set Up",
      icon: Atom,
    },
    {
      name: "Electronics Lab",
      equipment: "Digital storage Oscilloscope, High resolution digital multimeter, BJT photo sensor based RPM counter, Digital circuits trainer kit.",
      icon: CircuitBoard,
    },
    {
      name: "Electrical Lab",
      equipment: "DC Shunt Motor, DC Series Motor, 3 Phase Induction Motor.",
      icon: Zap,
    },
    {
      name: "Programming Lab",
      equipment: "Total No of Machines: 47, Configuration: HP intel core i5,8GB RAM, 500 HDD, LED 19.5' HP Monitor with Keyboard Mouse, Software Installed: Ubuntu 22.0, Projector: Epson Projector",
      icon: Code,
    },
    {
      name: "Mechanics Lab",
      equipment: "Parallelogram drawing table, Simple & compound beam equipment, Flat Belt equipment, Curvillinear motion equipment",
      icon: Cog,
    },
    {
      name: "Drawing Lab",
      equipment: "Models of Solids, Cut section of Solids, Stools and Drawing Tables",
      icon: PenTool,
    },
  ];

  const activitiesData = [
    {
      name: "Feedback and Takeaways of Autonomy",
      description: "The first-ever autonomy batch of ICEM College came together on 11th April 2025 for a valuable session led by academic advisor Chetan Wakalkar Sir, reflecting on their experiences after completing their first year under the newly implemented autonomous system.",
      images: ["/assets/images/Chetan_sir's_session_Img_1.png", "/assets/images/Chetan_sir's_session_Img_2.png"],
    },
    {
      name: "Magazine Unveiling",
      description: "The Basic Engineering Department marked a special milestone on 26th April 2025 with the unveiling of its First-Year Magazine, a celebration of creativity, achievements, and student experiences. Held in the newly inaugurated multipurpose hall, the event brought together faculty, students, and staff to witness the magazine's grand launch.",
      images: ["/assets/images/Magazine_unveiling_Img_1.png", "/assets/images/Magazine_unveiling_Img_ 2.png"],
    },
    {
      name: "Project Exhibition",
      description: "Project Exhibition showcasing top student projects selected after evaluation of PBL took place in the multipurpose hall. The event celebrated innovation, technical expertise, and real-world problem-solving, inspiring students to push boundaries and refine their ideas.",
      images: ["/assets/images/PBL_Img_1.png", "/assets/images/PBL_Img_2.png"],
    },
    {
      name: "Seminar and PBL Demonstration",
      description: "On 4th April 2025, ICEM College witnessed an engaging and intellectually stimulating event as students showcased their project demonstrations and seminar presentations across various subjects.",
      images: ["/assets/images/seminar_and_project_Img_1.png", "/assets/images/seminar_and_project_Img_2.png"],
    },
    {
      name: "PTM",
      description: "The First-Year Engineering Parent-Teacher Meeting (PTM) held on March 22, 2025, at ICEM provided an important platform for interaction between parents and faculty, focusing on students' academic progress, campus facilities, and overall development. This was the second PTM of the academic year, following the first PTM conducted online on November 22 and 23, 2024, during Semester 1.",
      images: ["/assets/images/PTM-1.jpeg", "/assets/images/PTM-2.jpeg", "/assets/images/PTM-3.jpeg", "/assets/images/PTM-4.jpeg"],
    },
    {
      name: "AZIONARE 2K25",
      description: "Azionare 2K25, held on February 17, 2025, as part of the ICEM Tech-fest where students of all branches participated, was a resounding success, marking a significant milestone for the first-year students who took charge of two major events—E-Sports and the Tech Quiz. Their enthusiasm, dedication, and teamwork transformed the tech fest into an unforgettable experience for participants and attendees alike.",
      images: ["/assets/images/Tech_fest_1.png", "/assets/images/Tech_fest_2.png", "/assets/images/Tech_fest_3.png", "/assets/images/Tech_fest_4.png"],
    },
    {
      name: "Mahabaleshwar Study Tour",
      description: "The Mahabaleshwar study tour organized by ICEM provided first-year engineering students with a holistic understanding of their field and its intersection with tourism, hospitality, and agriculture. Through visits to Gaurish Resorts, Dina Hotels and Mapro Garden students gained practical insights into sustainable infrastructure, hospitality management, agro tourism, and cultural heritage preservation.",
      images: ["/assets/images/Mahabaleshwar-Study_Tour_1.png", "/assets/images/Mahabaleshwar-Study_Tour_2.png", "/assets/images/Mahabaleshwar-Study_Tour_3.png", "/assets/images/Mahabaleshwar-Study_Tour_4.png"],
    },
    {
      name: "From Workshop to Showcase: First-Year Students Build and Exhibit Bookshelves",
      description: "In a remarkable display of creativity and craftsmanship, first-year students successfully built and showcased handmade bookshelves as part of their hands-on learning experience in the college workshop.",
      images: ["/assets/images/Workshop-to-Showcase.jpg"],
    },
    {
      name: "VAP Certificate Distribution Ceremony",
      description: "The Value Added Program (VAP) Certificate Distribution Ceremony was held on February 7, 2025, celebrating the successful completion of skill-enhancing courses by students. The event was graced by esteemed dignitaries, including Principal Dr. Nilesh Uke , Vice Principal Dr. Somendra Das, Academic Dean Dr. Saurabh Gupta, HOD Dr. Poorna Shankar, and all faculty members. The ceremony recognized students' dedication to learning beyond the curriculum, equipping them with industry-relevant skills",
      images: ["/assets/images/VAP-Certificate-Distribution.jpeg"],
    },
    {
      name: "Fresher's- Rising Stars 2K24",
      description: "From music to dance, with every act, the freshers proved that their journey is just beginning, and their talents are bound to soar higher than ever.",
      images: ["/assets/images/Fresher’s-Rising-Stars-2K24-1.png", "/assets/images/Fresher’s-Rising-Stars-2K24-2.png", "/assets/images/Fresher’s-Rising-Stars-2K24-3.png", "/assets/images/Rising-Star-4.png"],
    },
    {
      name: "Orientation",
      description: "The first-day of the orientation program for the newly admitted engineering students at Indira College of Engineering was held on 18th and 19th September 2024. The event aimed to introduce the students to the esteemed Indira Group of Institutes, the college's academic environment, the infrastructure, and the skills they will need to develop throughout their engineering journey through speeches by Principal, Dr. Nilesh Uke, HOD, Dr. Poorna Shankar and Dean of Academics, Dr. Saurabh Gupta.",
      images: ["/assets/images/Orientation_1.jpg", "/assets/images/Orientation_2.jpg", "/assets/images/Orientation_3.jpg", "/assets/images/Orientation_4.jpg"],
    },
    {
      name: "Induction Programme",
      description: "The 18th Induction program was held on 20th September 2024. Mr. Sachin Khillari, a silver medallist at the 2024 Paralympics and an alumnus of the ICEM 2013 Batch, was honoured by Chairperson Dr. Tarita Shankar. The event aimed to evaluate creative, cooperative, creative quotient, adversity quotient, humour quotient, social quotient, emotional quotient in their engineering careers",
      images: ["/assets/images/Induction-Programme-1.png", "/assets/images/Induction-Programme-2.png"],
    },
    {
      name: "Poster Making Competition",
      description: "Our first-year engineering students presented their impressive projects during a poster presentation organized by the Institution's Innovation Council and Basic Engineering Department. The event served as a platform for students to demonstrate their creativity and academic prowess.",
      images: ["/assets/images/Poster_Making_1.png", "/assets/images/Poster_Making_2.png"],
    },
  ];

  const testimonialsData = [
    {
      name: "Santanu Brahme",
      role: "Pre and post Sales Engineer",
      company: "Hettich India Pvt. Ltd",
      image: "/assets/images/icem/SantanuBrahme.png",
      testimonial: "ICEM has a wonderful group of faculties who have a great bonding with students and parents. Various good companies come to college for campus interview, placement is also good. College has very nice environment. Thanks ICEM for the great opportunity. There's a lot that I learned when I was working in the placement cell.",
    },
    {
      name: "Vidya Nair",
      role: "Analyst IT Audit",
      company: "KPMG",
      image: "/assets/images/icem/VidyaNair.png",
      testimonial: "Role of placement cell in my campus selection: First of all, I must thank one of the most active & helpful groups of ICEM - Placement cell. Placement cell played vital role in our preparation for the interviews, GDs & soft skills development. Interviews are to be faced with full confidence & that key to the success is taught through various activities held by placement cell in ICEM.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-2 lg:p-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Overview</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg mb-4">
                The Basic Engineering Department boasts a rich legacy and tradition of academic excellence. Committed to nurturing well-rounded individuals, our department places a strong emphasis on holistic student development, ensuring that our graduates not only excel academically but also possess the skills and values necessary for success in their professional and personal lives. Our rigorous academic processes, guided by a team of dedicated faculty members, foster a culture of inquiry, critical thinking, and innovation among our students. Rooted in a spirit of collaboration and mutual respect, our departmental community thrives on diversity, inclusivity, and a shared passion for excellence. Together, we continue to uphold our commitment to shaping the engineers and leaders of tomorrow, driving positive change in society and beyond.
              </p>
            </div>
          </div>
        );
      case "Staff":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {staffData.map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl p-4 border border-slate-200 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-28 overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={staff.image}
                        alt={staff.name}
                        width={80}
                        height={112}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-lg text-slate-800 mb-1">{staff.name}</h4>
                    <p className="text-primary font-semibold text-sm mb-2">{staff.designation}</p>
                    <div className="space-y-1 text-xs text-gray-700">
                      <p><strong>Department:</strong> {staff.department}</p>
                      <p><strong>Qualification:</strong> {staff.qualification}</p>
                      <p><strong>Subject:</strong> {staff.subject}</p>
                      <p><strong>Area of Interest:</strong> {staff.areaOfInterest}</p>
                      <p><strong>Experience:</strong> {staff.experience}</p>
                      <p><strong>Email:</strong> <a href={`mailto:${staff.email}`} className="text-blue-600 hover:underline break-all">{staff.email}</a></p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Board of Studies (BOS) Members</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-4 py-2 text-left font-semibold">Sr No</th>
                    <th className="px-4 py-2 text-left font-semibold">Name of Member with Designation</th>
                    <th className="px-4 py-2 text-left font-semibold">Category</th>
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
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Syllabus</h3>
            <div className="space-y-4">
              {syllabusData.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setExpandedPdf(expandedPdf === index ? null : index)}
                    className="w-full text-left p-3 font-semibold text-slate-800 hover:bg-slate-100 transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedPdf === index ? 'rotate-180' : ''}`} />
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
                    <h4 className="font-bold text-lg text-slate-800">{facility.name}</h4>
                  </div>
                  <p className="text-gray-700 font-semibold mb-2">Major Equipment:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    {facility.equipment.split(', ').map((item, idx) => (
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
                    <h4 className="font-bold text-lg text-slate-800 mb-3">{activity.name}</h4>
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
                    index === currentActivity ? 'bg-primary' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        );
      case "Magazine":
        return (
          <div className="bg-white rounded-2xl shadow-xl p-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Magazine</h3>
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
              The Basic Engineering Department boasts a rich legacy and tradition of academic excellence. Committed to nurturing well-rounded individuals, our department places a strong emphasis on holistic student development.
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
                        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${activeTab === tab.name ? 'text-white' : 'text-primary'}`} />
                        <span className="flex-1 text-sm md:text-base">{tab.name}</span>
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
                The First Year Engineering programme at Indira College is the cornerstone of a successful engineering career. It offers a unified curriculum that introduces students to the diverse fields of engineering, helping them make an informed and confident decision about their future specialization. Our focus is on building a strong conceptual base, fostering analytical abilities, and igniting a passion for innovation.
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
          <div id="programme-structure" className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col justify-between border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 leading-snug text-center">
              Enquire Now
            </h2>
            <ApplyForm />
          </div>
        </div>
      </div>
      <RecruitersSection />
      <CTASection />

      <EnquireNowProgramModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}