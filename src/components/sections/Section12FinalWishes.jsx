import React from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { finalWishesSequence, finalClosing } from '../../data/finalWishes';
import { Sparkles, ArrowUp, Star } from 'lucide-react';

export default function Section12FinalWishes() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="final"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black py-28"
      style={{
        backgroundImage: `url("${sectionBackgrounds.finalWishes}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
              Chapter 10 / Final Wishes
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            Blessings for the Infinite
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “Written in starlight, sent with boundless love.”
          </p>
        </motion.div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-24">
          {finalWishesSequence.map((wish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-white/10 hover:border-amber-300/40 bg-[#060a18]/80 backdrop-blur-md text-left transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-amber-300 font-semibold tracking-wider">
                  {wish.number}
                </span>
                <Star className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <p className="font-serif text-lg text-slate-200 leading-snug whitespace-pre-line font-light">
                {wish.line}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Grand Finale Climax Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl p-8 sm:p-14 md:p-20 rounded-3xl border border-amber-300/30 bg-[#040714]/90 backdrop-blur-2xl shadow-[0_0_80px_rgba(251,191,36,0.2)] text-center relative overflow-hidden"
        >
          {/* Subtle star particle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-400/10 blur-3xl pointer-events-none" />

          <span className="font-mono text-xs uppercase tracking-[0.4em] text-slate-400 block mb-6">
            {finalClosing.pauseIntro}
          </span>

          {/* Climax Lines */}
          <div className="space-y-3 mb-10">
            {finalClosing.climaxLines.map((line, idx) => (
              <p
                key={idx}
                className={`font-serif leading-relaxed ${
                  idx === 3
                    ? 'text-2xl sm:text-3xl md:text-4xl text-amber-200 font-medium text-glow-gold'
                    : 'text-xl sm:text-2xl md:text-3xl text-slate-200 font-light'
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto my-8" />

          {/* Enormous Climax Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light tracking-wide leading-tight uppercase whitespace-pre-line">
            {finalClosing.grandTitle}
          </h1>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-6 whitespace-pre-line">
            {finalClosing.subtext}
          </p>

          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mt-6">
            {finalClosing.signature}
          </span>

          {/* Replay Button */}
          <div className="mt-12">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-amber-300/40 bg-amber-400/15 hover:bg-amber-400/25 text-amber-200 text-xs font-mono uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Return to the Beginning</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
