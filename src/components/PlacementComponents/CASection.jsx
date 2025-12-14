// CASection Component - Modern SaaS Design
import { FaRocket, FaChartLine } from "react-icons/fa";

export default function CASsection() {
  const programs = [
    {
      icon: <FaRocket className="text-xl md:text-2xl text-secondary mb-3" />,
      title: "Industry Readiness Programme (IRP)",
      desc: "IRP is curated by Gryphon Academy to be a structured training initiative designed to prepare students for the real-world demands of the corporate world. It focuses on building technical expertise, professional communication, problem-solving abilities, workplace discipline, and overall confidence. Through hands-on training, mentorship, and industry-aligned modules, IRP ensures that every student graduates with the skills, mindset, and readiness to excel from day one in their careers.",
      gradient: "from-primary/10 to-primary/20",
    },
    {
      icon: <FaChartLine className="text-xl md:text-2xl text-secondary mb-3" />,
      title: "Career Leadership Development Programme (CLDP)",
      desc: "CLDP is conceptualized by Gryphon Academy as a specialized framework that trains the future MBA professionals to evolve into industry-ready leaders. It focuses on building aptitude, business communication, digital presence, and domain-specific competencies essential for corporate success. Through systematic training, guided mentorship, and specialization-driven modules, CLDP ensures every student is prepared to step confidently into leadership roles and achieve long-term career growth.",
      gradient: "from-secondary/10 to-secondary/20",
    },
  ];

  return (
    <section className="py-4 md:py-8 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3 md:mb-4 leading-tight">
            We Turn Your Potential Into Placement
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Indira College of Engineering and Management ensures every student
            steps into the industry with confidence. From specialized training
            to top-tier recruiter connect, our placement ecosystem is built to
            transform academic learning into real-world success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`
                bg-gradient-to-br ${program.gradient} border border-gray-200/60
                p-3 md:p-6 rounded-2xl shadow-sm hover:shadow-xl
                transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
                flex flex-col text-left h-full group
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-3 md:mb-4" aria-hidden="true">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/80 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {program.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                {program.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
