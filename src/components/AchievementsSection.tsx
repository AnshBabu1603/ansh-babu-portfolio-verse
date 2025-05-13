
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Mentor for Skill Competition 2024",
      description: "Recognized for contribution and expertise as Mentor for the Skill Competition 2024 by Jharkhand Skill Development Mission Society.",
      image: "/JSDMS.jpeg"
    },
    {
      title: "NX Training Program",
      description: "Successfully completed a training program on NX in 2022 at Jharkhand Government Tool Room, Ranchi.",
      image: "/NX.jpeg"
    },
    {
      title: "German Language Youth Camp",
      description: "Participated in the German Language youth camp 'Hallo Deutsch' organized by German Language Centre, Patna under the aegis of Goethe-Institut/Max Mueller Bhavan Kolkata in 2016.",
      image: "/German.jpeg"
    }
  ];

  const academicCertifications = [
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
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements & Certifications</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {achievements.map((achievement, index) => (
          <Card key={index} className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img 
                src={achievement.image} 
                alt={achievement.title} 
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-300" 
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {achievement.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 relative z-10">
        <h3 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Academic Certifications
          </span>
        </h3>
        
        <div className="mx-auto max-w-4xl relative">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
              duration: 40,
            }}
            className="relative"
          >
            <CarouselContent>
              {academicCertifications.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden transform transition-transform hover:scale-105 duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                      <div className="h-64 overflow-hidden relative">
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          className="w-full h-full object-contain p-2" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      </div>
                      <CardContent className="p-4 text-center">
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
                          {cert.name}
                        </h4>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 border-none text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
