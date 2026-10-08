import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { stars23 } from '../../data/stars23';
import { Sparkles, Star, X } from 'lucide-react';

export default function Section07Stars23() {
  const [activeStar, setActiveStar] = useState(stars23[0]);
  const [showAllDrawer, setShowAllDrawer] = useState(false);

  return (
    <section
      id="stars23"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black py-24"
      style={{
        backgroundImage: `url("${sectionBackgrounds.stars23}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
              Chapter 05 / Celestial Constellation
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            23 Stars of You
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “23 reasons why your existence illuminates the universe.”
          </p>

          <button
            onClick={() => setShowAllDrawer(true)}
            className="mt-6 px-5 py-2 rounded-full border border-amber-300/40 bg-amber-400/10 hover:bg-amber-400/20 text-xs font-mono tracking-widest text-amber-200 uppercase transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
          >
            Explore All 23 Stars
          </button>
        </motion.div>

        {/* Central Display: Enormous 23 with Orbiting Stars */}
        <div className="relative w-full max-w-4xl h-[420px] sm:h-[480px] flex items-center justify-center my-6">
          {/* Central Glowing 23 */}
          <div className="text-center select-none pointer-events-none z-0">
            <span className="font-serif text-[120px] sm:text-[180px] md:text-[220px] font-extralight text-white/15 tracking-tighter block leading-none">
              23
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-slate-400/60 block mt-[-20px]">
              Constellation of Thanusree
            </span>
          </div>

          {/* Interactive Star Nodes Ring */}
          <div className="absolute inset-0 z-10">
            {stars23.map((star, idx) => {
              const angle = (idx / 23) * 2 * Math.PI - Math.PI / 2;
              const radiusX = 42;
              const radiusY = 38;
              const posX = 50 + radiusX * Math.cos(angle);
              const posY = 50 + radiusY * Math.sin(angle);
              const isSelected = activeStar?.id === star.id;

              return (
                <motion.button
                  key={star.id}
                  style={{
                    left: `${posX}%`,
                    top: `${posY}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  whileHover={{ scale: 1.4 }}
                  onClick={() => setActiveStar(star)}
                  className={`absolute p-1.5 sm:p-2 rounded-full transition-all duration-300 group ${
                    isSelected
                      ? 'bg-amber-300 text-black shadow-[0_0_20px_#fbbf24] z-30 scale-125'
                      : 'bg-black/60 border border-white/20 text-slate-300 hover:border-amber-300 hover:text-amber-200 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)] z-20'
                  }`}
                  title={`${star.id}. ${star.title}`}
                >
                  <Star className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'fill-black' : ''}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Active Star Floating Card in Center */}
          <AnimatePresence mode="wait">
            {activeStar && (
              <motion.div
                key={activeStar.id}
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute z-20 w-[90%] max-w-md p-6 sm:p-8 rounded-2xl bg-[#080d1e]/95 border border-amber-300/40 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] text-center pointer-events-auto"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
                    Star {String(activeStar.id).padStart(2, '0')} of 23
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-wide">
                  {activeStar.title}
                </h3>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto my-3" />
                <p className="font-sans text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                  {activeStar.caption}
                </p>
                <span className="font-caveat text-base text-amber-300/80 block mt-4">
                  “A gift to everyone around you.”
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Explore All 23 Stars Full Screen Drawer */}
      <AnimatePresence>
        {showAllDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllDrawer(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto p-6 md:p-10 border border-white/10 rounded-2xl bg-[#060a16]/95"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h4 className="font-serif text-2xl text-white">All 23 Stars of Thanusree</h4>
                  <p className="font-mono text-xs text-amber-300/80 tracking-wider">
                    23 Qualities, Blessings & Celestial Reflections
                  </p>
                </div>
                <button
                  onClick={() => setShowAllDrawer(false)}
                  className="p-2 rounded-full border border-white/10 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stars23.map((star) => (
                  <div
                    key={star.id}
                    className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs text-amber-300 font-semibold">
                        #{String(star.id).padStart(2, '0')}
                      </span>
                      <h5 className="font-serif text-lg text-slate-100">{star.title}</h5>
                    </div>
                    <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
                      {star.caption}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
