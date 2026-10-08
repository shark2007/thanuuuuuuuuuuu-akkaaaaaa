import React, { useMemo } from 'react';

export default function StarField() {
  // Generate 45 ambient stars with random positions and twinkles
  const stars = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `pulseGlow ${star.duration}s infinite ease-in-out ${star.delay}s`,
            opacity: star.opacity,
          }}
          className="absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
        />
      ))}
    </div>
  );
}
