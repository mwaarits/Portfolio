import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, GraduationCap } from 'lucide-react';
import { TYPEWRITER_ROLES } from '../data/portfolioData';

interface HeroSectionProps {
  playClickSound?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ playClickSound }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = TYPEWRITER_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPEWRITER_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden noise-bg border-b border-white/10">
      {/* Blurred Glowing Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle radial spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_45%,rgba(255,255,255,0.06),transparent_70%)]" />

        {/* Compact Central Luminous Core behind typography */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[360px] md:w-[460px] h-[150px] sm:h-[220px] bg-gradient-to-tr from-white/[0.08] via-neutral-200/[0.06] to-transparent rounded-full blur-[60px] animate-ambient-glow" />

        {/* Small Top-Right Ambient Glow Orb */}
        <div className="absolute -top-10 -right-10 w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] bg-white/[0.05] rounded-full blur-[65px] animate-ambient-glow-delayed" />

        {/* Small Bottom-Left Ambient Glow Orb */}
        <div className="absolute -bottom-10 -left-10 w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] bg-white/[0.04] rounded-full blur-[55px] animate-ambient-glow" />
      </div>

      {/* Main Hero Center Display Typography */}
      <div className="relative z-10 my-auto py-12 lg:py-16">
        <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
          <GraduationCap className="w-4 h-4 text-white" />
          <span>IT Under graduate students (Batch 2024)</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.2rem] leading-[0.92] font-extrabold tracking-tight text-white uppercase select-none">
          <span className="block hover:translate-x-2 transition-transform duration-300">
            MOHAMMAD WAARITS
          </span>
          <span className="block text-neutral-300 hover:translate-x-2 transition-transform duration-300">
            HARAHAP.
          </span>
        </h1>
      </div>

      {/* Hero Foot: Typewriter & CTA Action Buttons */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/10">
        {/* Dynamic Typewriter Role */}
        <div className="font-mono text-sm sm:text-base tracking-widest text-neutral-300 flex items-center">
          <span className="text-neutral-500 mr-2 font-bold">/</span>
          <b className="text-white font-semibold tracking-wider">{displayText}</b>
          <span className="inline-block w-2.5 h-4 ml-1 bg-white animate-pulse" />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href="#projects"
            onClick={playClickSound}
            className="px-6 py-3 bg-white hover:bg-neutral-200 text-black font-mono text-xs tracking-wider font-bold rounded flex items-center gap-2 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02]"
          >
            <span>EXECUTE PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/assets/Mohammad-Waarits-Harahap-CV.pdf"
            download="Mohammad-Waarits-Harahap-CV.pdf"
            onClick={playClickSound}
            className="px-6 py-3 bg-neutral-900/90 hover:bg-neutral-800 border border-white/20 hover:border-white text-white font-mono text-xs tracking-wider font-semibold rounded flex items-center gap-2 transition-all duration-200 hover:scale-[1.02]"
          >
            <span>DOWNLOAD CV</span>
            <Download className="w-4 h-4 text-neutral-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
