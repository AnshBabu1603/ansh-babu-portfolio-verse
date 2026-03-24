import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Mentor for Skill Competition 2024",
    description: "Recognized for contribution and expertise as Mentor for the Skill Competition 2024 by Jharkhand Skill Development Mission Society.",
    image: "/JSDMS.jpeg",
  },
  {
    title: "NX Training Program",
    description: "Successfully completed a training program on NX in 2022 at Jharkhand Government Tool Room, Ranchi.",
    image: "/NX.jpeg",
  },
  {
    title: "German Language Youth Camp",
    description: "Participated in the German Language youth camp 'Hallo Deutsch' organized by German Language Centre, Patna under the aegis of Goethe-Institut/Max Mueller Bhavan Kolkata in 2016.",
    image: "/German.jpeg",
  },
];

const AchievementsPage = () => {
  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-12">Achievements</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AchievementsPage;
