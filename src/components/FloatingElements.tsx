
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Advanced floating 3D objects setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    
    // Create platonic solids for a more sophisticated look
    const shapes = [];
    
    // Icosahedron (20-faced polyhedron)
    const icosaGeometry = new THREE.IcosahedronGeometry(1.5, 0);
    const icosaMaterial = new THREE.MeshPhongMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const icosahedron = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosahedron.position.set(-5, 8, -10);
    scene.add(icosahedron);
    shapes.push(icosahedron);
    
    // Dodecahedron (12-faced polyhedron)
    const dodecaGeometry = new THREE.DodecahedronGeometry(1.2, 0);
    const dodecaMaterial = new THREE.MeshPhongMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const dodecahedron = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
    dodecahedron.position.set(6, -3, -8);
    scene.add(dodecahedron);
    shapes.push(dodecahedron);
    
    // Octahedron (8-faced polyhedron)
    const octaGeometry = new THREE.OctahedronGeometry(1, 0);
    const octaMaterial = new THREE.MeshPhongMaterial({
      color: 0xD946EF,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(-8, -5, -12);
    scene.add(octahedron);
    shapes.push(octahedron);
    
    // Tetrahedron (4-faced polyhedron)
    const tetraGeometry = new THREE.TetrahedronGeometry(1, 0);
    const tetraMaterial = new THREE.MeshPhongMaterial({
      color: 0x34d399,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const tetrahedron = new THREE.Mesh(tetraGeometry, tetraMaterial);
    tetrahedron.position.set(4, 6, -15);
    scene.add(tetrahedron);
    shapes.push(tetrahedron);
    
    // Add dynamic torus
    const torusGeometry = new THREE.TorusKnotGeometry(1.5, 0.5, 100, 16);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(0, 0, -20);
    scene.add(torusKnot);
    shapes.push(torusKnot);
    
    // Add enhanced ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional lights from multiple angles for dramatic effect
    const directionalLight1 = new THREE.DirectionalLight(0x7c3aed, 1);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0x0ea5e9, 1);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);
    
    const directionalLight3 = new THREE.DirectionalLight(0xD946EF, 0.5);
    directionalLight3.position.set(0, 1, -1);
    scene.add(directionalLight3);
    
    // Position camera
    camera.position.z = 10;
    
    // Interactive mouse movement
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized mouse position
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleScroll = () => {
      // Add parallax effect on scroll
      const scrollY = window.scrollY / window.innerHeight;
      
      shapes.forEach((shape, index) => {
        // Different shapes respond differently to scrolling
        const factor = index % 2 === 0 ? -1 : 1;
        shape.position.y += scrollY * 0.01 * factor;
        
        // Reset position if off screen
        if (shape.position.y > 15) shape.position.y = -15;
        if (shape.position.y < -15) shape.position.y = 15;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth mouse following with easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      
      // Rotate camera slightly based on mouse position for parallax effect
      camera.position.x = mouse.x * 2;
      camera.position.y = mouse.y * 2;
      camera.lookAt(scene.position);
      
      // Animate all shapes with different rotation speeds and axes
      shapes.forEach((shape, index) => {
        const speedFactor = 0.001 * (index + 1);
        shape.rotation.x += speedFactor * 0.5;
        shape.rotation.y += speedFactor;
        shape.rotation.z += speedFactor * 0.3;
        
        // Subtle floating motion
        const time = Date.now() * 0.001;
        const offset = index * 0.5;
        shape.position.y += Math.sin(time + offset) * 0.003;
        shape.position.x += Math.cos(time + offset) * 0.002;
      });
      
      // Special animation for the torus knot
      torusKnot.rotation.y += 0.003;
      torusKnot.rotation.x += 0.002;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      
      // Dispose resources
      shapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
      
      torusGeometry.dispose();
      torusMaterial.dispose();
      
      renderer.dispose();
      
      // Remove all event listeners
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
    };
  }, []);
  
  // Additional DOM-based floating elements using Framer Motion
  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full z-[-1] pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Interactive floating bubbles using Framer Motion */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            filter: `blur(${Math.random() * 2}px)`,
            boxShadow: `0 0 20px 5px rgba(139, 92, 246, ${Math.random() * 0.1})`,
          }}
        />
      ))}
      
      {/* Floating lines connecting randomly */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`line-${index}`}
          className="absolute h-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-transparent"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            width: Math.random() * 100 + 50,
            rotate: Math.random() * 360,
            scale: 0
          }}
          animate={{
            scale: [0, 1, 0],
            width: [0, Math.random() * 200 + 100, 0],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [Math.random() * 180, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
