import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { timelineMilestones } from '../../data/timeline';
import MemoryModal from '../MemoryModal';
import { Clock, Star } from 'lucide-react';

export default function Section06Timeline() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenMemory = (milestone, idx) => {
    setSelectedMemory(milestone);
    setSelectedIndex(idx);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % timelineMilestones.length;
    setSelectedIndex(nextIdx);
    setSelectedMemory(timelineMilestones[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + timelineMilestones.length) % timelineMilestones.length;
    setSelectedIndex(prevIdx);
    setSelectedMemory(timelineMilestones[prevIdx]);
  };

  return (
    <section
      id="timeline"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black py-24"
      style={{
        backgroundImage: `url("${sectionBackgrounds.timeline}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-amber-500/20">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
              Chapter 04 / Chronology of Starlight
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            Timeline of Light
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “Every year added a new dimension to your brilliance.”
          </p>
        </motion.div>

        {/* Central Vertical Spine / Timeline */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-sky-400/20 via-amber-300/60 to-purple-500/30" />

          <div className="space-y-12 sm:space-y-16">
            {timelineMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Star */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#0a0f24] border border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                    <Star className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div
                      onClick={() => handleOpenMemory(milestone, idx)}
                      className={`group cursor-pointer p-5 rounded-2xl border border-white/10 hover:border-amber-400/50 bg-[#060a18]/85 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] flex flex-col sm:flex-row gap-5 items-center ${
                        isEven ? 'sm:flex-row-reverse text-left sm:text-right' : 'text-left'
                      }`}
                    >
                      {/* Image Thumbnail with glowing frame */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden border border-white/15 group-hover:border-amber-300/70 shadow-md">
                        <img
                          src={milestone.image}
                          alt="Timeline milestone"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 justify-start sm:justify-inherit">
                          <span className="font-mono text-xs text-sky-400 tracking-wider">
                            {milestone.age}
                          </span>
                          <span className="text-slate-500 text-xs">/</span>
                          <span className="font-mono text-xs text-amber-300 font-semibold">
                            {milestone.year}
                          </span>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-slate-300/80 mt-1 font-light line-clamp-2 leading-relaxed">
                          {milestone.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Memory Modal */}
      <MemoryModal
        isOpen={!!selectedMemory}
        onClose={() => setSelectedMemory(null)}
        memory={selectedMemory}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={timelineMilestones.length > 1}
      />
    </section>
  );
}
