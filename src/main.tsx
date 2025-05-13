
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create mouse trail effect
document.addEventListener('DOMContentLoaded', () => {
  const trailCount = 15;
  const trails: HTMLDivElement[] = [];

  // Create trail elements
  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.opacity = `${1 - i / trailCount}`;
    document.body.appendChild(trail);
    trails.push(trail);
  }

  // Position history for trail
  let positions: {x: number, y: number}[] = Array(trailCount).fill({x: 0, y: 0});

  // Update trail positions on mousemove
  document.addEventListener('mousemove', (e) => {
    positions.unshift({x: e.clientX, y: e.clientY});
    positions = positions.slice(0, trailCount);
    
    trails.forEach((trail, index) => {
      if (positions[index]) {
        const { x, y } = positions[index];
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.transform = `translate(-50%, -50%) scale(${1 - index * 0.05})`;
        trail.style.opacity = `${0.8 - index * 0.06}`;
      }
    });
  });
});

createRoot(document.getElementById("root")!).render(<App />);
