import React, { useState } from "react";

const PhDGuidesAccordion = () => {
  // State to manage which accordion is open
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Data Extracted from your original Table
  const guidesData = [
    {
      id: 1,
      name: "Dr. Nilesh Uke",
      qualification: "Ph.D in Computer Engineering",
      recognitionYear: "2022",
      scholars: [
        {
          name: "Pankaja Bagul",
          year: "Ph.D awarded in Dec 2023",
          thesis: "Mapping of Digital Mediation through Process Information Diagrams in Architectural Design",
        },
        {
          name: "Priya Pise",
          year: "Ph.D awarded in Nov 2018",
          thesis: "Secure sensitive big data sharing on recent operating Systems",
        },
        {
          name: "Deepak Dharrao",
          year: "Ph.D awarded in Oct 2018",
          thesis: "A study of face detection and recognition methods for real time video surveillance",
        },
        {
          name: "Sarika Deokate",
          year: "Ph.D awarded in Apr 2019",
          thesis: "Enhancement Of Document Analysis, Classification, And Post Processing Of Devnagari Script",
        },
        {
          name: "Anchal Agrawal",
          year: "1/1/2023",
          thesis: "Design of Effective Techniques for Early Prediction of Heart Arrhythmia",
        },
        {
          name: "Shetty Nikita",
          year: "1/1/2023",
          thesis: "Design of trajectories of moving object with non-overlapping Surveillance cameras Field of View Cameras",
        },
        {
          name: "Ajay Kapase",
          year: "1/1/2023",
          thesis: "Reactive Multimodal Affective System with Artificial Emotional Intelligence for Effective Human Computer Interaction",
        },
        {
          name: "Kamble Vitthal",
          year: "1/1/2023",
          thesis: "Forensics Analysis of Digital Image Tampering Using Algorithmic Approach",
        },
        {
          name: "Priyanka Mane",
          year: "1/1/2023",
          thesis: "Fetal Movement Detection to Monitor It's Health Remotely During Prenatal Period",
        },
        {
          name: "Yevale Pallavi",
          year: "1/1/2023",
          thesis: "Design of an Intelligent Multilingual Virtual Assistant using Natural Language Understanding",
        },
        {
          name: "Sayali Bamble",
          year: "1/1/2023",
          thesis: "Breast Cancer Detection from Mammography Images using Machine Learning",
        },
        {
          name: "Ugile Tukaram",
          year: "1/1/2023",
          thesis: "Abnormal Event Detection in Real-time Video Surveillance",
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Mrs. Poorna Shankar",
      qualification: "Ph.D in Computer Science",
      recognitionYear: "2016",
      scholars: [
        {
          name: "Pratibha Kulkarni",
          year: "29/1/2016 (Ph.D Awarded in Dec 2021)",
          thesis: "A Study of use of Social Networking Sites by the Academicians in Selected Professional Colleges in and around Pune City",
        },
        {
          name: "Brijesh Joshi",
          year: "20/4/2018 (Ph.D Awarded in June 2022)",
          thesis: "Identifying the performance challenges with Big data processing and partial solutions",
        },
        {
          name: "Awantika Bijwe",
          year: "24-03-2018 (Ph.D Awarded in June 2024)",
          thesis: "Analysis of performance measures and effectiveness of devops framework in developing IoT applications",
        },
        {
          name: "Kiran Shinde",
          year: "3/11/2020",
          thesis: "Designing of edge computing based smart health care framework using authentication services",
        },
        {
          name: "Ashish Dhoke",
          year: "3/11/2020",
          thesis: "To Design a Smart Navigation System for Multiple Destinations using GPS and Machine Learning Algorithm",
        },
      ],
    },
    {
      id: 3,
      name: "Dr. Sunil Rathod",
      qualification: "Ph.D in Computer Engineering",
      recognitionYear: "2018",
      scholars: [
        {
          name: "Nilesh Mali",
          year: "Ph.D Awarded in JAN 2024",
          thesis: "Implementation of Information Security in Cloud Through Multi Access Control & Key Aggregation on Crypto System",
        },
        {
          name: "Sonali Purney",
          year: "Ph.D Awarded in JAN 2024",
          thesis: "Using AI to model the Future of Energy Conversation and Storage System",
        },
      ],
    },
    {
      id: 4,
      name: "Dr. Soumitra Das",
      qualification: "Ph.D in Computer Engineering",
      recognitionYear: "2019",
      scholars: [
        {
          name: "Mr. Malayaj Kumar",
          year: "1/1/2022",
          thesis: "Analysis of Speech of Political Leaders Writing NCP and AI: Its Effect on Political Discourse",
        },
      ],
    },
    {
      id: 5,
      name: "Dr. Archana Ravindra Salve",
      qualification: "Ph.D in Management",
      recognitionYear: "2020",
      scholars: [
        {
          name: "Priyanka Budhkar",
          year: "3/22/2022",
          thesis: "A critical study of hybrid mode of working on employee performance in IT industry with reference to Pune and Mumbai region",
        },
        {
          name: "Pradip Sandbhor",
          year: "7/5/2022",
          thesis: "Impact of BVOC Education on student skill enhancement and job opportunities",
        },
        {
          name: "Gayatri Nimbalkar",
          year: "3/23/2023",
          thesis: "A Study of Work-Life Balance of Women Employees Post-Pandemic and Its Impact on Their Performance",
        },
      ],
    },
    {
      id: 6,
      name: "Dr. Darshana Jignesh Desai",
      qualification: "Ph.D in Computer Management",
      recognitionYear: "2021",
      scholars: [
        {
          name: "Raj Kamal Sangole",
          year: "6/28/2022",
          thesis: "Empirical Study of Hiring Trends in the IT Industry and Design a Model using Machine Learning Techniques",
        },
        {
          name: "Sameer Patil",
          year: "5/18/2023",
          thesis: "Design and Develop a Framework using Blockchain with Integration of AI for Indian Judicial System",
        },
        {
          name: "Dhanashree Patil",
          year: "In Process",
          thesis: "In Process",
        },
      ],
    },
    {
      id: 7,
      name: "Dr. Manjusha Tatiya",
      qualification: "Ph.D in Computer Engineering",
      recognitionYear: "2023",
      scholars: [
        {
          name: "Pallavi Chavan",
          year: "11/24/2024",
          thesis: "Perishable produce quality prediction using machine learning - A smart system for nutrient loss estimation and freshness categorization",
        },
      ],
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
            PhD Research Guides & Scholars
          </h3>

          <div className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
            {guidesData.map((guide, index) => (
              <div key={index} className="border-b border-gray-200">
                {/* Accordion Header - Faculty Name */}
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                  className={`w-full flex justify-between items-center p-4 text-left font-medium transition-colors duration-200 ${
                    activeAccordion === index
                      ? "bg-secondary text-white"
                      : "text-primary hover:bg-tertiary bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{guide.id}.</span>
                    <span>{guide.name}</span>
                  </div>
                  <span className="text-xl font-bold">
                    {activeAccordion === index ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Content - Details & Scholars Table */}
                {activeAccordion === index && (
                  <div className="p-4 bg-white text-primary">
                    {/* Faculty Details */}
                    <div className="mb-6 bg-tertiary p-4 rounded-md border border-gray-100">
                      <p>
                        <strong>Qualification:</strong> {guide.qualification}
                      </p>
                      <p>
                        <strong>Year of Recognition:</strong>{" "}
                        {guide.recognitionYear}
                      </p>
                    </div>

                    {/* Scholars Table */}
                    <h4 className="font-semibold text-lg mb-3 text-secondary">
                      Registered Scholars
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left border-collapse border border-gray-200">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 border border-gray-200">
                              Scholar Name
                            </th>
                            <th className="px-4 py-3 border border-gray-200">
                              Registration / Award Year
                            </th>
                            <th className="px-4 py-3 border border-gray-200">
                              Thesis Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {guide.scholars.map((scholar, sIndex) => (
                            <tr
                              key={sIndex}
                              className="bg-white border-b hover:bg-gray-50"
                            >
                              <td className="px-4 py-3 border border-gray-200 font-medium">
                                {scholar.name}
                              </td>
                              <td className="px-4 py-3 border border-gray-200">
                                {scholar.year}
                              </td>
                              <td className="px-4 py-3 border border-gray-200 italic text-gray-600">
                                {scholar.thesis}
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
        </div>
      </div>
    </section>
  );
};

export default PhDGuidesAccordion;