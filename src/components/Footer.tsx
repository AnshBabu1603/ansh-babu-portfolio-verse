
import { Linkedin, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-black/30 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Ansh Babu</h2>
            <p className="text-gray-400">Computer Science Engineering Student & Machine Learning Enthusiast</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="mailto:cool.anshlegend123@gmail.com"
              className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ansh-babu-281419230/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} Ansh Babu. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#hero" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
            <a href="#education" className="text-gray-400 hover:text-white text-sm transition-colors">Education</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
