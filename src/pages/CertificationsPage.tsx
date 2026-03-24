import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const certifications = [
  { name: "The Bits and Bytes of Computer Networking", image: "/Bits_and_bytes.jpg" },
  { name: "TCP/IP and Advanced Topics", image: "/TCP_and_IP.jpg" },
  { name: "Peer-to-Peer Protocols and Local Area Networks", image: "/Peer_to_peer_protocols.jpg" },
  { name: "Packet Switching Networks and Algorithms", image: "/Packet_switching.jpg" },
  { name: "Introduction to Hardware and Operating Systems", image: "/Hardware_and_OS.jpg" },
  { name: "Fundamentals of Network Communication", image: "/Network_communications.jpg" },
  { name: "Digital Systems: From Logic Gates to Processors", image: "/Digital_systems.jpg" },
  { name: "Computer Communications", image: "/Computer_communications.jpg" },
  { name: "Automation Developer Associate Training (v2024.10) for ICT Academy Cohort 2", image: "/cert_uipath.jpg" },
  { name: "Build Generative AI Apps and Solutions with No-Code Tools", image: "/cert_genai.jpg" },
  { name: "ChatGPT Made Easy: AI Essentials for Beginners", image: "/cert_chatgpt.jpg" },
  { name: "Master Generative AI & Generative AI tools (ChatGPT & More)", image: "/cert_master_genai.jpg" },
  { name: "Computational Theory: Language Principle & Finite Automata Theory", image: "/cert_automata.jpg" },
  { name: "Certified Essentials Automation Professional by Automation Anywhere", image: "/cert_aa.jpg" },
  { name: "Cloud Computing", image: "/cert_cloud.jpg" },
];

const CertificationsPage = () => {
  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-12">Certifications</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-contain p-2" />
                </div>
                <div className="p-4 border-t border-border">
                  <h3 className="text-sm font-medium text-foreground">{cert.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CertificationsPage;
