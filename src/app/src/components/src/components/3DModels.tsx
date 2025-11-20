'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

export default function Grok3D() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#8b5cf6" />
        
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Center>
            <Text3D
              font="/fonts/helvetiker_bold.typeface.json"
              size={2.5}
              height={0.6}
              curveSegments={12}
            >
              GROK
              <meshStandardMaterial color="#c4b5fd" emissive="#8b5cf6" emissiveIntensity={0.8} />
            </Text3D>
          </Center>
        </Float>

        <motion.group position-y={y} />
      </Canvas>
    </div>
  );
}
