// RDCommitteeTable2223.jsx
export default function RDCommitteeTable2223() {
  const committeeMembers = [
    {
      id: 1,
      name: "Dr. Poorna Shankar",
      department: "Coordinator"
    },
    {
      id: 2,
      name: "Dr. Soumitra Das",
      department: "Member"
    },
    {
      id: 3,
      name: "Dr. Priyanka Pawar",
      department: "Member"
    },
    {
      id: 4,
      name: "Dr. Sunil Rathod",
      department: "Member"
    },
    {
      id: 5,
      name: "Dr. Manjusha Tatiya",
      department: "Member"
    },
    {
      id: 6,
      name: "Dr. Manjusha Tomar",
      department: "Member"
    },
    {
      id: 7,
      name: "Dr. Kiran Devade",
      department: "Member"
    },
    {
      id: 8,
      name: "Dr. Avinash Bansode",
      department: "Member"
    },
    {
      id: 9,
      name: "Dr. Archana Salve",
      department: "Member"
    },
    {
      id: 10,
      name: "Dr. Darshana Desai",
      department: "Member"
    },
    {
      id: 11,
      name: "Dr. Chetankumar Sedani",
      department: "Member"
    },
    {
      id: 12,
      name: "Dr. Mahesh Bhong",
      department: "Member"
    },
    {
      id: 13,
      name: "Dr. Vikas Nandgaonkar",
      department: "Member"
    },
    {
      id: 14,
      name: "Dr. Saurabh Gupta",
      department: "Member"
    },
    {
      id: 15,
      name: "Dr. Mandakini Dahiwade",
      department: "Member"
    },
    {
      id: 16,
      name: "Prof. Vishal Meshram",
      department: "Member"
    },
    {
      id: 17,
      name: "Prof. Shreyas Satpute",
      department: "Member"
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="border border-gray-300 p-3 text-left">Sr. No.</th>
            <th className="border border-gray-300 p-3 text-left">Name of Member</th>
            <th className="border border-gray-300 p-3 text-left">Department</th>
          </tr>
        </thead>
        <tbody>
          {committeeMembers.map((member, index) => (
            <tr 
              key={member.id}
              className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-50'}
            >
              <td className="border border-gray-300 p-3">{member.id}</td>
              <td className="border border-gray-300 p-3 font-medium">{member.name}</td>
              <td className="border border-gray-300 p-3">{member.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
  
    </div>
  );
}
