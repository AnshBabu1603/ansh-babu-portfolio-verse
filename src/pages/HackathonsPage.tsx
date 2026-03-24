import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const hackathons = [
  {
    title: "AWS Prompt Builder 2025",
    description:
      "Participated in the Prompt Builder 2025 hackathon organized by Student Organisation Vibranta under the aegis of Department of Student Organization, Division of Youth Affairs, Student Welfare Wing, Lovely Professional University.",
    image: "/cert_hackathon.jpg",
    date: "22-02-2025 to 23-02-2025",
  },
];

const HackathonsPage = () => {
  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-12">Hackathons</h1>

          <div className="space-y-6">
            {hackathons.map((h, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img src={h.image} alt={h.title} className="w-full h-full object-contain p-2" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{h.title}</h3>
                  <p className="text-sm text-primary mb-3">{h.date}</p>
                  <p className="text-muted-foreground text-sm">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HackathonsPage;
