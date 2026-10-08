import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { presentPhotos } from '../../data/memories';
import MemoryModal from '../MemoryModal';
import { Sun } from 'lucide-react';

export default function Section10Present() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenMemory = (mem, idx) => {
    setSelectedMemory(mem);
    setSelectedIndex(idx);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % presentPhotos.length;
    setSelectedIndex(nextIdx);
    setSelectedMemory(presentPhotos[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + presentPhotos.length) % presentPhotos.length;
    setSelectedIndex(prevIdx);
    setSelectedMemory(presentPhotos[prevIdx]);
  };

  return (
    <section
      id="present"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black py-24"
      style={{
        backgroundImage: `url("${sectionBackgrounds.present}")`,
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-amber-500/20">
            <Sun className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
              Chapter 08 / Radiant Zenith
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            The Present
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “The universe as it is now — poised, brilliant, and 23.”
          </p>
        </motion.div>

        {/* Asymmetrical Collage Grid — Pure framed photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {presentPhotos.map((mem, idx) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: parseFloat(mem.rotation) || 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              onClick={() => handleOpenMemory(mem, idx)}
              className="group cursor-pointer p-3 sm:p-4 rounded-3xl border border-white/10 hover:border-amber-300/60 bg-[#070b1a]/85 backdrop-blur-md shadow-2xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black/60 shadow-inner">
                <img
                  src={mem.image}
                  alt="The Present at 23"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-amber-300/40 rounded-2xl transition-colors pointer-events-none" />
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
        hasMultiple={presentPhotos.length > 1}
      />
    </section>
  );
}
