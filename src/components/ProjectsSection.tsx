
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Face Swap Based Deepfake Detection Tool",
      description: "Developed a sophisticated deepfake detection tool using Convolutional Neural Networks (CNN) to identify manipulated media content. The system can accurately differentiate between authentic and synthetically generated facial images.",
      link: "https://deepfake-vision-shield-other-device.vercel.app",
      tech: ["Python", "CNN", "Computer Vision", "Deep Learning"]
    },
    {
      title: "AI Based Emotion Detection Music Recommendation System",
      description: "Created a novel music recommendation system that analyzes facial expressions to detect emotions and suggests music based on the user's current emotional state. The system utilizes computer vision techniques for real-time emotion recognition.",
      link: "https://emotive-melody-muse-611b98d7.vercel.app/",
      tech: ["Computer Vision", "Machine Learning", "Emotion Detection", "Python"]
    },
    {
      title: "High Precision CNN Model",
      description: "Achieved an impressive 94% accuracy in a CNN model through meticulous dataset refinement and innovative data preprocessing techniques. Implemented advanced data augmentation strategies to enhance model generalization and performance.",
      link: "",
      tech: ["CNN", "Data Augmentation", "Deep Learning", "Model Optimization"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden flex flex-col h-full transform transition-all hover:scale-105 hover:bg-black/40 duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <CardContent className="p-6 flex-grow">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            
            {project.link && (
              <CardFooter className="border-t border-white/10 p-6">
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto" asChild>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit Project <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
