import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const CertsSection: React.FC = () => {
  return (
    <section id="certs" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-black border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="mb-16">
          <div className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span>/ ACCREDITATIONS / P. 006</span>
          </div>
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              CERTIFICATES.
            </h2>
          </div>
        </header>

        {/* Vertical Line-Divided List (No boxes, Clean Unbolded Typography) */}
        <div className="border-t border-white/15">
          {CERTIFICATIONS.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 hover:border-white/40 transition-colors duration-200 px-2 -mx-2 hover:bg-neutral-950/80 rounded-none"
            >
              {/* Left: Index + Certificate Title */}
              <div className="flex items-baseline sm:items-center gap-4 sm:gap-6 min-w-0">
                <span className="font-mono text-xs sm:text-sm text-neutral-500 font-normal tracking-wider shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-base sm:text-lg font-normal text-neutral-200 group-hover:text-white transition-colors">
                  {cert.name}
                </span>
              </div>

              {/* Right: Issuer, Year, and Verification Link */}
              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-8 font-mono text-xs text-neutral-400 shrink-0 ml-8 sm:ml-0 font-normal">
                <span className="text-neutral-400 font-normal">
                  {cert.issuer}
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300 font-normal text-[11px]">
                  {cert.year}
                </span>
                <span className="text-neutral-400 group-hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 font-normal">
                  <span className="hidden sm:inline text-[11px] tracking-wider">VERIFY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
