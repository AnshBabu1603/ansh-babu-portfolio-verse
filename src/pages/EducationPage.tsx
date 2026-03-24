import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    status: "Currently Pursuing",
    logo: "/LPU_logo.png",
    certLink: "https://drive.google.com/file/d/1PgcakOvFtlF-Qzm0TDlmKkbDQimOK0Tz/view?usp=drive_link",
  },
  {
    institution: "Jharkhand Government Tool Room",
    degree: "Diploma in Tool & Die Making",
    field: "Equivalent to Mechanical Engineering",
    status: "CGPA: 8.36",
    logo: "/JGTR_logo.png",
    certLink: "https://drive.google.com/file/d/1ba3tZ_3OIefdIh_9pnnF3G591vVzIi2t/view?usp=drive_link",
  },
];

const EducationPage = () => {
  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-12">Education</h1>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div className="flex items-start gap-4">
                  <img src={edu.logo} alt={edu.institution} className="w-14 h-14 object-contain rounded-lg bg-muted p-1" />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-foreground">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm">{edu.field}</p>
                    <p className="text-sm text-primary mt-1">{edu.status}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <a
                    href={edu.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EducationPage;
