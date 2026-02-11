'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0002;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#06b6d4"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Lines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const linesGeometry = useMemo(() => {
    const positions = [];
    const count = 50;
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 40;
      
      const x2 = x + (Math.random() - 0.5) * 20;
      const y2 = y + (Math.random() - 0.5) * 20;
      const z2 = z + (Math.random() - 0.5) * 10;
      
      positions.push(x, y, z, x2, y2, z2);
    }
    
    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.0001;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linesGeometry.length / 3}
          array={linesGeometry}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#06b6d4"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <Particles />
        <Lines />
      </Canvas>
    </div>
  );
}
