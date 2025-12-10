import Image from "next/image";

export default function ResearchLab() {
  return (
    <>
      <section className="py-6 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Card Container 
            - Changed md:grid-cols-2 to lg:grid-cols-2: Keeps content stacked on tablets for better readability 
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch border border-gray-200 shadow-lg p-6 md:p-8 lg:p-10 bg-white rounded-2xl overflow-hidden">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4 lg:mb-6">
                Research Labs & Facilities
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base lg:text-lg">
                ICEM stands as a hub of innovation and experiential learning,
                where technology, creativity, and research converge. Every
                laboratory and facility is designed to nurture curiosity,
                encourage experimentation, and build industry-relevant
                expertise. These spaces empower students to translate concepts
                into real-world solutions, fostering hands-on learning,
                interdisciplinary collaboration, and future-ready innovation.
              </p>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-secondary mb-4 border-b border-gray-200 pb-2">
                  Key Facilities Include:
                </h3>

                {/* Responsive List:
                   - Mobile: 1 Column
                   - Tablet (sm): 2 Columns (saves vertical space)
                */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700 text-sm md:text-base font-medium">
                  {[
                    "Programming Labs – I & II",
                    "AI & Research Labs – I & II",
                    "Project Lab",
                    "Database Mgmt System Lab",
                    "iOS (Apple) Lab",
                    "Robotics & Automation Lab",
                    "Mechatronics Lab",
                    "CAD & Modelling Lab",
                    "Electronics & Digital Labs",
                    "Communication & IoT Labs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Image 
                - order-1: Shows image FIRST on mobile (better engagement)
                - lg:order-2: Shows image RIGHT on desktop
                - h-64: Compact height on mobile
                - lg:h-auto: Stretches to match text height on desktop
            */}
            <div className="order-1 lg:order-2 relative w-full h-64 sm:h-80 lg:h-auto min-h-[300px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/placement/researchlab.webp"
                alt="Research Lab at ICEM"
                fill
                className="object-cover"
                priority
              />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
