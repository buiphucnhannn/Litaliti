// Line-drawn little house with a chimney — the motif from the Litaliti logo
export function LittleHouse({ className = "", color = "#A67C52", opacity = 1 }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ color }} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity={opacity}>
        {/* Roof with a wobbly hand-drawn edge */}
        <path d="M8 31 L31 11 C32 10.2 33 10.2 34 11 L56 30" />
        {/* Chimney */}
        <path d="M43 19 V10 H49 V24" />
        <path d="M44.5 6.5 c1.5 -1.4 3 -1.4 4.2 -2.6" strokeOpacity="0.6" />
        {/* Walls */}
        <path d="M13 27 V54 H51 V27" />
        {/* Door (arched) and window */}
        <path d="M22 54 V42 a5 5 0 0 1 10 0 V54" />
        <rect x="37" y="36" width="8" height="8" rx="1" />
        <path d="M41 36 V44 M37 40 H45" strokeWidth="1.1" />
        {/* Little round attic window */}
        <circle cx="32" cy="24" r="2" />
        {/* Ground */}
        <path d="M5 57 C20 55.5 44 55.5 59 57" strokeDasharray="2.5 3" strokeOpacity="0.7" />
      </g>
    </svg>
  );
}

// Four-point twinkle, for scattering in quiet corners
export function Sparkle({ className = "", color = "#C29A6B" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 1.5 C12.8 8.2 15.8 11.2 22.5 12 C15.8 12.8 12.8 15.8 12 22.5 C11.2 15.8 8.2 12.8 1.5 12 C8.2 11.2 11.2 8.2 12 1.5Z" fill={color} />
    </svg>
  );
}

// A loose cluster of twinkles, dots and a tiny heart — fills empty patches without drawing attention.
// Gently floats; position it with className (absolute + top/left...).
export function Sprinkles({ className = "", color = "#C29A6B" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none select-none animate-float-soft ${className}`}>
      <svg viewBox="0 0 120 90" className="w-full h-full overflow-visible">
        <path d="M30 6 C31 18 36 23 48 24 C36 25 31 30 30 42 C29 30 24 25 12 24 C24 23 29 18 30 6Z" fill={color} opacity="0.55" />
        <path d="M86 40 C86.6 47 89.5 49.9 96.5 50.5 C89.5 51.1 86.6 54 86 61 C85.4 54 82.5 51.1 75.5 50.5 C82.5 49.9 85.4 47 86 40Z" fill={color} opacity="0.4" />
        <path d="M58 70.5s-6-3.7-6-8.2a3.4 3.4 0 0 1 6-2.2 3.4 3.4 0 0 1 6 2.2c0 4.5-6 8.2-6 8.2z" fill={color} opacity="0.45" />
        <circle cx="70" cy="14" r="2.2" fill={color} opacity="0.45" />
        <circle cx="14" cy="64" r="1.8" fill={color} opacity="0.35" />
        <circle cx="108" cy="22" r="1.5" fill={color} opacity="0.35" />
        <circle cx="40" cy="82" r="1.4" fill={color} opacity="0.3" />
      </svg>
    </div>
  );
}

// Small heart used as a soft romantic accent
export function TinyHeart({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z"
        fill={color}
      />
    </svg>
  );
}

export function BotanicalBranch({ className = "", flip = false, color = "#7A5C43" }) {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    >
      <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.6}>
        {/* Main stem curve */}
        <path d="M 20 210 Q 50 140 110 30" />
        {/* Leaf 1 top */}
        <path d="M 110 30 Q 125 10 140 15 Q 135 35 110 30" fill={color} fillOpacity="0.2" />
        {/* Leaf pair 2 */}
        <path d="M 95 60 Q 125 45 145 60 Q 125 75 95 60" fill={color} fillOpacity="0.25" />
        <path d="M 90 70 Q 60 55 45 70 Q 65 85 90 70" fill={color} fillOpacity="0.22" />
        {/* Leaf pair 3 */}
        <path d="M 75 105 Q 115 95 130 115 Q 100 125 75 105" fill={color} fillOpacity="0.25" />
        <path d="M 70 115 Q 35 100 20 118 Q 45 130 70 115" fill={color} fillOpacity="0.2" />
        {/* Leaf pair 4 */}
        <path d="M 55 150 Q 95 140 110 160 Q 80 170 55 150" fill={color} fillOpacity="0.25" />
        <path d="M 48 160 Q 15 150 5 170 Q 30 180 48 160" fill={color} fillOpacity="0.2" />
      </g>
    </svg>
  );
}

// Ornamental seam between two cream sections: fading kraft rules around the little house.
// Place it absolutely at the top of the lower section; className sets the vertical offset.
export function SectionDivider({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-x-0 flex items-center justify-center gap-4 px-6 pt-3 pointer-events-none z-0 ${className}`}
    >
      <span data-reveal="divider-l" data-reveal-delay="200" className="h-px w-full max-w-[420px] bg-gradient-to-r from-transparent via-[#A67C52]/35 to-[#A67C52]/60" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#A67C52]/50 shrink-0" />
      <span data-reveal="divider-mark" className="shrink-0">
        <LittleHouse className="w-12 h-12 md:w-14 md:h-14" />
      </span>
      <span className="w-1.5 h-1.5 rotate-45 bg-[#A67C52]/50 shrink-0" />
      <span data-reveal="divider-r" data-reveal-delay="200" className="h-px w-full max-w-[420px] bg-gradient-to-l from-transparent via-[#A67C52]/35 to-[#A67C52]/60" />
    </div>
  );
}

// Small kraft rhombus used before the eyebrow labels
export function DiamondMark({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M8 1.5 14.5 8 8 14.5 1.5 8Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 5 11 8 8 11 5 8Z" fill="currentColor" />
    </svg>
  );
}
