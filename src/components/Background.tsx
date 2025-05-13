
import { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 120;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      opacity: number;
      hue: number;
    }

    // Create initial particles with a more vibrant color palette
    for (let i = 0; i < particleCount; i++) {
      // Use a wider range of colors for a more cheerful feel
      const colorRanges = [
        [260, 310], // Purples and pinks
        [180, 220], // Cyans and light blues
        [30, 60],   // Warm yellows and oranges
      ];
      
      const selectedRange = colorRanges[Math.floor(Math.random() * colorRanges.length)];
      const hue = Math.floor(Math.random() * (selectedRange[1] - selectedRange[0])) + selectedRange[0];
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 3 + 1, // Slightly larger particles
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        speedZ: Math.random() * 2,
        opacity: Math.random() * 0.6 + 0.2, // Higher opacity for more vibrant colors
        hue: hue, 
      });
    }

    // Create mouse position tracker
    let mouseX = 0;
    let mouseY = 0;
    
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Animation function
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'; // More transparent for brighter background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create a subtle gradient background - more vibrant
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width
      );
      gradient.addColorStop(0, 'rgba(30, 30, 50, 0.02)');
      gradient.addColorStop(1, 'rgba(15, 15, 35, 0.02)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // 3D movement effect
        p.x += p.speedX;
        p.y += p.speedY;
        p.z -= p.speedZ;
        
        // Mouse influence - subtle attraction/repulsion
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 300;
        
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          p.speedX += (dx / dist) * force * 0.02;
          p.speedY += (dy / dist) * force * 0.02;
          p.speedX = Math.min(Math.max(p.speedX, -1.5), 1.5);
          p.speedY = Math.min(Math.max(p.speedY, -1.5), 1.5);
        }
        
        // Reset particles if they go out of bounds or too close to viewer
        if (p.x > canvas.width || p.x < 0 || p.y > canvas.height || p.y < 0 || p.z < 1) {
          // For reset particles, use the same vibrant color system
          const colorRanges = [
            [260, 310], // Purples and pinks
            [180, 220], // Cyans and light blues
            [30, 60],   // Warm yellows and oranges
          ];
          
          const selectedRange = colorRanges[Math.floor(Math.random() * colorRanges.length)];
          const hue = Math.floor(Math.random() * (selectedRange[1] - selectedRange[0])) + selectedRange[0];
          
          particles[i] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: 1000,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            speedZ: Math.random() * 2,
            opacity: Math.random() * 0.6 + 0.2,
            hue: hue,
          };
        }
        
        // Simulate 3D by adjusting size and opacity based on z-position
        const scale = 1000 / (1000 + p.z);
        const size = p.size * scale;
        const opacity = p.opacity * scale;
        const x = p.x;
        const y = p.y;
        
        // Draw particle with color
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${opacity})`;
        ctx.fill();
        
        // Draw connections with 3D depth effect
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dz = p2.z - p.z;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const depth = Math.abs(p.z - p2.z);
          
          if (dist < 150 && depth < 200) {
            // Use color blend for the connection based on both particles
            const avgHue = (p.hue + p2.hue) / 2;
            const connectionOpacity = (1 - dist / 150) * 0.2 * (1 - depth / 200);
            
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${avgHue}, 85%, 65%, ${connectionOpacity})`;
            ctx.lineWidth = Math.min(p.size, p2.size) * 0.3;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // Add subtle pulse/glow effect - more colorful
      const time = Date.now() * 0.001;
      const glowRadius = Math.sin(time * 0.5) * 50 + 150;
      const hue = (time * 20) % 360; // Cycling through colors
      const glow = ctx.createRadialGradient(
        mouseX, 
        mouseY, 
        0, 
        mouseX, 
        mouseY, 
        glowRadius
      );
      glow.addColorStop(0, `hsla(${hue}, 90%, 70%, 0.08)`);
      glow.addColorStop(1, `hsla(${hue}, 90%, 70%, 0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1]"
    />
  );
};

export default Background;
