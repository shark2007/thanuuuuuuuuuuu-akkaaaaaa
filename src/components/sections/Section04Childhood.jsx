import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { childhoodPhotos } from '../../data/memories';
import MemoryModal from '../MemoryModal';
import { Sparkles } from 'lucide-react';

export default function Section04Childhood() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenMemory = (memory, index) => {
    setSelectedMemory(memory);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % childhoodPhotos.length;
    setSelectedIndex(nextIdx);
    setSelectedMemory(childhoodPhotos[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + childhoodPhotos.length) % childhoodPhotos.length;
    setSelectedIndex(prevIdx);
    setSelectedMemory(childhoodPhotos[prevIdx]);
  };

  return (
    <section
      id="childhood"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black py-24"
      style={{
        backgroundImage: `url("${sectionBackgrounds.childhood}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12">
        {/* Title & Subtitle Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-purple-300">
              Chapter 03 / Constellation of Origins
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            The First Stars
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “Where the story began.”
          </p>
        </motion.div>

        {/* Floating circular photo nodes across the constellation — pure photos & glowing frames only */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
          {childhoodPhotos.map((mem, idx) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, scale: 0.85, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group relative flex flex-col items-center cursor-pointer"
              onClick={() => handleOpenMemory(mem, idx)}
            >
              {/* Surrounding constellation glow ring */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-tr from-amber-300/30 via-sky-400/40 to-purple-500/40 group-hover:from-amber-300/70 group-hover:via-sky-400/80 group-hover:to-purple-500/80 transition-all duration-500 shadow-[0_0_25px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_35px_rgba(251,191,36,0.5)]">
                {/* Orbiting dashed indicator ring */}
                <div className="absolute inset-[-5px] rounded-full border border-dashed border-white/20 group-hover:border-amber-300/60 animate-spin-very-slow pointer-events-none" />

                {/* Circular image node */}
                <div className="w-full h-full rounded-full overflow-hidden bg-black/60 relative">
                  <img
                    src={mem.image}
                    alt="Childhood memory"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Memory Modal */}
      <MemoryModal
        isOpen={!!selectedMemory}
        onClose={() => setSelectedMemory(null)}
        memory={selectedMemory}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={childhoodPhotos.length > 1}
      />
    </section>
  );
}
