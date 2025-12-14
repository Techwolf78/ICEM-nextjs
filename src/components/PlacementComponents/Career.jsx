// Career Component - Modern SaaS Design
import {
  FaUserGraduate,
  FaHandshake,
  FaLightbulb,
  FaIndustry,
} from "react-icons/fa";

export default function Career() {
  const cards = [
    {
      icon: <FaUserGraduate className="text-xl md:text-2xl text-secondary mb-3" />,
      title: "Alumni Mentorship & Placement Guidance",
      desc: "Connect with our powerful network of accomplished alumni for one-on-one mentorship. Get personalized guidance on career paths, resume building, and interview strategies to land your dream role.",
      bgColor: "#E2F4F6",
    },
    {
      icon: <FaHandshake className="text-xl md:text-2xl text-secondary mb-3" />,
      title: "Corporate Partnerships & Recruitment Drive",
      desc: "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from exclusive recruitment drives, on-campus placements, and direct access to sought-after employers actively seeking ICEM talent.",
      bgColor: "#E2F4F6",
    },
    {
      icon: <FaLightbulb className="text-xl md:text-2xl text-secondary mb-3" />,
      title: "Internships & Industry Exposure",
      desc: "Theory meets practice through mandatory, paid internships with our partner companies. From semester-long projects in Pune to global opportunities, gain invaluable hands-on experience that makes your resume stand out.",
      bgColor: "#E2F4F6",
    },
    {
      icon: <FaIndustry className="text-xl md:text-2xl text-secondary mb-3" />,
      title: "Career Development Workshops",
      desc: "We polish your professional edge. Through a continuous schedule of workshops—from mastering communication and leadership to acing mock interviews and building a powerful personal brand—we ensure you are not just qualified, but truly job-ready.",
      bgColor: "#E2F4F6",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-4 md:py-8"
      style={{ backgroundImage: `url('/placement/studentsraisinghands.webp')` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Your Career is Our Mission
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your potential is limitless, and so are your opportunities at ICEM. We
            merge academic rigor with real-world readiness, empowering you with
            the skills, network, and experience to excel.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                bg-white/90 border border-white/10 hover:border-white/40 hover:bg-white/95
                p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-md
                transition-all duration-300 transform hover:-translate-y-2
                flex flex-col items-center text-center h-full group
              `}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <div className="mb-4 md:mb-6" aria-hidden="true">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary/80 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
