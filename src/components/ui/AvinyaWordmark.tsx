import React from 'react';

export interface AvinyaWordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  onClick?: () => void;
  withGlow?: boolean;
}

/**
 * AVINYA '27 Precision Mathematical Vector Master Logotype
 * 100% Custom-engineered inline SVG geometry across a 680x120 architectural grid.
 * Shared universally across Navbar, Hero, and Footer.
 */
export const AvinyaWordmark: React.FC<AvinyaWordmarkProps> = ({
  size = 'md',
  className = '',
  onClick,
  withGlow = true
}) => {
  // Fluid responsive dimension presets ensuring zero overflow on 375px mobile screens
  const sizeClasses = {
    sm: 'w-36 sm:w-44 md:w-48 h-auto',
    md: 'w-48 sm:w-60 md:w-68 h-auto',
    lg: 'w-64 sm:w-80 md:w-96 h-auto',
    xl: 'w-full max-w-[320px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[680px] h-auto',
    hero: 'w-full max-w-[320px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[680px] h-auto'
  }[size] || 'w-48 sm:w-60 md:w-68 h-auto';

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : 'img'}
      aria-label="AVINYA '27 Mathematical Vector Logo"
      className={`inline-flex items-center justify-center select-none ${
        onClick ? 'cursor-pointer hover:brightness-110 active:scale-[0.98]' : ''
      } transition-all duration-300 ${className}`}
    >
      <svg
        viewBox="0 0 680 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} ${withGlow ? 'filter drop-shadow-[0_0_24px_rgba(0,240,255,0.35)]' : ''}`}
      >
        <defs>
          {/* Metallic Silver-White Linear Gradient for Monolith Glyphs */}
          <linearGradient id="silverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F8FAFC" />
            <stop offset="75%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Precision Etched Hairline Gradient */}
          <linearGradient id="hairlineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Imperial Brushed Gold Gradient for Nautical Stars & '27 Cartouche */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7D6" />
            <stop offset="25%" stopColor="#F3E5AB" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>

          {/* Bioluminescent Cyan Telemetry Glow Filter */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Cartouche Inner Shadow */}
          <radialGradient id="cartoucheBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B132B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        {/* ======================================================== */}
        {/* GLYPH 1: FIRST 'A' WITH NAUTICAL COMPASS STAR CROSSBAR  */}
        {/* ======================================================== */}
        <g id="glyph-A1">
          {/* Outer Apex Chiseled Triangle */}
          <path
            d="M 40 105 L 75 15 L 110 105"
            stroke="url(#silverGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
          {/* Inner Counter Hairline */}
          <path
            d="M 52 101 L 75 42 L 98 101"
            stroke="url(#hairlineGrad)"
            strokeWidth="1.2"
            opacity="0.65"
          />
          {/* Golden Orbital Ellipse Arc Sweeping Through Letter */}
          <ellipse
            cx="75"
            cy="72"
            rx="48"
            ry="14"
            stroke="url(#goldGrad)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.6"
            transform="rotate(-15 75 72)"
          />
          {/* Razor-sharp 4-point Nautical Compass Star Crossbar */}
          <path
            d="M 38 72 L 68 69 L 75 56 L 82 69 L 112 72 L 82 75 L 75 88 L 68 75 Z"
            fill="url(#goldGrad)"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
          {/* Compass Diamond Center Node */}
          <circle cx="75" cy="72" r="2.5" fill="#FFFFFF" filter="url(#nodeGlow)" />
        </g>

        {/* ======================================================== */}
        {/* GLYPH 2: 'V' WITH INVERTED GEOMETRIC CALIPER & HAIRLINE */}
        {/* ======================================================== */}
        <g id="glyph-V">
          {/* Outer Caliper Apex */}
          <path
            d="M 130 15 L 165 105 L 200 15"
            stroke="url(#silverGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
          {/* Precision Parallel Inner Hairline */}
          <path
            d="M 142 22 L 165 84 L 188 22"
            stroke="url(#hairlineGrad)"
            strokeWidth="1.5"
            opacity="0.8"
          />
          {/* Caliper Terminal Ticks */}
          <line x1="124" y1="15" x2="136" y2="15" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="194" y1="15" x2="206" y2="15" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Apex Measurement Reticle */}
          <circle cx="165" cy="94" r="2" fill="#00F0FF" opacity="0.9" />
        </g>

        {/* ======================================================== */}
        {/* GLYPH 3: 'I' VERTICAL MONOLITH & TELEMETRY NODE         */}
        {/* ======================================================== */}
        <g id="glyph-I">
          {/* Chamfered Monolith Stem */}
          <path
            d="M 231 15 L 239 15 L 243 19 L 243 101 L 239 105 L 231 105 L 227 101 L 227 19 Z"
            fill="url(#silverGrad)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
          />
          {/* Etched Central Conduit */}
          <line x1="235" y1="22" x2="235" y2="98" stroke="#040814" strokeWidth="2" />
          {/* Glowing Cyan Telemetry Node */}
          <circle cx="235" cy="60" r="4.5" fill="#00F0FF" filter="url(#nodeGlow)" />
          <circle cx="235" cy="60" r="8" stroke="#00F0FF" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.8" />
          {/* Telemetry Ticks */}
          <line x1="223" y1="60" x2="227" y2="60" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="243" y1="60" x2="247" y2="60" stroke="#00F0FF" strokeWidth="1.5" />
        </g>

        {/* ======================================================== */}
        {/* GLYPH 4: 'N' ARCHITECTURAL SLASH & NOTCHED JOINT        */}
        {/* ======================================================== */}
        <g id="glyph-N">
          {/* Left Vertical Monolith */}
          <path
            d="M 273 15 L 281 15 L 285 19 L 285 101 L 281 105 L 273 105 L 269 101 L 269 19 Z"
            fill="url(#silverGrad)"
          />
          {/* Right Vertical Monolith */}
          <path
            d="M 345 15 L 353 15 L 357 19 L 357 101 L 353 105 L 345 105 L 341 101 L 341 19 Z"
            fill="url(#silverGrad)"
          />
          {/* Notched Architectural Diagonal Slash */}
          <path
            d="M 276 15 L 288 15 L 350 97 L 350 105 L 338 105 L 276 23 Z"
            fill="url(#silverGrad)"
          />
          {/* Diagonal Etched Cyan Hairline */}
          <line
            x1="284"
            y1="23"
            x2="342"
            y2="97"
            stroke="url(#hairlineGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 3"
            opacity="0.85"
          />
        </g>

        {/* ======================================================== */}
        {/* GLYPH 5: 'Y' SPLIT TUNING FORK & CONVERGING STEM        */}
        {/* ======================================================== */}
        <g id="glyph-Y">
          {/* Left Upper Fork */}
          <path
            d="M 374 15 L 409 64"
            stroke="url(#silverGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Right Upper Fork */}
          <path
            d="M 444 15 L 409 64"
            stroke="url(#silverGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Converging Vertical Monolith Stem */}
          <path
            d="M 409 64 L 409 105"
            stroke="url(#silverGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Inner Tuning Fork Hairlines */}
          <line x1="382" y1="21" x2="409" y2="58" stroke="url(#hairlineGrad)" strokeWidth="1.2" opacity="0.75" />
          <line x1="436" y1="21" x2="409" y2="58" stroke="url(#hairlineGrad)" strokeWidth="1.2" opacity="0.75" />
          {/* Tuning Fork Convergence Node */}
          <circle cx="409" cy="64" r="3.5" fill="url(#goldGrad)" />
          {/* Base Anchor Foot */}
          <line x1="400" y1="105" x2="418" y2="105" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* ======================================================== */}
        {/* GLYPH 6: SECOND 'A' WITH COMPASS CROSSBAR & ORBIT       */}
        {/* ======================================================== */}
        <g id="glyph-A2">
          {/* Outer Apex Chiseled Triangle */}
          <path
            d="M 465 105 L 500 15 L 535 105"
            stroke="url(#silverGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
          {/* Inner Counter Hairline */}
          <path
            d="M 477 101 L 500 42 L 523 101"
            stroke="url(#hairlineGrad)"
            strokeWidth="1.2"
            opacity="0.65"
          />
          {/* Golden Orbital Ellipse Arc Sweeping Through Letter */}
          <ellipse
            cx="500"
            cy="72"
            rx="48"
            ry="14"
            stroke="url(#goldGrad)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.6"
            transform="rotate(15 500 72)"
          />
          {/* Razor-sharp 4-point Nautical Compass Star Crossbar */}
          <path
            d="M 463 72 L 493 69 L 500 56 L 507 69 L 537 72 L 507 75 L 500 88 L 493 75 Z"
            fill="url(#goldGrad)"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
          {/* Compass Diamond Center Node */}
          <circle cx="500" cy="72" r="2.5" fill="#FFFFFF" filter="url(#nodeGlow)" />
        </g>

        {/* ======================================================== */}
        {/* '27 BADGE: ETCHED BRASS CARTOUCHE FRAME AT X=560        */}
        {/* ======================================================== */}
        <g id="badge-27">
          {/* Outer Beveled Brass Cartouche Frame */}
          <path
            d="M 570 28 L 656 28 L 670 42 L 670 78 L 656 92 L 570 92 L 556 78 L 556 42 Z"
            fill="url(#cartoucheBg)"
            stroke="url(#goldGrad)"
            strokeWidth="2"
            filter="drop-shadow(0 4px 10px rgba(0,0,0,0.8))"
          />
          {/* Inner Telemetry Dashed Border */}
          <path
            d="M 573 33 L 653 33 L 664 44 L 664 76 L 653 87 L 573 87 L 562 76 L 562 44 Z"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="0.8"
            strokeDasharray="3 2"
            opacity="0.75"
          />
          {/* Corner Brass Rivets */}
          <circle cx="566" cy="40" r="1.5" fill="#D4AF37" />
          <circle cx="660" cy="40" r="1.5" fill="#D4AF37" />
          <circle cx="566" cy="80" r="1.5" fill="#D4AF37" />
          <circle cx="660" cy="80" r="1.5" fill="#D4AF37" />

          {/* Apostrophe "'" — Faceted Diamond Spark */}
          <path
            d="M 577 44 L 581 38 L 585 44 L 582 55 L 579 55 Z"
            fill="url(#goldGrad)"
          />

          {/* Numeral "2" — Architectural Serif Form */}
          <path
            d="M 592 50 C 592 41 600 37 610 37 C 621 37 628 43 628 51 C 628 59 620 66 608 74 L 594 83 L 629 83 L 629 78 L 606 78 L 616 70 C 627 61 634 55 634 47 C 634 37 622 31 610 31 C 596 31 588 39 587 49 Z"
            fill="url(#goldGrad)"
            stroke="#FFF7D6"
            strokeWidth="0.5"
          />

          {/* Numeral "7" — Dynamic Beveled Slash */}
          <path
            d="M 637 38 L 662 38 L 662 44 L 649 83 L 642 83 L 655 44 L 637 44 Z"
            fill="url(#goldGrad)"
            stroke="#FFF7D6"
            strokeWidth="0.5"
          />

          {/* Cartouche Bottom Telemetry Subtext */}
          <text
            x="613"
            y="108"
            textAnchor="middle"
            fill="#38BDF8"
            fontSize="7"
            fontFamily="monospace"
            letterSpacing="2"
            opacity="0.85"
          >
            IIIT DHARWAD
          </text>
        </g>
      </svg>
    </div>
  );
};

export default AvinyaWordmark;
