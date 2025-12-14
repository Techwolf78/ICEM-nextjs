import Image from "next/image";
import Link from "next/link";
import { Cpu, Database, Code, Bot, FolderOpen, Smartphone, Cog, Zap, CircuitBoard, Wifi, ArrowRight, CheckCircle } from "lucide-react";

export default function ResearchLab() {
  const facilities = [
    "Programming Labs I & II",
    "AI & Research Labs I & II",
    "Project Lab",
    "Database Management System Lab",
    "iOS (Apple) Lab",
    "Robotics & Automation Lab",
    "Mechatronics Lab",
    "CAD & Modelling Lab",
    "Electronics & Digital Labs",
    "Communication & IoT Labs"
  ];

  return (
    <section className="py-4 md:py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
            
            {/* Content Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                  Research Labs & Facilities
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  ICEM stands as a hub of innovation and experiential learning, where technology, creativity, and research converge. Our state-of-the-art facilities empower students to translate concepts into real-world solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative lg:order-last h-64 md:h-80 lg:h-full">
              <Image
                src="/placement/researchlab.webp"
                alt=""
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
