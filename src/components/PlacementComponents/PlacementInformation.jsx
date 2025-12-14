"use client";
import { useState } from "react";
import {
  placedStudentsData,
  placementMembers,
} from "@/static/placement/placement";
import {
  Users,
  FileText,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  Building,
  Calendar,
  TrendingUp,
  Star,
  CheckCircle,
  Info
} from "lucide-react";

export default function PlacementInformation() {
  const [active, setActive] = useState("Placement Team");

  const handleMobileScroll = (e) => {
    // Enhanced mobile scroll behavior for better UX
    if (typeof window !== "undefined" && window.innerWidth >= 1024) return;

    const summary = e.currentTarget;
    const details = summary.parentElement;

    if (!details.open) {
      setTimeout(() => {
        summary.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }, 350); // Slightly longer delay for smoother animation
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

    "Top Placed Students": {
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
      <div className="space-y-8">
        {Object.entries(contentData).map(([year, programs]) => (
          <div key={year} className="bg-gray-50/50 rounded-xl border border-gray-100 overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50/80 transition-colors duration-200">
                <h4 className="font-semibold text-gray-900 text-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  Academic Year {year}
                </h4>
                <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="p-6 space-y-8">
                {/* Engineering Students */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 px-6 py-4 border-b border-gray-100">
                    <h5 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                      <Building className="w-5 h-5 text-secondary" />
                      Engineering Students
                    </h5>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stream</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Year</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Package</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {programs.engineering.map((student, index) => (
                          <tr key={student.srNo} className="hover:bg-gray-50 transition-colors duration-150">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.srNo}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.studentName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.companyName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                                {student.stream}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.yearOfPassing}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded-full">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {student.package}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MBA Students */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 px-6 py-4 border-b border-gray-100">
                    <h5 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                      <Star className="w-5 h-5 text-secondary" />
                      MBA Students
                    </h5>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stream</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Year</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Package</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {programs.mba.map((student, index) => (
                          <tr key={student.srNo} className="hover:bg-gray-50 transition-colors duration-150">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.srNo}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.studentName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.companyName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                                {student.stream}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.yearOfPassing}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded-full">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {student.package}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MCA Students */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 px-6 py-4 border-b border-gray-100">
                    <h5 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                      <Building className="w-5 h-5 text-secondary" />
                      MCA Students
                    </h5>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stream</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Year</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Package</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {programs.mca.map((student, index) => (
                          <tr key={student.srNo} className="hover:bg-gray-50 transition-colors duration-150">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.srNo}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.studentName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.companyName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                                {student.stream}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.yearOfPassing}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded-full">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {student.package}
                              </span>
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
          <div key={title} className="bg-gray-50/50 rounded-xl border border-gray-100 overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50/80 transition-colors duration-200">
                <h4 className="font-semibold text-gray-900 text-lg flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-secondary" />
                  </div>
                  {title}
                </h4>
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-6 pb-6 space-y-4">
                {items.map((item, index) => {
                  // PDF LINK
                  if (item.pdf) {
                    return (
                      <a
                        key={index}
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg transition-colors duration-200 font-medium"
                      >
                        <FileText className="w-4 h-4" />
                        {item.label}
                      </a>
                    );
                  }

                  // STAFF CARD
                  if (item.name) {
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            {item.img ? (
                              <img
                                src={item.img}
                                alt={`${item.name} profile`}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : (
                              <Users className="w-8 h-8 text-secondary" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-gray-900 text-lg mb-1">{item.name}</h5>
                            <p className="text-secondary font-medium mb-2">{item.position}</p>
                            <p className="text-gray-600 text-sm mb-3">{item.department}</p>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span>{item.mobile}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="truncate">{item.email}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // NORMAL TEXT
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
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
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 py-4 md:py-8" aria-labelledby="placement-info-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-2 md:mb-8">
          <h2 id="placement-info-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 leading-tight">
            Placement Information
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering students with comprehensive training and placement opportunities for successful careers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Navigation Sidebar */}
          <nav className="lg:col-span-1" role="navigation" aria-label="Placement information navigation">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 backdrop-blur-sm sticky top-8">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-secondary" />
                  Quick Links
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {tabs.map((tab, index) => {
                  const icons = [<Users className="w-4 h-4" />, <FileText className="w-4 h-4" />, <Info className="w-4 h-4" />];
                  const isActive = active === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActive(tab)}
                      className={`group w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                        isActive
                          ? "bg-secondary/10 text-secondary shadow-md border border-secondary/20"
                          : "hover:bg-gray-50 text-gray-700 hover:text-gray-900 border border-transparent"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className={`p-1.5 rounded-lg transition-colors ${
                        isActive ? "bg-secondary/20 text-secondary" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                      }`}>
                        {icons[index]}
                      </div>
                      <span className="font-medium">{tab}</span>
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto text-secondary" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 backdrop-blur-sm overflow-hidden">
              <div className="bg-secondary p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    {active === "Placement Team" && <Users className="w-6 h-6 text-white" />}
                    {active === "Top Placed Students" && <Star className="w-6 h-6 text-white" />}
                    {active === "Placement Policy" && <FileText className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{active}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="content-area">
                  {renderContent(sectionContent[active])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
