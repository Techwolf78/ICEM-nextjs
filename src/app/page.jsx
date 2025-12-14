import ScrollCrushWrapper from "@/components/ScrollCrushWrapper";
import dynamic from 'next/dynamic';

import HeroSlider from "@/components/home/HeroSlider";
import ExploreSection from "@/components/home/ExploreSection";
import DiscoverPaths from "@/components/home/DiscoverPaths";
import AcademicYearSection from "@/components/home/AcademicYearSection";
import RecruitersSection from "@/components/home/RecruiterSection";
import EnergyInnovation from "@/components/home/EnergyInnovation";
import CollegeUnplugged from "@/components/home/CollegeUnplugged";
const EventsSection = dynamic(() => import("@/components/home/EventSection"));
const Testimonials = dynamic(() => import("@/components/PlacementComponents/Testimonials"));
import CTASection from "@/components/home/CTASection";
const LazyInstagramMosaic = dynamic(() => import("@/components/home/LazyInstagramMosaic"));
import CampusBeat from "@/components/home/CampusBeat";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollCrushWrapper Hero={<HeroSlider />}>
        <ExploreSection />
        <DiscoverPaths />
        <AcademicYearSection />
        <RecruitersSection />
        <CampusBeat />
        <EnergyInnovation />
        <CollegeUnplugged />
        <EventsSection />
        <Testimonials />
        <CTASection />
        <LazyInstagramMosaic />
      </ScrollCrushWrapper>
    </div>
  );
}
