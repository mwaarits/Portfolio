import React from 'react';
import { GraduationCap, BookOpen, Shield, Cloud, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-black border-b border-white/10 noise-bg">
      <div className="max-w-5xl mx-auto">
        {/* Status Bar */}
        <div className="flex items-center justify-between font-mono text-xs tracking-widest text-neutral-400 border-b border-white/10 pb-4 mb-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-white" />
            <span>/ BACKGROUND / P. 003</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-neutral-900 px-3 py-1 rounded border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="font-semibold">◎ ACTIVE STUDENT — BATCH 2024</span>
          </div>
        </div>

        {/* Main Narrative */}
        <div className="space-y-12">
          <div>
            <span className="font-mono text-xs text-neutral-400 tracking-widest block uppercase mb-3">
              ACADEMIC &amp; TECHNICAL PROFILE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              ABOUT <em className="not-italic text-neutral-400">ME.</em>
            </h2>
          </div>

          <div className="space-y-6 text-neutral-300 font-body text-base sm:text-xl leading-relaxed border-l-2 border-white/20 pl-6 sm:pl-8">
            <p>
              I am an undergraduate student pursuing a <b className="text-white font-semibold">Bachelor of Information Technology</b> at <b className="text-white font-semibold">President University</b> (Batch 2024).
            </p>
            <p>
              Driven by a genuine enthusiasm for computing and systems architecture, my primary technical focus centers around <b className="text-white font-semibold">cloud computing</b> and <b className="text-white font-semibold">cybersecurity</b>. I explore how scalable cloud infrastructures are deployed, monitored, and resiliently defended against modern security threats.
            </p>
            <p>
              My approach blends continuous practical lab research, infrastructure engineering, and defensive analysis: dissecting complex systems, evaluating vulnerabilities, and constructing reliable defensive controls.
            </p>
          </div>

          {/* Academic & Focus Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono text-xs">
            <div className="p-4 bg-neutral-950/90 border border-white/10 rounded-xl">
              <span className="text-neutral-500 block text-[10px] uppercase mb-1">INSTITUTION</span>
              <span className="text-white font-bold text-sm block">President Univ</span>
              <span className="text-neutral-400 text-[11px]">Faculty of IT</span>
            </div>

            <div className="p-4 bg-neutral-950/90 border border-white/10 rounded-xl">
              <span className="text-neutral-500 block text-[10px] uppercase mb-1">DEGREE PROGRAM</span>
              <span className="text-white font-bold text-sm block">Bachelor of IT</span>
              <span className="text-neutral-400 text-[11px]">Batch 2024</span>
            </div>

            <div className="p-4 bg-neutral-950/90 border border-white/10 rounded-xl">
              <span className="text-neutral-500 block text-[10px] uppercase mb-1">PRIMARY DOMAIN</span>
              <span className="text-white font-bold text-sm block">Cloud Computing</span>
              <span className="text-neutral-400 text-[11px]">Architecture &amp; Ops</span>
            </div>

            <div className="p-4 bg-neutral-950/90 border border-white/10 rounded-xl">
              <span className="text-neutral-500 block text-[10px] uppercase mb-1">SECURITY DOMAIN</span>
              <span className="text-white font-bold text-sm block">Cyber Security</span>
              <span className="text-neutral-400 text-[11px]">Blue Team &amp; Defense</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
