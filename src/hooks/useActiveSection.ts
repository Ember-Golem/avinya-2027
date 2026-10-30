import { useState, useEffect, useCallback } from 'react';
import { Compass, Flame, Zap, Sparkles, Rocket } from 'lucide-react';

export const SECTIONS = [
  { id: 'hero', label: 'Embark', shortLabel: '00 Embark', icon: Compass, accent: '#00F0FF' },
  { id: 'day1', label: 'Day 1', shortLabel: '01 Outpost', icon: Flame, accent: '#D9531E' },
  { id: 'day2', label: 'Day 2', shortLabel: '02 Pandemonium', icon: Zap, accent: '#FF007F' },
  { id: 'day3', label: 'Day 3', shortLabel: '03 Carnival', icon: Sparkles, accent: '#FFB703' },
  { id: 'astronaut', label: 'Hack2Future', shortLabel: '04 H2F', icon: Rocket, accent: '#00F0FF' },
] as const;

export type SectionId = typeof SECTIONS[number]['id'];

/**
 * Single source of truth for the active section across the entire page.
 * Uses IntersectionObserver with rootMargin: '-45% 0px -45% 0px' + fallback scroll check.
 */
export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>('hero');

  const checkPositions = useCallback(() => {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Fast check for top of page
    if (scrollY < 120) {
      setActiveId('hero');
      return;
    }

    // Fast check for bottom of page
    if (scrollY + innerHeight >= docHeight - 70) {
      setActiveId('astronaut');
      return;
    }

    // Viewport vertical center calculation fallback
    const centerY = innerHeight / 2;
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTIONS[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= centerY && rect.bottom >= centerY) {
          setActiveId(SECTIONS[i].id);
          return;
        }
      }
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const matched = SECTIONS.find((s) => s.id === entry.target.id);
              if (matched) {
                setActiveId(matched.id);
              }
            }
          });
        },
        {
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0,
        }
      );

      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    }

    window.addEventListener('scroll', checkPositions, { passive: true });
    window.addEventListener('resize', checkPositions);

    const rafId = requestAnimationFrame(checkPositions);

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
      window.removeEventListener('scroll', checkPositions);
      window.removeEventListener('resize', checkPositions);
    };
  }, [checkPositions]);

  const activeIndex = Math.max(
    0,
    SECTIONS.findIndex((s) => s.id === activeId)
  );

  return { activeId, activeIndex, setActiveId };
}
