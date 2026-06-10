"use client";
import { useState, useEffect } from "react";
import BannerSlider from "./BannerSlider";
import Image from "next/image";
import { AlertTriangle, Bus, Clock, MapPin, Phone } from "lucide-react";

export default function Sports() {
  const [activeSection, setActiveSection] = useState("Sports");
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Image loading states
  const [marqueeLoaded, setMarqueeLoaded] = useState(false);
  const [achievementImagesLoaded, setAchievementImagesLoaded] = useState(Array(6).fill(false));
  const [highlightLoaded, setHighlightLoaded] = useState(false);
  const [gymImagesLoaded, setGymImagesLoaded] = useState(Array(9).fill(false));
  const [canteenImagesLoaded, setCanteenImagesLoaded] = useState(Array(6).fill(false));
  const [healthImagesLoaded, setHealthImagesLoaded] = useState(Array(4).fill(false));

  // Reset loading states when section changes
  useEffect(() => {
    if (activeSection === 'Sports') {
      setMarqueeLoaded(false);
      setAchievementImagesLoaded(Array(6).fill(false));
      setHighlightLoaded(false);
    } else if (activeSection === 'Gym') {
      setGymImagesLoaded(Array(9).fill(false));
    } else if (activeSection === 'Canteen') {
      setCanteenImagesLoaded(Array(6).fill(false));
    } else if (activeSection === 'Primary Health Centre') {
      setHealthImagesLoaded(Array(4).fill(false));
    }
  }, [activeSection]);

  // Library staff data
  const libraryStaff = [
    { name: "Dr. Darshna Desai", designation: "Coordinator", email: "desai.darshana@indiraicem.ac.in" },
    { name: "Mr. Narayan Jundre", designation: "Librarian & Head", email: "library@indiraicem.ac.in" },
    { name: "Mrs. Anita Chavan", designation: "Assistant Librarian", email: "anita.chavan@indiraicem.ac.in" },
    { name: "Mr. Sunil Phuge", designation: "Library Assistant", email: "sunil.phuge@indiraicem.ac.in" },
    { name: "Mr. Dinesh Deore", designation: "Library Assistant", email: "dinesh.deore@indiraicem.ac.in" },
    { name: "Mr. Arun Lad", designation: "Sr. Library Clerk", email: "arun.lad@indiraicem.ac.in" }
  ];

  // Library collection data
  const libraryCollection = {
    overview: [
      { label: "Total number of Books", value: "32948" },
      { label: "Total Number of Titles", value: "8331" },
      { label: "Print Journals", value: "30" },
      { label: "E-Journals", value: "62018" },
      { label: "NPTEL Video lecture", value: "600" },
      { label: "E-Books", value: "1050" },
      { label: "IRC CODE", value: "64" },
      { label: "IS CODE", value: "128" },
      { label: "Newspapers", value: "14" },
      { label: "CDs/DVDs", value: "1300" },
      { label: "Library Staff", value: "5" },
      { label: "Library Area", value: "575 SQM" }
    ],
    books: [
      { course: "APPLIED SCIENCE", titles: "404", volumes: "2277" },
      { course: "CIVIL", titles: "398", volumes: "1735" },
      { course: "COMPUTER", titles: "390", volumes: "3150" },
      { course: "E&TC", titles: "699", volumes: "3097" },
      { course: "IT", titles: "481", volumes: "1860" },
      { course: "MECH", titles: "995", volumes: "3741" },
      { course: "MECHANICAL SANDWICH", titles: "131", volumes: "425" },
      { course: "AI & DS", titles: "45", volumes: "188" },
      { course: "GENERAL BOOKS", titles: "927", volumes: "1012" },
      { course: "CEXAM", titles: "169", volumes: "245" },
      { course: "M.TECH( MECH)", titles: "115", volumes: "381" },
      { course: "M.TECH(COMP)", titles: "58", volumes: "429" },
      { course: "M.E(E&TC)", titles: "55", volumes: "159" },
      { course: "MBA", titles: "825", volumes: "4747" },
      { course: "MCA", titles: "1866", volumes: "8222" },
      { course: "BBA", titles: "42", volumes: "42" },
      { course: "BCA", titles: "47", volumes: "138" },
      { course: "DONATED BOOKS", titles: "684", volumes: "1100" }
    ],
    otherMaterials: [
      { item: "Journals", volumes: "30" },
      { item: "Magazines", volumes: "10" },
      { item: "Newspapers", volumes: "14" },
      { item: "E-Journal Subscription J-Gate (JST/JSSH)", volumes: "2" },
      { item: "CDs/DVDs (Free with Books & Magazines)", volumes: "1300" }
    ],
    newspapers: [
      { language: "English", count: "7" },
      { language: "Marathi", count: "6" },
      { language: "Hindi", count: "1" }
    ],
    timing: {
      regular: "Monday to Saturday: 09:00 am to 4:30 pm",
      readingRoom: "Reading Room (Exam): 09:00 am to 9:00 pm",
      closed: "Every Sunday (1st & 3rd Saturday & Public Holiday)"
    },
    services: [
      "Computerized Issue / Return",
      "Reference Service",
      "Newspaper Clipping",
      "Current Awareness Service",
      "Selective Dissemination of Information",
      "User Orientation / Information Literacy",
      "New Arrival Service"
    ],
    facilities: [
      "Reading Hall",
      "Book Bank",
      "Earn While Learn",
      "Reprographic, Scanning",
      "Softcopy of Syllabus and Question Papers",
      "OPAC",
      "Internet",
      "Library Website"
    ],
    policies: {
      general: [
        "All readers are required to maintain discipline in the library.",
        "Smoking, eating, sleeping and talking loudly are strictly prohibited in the Library.",
        "Seek permission of the library staff before entering the stack room.",
        "The patron should submit his/her Identity card at the counter while entering the library for any purpose.",
        "The Library remains open on MON – SAT: 09:00 AM – 04:30 PM.",
        "Changes, if any, in the timings will be notified whenever necessary.",
        "Every person who enters the library will sign the visitor register.",
        "Deposit your personal belongings at the property counter.",
        "Switch off mobile phones or keep on silent mode in the library premises.",
        "Follow instructions given by the librarian or the staff at the counter."
      ],
      borrowing: [
        "Books will be issued for a period of 30 days at first instance.",
        "Four books to PG students and three books to UG students (per month) will be issued against their I-Card.",
        "Check the book at the time of issuing. In case of defect or damage please inform the library staff.",
        "Return the issued book on or before the due date.",
        "Renewals are compulsory before the due date otherwise fine will be charged at Rs. 5/- per day.",
        "Reference books/Journals/Magazines & project reports will not be issued outside the library.",
        "In case of loss or damage of book, replacement of book has to be made by the user."
      ]
    },
    eContent: [
      { database: "Science-Direct", url: "http://www.sciencedirect.com" },
      { database: "FTP", url: "ftp://172.16.32.40" },
      { database: "NDL (National Digital Library of India)", url: "https://ndl.iitkgp.ac.in" },
      { database: "DELNET (Developing Library Network)", url: "http://www.delnet.in" },
      { database: "J-gate", url: "https://www.jgatenext.com" },
      { database: "Question Papers", url: "https://indiraicemac-my.sharepoint.com/personal/exam_indiraicem_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fexam%5Findiraicem%5Fac%5Fin%2FDocuments%2FAutonomous%20ENDSEM%20Question%20papers%20ICEM&ga=1", displayText: "Autonomous ENDSEM Question Papers ICEM" }
    ]
  };

  // Transport data
  const transportData = {
    contact: {
      telephone: "02114-661661",
      mobile: "+91 9158302525"
    },
    notice:
      "All are informed to reach the bus top 5 min prior to scheduled time, Bus will not stop for any late comers",
    routes: [
      {
        routeNo: "Route No-1",
        title: "Dighi Bhosari to ICEM",
        stops: [
          { srNo: "1", seatingPoint: "Datta Nagar Chowk Dhigi", timing: "7:35.am" },
          { srNo: "2", seatingPoint: "Magzin Chowk", timing: "7:37.am" },
          { srNo: "3", seatingPoint: "Shashtri Chowk", timing: "7:41.am" },
          { srNo: "4", seatingPoint: "PMT Bus Stop Bhosari", timing: "7:44.am" },
          { srNo: "5", seatingPoint: "Dhawade Wasti Chowk", timing: "7:46.am" },
          { srNo: "6", seatingPoint: "Panjar Pol", timing: "7:48.am" },
          { srNo: "7", seatingPoint: "Godown Chowk", timing: "7:49.am" },
          { srNo: "8", seatingPoint: "Vikas Sawant Chowk", timing: "7:50.am" },
          { srNo: "9", seatingPoint: "Spicen City Mall Chook", timing: "7:51.am" },
          { srNo: "10", seatingPoint: "Kranti Chowk (Jaguar Co. Bridge)", timing: "7:53.am" },
          { srNo: "11", seatingPoint: "Jadhavi Wadi Chowk", timing: "7:54.am" },
          { srNo: "12", seatingPoint: "Old RTO Chowk (HP Petrol Pump)", timing: "7:57.am" },
          { srNo: "13", seatingPoint: "Gharkul Chowk", timing: "8:00.am" },
          { srNo: "14", seatingPoint: "Sane Chowk", timing: "8:03.am" },
          { srNo: "15", seatingPoint: "Kasturi Market", timing: "8:04.am" },
          { srNo: "16", seatingPoint: "Thermax Chowk", timing: "8:10.am" },
          { srNo: "17", seatingPoint: "Bajaj Gate Chowk ( Gopinath Munde Chowk)", timing: "8:13.am" },
          { srNo: "18", seatingPoint: "Triveni Chowk", timing: "8:15.am" },
          { srNo: "19", seatingPoint: "Ankush Chowk", timing: "8:18.am" },
          { srNo: "20", seatingPoint: "Bhakti Shakti Chowk", timing: "8:25.am" },
          { srNo: "21", seatingPoint: "Dehugaon Phata", timing: "8:30.am" },
          { srNo: "22", seatingPoint: "Dehuraod Birdge", timing: "8:35.am" },
          { srNo: "23", seatingPoint: "Dehuraod Police Station", timing: "8:40.am" },
          { srNo: "24", seatingPoint: "Somatnephata", timing: "8:45.am" },
          { srNo: "", seatingPoint: "ICEM", timing: "9:00.am" },
        ],
      },
      {
        routeNo: "Route No-2",
        title: "Khadki to ICEM",
        stops: [
          { srNo: "1", seatingPoint: "Khadki Police Station", timing: "7:35.am" },
          { srNo: "2", seatingPoint: "Khadki  Railway Station", timing: "7:43.am" },
          { srNo: "3", seatingPoint: "Bopadi", timing: "7:45.am" },
          { srNo: "4", seatingPoint: "Dapodi", timing: "7:50.am" },
          { srNo: "5", seatingPoint: "Fugewadi", timing: "7:51.am" },
          { srNo: "6", seatingPoint: "Kasarwadi", timing: "7:55.am" },
          { srNo: "7", seatingPoint: "Nashik Phata", timing: "7:57.am" },
          { srNo: "8", seatingPoint: "Vallabh Nagar", timing: "8:00.am" },
          { srNo: "9", seatingPoint: "Sant Tukaram Nagar", timing: "8:05.am" },
          { srNo: "10", seatingPoint: "Kharalwadi", timing: "8:10.am" },
          { srNo: "11", seatingPoint: "Pimpri Chowk", timing: "8:11.am" },
          { srNo: "12", seatingPoint: "Finolex Chowk", timing: "8:12.am" },
          { srNo: "13", seatingPoint: "Empire Estate", timing: "8:13.am" },
          { srNo: "14", seatingPoint: "Chinchwad Chowk", timing: "8:15.am" },
          { srNo: "15", seatingPoint: "Kalbhor Nagar", timing: "8:17.am" },
          { srNo: "16", seatingPoint: "Khandoba Mandir", timing: "8:19.am" },
          { srNo: "17", seatingPoint: "Bajai Company", timing: "8:23.am" },
          { srNo: "18", seatingPoint: "Nigdi", timing: "8:25.am" },
          { srNo: "19", seatingPoint: "Bhakti Shakti Chowk", timing: "8:30.am" },
          { srNo: "20", seatingPoint: "Dehugaon Phata", timing: "8:40.am" },
          { srNo: "21", seatingPoint: "Dehuraod Birdge", timing: "8:42.am" },
          { srNo: "22", seatingPoint: "Dehuraod Police Station", timing: "8:45.am" },
          { srNo: "23", seatingPoint: "Somatnephata", timing: "8:50.am" },
          { srNo: "", seatingPoint: "ICEM", timing: "9:00.am" },
        ],
      },
      {
        routeNo: "Route No-3",
        title: "Old Sangvi to ICEM",
        stops: [
          { srNo: "1", seatingPoint: "Old Sangvi Bus Stop", timing: "7:40.am" },
          { srNo: "2", seatingPoint: "Bank of Maharashtra", timing: "7:41.am" },
          { srNo: "3", seatingPoint: "Sai Chowk", timing: "7:42.am" },
          { srNo: "4", seatingPoint: "Krushna Chowk", timing: "7:43.am" },
          { srNo: "5", seatingPoint: "Katepuram Chowk", timing: "7:44.am" },
          { srNo: "6", seatingPoint: "Daynasor Garden", timing: "7:45.am" },
          { srNo: "7", seatingPoint: "Shrushtri Chowk", timing: "7:46.am" },
          { srNo: "8", seatingPoint: "Kalpatru Estate Chowk", timing: "7:48.am" },
          { srNo: "9", seatingPoint: "Sudarshan Chowk", timing: "7:49.am" },
          { srNo: "10", seatingPoint: "Swaraj Hotel", timing: "7:50.am" },
          { srNo: "11", seatingPoint: "Kate Petrol Pump", timing: "7:51.am" },
          { srNo: "12", seatingPoint: "Mahadev Mindar", timing: "7:53.am" },
          { srNo: "13", seatingPoint: "Rahatanigaon Chowk", timing: "7:55.am" },
          { srNo: "14", seatingPoint: "Godambe Chowk", timing: "7:56.am" },
          { srNo: "15", seatingPoint: "Nakhate Chowk", timing: "7:57.am" },
          { srNo: "16", seatingPoint: "Rahatani Phata", timing: "7:58.am" },
          { srNo: "17", seatingPoint: "Kunal Hotel Chowk", timing: "8:00.am" },
          { srNo: "18", seatingPoint: "MM College", timing: "8:03.am" },
          { srNo: "19", seatingPoint: "Sukhi Bhavan", timing: "8:04.am" },
          { srNo: "20", seatingPoint: "Morya Hospital", timing: "8:05.am" },
          { srNo: "21", seatingPoint: "Chafekar Chowk", timing: "8:07.am" },
          { srNo: "22", seatingPoint: "Chinchwade Nagar Corner", timing: "8:08.am" },
          { srNo: "23", seatingPoint: "Triveni Hospital", timing: "8:10.am" },
          { srNo: "24", seatingPoint: "Chintamani Chowk", timing: "8:11.am" },
          { srNo: "25", seatingPoint: "Bijali Nagar Bridge", timing: "8:12.am" },
          { srNo: "26", seatingPoint: "Sambhaji Chowk", timing: "8:14.am" },
          { srNo: "27", seatingPoint: "Bhel Chowk", timing: "8:15.am" },
          { srNo: "28", seatingPoint: "Kach Ghar Chowk", timing: "8:16.am" },
          { srNo: "29", seatingPoint: "Bhakti Shakti Chowk", timing: "8:18.am" },
          { srNo: "30", seatingPoint: "Dehugaon Phata", timing: "8:40.am" },
          { srNo: "31", seatingPoint: "Dehuraod Birdge", timing: "8:42.am" },
          { srNo: "32", seatingPoint: "Dehuraod Police Station", timing: "8:45.am" },
          { srNo: "33", seatingPoint: "Somatnephata", timing: "8:50.am" },
          { srNo: "", seatingPoint: "ICEM", timing: "9:00.am" },
        ],
      },
      {
        routeNo: "Route No-4",
        title: "Shivajinagar to ICEM",
        stops: [
          { srNo: "1", seatingPoint: "Shivajinagar", timing: "7:35am" },
          { srNo: "2", seatingPoint: "Renghill Corner", timing: "7:43.am" },
          { srNo: "3", seatingPoint: "University Chowk", timing: "7:45.am" },
          { srNo: "4", seatingPoint: "Breman Chowk", timing: "7:50.am" },
          { srNo: "5", seatingPoint: "Aundh", timing: "7:51.am" },
          { srNo: "6", seatingPoint: "Sangvi Phata", timing: "7:55.am" },
          { srNo: "7", seatingPoint: "Rakshak Society", timing: "7:57.am" },
          { srNo: "8", seatingPoint: "Vishal Nagar", timing: "8:00.am" },
          { srNo: "9", seatingPoint: "Kaspate Chowk", timing: "8:05.am" },
          { srNo: "10", seatingPoint: "Jajtap dairy", timing: "8:10.am" },
          { srNo: "11", seatingPoint: "Park Street", timing: "8:11.am" },
          { srNo: "12", seatingPoint: "Kalewadi Phata", timing: "8:12.am" },
          { srNo: "13", seatingPoint: "16 No Bus Stop", timing: "8:13.am" },
          { srNo: "14", seatingPoint: "Dange Chowk", timing: "8:15.am" },
          { srNo: "15", seatingPoint: "Tathwade", timing: "8:17.am" },
          { srNo: "16", seatingPoint: "Punawale", timing: "8:19.am" },
          { srNo: "17", seatingPoint: "Ravet Pumping Station", timing: "8:23.am" },
          { srNo: "18", seatingPoint: "Ravet CNG Pump", timing: "8:25.am" },
          { srNo: "19", seatingPoint: "Kiwale Bus Turminal", timing: "8:30.am" },
          { srNo: "20", seatingPoint: "Shinde Petrol Pump", timing: "8:40.am" },
          { srNo: "21", seatingPoint: "Mamuradai", timing: "8:42.am" },
          { srNo: "22", seatingPoint: "Dehuraod Police Station", timing: "8:45.am" },
          { srNo: "23", seatingPoint: "Somatnephata", timing: "8:50.am" },
          { srNo: "", seatingPoint: "ICEM", timing: "9:00.am" },
        ],
      },
      {
        routeNo: "Route No-5",
        title: "Katraj to ICEM",
        stops: [
          { srNo: "1", seatingPoint: "Katraj Chowk", timing: "7:30.am" },
          { srNo: "2", seatingPoint: "Ambegaon", timing: "7:35.am" },
          { srNo: "3", seatingPoint: "Navale  Bridge", timing: "7:38.am" },
          { srNo: "4", seatingPoint: "Vadgaon Bridge", timing: "7:40.am" },
          { srNo: "5", seatingPoint: "Warje Bridge", timing: "7:45.am" },
          { srNo: "6", seatingPoint: "Chandani Chowk", timing: "7:50.am" },
          { srNo: "7", seatingPoint: "Bavdhan", timing: "7:55.am" },
          { srNo: "8", seatingPoint: "Pashan - Sus Bridge", timing: "8:00.am" },
          { srNo: "9", seatingPoint: "Balewadi -Orchard Hotel", timing: "8:15.am" },
          { srNo: "10", seatingPoint: "Bhujabal Chowk", timing: "8:20.am" },
          { srNo: "11", seatingPoint: "Indira College Wakad", timing: "8:25.am" },
          { srNo: "12", seatingPoint: "Tathwade", timing: "8:27.am" },
          { srNo: "13", seatingPoint: "Punawale", timing: "8:29.am" },
          { srNo: "14", seatingPoint: "Ravet", timing: "8:30.am" },
          { srNo: "15", seatingPoint: "Shinde Petrol Pump", timing: "8:35.am" },
          { srNo: "16", seatingPoint: "Mamurdi", timing: "8:37.am" },
          { srNo: "17", seatingPoint: "Dehuraod Police Station", timing: "8:40.am" },
          { srNo: "18", seatingPoint: "Somatnephata", timing: "8:50.am" },
          { srNo: "", seatingPoint: "ICEM", timing: "9:00.am" },
        ],
      },
      {
        routeNo: "Route No-6",
        title: "Talegaon to ICEM",
        stops: [
          { srNo: "1", seatingPoint: "CRP Camp", timing: "8:00.am" },
          { srNo: "2", seatingPoint: "Vadgaon Phata", timing: "8:05.am" },
          { srNo: "3", seatingPoint: "Paisa Fund", timing: "8:08.am" },
          { srNo: "4", seatingPoint: "Indrayni College", timing: "8:15.am" },
          { srNo: "5", seatingPoint: "Talegaon station", timing: "8:20.am" },
          { srNo: "6", seatingPoint: "BSNL", timing: "8:33.am" },
          { srNo: "7", seatingPoint: "Nagar Parishad", timing: "8:35.am" },
          { srNo: "8", seatingPoint: "Jijamata Chowk", timing: "8:37.am" },
          { srNo: "9", seatingPoint: "Bhandari Hospital", timing: "8:40.am" },
          { srNo: "10", seatingPoint: "Limb Phata", timing: "8:45.am" },
          { srNo: "11", seatingPoint: "Somatnephata", timing: "8:50.am" },
          { srNo: "", seatingPoint: "ICEM", timing: "9:00.am" },
        ],
      },
    ],
  };

  // Gym data
  const gymData = {
    equipment: [
      "Bicep Machine",
      "Multifunctional 5 Station Machine",
      "Benches",
      "Bars & Plates",
      "Cardio Station (Treadmill, Cycle, Cross Trainer)",
      "Chest Press Machine",
      "Calf Raises Machine",
      "Dumbbells",
      "Leg Press Machine",
      "Leg Extension Machine",
      "Leg Curl Machine",
      "Lat Pull Down Machine",
      "Shoulder Press Machine",
      "Squat Machine",
      "Chest Press Machine",
      "Cross Trainer",
      "Leg Press Machine",
      "Leg Curl Machine",
      "Single Bar",
      "Twister"
    ],
    contact: {
      name: "Mr. Atul Gore",
      designation: "Physical Director",
      telephone: "02114-661599"
    }
  };

  // Primary Health Centre data
  const healthCentreData = {
    description: "Indira Primary Health Centre is an In-house Medical Clinic Facility for Students and Staffs of ICEM campus. Medical Clinic is equipped with equipment needed for primary health management.",
    services: [
      "Medical Consultation",
      "Gynaecological Consultation",
      "Counselling for Students",
      "First Aid",
      "Nebulization",
      "Tetanus Vaccination",
      "Free Medicines"
    ]
  };

  // Hostel data
  const hostelData = {
    overview: {
      description: "ICEM is having Boys & Girls hostel facility with spacious rooms.",
      capacity: {
        girls: "168",
        boys: "126"
      },
      roomFacilities: [
        "Beds",
        "Study table",
        "Chairs",
        "Cupboard facility"
      ]
    },
    managementTeam: [
      { name: "Mr. Dattatray Ovhal", designation: "Boys Hostel Warden", contact: "8788562431", email: "dattatraya.ovhal@indiraicem.ac.in" },
      { name: "Ms. Manisha Dhiwar", designation: "Girls Hostel Warden", contact: "9588475368", email: "Manisha.dhiwar@indiraicem.ac.in" },
      { name: "Ms. Sapna Dahake", designation: "Girls Hostel Warden", contact: "9699913109", email: "sapnadahake@indiraicem.ac.in" }
    ],
    messTeam: [
      { name: "Mr. Vikas Kumar Shetty – M/s Little Chef Canteen", designation: "Canteen Owner", contact: "9665869000", email: "" },
      { name: "Mr. Prajwal Shetty – M/s Little Chef Canteen", designation: "Canteen In-charge for Mess Fees", contact: "8310972775", email: "" }
    ],
    facilities: [
      "Free College Ambulance service 24×7 for hostel students.",
      "Washing machine Facility.",
      "Water coolers for drinking water on each floor.",
      "Separate Common TV room with LCD facility at girls & boys hostel.",
      "CCTV cameras at all major points at girls & boys hostel.",
      "Wi-Fi facility.",
      "DG power backup – 24×7.",
      "Housekeeping & daily cleaning of all rooms (8 am to 4 pm).",
      "Hot water facility in all rooms (6 am to 9 am).",
      "Sanitary pad disposal machine in girls hostel.",
      "Facility of Easy dry wash system in all rooms.",
      "Facility of Security Guards – 24×7.",
      "Facility of warden in hostel.",
      "Facility of Pest control – Monthly.",
      "Facility of Separate sports room – carom & table tennis.",
      "Common Gym facility for hostel students.",
      "Daily attendance & roll call register is maintained.",
      "Health & Accident Insurance coverage for all hostel students.",
      "Hostel committee is operational at hostel.",
      "Mess facility for all hostel students."
    ],
    timings: [
      "Hostel entry time: 7:00 PM",
      "Campus Gate closing time: 7:15 PM",
      "All students should be present in their respective rooms before wardens visit for daily night attendance i.e. by 9:45 PM sharp.",
      "Late Entry NOT ALLOWED. (In case of valid reason, parents' written message/mail must be sent in advance. Only 2 emergency late entries permitted per month.)",
      "Admission will be cancelled if found frequently late or indisciplined.",
      "Students should maintain entries in 'In & Out' registers available at the Main Security Gate."
    ],
    messTimings: [
      "Breakfast: 7:45 am – 9:15 am",
      "Lunch: 1:00 pm – 2:30 pm",
      "Evening Snacks: 5:00 pm – 6:00 pm",
      "Dinner: 8:00 pm – 9:00 pm"
    ],
    documents: [
      "Indemnity Bond (Rs. 100/- Stamp paper with Notary) (format with warden).",
      "Medical Fitness Certificate on Doctor's Letterhead stamped & signed. (If any medical history exists, it must be informed to warden.)",
      "Copy of Student's Aadhar Card.",
      "2 Passport size photos.",
      "Undertaking by Students & Parents (at time of hostel entry).",
      "Declarations (at the time of hostel entry).",
      "Copy of hostel & mess fees receipts.",
      "Two-wheeler permission form."
    ],
    cancellationRules: [
      {
        title: "Cancel Seat Before Hostel Accommodation Within 20 Days",
        steps: [
          "Inform Institute Coordinator → Fill Hostel Cancellation Form (PDF with warden) → Get Director/HOD signature → Submit to warden within 20 days from date of registration.",
          "(Refund amount calculated as per management policy.)"
        ]
      },
      {
        title: "Cancel Seat Before Hostel Accommodation Exceeding 20 Days",
        steps: [
          "If student delays more than 20 days → Fill Cancellation Form → Get Director/HOD signature → Submit to warden.",
          "(No refund after 20 days.)"
        ]
      },
      {
        title: "Cancel Seat After Taking Hostel Accommodation",
        steps: [
          "Step 1: Inform Institute Coordinator → Fill Cancellation Form → Get Director/HOD signature → Submit to warden.",
          "(No refund policy applicable.)",
          "Step 2: Fill Hostel Leaving Form at authorized signatures → Submit at Security Gate to take luggage out.",
          "(No refund policy applicable.)"
        ]
      }
    ],
    securityDeposit: [
      "At the end of academic session, Refund Form (signed by warden) + Security deposit of Rs. 5000/- refunded after deducting insurance amount.",
      "Keep original receipts safely for refund process."
    ],
    messInstructions: [
      "Hostel student must pay full mess fees for academic year in advance.",
      "Mess food services are mandatory for hostel students.",
      "Students should not waste food or share food with outsiders.",
      "Timings must be strictly followed.",
      "Complaints related to mess must be reported immediately to Canteen In-charge."
    ],
    medicalAssistance: [
      "It is mandatory for all hostel students to submit Medical Fitness Form.",
      "If a student has any previous medical history, it must be informed during admission.",
      "For any medical assistance, contact warden immediately (First Aid Box available).",
      "In case of emergency – Warden & Hostel Team will shift student to nearby hospital in college ambulance.",
      "Parents & Guardians will be connected for updates & expenses.",
      "Medical Fitness Certificate must be submitted after vacation/long leave."
    ]
  };

  // Sports-specific data
 const achievements = [
    {
      title: "Table Tennis Runners-Up",
      description:
        "The ICEM Parandwadi Girls Team clinched the Runner-up position in the SPPU Intercollegiate Table Tennis Tournament, honoured by national player Mr. Rajat Kadam.",
        img: "/sports/tabletennis.webp",
    },
    {
      title: "National Gold Medal (Athletics)",
      description:
        "Mr. Dhanaraj Raut (B.E. Civil) brought pride to the institute and state by winning a Gold Medal while representing the Maharashtra Team at the Senior National Championship in Karnataka.",
        img: "/sports/arjunaward.webp",
    },
    {
      title: "Gold Medal in Boxing",
      description:
        "Ms. Kartikee Salve (T.E. AI-DS) demonstrated exceptional skill to secure a Gold Medal in Boxing, earning a qualification for the SPPU Interzonal round.",
        img: "/sports/boxing.webp",
    },
    {
      title: "Bronze Medal in Fencing",
      description:
        "Our talented fencer, Ms. Surbhi Jadhav, showcased her prowess by winning a Bronze Medal and qualifying for the prestigious SPPU Interzonal Competition.",
        img: "/sports/fencing.webp",
    },
    {
      title: "Water Polo Runners-Up",
      description:
        "The ICEM Water Polo Team secured the Runner-up trophy at the SPPU Intercollegiate tournament, with team members Mr. Dhanraj Raut and Mr. Vallabh Lawate selected for the Pune District Team.",
        img: "/sports/water-polo.webp",
    },
    {
      title: "Mallkhambh Qualification",
      description:
        "Mr. Deepak Yadav (S.E. Computer) excelled in his sport, qualifying to represent ICEM at the SPPU Interzonal Mallkhambh Competition.",
        img: "/sports/malkhamb.webp",
    },
  ];

const highlight = {
    title: "Arjuna Award & Alumnus Felicitation",
    description1:
       "In a moment of immense pride, our alumnus Mr. Sachin Khilari was honored with the prestigious Arjuna Award by the Honorable President of India, Smt. Droupadi Murmu.",
    description2:
      "The institute also proudly felicitated Mr. Sachin Khilari (Mechanical Engineering, Batch 2013), a Paralympic Silver Medallist in Men's Shot Put F46, during the Induction Programme 2024-25.",
      img: "/sports/sachin.avif",
  };

 

  return (
    <div className="w-full bg-white text-gray-800">
      <BannerSlider activeSection={activeSection}/>
      <div className="max-w-7xl mx-auto py-2 md:py-4 px-4 md:px-6 space-y-6 md:space-y-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-2 md:mb-4">
          {["Sports", "Library", "Transport", "Canteen", "Gym", "Hostel", "Primary Health Centre"].map((facility) => (
            <button
              key={facility}
              onClick={() => {
                setActiveSection(facility);
                setActiveFAQ(null);
              }}
              className={`px-2 py-1 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold ${
                activeSection === facility
                  ? "bg-secondary text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              {facility}
            </button>
          ))}
        </div>

        {/* Content Section */}
        {activeSection === "Sports" ? (
          // Sports-specific content
          <div className="max-w-full mx-auto px-1 md:px-6 py-1 md:py-10">
            {/* Main Content */}
            <div className="w-full bg-white p-4 md:p-6 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-semibold text-secondary text-center mb-4 md:mb-6">
                 Sports & Recreation
              </h2>

              <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
                At <b>ICEM</b>, we believe in the holistic development of our
                students, and sports play a vital role in shaping character,
                building teamwork, and promoting physical fitness.
              </p>

              <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
                Our institute provides state-of-the-art sports facilities and
                encourages students to participate in various indoor and outdoor
                sports activities at university, state, and national levels.
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-secondary mb-2 md:mb-4">
                Sports Facilities
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 md:mb-8">
                <li>Well-equipped gymnasium with modern equipment</li>
                <li>Indoor sports complex for table tennis, chess, and carrom</li>
                <li>Outdoor playground for cricket, football, and athletics</li>
                <li>Basketball and volleyball courts</li>
              </ul>

              {/* Sports Infrastructure Marquee */}
              <h2 className="text-xl md:text-2xl font-bold text-secondary mt-5 md:mt-10 mb-4 md:mb-6">
                Sports Infrastructure
              </h2>

              {/* Single Marquee Image */}
              <div className="relative w-full overflow-hidden h-[50vh] mb-6 md:mb-12 ">
                <div className="flex w-[200%] animate-smoothScroll h-full">
                  {/* Image 1 */}
                  <div className="relative w-full h-full flex-shrink-0">
                    {!marqueeLoaded && <div className="absolute inset-0 shimmer z-10"></div>}
                    <Image
                      src="/sports/sportsmarque.avif"
                      alt="Sports Infrastructure"
                      fill
                      className="object-cover"
                      unoptimized={true}
                      priority
                      onLoad={() => setMarqueeLoaded(true)}
                    />
                  </div>

                  {/* Image 2 */}
                  <div className="relative w-full h-full flex-shrink-0">
                    {!marqueeLoaded && <div className="absolute inset-0 shimmer z-10"></div>}
                    <Image
                      src="/sports/sportsmarque.avif"
                      alt="Sports Infrastructure duplicate"
                      fill
                      className="object-cover"
                      unoptimized={true}
                      priority
                      onLoad={() => setMarqueeLoaded(true)}
                    />
                  </div>
                </div>
              </div>

              {/* Sports Achievements Section */}
              <h3 className="text-lg md:text-2xl font-semibold text-secondary mb-4 md:mb-6">
                Sports Achievements
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-8">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-4 md:p-6 flex flex-col"
                  >
                    {/* Image Placeholder */}
                    <div className=" relative w-full h-40 bg-gray-200 rounded-sm flex items-center justify-center text-gray-500 text-sm mb-2 md:mb-4">
                      {!achievementImagesLoaded[index] && <div className="absolute inset-0 shimmer rounded-sm z-10"></div>}
                      <Image
                        src={item.img || "/sports/tabletennis.jpg"}
                        alt="Achievement Icon"
                        fill
                        className="object-cover rounded-sm"
                        unoptimized={true}
                        onLoad={() => {
                          setAchievementImagesLoaded(prev => {
                            const newArr = [...prev];
                            newArr[index] = true;
                            return newArr;
                          });
                        }}
                      />
                    </div>

                    {/* Text */}
                    <h4 className="text-base md:text-lg font-semibold text-secondary mb-1 md:mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Special Highlight Section */}
              <div className="sm:mt-18 sm:p-0 bg-secondary-50 rounded-xl ">
                {/* Highlight Section */}
                <div className="relative border-2 border-gray-200 rounded-2xl p-2 sm:p-8 sm:pl-120 shadow-md  flex flex-col sm:flex-row  items-center gap-3">
                  {/* Floating Image - Desktop */}
                  <div className="hidden sm:block absolute -left-3 top-1/3 -translate-y-1/2 z-20">
                    {!highlightLoaded && <div className="absolute inset-0 shimmer z-10"></div>}
                    <Image
                      src="/sports/sachin.avif"
                      alt="Arjuna Award Winner"
                      height={440}
                      width={460}
                      className="object-contain drop-shadow-2xl select-none"
                      unoptimized={true}
                      onLoad={() => setHighlightLoaded(true)}
                    />
                  </div>

                  {/* Floating Image - Mobile (inline instead of absolute) */}
                  <div className="sm:hidden flex justify-center mb-4">
                    {!highlightLoaded && <div className="absolute inset-0 shimmer z-10"></div>}
                    <Image
                      src="/sports/sachin.avif"
                      alt="Arjuna Award Winner"
                      height={300}
                      width={300}
                      className="object-contain drop-shadow-2xl select-none"
                      unoptimized
                      onLoad={() => setHighlightLoaded(true)}
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-2xl font-bold text-secondary mb-3">
                      {highlight.title}
                    </h3>

                    <p className="text-gray-800 leading-relaxed mb-3">
                      {highlight.description1}
                    </p>

                    <p className="text-gray-800 leading-relaxed">
                      {highlight.description2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Library" ? (
          // Library-specific content
          <div className="max-w-full mx-auto px-1 md:px-6 py-1 md:py-10 space-y-6 md:space-y-12">
            {/* About Us Tab Content */}
            <div className="w-full bg-white p-4 md:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-4 md:mb-8 text-center">About Library</h2>
              
              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
                <div className="bg-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2 md:mb-4">Library Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide comprehensive resources and services in support of the research, teaching, and learning to its Faculty Members, Students, Researchers and Support Staff.
                  </p>
                </div>
                <div className="bg-green-50 p-4 md:p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2 md:mb-4">Library Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mr. Shankar Rao Wakalkar Library (ICEM Central Library) will be recognized as leading library by informing and inspiring its user making them all more resilient, more knowledgeable, more connected and more successful.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2 md:mt-3">
                    The Library continues to embrace change and align itself to thrive on diversity, to support professional growth and opportunity, and to reward flexibility and innovation.
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Introduction</h3>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
                    The college library is well equipped with large number of textbook, reference books, periodicals, journals and newspapers. The number of books in the library at present is about 32948. The library receives 30 journals and 10 magazines in specialized areas.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The library consists of reading hall, internet browsing center, reference section, open access periodical and research library. The library has introduced computerized PVC I- card system for the students as well as staff. The library is automated with Koha Library Software(Version-23.11.06) to ease its clientele at various levels while in the library.
                  </p>
                </div>
              </div>

              {/* Library Information */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Library Information</h3>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Mr. Shankar Rao Wakalkar Library, established in the year 2007, is an invaluable resource for students, researchers and faculties of management and engineering. The college library is well equipped with large number of textbook, reference books, periodicals, journals and newspapers. The number of books in the library at present is about 32948. The library receives 30 journals and 10 magazines in specialized areas. The library consists of reading hall, internet browsing center, reference section, open access periodical and research library. The library has introduced computerized PVC I- card system for the students as well as staff. The library is automated with Koha Library Software (Version-23.11.06) to ease its clientele at various levels while in the library.
                  </p>
                </div>
              </div>

              {/* ICEM LIBRARY OPAC */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">ICEM Library OPAC</h3>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Access our Online Public Access Catalogue (OPAC) to search and browse our library resources: <a href="https://indiralibrary.ourlib.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">https://indiralibrary.ourlib.in</a>
                  </p>
                </div>
              </div>

              {/* Staff Information */}
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Staff Information</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="p-2 md:p-4 text-left">Name</th>
                        <th className="p-2 md:p-4 text-left">Designation</th>
                        <th className="p-2 md:p-4 text-left">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libraryStaff.map((staff, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-2 md:p-4 border-b border-gray-200">{staff.name}</td>
                          <td className="p-2 md:p-4 border-b border-gray-200">{staff.designation}</td>
                          <td className="p-2 md:p-4 border-b border-gray-200 text-blue-600">{staff.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Library Resources Tab Content */}
            <div className="w-full bg-white p-4 md:p-8 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Library Resources</h2>
              
              {/* Collection Overview */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Collection</h3>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
                  <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
                    The library has developed an unlikely collection of over 32196 books, 1300 CD's/ DVD's and over 87 hard copy journals and magazines in last five years. The same tends to grow at a very expediential rate in coming years.
                  </p>
                </div>

                <h4 className="text-base md:text-xl font-bold text-secondary mb-2 md:mb-4">Library At A Glance</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-8">
                  {libraryCollection.overview.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-2 md:p-4 shadow-sm">
                      <div className="text-lg font-semibold text-secondary">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Books Collection</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="p-2 md:p-4 text-left">Sr. No</th>
                        <th className="p-2 md:p-4 text-left">Course</th>
                        <th className="p-2 md:p-4 text-left">Total No Of Titles</th>
                        <th className="p-2 md:p-4 text-left">Total No. Of Volumes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libraryCollection.books.map((book, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-2 md:p-4 border-b border-gray-200">{index + 1}</td>
                          <td className="p-2 md:p-4 border-b border-gray-200">{book.course}</td>
                          <td className="p-2 md:p-4 border-b border-gray-200">{book.titles}</td>
                          <td className="p-2 md:p-4 border-b border-gray-200">{book.volumes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other Reading Materials */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Other Reading Materials</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto mb-4 md:mb-6">
                  <table className="w-full min-w-max">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="p-2 md:p-4 text-left">Sr. No</th>
                        <th className="p-2 md:p-4 text-left">Items</th>
                        <th className="p-2 md:p-4 text-left">Volumes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libraryCollection.otherMaterials.map((material, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-2 md:p-4 border-b border-gray-200">{index + 1}</td>
                          <td className="p-2 md:p-4 border-b border-gray-200">{material.item}</td>
                          <td className="p-2 md:p-4 border-b border-gray-200">{material.volumes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="text-base md:text-xl font-bold text-secondary mb-4">Newspapers Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {libraryCollection.newspapers.map((paper, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-2 md:p-4 shadow-sm">
                      <div className="text-lg font-semibold text-secondary">{paper.count}</div>
                      <div className="text-sm text-gray-600">{paper.language} Newspapers</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timing Tab Content */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Library Timing</h2>
              
              <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center">
                    <h3 className="text-lg md:text-2xl font-bold text-green-600 mb-4">Working Hours</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-lg font-semibold text-gray-800">{libraryCollection.timing.regular}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-lg font-semibold text-gray-800">{libraryCollection.timing.readingRoom}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg md:text-2xl font-bold text-red-600 mb-4">Library Closed On</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <p className="text-lg font-semibold text-gray-800">{libraryCollection.timing.closed}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Tab Content */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Library Services & Facilities</h2>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">Library Services</h3>
                  <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                    <ul className="space-y-3">
                      {libraryCollection.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-3">✓</span>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">Facilities</h3>
                  <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                    <ul className="space-y-3">
                      {libraryCollection.facilities.map((facility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-3">✓</span>
                          <span className="text-gray-700">{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies Tab Content */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Library Policies</h2>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">General Policies</h3>
                  <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                    <ul className="space-y-3">
                      {libraryCollection.policies.general.map((policy, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-3">•</span>
                          <span className="text-gray-700">{policy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">Borrowing Policies</h3>
                  <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                    <ul className="space-y-3">
                      {libraryCollection.policies.borrowing.map((policy, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-500 mr-3">•</span>
                          <span className="text-gray-700">{policy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* E-Content Tab Content */}
            <div className="w-full bg-white p-4 md:p-8 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Electronic Databases</h2>
              
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Keeping in view the importance of research in the academic sector, the library has provided access to various electronic journal databases. These databases cater to the research needs of its patrons.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="p-2 md:p-4 text-left">Sr. No</th>
                      <th className="p-2 md:p-4 text-left">Database / OPAC / FTP / NDL / DELNET / WEB PORTAL</th>
                      <th className="p-2 md:p-4 text-left">URL's</th>
                    </tr>
                  </thead>
                  <tbody>
                    {libraryCollection.eContent.map((content, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-2 md:p-4 border-b border-gray-200">{index + 1}</td>
                        <td className="p-2 md:p-4 border-b border-gray-200 font-medium">{content.database}</td>
                        <td className="p-2 md:p-4 border-b border-gray-200 text-blue-600 break-all">
                          {content.url.startsWith('http') ? (
                            <a href={content.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {content.displayText || content.url}
                            </a>
                          ) : (
                            content.url
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : activeSection === "Transport" ? (
          // Transport-specific content
          <div className="max-w-full mx-auto px-0 md:px-6 py-0 md:py-10">
            <div className="w-full bg-white p-2 md:p-6 rounded-lg md:rounded-xl shadow-md border border-gray-100">
              <div className="mb-4 md:mb-8 rounded-md md:rounded-lg bg-secondary text-white p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2 text-white/90">
                      <Bus className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-[11px] md:text-sm font-semibold uppercase tracking-wide">
                        ICEM Transport
                      </span>
                    </div>
                    <h2 className="text-xl md:text-4xl font-bold leading-tight">
                      Bus Route Timings
                    </h2>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 rounded-md bg-white/10 px-2.5 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>All routes arrive at ICEM by 9:00.am</span>
                  </div>
                </div>
              </div>
              
              {/* Bus Route Timings */}
              <div className="mb-4 md:mb-12">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-6">
                  {transportData.routes.map((route) => (
                    <div
                      key={route.routeNo}
                      className="border border-gray-200 rounded-md md:rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="bg-gray-50 border-b border-gray-200 p-2.5 md:p-4">
                        <div className="flex items-start justify-between gap-2 md:gap-3">
                          <div>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-primary">
                              {route.routeNo}
                            </p>
                            <h4 className="text-sm md:text-xl font-bold text-secondary leading-tight">
                              {route.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 md:p-4 bg-slate-50/60">
                        <div className="space-y-1.5 md:space-y-2">
                          {route.stops.map((stop, index) => {
                            const isArrival = stop.seatingPoint === "ICEM";
                            const isLast = index === route.stops.length - 1;

                            return (
                              <div
                                key={`${route.routeNo}-${stop.seatingPoint}-${index}`}
                                className="relative grid grid-cols-[24px_1fr] md:grid-cols-[32px_1fr] gap-2 md:gap-3"
                              >
                                {!isLast && (
                                  <span className="absolute left-3 md:left-4 top-6 md:top-8 bottom-[-8px] md:bottom-[-10px] w-px bg-slate-300" />
                                )}
                                <div
                                  className={`relative z-10 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full text-[10px] md:text-xs font-bold shadow-sm ${
                                    isArrival
                                      ? "bg-secondary text-white"
                                      : "bg-white text-secondary border border-secondary/25"
                                  }`}
                                >
                                  {isArrival ? <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4" /> : stop.srNo}
                                </div>
                                <div
                                  className={`flex items-center justify-between gap-2 md:gap-3 rounded-md md:rounded-lg border px-2 md:px-3 py-1.5 md:py-2.5 shadow-sm ${
                                    isArrival
                                      ? "border-secondary/25 bg-secondary/10"
                                      : "border-slate-200 bg-white"
                                  }`}
                                >
                                  <p
                                    className={`text-xs md:text-sm font-semibold leading-snug ${
                                      isArrival ? "text-secondary" : "text-slate-800"
                                    }`}
                                  >
                                    {stop.seatingPoint}
                                  </p>
                                  <span
                                    className={`flex-shrink-0 rounded px-2 md:px-2.5 py-0.5 md:py-1 text-[11px] md:text-xs font-bold ${
                                      isArrival
                                        ? "bg-secondary text-white"
                                        : "bg-slate-100 text-slate-700"
                                    }`}
                                  >
                                    {stop.timing}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 md:mt-5 flex items-start gap-2 md:gap-3 rounded-md md:rounded-lg bg-amber-50 border border-amber-200 p-2.5 md:p-4 text-amber-900 text-xs md:text-base">
                  <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                  <p className="font-medium">{transportData.notice}</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="rounded-md md:rounded-lg border border-gray-200 bg-gray-50 p-3 md:p-6">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  <h3 className="text-base md:text-2xl font-bold text-secondary">
                    Contact Details
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                  <div className="rounded-md md:rounded-lg bg-white border border-gray-200 p-3 md:p-4">
                    <h4 className="text-[11px] md:text-sm font-bold uppercase tracking-wide text-gray-500 mb-1">
                      Telephone Number
                    </h4>
                    <p className="text-base md:text-xl font-bold text-gray-900">
                      {transportData.contact.telephone}
                    </p>
                  </div>
                  <div className="rounded-md md:rounded-lg bg-white border border-gray-200 p-3 md:p-4">
                    <h4 className="text-[11px] md:text-sm font-bold uppercase tracking-wide text-gray-500 mb-1">
                      Mobile Number
                    </h4>
                    <p className="text-base md:text-xl font-bold text-gray-900">
                      {transportData.contact.mobile}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Gym" ? (
          // Gym-specific content
          <div className="max-w-full mx-auto px-1 md:px-6 py-1 md:py-10">
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Gymnasium @ ICEM</h2>
              
              {/* Gym Images Grid */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">Our Gym Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-8">
                  {["Gym1","Gym2","Gym3","Gym4","Gym5","Gym6","Gym7","Gym8","Gym10"].map((item, index) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-54 bg-gray-200 flex items-center justify-center">
                        {!gymImagesLoaded[index] && <div className="absolute inset-0 shimmer z-10"></div>}
                        <Image
                          src={`/Facilities/${item}.webp`}
                          alt={`Gym Equipment ${item}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                          onLoad={() => {
                            setGymImagesLoaded(prev => {
                              const newArr = [...prev];
                              newArr[index] = true;
                              return newArr;
                            });
                          }}
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment List */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">
                  Fully Equipped and Specious Gym with following machines
                </h3>
                <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                    {gymData.equipment.map((equipment, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">{equipment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-secondary text-white p-4 md:p-8 rounded-lg">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-center">Contact Details</h3>
                <div className="text-center">
                  <p className="text-xl font-semibold mb-2">{gymData.contact.name}</p>
                  <p className="text-lg mb-2">{gymData.contact.designation}</p>
                  <p className="text-lg">Tel: {gymData.contact.telephone}</p>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Canteen" ? (
          // Canteen-specific content
          <div className="max-w-full mx-auto px-1 md:px-6 py-1 md:py-10">
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Canteen @ ICEM</h2>
              
              {/* Canteen Images Grid */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">Our Canteen Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {["Canteen1","Canteen2","Canteen3","Canteen4","Canteen5","Canteen6"].map((item, index) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                        {!canteenImagesLoaded[index] && <div className="absolute inset-0 shimmer z-10"></div>}
                        <Image
                          src={`/Facilities/${item}.avif`}
                          alt={`Canteen ${item}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                          onLoad={() => {
                            setCanteenImagesLoaded(prev => {
                              const newArr = [...prev];
                              newArr[index] = true;
                              return newArr;
                            });
                          }}
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                       
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 p-2 md:p-6 rounded-lg text-center">
                <p className="text-gray-700 text-lg">
                  Our canteen offers a variety of delicious, hygienic, and affordable food options 
                  to cater to diverse tastes and dietary preferences of students and staff.
                </p>
              </div>
            </div>
          </div>
        ) : activeSection === "Primary Health Centre" ? (
          // Primary Health Centre-specific content
          <div className="max-w-full mx-auto px-1 md:px-6 py-1 md:py-10">
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Primary Health Centre @ ICEM</h2>
              
              {/* Health Centre Images Grid */}
              <div className="mb-6 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">Our Medical Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-8">
                  {["Indira_Primary_Health_Centre_1","Indira_Primary_Health_Centre_2","Indira_Primary_Health_Centre_3","Indira_Primary_Health_Centre_4"].map((item, index) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                        {!healthImagesLoaded[index] && <div className="absolute inset-0 shimmer z-10"></div>}
                        <Image
                          src={`/Facilities/${item}.${item === "Indira_Primary_Health_Centre_2" ? "webp" : "avif"}`}
                          alt={`Health Centre ${item}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                          onLoad={() => {
                            setHealthImagesLoaded(prev => {
                              const newArr = [...prev];
                              newArr[index] = true;
                              return newArr;
                            });
                          }}
                        />
                        <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-4 md:mb-8">
                <div className="bg-blue-50 p-2 md:p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed">
                    {healthCentreData.description}
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-secondary mb-2 md:mb-6">Services Provided</h3>
                <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    {healthCentreData.services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Hostel" ? (
          // Hostel-specific content
          <div className="max-w-full mx-auto px-6 py-10 space-y-12">
            {/* Overview Section */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 md:mb-8 text-center">Hostel @ ICEM</h2>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-8">
                <div className="bg-green-50 p-2 md:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-2 md:mb-4">Girls Hostel</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{hostelData.overview.capacity.girls}</div>
                  <p className="text-gray-700">Seats Available</p>
                </div>
                <div className="bg-blue-50 p-2 md:p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-2 md:mb-4">Boys Hostel</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{hostelData.overview.capacity.boys}</div>
                  <p className="text-gray-700">Seats Available</p>
                </div>
              </div>

              <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">
                  {hostelData.overview.description} All rooms are equipped with:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
                  {hostelData.overview.roomFacilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Hostel Management Team</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto mb-8">
                <table className="w-full min-w-max">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="p-2 md:p-4 text-left">Name</th>
                      <th className="p-2 md:p-4 text-left">Designation</th>
                      <th className="p-2 md:p-4 text-left">Contact</th>
                      <th className="p-2 md:p-4 text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hostelData.managementTeam.map((staff, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-2 md:p-4 border-b border-gray-200">{staff.name}</td>
                        <td className="p-2 md:p-4 border-b border-gray-200">{staff.designation}</td>
                        <td className="p-2 md:p-4 border-b border-gray-200">{staff.contact}</td>
                        <td className="p-2 md:p-4 border-b border-gray-200 text-blue-600">{staff.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg md:text-2xl font-bold text-secondary mb-6">Mess (Canteen) Team</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="p-2 md:p-4 text-left">Name</th>
                      <th className="p-2 md:p-4 text-left">Designation</th>
                      <th className="p-2 md:p-4 text-left">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hostelData.messTeam.map((staff, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-2 md:p-4 border-b border-gray-200">{staff.name}</td>
                        <td className="p-2 md:p-4 border-b border-gray-200">{staff.designation}</td>
                        <td className="p-2 md:p-4 border-b border-gray-200">{staff.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Hostel Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {hostelData.facilities.map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings Section */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Hostel Timings</h3>
              <div className="bg-yellow-50 p-2 md:p-6 rounded-lg mb-4 md:mb-6">
                <ul className="space-y-2 md:space-y-3">
                  {hostelData.timings.map((timing, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-3">•</span>
                      <span className="text-gray-700">{timing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h4 className="text-base md:text-xl font-bold text-secondary mb-4">Mess Timings</h4>
              <div className="bg-green-50 p-2 md:p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                  {hostelData.messTimings.map((timing, index) => (
                    <div key={index} className="bg-white p-2 md:p-4 rounded-lg shadow-sm">
                      <p className="font-semibold text-gray-800">{timing}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Documents Required for Admission</h3>
              <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                <ul className="space-y-2 md:space-y-3">
                  {hostelData.documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3">{index + 1}.</span>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cancellation Rules Section */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Hostel Admission Cancellation Rules</h3>
              <div className="space-y-4 md:space-y-6">
                {hostelData.cancellationRules.map((rule, index) => (
                  <div key={index} className="bg-red-50 p-2 md:p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg font-bold text-red-800 mb-2 md:mb-3">{rule.title}</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {rule.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:mt-6 bg-green-50 p-2 md:p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-bold text-green-800 mb-2 md:mb-3">Security Deposit Refund</h4>
                <ul className="space-y-1 md:space-y-2">
                  {hostelData.securityDeposit.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mess Instructions Section */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Canteen (Mess) Instructions</h3>
              <div className="bg-orange-50 p-2 md:p-6 rounded-lg">
                <ul className="space-y-2 md:space-y-3">
                  {hostelData.messInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-3">•</span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Medical Assistance Section */}
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-2xl font-bold text-secondary mb-4 md:mb-6">Medical Assistance & Insurance</h3>
              <div className="bg-blue-50 p-2 md:p-6 rounded-lg">
                <ul className="space-y-2 md:space-y-3">
                  {hostelData.medicalAssistance.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // Default content for other tabs
          <div className="max-w-full mx-auto px-1 md:px-6 py-1 md:py-10">
            <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md text-center">
              <h2 className="text-xl md:text-3xl font-bold text-secondary mb-2 md:mb-6">{activeSection} @ ICEM</h2>
              <div className="bg-gray-50 p-2 md:p-6 rounded-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Content for {activeSection} section is being updated. Please check back later for detailed information about our {activeSection.toLowerCase()} facilities and services.
                </p>
                <div className="mt-6 text-gray-500">
                  <p>For immediate assistance, please contact the administration office.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-smoothScroll {
          animation: smoothScroll 60s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
