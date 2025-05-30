
import { useEffect, useState, useRef } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showWelcome, setShowWelcome] = useState(true);
  
  // Fix: Properly type the ref object to use HTMLDivElement instead of HTMLElement
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      Object.entries(sectionsRef.current).forEach(([key, ref]) => {
        if (ref && scrollPosition >= ref.offsetTop && scrollPosition < ref.offsetTop + ref.offsetHeight) {
          setActiveSection(key);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {showWelcome && (
        <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
      )}

      <div className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen overflow-x-hidden">
        <Background />
        <FloatingElements />
        
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <img src="/Ansh.jpg" alt="Ansh Babu" />
              </Avatar>
              <span className="font-bold text-xl">Ansh Babu</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {["hero", "about", "education", "skills", "projects", "achievements", "experience"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-primary transition-colors capitalize ${
                    activeSection === section ? "text-primary font-bold" : "text-gray-300"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="mailto:cool.anshlegend123@gmail.com" className="hover:scale-110 transition-transform" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ansh-babu-281419230/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </nav>

{/*         <Avatar className="h-20 w-20 rounded-full absolute top-1/2 right-6 transform -translate-y-1/2">
          <img src="/Ansh1.jpeg" alt="Ansh Babu" className="object-cover h-full w-full rounded-full" />
        </Avatar> */}

        <main className="pt-20">
          <section 
            ref={(el) => (sectionsRef.current.hero = el as HTMLDivElement | null)} 
            id="hero" 
            className="min-h-screen flex items-center"
          >
            <HeroSection />
          </section>

          <section 
            ref={(el) => (sectionsRef.current.about = el as HTMLDivElement | null)} 
            id="about" 
            className="min-h-screen py-16"
          >
            <AboutSection />
          </section>

          <section 
            ref={(el) => (sectionsRef.current.education = el as HTMLDivElement | null)} 
            id="education" 
            className="min-h-screen py-16"
          >
            <EducationSection />
          </section>

          <section 
            ref={(el) => (sectionsRef.current.skills = el as HTMLDivElement | null)} 
            id="skills" 
            className="py-16"
          >
            <SkillsSection />
          </section>

          <section 
            ref={(el) => (sectionsRef.current.projects = el as HTMLDivElement | null)} 
            id="projects" 
            className="py-16"
          >
            <ProjectsSection />
          </section>

          <section 
            ref={(el) => (sectionsRef.current.achievements = el as HTMLDivElement | null)} 
            id="achievements" 
            className="py-16"
          >
            <AchievementsSection />
          </section>

          <section 
            ref={(el) => (sectionsRef.current.experience = el as HTMLDivElement | null)} 
            id="experience" 
            className="py-16"
          >
            <ExperienceSection />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;

