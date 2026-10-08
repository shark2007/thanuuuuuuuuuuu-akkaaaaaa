import React from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';

export default function Section02Moon() {
  return (
    <section
      id="moon"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black py-20"
      style={{
        backgroundImage: `url("${sectionBackgrounds.moon}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle darkening overlay so text is crisp */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Split Composition Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Small label: THE MOON */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-sky-400/60" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-sky-400">
              The Moon
            </span>
          </div>

          {/* Large heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.2] tracking-wide mb-6">
            “Somewhere in this endless universe…”
          </h2>

          {/* Body and Highlight */}
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-slate-300 font-extralight leading-relaxed mb-6">
            “there is one person who makes mine brighter.”
          </p>

          <div className="pt-4 flex items-center gap-4">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
              Dedicated to
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-amber-200 tracking-widest text-glow-gold">
              Thanusree.
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-400/80 font-light max-w-md mt-6 leading-relaxed">
            Orbiting through space and time, your presence remains a steadfast, glowing light in our family constellation.
          </p>
        </motion.div>

        {/* Right Side: Keep Moon Unobstructed, with subtle floating circular UI element */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
          {/* Subtle floating circular UI element near the moon */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative p-6 sm:p-8 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-[0_0_35px_rgba(255,255,255,0.15)] flex flex-col items-center justify-center select-none"
          >
            {/* Inner ring */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-sky-400/30 border-dashed flex flex-col items-center justify-center text-center p-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-slate-400 uppercase mb-1">
                Celestial Age
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-white font-light tracking-widest text-glow-silver">
                23 YEARS
              </span>
              <span className="font-caveat text-sm sm:text-base text-amber-300/80 mt-1">
                Glowing brightly
              </span>
            </div>

            {/* Orbiting star particle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] absolute -top-1 left-1/2 -translate-x-1/2" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
