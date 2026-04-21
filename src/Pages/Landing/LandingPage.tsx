import Navigation from "../../Components/Landing/Navbar/Navigation";
import HeroSection from "../../Components/Landing/Hero/HeroSection";
import ContactPage from "../../Components/Landing/Contact-us/ContactPage";
import Testimonials from "../../Components/Landing/Testimonials/Testmonials";
import Footer from "../../Components/Landing/Footer/Footer";
import ChatWithIshtiaq from "../../Components/Landing/Chat-Bot/ChatWithIshtiaq";
import FeaturedProjects from "../../Components/Landing/My-Projects/FeaturedProjects";
import StatsSection from "../../Components/Landing/Stats/StatsSection";
import AboutMe from "../../Components/Landing/About/AboutMe";
import Skills from "../../Components/Landing/Skills/Skills";
import ExperienceSection from "../../Components/Landing/Experience/ExperienceSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutMe />
        <ExperienceSection />
        <div
          style={{
            backgroundImage: "url('/src/assets/Group 2147225150.png')",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Skills />
          <FeaturedProjects />
        </div>
        <ChatWithIshtiaq />
        <ContactPage />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}
