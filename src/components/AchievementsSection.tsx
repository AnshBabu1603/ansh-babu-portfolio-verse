
import React, { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Mentor for Skill Competition 2024",
      description: "Recognized for contribution and expertise as Mentor for the Skill Competition 2024 by Jharkhand Skill Development Mission Society.",
      image: "/JSDMS.jpg"
    },
    {
      title: "NX Training Program",
      description: "Successfully completed a training program on NX in 2022 at Jharkhand Government Tool Room, Ranchi.",
      image: "/NX.jpg"
    },
    {
      title: "German Language Youth Camp",
      description: "Participated in the German Language youth camp 'Hallo Deutsch' organized by German Language Centre, Patna under the aegis of Goethe-Institut/Max Mueller Bhavan Kolkata in 2016.",
      image: "/German.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements & Certifications</span>
      </h2>
      
      <div className="relative mx-auto max-w-5xl">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {achievements.map((achievement, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative inset-auto translate-y-0 bg-black/30 border-white/10 hover:bg-black/50">
              <ArrowLeft className="h-4 w-4 text-white" />
            </CarouselPrevious>
            <CarouselNext className="relative inset-auto translate-y-0 bg-black/30 border-white/10 hover:bg-black/50">
              <ArrowRight className="h-4 w-4 text-white" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AchievementsSection;
