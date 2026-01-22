import HomeSection from "../../components/sections/HomeSection";
import About from "../../components/sections/AboutSection";
import Navbar from "../../components/NavBar";
import TargetCursor from "@/components/TargetCursor";

const LandingPage = () => {
  return (
    <div className="w-full">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <Navbar />
      <HomeSection />
      <About />
    </div>
  );
};

export default LandingPage;