import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 border-t border-border bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-foreground">Ansh Babu</h2>
            <p className="text-muted-foreground text-sm">AI/ML Engineer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:raj.anshbabu.ab@gmail.com"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/anshbabu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">© {currentYear} Ansh Babu. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Home</Link>
            <Link to="/projects" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Projects</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
