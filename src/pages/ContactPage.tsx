import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", reason: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nReason:\n${form.reason}`
    );
    window.location.href = `mailto:raj.anshbabu.ab@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="py-16 px-4">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-center text-foreground mb-8">Contact Me</h1>

            {submitted ? (
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <p className="text-lg text-foreground font-medium">Thank you for your response.</p>
                <p className="text-muted-foreground mt-2">I'll reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Reason for Contacting</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me why you'd like to connect..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Send
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
