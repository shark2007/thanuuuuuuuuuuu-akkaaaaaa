import React from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';

export default function Section03Aurora() {
  return (
    <section
      id="aurora"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black py-20"
      style={{
        backgroundImage: `url("${sectionBackgrounds.aurora}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Very light overlay to let the vivid aurora colors shine through as hero */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Placed toward upper-left / center-left, leaving aurora unobstructed */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl flex flex-col items-start"
        >
          {/* Small label: CHAPTER 03 */}
          <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300">
              Chapter 03
            </span>
          </div>

          {/* Huge heading: 23 YEARS with subtle ethereal gradient */}
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-sky-200 font-extralight tracking-tight leading-none">
            23 YEARS
          </h2>

          {/* Below: of becoming you */}
          <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-slate-200/90 font-light tracking-wide mt-3 mb-6">
            of becoming you.
          </p>

          <div className="w-16 h-[1px] bg-gradient-to-r from-emerald-400/80 to-transparent mb-6" />

          {/* Handwritten line: “and you're only getting started.” */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-caveat text-3xl sm:text-4xl text-amber-200/95 tracking-wide"
          >
            “and you're only getting started.”
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
