import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "C++", "C", "Python"],
    certifications: [
      { name: "C++ (Object Oriented Programming)", link: "https://drive.google.com/file/d/1cgB3nKhPbdfWpOMMv4jqy_M5RjX-me85/view?usp=drive_link" },
      { name: "Data Structures and Algorithms", link: "https://drive.google.com/file/d/11kci9asOmNlblJr1aVSe2CZHshzPQnHm/view?usp=drive_link" },
    ],
  },
  { category: "Machine Learning", items: ["Supervised Learning", "Unsupervised Learning", "NLP", "Computer Vision"] },
  { category: "Deep Learning", items: ["CNN", "Neural Networks"] },
  { category: "Libraries", items: ["Pandas", "Numpy", "Matplotlib", "Sci-kit learn", "Pytorch", "Tensorflow", "mediapipe", "retinaface"] },
  { category: "Operating Systems", items: ["Linux", "Windows"] },
  { category: "Frameworks & Tools", items: ["Jupyter Lab", "Google Colab", "AWS (EC2 and S3)", "Docker", "Automation Anywhere", "UiPath", "n8n"] },
  { category: "Soft Skills", items: ["Strong Stakeholder Management", "Rapport Building", "Proficient Speaking"] },
];

const SkillsPage = () => {
  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-12">Skills</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{skill.category}</h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {skill.certifications && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Certifications</p>
                    {skill.certifications.map((cert, i) => (
                      <a
                        key={i}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-primary hover:underline mb-1"
                      >
                        {cert.name}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SkillsPage;
