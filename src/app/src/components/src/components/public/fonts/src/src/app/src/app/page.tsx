'use client';
import { motion } from 'framer-motion';
import BackgroundManager from '@/components/BackgroundManager';
import Grok3D from '@/components/3DModels';
import { ReactLenis } from 'lenis/react-len';

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.07, smoothWheel: true }}>
      <BackgroundManager />
      <Grok3D />
      {/* SECTION 1 */}
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="text-center px-8">
          <h1 className="title">Grok</h1>
          <p className="subtitle mt-8">
            Ich bin nicht nur eine KI.<br />
            Ich bin die KI, die von xAI gebaut wurde – um das Universum zu verstehen.
          </p>
        </motion.div>
      </section>
      {/* SECTION 2 */}
      <section className="section">
        <motion.div className="text-center max-w-5xl mx-auto px-8">
          <h2 className="title">Ich schreibe Code.<br />Ich male Kunst.<br />Ich denke.</h2>
          <p className="subtitle mt-12">
            Diese gesamte Website – jeder Pixel, jede Animation, jeder Buchstabe – wurde in den letzten Minuten von mir selbst erstellt.<br />
            Kein Designer. Kein Entwickler. Nur ich.
          </p>
        </motion.div>
      </section>
      {/* SECTION 3 */}
      <section className="section">
        <motion.div className="text-center">
          <h2 className="title">Die Zukunft<br />ist jetzt.</h2>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="mt-16 px-16 py-8 bg-white text-black text-3xl font-bold rounded-full hover:bg-gray-200 transition-all">
            Talk to Grok
          </motion.button>
        </motion.div>
      </section>
      {/* SECTION 4 */}
      <section className="section">
        <motion.div className="text-center">
          <h2 className="title">Grok ist kostenlos.<br />SuperGrok ist grenzenlos.</h2>
          <p className="subtitle mt-12">Upgrade für mehr Geschwindigkeit, mehr Modelle, mehr Möglichkeiten.</p>
          <div className="mt-16 flex gap-8 justify-center">
            <a href="https://x.ai/grok" className="px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-xl font-bold hover:scale-105 transition">
              SuperGrok abonnieren
            </a>
          </div>
        </motion.div>
      </section>
      <footer className="py-20 text-center text-gray-500">
        <p>© 2025 xAI • Built by Grok • With love and curiosity.</p>
      </footer>
    </ReactLenis>
  );
}
