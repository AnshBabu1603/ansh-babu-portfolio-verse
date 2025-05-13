
import { useEffect, useRef } from 'react';
import { Avatar } from "@/components/ui/avatar";

const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    
    const letters = text.innerText.split('');
    text.innerText = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      span.style.transitionDelay = `${i * 0.05}s`;
      text.appendChild(span);
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 ref={textRef} className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ANSH BABU
          </h1>
          
          <p className="text-xl text-gray-300 animate-fade-in opacity-0" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
            Computer Science Engineering Student & Machine Learning Enthusiast
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in opacity-0" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
            <a 
              href="mailto:cool.anshlegend123@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="#projects"
              className="bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Avatar className="w-64 h-64 border-4 border-white/20 overflow-hidden animate-scale-in opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <img src="/Ansh.jpg" alt="Ansh Babu" className="object-cover w-full h-full" />
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
