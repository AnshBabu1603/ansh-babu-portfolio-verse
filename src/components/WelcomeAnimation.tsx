
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);
  const particlesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate professional floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        
        // Professional color palette
        const colors = [
          'bg-blue-500/30', 'bg-indigo-500/30', 'bg-purple-500/30',
          'bg-blue-600/20', 'bg-indigo-600/20', 'bg-purple-600/20'
        ];
        
        // Variable sizes for 3D depth effect
        const size = Math.random() * 10 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.classList.add(color);
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.6 + 0.2}`;
        particle.style.filter = `blur(${Math.random() * 3}px)`;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(79, 70, 229, 0.3)`;
        
        // Professional 3D animation with varied timing
        particle.animate(
          [
            { transform: `translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)`, opacity: Math.random() * 0.6 + 0.2 },
            { 
              transform: `translate3d(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px, ${Math.random() * 50}px) 
                          rotateX(${Math.random() * 180}deg) rotateY(${Math.random() * 180}deg)`,
              opacity: 0 
            }
          ],
          {
            duration: Math.random() * 4000 + 3000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
          }
        );
        
        particlesRef.current.appendChild(particle);
      }
    }
    
    // Add 3D text effect
    if (textRef.current) {
      textRef.current.style.transform = "perspective(1000px)";
      
      document.addEventListener('mousemove', (e) => {
        if (!textRef.current) return;
        
        const rect = textRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        
        textRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
      });
    }

    // Auto-dismiss after animation
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onComplete(), 1500);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', () => {});
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#080420] to-black"
        >
          {/* Background floating elements */}
          <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />
          
          {/* 3D text content with perspective */}
          <div 
            ref={textRef}
            className="relative z-10 transform-gpu transition-transform duration-300 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.2, type: 'spring', damping: 15 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-center mb-3"
                  style={{ transform: 'translateZ(50px)' }}>
                <span className="text-white">
                  Welcome to Ansh's World
                </span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="text-xl md:text-2xl text-center mt-8 text-gray-300 font-light"
                style={{ transform: 'translateZ(30px)' }}
              >
                <span className="relative">
                  Let's Get to Know Him Well
                </span>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce text-blue-300/70">
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
