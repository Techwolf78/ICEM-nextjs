"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const staffData = [
  {
    "Sr.No.": "1",
    "ID No": "2787",
    "Name of the staff ": "Dr. Nilesh Janardan Uke",
    "Designation": "Principal",
    "Department": "ICEM",
    "Qualification": "B.E,ME,Ph.D",
    "DOJ": "7/10/2024",
    "DOB": "25.12.1973"
  },
  {
    "Sr.No.": "2",
    "ID No": "1522",
    "Name of the staff ": "Mr. Narayan Shankar Jundre",
    "Designation": "Librarian",
    "Department": "Librarian",
    "Qualification": "M.A., B.LIS., M.LIS, SET",
    "DOJ": "30.01.2017",
    "DOB": "15.11.1983"
  },
  {
    "Sr.No.": "3",
    "ID No": "1360",
    "Name of the staff ": "Mr. Atul Kundlik Gore",
    "Designation": "Director of Physical Education & Sports",
    "Department": "Sports ",
    "Qualification": "M.P.Ed., NET",
    "DOJ": "26.10.2015",
    "DOB": "24.08.1980",
    "imagePath": "/Final_Icem_branding/fe/Dr. Atul Gore.jpg"
  },
  {
    "Sr.No.": "4",
    "ID No": "1883",
    "Name of the staff ": "Dr. Kiran Dattatray Devade",
    "Designation": "Professor & HOD",
    "Department": "FE",
    "Qualification": "Ph.D., ME",
    "DOJ": "02.11.2020",
    "DOB": "09.08.1980",
    "imagePath": "/Final_Icem_branding/fe/Dr. Kiran Devade.jpg"
  },
  {
    "Sr.No.": "5",
    "ID No": "984",
    "Name of the staff ": "Dr. Manjusha Ashwin Tomar",
    "Designation": "Associate Professor",
    "Department": "FE",
    "Qualification": "Ph.D, M.Sc",
    "DOJ": "26.09.2012",
    "DOB": "25.06.1973",
    "imagePath": "/Final_Icem_branding/fe/Dr. Manjusha Tomar.jpg"
  },
  {
    "Sr.No.": "6",
    "ID No": "1516",
    "Name of the staff ": "Dr. Avinash Santaram Bansode",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "Qualification": "Ph.D.M.Phil, M.Sc, B.Sc",
    "DOJ": "24.01.2017",
    "DOB": "13.03.1980",
    "imagePath": "/Final_Icem_branding/fe/Dr. Avinash Bansode.jpg"
  },
  {
    "Sr.No.": "7",
    "ID No": "465",
    "Name of the staff ": "Mrs. Pratima Amrut Gaikwad",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "Qualification": "ME",
    "DOJ": "29.08.2009",
    "DOB": "06.05.1985",
    "imagePath": "/Final_Icem_branding/fe/Mrs. Pratima Gaikwad.jpg"
  },
  {
    "Sr.No.": "8",
    "ID No": "645",
    "Name of the staff ": "Mrs. Supriya Deepak Kumbhar",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "Qualification": "ME",
    "DOJ": "03.09.2010",
    "imagePath": "/Final_Icem_branding/fe/Mrs. Supriya Kumbhar.jpg",
    "DOB": "30.06.1983"
  },
  {
    "Sr.No.": "9",
    "ID No": "1290",
    "Name of the staff ": "Mr. Ashwin Shriram Dharme",
    "Designation": "Assistant Professor & Dean Admissions",
    "Department": "FE",
    "Qualification": "MBA, ME",
    "imagePath": "/Final_Icem_branding/fe/Ashwin Dharme.jpg",
    "DOJ": "15.06.2015",
    "DOB": "11.05.1986"
  },
  {
    "Sr.No.": "10",
    "ID No": "3094",
    "Name of the staff ": "Dr. Mandakini Sanjay Dahiwade",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "imagePath": "/Final_Icem_branding/fe/Dr. Mandakini Dahiwade.JPG",
    "Qualification": "B.Sc.,M.Sc,M.Phil,Ph.D",
    "DOJ": "7/1/2024",
    "DOB": "02.05.1988"
  },
  {
    "Sr.No.": "11",
    "ID No": "3108",
    "Name of the staff ": "Mrs. Priyanka Harshal Mahajan",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "imagePath": "/Final_Icem_branding/fe/Prof. Priyanka Mahajan.jpg",
    "Qualification": "ME",
    "DOJ": "8/12/2024",
    "DOB": "07.01.1992"
  },
  {
    "Sr.No.": "12",
    "ID No": "3116",
    "Name of the staff ": "Ms. Trupti Nandkumar Kathale",
    "Designation": "Assistant Professor",
    "imagePath": "/Final_Icem_branding/fe/Trupti Kathale.jpg",
    "Department": "FE",
    "Qualification": "B.Sc.,M.Sc.",
    "DOJ": "10/1/2024",
    "DOB": "01.06.1985"
  },
  {
    "Sr.No.": "13",
    "ID No": "3117",
    "Name of the staff ": "Mr. Raghunandan Vinayakrao Kale",
    "imagePath": "/Final_Icem_branding/fe/Raghunandan sir photo.jpg",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "Qualification": "B.Sc, M.Sc.",
    "DOJ": "10/3/2024",
    "DOB": "28.03.1998"
  },
  {
    "Sr.No.": "14",
    "ID No": "3118",
    "Name of the staff ": "Mr. Swapnil Machhindra Chaudhari",
    "imagePath": "/Final_Icem_branding/fe/Swapnil choudhary.jpg",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "Qualification": "B.Sc, M.Tech.",
    "DOJ": "10/7/2024",
    "DOB": "02.06.1993"
  },
  {
    "Sr.No.": "15",
    "ID No": "3220",
    "imagePath": "/Final_Icem_branding/fe/Dr. Dayanand Kamble.JPG",
    "Name of the staff ": "Dr. Dyanand Ambadas Kamble",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "Qualification": "Ph.D BSC ,MSC,,POST DOCTRATE",
    "DOJ": "9/22/2025",
    "DOB": "23.10.1982"
  },
  {
    "Sr.No.": "16",
    "ID No": "3224",
    "imagePath": "/Final_Icem_branding/fe/Mr. Shubham Rathod.JPG",
    "Name of the staff ": "Mr. Rathod Shubham Shrikant",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "Qualification": "B.Sc, M.Sc.",
    "DOJ": "10/1/2025",
    "DOB": "03.01.1995"
  },
  {
    "Sr.No.": "17",
    "ID No": "3225",
    "imagePath": "/Final_Icem_branding/fe/Mr. Rishikesh Sonawane.JPG",
    "Name of the staff ": "Mr. Rishikesh Devendra Sonawane",
    "Designation": "Assistant Professor",
    "Department": "FE",
    "Qualification": "BE Mech",
    "DOJ": "6/10/2025",
    "DOB": "05.10.1998"
  },
  {
    "Sr.No.": "18",
    "ID No": "472",
    "Name of the staff ": "Dr. Manjusha Rahul Tatiya",
    "Designation": "Associate Professor & HOD",
    "Department": "AIDS",
    "Qualification": "Ph.D,ME",
    "DOJ": "01.07.2009",
    "DOB": "30.01.1983",
    "imagePath": "/Final_Icem_branding/aids/Dr. Manjusha Tatiya.jpg"
  },
  {
    "Sr.No.": "19",
    "ID No": "3096",
    "Name of the staff ": "Mrs.Deepa Vishal Padwal",
    "Designation": "Assistant Professor",
    "Department": "AIDS",
    "Qualification": "B.E.,ME",
    "DOJ": "7/1/2024",
    "DOB": "09.02.1992",
    "imagePath": "/Final_Icem_branding/aids/Mrs. Deepa KadamPadwal.jpg"
  },
  {
    "Sr.No.": "20",
    "ID No": "3101",
    "Name of the staff ": "Ms. Pallavi Laxmikant Chavan",
    "Designation": "Assistant Professor",
    "Department": "AIDS",
    "Qualification": "B.Tech, M.Tech.",
    "DOJ": "7/1/2024",
    "DOB": "17.09.1996",
    "imagePath": "/Final_Icem_branding/aids/Pallavi Chavan.jpg"
  },
  {
    "Sr.No.": "21",
    "ID No": "3170",
    "Name of the staff ": "Mrs. Monika Amol Patil",
    "Designation": "Assistant Professor",
    "Department": "AIDS",
    "Qualification": "Dip,BE, ME",
    "DOJ": "1/7/2025",
    "DOB": "5/10/1992",
    "imagePath": "/Final_Icem_branding/aids/Mrs. Monika Patil.JPG"
  },
  {
    "Sr.No.": "22",
    "ID No": "3263",
    "Name of the staff ": "Mrs. Kavita Sharma",
    "Designation": "Assistant Professor",
    "Department": "AIDS",
    "Qualification": "M. Tech, Msc. Post Graduation in Computer Application",
    "DOJ": "1/14/2026",
    "imagePath": "/Final_Icem_branding/aids/Mrs. Kavita Sharma.JPG",
    "DOB": "10.07.1982"
  },
  {
    "Sr.No.": "23",
    "ID No": "3267",
    "Name of the staff ": "Mr. Vivek Kumar Sohagaura",
    "Designation": "Assistant Professor",
    "Department": "AIDS",
    "Qualification": "B.E., M. Tech in Computer Science",
    "imagePath": "/Final_Icem_branding/aids/Vivek Sohagora.JPG",
    "DOJ": "1/23/2026",
    "DOB": "18.12.1990"
  },
  {
    "Sr.No.": "24",
    "ID No": "1680",
    "Name of the staff ": "Dr. Deepa Nitin Jamnik",
    "Designation": "Assistant Professor & HOD Dean (Events & Branding",
    "Department": "BBA",
    "Qualification": "Ph.D, BBA,MBA,NET,",
    "DOJ": "7/1/2024",
    "DOB": "18.05.1984",
    "imagePath": "/Final_Icem_branding/bba_bca/Dr. Deepa Jamnik.jpg"
  },
  {
    "Sr.No.": "25",
    "ID No": "3119",
    "Name of the staff ": "Mrs. Ashwini Dewanand Wankhade",
    "Designation": "Assistant Professor",
    "Department": "BBA",
    "Qualification": "B.E, MBA",
    "DOJ": "11/13/2024",
    "DOB": "11.09.1981"
  },
  {
    "Sr.No.": "26",
    "ID No": "3154",
    "Name of the staff ": "Mrs. Dipali Rahul Nimbalkar",
    "Designation": "Assistant Professor",
    "Department": "BBA",
    "Qualification": "B. Sc, MBA",
    "DOJ": "1/6/2025",
    "DOB": "6/9/1987",
    "imagePath": "/Final_Icem_branding/bba_bca/Mrs. Dipali Nimbalkar.JPG"
  },
  {
    "Sr.No.": "27",
    "ID No": "3105",
    "Name of the staff ": "Dr. Awantika Narendra Bijwe",
    "Designation": "Assistant Professor & HOD",
    "Department": "BCA & MCA",
    "Qualification": "Ph.D, BSc,MCA,ME",
    "DOJ": "7/1/2024",
    "DOB": "26.05.1982",
    "imagePath": "/Final_Icem_branding/bba_bca/Dr. Awantika Bijwe.jpg"
  },
  {
    "Sr.No.": "28",
    "ID No": "3115",
    "Name of the staff ": "Ms.Shraddha Vishnu Murade",
    "Designation": "Assistant Professor",
    "Department": "BCA",
    "Qualification": "B.Sc., MCA",
    "DOJ": "9/24/2024",
    "DOB": "11.07.1999",
    "imagePath": "/Final_Icem_branding/bba_bca/Ms. Shraddha Murade.JPG"
  },
  {
    "Sr.No.": "29",
    "ID No": "3217",
    "Name of the staff ": "Mr. Prakash Shamrao Bhusari",
    "Designation": "Assistant Professor",
    "Department": "BCA",
    "Qualification": "B.C.S,M.Sc",
    "DOJ": "9/22/2025",
    "DOB": "4/5/1983",
    "imagePath": "/Final_Icem_branding/bba_bca/Mr. Prakash Bhusari.JPG"
  },
  {
    "Sr.No.": "30",
    "ID No": "1200",
    "Name of the staff ": "Mrs. Savita Achyut Jangale",
    "Designation": "Assistant Professor & HOD",
    "Department": "Civil",
    "Qualification": "ME",
    "DOJ": "18.09.2014",
    "DOB": "31.01.1982",
    "imagePath": "/Final_Icem_branding/civil/Mrs. Savita Jangale.jpg"
  },
  {
    "Sr.No.": "31",
    "ID No": "1326",
    "Name of the staff ": "Mr. Vijay Kumar Saini",
    "Designation": "Assistant Professor",
    "Department": "Civil",
    "Qualification": "M.Tech",
    "DOJ": "14.07.2015",
    "DOB": "24.08.1990",
    "imagePath": "/Final_Icem_branding/civil/Mr. Vijaykumar Saini.jpg"
  },
  {
    "Sr.No.": "32",
    "ID No": "3086",
    "Name of the staff ": "Mr. Shreyas Rajendra Satpute",
    "Designation": "Assistant Professor",
    "Department": "Civil",
    "Qualification": "ME",
    "DOJ": "7/1/2024",
    "DOB": "11.11.1990",
    "imagePath": "/Final_Icem_branding/civil/Mr. Shreyas Satpute.jpg"
  },
  {
    "Sr.No.": "33",
    "ID No": "3102",
    "Name of the staff ": "Mr. Satyam Shamrao Kalyane",
    "Designation": "Assistant Professor",
    "Department": "Civil",
    "Qualification": "ME",
    "DOJ": "7/1/2024",
    "DOB": "04.06.1990"
  },
  {
    "Sr.No.": "34",
    "ID No": "496",
    "Name of the staff ": "Mrs. Deepali Shashikant Dhadwad",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "ME",
    "DOJ": "27.07.2009",
    "DOB": "25.04.1986"
  },
  {
    "Sr.No.": "35",
    "ID No": "2448",
    "Name of the staff ": "Dr. Shwetkranti Nanasaheb Taware",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "ME, Ph.D.",
    "DOJ": "01.07.2023",
    "DOB": "9.8.1983"
  },
  {
    "Sr.No.": "36",
    "ID No": "2032",
    "Name of the staff ": "Dr. Soumitra Shibshankar Das",
    "Designation": "Dean Academics, Vice Principal and Heads of the Deans",
    "Department": "Computer",
    "Qualification": "BE ME Ph.D",
    "DOJ": "28.09.2021",
    "DOB": "31.10.1974"
  },
  {
    "Sr.No.": "37",
    "ID No": "3088",
    "Name of the staff ": "Mrs. Anita Atul Patil",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "ME",
    "DOJ": "01.07.2024",
    "DOB": "25.12.1994"
  },
  {
    "Sr.No.": "38",
    "ID No": "3089",
    "Name of the staff ": "Miss Pragati Sambhaji Malusare",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "BE, M. Tech",
    "DOJ": "01.07.2024",
    "DOB": "01.10.1997"
  },
  {
    "Sr.No.": "39",
    "ID No": "2288",
    "Name of the staff ": "Mrs. Dipali Nikhil Junankar",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "B.E.,M.E",
    "DOJ": "01.11.2022",
    "DOB": "14.04.1980"
  },
  {
    "Sr.No.": "40",
    "ID No": "2366",
    "Name of the staff ": "Dr. Sunil Damodar Rathod",
    "Designation": "Associate Professor",
    "Department": "Computer",
    "Qualification": "B.E,ME,Ph.D",
    "DOJ": "01.02.2023",
    "DOB": "18.10.1970"
  },
  {
    "Sr.No.": "41",
    "ID No": "3095",
    "Name of the staff ": "Mrs.Savitri Ashok Mote",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "B.E,M.Tech.",
    "DOJ": "7/1/2024",
    "DOB": "02.06.1990"
  },
  {
    "Sr.No.": "42",
    "ID No": "3097",
    "Name of the staff ": "Ms. Rupali Pravin Adhau",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "B.E.,ME",
    "DOJ": "7/1/2024",
    "DOB": "25.06.1988"
  },
  {
    "Sr.No.": "43",
    "ID No": "3098",
    "Name of the staff ": "Mrs.Shraddha Sandip Suryawanshi",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "B.E.,ME",
    "DOJ": "7/1/2024",
    "DOB": "05.06.1996"
  },
  {
    "Sr.No.": "44",
    "ID No": "3111",
    "Name of the staff ": "Dr. Malayaj Kumar",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "BE, M.Tech, Ph.D.",
    "DOJ": "8/26/2024",
    "DOB": "01.08.1985"
  },
  {
    "Sr.No.": "45",
    "ID No": "3112",
    "Name of the staff ": "Mrs. Minal Sunil Patil",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "Dip, B.E, ME",
    "DOJ": "8/29/2024",
    "DOB": "13.01.1989"
  },
  {
    "Sr.No.": "46",
    "ID No": "3214",
    "Name of the staff ": "Mr. Abhijit Hanumantrao Khadke",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "BE,ME",
    "DOJ": "8/9/2025",
    "DOB": "10/3/1973"
  },
  {
    "Sr.No.": "47",
    "ID No": "3265",
    "Name of the staff ": "Ms. Vidya Ritesh Dhoke",
    "Designation": "Assistant Professor",
    "Department": "Computer",
    "Qualification": "BE IT, M.Tech Computer",
    "DOJ": "1/5/2026",
    "DOB": "02.04.1991"
  },
  {
    "Sr.No.": "48",
    "ID No": "3262",
    "Name of the staff ": "Ms. Tanuja Balkrishna Dhumal",
    "Designation": "Teaching Assistant",
    "Department": "Computer",
    "Qualification": "B. E. Computer Engineering, Mastere in Computer Science & Engineering appeared",
    "DOJ": "1/14/2026",
    "DOB": "21.12.2000"
  },
  {
    "Sr.No.": "49",
    "ID No": "312",
    "Name of the staff ": "Mrs. Meenakshi Somnath Patil",
    "Designation": "Assistant Professor & HOD",
    "Department": "E&TC",
    "Qualification": "ME",
    "DOJ": "22.01.2008",
    "DOB": "02.10.1982"
  },
  {
    "Sr.No.": "50",
    "ID No": "393",
    "Name of the staff ": "Mr. Dhiraj Shashikant Bhagwate",
    "Designation": "Assistant Professor",
    "Department": "E&TC",
    "Qualification": "ME",
    "DOJ": "04.08.2008",
    "DOB": "26.11.1971"
  },
  {
    "Sr.No.": "51",
    "ID No": "372",
    "Name of the staff ": "Mrs. Rupali Vilas Salunke",
    "Designation": "Assistant Professor",
    "Department": "E&TC",
    "Qualification": "ME",
    "DOJ": "01.07.2010",
    "DOB": "10.10.1981"
  },
  {
    "Sr.No.": "52",
    "ID No": "3106",
    "Name of the staff ": "Mr. Sudhir Kumar Sawarkar",
    "Designation": "Assistant Professor",
    "Department": "E&TC",
    "Qualification": "Dip,BE,ME",
    "DOJ": "7/3/2024",
    "DOB": "12.10.1981"
  },
  {
    "Sr.No.": "53",
    "ID No": "3107",
    "Name of the staff ": "Ms. Priyanka Ramesh Patil",
    "Designation": "Assistant Professor",
    "Department": "E&TC",
    "Qualification": "BE, ME",
    "DOJ": "8/12/2024",
    "DOB": "07.06.1990"
  },
  {
    "Sr.No.": "54",
    "ID No": "3120",
    "Name of the staff ": "Mr. Balu Chatrbhuj Tandale",
    "Designation": "Assistant Professor",
    "Department": "E&TC",
    "Qualification": "BE, ME",
    "DOJ": "12/23/2024",
    "DOB": "09.09.1991"
  },
  {
    "Sr.No.": "55",
    "ID No": "2606",
    "Name of the staff ": "Dr. Saurabh Harishchand Gupta",
    "Designation": "HOD",
    "Department": "Mechanical",
    "Qualification": "BE.ME.Ph.D ",
    "DOJ": "11.12.2023",
    "DOB": "25.12.1977"
  },
  {
    "Sr.No.": "56",
    "ID No": "2454",
    "Name of the staff ": "Dr. Vikas Narayan Nandgaonkar",
    "Designation": "Associate Professor & HOD",
    "Department": "IT",
    "Qualification": "BE, ME, Ph.D.",
    "DOJ": "10.12.2021",
    "DOB": "06.12.1978"
  },
  {
    "Sr.No.": "57",
    "ID No": "3216",
    "Name of the staff ": "Mrs. Mrunal Aniruddha Vaidya",
    "Designation": "Assistant Professor",
    "Department": "IT",
    "Qualification": "BE.ME",
    "DOJ": "9/15/2025",
    "DOB": "2/20/1991"
  },
  {
    "Sr.No.": "58",
    "ID No": "3226",
    "Name of the staff ": "Mr. Shrikant Manikrao Mahindrakar",
    "Designation": "Assistant Professor",
    "Department": "IT",
    "Qualification": "BE M.Tech",
    "DOJ": "10/13/2025",
    "DOB": "5/9/1982"
  },
  {
    "Sr.No.": "59",
    "ID No": "215",
    "Name of the staff ": "Dr. Mahesh Ganpat Bhong",
    "Designation": "Associate Professor Dean (Research & Delevlopment)",
    "Department": "Mechanical",
    "Qualification": "ME,Ph.D",
    "DOJ": "14.05.2007",
    "DOB": "24.08.1982"
  },
  {
    "Sr.No.": "60",
    "ID No": "422",
    "Name of the staff ": "Mr. Hemant Vasant Darokar",
    "Designation": "Assistant Professor CEO (Examinations & Evalution) - SPPU",
    "Department": "Mechanical",
    "Qualification": "ME",
    "DOJ": "01.12.2008",
    "DOB": "12.04.1979"
  },
  {
    "Sr.No.": "61",
    "ID No": "594",
    "Name of the staff ": "Mr. Sushil Bhaskarrao Chopade",
    "Designation": "Assistant Professor Dean (Industry Institute Cell)",
    "Department": "Mechanical",
    "Qualification": "ME",
    "DOJ": "21.12.2009",
    "DOB": "27.08.1985"
  },
  {
    "Sr.No.": "62",
    "ID No": "624",
    "Name of the staff ": "Ms. Shubhangi Ashish Manwatkar",
    "Designation": "Assistant Professor",
    "Department": "Mechanical",
    "Qualification": "ME",
    "DOJ": "02.07.2010",
    "DOB": "17.03.1983"
  },
  {
    "Sr.No.": "63",
    "ID No": "643",
    "Name of the staff ": "Mr. Siddheshwar Suresh Shirbhate",
    "Designation": "Assistant Professor",
    "Department": "Mechanical",
    "Qualification": "ME",
    "DOJ": "03.09.2010",
    "DOB": "19.09.1983"
  },
  {
    "Sr.No.": "64",
    "ID No": "739",
    "Name of the staff ": "Mr. Vishal Abhiman Meshram",
    "Designation": "Assistant Professor & Assistant TPO",
    "Department": "Mechanical",
    "Qualification": "ME",
    "DOJ": "01.12.2010",
    "DOB": "15.08.1985"
  },
  {
    "Sr.No.": "65",
    "ID No": "964",
    "Name of the staff ": "Mrs. Ashwini Atul Admane",
    "Designation": "Assistant Professor",
    "Department": "Mechanical",
    "Qualification": "ME",
    "DOJ": "30.07.2012",
    "DOB": "21.03.1985"
  },
  {
    "Sr.No.": "66",
    "ID No": "1288",
    "Name of the staff ": "Mrs. Pranali Balasaheb Khatake",
    "Designation": "Assistant Professor",
    "Department": "Mechanical",
    "Qualification": "ME",
    "DOJ": "15.06.2015",
    "DOB": "29.05.1985"
  },
  {
    "Sr.No.": "67",
    "ID No": "1456",
    "Name of the staff ": "Ms. Ashwini Sadashiv Gaikwad",
    "Designation": "Assistant Professor",
    "Department": "Mechanical",
    "Qualification": "M.Tech",
    "DOJ": "11.07.2016",
    "DOB": "23.02.1990"
  },
  {
    "Sr.No.": "68",
    "ID No": "1519",
    "Name of the staff ": "Mr. Amit Gangadhar Narwade",
    "Designation": "Assistant Professor",
    "Department": "Mechanical",
    "Qualification": "M.Tech",
    "DOJ": "23.01.2017",
    "DOB": "10.12.1990"
  },
  {
    "Sr.No.": "69",
    "ID No": "1520",
    "Name of the staff ": "Mr. Sagar Uttamrao Chirade",
    "Designation": "Assistant Professor",
    "Department": "Mechanical",
    "Qualification": "ME",
    "DOJ": "23.01.2017",
    "DOB": "10.12.1984"
  },
  {
    "Sr.No.": "70",
    "ID No": "1521",
    "Name of the staff ": "Dr. Archana Ravindra Salve",
    "Designation": "Professor & Dean (Extrepreneurship Development)",
    "Department": "MBA",
    "Qualification": "BAMS, MBA, NET, Ph.D",
    "DOJ": "30.01.2017",
    "DOB": "13.9.1976"
  },
  {
    "Sr.No.": "71",
    "ID No": "987",
    "Name of the staff ": "Dr. Mrs. Priyanka Amol Pawar",
    "Designation": "Associate Professor Dean (Learning & Development)",
    "Department": "MBA",
    "Qualification": "B.Sc., M.B.A , Ph.D.",
    "DOJ": "17.09.2012",
    "DOB": "22.09.1986"
  },
  {
    "Sr.No.": "72",
    "ID No": "3087",
    "Name of the staff ": "Dr. Pravin Namdeo Thorat",
    "Designation": "Assistant Professor",
    "Department": "MBA",
    "Qualification": "BE, MBA, NET SET, Ph.D",
    "DOJ": "01.07.2024",
    "DOB": "23.08.1982"
  },
  {
    "Sr.No.": "73",
    "ID No": "3090",
    "Name of the staff ": "Mrs. Aditee Hrishikesh Huparikar",
    "Designation": "Assistant Professor",
    "Department": "MBA",
    "Qualification": "M.Com, MBA",
    "DOJ": "7/1/2024",
    "DOB": "05.07.1985"
  },
  {
    "Sr.No.": "74",
    "ID No": "3093",
    "Name of the staff ": "Dr. Priyanka Shirish Shinde",
    "Designation": "Assistant Professor & Assistant TPO",
    "Department": "MBA",
    "Qualification": "Ph.D MBA .M.Phil",
    "DOJ": "7/1/2024",
    "DOB": "14.05.1986"
  },
  {
    "Sr.No.": "75",
    "ID No": "3113",
    "Name of the staff ": "Mr. Mani Shankar Pandey",
    "Designation": "Assistant Professor",
    "Department": "MBA",
    "Qualification": "BBA,  PGDM",
    "DOJ": "9/6/2024",
    "DOB": "08.07.1990"
  },
  {
    "Sr.No.": "76",
    "ID No": "2072",
    "Name of the staff ": "Dr. Mrs. Poornashankar",
    "Designation": "Professor & HOD(Computer) and Dean (Artificial Intelligence) ",
    "Department": "Computer",
    "Qualification": "M.Tech, MCA, D.C.S.E, B.Sc, M. Phil., Ph.D.",
    "DOJ": "01.12.2021",
    "DOB": "12.06.1973"
  },
  {
    "Sr.No.": "77",
    "ID No": "1011",
    "Name of the staff ": "Dr. Darshana Jignesh Desai",
    "Designation": "Professor & Dean (Quality Assurance and Accreditation)",
    "Department": "MCA",
    "Qualification": "MCA, Ph.D",
    "DOJ": "02.01.2013",
    "DOB": "21.05.1979"
  },
  {
    "Sr.No.": "78",
    "ID No": "2343",
    "Name of the staff ": "Dr. Dhanashree Vishal Pisal",
    "Designation": "Assistant Professor",
    "Department": "MCA",
    "Qualification": "BCA,MCA",
    "DOJ": "06.01.2023",
    "DOB": "08.03.1989"
  },
  {
    "Sr.No.": "79",
    "ID No": "3103",
    "Name of the staff ": "Mrs.Shreya Sohan Shenai",
    "Designation": "Assistant Professor",
    "Department": "MCA",
    "Qualification": "B.Sc.MCA",
    "DOJ": "7/1/2024",
    "DOB": "02.07.1982"
  },
  {
    "Sr.No.": "80",
    "ID No": "3110",
    "Name of the staff ": "Mrs. Hetal Hardik Thaker",
    "Designation": "Assistant Professor",
    "Department": "MCA",
    "Qualification": "BSc, MCA",
    "DOJ": "8/16/2024",
    "DOB": "27.11.1980"
  },
  {
    "Sr.No.": "81",
    "ID No": "3219",
    "Name of the staff ": "Mr. Sanjay Mathapati",
    "Designation": "Assistant Professor",
    "Department": "MCA",
    "Qualification": "ADCA,MCM,MCA",
    "DOJ": "9/22/2025",
    "DOB": "22.01.1975"
  },
  {
    "Sr.No.": "82",
    "ID No": "3264",
    "Name of the staff ": "Dr. Bhushan Ashokrao Nikam",
    "Designation": "Assistant Professor",
    "Department": "MCA",
    "Qualification": "B.Sc., M.Sc., MCA, Ph.D. ,NET",
    "DOJ": "1/8/2026",
    "DOB": "23.04.1973"
  },
  {
    "Sr.No.": "83",
    "ID No": "3274",
    "Name of the staff ": "Mrs. Vaishali Sachin Hatkar",
    "Designation": "Assistant Professor",
    "Department": "MCA",
    "Qualification": "BCA, MCA",
    "DOJ": "2/3/2026",
    "DOB": "28.10.1998"
  }
]


