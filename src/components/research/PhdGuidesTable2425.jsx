// PhdGuidesTable2425.jsx
export default function PhdGuidesTable2425() {
  const facultyData = [
    {
      id: 1,
      name: "Dr. Nilesh Uke",
      qualification: "Ph.D in Computer Engineering",
      yearOfRecognition: "2022",
      scholars: [
        {
          name: "Pankaja Bagul",
          year: "Ph.D awarded in Dec 2023",
          thesis: "Mapping of Digital Mediation through Process Information Diagrams in Architectural Design"
        },
        {
          name: "Priya Pise",
          year: "Ph.D awarded in Nov 2018",
          thesis: "Secure sensitive big data sharing on recent operating Systems"
        },
        {
          name: "Deepak Dharrao",
          year: "Ph.D awarded in Oct 2018",
          thesis: "A study of face detection and recognition methods for real time video surveillance"
        },
        {
          name: "Sarika Deokate",
          year: "Ph.D awarded in Apr 2019",
          thesis: "Enhancement Of Document Analysis, Classification, And Post Processing Of Devnagari Script"
        },
        {
          name: "Anchal Agrawal",
          year: "1/1/2023",
          thesis: "Design of Effective Techniques for Early Prediction of Heart Arrhythmia"
        },
        {
          name: "Shetty Nikita",
          year: "1/1/2023",
          thesis: "Design of trajectories of moving object with non-overlapping Surveillance cameras Field of View Cameras"
        },
        {
          name: "Ajay Kapase",
          year: "1/1/2023",
          thesis: "Reactive Multimodal Affective System with Artificial Emotional Intelligence for Effective Human Computer Interaction"
        },
        {
          name: "Kamble Vitthal",
          year: "1/1/2023",
          thesis: "Forensics Analysis of Digital Image Tampering Using Algorithmic Approach"
        },
        {
          name: "Priyanka Mane",
          year: "1/1/2023",
          thesis: "Fetal Movement Detection to Monitor It's Health Remotely During Prenatal Period"
        },
        {
          name: "Yevale Pallavi",
          year: "1/1/2023",
          thesis: "Design of an Intelligent Multilingual Virtual Assistant using Natural Language Understanding"
        },
        {
          name: "Sayali Bamble",
          year: "1/1/2023",
          thesis: "Breast Cancer Detection from Mammography Images using Machine Learning"
        },
        {
          name: "Ugile Tukaram",
          year: "1/1/2023",
          thesis: "Abnormal Event Detection in Real-time Video Surveillance"
        }
      ]
    },
    {
      id: 2,
      name: "Dr. Mrs. Poorna Shankar",
      qualification: "Ph.D in Computer Science",
      yearOfRecognition: "2016",
      scholars: [
        {
          name: "Pratibha Kulkarni",
          year: "29/1/2016 (Ph.D Awarded in Dec 2021)",
          thesis: "A Study of use of Social Networking Sites by the Academicians in Selected Professional Colleges in and around Pune City"
        },
        {
          name: "Brijesh Joshi",
          year: "20/4/2018 (Ph.D Awarded in June 2022)",
          thesis: "Identifying the performance challenges with Big data processing and partial solutions"
        },
        {
          name: "Awantika Bijwe",
          year: "24-03-2018 (Ph.D Awarded in June 2024)",
          thesis: "Analysis of performance measures and effectiveness of devops framework in developing IoT applications"
        },
        {
          name: "Kiran Shinde",
          year: "3/11/2020",
          thesis: "Designing of edge computing based smart health care framework using authentication services"
        },
        {
          name: "Ashish Dhoke",
          year: "3/11/2020",
          thesis: "To Design a Smart Navigation System for Multiple Destinations using GPS and Machine Learning Algorithm"
        }
      ]
    },
    {
      id: 3,
      name: "Dr. Sunil Rathod",
      qualification: "Ph.D in Computer Engineering",
      yearOfRecognition: "2018",
      scholars: [
        {
          name: "Nilesh Mali",
          year: "Ph.D Awarded in JAN 2024",
          thesis: "Implementation of Information Security in Cloud Through Multi Access Control & Key Aggregation on Crypto System"
        },
        {
          name: "Sonali Purney",
          year: "Ph.D Awarded in JAN 2024",
          thesis: "Using AI to model the Future of Energy Conversation and Storage System"
        }
      ]
    },
    {
      id: 4,
      name: "Dr. Soumitra Das",
      qualification: "Ph.D in Computer Engineering",
      yearOfRecognition: "2019",
      scholars: [
        {
          name: "Mr. Malayaj Kumar",
          year: "1/1/2022",
          thesis: "Analysis of Speech of Political Leaders Writing NCP and AI: Its Effect on Political Discourse"
        }
      ]
    },
    {
      id: 5,
      name: "Dr. Archana Ravindra Salve",
      qualification: "Ph.D in Management",
      yearOfRecognition: "2020",
      scholars: [
        {
          name: "Priyanka Budhkar",
          year: "3/22/2022",
          thesis: "A critical study of hybrid mode of working on employee performance in IT industry with reference to Pune and Mumbai region"
        },
        {
          name: "Pradip Sandbhor",
          year: "7/5/2022",
          thesis: "Impact of BVOC Education on student skill enhancement and job opportunities"
        },
        {
          name: "Gayatri Nimbalkar",
          year: "3/23/2023",
          thesis: "A Study of Work-Life Balance of Women Employees Post-Pandemic and Its Impact on Their Performance"
        }
      ]
    },
    {
      id: 6,
      name: "Dr. Darshana Jignesh Desai",
      qualification: "Ph.D in Computer Management",
      yearOfRecognition: "2021",
      scholars: [
        {
          name: "Raj Kamal Sangole",
          year: "6/28/2022",
          thesis: "Empirical Study of Hiring Trends in the IT Industry and Design a Model using Machine Learning Techniques"
        },
        {
          name: "Sameer Patil",
          year: "5/18/2023",
          thesis: "Design and Develop a Framework using Blockchain with Integration of AI for Indian Judicial System"
        },
        {
          name: "Dhanashree Patil",
          year: "In Process",
          thesis: "In Process"
        }
      ]
    },
    {
      id: 7,
      name: "Dr. Manjusha Tatiya",
      qualification: "Ph.D in Computer Engineering",
      yearOfRecognition: "2023",
      scholars: [
        {
          name: "Pallavi Chavan",
          year: "11/24/2024",
          thesis: "Perishable produce quality prediction using machine learning - A smart system for nutrient loss estimation and freshness categorization"
        }
      ]
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="border border-gray-300 p-3 text-left">S.No</th>
            <th className="border border-gray-300 p-3 text-left">Name of Faculty</th>
            <th className="border border-gray-300 p-3 text-left">Qualification</th>
            <th className="border border-gray-300 p-3 text-left">Year of Recognition</th>
            <th className="border border-gray-300 p-3 text-left">Name of Scholar</th>
            <th className="border border-gray-300 p-3 text-left">Year of Registration</th>
            <th className="border border-gray-300 p-3 text-left">Title of Thesis</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((faculty, facultyIndex) => (
            faculty.scholars.map((scholar, scholarIndex) => (
              <tr 
                key={`${faculty.id}-${scholarIndex}`} 
                className={facultyIndex % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-50'}
              >
                {scholarIndex === 0 && (
                  <>
                    <td className="border border-gray-300 p-2 align-top" rowSpan={faculty.scholars.length}>
                      {faculty.id}
                    </td>
                    <td className="border border-gray-300 p-2 font-semibold align-top" rowSpan={faculty.scholars.length}>
                      {faculty.name}
                    </td>
                    <td className="border border-gray-300 p-2 align-top" rowSpan={faculty.scholars.length}>
                      {faculty.qualification}
                    </td>
                    <td className="border border-gray-300 p-2 align-top" rowSpan={faculty.scholars.length}>
                      {faculty.yearOfRecognition}
                    </td>
                  </>
                )}
                <td className="border border-gray-300 p-2">{scholar.name}</td>
                <td className="border border-gray-300 p-2">{scholar.year}</td>
                <td className="border border-gray-300 p-2">{scholar.thesis}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}
