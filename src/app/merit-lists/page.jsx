"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  FileText,
  ChevronDown,
  ChevronRight,
  Award,
  BookOpen,
  Users,
  Briefcase,
  Code,
  Settings
} from "lucide-react";

// Merit List Data for 2025-26 organized by program
const meritData = {
  "B.Tech": [
    { name: "B.Tech Vacancy Position", pdf: "/meritlist/Vacancy_ACAP_B.Tech.pdf", icon: FileText },
    { name: "ACAP Admission Merit List", pdf: "/meritlist/FE_ACAP_10092025.pdf", icon: Award },
    { name: "Institute Level Admission Merit List", pdf: "/meritlist/FE_IL_10092025.pdf", icon: Users },
    { name: "Merit List for ACAP Admission - Direct Second Year Engineering for the A.Y. 2025-26", pdf: "/meritlist/DSE_ACAP.pdf", icon: GraduationCap },
    { name: "Provisional Merit List for ACAP Admission - B.Tech First Year Engineering for the A.Y. 2025-26", pdf: "/meritlist/FE_ACAP_10092025.pdf", icon: FileText },
    { name: "Provisional Merit List for Institute Level Admission - B.Tech First Year Engineering for the A.Y. 2025-26", pdf: "/meritlist/FE_IL_10092025.pdf", icon: Users }
  ],
  "M.Tech": [
    { name: "M.Tech Vacancy Position after CAP", pdf: "/meritlist/updated vacancy report as on 10092025.pdf", icon: Settings },
    { name: "Merit List for ACAP/IL Admission - M.Tech Engineering for the A.Y. 2025-26", pdf: "/meritlist/M.Tech_ACAP IL merit list.pdf", icon: Code }
  ],
  "MBA": [
    { name: "MBA ACAP", pdf: "/meritlist/MBA_ACAP_10092025.pdf", icon: Briefcase },
    { name: "MBA IL", pdf: "/meritlist/MBA_IL_10092025.pdf", icon: Users },
    { name: "Notice ACAP IL Admission Reporting", pdf: "/meritlist/Notice_ACAP_IL Admission reporting.pdf", icon: FileText },
    { name: "Provisional Merit List for ACAP Admission - MBA First Year Engineering for the A.Y. 2025-26", pdf: "/meritlist/MBA_ACAP_10092025.pdf", icon: Briefcase },
    { name: "Provisional Merit List for Institute Level Admission - MBA First Year Engineering for the A.Y. 2025-26", pdf: "/meritlist/MBA_IL_10092025.pdf", icon: Users }
  ],
  "MCA": [
    { name: "MCA Vacancy Position after CAP", pdf: "/meritlist/updated vacancy report as on 10092025.pdf", icon: Settings },
    { name: "MCA ACAP", pdf: "/meritlist/MCA_ACAP_10092025.pdf", icon: Code },
    { name: "MCA IL", pdf: "/meritlist/MCA_IL_10092025.pdf", icon: Users },
    { name: "Notice ACAP IL Admission Reporting", pdf: "/meritlist/Notice_ACAP_IL Admission reporting.pdf", icon: FileText },
    { name: "Provisional Merit List for ACAP Admission - MCA First Year Engineering for the A.Y. 2025-26", pdf: "/meritlist/MCA_ACAP_10092025.pdf", icon: Code },
    { name: "Provisional Merit List for Institute Level Admission - MCA First Year Engineering for the A.Y. 2025-26", pdf: "/meritlist/MCA_IL_10092025.pdf", icon: Users }
  ],
  "BBA / MBA Integrated": [
    { name: "Advertisement For BBA BCA Admission", pdf: "/meritlist/Notice for ACAP and IL admission.pdf", icon: FileText },
    { name: "BBA After Cap4 Vacancy 2025-26", pdf: "/meritlist/updated vacancy report as on 10092025.pdf", icon: Settings },
    { name: "BBA Merit List", pdf: "/meritlist/MBA_ACAP_10092025.pdf", icon: Briefcase }
  ],
  "BCA / MCA Integrated": [
    { name: "Advertisement For BBA BCA Admission", pdf: "/meritlist/Notice for ACAP and IL admission.pdf", icon: FileText },
    { name: "Vacancy Position Of BCA MCA Integrated", pdf: "/meritlist/updated vacancy report as on 10092025.pdf", icon: Settings },
    { name: "BCA Merit List", pdf: "/meritlist/MCA_ACAP_10092025.pdf", icon: Code }
  ]
};

const programIcons = {
  "B.Tech": GraduationCap,
  "M.Tech": Code,
  "MBA": Briefcase,
  "MCA": Code,
  "BBA / MBA Integrated": BookOpen,
  "BCA / MCA Integrated": Code
};

const MeritListsPage = () => {
  const [activeTab, setActiveTab] = useState("B.Tech");
  const [activeItem, setActiveItem] = useState(null);

  const programs = Object.keys(meritData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#278da4] to-[#003c84] text-white py-8 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold mb-2 tracking-tight"
            >
              Merit Lists 2025-26
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg opacity-90 leading-relaxed"
            >
              Institute Level & ACAP Merit Lists for Academic Year 2025-26
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-4"
          >
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-xl p-4 border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Programs
                </h2>
                <div className="space-y-3">
                  {programs.map((program) => {
                    const Icon = programIcons[program];
                    return (
                      <motion.button
                        key={program}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setActiveTab(program);
                          setActiveItem(null);
                        }}
                        className={`w-full px-3 py-3 rounded-xl font-medium transition-all duration-300 text-left flex items-center gap-3 ${
                          activeTab === program
                            ? "bg-gradient-to-r from-[#278da4] to-[#003c84] text-white shadow-lg"
                            : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:shadow-md"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${activeTab === program ? 'text-white' : 'text-primary'}`} />
                        <span className="flex-1">{program}</span>
                        {activeTab === program && <ChevronRight className="w-5 h-5" />}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  {React.createElement(programIcons[activeTab], { className: "w-8 h-8 text-primary" })}
                  {activeTab} Merit Lists & Documents
                </h3>
                <div className="space-y-3">
                  {meritData[activeTab].map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                        className="border border-slate-200 rounded-xl shadow-sm overflow-hidden"
                      >
                        <motion.button
                          whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
                          onClick={() =>
                            setActiveItem(activeItem === itemIndex ? null : itemIndex)
                          }
                          className="w-full flex justify-between items-center px-4 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                          aria-expanded={activeItem === itemIndex}
                          aria-controls={`content-${itemIndex}`}
                        >
                          <div className="flex items-center gap-4">
                            <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                            <span className="font-semibold text-slate-800 text-lg">{item.name}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: activeItem === itemIndex ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-6 h-6 text-slate-500" />
                          </motion.div>
                        </motion.button>
                        <AnimatePresence>
                          {activeItem === itemIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                              id={`content-${itemIndex}`}
                            >
                              <div className="px-4 pb-4">
                                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                                  <iframe
                                    src={item.pdf}
                                    title={item.name}
                                    className="w-full h-[500px] border-0 rounded-md"
                                    scrolling="yes"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeritListsPage;