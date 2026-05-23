import AvailableTutorsSection from "@/components/Home/AvailableTutorsSection/AvailableTutorsSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import LearningJourneySection from "@/components/Home/LearningJourneySection/LearningJourneySection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection/WhyChooseUsSection";

export default function HomePage() {
  return (
    
    <div className="relative min-h-screen w-full bg-[#07111f] text-white overflow-x-hidden">
     
     
      <HeroSection />
      <AvailableTutorsSection />
      <LearningJourneySection />
      <WhyChooseUsSection />
     
     
      <div className="absolute left-[-100px] top-[-100px] -z-10 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-3xl sm:left-[-120px] sm:top-[-120px] sm:h-[400px] sm:w-[400px] sm:bg-cyan-500/20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] -z-10 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-3xl sm:bottom-[-120px] sm:right-[-120px] sm:h-[400px] sm:w-[400px] sm:bg-blue-500/20"></div>
    </div>
  )
}