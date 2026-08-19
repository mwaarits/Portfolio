import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Code2, Cloud, ShieldCheck, Globe, CheckCircle2, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (tag: string) => {
    switch (tag) {
      case 'LANGUAGES':
        return <Code2 className="w-4 h-4 text-white" />;
      case 'DEVOPS / SYS':
        return <Cloud className="w-4 h-4 text-white" />;
      case 'SECURITY / NET':
        return <ShieldCheck className="w-4 h-4 text-white" />;
      case 'WEB TECH':
        return <Globe className="w-4 h-4 text-white" />;
      case 'QA & AGILE':
        return <CheckCircle2 className="w-4 h-4 text-white" />;
      default:
        return <Terminal className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-black border-b border-white/10 noise-bg">
      <div className="max-w-7xl mx-auto">
        {/* Kicker */}
        <div className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-8 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          <span>/ TECHNICAL ARSENAL / P. 004</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              SKILLS &amp; <span className="text-neutral-400">STACK.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-md">
            Organized technical proficiencies spanning systems programming, cloud platforms, network defense, web development, and quality engineering.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 bg-neutral-950/90 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-white/40 hover:bg-neutral-900/60 transition-all duration-300 shadow-lg ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Group Card Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2 font-mono text-xs text-neutral-300 tracking-wider">
                    {getCategoryIcon(group.tag)}
                    <span className="font-semibold">{group.tag}</span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-neutral-300 font-bold">
                    {group.skills.length} ITEMS
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white mb-4 uppercase">
                  {group.title}
                </h3>

                {/* Skills Badges / Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/15 text-neutral-200 font-mono text-xs hover:border-white hover:text-white hover:bg-neutral-800 transition-all duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>VERIFIED PROFICIENCY</span>
                <span className="text-white font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
