
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 rounded-full';
        
        // Random positions and colors
        const colors = ['bg-purple-500', 'bg-blue-400', 'bg-pink-400', 'bg-cyan-300', 'bg-emerald-400'];
        const size = Math.random() * 6 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.classList.add(color);
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        particle.style.filter = `blur(${Math.random() * 2}px)`;
        
        // Animation
        particle.animate(
          [
            { transform: `translate(0, 0) rotate(0deg) scale(1)`, opacity: Math.random() * 0.7 + 0.3 },
            { 
              transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
              opacity: 0 
            }
          ],
          {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
          }
        );
        
        particlesRef.current.appendChild(particle);
      }
    }

    // Auto-dismiss after animation
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onComplete(), 1500);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-center">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient mb-4">
                Welcome to Ansh's World
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xl md:text-2xl text-center mt-6 text-gray-300"
            >
              Let's Get to Know Him Well
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
