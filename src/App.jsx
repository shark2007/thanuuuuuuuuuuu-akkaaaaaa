import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import StarField from './components/StarField';
import FloatingNavigation, { SECTIONS } from './components/FloatingNavigation';

import Section01Intro from './components/sections/Section01Intro';
import Section02Moon from './components/sections/Section02Moon';
import Section04Childhood from './components/sections/Section04Childhood';
import Section06Timeline from './components/sections/Section06Timeline';
import Section07Stars23 from './components/sections/Section07Stars23';
import Section08Group from './components/sections/Section08Group';
import Section09PhotoWall from './components/sections/Section09PhotoWall';
import Section10Present from './components/sections/Section10Present';
import Section11Letter from './components/sections/Section11Letter';
import Section12FinalWishes from './components/sections/Section12FinalWishes';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');

  // Track currently active section during scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Find section currently in viewport center
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - windowHeight * 0.4;
          if (scrollY >= top) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden selection:bg-amber-400 selection:text-black">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Floating Ambient Starfield */}
      <StarField />

      {/* Cinematic Chapter Navigation */}
      <FloatingNavigation
        activeSection={activeSection}
        onSelectSection={(id) => setActiveSection(id)}
      />

      {/* 10 Sequential Cinematic Sections */}
      <main className="relative z-10 w-full">
        <Section01Intro />
        <Section02Moon />
        <Section04Childhood />
        <Section06Timeline />
        <Section07Stars23 />
        <Section08Group />
        <Section09PhotoWall />
        <Section10Present />
        <Section11Letter />
        <Section12FinalWishes />
      </main>

      {/* Subtle Footer */}
      <footer className="relative z-20 py-8 border-t border-white/5 text-center text-xs font-mono text-slate-500 bg-black">
        <p>Built with love for Thanusree Akka &bull; 23rd Birthday Celebration</p>
      </footer>
    </div>
  );
}
