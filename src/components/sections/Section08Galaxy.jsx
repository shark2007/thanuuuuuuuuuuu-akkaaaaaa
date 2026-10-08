import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionBackgrounds } from '../../config/backgrounds';
import { peopleGalaxyClusters } from '../../data/people';
import MemoryModal from '../MemoryModal';
import { Users, Heart, Sparkles } from 'lucide-react';

export default function Section08Galaxy() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <section
      id="galaxy"
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
              Chapter 08 / Celestial Gravity
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide uppercase">
            Galaxy of People
          </h2>

          <p className="font-caveat text-2xl sm:text-3xl text-amber-200/90 mt-2">
            “The constellation of hearts that love you unconditionally.”
          </p>
        </motion.div>

        {/* Clusters */}
        <div className="space-y-16">
          {peopleGalaxyClusters.map((cluster, cIdx) => (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: cIdx * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#050814]/75 backdrop-blur-md shadow-2xl"
            >
              {/* Cluster Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor]"
                      style={{ backgroundColor: cluster.color, color: cluster.color }}
                    />
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide">
                      {cluster.title}
                    </h3>
                    <span className="font-mono text-xs text-slate-400 tracking-wider">
                      — {cluster.subtitle}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-300/80 mt-1 font-light">
                    {cluster.description}
                  </p>
                </div>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cluster.members.map((member) => (
                  <motion.div
                    key={member.id}
                    whileHover={{ y: -5 }}
                    onClick={() =>
                      setSelectedPerson({
                        image: member.image,
                        title: member.name,
                        category: member.relation,
                        caption: member.note,
                      })
                    }
                    className="group cursor-pointer p-5 rounded-2xl border border-white/10 hover:border-amber-300/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-4"
                  >
                    {/* Planet Photo */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full p-1 bg-gradient-to-tr from-sky-400/30 to-amber-300/30 group-hover:from-sky-400/60 group-hover:to-amber-300/70 transition-all duration-300 shadow-md">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black/60">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                        <span className="font-mono text-[11px] text-sky-300 tracking-wider uppercase">
                          {member.relation}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-amber-200 transition-colors truncate">
                        {member.name}
                      </h4>
                      <p className="font-sans text-xs text-slate-300/80 font-light mt-1 line-clamp-2 leading-relaxed">
                        {member.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Memory Modal */}
      <MemoryModal
        isOpen={!!selectedPerson}
        onClose={() => setSelectedPerson(null)}
        memory={selectedPerson}
        hasMultiple={false}
      />
    </section>
  );
}
