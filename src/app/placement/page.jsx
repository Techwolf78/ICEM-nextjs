import Image from "next/image";
import Typingsection from "@/components/PlacementComponents/TypingSection";
import CASsection from "@/components/PlacementComponents/CASection";
import TrainingOverview from "@/components/PlacementComponents/TrainingOverview";
import Impact from "@/components/PlacementComponents/Impact";
import Companies from "@/components/PlacementComponents/Companies";
import ResearchLab from "@/components/PlacementComponents/ResearchLab";
import Career from "@/components/PlacementComponents/Career";
import Testimonials from "@/components/PlacementComponents/Testimonials";
import PlacementInformation from "@/components/PlacementComponents/PlacementInformation";
import Upskilling from "@/components/PlacementComponents/Upskilling";
import CTASection from "@/components/home/CTASection";

/**
 * Render the Placement page composed of placement-related sections in the defined order.
 * @returns {JSX.Element} A React element representing the Placement page layout.
 */
function Placement() {
  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <Image
          src="/placement/PlacementBanner2.webp"
          alt="Placement Banner"
          width={1920}
          height={600}
          className="object-cover w-full h-auto"
        />
      </div>
      <Typingsection />
      <Impact />
      <section id="companies" className="scroll-mt-[110px] scroll-smooth ">
        <Companies />
      </section>
      <section id="lab" className="scroll-mt-[110px] scroll-smooth">
        <ResearchLab />
      </section>
      <Career /> {/* Add logos etc here */}
      <section id="career-advancement" className="scroll-mt-[110px] scroll-smooth">
        <CASsection />
      </section>
      <TrainingOverview />
      <Upskilling />
      <Testimonials />
      <CTASection />
      <PlacementInformation /> {/* All the extra content goes here */}
    </div>
  );
}

export default Placement;
