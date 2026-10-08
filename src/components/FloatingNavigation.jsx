import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const SECTIONS = [
  { id: 'intro', label: '01', name: 'Intro' },
  { id: 'moon', label: '02', name: 'The Moon' },
  { id: 'childhood', label: '03', name: 'The First Stars' },
  { id: 'timeline', label: '04', name: 'Timeline of Light' },
  { id: 'stars23', label: '05', name: '23 Stars' },
  { id: 'group', label: '06', name: 'Our Gang' },
  { id: 'photo-wall', label: '07', name: 'Photo Wall' },
  { id: 'present', label: '08', name: 'The Present' },
  { id: 'letter', label: '09', name: 'A Letter to Akka' },
  { id: 'final', label: '10', name: 'Final Wishes' },
];

export default function FloatingNavigation({ activeSection, onSelectSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledPastIntro, setScrolledPastIntro] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastIntro(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const currentNum = activeIndex >= 0 ? SECTIONS[activeIndex].label : '01';
  const currentTitle = activeIndex >= 0 ? SECTIONS[activeIndex].name : 'Universe';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (onSelectSection) onSelectSection(id);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Left: THANUSREE / 23 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="fixed top-6 left-6 md:top-8 md:left-10 z-40 cursor-pointer group"
        onClick={() => scrollTo('intro')}
      >
        <div className="flex flex-col">
          <span className="font-serif tracking-[0.28em] text-xs md:text-sm text-slate-200 group-hover:text-amber-200 transition-colors uppercase">
            Thanusree
          </span>
          <span className="font-mono text-[10px] md:text-xs text-slate-500 tracking-[0.3em] pl-0.5">
            / 23
          </span>
        </div>
      </motion.div>

      {/* Top Right: Current Chapter & Minimal MENU Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="fixed top-6 right-6 md:top-8 md:right-10 z-40 flex items-center gap-3"
      >
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
          <span className="font-mono text-xs text-sky-400 font-semibold">{currentNum}</span>
          <span className="text-[10px] uppercase font-sans tracking-widest text-slate-400 max-w-[130px] truncate">
            {currentTitle}
          </span>
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Chapter Menu"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-black/45 hover:bg-black/70 backdrop-blur-md transition-all duration-300 text-xs text-slate-300 hover:text-white"
        >
          <Menu className="w-3.5 h-3.5 text-amber-300" />
          <span className="tracking-widest uppercase text-[11px] font-mono">MENU</span>
        </button>
      </motion.div>

      {/* Bottom Center: SCROLL TO EXPLORE */}
      <AnimatePresence>
        {!scrolledPastIntro && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.4 } }}
            transition={{ duration: 1.2, delay: 1.4 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2.5 pointer-events-none"
          >
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.35em] text-slate-400 uppercase">
              Scroll to explore
            </span>
            <div className="w-[1px] h-9 bg-gradient-to-b from-white/70 via-white/20 to-transparent relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 36, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-3 bg-white rounded-full shadow-[0_0_8px_white]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Minimal Chapter Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-10 border border-white/10 rounded-2xl bg-[#060812]/95"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h4 className="font-serif text-2xl text-white">The Cosmic Index</h4>
                  <p className="font-mono text-xs text-slate-400 tracking-wider">
                    Thanusree / 23rd Universe Chapters
                  </p>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/30"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SECTIONS.map((sec) => {
                  const isCurrent = sec.id === activeSection;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                        isCurrent
                          ? 'border-amber-300/40 bg-amber-400/5 text-amber-200'
                          : 'border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-sky-400">{sec.label}</span>
                        <span className="font-serif text-lg text-slate-100">{sec.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 opacity-60" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
