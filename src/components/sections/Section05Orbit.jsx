import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { orbitMemories } from '../../data/memories';
import MemoryModal from '../MemoryModal';
import { Compass, Sparkles } from 'lucide-react';

export default function Section05Orbit() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = ['ALL', 'RADIANCE', 'SMILES', 'ADVENTURES'];

  const filteredMemories = selectedCategory === 'ALL'
    ? orbitMemories
    : orbitMemories.filter((m) => m.category === selectedCategory);

  const handleOpenMemory = (mem, idx) => {
    setSelectedMemory(mem);
    setSelectedIndex(idx);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % filteredMemories.length;
    setSelectedIndex(nextIdx);
    setSelectedMemory(filteredMemories[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + filteredMemories.length) % filteredMemories.length;
    setSelectedIndex(prevIdx);
    setSelectedMemory(filteredMemories[prevIdx]);
  };

  return (
    <section
      id="orbit"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black py-24"
      style={{
        backgroundImage: `url("${sectionBackgrounds.orbit}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-cyan-500/20">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300">
              Chapter 05 / Celestial Trajectory
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            Orbit of Memories
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “Moments that circle the heart forever.”
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-amber-400/20 text-amber-200 border border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                    : 'bg-black/40 text-slate-400 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Orbit Grid Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredMemories.map((mem, idx) => (
              <motion.div
                key={mem.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenMemory(mem, idx)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-amber-300/40 bg-[#060a16]/80 backdrop-blur-md transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(251,191,36,0.15)]"
              >
                {/* Image Container with 4:3 Aspect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                  <img
                    src={mem.image}
                    alt={mem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060a16] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-sky-300">
                    {mem.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <span className="font-mono text-xs text-amber-300/80 block mb-1">
                    {mem.year}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-amber-200 transition-colors">
                    {mem.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300/80 mt-2 font-light line-clamp-2 leading-relaxed">
                    {mem.caption}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-amber-300 transition-colors">
                    <span>View Memory</span>
                    <Sparkles className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Memory Modal */}
      <MemoryModal
        isOpen={!!selectedMemory}
        onClose={() => setSelectedMemory(null)}
        memory={selectedMemory}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={filteredMemories.length > 1}
      />
    </section>
  );
}
