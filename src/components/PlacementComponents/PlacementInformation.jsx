"use client";
import { useState } from "react";
import {
  placedStudentsData,
  placementMembers,
} from "@/static/placement/placement";

export default function PlacementInformation() {
  const [active, setActive] = useState("Placement Team");

  const handleMobileScroll = (e) => {
    // 1. Only run on mobile/tablet (less than 1024px)
    if (typeof window !== "undefined" && window.innerWidth >= 1024) return;

    const summary = e.currentTarget;
    const details = summary.parentElement;

    // 2. We check if it is currently closed (meaning the user just clicked to OPEN it)
    // Note: The onClick fires before the 'open' attribute toggles, so !open means it's about to open.
    if (!details.open) {
      // 3. specific timeout to let the DOM expand before scrolling
      setTimeout(() => {
        summary.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  };

  // ALL ACCORDION CONTENT
  const sectionContent = {
    "Placement Team": {
      type: "accordion",
      content: {
        "Placement Team Members": placementMembers,
      },
    },

    "Placed Students": {
      type: "placedStudents",
      content: placedStudentsData,
    },

    "Placement Policy": {
      type: "accordion",
      content: {
        "Policy Overview": [
          "The role of the Training and Placement Cell is of a facilitator and counselor for placement related activities. Training and Placement Cell provides 100% placement assistance to all the Registered students as per the norms provided here.",
          "Student interested in placements needs to register themselves as per the registration link provided which will contain their percentage of marks and contact details etc. in VI Semester, if they fail in submitting/updating their details by the end of the VI semester they will not be permitted to attend the interviews starting from VII semester onwards.",
        ],
        "Selection of Companies": [
          "Companies will be invited and scheduled by the Placement Cell on the basis of the following parameters:",
          "Job profile and growth prospects.",
          "The package being offered by the company.",
          "Past record of recruitment at ICEM.",
          "Feedback from the Alumni regarding the company.",
        ],
        "Eligibility Criteria": [
          "Student should get an aggregate of 60% & above throughout from SSC onwards.",
          "Student should not have any backlog subjects in B.E.",
          "Student should secure a minimum of 60% score in internal marks and soft skill training.",
          "Student should secure a minimum of 60% score in internal marks and soft skill training, Technical & Aptitude training conducted in the institute.",
        ],
        // "Rules for Placement": [
        //   "The placement committee strictly enforces ONE STUDENT ONE JOB OFFER policy.",
        //   "Companies visiting the campus are divided into the following categories:",
        //   "Category-A: Companies offering CTC >= Rs. 4 LPA.",
        //   "Category-B: Companies offering CTC >= Rs. 1.8 LPA but < Rs. 4 LPA.",
        //   "Category-C: Companies offering CTC < Rs. 1.8 LPA.",
        //   "Students may choose companies based on their specialization subject to all placement conditions.",
        //   "Once a student gives their name for an interview but does not attend, they will be blacklisted from further interviews and fined Rs. 1000 (subject to management approval).",
        //   "Once a student is placed in a company of their choice/potential, they cannot attend any further interviews conducted by the college (on-campus or off-campus).",
        //   "Any student withdrawing deliberately during a selection process will be disqualified from placements for the rest of the year.",
        //   "Any student opting out of the placement process must submit a written letter to the Placement Head stating the reason.",
        //   "Dress Code: Students must be formally dressed during any interaction with company representatives. Minimum requirement for men: formal shirt, trousers, tie, and leather shoes. For women: Salwar-Kameez or formal shirt and trousers.",
        //   "Once placed, students must submit a photocopy of the offer letter to the Placement Officer for records.",
        //   "Students must not negotiate CTC or compensation directly with company executives. Violation will lead to strict disciplinary action.",
        //   "Misbehaviour with Training & Placement Cell staff or student representatives will lead to debarment from the placement session.",
        //   "Students must provide correct and verifiable information in their resume. Any false information will lead to de-registration from placements.",
        //   "Placement policy may be revised based on market conditions to benefit the student community.",
        //   "Placement Cell will select student coordinators from all streams in December/January each year after completion/appearance of the 5th semester.",
        // ],
      },
    },
  };

  const tabs = Object.keys(sectionContent);

  // RENDER PLACED STUDENTS TABLE
  const renderPlacedStudents = (contentData) => {
    return (
      <div className="space-y-6">
        {Object.entries(contentData).map(([year, programs]) => (
          <div key={year} className="border border-gray-200 rounded-lg">
            <details className="group">
              <summary
                onClick={handleMobileScroll}
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg"
              >
                <h4 className="font-semibold text-secondary text-lg">
                  Academic Year {year}
                </h4>
                <span className="transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <div className="p-4 pt-2 space-y-6">
                {/* Engineering Students */}
                <div>
                  <h5 className="font-semibold text-primary mb-3 text-lg">
                    Engineering Students
                  </h5>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="p-3 border-b font-semibold w-16">
                            Sr.No.
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[180px]">
                            Student Name
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[150px]">
                            Company Name
                          </th>
                          <th className="p-3 border-b font-semibold w-24">
                            Stream
                          </th>
                          <th className="p-3 border-b font-semibold w-32">
                            Year of Passing
                          </th>
                          <th className="p-3 border-b font-semibold w-40">
                            Package (LPA)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {programs.engineering.map((student) => (
                          <tr
                            key={student.srNo}
                            className="hover:bg-gray-50 border-b last:border-b-0"
                          >
                            <td className="p-3 text-gray-600">
                              {student.srNo}
                            </td>
                            <td className="p-3 font-medium text-gray-800">
                              {student.studentName}
                            </td>
                            <td className="p-3 text-gray-700">
                              {student.companyName}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.stream}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.yearOfPassing}
                            </td>
                            <td className="p-3 font-semibold text-green-600">
                              {student.package}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MBA Students */}
                <div>
                  <h5 className="font-semibold text-primary mb-3 text-lg">
                    MBA Students
                  </h5>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="p-3 border-b font-semibold w-16">
                            Sr.No.
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[180px]">
                            Student Name
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[150px]">
                            Company Name
                          </th>
                          <th className="p-3 border-b font-semibold w-24">
                            Stream
                          </th>
                          <th className="p-3 border-b font-semibold w-32">
                            Year of Passing
                          </th>
                          <th className="p-3 border-b font-semibold w-40">
                            Package (LPA)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {programs.mba.map((student) => (
                          <tr
                            key={student.srNo}
                            className="hover:bg-gray-50 border-b last:border-b-0"
                          >
                            <td className="p-3 text-gray-600">
                              {student.srNo}
                            </td>
                            <td className="p-3 font-medium text-gray-800">
                              {student.studentName}
                            </td>
                            <td className="p-3 text-gray-700">
                              {student.companyName}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.stream}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.yearOfPassing}
                            </td>
                            <td className="p-3 font-semibold text-green-600">
                              {student.package}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MCA Students */}
                <div>
                  <h5 className="font-semibold text-primary mb-3 text-lg">
                    MCA Students
                  </h5>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="p-3 border-b font-semibold w-16">
                            Sr.No.
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[180px]">
                            Student Name
                          </th>
                          <th className="p-3 border-b font-semibold min-w-[150px]">
                            Company Name
                          </th>
                          <th className="p-3 border-b font-semibold w-24">
                            Stream
                          </th>
                          <th className="p-3 border-b font-semibold w-32">
                            Year of Passing
                          </th>
                          <th className="p-3 border-b font-semibold w-40">
                            Package (LPA)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {programs.mca.map((student) => (
                          <tr
                            key={student.srNo}
                            className="hover:bg-gray-50 border-b last:border-b-0"
                          >
                            <td className="p-3 text-gray-600">
                              {student.srNo}
                            </td>
                            <td className="p-3 font-medium text-gray-800">
                              {student.studentName}
                            </td>
                            <td className="p-3 text-gray-700">
                              {student.companyName}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.stream}
                            </td>
                            <td className="p-3 text-gray-600">
                              {student.yearOfPassing}
                            </td>
                            <td className="p-3 font-semibold text-green-600">
                              {student.package}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </details>
          </div>
        ))}
      </div>
    );
  };

  // RENDER ACCORDION CONTENT
  const renderContent = (contentData) => {
    if (contentData.type === "placedStudents") {
      return renderPlacedStudents(contentData.content);
    }

    return (
      <div className="space-y-4">
        {Object.entries(contentData.content).map(([title, items]) => (
          <div key={title} className="border border-gray-200 rounded-lg">
            <details className="group">
              <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-secondary text-lg">
                  {title}
                </h4>
                <span className="transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <div className="p-4 pt-2 space-y-4">
                {items.map((item, index) => {
                  // PDF LINK
                  if (item.pdf) {
                    return (
                      <a
                        key={index}
                        href={item.pdf}
                        target="_blank"
                        className="text-secondary underline font-medium"
                      >
                        {item.label}
                      </a>
                    );
                  }

                  // STAFF CARD
                  if (item.name) {
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-2 rounded-lg border border-gray-100 shadow-sm"
                      >
                        <div className="w-30 h-30 sm:w-30 sm:h-30 rounded-md bg-gray-200 overflow-hidden">
                          {item.img ? (
                            <img
                              src={item.img}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full object-cover bg-gray-300 justify-center p-2 text-gray">
                              Image here
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-secondary">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-700">
                            {item.position}
                          </p>
                          <p className="text-sm text-gray-700">
                            {item.department}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Mobile:</strong> {item.mobile}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Email:</strong> {item.email}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  // NORMAL TEXT
                  return (
                    <p key={index} className="text-gray-700 flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      {item}
                    </p>
                  );
                })}
              </div>
            </details>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Placement Information
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering students with comprehensive training and placement
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 sticky top-24 self-start border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">
              Quick Links
            </h3>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary"
                }`}
              >
                <span className="font-medium">{tab}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-2 md:p4 border border-gray-100">
            <div
              className="mb-6
            3 pb-4 border-b border-gray-200"
            >
              <h3 className="text-lg font-bold text-secondary">{active}</h3>
            </div>

            <div className="content-area">
              {renderContent(sectionContent[active])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
