import React from 'react';

export default function CosmicBackground({
  imageSrc,
  overlayOpacity = 0.35,
  isIntro = false,
  children,
  id,
  className = ""
}) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full flex flex-col justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `url("${imageSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle darkening overlay so text and UI are crystal clear without obscuring the artwork */}
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-1000"
        style={{ opacity: overlayOpacity }}
      />

      {/* Subtle top and bottom gradient fades to seamlessly blend section transitions */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Section Content */}
      <div className="relative z-20 w-full">
        {children}
      </div>
    </section>
  );
}
