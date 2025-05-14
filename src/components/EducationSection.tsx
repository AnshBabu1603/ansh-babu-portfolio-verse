
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EducationSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span>
      </h2>
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>
        
        <div className="space-y-20">
          {/* Lovely Professional University */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-5/12 order-2 md:order-1">
              <Card className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                      <div className="bg-black/50 rounded-full p-2">
                        <img src="/LPU_logo.png" alt="LPU Logo" className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Lovely Professional University</h3>
                      <p className="text-gray-300">Bachelor of Technology</p>
                      <p className="text-gray-300">Computer Science & Engineering</p>
                      <p className="text-gray-400 text-sm">Currently Pursuing</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-300" asChild>
                      <a 
                        href="https://drive.google.com/file/d/1PgcakOvFtlF-Qzm0TDlmKkbDQimOK0Tz/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex items-center justify-center md:w-2/12 order-1 md:order-2">
              <div className="rounded-full h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-lg font-bold">Now</span>
              </div>
            </div>
            
            <div className="md:w-5/12 order-3">
              {/* Empty space for timeline alignment */}
            </div>
          </div>
          
          {/* Jharkhand Government Tool Room */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-5/12 order-2 md:order-3">
              <Card className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                      <div className="bg-black/50 rounded-full p-2">
                        <img src="/toolroomlogo.png" alt="JGTR Logo" className="w-16 h-16 object-contain" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Jharkhand Government Tool Room</h3>
                      <p className="text-gray-300">Diploma in Tool & Die Making</p>
                      <p className="text-gray-300">Equivalent to Mechanical Engineering</p>
                      <p className="text-gray-400 text-sm">CGPA: 8.36</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-300" asChild>
                      <a 
                        href="https://drive.google.com/file/d/1ba3tZ_3OIefdIh_9pnnF3G591vVzIi2t/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex items-center justify-center md:w-2/12 order-1 md:order-2">
              <div className="rounded-full h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-lg font-bold">2022</span>
              </div>
            </div>
            
            <div className="md:w-5/12 order-3 md:order-1">
              {/* Empty space for timeline alignment */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
