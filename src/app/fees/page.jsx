"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ChevronDown,
  Award,
  BookOpen,
  Users,
  Briefcase,
} from "lucide-react";

// Fee Documents Data
const feeData = {
  "Fee Structures": [
    { name: "Fee Structure 2025-26", pdf: "/fees/Fee structure 2025-26 (3).pdf", icon: FileText },
  ],
  "FRA Documents": [
    { name: "FRA 2025", pdf: "/fees/FRA 2025.pdf", icon: Award },
    { name: "Institute Level Admission FRA Fees", pdf: "/fees/Insttitute level admission FRA FEEs.pdf", icon: Users },
  ]
};

const categoryIcons = {
  "Fee Structures": BookOpen,
  "FRA Documents": Briefcase,
};

const FeesPage = () => {
  const [activeTab, setActiveTab] = useState("Fee Structures");
  const [activeItem, setActiveItem] = useState(null);

  const categories = Object.keys(feeData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#278da4] to-[#003c84] text-white py-6 md:py-8 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-2 tracking-tight"
            >
              Fees
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base md:text-lg opacity-90 leading-relaxed"
            >
              Fee Structures and FRA Documents for Academic Year 2025-26
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
              <div className="bg-white rounded-2xl shadow-xl p-2 md:p-4 border border-slate-200">
                <h2 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  Categories
                </h2>
                <div className="space-y-2 md:space-y-3">
                  {categories.map((category) => {
                    const Icon = categoryIcons[category];
                    return (
                      <motion.button
                        key={category}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setActiveTab(category);
                          setActiveItem(null);
                        }}
                        className={`w-full px-2 py-2 md:px-3 md:py-3 rounded-xl font-medium transition-all duration-300 text-left flex items-center gap-2 md:gap-3 ${
                          activeTab === category
                            ? "bg-gradient-to-r from-[#278da4] to-[#003c84] text-white shadow-lg"
                            : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:shadow-md"
                        }`}
                      >
                        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${activeTab === category ? 'text-white' : 'text-primary'}`} />
                        <span className="flex-1 text-sm md:text-base">{category}</span>
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
                className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-slate-200"
              >
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6 flex items-center gap-3">
                  {React.createElement(categoryIcons[activeTab], { className: "w-6 h-6 md:w-8 md:h-8 text-primary" })}
                  {activeTab}
                </h3>
                <div className="space-y-3">
                  {feeData[activeTab].map((item, itemIndex) => {
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
                            <span className="font-semibold text-slate-800 text-base md:text-lg">{item.name}</span>
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
                              <div className="px-2 md:px-4 pb-2 md:pb-4">
                                <div className="bg-slate-50 rounded-lg p-2 md:p-3 border border-slate-200">
                                  <iframe
                                    src={item.pdf}
                                    title={item.name}
                                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] border-0 rounded-md"
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

export default FeesPage;