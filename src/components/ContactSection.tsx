import React from 'react';
import { Mail, ArrowUpRight, Github, Terminal } from 'lucide-react';

interface ContactSectionProps {
  onOpenTerminal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenTerminal }) => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-black border-b border-white/10 noise-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span>/ SECURE DISPATCH / P. 007</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              INITIATE <em className="not-italic text-neutral-400">CONTACT.</em>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-md">
              Available for cloud engineering, cybersecurity, software testing, and infrastructure opportunities.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          {/* Email Dispatch */}
          <a
            href="mailto:mwaaritsh@gmail.com"
            className="p-6 bg-neutral-950/90 border border-white/15 hover:border-white rounded-xl flex flex-col justify-between group transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white">
                <Mail className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                EMAIL DISPATCH
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:underline break-all">
                mwaaritsh@gmail.com
              </span>
            </div>
          </a>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/mwaaritsharahap/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-neutral-950/90 border border-white/15 hover:border-white rounded-xl flex flex-col justify-between group transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white">
                <img
                  src="/img/icon-linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5 filter grayscale invert"
                />
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                PROFESSIONAL NETWORK
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:underline">
                in/mwaaritsharahap
              </span>
            </div>
          </a>

          {/* GitHub Repositories */}
          <a
            href="https://github.com/mwaarits"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-neutral-950/90 border border-white/15 hover:border-white rounded-xl flex flex-col justify-between group transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white">
                <Github className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                CODE REPOSITORIES
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:underline">
                github.com/mwaarits
              </span>
            </div>
          </a>

          {/* Terminal CLI Command */}
          <div
            onClick={onOpenTerminal}
            className="p-6 bg-neutral-950/90 border border-white/15 hover:border-white rounded-xl flex flex-col justify-between group transition-all duration-300 shadow-lg cursor-pointer"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white text-black font-bold uppercase">
                INTERACTIVE
              </span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                SECURE SHELL
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-neutral-200">
                $ launch terminal [CLI]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
