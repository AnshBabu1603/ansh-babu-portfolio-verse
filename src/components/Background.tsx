import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Enhanced scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create enhanced particle system
    const particleCount = 1500;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    const colorPalette = [
      new THREE.Color(0x7c3aed), // purple
      new THREE.Color(0xf472b6), // pink
      new THREE.Color(0x0ea5e9), // blue
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0x10b981), // emerald
    ];
    
    // Create galaxy-like particle distribution
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 15 + 5;
      const spinAngle = radius * 0.3;
      const branchAngle = (i % 3) * Math.PI * 2 / 3;
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i * 3 + 1] = randomY * 2;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      
      // Dynamic color mixing
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Variable sizes for depth effect
      sizes[i] = Math.random() * 6 + 1;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Enhanced shader material
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Animate particles
          float wave = sin(time * 0.5 + mvPosition.x * 0.02 + mvPosition.y * 0.02) * 0.1;
          mvPosition.xyz += normalize(mvPosition.xyz) * wave;
          
          gl_PointSize = size * (300.0 / -mvPosition.z) * (1.0 + sin(time + position.x * 0.5) * 0.2);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5, 0.5));
          if (distance > 0.5) discard;
          
          // Soft particle effect
          float strength = 1.0 - (distance * 2.0);
          strength = pow(strength, 3.0);
          
          gl_FragColor = vec4(vColor, strength);
        }
      `,
      transparent: true,
      vertexColors: true,
      uniforms: {
        time: { value: 0 }
      }
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Add ambient and point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x7c3aed, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Interactive mouse movement
    const mouse = {
      x: 0,
      y: 0,
      previousX: 0,
      previousY: 0,
      velocityX: 0,
      velocityY: 0
    };

    window.addEventListener('mousemove', (e) => {
      mouse.previousX = mouse.x;
      mouse.previousY = mouse.y;
      
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      mouse.velocityX = mouse.x - mouse.previousX;
      mouse.velocityY = mouse.y - mouse.previousY;
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
      frame += 0.002;
      
      // Update particle system
      particleMaterial.uniforms.time.value = frame;
      
      // Rotate based on mouse movement
      particleSystem.rotation.y += (mouse.velocityX * 0.5 + 0.002);
      particleSystem.rotation.x += (mouse.velocityY * 0.5);
      
      // Add subtle wobble
      particleSystem.position.y = Math.sin(frame) * 0.2;
      
      // Dampen velocities
      mouse.velocityX *= 0.95;
      mouse.velocityY *= 0.95;
      
      // Animate individual particles
      const positions = particles.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;
        
        // Create organic movement
        positions[ix] += Math.sin(frame + i * 0.1) * 0.02;
        positions[iy] += Math.cos(frame + i * 0.1) * 0.02;
        positions[iz] += Math.sin(frame + i * 0.1) * 0.02;
      }
      particles.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', () => {});
      
      particles.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return <div ref={containerRef} className="fixed inset-0 w-full h-full z-[-1]" />;
};

export default Background;