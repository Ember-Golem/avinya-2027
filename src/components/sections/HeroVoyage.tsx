import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Anchor,
  ChevronDown,
  Rocket,
  Calendar,
  MapPin
} from 'lucide-react';

interface HeroVoyageProps {
  onSetSail: () => void;
  onOpenHackathon: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const HeroVoyage: React.FC<HeroVoyageProps> = ({
  onSetSail,
  onOpenHackathon
}) => {
  const { scrollY } = useScroll();
  // Rotate compass rose subtly on scroll
  const compassRotate = useTransform(scrollY, [0, 800], [0, 90]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false
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
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
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
      className="relative min-h-screen bg-[#040814] text-slate-100 flex flex-col justify-between overflow-hidden pt-20 md:pt-24"
    >
      {/* Bioluminescent Ocean Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[500px] bg-gradient-to-b from-cyan-500/15 via-sky-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-400/10 blur-3xl pointer-events-none rounded-full" />

      {/* Subtle Star / Plankton Particles Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:48px_48px] opacity-15 pointer-events-none" />

      {/* Main Hero Content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col items-center text-center my-auto"
      >
        {/* Fest Identification Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-400/30 text-cyan-300 font-mono-tech text-xs md:text-sm tracking-wider mb-6 shadow-lg shadow-cyan-950/40 backdrop-blur-md"
        >
          <MapPin className="w-4 h-4 text-amber-400 animate-bounce" />
          <span className="font-semibold text-slate-200">12 - 14 MARCH 2027</span>
          <span className="text-cyan-500/60">|</span>
          <span className="text-amber-400 font-medium">IIIT DHARWAD</span>
          <span className="hidden sm:inline text-slate-500 text-[11px]">
            [15.4589° N, 75.0078° E]
          </span>
        </motion.div>

        {/* Hero Monumental Title & Rotating Compass Rose Graphic */}
        <div className="relative mb-4 flex flex-col items-center">
          {/* Subtle Rotating Compass Rose Behind Title */}
          <motion.div
            style={{ rotate: compassRotate }}
            className="absolute -top-16 md:-top-24 w-44 h-44 md:w-72 md:h-72 opacity-20 text-cyan-300 pointer-events-none"
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

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight font-cinzel leading-none select-none drop-shadow-2xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-400">
              AVINYA
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-200 via-amber-400 to-[#D4AF37] font-orbitron">
              '27
            </span>
          </motion.h1>

          <p className="mt-3 text-sm sm:text-base md:text-xl font-mono-tech tracking-widest uppercase text-cyan-300/90 max-w-2xl">
            THE ARCHIPELAGO OF INNOVATION // FLAGSHIP TECHNO-CULTURAL FEST
          </p>
        </div>

        {/* Narrative Voyage Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8"
        >
          Embark on an expedition boat across three transforming islands of code, music, and chaos
          — concluding in an orbital leap toward the stars.
        </motion.p>

        {/* DaisyUI Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-8 w-full max-w-xl"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            
            <div className="text-xs uppercase font-mono-tech tracking-widest text-slate-400 mb-3 flex items-center justify-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>VOYAGE EMBARKATION COUNTDOWN</span>
            </div>

            {/* Countdown Grid (Responsive: 4 columns) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              {/* Days */}
              <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="font-orbitron font-bold text-2xl sm:text-4xl text-cyan-300">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-mono-tech mt-1">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="font-orbitron font-bold text-2xl sm:text-4xl text-cyan-300">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-mono-tech mt-1">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="font-orbitron font-bold text-2xl sm:text-4xl text-cyan-300">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-mono-tech mt-1">
                  Mins
                </span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="font-orbitron font-bold text-2xl sm:text-4xl text-amber-400">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-mono-tech mt-1">
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-10"
        >
          {/* Primary CTA: Set Sail */}
          <button
            onClick={onSetSail}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-400 text-slate-950 font-bold font-mono-tech text-sm sm:text-base tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2.5 group"
          >
            <Anchor className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>SET SAIL — EXPLORE ARCHIPELAGO</span>
          </button>

          {/* Secondary CTA: Hack2Future Portal */}
          <button
            onClick={onOpenHackathon}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-cyan-300 border border-cyan-400/40 hover:border-cyan-300 font-mono-tech text-sm sm:text-base tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <Rocket className="w-4 h-4 text-amber-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span>HACK2FUTURE PORTAL</span>
          </button>
        </motion.div>

        {/* Quick Expedition Log Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl pt-2 border-t border-white/10"
        >
          <div className="flex flex-col items-center p-2">
            <span className="font-orbitron font-bold text-lg sm:text-xl text-white">35+</span>
            <span className="text-[11px] text-slate-400 font-mono-tech uppercase">Events & Arenas</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="font-orbitron font-bold text-lg sm:text-xl text-amber-400">₹5,00,000+</span>
            <span className="text-[11px] text-slate-400 font-mono-tech uppercase">Total Prize Pool</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="font-orbitron font-bold text-lg sm:text-xl text-cyan-400">36 HOURS</span>
            <span className="text-[11px] text-slate-400 font-mono-tech uppercase">National Hackathon</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="font-orbitron font-bold text-lg sm:text-xl text-white">3,000+</span>
            <span className="text-[11px] text-slate-400 font-mono-tech uppercase">Sailors & Hackers</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated SVG Ocean Waves Layering at Bottom */}
      <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none mt-auto">
        {/* Layer 1: Deep Back Wave */}
        <div className="w-[200%] animate-wave-slow opacity-30">
          <svg
            className="w-full h-12 md:h-20 text-cyan-700 fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,50 L1200,120 L0,120 Z" />
          </svg>
        </div>

        {/* Layer 2: Middle Bioluminescent Wave */}
        <div className="w-[200%] animate-wave-fast -mt-6 md:-mt-10 opacity-50">
          <svg
            className="w-full h-12 md:h-20 text-teal-600 fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C300,100 600,0 900,70 C1050,100 1150,20 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </div>

        {/* Layer 3: Foreground Abyssal Wave merging into Day 1 */}
        <div className="-mt-8 md:-mt-12">
          <svg
            className="w-full h-14 md:h-24 text-[#060B18] fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C200,120 450,10 700,70 C950,130 1100,30 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Downward Navigation Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={onSetSail}
          aria-label="Scroll down to Day 1 Outpost"
          className="text-cyan-400 hover:text-white transition-colors animate-bounce p-2"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
