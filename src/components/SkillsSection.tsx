
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => observer.observe(card));

    return () => {
      skillCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      icon: "💻",
      items: ["Java", "C++", "C", "Python"],
      certifications: [
        {
          name: "C++ (Object Oriented Programming)",
          link: "https://drive.google.com/file/d/1cgB3nKhPbdfWpOMMv4jqy_M5RjX-me85/view?usp=drive_link"
        },
        {
          name: "Data Structures and Algorithms",
          link: "https://drive.google.com/file/d/11kci9asOmNlblJr1aVSe2CZHshzPQnHm/view?usp=drive_link"
        }
      ],
      gradient: "from-purple-500 via-violet-500 to-indigo-500"
    },
    {
      category: "Machine Learning",
      icon: "🧠",
      items: ["Supervised Learning", "Unsupervised Learning", "NLP", "Computer Vision"],
      gradient: "from-cyan-500 via-blue-500 to-indigo-500"
    },
    {
      category: "Deep Learning",
      icon: "🔮",
      items: ["CNN", "Neural Networks"],
      gradient: "from-pink-500 via-fuchsia-500 to-purple-500"
    },
    {
      category: "Libraries",
      icon: "📚",
      items: ["Pandas", "Numpy", "Matplotlib", "Sci-kit learn", "Pytorch", "Tensorflow", "mediapipe", "retinaface"],
      gradient: "from-amber-500 via-orange-500 to-yellow-500"
    },
    {
      category: "Operating Systems",
      icon: "⚙️",
      items: ["Linux", "Windows"],
      gradient: "from-emerald-500 via-teal-500 to-green-500"
    },
    {
      category: "Frameworks & Tools",
      icon: "🔧",
      items: ["Jupyter Lab", "Google Colab"],
      gradient: "from-blue-500 via-sky-500 to-cyan-500"
    },
    {
      category: "Soft Skills",
      icon: "🗣️",
      items: ["Proficient Speaker", "Effective Communication", "Critical Thinking"],
      gradient: "from-rose-500 via-red-500 to-pink-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4" ref={skillsRef}>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="animated-gradient">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 perspective-1000">
        {skills.map((skill, index) => (
          <Card 
            key={index} 
            className={`skill-card bg-black/10 backdrop-blur-md border border-white/10 text-white overflow-hidden transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] opacity-0 translate-y-4 hover:rotate-y-10 card-3d`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.gradient} animate-pulse`}></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <CardContent className="p-6 relative z-10">
              <div className="text-4xl mb-4 float animate-bounce-slow">{skill.icon}</div>
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                {skill.category}
              </h3>
              
              <ul className="list-disc list-inside text-gray-200 mb-4 space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="py-1 hover:text-white transition-colors">{item}</li>
                ))}
              </ul>
              
              {skill.certifications && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Certifications</h4>
                  {skill.certifications.map((cert, i) => (
                    <Button key={i} variant="link" className="text-blue-300 hover:text-blue-200 p-0 h-auto mb-2 hover:scale-105 transition-transform" asChild>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-left"
                      >
                        {cert.name}
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
