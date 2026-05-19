// import Footer from "@/components/Footer/Footer";
import AvailableTutorsSection from "@/components/Home/AvailableTutorsSection/AvailableTutorsSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import LearningJourneySection from "@/components/Home/LearningJourneySection/LearningJourneySection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection/WhyChooseUsSection";
// import Navbar from "@/components/navbar/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white overflow-hidden">
      {/* <Navbar /> */}
      <HeroSection/>
      <AvailableTutorsSection/>
      <LearningJourneySection/>
      <WhyChooseUsSection/>
      {/* <Footer /> */}

      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl"></div>
    </div>
  )
}
