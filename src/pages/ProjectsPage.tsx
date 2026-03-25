import PageLayout from "@/components/PageLayout";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Face Swap Based Deepfake Detection Tool",
    description:
      "Developed a sophisticated deepfake detection tool using Convolutional Neural Networks (CNN) to identify manipulated media content. Achieved 94% accuracy through meticulous dataset refinement and innovative data preprocessing techniques.",
    link: "https://deepfake-vision-shield-other-device.vercel.app",
    tech: ["Python", "CNN", "Computer Vision", "Deep Learning", "Data Augmentation"],
  },
  {
    title: "AI Based Emotion Detection Music Recommendation System",
    description:
      "Created a novel music recommendation system that analyzes facial expressions to detect emotions and suggests music based on the user's current emotional state.",
    link: "https://emotive-melody-muse-611b98d7.vercel.app/",
    tech: ["Computer Vision", "Machine Learning", "Emotion Detection", "Python"],
  },
  {
    title: "Retrieval Augmented Chatbot for University Examination Cell",
    description:
      "The system answers student queries related to exams (Mid Term Test, End Term, Reappear, holidays) using a Retrieval-Augmented Generation (RAG) approach.",
    link: "https://academic-guide-ai.vercel.app/",
    tech: ["RAG", "NLP", "LLM", "Python", "Vector Database"],
  },
  {
    title: "AI-Powered Detection of Rainfall Distribution Patterns",
    description:
      "This platform uses unsupervised machine learning models (KMeans & DBSCAN) to identify rainfall regimes and detect extreme climate patterns across Indian districts.",
    link: "https://climate-insights-hub.vercel.app/",
    tech: ["KMeans", "DBSCAN", "Unsupervised Learning", "Python", "Data Analysis"],
  },
  {
    title: "Diabetes Risk Predictor",
    description: "An advanced AI-powered tool for assessing diabetes risk based on clinical parameters.",
    link: "https://diabetespredictor-ruby.vercel.app/",
    tech: ["Machine Learning", "Healthcare AI", "Python", "Classification"],
  },
];

const ProjectsPage = () => {
  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-12">My Creations</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Website preview */}
                {project.link && (
                  <div className="aspect-video bg-muted overflow-hidden border-b border-border">
                    <iframe
                      src={project.link}
                      title={project.title}
                      className="w-full h-full pointer-events-none"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-accent text-muted-foreground px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                    >
                      Visit Project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
