
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
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
      ]
    },
    {
      category: "Machine Learning",
      items: ["Supervised Learning", "Unsupervised Learning", "NLP", "Computer Vision"]
    },
    {
      category: "Deep Learning",
      items: ["CNN", "Neural Networks"]
    },
    {
      category: "Libraries",
      items: ["Pandas", "Numpy", "Matplotlib", "Sci-kit learn", "Pytorch", "Tensorflow", "mediapipe", "retinaface"]
    },
    {
      category: "Operating Systems",
      items: ["Linux", "Windows"]
    },
    {
      category: "Frameworks & Tools",
      items: ["Jupyter Lab", "Google Colab"]
    },
    {
      category: "Soft Skills",
      items: ["Proficient Speaker", "Effective Communication", "Critical Thinking"]
    }
  ];

  const networkCertifications = [
    { name: "The Bits and Bytes of Computer Networking", image: "/Bits_and_bytes.jpg" },
    { name: "TCP/IP and Advanced Topics", image: "/TCP_and_IP.jpg" },
    { name: "Peer-to-Peer Protocols and Local Area Networks", image: "/Peer_to_peer_protocols.jpg" },
    { name: "Packet Switching Networks and Algorithms", image: "/Packet_switching.jpg" },
    { name: "Introduction to Hardware and Operating Systems", image: "/Hardware_and_OS.jpg" },
    { name: "Fundamentals of Network Communication", image: "/Network_communications.jpg" },
    { name: "Digital Systems: From Logic Gates to Processors", image: "/Digital_systems.jpg" },
    { name: "Computer Communications", image: "/Computer_communications.jpg" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden transform transition-transform hover:scale-105 duration-300">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {skill.category}
              </h3>
              
              <ul className="list-disc list-inside text-gray-300 mb-4">
                {skill.items.map((item, i) => (
                  <li key={i} className="py-1">{item}</li>
                ))}
              </ul>
              
              {skill.certifications && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Certifications</h4>
                  {skill.certifications.map((cert, i) => (
                    <Button key={i} variant="link" className="text-blue-400 hover:text-blue-300 p-0 h-auto mb-2" asChild>
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
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Academic Certifications
          </span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkCertifications.map((cert, index) => (
            <Card key={index} className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h4 className="absolute bottom-4 left-4 right-4 text-white font-semibold">{cert.name}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
