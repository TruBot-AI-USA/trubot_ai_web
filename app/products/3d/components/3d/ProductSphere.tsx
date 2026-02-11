'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.02 : 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1.2, 64, 64]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.4}
        speed={hovered ? 3 : 1.5}
        roughness={0.1}
        metalness={0.9}
        emissive="#06b6d4"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

function OrbitRing({ radius, speed, color, rotationAxis }: { radius: number; speed: number; color: string; rotationAxis: 'x' | 'y' | 'z' }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      if (rotationAxis === 'x') {
        ringRef.current.rotation.x += speed;
      } else if (rotationAxis === 'y') {
        ringRef.current.rotation.y += speed;
      } else {
        ringRef.current.rotation.z += speed;
      }
    }
  });

  return (
    <Torus ref={ringRef} args={[radius, 0.02, 16, 100]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </Torus>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      {/* Core Sphere */}
      <CoreSphere />
      
      {/* Orbit Rings */}
      <OrbitRing radius={2} speed={0.01} color="#06b6d4" rotationAxis="y" />
      <OrbitRing radius={2.2} speed={-0.008} color="#a855f7" rotationAxis="x" />
      <OrbitRing radius={2.4} speed={0.006} color="#06b6d4" rotationAxis="z" />
      
      {/* Allow user to rotate */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

export default function ProductSphere() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
