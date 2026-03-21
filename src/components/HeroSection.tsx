
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div 
          className="md:w-1/2 space-y-6 text-center md:text-left relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            ANSH BABU
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome, I am Ansh. I Transform bulk data into intelligent solutions using AI & Machine Learning. Keen to teach machines to learn, adapt and solve problems.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center md:justify-start pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="mailto:raj.anshbabu.ab@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
            
            <a 
              href="#projects"
              className="border border-white/30 hover:border-purple-400 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Avatar className="w-64 h-64 border-4 border-white/20 overflow-hidden">
            <img 
              src="/Ansh_new.jpg" 
              alt="Ansh Babu" 
              className="object-cover w-full h-full" 
            />
          </Avatar>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
