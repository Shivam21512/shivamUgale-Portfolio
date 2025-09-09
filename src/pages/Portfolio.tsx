import { motion } from "framer-motion";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Navbar from "@/components/portfolio/Navbar";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Portfolio;