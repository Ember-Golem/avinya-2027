import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StraitTransitionProps {
  fromSector: string;
  toSector: string;
  themeColor: string;
  narrativeText: string;
  direction?: 'left-to-right' | 'right-to-left';
}

export const StraitTransition: React.FC<StraitTransitionProps> = ({
  fromSector,
  toSector,
  themeColor,
  narrativeText,
  direction = 'left-to-right',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boatRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (boatRef.current && containerRef.current) {
        const startX = direction === 'left-to-right' ? '-10vw' : '95vw';
        const endX = direction === 'left-to-right' ? '95vw' : '-10vw';

        gsap.fromTo(
          boatRef.current,
          { x: startX, rotate: direction === 'left-to-right' ? 3 : -3 },
          {
            x: endX,
            rotate: direction === 'left-to-right' ? -2 : 2,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      if (waveRef.current && containerRef.current) {
        gsap.to(waveRef.current, {
          xPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className="relative h-24 sm:h-32 md:h-36 overflow-hidden flex flex-col justify-center border-y border-white/10 select-none bg-[#03070e]"
    >
      {/* Background Animated Sea Currents */}
      <div
        ref={waveRef}
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${themeColor} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Water Horizon Line */}
      <div className="absolute top-1/2 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* Horizontally Drifting Expedition Boat with Wake */}
      <div
        ref={boatRef}
        className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none will-change-transform"
      >
        <div className="relative flex items-center">
          <div
            className={`w-24 sm:w-44 h-2 rounded-full blur-[2px] opacity-75 ${
              direction === 'left-to-right' ? 'order-first mr-[-8px]' : 'order-last ml-[-8px]'
            }`}
            style={{
              background: `linear-gradient(${
                direction === 'left-to-right' ? 'to left' : 'to right'
              }, ${themeColor}, transparent)`,
            }}
          />

          <div
            className="p-1.5 sm:p-2.5 rounded-xl border backdrop-blur-md shadow-2xl relative"
            style={{
              backgroundColor: '#040814',
              borderColor: `${themeColor}88`,
              boxShadow: `0 0 25px ${themeColor}66`,
            }}
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 drop-shadow"
              style={{
                color: themeColor,
                transform: direction === 'right-to-left' ? 'scaleX(-1)' : 'none',
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 16L12 21L20 16L17 19H7L4 16Z" opacity="0.7" />
              <path d="M12 2L5 14H19L12 2Z" fill="currentColor" />
              <path d="M2 17L4 20H20L22 17L12 18L2 17Z" fill="currentColor" />
            </svg>
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: themeColor }}
            />
          </div>
        </div>
      </div>

      {/* Strait Navigation Telemetry Banner: flex-col md:flex-row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-1 md:gap-4 text-center text-[10px] sm:text-xs font-mono-jb tracking-[0.2em] uppercase">
        {/* Left Sector: Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3 text-slate-400 min-w-0">
          <span className="w-6 sm:w-12 h-px bg-gradient-to-r from-transparent to-white/30" />
          <Navigation className="w-3.5 h-3.5" style={{ color: themeColor }} />
          <span className="text-slate-500">FROM:</span>
          <span className="text-slate-300 font-semibold truncate">{fromSector}</span>
        </div>

        {/* Center Tag: Visible everywhere */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/10 backdrop-blur-md shadow-sm max-w-full min-w-0">
          <span className="w-1.5 h-1.5 rounded-full animate-ping shrink-0" style={{ backgroundColor: themeColor }} />
          <span className="font-semibold text-[10px] sm:text-xs truncate" style={{ color: themeColor }}>
            {narrativeText}
          </span>
        </div>

        {/* Right Sector: On mobile only destination shown */}
        <div className="flex items-center gap-2 sm:gap-3 text-slate-400 min-w-0">
          <span className="hidden md:inline text-slate-500">APPROACHING:</span>
          <span className="text-white font-semibold truncate">{toSector}</span>
          <span className="hidden md:inline w-6 sm:w-12 h-px bg-gradient-to-l from-transparent to-white/30" />
        </div>
      </div>
    </div>
  );
};

export default StraitTransition;
