// RDCommitteeTable2324.jsx
export default function RDCommitteeTable2324() {
  const projectsData = [
    {
      id: 1,
      facultyName: "Prof. Shreyas Satpute, Prof. Vijay Saini Dr. Poorna Shankar",
      department: "Civil MCA",
      projectTitle: "Automated Aeroponic Indoor Eco air purifier (PAVANA)",
      amount: "51,580"
    },
    {
      id: 2,
      facultyName: "Dr. Mahesh Bhong Dr. Vinayak Kale",
      department: "Mechanical",
      projectTitle: "Microwave convective drying of green leafy vegetables",
      amount: "1,25,000"
    },
    {
      id: 3,
      facultyName: "Prof. S.S. Shirbhate, Dr. Sunil Ingole",
      department: "Mechanical",
      projectTitle: "Thermal analysis of horizontal jet cooling system on vertical target",
      amount: "73,000"
    },
    {
      id: 4,
      facultyName: "Dr. Poorna Shankar",
      department: "MCA",
      projectTitle: "AI controlled for security surveillance",
      amount: "45,000"
    },
    {
      id: 5,
      facultyName: "Dr. Soumitra Das",
      department: "Computer",
      projectTitle: "IoT Based Drone Crop Sprayer",
      amount: "50,000"
    },
    {
      id: 6,
      facultyName: "Prof. Vishal Meshram Prof. Hemant Darokar",
      department: "Mechanical",
      projectTitle: "In-campus Solar energy based charging station for Electric Vehicles.",
      amount: "40,000"
    },
    {
      id: 7,
      facultyName: "Prof. Pratima Gaikwad Dr. Manjusha Tomar Dr. Kiran Devade",
      department: "Basic Engg.",
      projectTitle: "Battery Balancing for a Multilevel Inverter",
      amount: "40,000"
    },
    {
      id: 8,
      facultyName: "Ms. Meenakshi Patil Prof. D.S.Bhagwat Ms. Rupali Salunke",
      department: "Computer",
      projectTitle: "Li-Fi Based Voice Controlled Robot",
      amount: "30,000"
    },
    {
      id: 9,
      facultyName: "Mr. Vishal Chaugule Mr. Nikhil Mulik Mr. Sachin Ingle",
      department: "CIVIL",
      projectTitle: "Sustainable replacement of cement and sand with commercial waste to alter the mechanical properties of concrete",
      amount: "30,000"
    },
    {
      id: 10,
      facultyName: "Mr. Ashwin Dharme Dr. Mahesh Bhong",
      department: "Mech",
      projectTitle: "Profile drying of Agricultural Produce to Increase Life Span",
      amount: "50,000"
    }
  ];

  const consultancyData = [
    {
      id: 1,
      facultyName: "Dr. Mahesh Bhong Prof. Sushil Chopade",
      department: "Mechanical",
      projectTitle: "300 Tons screw press Russian make for repairing installation and commissioning",
      amount: "1,77,600"
    }
  ];

  return (
    <div className="overflow-x-auto">
      {/* Projects Table */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Research Projects</h4>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="border border-gray-300 p-3 text-left">Sr.no</th>
              <th className="border border-gray-300 p-3 text-left">Faculty name</th>
              <th className="border border-gray-300 p-3 text-left">Dept.</th>
              <th className="border border-gray-300 p-3 text-left">Title of the project</th>
              <th className="border border-gray-300 p-3 text-left">Amount in INR</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr 
                key={project.id}
                className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-50'}
              >
                <td className="border border-gray-300 p-3">{project.id}</td>
                <td className="border border-gray-300 p-3 font-medium">{project.facultyName}</td>
                <td className="border border-gray-300 p-3">{project.department}</td>
                <td className="border border-gray-300 p-3">{project.projectTitle}</td>
                <td className="border border-gray-300 p-3">{project.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Consultancy Table */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Consultancy</h4>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="border border-gray-300 p-3 text-left">Sr.No</th>
              <th className="border border-gray-300 p-3 text-left">Faculty name</th>
              <th className="border border-gray-300 p-3 text-left">Dept.</th>
              <th className="border border-gray-300 p-3 text-left">Title of the project</th>
              <th className="border border-gray-300 p-3 text-left">Amount in INR</th>
            </tr>
          </thead>
          <tbody>
            {consultancyData.map((consultancy, index) => (
              <tr 
                key={consultancy.id}
                className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-50'}
              >
                <td className="border border-gray-300 p-3">{consultancy.id}</td>
                <td className="border border-gray-300 p-3 font-medium">{consultancy.facultyName}</td>
                <td className="border border-gray-300 p-3">{consultancy.department}</td>
                <td className="border border-gray-300 p-3">{consultancy.projectTitle}</td>
                <td className="border border-gray-300 p-3">{consultancy.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
  );
}
