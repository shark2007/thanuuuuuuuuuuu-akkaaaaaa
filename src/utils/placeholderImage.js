/**
 * Elegant SVG-based Celestial Placeholder Generator
 * Generates an ethereal cosmic memory artwork for placeholders
 */

export function getCelestialPlaceholder(title = "Celestial Memory", category = "Constellation", color = "#8b5cf6") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#02040a" />
        <stop offset="45%" stop-color="#0d1124" />
        <stop offset="80%" stop-color="#16082f" />
        <stop offset="100%" stop-color="#050814" />
      </linearGradient>
      <radialGradient id="nebulaGlow" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.35" />
        <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.15" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    <!-- Base cosmic canvas -->
    <rect width="800" height="1000" fill="url(#skyGrad)" />
    <circle cx="400" cy="450" r="320" fill="url(#nebulaGlow)" />
    
    <!-- Subtle Star Field -->
    <g fill="#ffffff" opacity="0.6">
      <circle cx="120" cy="180" r="1.5" />
      <circle cx="280" cy="120" r="1" />
      <circle cx="680" cy="220" r="2" />
      <circle cx="590" cy="380" r="1.5" />
      <circle cx="180" cy="620" r="2" />
      <circle cx="640" cy="740" r="1.2" />
      <circle cx="340" cy="840" r="1.8" />
      <circle cx="490" cy="190" r="2.5" />
      <circle cx="210" cy="340" r="1.2" />
      <circle cx="520" cy="610" r="1.5" />
    </g>
    
    <!-- Orbit Rings -->
    <ellipse cx="400" cy="460" rx="260" ry="140" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="4 6" />
    <ellipse cx="400" cy="460" rx="310" ry="80" fill="none" stroke="rgba(56,189,248,0.12)" stroke-width="1" />
    
    <!-- Central Celestial Emblem -->
    <g transform="translate(400, 460)" filter="url(#softGlow)">
      <circle cx="0" cy="0" r="85" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
      <circle cx="0" cy="0" r="65" fill="none" stroke="${color}" stroke-width="1.5" stroke-dasharray="2 4" />
      
      <!-- Star Icon -->
      <path d="M0 -35 L8 -10 L33 -10 L13 5 L20 30 L0 15 L-20 30 L-13 5 L-33 -10 L-8 -10 Z" fill="#fef08a" opacity="0.9" />
      
      <!-- Inner Diamond -->
      <polygon points="0,-12 12,0 0,12 -12,0" fill="#ffffff" opacity="0.8" />
    </g>
    
    <!-- Border Frame -->
    <rect x="25" y="25" width="750" height="950" rx="12" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
    <rect x="35" y="35" width="730" height="930" rx="8" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
    
    <!-- Category & Title -->
    <text x="400" y="680" text-anchor="middle" font-family="'Inter', sans-serif" font-size="16" letter-spacing="8" fill="#38bdf8" opacity="0.85">${category.toUpperCase()}</text>
    <text x="400" y="730" text-anchor="middle" font-family="'Playfair Display', serif" font-size="28" font-style="italic" fill="#ffffff" opacity="0.95">${title}</text>
    <text x="400" y="770" text-anchor="middle" font-family="'Caveat', cursive" font-size="22" fill="#fbbf24" opacity="0.75">Photo Placeholder</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
