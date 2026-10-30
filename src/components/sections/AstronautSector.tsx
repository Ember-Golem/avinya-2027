import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Radio } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const AstronautSector: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const astroGroupRef = useRef<HTMLDivElement>(null);
  const starlightCanvasRef = useRef<HTMLCanvasElement>(null);

  // Sparse Starlight Particle Canvas in Deep Space
  useEffect(() => {
    const canvas = starlightCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.2 + 0.05,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        if (!shouldReduceMotion) {
          star.y -= star.speed;
          if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
          }
        }
      });

      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  // Subtle GSAP ScrollTrigger parallax on astronaut and canvas
  useEffect(() => {
    if (shouldReduceMotion) return;
    const ctx = gsap.context(() => {
      if (astroGroupRef.current && sectionRef.current) {
        gsap.to(astroGroupRef.current, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
      if (starlightCanvasRef.current && sectionRef.current) {
        gsap.to(starlightCanvasRef.current, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  // 3D Parallax tilt from mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      id="astronaut"
      onMouseMove={handleMouseMove}
      className="relative isolate min-h-screen py-24 md:py-36 bg-[#03070e] text-slate-100 overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background Deep Space Starlight Canvas */}
      <canvas
        ref={starlightCanvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
      />

      {/* Atmospheric Void Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Background Watermark Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none px-4">
        <h2 className="text-[clamp(3.5rem,12vw,12rem)] font-black uppercase tracking-[-0.04em] text-white/[0.03] leading-none whitespace-nowrap">
          HACK2FUTURE
        </h2>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-between items-center text-center">
        {/* Top Eyebrow & Editorial Title */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 font-mono-jb text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-5 backdrop-blur-md"
          >
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>HACK2FUTURE // NATIONAL FLAGSHIP HACKATHON</span>
          </motion.div>

          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase drop-shadow-2xl">
            ORBITAL SECTOR: HACK2FUTURE
          </h3>

          <p className="mt-3 text-xs sm:text-sm font-mono-jb tracking-[0.18em] text-cyan-300/80 uppercase max-w-xl">
            ASCENDING FROM ARCHIPELAGO WATERS INTO THE INTERSTELLAR VOID
          </p>
        </div>

        {/* Centerpiece Chiaroscuro Monochrome Astronaut */}
        <div
          ref={astroGroupRef}
          className="relative my-8 sm:my-12 py-4 flex items-center justify-center min-h-[340px] sm:min-h-[440px]"
        >
          {/* Subtle orbital radar ring */}
          <div
            className="absolute w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full border border-dashed border-white/10 pointer-events-none"
            style={{ animation: shouldReduceMotion ? 'none' : 'spin 70s linear infinite' }}
          />

          {/* Floating zero-G motion wrapper */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [-14, 14, -14],
                    rotate: [-3, 3, -3],
                  }
            }
            transition={{
              duration: 9,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            style={{
              transform: shouldReduceMotion
                ? undefined
                : `perspective(1000px) rotateY(${mousePos.x * 18}deg) rotateX(${-mousePos.y * 18}deg)`,
            }}
            className="relative z-20 w-[240px] sm:w-[320px] md:w-[380px] h-[240px] sm:h-[320px] md:h-[380px] transition-transform duration-200 ease-out flex items-center justify-center"
          >
            <svg
              viewBox="0 0 340 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
            >
              <defs>
                {/* Helmet Shell: Hard rim light on left, deep shadow on right */}
                <linearGradient id="astroHelmet" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="25%" stopColor="#E2E8F0" />
                  <stop offset="60%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                {/* Obsidian reflective visor with gradient highlight */}
                <radialGradient id="astroVisor" cx="42%" cy="36%" r="65%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="35%" stopColor="#0B132B" />
                  <stop offset="75%" stopColor="#020617" />
                  <stop offset="100%" stopColor="#000000" />
                </radialGradient>

                {/* Suit fabric chiaroscuro */}
                <linearGradient id="astroSuit" x1="0.15" y1="0.1" x2="0.85" y2="0.9">
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="30%" stopColor="#94A3B8" />
                  <stop offset="70%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                {/* Cyan Rim Accent */}
                <linearGradient id="astroRim" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>
              </defs>

              {/* Life support umbilical floating off-screen */}
              <path
                d="M 215 200 C 275 235, 295 150, 330 180 C 342 190, 340 170, 340 160"
                stroke="url(#astroRim)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 4"
                opacity="0.8"
              />

              {/* PLSS Backpack */}
              <rect x="80" y="100" width="180" height="150" rx="26" fill="#0B101E" stroke="#1E293B" strokeWidth="3" />
              <rect x="90" y="110" width="160" height="130" rx="18" fill="#020617" stroke="#334155" strokeWidth="1.5" />

              {/* Left Arm */}
              <path
                d="M 105 150 C 72 165, 58 198, 70 238 C 78 242, 88 234, 84 220 C 78 198, 92 176, 116 166 Z"
                fill="url(#astroSuit)"
                stroke="#0F172A"
                strokeWidth="2.5"
              />
              <path d="M 88 192 Q 98 188, 106 195" stroke="#020617" strokeWidth="3" />
              <ellipse cx="72" cy="248" rx="13" ry="15" fill="#020617" stroke="#475569" strokeWidth="2" />

              {/* Right Arm */}
              <path
                d="M 235 150 C 268 165, 282 198, 270 238 C 262 242, 252 234, 256 220 C 262 198, 248 176, 224 166 Z"
                fill="url(#astroSuit)"
                stroke="#0F172A"
                strokeWidth="2.5"
              />
              <path d="M 252 192 Q 242 188, 234 195" stroke="#020617" strokeWidth="3" />
              <ellipse cx="268" cy="248" rx="13" ry="15" fill="#020617" stroke="#475569" strokeWidth="2" />

              {/* Torso */}
              <path
                d="M 110 142 C 110 128, 128 122, 170 122 C 212 122, 230 128, 230 142 L 226 256 C 226 266, 206 274, 170 274 C 134 274, 114 266, 114 256 Z"
                fill="url(#astroSuit)"
                stroke="#0F172A"
                strokeWidth="3"
              />
              <path d="M 118 234 Q 170 252, 222 234" stroke="#020617" strokeWidth="4" />

              {/* Chest Control Pack */}
              <rect x="134" y="166" width="72" height="56" rx="10" fill="#040814" stroke="#475569" strokeWidth="2" />
              <rect x="142" y="176" width="38" height="18" rx="4" fill="#02050D" stroke="#00F0FF" strokeWidth="1" />
              <circle cx="192" cy="182" r="3" fill="#10B981" />
              <circle cx="192" cy="191" r="3" fill="#F59E0B" />
              <circle cx="152" cy="210" r="4" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
              <circle cx="168" cy="210" r="4" fill="#1E293B" stroke="#64748B" strokeWidth="1" />

              {/* Neck Ring */}
              <ellipse cx="170" cy="130" rx="48" ry="14" fill="#1E293B" stroke="#64748B" strokeWidth="2.5" />

              {/* Helmet Dome with Chiaroscuro Shell */}
              <ellipse cx="170" cy="88" rx="58" ry="54" fill="url(#astroHelmet)" stroke="#0F172A" strokeWidth="3" />

              {/* Obsidian Visor */}
              <ellipse cx="170" cy="88" rx="46" ry="37" fill="url(#astroVisor)" stroke="#00F0FF" strokeWidth="1.8" />

              {/* Earth Horizon Curvature Reflected in Visor */}
              <path
                d="M 134 96 Q 170 86, 206 96"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />
              {/* Star specular highlight */}
              <circle cx="190" cy="68" r="2.5" fill="#FFFFFF" opacity="0.9" />
              <path
                d="M 142 70 Q 168 62, 192 66 Q 186 74, 148 76 Z"
                fill="#FFFFFF"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </div>

        {/* Editorial Copy & Official Hack2Future CTA */}
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              THE LEAP TO INTERSTELLAR EXPLORATION
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              From ancient navigators charting unknown waters to modern builders compiling autonomous code for the stars, the human drive is singular: to sail beyond the edge of the known.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-2.5">
              Hack2Future is AVINYA’s flagship national-level 36-hour hackathon at IIIT Dharwad — bringing builders across India together to construct the next era of intelligent software, quantum systems, and space-age technology.
            </p>

            {/* Official CTA Button */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://hack2future.iiitdwd.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono-jb text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-cyan-400/20 active:scale-95 cursor-pointer"
              >
                <span>HACK2FUTURE PORTAL</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <span className="text-[11px] font-mono-jb text-slate-400">
                MARCH 12–14, 2027 · ₹3,50,000+ BOUNTY POOL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstronautSector;
