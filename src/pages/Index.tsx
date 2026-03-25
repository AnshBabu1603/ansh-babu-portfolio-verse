import { Link } from "react-router-dom";
import { MapPin, GraduationCap, Briefcase, BookOpen, Cpu, Film, Lightbulb } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/Ansh_new.jpg"
            alt="Ansh Babu"
            className="w-40 h-40 rounded-full object-cover object-[center_30%] mx-auto mb-6 border-4 border-border"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Ansh Babu</h1>
          <p className="text-lg text-primary font-medium mb-6">AI/ML Engineer</p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Step into my journey of building and learning! I transform bulk amounts of data into intelligent solutions using AI & Machine Learning.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              My Creations
            </Link>
            <Link
              to="/contact"
              className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Personal Facts */}
            <motion.div
              className="bg-card border border-border rounded-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Personal Facts</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Bihar, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-foreground">Pursuing B.Tech in Computer Science and Engineering</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium text-foreground">2 Years in Mentoring</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              className="bg-card border border-border rounded-xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">My Hobbies</h3>
              <div className="space-y-4">
                {[
                  { icon: BookOpen, label: "Teaching" },
                  { icon: Lightbulb, label: "Exploring Novel Technologies" },
                  { icon: BookOpen, label: "Reading" },
                  { icon: Film, label: "Watching Movies" },
                ].map((hobby, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <hobby.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{hobby.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning & Deep Learning", "Data Structures & Algorithms", "Computer Vision", "Manufacturing and Production"].map((area, i) => (
                  <span key={i} className="text-sm bg-accent text-foreground px-3 py-1.5 rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">My Journey</h2>
            <div className="bg-card border border-border rounded-xl p-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I am Ansh Babu, an aspiring AI/ML Engineer with an aim for making our life easy by creating simple yet significant solutions.
              </p>
              <p>
                My journey in tech started with an eagerness in machines and automation, understanding how modern technologies shape the future. As I got to know more about them, it expanded my curiosity in Artificial Intelligence and Machine Learning and how they are used to automate everything with a minimal human intervention.
              </p>
              <p>
                What motivates me is how advanced AI & ML Solutions have been evolved from its beginning and what they are capable of if understood properly. I am consistently upskilling myself through projects which could contribute to the betterment of society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">My Approach</h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                I personally think that if AI is understood and implemented properly it could bring a huge revolution, even for the minor sections of the society. I am always trying to focus on problems where I could make advanced solutions available for everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
