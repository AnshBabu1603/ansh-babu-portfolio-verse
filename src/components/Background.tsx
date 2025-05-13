
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    const colorChoices = [
      new THREE.Color(0x7c3aed), // purple
      new THREE.Color(0xf472b6), // pink
      new THREE.Color(0x0ea5e9), // blue
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0x10b981), // emerald
    ];
    
    for (let i = 0; i < particleCount; i++) {
      // Positions - create a sphere of particles
      const radius = Math.random() * 10 + 5;
      const phi = Math.acos(-1 + Math.random() * 2);
      const theta = Math.random() * Math.PI * 2;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random color from our palette
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Random sizes
      sizes[i] = Math.random() * 5 + 1;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Shader material for particles
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5, 0.5));
          if (distance > 0.5) discard;
          gl_FragColor = vec4(vColor, smoothstep(0.5, 0.2, distance));
        }
      `,
      transparent: true,
      vertexColors: true
    });
    
    // Create particle system
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0,
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    let frame = 0;
    const animate = () => {
      frame += 0.005;
      
      // Rotate the particle system
      particleSystem.rotation.y = frame * 0.1;
      particleSystem.rotation.x = Math.sin(frame * 0.1) * 0.2;

      // Subtle movement following cursor
      particleSystem.rotation.y += (mouse.x * 0.1 - particleSystem.rotation.y) * 0.01;
      particleSystem.rotation.x += (mouse.y * 0.1 - particleSystem.rotation.x) * 0.01;
      
      // Animate individual particles
      const positions = particles.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;
        
        // Create subtle pulsing/movement
        const x = positions[ix];
        const y = positions[iy];
        const z = positions[iz];
        
        // Apply subtle noise-based movement
        positions[ix] = x + Math.sin(frame + i * 0.1) * 0.01;
        positions[iy] = y + Math.cos(frame + i * 0.1) * 0.01;
        positions[iz] = z + Math.sin(frame + i * 0.1) * 0.01;
      }
      particles.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', () => {});
      
      // Dispose of resources
      particles.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      
      // Remove the canvas
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return <div ref={containerRef} className="fixed inset-0 w-full h-full z-[-1]" />;
};

export default Background;
