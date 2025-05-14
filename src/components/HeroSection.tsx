
import { useEffect, useRef, useState } from 'react';
import { Avatar } from "@/components/ui/avatar";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateRotation = (x: number, y: number) => {
    const maxRotation = 10;
    const rotateX = (y - 0.5) * maxRotation;
    const rotateY = (x - 0.5) * maxRotation;
    return `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <motion.div 
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 py-16 relative"
      style={{ y: parallaxY, opacity }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div 
          className="md:w-1/2 space-y-6 text-center md:text-left relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            ANSH BABU
          </h1>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Computer Science Engineering Student & Machine Learning Enthusiast
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center md:justify-start pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="mailto:cool.anshlegend123@gmail.com"
              className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a 
              href="#projects"
              className="relative overflow-hidden group bg-transparent border border-white hover:border-purple-500 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          style={{
            transform: calculateRotation(mousePosition.x, mousePosition.y),
            transition: "transform 0.3s ease-out"
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 morphing-shape"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Avatar className="w-64 h-64 border-4 border-white/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 mix-blend-overlay" />
                <img 
                  src="/Ansh.jpg" 
                  alt="Ansh Babu" 
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110" 
                />
              </Avatar>
              
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="particle absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            y: [0, -20, 0],
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </motion.div>
  );
};

export default HeroSection;
