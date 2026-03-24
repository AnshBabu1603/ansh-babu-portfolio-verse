import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-12">Experience</h1>

          <motion.div
            className="bg-card border border-border rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Diploma Engineer Trainee</h3>
                <p className="text-muted-foreground">Jharkhand Government Tool Room, Ranchi</p>
              </div>
              <span className="text-sm bg-accent text-muted-foreground px-3 py-1.5 rounded-full whitespace-nowrap">
                2022 – 2024 (2 years)
              </span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Worked as a Diploma Engineer Trainee at Jharkhand Government Tool Room, Ranchi for 2 years. 
              Gained valuable practical experience in mechanical engineering and tool design.
            </p>

            <h4 className="font-semibold text-foreground mb-3">Responsibilities</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1.5 mb-6 text-sm">
              <li>Conducted short-term training sessions on CNC (Turning & Milling) for trainees</li>
              <li>Provided comprehensive training on AutoCAD to new students and professionals</li>
              <li>Assisted in the development and maintenance of tool designs</li>
              <li>Collaborated with senior engineers on various projects</li>
              <li>Contributed to improving training methodologies and materials</li>
            </ul>

            <h4 className="font-semibold text-foreground mb-3">Skills Developed</h4>
            <div className="flex flex-wrap gap-2">
              {["CNC Programming", "AutoCAD", "Technical Training", "Tool Design", "Machining", "Team Collaboration"].map(
                (skill, i) => (
                  <span key={i} className="text-xs bg-accent text-muted-foreground px-3 py-1 rounded-full">
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ExperiencePage;
