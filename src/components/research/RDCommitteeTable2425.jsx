// RDCommitteeTable2425.jsx
export default function RDCommitteeTable2425() {
  const committeeMembers = [
    {
      id: 1,
      name: "Dr. Nilesh Uke",
      portfolio: "Director RDC"
    },
    {
      id: 2,
      name: "Dr. Soumitra Das",
      portfolio: "Vice Principal"
    },
    {
      id: 3,
      name: "Dr. Poorna Shankar",
      portfolio: "Convener RDC"
    },
    {
      id: 4,
      name: "Dr. Sunil Rathod",
      portfolio: "Member"
    },
    {
      id: 5,
      name: "Dr. Mahesh Bhong",
      portfolio: "Member"
    },
    {
      id: 6,
      name: "Dr. Manjusha Tatiya",
      portfolio: "Member"
    },
    {
      id: 7,
      name: "Dr. Darshana Desai",
      portfolio: "Member"
    },
    {
      id: 8,
      name: "Mr. Vishal Meshram",
      portfolio: "Member"
    },
    {
      id: 9,
      name: "Mrs. Aditi Huparikar",
      portfolio: "Member"
    },
    {
      id: 10,
      name: "Mrs. Vrushali Patil",
      portfolio: "Member"
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="border border-gray-300 p-3 text-left">Sr. No.</th>
            <th className="border border-gray-300 p-3 text-left">Name of Member</th>
            <th className="border border-gray-300 p-3 text-left">Portfolio</th>
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
              <td className="border border-gray-300 p-3">{member.portfolio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
 
    </div>
  );
}