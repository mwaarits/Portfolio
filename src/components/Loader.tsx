import React, { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [label, setLabel] = useState('INITIALIZING');
  const [sub, setSub] = useState('PREPARING ENVIRONMENT...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const stages = [
      { at: 15, label: 'INITIALIZING', sub: 'PREPARING ENVIRONMENT...' },
      { at: 40, label: 'LOADING ASSETS', sub: 'FETCHING PORTFOLIO DATA...' },
      { at: 70, label: 'BUILDING INTERFACE', sub: 'CONFIGURING COMPONENTS...' },
      { at: 92, label: 'FINALIZING', sub: 'OPTIMIZING DISPLAY...' },
      { at: 100, label: 'READY', sub: 'WELCOME.' }
    ];

    let currentPct = 0;
    const interval = setInterval(() => {
      // variable speed
      const increment = currentPct < 30 ? 2.5 : currentPct < 75 ? 1.6 : 3.2;
      currentPct = Math.min(100, currentPct + increment);
      setPercent(Math.floor(currentPct));

      const matchedStage = [...stages].reverse().find((s) => currentPct >= s.at);
      if (matchedStage) {
        setLabel(matchedStage.label);
        setSub(matchedStage.sub);
      }

      if (currentPct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 500);
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      id="loader"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-sm px-6 flex flex-col items-center text-center">
        {/* Minimalist Emblem in Monochrome */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-white/10 blur-xl animate-pulse" />
          <div className="w-14 h-14 rounded-2xl bg-neutral-950 border border-white/20 flex items-center justify-center relative shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <Layers className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Dynamic Label */}
        <div
          id="loaderLabel"
          className="font-mono text-xs tracking-[0.25em] text-white/90 uppercase font-semibold mb-3 h-5 flex items-center"
        >
          {label}
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-white/15 rounded-full overflow-hidden mb-3 relative">
          <div
            id="loaderBar"
            className="h-full bg-white shadow-[0_0_10px_#ffffff] transition-all duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Percentage Number */}
        <div id="loaderPct" className="font-mono text-2xl font-bold tracking-tight text-white mb-2">
          {percent}%
        </div>

        {/* Subtitle */}
        <div id="loaderSub" className="font-mono text-[11px] tracking-wider text-neutral-400 uppercase">
          {sub}
        </div>
      </div>
    </div>
  );
};
