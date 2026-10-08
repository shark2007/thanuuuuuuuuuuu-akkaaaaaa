import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { normalPhotos } from '../../data/memories';
import MemoryModal from '../MemoryModal';
import { Image as ImageIcon } from 'lucide-react';

export default function Section09PhotoWall() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenPhoto = (photo, idx) => {
    setSelectedPhoto(photo);
    setSelectedIndex(idx);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % normalPhotos.length;
    setSelectedIndex(nextIdx);
    setSelectedPhoto(normalPhotos[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + normalPhotos.length) % normalPhotos.length;
    setSelectedIndex(prevIdx);
    setSelectedPhoto(normalPhotos[prevIdx]);
  };

  return (
    <section
      id="photo-wall"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black py-24"
      style={{
        backgroundImage: `url("${sectionBackgrounds.photoWall}")`,
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
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/20">
            <ImageIcon className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-purple-300">
              Chapter 07 / Celestial Gallery
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            A Universe of Memories
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “Captured frames of your extraordinary journey.”
          </p>
        </motion.div>

        {/* Responsive Masonry / Grid — pure photos & glowing frames only, NO text names */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {normalPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: (idx % 4) * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => handleOpenPhoto(photo, idx)}
              className="break-inside-avoid group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-amber-300/60 bg-[#080d1e]/80 backdrop-blur-md shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] transition-all duration-500 p-1.5"
            >
              {/* Photo Image in Clean Frame */}
              <div className="relative w-full rounded-xl overflow-hidden bg-black/50">
                <img
                  src={photo.image}
                  alt="Memory frame"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-amber-300/40 rounded-xl transition-colors pointer-events-none" />
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
        hasMultiple={normalPhotos.length > 1}
      />
    </section>
  );
}
