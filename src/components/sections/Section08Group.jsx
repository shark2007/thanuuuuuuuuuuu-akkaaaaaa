import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { groupPhotos } from '../../data/memories';
import MemoryModal from '../MemoryModal';
import { Users, Sparkles, Heart } from 'lucide-react';

export default function Section08Group() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenPhoto = (photo, idx) => {
    setSelectedPhoto(photo);
    setSelectedIndex(idx);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % groupPhotos.length;
    setSelectedIndex(nextIdx);
    setSelectedPhoto(groupPhotos[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + groupPhotos.length) % groupPhotos.length;
    setSelectedIndex(prevIdx);
    setSelectedPhoto(groupPhotos[prevIdx]);
  };

  return (
    <section
      id="group"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black py-24"
      style={{
        backgroundImage: `url("${sectionBackgrounds.galaxy}")`,
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
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-sky-500/20">
            <Users className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300">
              Chapter 06 / The Sacred Circle
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            Our Gang
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “The chosen constellation — unshakeable bonds and endless laughter.”
          </p>
        </motion.div>

        {/* Group Photos Showcase Grid — Pure high quality photos & glowing frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groupPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleOpenPhoto(photo, idx)}
              className="group cursor-pointer p-3 sm:p-4 rounded-3xl border border-white/10 hover:border-amber-300/60 bg-[#060a18]/85 backdrop-blur-md shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.2)]"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/60 shadow-inner">
                <img
                  src={photo.image}
                  alt="Our Gang"
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
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        memory={selectedPhoto}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={groupPhotos.length > 1}
      />
    </section>
  );
}
