import React, { useEffect, useRef, useState } from 'react';
import { MANIFESTO_WORDS } from '../data/portfolioData';

export const ManifestoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the section we have scrolled
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight * 0.8 - rect.top) / (rect.height + windowHeight * 0.4))
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 bg-black border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Kicker */}
        <div className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-8 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          <span>/ PROFILE STATEMENT / P. 002</span>
        </div>

        {/* Manifesto Large Typography with Scroll Illumination */}
        <p className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] select-none">
          {MANIFESTO_WORDS.map((item, index) => {
            const wordThreshold = (index + 1) / MANIFESTO_WORDS.length;
            const isLit = scrollProgress >= wordThreshold * 0.85;
            
            let colorClass = 'text-neutral-700 transition-colors duration-300';
            if (isLit) {
              if (item.type === 'accent') {
                colorClass = 'text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.85)] font-black underline decoration-white/40 underline-offset-8';
              } else if (item.type === 'bright') {
                colorClass = 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] font-extrabold';
              } else if (item.type === 'mid') {
                colorClass = 'text-neutral-200';
              } else {
                colorClass = 'text-neutral-300';
              }
            }

            return (
              <span
                key={index}
                className={`inline-block mr-3 sm:mr-4 mb-2 transition-all duration-300 ${colorClass}`}
              >
                {item.text}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};
