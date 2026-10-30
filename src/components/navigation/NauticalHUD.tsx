import React, { useState } from 'react';
import {
  Compass,
  Search,
} from 'lucide-react';
import { AvinyaLogo } from '@/components/ui/AvinyaLogo';
import { useActiveSection, SECTIONS, SectionId } from '@/hooks/useActiveSection';

export type { SectionId };

interface NauticalHUDProps {
  onNavigate?: (sectionId: SectionId) => void;
  onOpenSearch?: () => void;
}

const TRACK_HEIGHT = 240;

export const NauticalHUD: React.FC<NauticalHUDProps> = ({
  onNavigate,
  onOpenSearch,
}) => {
  const { activeIndex } = useActiveSection();
  const [hoveredPoint, setHoveredPoint] = useState<SectionId | null>(null);

  const scrollToSection = (id: SectionId) => {
    onNavigate?.(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none">
      {/* ======================================================== */}
      {/* TOP HEADER COMMAND BAR (Fixed, Never overlaps, z-50)     */}
      {/* ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto bg-[#03070e]/70 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
          {/* Logo on the left in its own shrink-0 flex slot with z-50 */}
          <div className="shrink-0 flex items-center gap-3 z-50">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left text-slate-100 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-2.5 focus:outline-none"
              aria-label="AVINYA 2027 home"
            >
              <AvinyaLogo className="text-white hover:text-cyan-300" />
            </button>
            <div className="hidden lg:block h-5 w-px bg-white/15" />
            <span className="hidden lg:inline text-[10px] font-mono-jb uppercase tracking-wider text-slate-400">
              MARCH 12–14 · IIIT DHARWAD
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 font-mono-jb text-xs">
            {SECTIONS.map((sec, idx) => {
              const isActive = activeIndex === idx;
              const Icon = sec.icon;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-white/15 text-white font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                  style={isActive ? { borderBottom: `2px solid ${sec.accent}` } : {}}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    style={{ color: isActive ? sec.accent : 'currentColor' }}
                  />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2">
            {/* Search Trigger (Ctrl+K) */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search all fest events"
                className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono-jb cursor-pointer"
                title="Search events (Ctrl+K)"
              >
                <Search className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Search</span>
              </button>
            )}

            {/* Compact Embark button on mobile/desktop */}
            <button
              onClick={() => scrollToSection('hero')}
              className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/30 font-mono-jb text-xs font-semibold tracking-wider transition-all cursor-pointer shrink-0"
            >
              <span className="inline md:hidden">00 EMBARK</span>
              <span className="hidden md:inline">EMBARK</span>
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* RIGHT-SIDE BOAT SCROLL TRACKER                            */}
      {/* Dead-center on dot: top is activeIndex * 25% with translate-y-1/2 */}
      {/* Compact on mobile (w-5, within right-1), full on desktop */}
      {/* ======================================================== */}
      <aside
        aria-label="Archipelago Sea Route Progress"
        className="fixed right-1 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto flex flex-col items-center"
      >
        <div className="relative py-3 px-1 sm:py-4 sm:px-3 rounded-2xl bg-[#03070e]/85 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center">
          {/* Compass Icon */}
          <div className="mb-2 text-cyan-400/90 hidden sm:block">
            <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '30s' }} />
          </div>

          <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-slate-400 font-mono-jb mb-2 hidden sm:block">
            ROUTE
          </div>

          {/* Vertical Rail */}
          <div
            className="relative w-5 sm:w-8 flex justify-center"
            style={{ height: `${TRACK_HEIGHT}px` }}
          >
            {/* Background line */}
            <div className="absolute top-0 bottom-0 w-0.5 border-l border-dashed border-slate-700/60" />

            {/* Illuminated trail */}
            <div
              className="absolute top-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-teal-400 to-amber-400 shadow-[0_0_10px_rgba(0,240,255,0.7)] transition-all duration-500 ease-out"
              style={{
                height: `${activeIndex * 25}%`,
                left: 'calc(50% - 2px)',
              }}
            />

            {/* Boat Indicator: centered with transform translate(-50%, -50%) */}
            <div
              style={{
                top: `${activeIndex * 25}%`,
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-30 pointer-events-none transition-all duration-500 ease-out will-change-[top]"
            >
              <div className="p-1 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_14px_rgba(0,240,255,0.9)] flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 16L12 21L20 16L17 19H7L4 16Z" opacity="0.7" />
                  <path d="M12 2L5 14H19L12 2Z" fill="currentColor" />
                  <path d="M2 17L4 20H20L22 17L12 18L2 17Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* 5 Waypoint Dots (0%, 25%, 50%, 75%, 100%) */}
            {SECTIONS.map((sec, index) => {
              const waypointPercent = index * 25;
              const isActive = activeIndex === index;
              const isPassed = activeIndex >= index;
              const isHovered = hoveredPoint === sec.id;

              return (
                <div
                  key={sec.id}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group"
                  style={{ top: `${waypointPercent}%` }}
                  onMouseEnter={() => setHoveredPoint(sec.id)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    aria-label={`Navigate to ${sec.label}`}
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                      isActive
                        ? 'ring-4 ring-offset-2 ring-offset-slate-950 scale-125 z-20'
                        : isPassed
                        ? 'opacity-90 hover:scale-110'
                        : 'opacity-35 hover:opacity-100 hover:scale-110'
                    }`}
                    style={{
                      backgroundColor: sec.accent,
                      boxShadow: isActive
                        ? `0 0 14px ${sec.accent}`
                        : isPassed
                        ? `0 0 6px ${sec.accent}66`
                        : 'none',
                    }}
                  >
                    <span className="sr-only">{sec.label}</span>
                  </button>

                  {/* Tooltip on Desktop */}
                  {isHovered && (
                    <div className="hidden md:flex absolute right-8 py-1 px-2.5 rounded-lg bg-slate-950/95 border border-white/20 text-xs font-mono-jb text-white whitespace-nowrap shadow-2xl pointer-events-none items-center gap-2 z-50">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: sec.accent }}
                      />
                      <span className="font-bold">{sec.label}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* ======================================================== */}
      {/* MOBILE BOTTOM DOCK (Clean, thumb-friendly navigation)    */}
      {/* ======================================================== */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="fixed bottom-0 inset-x-0 z-50 md:hidden pointer-events-auto bg-[#03070e]/95 backdrop-blur-xl border-t border-white/10 px-1 pt-1 shadow-[0_-4px_30px_rgba(0,0,0,0.85)]"
        style={{ paddingBottom: 'max(0.6rem, env(safe-area-inset-bottom, 0.6rem))' }}
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {SECTIONS.map((sec, idx) => {
            const isActive = activeIndex === idx;
            const Icon = sec.icon;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`flex flex-col items-center justify-center py-1 px-1 min-w-[50px] min-h-[44px] rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/15 text-white scale-105'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                style={isActive ? { borderBottom: `2px solid ${sec.accent}` } : {}}
              >
                <div
                  className="p-0.5 rounded"
                  style={{ color: isActive ? sec.accent : 'inherit' }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[8px] font-mono-jb tracking-tight mt-0.5 truncate max-w-[54px]">
                  {sec.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default NauticalHUD;
