
import { Card, CardContent } from "@/components/ui/card";

const HackathonsSection = () => {
  const hackathons = [
    {
      title: "AWS Prompt Builder 2025",
      description: "Participated in the Prompt Builder 2025 hackathon organized by Student Organisation Vibranta under the aegis of Department of Student Organization, Division of Youth Affairs, Student Welfare Wing, Lovely Professional University.",
      image: "/cert_hackathon.jpg",
      date: "22-02-2025 to 23-02-2025"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hackathons</span>
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {hackathons.map((hackathon, index) => (
          <Card key={index} className="bg-black/30 backdrop-blur-md border border-white/10 text-white overflow-hidden transition-all duration-300 hover:bg-black/40">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img 
                src={hackathon.image} 
                alt={hackathon.title} 
                className="w-full h-full object-contain p-2 bg-white/5" 
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {hackathon.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{hackathon.date}</p>
              <p className="text-gray-300">
                {hackathon.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HackathonsSection;
