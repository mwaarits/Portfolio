import React from 'react';
import { ArrowUp, ArrowUpRight, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-12 lg:px-20 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-400">
      {/* Brand & Connection Ping */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]" />
          <span className="font-bold text-white tracking-widest text-sm">MWAARITS</span>
        </div>
        <span className="text-neutral-600">|</span>
        <span className="text-neutral-400 text-xs">
          Mohammad Waarits Harahap · President University
        </span>
      </div>

      {/* Socials & Back to Top */}
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/mwaarits"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GITHUB</span>
          <ArrowUpRight className="w-3 h-3 text-neutral-500" />
        </a>

        <a
          href="https://www.linkedin.com/in/mwaaritsharahap/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
        >
          <img
            src="/img/icon-linkedin.png"
            alt="LinkedIn"
            className="w-3.5 h-3.5 filter grayscale invert"
          />
          <span>LINKEDIN</span>
          <ArrowUpRight className="w-3 h-3 text-neutral-500" />
        </a>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 border border-white/20 hover:border-white text-neutral-300 hover:text-white transition-all duration-200"
          title="Scroll back to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
