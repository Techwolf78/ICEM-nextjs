// PhdGuidesTable2223.jsx
export default function PhdGuidesTable2223() {
  const facultyData = [
    {
      id: 1,
      name: "Dr. Pravin Mahadeo Ghanegaonkar",
      qualification: "Ph.D.",
      recognizedAsGuide: "Yes",
      yearOfRecognition: "2016",
      stillServing: "Yes",
      scholars: [
        {
          name: "Ganesh K. Jadhav",
          year: "Complited Ph.D",
          thesis: "Upgradation of Turbo Ventilator through experimental investigation"
        },
        {
          name: "Milind B. Kulkarni",
          year: "Complited Ph.D",
          thesis: "Disposal of Flower Waste: Bio-gas generation option and co-digestion feasibillity"
        },
        {
          name: "Ramesh K. Kawade",
          year: "Complited Ph.D",
          thesis: "Design and analysis of Verical Axis Wind Turbine for Household Application"
        },
        {
          name: "Sushil M. Magar",
          year: "2022",
          thesis: "Investigation and Heat Transfer Analysis of Helical Cone Coil Oil Heat Exchanger"
        },
        {
          name: "Hrishikesh Hinse",
          year: "2021",
          thesis: "Development of Flow Measuring device as air foils flow meter"
        },
        {
          name: "Shweta Suryawanshi",
          year: "2021",
          thesis: "Modular Development of Conventional Vehicle into Electric Vehicle"
        }
      ]
    },
    {
      id: 2,
      name: "Dr. Mrs. Poornashankar",
      qualification: "Ph.D.",
      recognizedAsGuide: "Yes",
      yearOfRecognition: "2016",
      stillServing: "Yes",
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
          year: "24/3/2018",
          thesis: "Analysis of performance measures and effectiveness of devops framework in developing IoT applications"
        },
        {
          name: "Kiran Shinde",
          year: "11/3/2020",
          thesis: "Desigining of edge computing based smart health care framework using authentication services"
        },
        {
          name: "Ashish Dhoke",
          year: "11/3/2020",
          thesis: "To Design a Smart Navigation System for Multiple Destinations using GPS and Machine Learning Algorithm"
        },
        {
          name: "Sanjay Bankar",
          year: "15/7/2021",
          thesis: "Predicting the impact of pandemic on mental health and wellbeing among students of professional courses using AI & ML Techniques"
        }
      ]
    },
    {
      id: 3,
      name: "Dr. Vinayak Mohan Kale",
      qualification: "Ph.D.",
      recognizedAsGuide: "Yes",
      yearOfRecognition: "2016",
      stillServing: "Yes",
      scholars: [
        {
          name: "Mahesh Bhong",
          year: "(May 2016) Ph.D Awarded in Sep 2021",
          thesis: "Experimental Investigation and Analysis of the Air Dryer for Agriculture Produce"
        }
      ]
    },
    {
      id: 4,
      name: "Dr. Sunil Rathod",
      qualification: "Ph.D.",
      recognizedAsGuide: "Yes",
      yearOfRecognition: "2018",
      stillServing: "Yes",
      scholars: [
        {
          name: "Nilesh Mali",
          year: "2020",
          thesis: "Implementation of Information Security in Cloud Through Multi Access Control & Key Aggregation on Crypto System"
        },
        {
          name: "Sonali Purney",
          year: "2020",
          thesis: "Using AI to model the Future of Energy Conversation and Storage System"
        }
      ]
    },
    {
      id: 5,
      name: "Dr. Soumitra Das",
      qualification: "Ph.D.",
      recognizedAsGuide: "Yes",
      yearOfRecognition: "2019",
      stillServing: "Yes",
      scholars: [
        {
          name: "Mr. Malayaj Kumar",
          year: "2022",
          thesis: "Analysis of Speech of Political Leaders Writing NCP and AI: Its Effect on Political Discourse"
        }
      ]
    },
    {
      id: 6,
      name: "Dr. Archana Ravindra Salve",
      qualification: "Ph.D.",
      recognizedAsGuide: "Yes",
      yearOfRecognition: "2020",
      stillServing: "Yes",
      scholars: [
        {
          name: "Priyanka Budhkar",
          year: "22/3/2022",
          thesis: "A critical study of hybrid mode of working on employee performance in IT industry with reference to Pune and Mumbai region"
        },
        {
          name: "Pradip Sandbhor",
          year: "5/7/2022",
          thesis: "Impact of BVOC Education on student skill enhancement and job opppurtunities"
        },
        {
          name: "Gayatri Nimbalkar",
          year: "23/03/2023",
          thesis: "A Study of Work-Life Balance of Women Employees Post -Pandemic and Its Impact on Their Performance"
        }
      ]
    },
    {
      id: 7,
      name: "Dr. Darshana Jignesh Desai",
      qualification: "Ph.D.",
      recognizedAsGuide: "Yes",
      yearOfRecognition: "2021",
      stillServing: "Yes",
      scholars: [
        {
          name: "Raj Kamal Sangole",
          year: "28/6/2022",
          thesis: "Empirical Study of Hiring Trends in the IT Industry and Design a Model using Machine Learning Techniques"
        },
        {
          name: "Sameer Patil",
          year: "18/05/2023",
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
      id: 8,
      name: "Dr. Priya Jeevan Pise",
      qualification: "Ph.D.",
      recognizedAsGuide: "Yes",
      yearOfRecognition: "2022",
      stillServing: "Yes",
      scholars: [
        {
          name: "Ashish Bhujang Dudhale",
          year: "18/10/2022",
          thesis: "Electronics and Telecommunication Engineering"
        },
        {
          name: "Shweta Nishit Jain",
          year: "18/10/2022",
          thesis: "Electronics and Telecommunication Engineering"
        }
      ]
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="border border-gray-300 p-3 text-left">Sr. No.</th>
            <th className="border border-gray-300 p-3 text-left">Name of full time teacher</th>
            <th className="border border-gray-300 p-3 text-left">Qualification</th>
            <th className="border border-gray-300 p-3 text-left">Whether recognised as research Guide for Ph.D.</th>
            <th className="border border-gray-300 p-3 text-left">Year of Recognition as Research Guide</th>
            <th className="border border-gray-300 p-3 text-left">Is the teacher still serving the institution/If not last year of the service of Faculty to the Institution</th>
            <th className="border border-gray-300 p-3 text-left">Name of the scholar</th>
            <th className="border border-gray-300 p-3 text-left">Year of registration of the scholar</th>
            <th className="border border-gray-300 p-3 text-left">Title of the thesis for scholar</th>
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
                      {faculty.recognizedAsGuide}
                    </td>
                    <td className="border border-gray-300 p-2 align-top" rowSpan={faculty.scholars.length}>
                      {faculty.yearOfRecognition}
                    </td>
                    <td className="border border-gray-300 p-2 align-top" rowSpan={faculty.scholars.length}>
                      {faculty.stillServing}
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