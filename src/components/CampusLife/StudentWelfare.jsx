import React from "react";

export default function StudentWelfare() {
  const committeeMembers = [
    [
      "Prof. Vijay Kumar Saini",
      "Civil",
      "9819298069",
      "vijaykumar.saini@indiraicem.ac.in",
    ],
    [
      "Prof. Pallavi Chavan",
      "AI&DS",
      "9175151731",
      "pallavichavan@indiraicem.ac.in",
    ],
    [
      "Prof. Sagar Chirade",
      "Mechanical",
      "9860477823",
      "sagar.chirade@indiraicem.ac.in",
    ],
    [
      "Prof. Minal Jungare",
      "Computer",
      "9923979064",
      "minal.jungare@indiraicem.ac.in",
    ],
    [
      "Prof. Meenakshi Patil",
      "EnTc",
      "9921844112",
      "meenakshi.madgunaki@indiraicem.ac.in",
    ],
  ];

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Main Content */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md space-y-8 sm:space-y-12">
        {/* Objectives Section */}
        <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6">
          Objectives of the Student Development Cell
        </h2>

        <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base mb-6 sm:mb-10">
          <li>
            Propose various schemes from the <b>Board of Students' Development (BSD)</b> at Savitribai Phule Pune University (SPPU) and ensure their effective implementation once approved by BSD, SPPU.
          </li>
          <li>
            Form a <b>student council</b> in accordance with BSD, SPPU guidelines, guiding students in fulfilling their responsibilities and implementing various schemes and welfare activities.
          </li>
          <li>
            Serve as a liaison between the institute and SPPU, attend meetings at BSD, SPPU, and coordinate meetings with SDC faculty and student members.
          </li>
          <li>
            Ensure the follow-up, implementation, and auditing of approved BSD, SPPU schemes.
          </li>
        </ul>

        {/* Committee Table */}
        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-3 sm:mb-4">
          Student Development Cell Committee Members:
        </h3>
        <div className="overflow-x-auto mb-6 sm:mb-10">
          <table className="w-full border border-gray-300 text-left text-gray-800 text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">Staff Name</th>
                <th className="border border-gray-300 p-2">Department</th>
                <th className="border border-gray-300 p-2">Contact No.</th>
                <th className="border border-gray-300 p-2">Mail ID</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map(([name, dept, contact, email], index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-2">{name}</td>
                  <td className="border border-gray-300 p-2">{dept}</td>
                  <td className="border border-gray-300 p-2">{contact}</td>
                  <td className="border border-gray-300 p-2 text-xs sm:text-sm">{email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Earn & Learn Scheme Section */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-3 sm:mb-4">
          Karmaveer Bhaurao Patil Earn & Learn Scheme
        </h2>

        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
          <b>Indira College of Engineering and Management, Pune</b>, offers the <b>Karmaveer Bhaurao Patil Earn & Learn Scheme</b> for financially needy students. Sponsored by the Board of Students' Development, Savitribai Phule Pune University (SPPU), this scheme provides students with opportunities to work in various labs, the library, and other areas within the college. In return, they receive financial compensation for their contributions.
        </p>

        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
          This program not only supports the college's operations but also enables students to earn money while acquiring valuable professional skills and understanding the importance of financial responsibility. Each year, students are selected to participate in the Earn & Learn Scheme during the academic year.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
          Objectives of the Scheme
        </h3>
        <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
          <li>To provide financial assistance to economically weaker, needy, and promising students to acquire higher education.</li>
          <li>Upholding the dignity of human labor.</li>
          <li>To become a knowledge servant.</li>
          <li>Motivating students about self-employment.</li>
          <li>Creating awareness of work culture among students.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
          Eligibility for the Scheme
        </h3>
        <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
          <li>Students must have a parental annual income of Rs. 8,00,000/- or less, as per government rules.</li>
          <li>Income proof must be provided: either a certificate signed by the Tehsildar or Form No. 16 for employed parents.</li>
          <li>Applicable to regular students in degree or postgraduate courses at affiliated colleges, recognized institutes, or university departments under Savitribai Phule Pune University.</li>
          <li>Re-admitted or failed students will be ineligible for the Earn and Learn scheme.</li>
          <li>Students participating in the scheme must maintain at least 75% class attendance.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
          Work to be Done Under the 'Earn and Learn' Scheme
        </h3>
        <p className="text-gray-700 mb-2 text-sm sm:text-base">
          Students should be assigned tasks that promote their overall development and help them acquire various skills. Activities may include:
        </p>
        <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
          <li>Producing seedlings through a nursery.</li>
          <li>Preparing stationery materials required by the university or college, such as pens, files, notebooks, etc.</li>
          <li>Assisting with hostel administration, such as managing the phone call facility.</li>
          <li>Providing opportunities for students with skills or certificates in plumbing, electrical work, carpentry, and similar trades to utilize their knowledge and interests.</li>
          <li>Assisting in educational laboratories by receiving training in handling equipment and working as instrument operators.</li>
          <li>Perform typing and printing tasks as part of training.</li>
          <li>Assist faculty as research assistants in the postgraduate departments of the university.</li>
          <li>Undertake computer-based tasks in various departments, ensuring confidentiality and proper conduct.</li>
          <li>Work as a library assistant.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
          Working Hours
        </h3>
        <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
          <li>Students can be assigned up to three hours of office work per day.</li>
          <li>Office work will be suspended on holidays.</li>
          <li>Fieldwork may also be assigned for up to three hours per day.</li>
          <li>Students should be given a maximum of 75 hours of work per month.</li>
          <li>No work should be assigned on August 15th, January 26th, or May 1st.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
          Rate of Work
        </h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Students working under the scheme will be paid a remuneration of <b>Rs. 55/- per hour.</b> This rate should remain unchanged unless revised by the University Authority Board, in which case updates will be communicated to affiliated colleges and recognized institutions separately.
        </p>
      </div>
    </div>
  );
}