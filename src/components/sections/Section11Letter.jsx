import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { birthdayLetterHeader, birthdayMessage } from '../../data/birthdayMessage';
import { Mail, Heart, Lock, Unlock, ArrowRight } from 'lucide-react';

export default function Section11Letter() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const paragraphs = birthdayMessage.split('\n\n');

  const handleUnlock = (e) => {
    if (e) e.preventDefault();
    if (password === '2312') {
      setIsUnlocked(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Not quite… try again.');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <section
      id="letter"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black py-28 px-4 sm:px-6"
      style={{
        backgroundImage: `url("${sectionBackgrounds.letter}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Editorial Letter Parchment / Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-3xl rounded-3xl border border-amber-300/30 bg-[#060a17]/90 backdrop-blur-2xl p-8 sm:p-12 md:p-16 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
      >
        {/* Subtle Decorative Golden Border */}
        <div className="absolute inset-3 rounded-2xl border border-amber-300/10 pointer-events-none" />

        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            /* Password Lock Screen */
            <motion.div
              key="lock-screen"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.3 } }}
              className="text-center py-6 sm:py-10 flex flex-col items-center"
            >
              {/* Lock Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 shadow-[0_0_15px_rgba(251,191,36,0.15)]">
                <Lock className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
                  {birthdayLetterHeader.tagline}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-wide mb-3">
                A Private Letter for Akka
              </h2>

              <p className="font-sans text-xs sm:text-sm text-slate-300/80 font-light max-w-md mx-auto mb-8">
                This letter is protected with a special 4-digit code.
              </p>

              {/* Password Form */}
              <form
                onSubmit={handleUnlock}
                className="w-full max-w-xs flex flex-col items-center gap-4"
              >
                <motion.div
                  animate={isShaking ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="relative w-full flex items-center"
                >
                  <input
                    type="password"
                    maxLength={10}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="Enter passcode..."
                    className="w-full px-5 py-3.5 rounded-full bg-black/60 border border-white/20 focus:border-amber-400 text-center font-mono text-lg tracking-[0.3em] text-white placeholder:text-slate-500 placeholder:tracking-normal placeholder:font-sans placeholder:text-xs outline-none transition-all duration-300 shadow-inner focus:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                    autoFocus
                  />
                  <button
                    type="submit"
                    aria-label="Unlock letter"
                    className="absolute right-2 p-2 rounded-full bg-amber-400/20 hover:bg-amber-400/40 text-amber-300 border border-amber-400/40 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>

                {/* Error Message */}
                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-caveat text-xl text-rose-300 tracking-wide"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </form>
            </motion.div>
          ) : (
            /* Unlocked Letter Content */
            <motion.div
              key="letter-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top Header */}
              <div className="text-center pb-8 border-b border-amber-300/20 mb-10 relative">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
                  <Mail className="w-3.5 h-3.5 text-amber-300" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
                    Chapter 09 / {birthdayLetterHeader.tagline}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-wide">
                  To My Dear Akka, Thanusree
                </h2>

                <span className="font-mono text-xs text-amber-200/60 tracking-widest uppercase block mt-2">
                  {birthdayLetterHeader.date}
                </span>
              </div>

              {/* Letter Body */}
              <div className="space-y-6 text-slate-200 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
                {paragraphs.map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.12 }}
                    className={idx === 0 ? "font-caveat text-2xl sm:text-3xl text-amber-300" : ""}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Signature & Seal */}
              <div className="mt-12 pt-8 border-t border-amber-300/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <span className="font-sans text-xs text-slate-400 uppercase tracking-widest block">
                    {birthdayLetterHeader.signOff}
                  </span>
                  <span className="font-caveat text-3xl sm:text-4xl text-amber-200 font-bold block mt-1">
                    {birthdayLetterHeader.sender}
                  </span>
                </div>

                {/* Golden Wax Seal */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-0.5 shadow-[0_0_25px_rgba(251,191,36,0.5)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#120803] flex flex-col items-center justify-center">
                    <Heart className="w-5 h-5 text-amber-300 fill-amber-300" />
                    <span className="font-mono text-[9px] text-amber-200 tracking-tighter">23</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
