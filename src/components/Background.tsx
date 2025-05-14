
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
    
    // Create enhanced particle system with professional look
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    // Professional color palette with rich contrast
    const colorPalette = [
      new THREE.Color(0x7c3aed), // deep purple
      new THREE.Color(0x0ea5e9), // vivid blue
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0x3b82f6), // blue
      new THREE.Color(0x1e40af), // dark blue
    ];
    
    // Create dynamic 3D galaxy formation
    for (let i = 0; i < particleCount; i++) {
      // Spiral galaxy formation
      const radius = Math.random() * 15 + 5;
      const spinAngle = radius * 0.4; // Tighter spiral
      const branchAngle = (i % 5) * Math.PI * 2 / 5; // 5 spiral arms
      
      // Add randomness for natural look
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i * 3 + 1] = randomY * 2;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      
      // Dynamic color mixing - concentrated by spiral arm
      const colorIndex = Math.floor(i / particleCount * colorPalette.length);
      const color = colorPalette[Math.min(colorIndex, colorPalette.length - 1)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Variable sizes for depth effect
      sizes[i] = Math.random() * 6 + 1;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Professional-grade shader material
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Enhanced animation with dynamic waves
          float wave = sin(time * 0.6 + mvPosition.x * 0.03 + mvPosition.y * 0.03) * 0.15;
          mvPosition.xyz += normalize(mvPosition.xyz) * wave;
          
          // Perspective size adjustment with pulse effect
          gl_PointSize = size * (350.0 / -mvPosition.z) * (1.0 + sin(time * 0.5 + position.x * 0.5) * 0.3);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5, 0.5));
          if (distance > 0.5) discard;
          
          // Enhanced glow effect for professional look
          float strength = 1.0 - (distance * 2.0);
          strength = pow(strength, 2.5);
          
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
    
    // Add dramatic lighting with shadows
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15); // Dimmer ambient for dramatic effect
    scene.add(ambientLight);

    // Add multiple point lights for dramatic illumination
    const pointLight1 = new THREE.PointLight(0x3b82f6, 1.2); // Blue light
    pointLight1.position.set(2, 3, 4);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x7c3aed, 1); // Purple light
    pointLight2.position.set(-3, 1, 3);
    scene.add(pointLight2);
    
    const pointLight3 = new THREE.PointLight(0x1e40af, 0.8); // Dark blue light
    pointLight3.position.set(0, -2, 3);
    scene.add(pointLight3);

    // Interactive mouse movement with enhanced physics
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
    
    // Enhanced animation loop with multiple effects
    let frame = 0;
    const animate = () => {
      frame += 0.004; // Slower, more professional motion
      
      // Update particle system
      particleMaterial.uniforms.time.value = frame;
      
      // Rotate based on mouse movement with inertia
      particleSystem.rotation.y += (mouse.velocityX * 0.3 + 0.001);
      particleSystem.rotation.x += (mouse.velocityY * 0.3);
      
      // Add subtle 3D pulsing movement
      particleSystem.position.y = Math.sin(frame * 0.5) * 0.3;
      particleSystem.position.z = Math.cos(frame * 0.3) * 0.2;
      
      // Dampen velocities for smoother motion
      mouse.velocityX *= 0.92;
      mouse.velocityY *= 0.92;
      
      // Animate individual particles for enhanced 3D effect
      const positions = particles.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;
        
        // Create subtle organic movement based on position
        const offsetX = Math.sin((frame + positions[ix] * 0.05) * 0.5) * 0.03;
        const offsetY = Math.cos((frame + positions[iy] * 0.05) * 0.5) * 0.03;
        const offsetZ = Math.sin((frame + positions[iz] * 0.05) * 0.5) * 0.03;
        
        positions[ix] += offsetX;
        positions[iy] += offsetY;
        positions[iz] += offsetZ;
      }
      particles.attributes.position.needsUpdate = true;
      
      // Add subtle camera movement for dynamic feel
      camera.position.x = Math.sin(frame * 0.3) * 0.5;
      camera.position.y = Math.cos(frame * 0.4) * 0.3;
      camera.lookAt(scene.position);
      
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
