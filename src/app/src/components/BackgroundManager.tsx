'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';
import VANTA from 'vanta/dist/vanta.net.min.js';
import BIRDS from 'vanta/dist/vanta.birds.min.js';
import WAVES from 'vanta/dist/vanta.waves.min.js';

export default function BackgroundManager() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const currentEffect = useRef<any>(null);

  useEffect(() => {
    const effects = [
      () => VANTA.NET({ el: containerRef.current, THREE, color: 0x6366f1, backgroundColor: 0x000000, points: 10, spacing: 18 }),
      () => BIRDS({ el: containerRef.current, THREE, birdSize: 1.5, wingSpan: 30, speedLimit: 6, backgroundColor: 0x000000 }),
      () => WAVES({ el: containerRef.current, THREE, shininess: 150, waveSpeed: 0.5, zoom: 0.8, color: 0x1e293b }),
      () => VANTA.NET({ el: containerRef.current, THREE, color: 0xff0066, backgroundColor: 0x000000, maxDistance: 30 }),
      () => VANTA.NET({ el: containerRef.current, THREE, color: 0x8b5cf6, backgroundColor: 0x000000, points: 20, spacing: 15, showDots: true }),
    ];

    const update = () => {
      const i = Math.min(Math.floor(scrollYProgress.get() * effects.length), effects.length - 1);
      if (currentEffect.current?.destroy) currentEffect.current.destroy();
      currentEffect.current = effects[i]();
    };

    update();
    const unsubscribe = scrollYProgress.on("change", update);
    return () => { unsubscribe(); if (currentEffect.current?.destroy) currentEffect.current.destroy(); };
  }, [scrollYProgress]);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}
