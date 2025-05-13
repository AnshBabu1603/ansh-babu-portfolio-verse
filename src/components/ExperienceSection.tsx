
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <Card className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden transform transition-all hover:bg-black/40 duration-300">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Diploma Engineer Trainee
                </h3>
                <p className="text-lg text-gray-300">Jharkhand Government Tool Room, Ranchi</p>
              </div>
              
              <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                2022 - 2024 (2 years)
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                Worked as a Diploma Engineer Trainee at Jharkhand Government Tool Room, Ranchi for 2 years. 
                During this period, I gained valuable practical experience in the field of mechanical engineering
                and tool design.
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Responsibilities</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Responsible for conducting short-term training sessions on CNC (Turning & Milling) for trainees</li>
                  <li>Provided comprehensive training on AutoCAD to new students and professionals</li>
                  <li>Assisted in the development and maintenance of tool designs</li>
                  <li>Collaborated with senior engineers on various projects</li>
                  <li>Contributed to improving training methodologies and materials</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full">CNC Programming</span>
                  <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full">AutoCAD</span>
                  <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full">Technical Training</span>
                  <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full">Tool Design</span>
                  <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full">Machining</span>
                  <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full">Team Collaboration</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceSection;
