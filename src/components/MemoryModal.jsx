import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MemoryModal({
  isOpen,
  onClose,
  memory,
  onNext,
  onPrev,
  hasMultiple = false
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !memory) return null;

  const hasText = memory.caption || memory.title;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`relative z-10 w-full ${hasText ? 'max-w-4xl' : 'max-w-3xl'} max-h-[90vh] flex flex-col ${hasText ? 'md:flex-row' : ''} bg-[#060a16]/95 border border-white/15 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)]`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 text-slate-300 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Showcase */}
          <div className={`relative ${hasText ? 'w-full md:w-3/5' : 'w-full'} bg-black flex items-center justify-center min-h-[350px] max-h-[85vh] p-2`}>
            <img
              src={memory.image}
              alt="Memory"
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl"
            />

            {/* Navigation Arrows for gallery */}
            {hasMultiple && (
              <>
                <button
                  onClick={onPrev}
                  aria-label="Previous"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-slate-300 hover:text-white transition-all backdrop-blur-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={onNext}
                  aria-label="Next"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-slate-300 hover:text-white transition-all backdrop-blur-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Optional Caption Section (only if text exists) */}
          {hasText && (
            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-[#080d1e] to-[#04060d]">
              <div>
                {memory.age && (
                  <span className="font-mono text-xs uppercase tracking-widest text-sky-400 block mb-2">
                    {memory.age}
                  </span>
                )}
                {memory.title && (
                  <h3 className="font-serif text-2xl text-white font-medium mb-3">
                    {memory.title}
                  </h3>
                )}
                <div className="w-12 h-[1px] bg-gradient-to-r from-amber-400/60 to-transparent mb-4" />
                {memory.caption && (
                  <p className="font-sans text-sm text-slate-300/90 leading-relaxed font-light">
                    {memory.caption}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-caveat text-xl text-amber-200/80">
                  Thanusree / 23
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
