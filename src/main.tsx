
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create enhanced mouse trail effect
document.addEventListener('DOMContentLoaded', () => {
  const trailCount = 20;
  const trails: HTMLDivElement[] = [];
  
  // Create trail elements with more dynamic styling
  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    
    // Randomize colors for a more vibrant trail
    const colors = [
      'rgba(124, 58, 237, 0.8)',  // purple
      'rgba(244, 114, 182, 0.8)', // pink
      'rgba(14, 165, 233, 0.8)',  // blue
      'rgba(6, 182, 212, 0.8)',   // cyan
      'rgba(16, 185, 129, 0.8)'   // emerald
    ];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    trail.style.backgroundColor = color;
    trail.style.opacity = `${1 - i / trailCount}`;
    
    document.body.appendChild(trail);
    trails.push(trail);
  }

  // Position history for trail
  let positions: {x: number, y: number}[] = Array(trailCount).fill({x: 0, y: 0});
  let mouseX = 0;
  let mouseY = 0;
  let speed = { x: 0, y: 0 };
  let lastX = 0;
  let lastY = 0;

  // Update trail positions on mousemove with physics calculations
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Calculate speed
    speed.x = mouseX - lastX;
    speed.y = mouseY - lastY;
    lastX = mouseX;
    lastY = mouseY;
  });
  
  // Animation loop for smoother movement
  const animate = () => {
    positions.unshift({x: mouseX, y: mouseY});
    positions = positions.slice(0, trailCount);
    
    trails.forEach((trail, index) => {
      if (positions[index]) {
        const { x, y } = positions[index];
        const scale = 1 - index * 0.03;
        
        // Create a more dynamic trail
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.transform = `translate(-50%, -50%) scale(${scale})`;
        
        // Adjust opacity based on mouse speed
        const speedFactor = Math.min(1, (Math.abs(speed.x) + Math.abs(speed.y)) / 100);
        trail.style.opacity = `${(0.7 - index * 0.03) * (1 + speedFactor)}`;
        
        // Dynamic size based on speed
        const baseSize = 8;
        const speedSize = baseSize * (1 + speedFactor * 0.5);
        trail.style.width = `${speedSize * scale}px`;
        trail.style.height = `${speedSize * scale}px`;
        
        // Add rotation for more dynamic feel
        trail.style.rotate = `${index * 10}deg`;
      }
    });
    
    // Decay speed
    speed.x *= 0.98;
    speed.y *= 0.98;
    
    requestAnimationFrame(animate);
  };
  
  animate();
});

// Add interactive particles around cursor
document.addEventListener('DOMContentLoaded', () => {
  // Create container for particles
  const particleContainer = document.createElement('div');
  particleContainer.style.position = 'fixed';
  particleContainer.style.top = '0';
  particleContainer.style.left = '0';
  particleContainer.style.width = '100%';
  particleContainer.style.height = '100%';
  particleContainer.style.pointerEvents = 'none';
  particleContainer.style.zIndex = '9998';
  document.body.appendChild(particleContainer);
  
  // Track mouse position
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create particles on mouse move
    createParticle(mouseX, mouseY);
  });
  
  function createParticle(x: number, y: number) {
    // Create fewer particles to avoid overwhelming
    if (Math.random() > 0.3) return;
    
    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    
    // Random styling for the particle
    const size = Math.random() * 10 + 3;
    const duration = Math.random() * 1000 + 500;
    const directionX = Math.random() * 100 - 50;
    const directionY = Math.random() * 100 - 50;
    
    // Set color from a vibrant palette
    const colors = [
      'rgba(124, 58, 237, 0.6)', // purple
      'rgba(244, 114, 182, 0.6)', // pink
      'rgba(14, 165, 233, 0.6)', // blue
      'rgba(6, 182, 212, 0.6)', // cyan
      'rgba(16, 185, 129, 0.6)' // emerald
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply styles
    Object.assign(particle.style, {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: '50%',
      left: `${x}px`,
      top: `${y}px`,
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)',
      boxShadow: `0 0 ${size * 2}px ${color}`,
      zIndex: '9998'
    });
    
    particleContainer.appendChild(particle);
    
    // Animate and remove
    const animation = particle.animate(
      [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.8 },
        { 
          transform: `translate(${directionX}px, ${directionY}px) scale(0)`,
          opacity: 0 
        }
      ],
      {
        duration: duration,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    );
    
    animation.onfinish = () => {
      particle.remove();
    };
  }
});

createRoot(document.getElementById("root")!).render(<App />);
