"use client";
import Image from "next/image";

export default function Upskilling() {
  const sections = [
    {
      title: "Mechanical",
      items: [
        { image: "/autocad.png", name: "AUTODESK AutoCAD" },
        { image: "/ptc-creo.png", name: "Creo" },
        { image: "/catia.png", name: "CATIA" },
        { image: "/solidworks.png", name: "SolidWorks" },
        { image: "/autocad.png", name: "CAD & CAM" },
        { image: "/assembly.png", name: "Assembly" },
      ],
    },
    {
      title: "Civil",
      items: [
        { image: "/revit.png", name: "Revit" },
        { image: "/etabs.png", name: "ETABS" },
        { image: "/bim360.png", name: "Autodesk BIM 360" },
        { image: "/staad.png", name: "STAAD.Pro" },
        { image: "/3max.png", name: "3DS Max" },
        { image: "/autocad.png", name: "AutoCAD" },
      ],
    },
    {
      title: "Electrical / ENTC",
      items: [
        { image: "/scada.png", name: "PLC SCADA" },
        { image: "/vehicle.png", name: "Electric Vehicle" },
        { image: "/trans.png", name: "Transformers & Circuits" },
        { image: "/battery.png", name: "Battery Management System" },
        { image: "/moble.png", name: "App/Web Development" },
        { image: "/iot.png", name: "Internet of Things (IoT)" },
      ],
    },
    {
      title: "AI - DS - ML",
      items: [
        { image: "/comp/ml.png", name: "Machine Learning" },
        { image: "/comp/python.png", name: "Python" },
        { image: "/comp/data-science.png", name: "Data Science" },
        { image: "/comp/tablo.png", name: "Tableau" },
        { image: "/comp/ai.png", name: "Artificial Intelligence" },
        { image: "/comp/deep.png", name: "Deep Learning" },
      ],
    },
    {
      title: "Computer",
      items: [
        { image: "/comp/full-stack.png", name: "Full Stack Development" },
        { image: "/comp/react.png", name: "React" },
        { image: "/comp/css.png", name: "HTML / CSS" },
        { image: "/comp/python.png", name: "Python" },
        { image: "/comp/mongodb.png", name: "MongoDB" },
        { image: "/comp/dsa.png", name: "DSA" },
      ],
    },
    {
      title: "IT",
      items: [
        { image: "/comp/nodejs.png", name: "Node.js" },
        { image: "/comp/django.png", name: "Django" },
        { image: "/comp/webdev.png", name: "App/Web Development" },
        { image: "/comp/linux.png", name: "Linux" },
        { image: "/comp/js.png", name: "JavaScript" },
        { image: "/comp/php.png", name: "PHP" },
      ],
    },
  ];

  return (
    <>
      {/* Upskilling for the Future Section (Balanced Compact Layout) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
            Upskilling for the Future
          </h2>

          {/* Skillverse Card */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm mb-6 overflow-hidden rounded-lg">
            {/* Left Column: Title */}
            <div className="bg-gray-50 md:w-[35%] flex items-center justify-center text-secondary font-semibold text-lg p-6 border-r border-gray-200">
              (Image here)
            </div>

            {/* Right Column: Points */}
            <div className="p-6 md:w-[65%]">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Interpersonal Skills
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>
                  Effective Communication Skills & Importance of Verbal and
                  Non-Verbal Communication
                </li>
                <li>Questioning Skills to Clarify Doubts and Assumptions</li>
                <li>Improving Listening Skills</li>
                <li>Mock GD & Mock PI</li>
                <li>Effective Writing Skills – Emails & Chats</li>
                <li>Emotional Intelligence in Communication</li>
                <li>7Cs of Professional Communication</li>
                <li>Telephone Communication Skills – Seven Aspects</li>
                <li>Managerial Communication Skills</li>
                <li>Conflict Management in Teams</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden rounded-lg">
            {/* Left Column: Title */}
            <div className="bg-gray-50 md:w-[35%] flex items-center justify-center text-secondary font-semibold text-lg p-6 border-r border-gray-200">
              (Image here)
            </div>

            {/* Right Column: Points */}
            <div className="p-6 md:w-[65%]">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Aptitude
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>Algebra and Number Theory</li>
                <li>Arithmetic and Mensuration</li>
                <li>Work, Time and Distance</li>
                <li>Permutations and Combinations</li>
                <li>Data Interpretation and Sufficiency</li>
                <li>Modern and Financial Mathematics</li>
                <li>Gamification</li>
                <li>Logical Reasoning and Puzzles</li>
                <li>Data Analysis and Probability</li>
                <li>Problem-Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering - Technical Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-10 uppercase">
            Engineering - Technical
          </h2>

          {/* Columns (Mechanical / Civil / ENTC) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3">
            {sections.map((section, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-base sm:text-lg font-bold text-secondary mb-4 sm:mb-5 uppercase tracking-wide">
                  {section.title}
                </h3>

                {/* Logos Grid (Same style as Companies section) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="relative h-16 sm:h-18 md:h-20 w-16 sm:w-18 md:w-20 bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all rounded-md overflow-hidden group"
                    >
                      {/* Logo */}
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="h-10 sm:h-12 w-10 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-110 p-1 sm:p-2"
                        fill
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, 80px"
                      />

                      {/* Hover Text Overlay */}
                      <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-[10px] sm:text-[11px] text-secondary font-semibold text-center px-1 leading-tight">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}