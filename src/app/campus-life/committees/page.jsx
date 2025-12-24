"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import GrievanceRedressal from "@/components/CampusLife/GrievanceRedressal";

const Statutory = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const committees = [
    {
      title: "1. Internal Compliance Committee (ICC)",
      content: (
        <>
          <p className="mb-4">
            Indira College of engineering and management has constituted Internal Complaints Committee to provide healthy and safe work environment among students and employees. It advocates the empowerment of women and has zero tolerance for any kind of sexual harassment. If any staff or students faces any type of discomfort they can directly approach the committee. 
            Sexual harassment is a violation of an individuals’ right to work and live with dignity. The College will respect the confidentiality and privacy of individuals reporting and the accused of sexual harassment to the extent possible. Care will be taken to see that complainants, witnesses and the harasser does not face victimization and discrimination during the process of enquiry. 
          </p>

          <h3 className="font-semibold mt-4">Objectives:</h3>
          <p className="mb-4">The objectives of the Internal Compliance are as follows:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>To evolve a permanent mechanism for the prevention and redressal of sexual harassment cases and other acts of gender-based violence at the Institute.</li>
            <li>To ensure the implementation of the policy in letter and spirit through proper reporting of the complaints and their follow-up procedures.</li>
            <li>To uphold the commitment of the Institute to provide an environment free of gender-based discrimination.</li>
            <li>To promote a social and psychological environment to raise awareness on sexual harassment in its various forms.</li>
          </ol>

          <h3 className="font-semibold mt-4">Functions:</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>This Committee functions as per the guidelines of the Sexual Harassment of Women at the Workplace (Prevention, Prohibition and Redressal) Act, 2013 and the UGC Regulations on Anti Sexual Harassment (2015).</li>
            <li>The Internal Committee handles the complaints and gives its recommendations to the Management for further action.</li>
            <li>The Committee works on complaints redressal, dissemination of information, conducting awareness workshops, for all the stakeholders and counseling in sensitive cases.</li>
          </ol>

          <h3 className="font-semibold mt-4">The Process for Complaint and Inquiry are as follows:</h3>
          <ul className="list-decimal pl-6 space-y-2 mb-4">
            <li><strong>Step I:</strong> An aggrieved woman or student can directly approach to Internal compliance committee.</li>
            <li><strong>Step II:</strong> Complaint should be in written form or either in person or email or through online complaint form. It should be submitted to the Internal Compliance committee.</li>
            <li><strong>Step III:</strong> On receipt of the complaint, the ICC will proceed to make an inquiry in accordance with the service rules or in their absence, in accordance with rules under the Act. The inquiry will be completed within 90 days. And the inquiry report will be submitted within 10 days from the date of completion of the inquiry.</li>
            <li><strong>Step IV:</strong> If the ICC finds that the allegations against the respondent are proven, it will submit a report to the Principal to take action in accordance with the provisions of the applicable service rules or where no service rules exist, in accordance with rules framed under the Act.</li>
            <li><strong>Step V:</strong> The college management will act on the recommendations of ICC within 30 days of the submission of the inquiry report.</li>
            <li><strong>Step VI:</strong> The complaints received in this regard are kept confidential.</li>
            <li><strong>Step VII:</strong> The link for online complaint is: <a href="https://forms.gle/o2bbV4s9PHq9jKcU6" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://forms.gle/o2bbV4s9PHq9jKcU6</a></li>
          </ul>

          <h3 className="font-semibold mt-4">Internal Compliance Committee (2025-26):</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">S. No.</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name of the staff</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Mobile No.</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Mail ID</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Dr. Manjusha Tomar", "Presiding Officer", "9834829883", "manjusha.tomar@indiraicem.ac.in"],
                  ["2", "Prof. Pranali Khatake", "Secretary", "7972395962", "pranali.khatake@indiraicem.ac.in"],
                  ["3", "Prof. Savita Jangale", "Member", "9881901218", "savita.jangale@indiraicem.ac.in"],
                  ["4", "Prof. Minal Patil", "Member", "9145616101", "patil.minal@indiraicem.ac.in"],
                  ["5", "Prof. Mandakini Dahiwade", "Member", "9765204878", "mandakini.dahiwade@indiraicem.ac.in"],
                  ["6", "Mrs. Anita Surve", "Non Teaching Staff Member", "8554841278", "anita.surve@indiraicem.ac.in"],
                  ["7", "Mr. Vasant Papal", "Civilian/NGO", "", ""],
                  ["8", "Mr. Dhanaraj Raut", "General Secretary(Student)", "9673263841", "dhanaraj.raut@indiraicem.ac.in"],
                  ["9", "Ms. Siddhi Patil", "Ladies Representative(Student)", "9145691506", "siddhi.patil142006@gmail.com"],
                  ["10", "Ms. Shravani Gurav", "Student", "8850505498", "shravanigurav60@gmail.com"],
                  ["11", "Mr. Ruturaj Yadav", "Student", "8530669649", "ruturajyadav0322@gmail.com"],
                ].map(([sno, name, desig, mobile, email]) => (
                  <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                    <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{mobile}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Help Line Number</h4>
            <p className="text-red-700">
              For any assistance/ complaint call - 02114-661 666<br />
              24 hours helpline no. is 7720010705
            </p>
          </div>
        </>
      ),
    },

    {
      title: "2. Anti-Ragging Committee",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name</th>
                <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Dr. Pravin Ghanegaonkar", "Chairman"],
                ["2", "Prof. Shubhangi Manvatkar", "Secretary*"],
                ["3", "Prof. Bhushan Nikam", "Faculty Member"],
                ["4", "Prof. Nitin Khandait", "Non-teaching staff member"],
                ["5", "Mr. Samadhan Fadtare", "Police Administration"],
                ["6", "Mr. Mahadeo Waghmare", "Local Media"],
                ["7", "Mr. Vasant Papal", "NGO (Youth Activities)"],
                ["8", "Mr. Vilas Waman", "Parent"],
                ["9", "Mr. Omkar Vilas Waman", "Student"],
                ["10", "Mr. Harshal Kakre", "Student"],
              ].map(([sno, name, desig]) => (
                <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                  <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                  <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                  <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "3. Equal Opportunity Cell",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name of the staff</th>
                <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Prof. Darshana Desai", "Coordinator *"],
                ["2", "Prof. Shrikant Jambale", "Member"],
                ["3", "Prof. Vrushali Patil", "Member"],
                ["4", "Prof. Reshma Kohad", "Member"],
                ["5", "Mr. Gaurav Varat", "Student Member"],
                ["6", "Mr. Vidheet Jadhav", "Student Member"],
                ["7", "Mr. Shubhankar Barate", "Student Member"],
                ["8", "Mr. Naziya Sayyed", "Student Member"],
              ].map(([sno, name, desig]) => (
                <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                  <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                  <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                  <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "4. Grievance Redressal Committee (Staff)",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name</th>
                <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Dr. Pravin Ghanegaonkar", "Chairperson"],
                ["2", "Dr. Saumitra Das", "Secretary*"],
                [
                  "3",
                  "Dr. Dadas Anand (Novel Wadia Institute of Mgmt.)",
                  "University Nominee",
                ],
                ["4", "Dr. Avinash Bansode", "Member (SC)"],
                ["5", "Dr. Priya Pise", "Member (Senior Staff)"],
              ].map(([sno, name, desig]) => (
                <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                  <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                  <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                  <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "5. Grievance Redressal Committee (Students)",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name</th>
                <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Dr. Pravin Ghanegaonkar", "Chairperson"],
                ["2", "Dr. Archana Salve", "Secretary*"],
                ["3", "Prof. Shelly Sinha", "Member (Women)"],
                ["4", "Prof. Deepali Dhanwad", "Member (ST)"],
                ["5", "Mr. Omkar Vilas Waman", "Member (Senior Student)"],
              ].map(([sno, name, desig]) => (
                <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                  <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                  <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                  <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "5. Internal Compliance Committee / ICC / Women Cell",
      content: (
        <>
          <h3 className="font-semibold mt-2 mb-4">
            INTERNAL COMPLIANCE COMMITTEE / ICC / WOMEN CELL
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name of the staff</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Dr. Manjusha Tomar", "Presiding Officer"],
                  ["2", "Prof. Manjusha Tatiya", "Secretary *"],
                  ["3", "Prof. Ashwin Dharme", "Faculty"],
                  ["4", "Mrs. Anita Surve", "Non Teaching Staff Member"],
                  ["5", "Mrs. Sonali Pradhan", "Non Teaching Staff Member"],
                  ["6", "Mr. Omkar Waman", "Student"],
                  ["7", "Mr. Harshal Kakre", "Student"],
                  ["8", "Ms. Pallavi Patil", "Student (Girl)"],
                  ["9", "Mr. Vasant Papal", "Civilian / NGO"],
                ].map(([sno, name, desig]) => (
                  <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                    <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-700">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                For any assistance / complaint call{" "}
                <strong>02114 661666</strong> or mail:{" "}
                <a
                  href="mailto:manjusha.tomar@indiraicem.ac.in"
                  className="text-blue-600 underline"
                >
                  manjusha.tomar@indiraicem.ac.in
                </a>
              </li>
              <li>
                24 hours' helpline no. is{" "}
                <strong className="text-blue-600">7720010705</strong>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "7. IQAC Committee",
      content: (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name of the Member</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "1",
                    "Mr. Sandeep Gaekwad",
                    "Member (Management Representative)",
                  ],
                  ["2", "Dr. R. K. Jain", "Ext. Experts (Local Society)"],
                  ["3", "Dr. Pravin Ghanegaonkar", "Principal - Chairman - IQAC"],
                  ["4", "Dr. Sunil Ingole", "Dy. Chairman — IQAC"],
                  [
                    "5",
                    "Dr. Rupa Hiremath",
                    "Dean Member Secretary (Sr. Teacher) *",
                  ],
                  ["6", "Dr. Kiran Devade", "Coordinator Member (Jr. Secretary)"],
                  ["7", "Mr. Varun Rathod", "Member (Alumni Nominee)"],
                  ["8", "Mr. Omkar Vilas Waman", "Member (Student Nominee)"],
                  ["9", "Dr. Poornashankar", "Member (Admin. Nominee)"],
                  ["10", "Mr. Atul Gore", "Member (Admin. Nominee)"],
                  ["11", "Mr. J S Sidhu", "Member (Admin. Nominee)"],
                  ["12", "Mr. Anita Surve", "Member (Admin. Nominee)"],
                  ["13", "Dr. Priyanka Pawar", "Member (Teacher's Nominee)"],
                  ["14", "Mrs. Manjusha Tatiya", "Member (Teacher's Nominee)"],
                  ["15", "Dr. Archana Salve", "Member (Teacher's Nominee)"],
                  ["16", "Dr. Darshana Desai", "Member (Teacher's Nominee)"],
                  ["17", "Dr. Soumitra Das", "Member (Teacher's Nominee)"],
                  ["18", "Dr. Priya Pise", "Member (Teacher's Nominee)"],
                  ["19", "Mr. VijayKumar Saini", "Member (Teacher's Nominee)"],
                ].map(([sno, name, desig]) => (
                  <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                    <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "8. SC / ST Committee",
      content: (
        <>
          <h3 className="font-semibold mt-2 mb-4">SC / ST COMMITTEE</h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name of the staff</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Prof. Pratima Gaikwad", "Chairman"],
                  ["2", "Prof. Sachin Ingle", "Secretary *"],
                  ["3", "Dr. Avinash Bansode", "Member"],
                  ["4", "Prof. Pragati Malusare", "Member"],
                  ["5", "Prof. Pranali Khatke", "Member"],
                ].map(([sno, name, desig]) => (
                  <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                    <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "9. Student Counsellor",
      content: (
        <>
          <h3 className="font-semibold mt-2 mb-4">STUDENT COUNSELLOR</h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name of the staff</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Dr. Priti Babar", "Psychologist"],
                  ["2", "Dr. Archana Salve", "Coordinator *"],
                  ["3", "Mr. Dhiraj Bhagwat", "Member"],
                ].map(([sno, name, desig]) => (
                  <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                    <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "10. Student Development Cell",
      content: (
        <>
          <h3 className="font-semibold mt-2 mb-4">STUDENT DEVELOPMENT CELL</h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm mt-3">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-center font-semibold text-sm md:text-base">Sr. No.</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Name of the staff</th>
                  <th className="border-b border-gray-200 p-2 md:p-3 text-left font-semibold text-sm md:text-base">Designation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Prof. Vijay Kumar Saini", "Coordinator *"],
                  ["2", "Prof. Pallavi Chavan", "Member"],
                  ["3", "Prof. Sagar Chirade", "Member"],
                  ["4", "Prof. Minal Jungare", "Member"],
                  ["5", "Prof. Madhuri Bore", "Member"],
                  ["6", "Prof. Meenakshi Patil", "Member"],
                ].map(([sno, name, desig]) => (
                  <tr key={sno} className="odd:bg-primary/10 even:bg-white hover:bg-primary/20">
                    <td className="border-b border-gray-200 p-2 md:p-3 text-center text-sm md:text-base">{sno}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{name}</td>
                    <td className="border-b border-gray-200 p-2 md:p-3 text-sm md:text-base">{desig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/banners/BannerOverviewPage.webp"
          alt="Statutory Committee"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Statutory Committee
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 md:gap-10 py-8 px-4 md:px-6">
        {/* Left Section */}
        <div className="w-full bg-white p-2 md:p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Statutory Committees
          </h2>

          <div className="space-y-3">
            {committees.map((section, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg bg-gray-50 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === i ? null : i)
                  }
                  className="w-full flex justify-between items-center px-2 md:px-4 py-3 text-left font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-[16px] font-medium">
                    {section.title}
                  </span>
                  <span className="text-xl text-secondary font-bold">
                    {activeAccordion === i ? "−" : "+"}
                  </span>
                </button>

                {activeAccordion === i && (
                  <div className="p-2 md:p-4 bg-white border-t border-gray-200">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          <section id="grievance" className="scroll-mt-[110px] scroll-smooth">
            <GrievanceRedressal />
          </section>
        </div>

        {/* Right Sidebar */}
        
      </div>
    </div>
  );
};

export default Statutory;
