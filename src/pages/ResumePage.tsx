import PageLayout from "@/components/PageLayout";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1KBjVObKSBMWle_kzs0X5EM1ItGsRZT_M";

const RESUME_PREVIEW_URL =
  "https://drive.google.com/file/d/1KBjVObKSBMWle_kzs0X5EM1ItGsRZT_M/preview";

const ResumePage = () => {
  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">My Resume</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Download my resume to learn more about my experience, skills, and qualifications.
            </p>

            <a
              href={RESUME_DOWNLOAD_URL}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>

          {/* Preview */}
          <motion.div
            className="mt-12 rounded-xl overflow-hidden border border-border shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              src={RESUME_PREVIEW_URL}
              title="Resume Preview"
              className="w-full h-[80vh]"
              allow="autoplay"
            />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResumePage;
