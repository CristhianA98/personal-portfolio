import { AboutSection } from "./components/AboutSection";
import { HomeSection } from "./components/HomeSection";
import Navbar from "./components/Navbar";

export const Portfolio = () => {
  return (
    <>
      <div className="static h-screen bg-content-image bg-cover">
        {/* Navbar */}
        <Navbar />

        {/* Home Section */}
        <HomeSection />
        
        {/* About me Section */}
        <AboutSection />
      </div>
    </>
  );
};