export default function OurStaff() {
  // State to track which departments are expanded
  const [expandedDepts, setExpandedDepts] = useState({});

  const toggleDepartment = (dept) => {
    setExpandedDepts(prev => ({
      ...prev,
      [dept]: !prev[dept]
    }));
  };

  // Group staff by department
  const groupedStaff = staffData.reduce((acc, staff) => {
    const dept = staff.Department.trim();
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(staff);
    return acc;
  }, {});

  // Department name mapping for better display
  const deptNames = {
    "ICEM": "Principal Office",
    "Librarian": "Library",
    "Sports ": "Physical Education & Sports",
    "FE": "First Year Engineering",
    "AIDS": "Artificial Intelligence & Data Science",
    "BBA": "Bachelor of Business Administration",
    "BCA & MCA": "Computer Applications",
    "BCA": "Bachelor of Computer Applications",
    "Civil": "Civil Engineering",
    "Computer": "Computer Engineering",
    "E&TC": "Electronics & Telecommunication Engineering",
    "Mechanical": "Mechanical Engineering",
    "IT": "Information Technology",
    "MBA": "Master of Business Administration",
    "MCA": "Master of Computer Applications"
  };

  return (
    <section className="bg-white p-4 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl md:text-3xl font-bold text-secondary mb-6 md:mb-8 leading-tight">
        Our Faculty & Staff
      </h3>

      <div className="space-y-4">
        {Object.entries(groupedStaff).map(([dept, staffList]) => (
          <div key={dept} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleDepartment(dept)}
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <h4 className="text-lg font-semibold text-secondary">
                {deptNames[dept] || dept} ({staffList.length} members)
              </h4>
              {expandedDepts[dept] ? (
                <ChevronUp className="w-5 h-5 text-secondary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-secondary" />
              )}
            </button>

            {expandedDepts[dept] && (
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-secondary text-white">
                        <th className="border border-gray-300 p-2 text-left">Photo</th>
                        <th className="border border-gray-300 p-2 text-left">Name</th>
                        <th className="border border-gray-300 p-2 text-left">Designation</th>
                        <th className="border border-gray-300 p-2 text-left">Qualification</th>
                        <th className="border border-gray-300 p-2 text-left">Date of Joining</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffList.map((staff, index) => (
                        <tr key={staff["ID No"]} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="border border-gray-300 p-2">
                            {staff.imagePath ? (
                              <img src={staff.imagePath} alt={staff["Name of the staff "]} className="w-12 h-12 rounded-full object-cover" />
                            ) : (
                              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-xs text-gray-600">
                                  {staff["Name of the staff "].split(" ").map(n => n[0]).join("").toUpperCase()}
                                </span>
                              </div>
                            )}
                          </td>
                          <td className="border border-gray-300 p-2 font-medium">
                            {staff["Name of the staff "]}
                          </td>
                          <td className="border border-gray-300 p-2">
                            {staff.Designation}
                          </td>
                          <td className="border border-gray-300 p-2">
                            {staff.Qualification}
                          </td>
                          <td className="border border-gray-300 p-2">
                            {staff.DOJ}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}