import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  Anchor,
  Calendar,
  MapPin,
  ChevronDown,
  Compass,
} from 'lucide-react';
import { AvinyaWordmark } from '@/components/ui/AvinyaWordmark';

interface HeroVoyageProps {
  onSetSail: () => void;
  onOpenAstronaut?: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

/**
 * Animated counter that counts up from 0 to target when in view
 */
const CountUp: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const shouldReduce = useReducedMotion();
  const [count, setCount] = useState(() => (shouldReduce ? target : 0));

  useEffect(() => {
    if (shouldReduce) return;
    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(20, Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, shouldReduce]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const HeroVoyage: React.FC<HeroVoyageProps> = ({ onSetSail }) => {
  const { scrollY } = useScroll();
  const compassRotate = useTransform(scrollY, [0, 800], [0, 90]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.35]);
  const heroTranslateY = useTransform(scrollY, [0, 600], [0, 80]);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    // Target: March 12, 2027 09:00:00 IST
    const targetDate = new Date('2027-03-12T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen bg-[#03070e] text-slate-100 flex flex-col justify-between overflow-hidden pt-20 md:pt-28 pb-10"
    >
      {/* Bioluminescent Ocean Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] md:w-[1000px] h-[350px] md:h-[550px] bg-gradient-to-b from-cyan-500/15 via-sky-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-cyan-400/10 blur-3xl pointer-events-none rounded-full" />

      {/* Celestial Coordinates Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:48px_48px] opacity-15 pointer-events-none" />

      {/* Main Hero Content */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroTranslateY }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8 flex flex-col items-center text-center my-auto w-full"
      >
        {/* Fest Identification Telemetry Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/90 border border-cyan-400/30 text-cyan-300 font-mono-jb text-[11px] sm:text-xs md:text-sm tracking-wider mb-6 sm:mb-8 shadow-lg shadow-cyan-950/40 backdrop-blur-md max-w-full"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-400 animate-bounce shrink-0" />
          <span className="font-semibold text-slate-200">12 - 14 MARCH 2027</span>
          <span className="text-cyan-500/60">|</span>
          <span className="text-amber-400 font-medium">IIIT DHARWAD</span>
          <span className="hidden sm:inline text-slate-500 text-[11px]">
            [15.4589° N, 75.0078° E]
          </span>
        </motion.div>

        {/* Hero Monumental Wordmark & Rotating Compass Rose Graphic */}
        <div className="relative mb-6 flex flex-col items-center w-full max-w-full overflow-hidden sm:overflow-visible">
          {/* Rotating Compass Rose Behind Title */}
          <motion.div
            style={{ rotate: compassRotate }}
            className="absolute -top-12 sm:-top-16 md:-top-24 w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 opacity-20 text-cyan-300 pointer-events-none"
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current">
              <circle cx="50" cy="50" r="46" strokeWidth="0.8" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="38" strokeWidth="0.5" />
              <line x1="50" y1="2" x2="50" y2="98" strokeWidth="1" />
              <line x1="2" y1="50" x2="98" y2="50" strokeWidth="1" />
              <polygon points="50,6 54,42 50,46 46,42" fill="currentColor" opacity="0.6" />
              <polygon points="50,94 54,58 50,54 46,58" fill="currentColor" opacity="0.3" />
              <polygon points="6,50 42,54 46,50 42,46" fill="currentColor" opacity="0.3" />
              <polygon points="94,50 58,54 54,50 58,46" fill="currentColor" opacity="0.6" />
            </svg>
          </motion.div>

          {/* Unified Monumental Mathematical SVG Vector Master Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full flex justify-center px-2"
          >
            <AvinyaWordmark size="hero" />
          </motion.div>

          {/* Fluid Editorial Subtitle */}
          <p className="mt-4 sm:mt-5 text-[11px] sm:text-sm md:text-base lg:text-lg font-mono-jb tracking-[0.15em] sm:tracking-[0.2em] uppercase text-cyan-300/90 max-w-2xl px-2">
            THE ARCHIPELAGO OF INNOVATION // FLAGSHIP TECHNO-CULTURAL FEST
          </p>
        </div>

        {/* Narrative Voyage Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-slate-300 text-xs sm:text-base md:text-lg font-light leading-relaxed mb-6 sm:mb-8 px-2"
        >
          Embark on an expedition boat across three transforming islands of code, music, and chaos
          — concluding in an orbital leap toward the stars.
        </motion.p>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-8 w-full max-w-xl"
        >
          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="text-[11px] sm:text-xs uppercase font-mono-jb tracking-widest text-slate-400 mb-3 flex items-center justify-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>VOYAGE EMBARKATION COUNTDOWN</span>
            </div>

            {/* Countdown Grid (4 columns) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="font-space font-bold text-xl sm:text-3xl md:text-4xl text-cyan-300">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs uppercase text-slate-400 font-mono-jb mt-1">
                  Days
                </span>
              </div>

              <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="font-space font-bold text-xl sm:text-3xl md:text-4xl text-cyan-300">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs uppercase text-slate-400 font-mono-jb mt-1">
                  Hours
                </span>
              </div>

              <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="font-space font-bold text-xl sm:text-3xl md:text-4xl text-cyan-300">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs uppercase text-slate-400 font-mono-jb mt-1">
                  Mins
                </span>
              </div>

              <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="font-space font-bold text-xl sm:text-3xl md:text-4xl text-amber-400">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs uppercase text-slate-400 font-mono-jb mt-1">
                  Secs
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Primary & Secondary Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mb-8"
        >
          {/* Primary CTA: Set Sail */}
          <button
            onClick={onSetSail}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-400 text-slate-950 font-bold font-mono-jb text-xs sm:text-sm tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Anchor className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>SET SAIL — ARCHIPELAGO</span>
          </button>

          {/* Secondary CTA: Explore Event Schedule */}
          <button
            onClick={onSetSail}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-cyan-300 border border-cyan-400/40 hover:border-cyan-300 font-mono-jb text-xs sm:text-sm tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Compass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
            <span>EXPLORE EVENT SCHEDULE</span>
          </button>
        </motion.div>

        {/* ======================================================== */}
        {/* COMPACT "FEST AT A GLANCE" STRIP (Task 5: Count-Up on View) */}
        {/* 12–14 MARCH 2027 · IIIT DHARWAD · 3 DAYS · 7+ EVENTS     */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl px-4 py-2.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md shadow-xl flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono-jb text-slate-300"
        >
          <span className="text-white font-semibold">12–14 MARCH 2027</span>
          <span className="text-cyan-400">·</span>
          <span className="text-amber-300 font-semibold">IIIT DHARWAD</span>
          <span className="text-cyan-400">·</span>
          <span className="text-white font-semibold">
            <CountUp target={3} suffix=" DAYS" />
          </span>
          <span className="text-cyan-400">·</span>
          <span className="text-cyan-300 font-semibold">
            <CountUp target={7} suffix="+ EVENTS" />
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Prompt */}
      <div className="relative z-10 flex flex-col items-center justify-center text-xs font-mono-jb text-slate-500 animate-bounce mt-2">
        <span>SCROLL TO VOYAGE</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </div>
    </section>
  );
};

export default HeroVoyage;
