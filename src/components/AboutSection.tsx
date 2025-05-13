
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-semibold mb-4">Profile</h3>
            <p className="text-gray-300 mb-6">
              An aspiring AI/ML Engineer fascinated in Artificial Intelligence and Automation. 
              My passion lies in Machine Learning, Deep Learning, Computer Vision and Critical thinking 
              through Data Structures and Algorithms. A Geek for exploring new skills and enhancing my existing ones.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:cool.anshlegend123@gmail.com" className="text-gray-300 hover:text-white">
                  cool.anshlegend123@gmail.com
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Linkedin className="h-5 w-5 text-blue-400" />
                <a href="https://www.linkedin.com/in/ansh-babu-281419230/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  linkedin.com/in/ansh-babu-281419230/
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-semibold mb-4">Interests & Expertise</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg text-blue-400 mb-2">Field of Interest</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Public Speaking</li>
                  <li>Exploring Novel Techniques in Machine Learning</li>
                  <li>Computer Vision</li>
                  <li>Deep Learning Applications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-blue-400 mb-2">Areas of Expertise</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Machine Learning & Deep Learning</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Computer Vision</li>
                  <li>Software Development</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
