import React from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';

export default function Section01Intro() {
  return (
    <section
      id="intro"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black select-none"
    >
      {/* Background with slow subtle initial scale: 1.05 -> 1.0 */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundImage: `url("${sectionBackgrounds.intro}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="absolute inset-0 z-0"
      />

      {/* Subtle dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-1" />

      {/* Radial soft dark vignette for typography readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none z-1" />

      {/* Center UI */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Enormous 23 */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.9 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif text-[110px] sm:text-[160px] md:text-[230px] lg:text-[270px] leading-none text-slate-100 font-extralight tracking-tighter text-glow-silver select-none"
        >
          23
        </motion.div>

        {/* THANUSREE */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.25em] md:tracking-[0.35em] text-white font-light uppercase mt-2 sm:mt-0"
        >
          Thanusree
        </motion.h1>

        {/* WELCOME TO YOUR UNIVERSE */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
          className="font-sans text-xs sm:text-sm md:text-base tracking-[0.35em] md:tracking-[0.45em] text-sky-200/80 font-extralight uppercase mt-6 sm:mt-8"
        >
          Welcome to your universe
        </motion.p>

        {/* SCROLL TO BEGIN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.5 }}
          className="mt-12 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => {
            const el = document.getElementById('moon');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-slate-400 uppercase">
            Scroll to begin
          </span>
          <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 rounded-full bg-amber-200 shadow-[0_0_4px_white]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
