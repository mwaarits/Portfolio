import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { PROJECTS_DATA, CERTIFICATIONS, SKILL_GROUPS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'sys.init',
      output: (
        <div className="space-y-1 text-neutral-300">
          <div>MWAARITS SECURITY CORE TERMINAL v2.6 [B&amp;W EDITION]</div>
          <div>Type <span className="text-white font-bold">help</span> to list available security commands.</div>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-neutral-300">
            <div className="text-white font-bold mb-1">AVAILABLE COMMANDS:</div>
            <div><b className="text-white">whoami</b> — Identity &amp; student profile</div>
            <div><b className="text-white">projects</b> — List all research &amp; engineering modules</div>
            <div><b className="text-white">skills</b> — Technical skills grouped by domain</div>
            <div><b className="text-white">certs</b> — Verified credentials and merits</div>
            <div><b className="text-white">clear</b> — Clear terminal screen</div>
            <div><b className="text-white">exit</b> — Close terminal session</div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1.5 text-neutral-300">
            <div><b className="text-white">STUDENT:</b> Mohammad Waarits Harahap</div>
            <div><b className="text-white">UNIVERSITY:</b> President University (Bachelor of IT, Batch 2024)</div>
            <div><b className="text-white">FOCUS:</b> Cloud Computing &amp; Cyber Security</div>
            <div><b className="text-white">PHILOSOPHY:</b> Build it, break it, map it under the hood.</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-neutral-300">
            <div className="text-white font-bold">PROJECT MODULES ({PROJECTS_DATA.length}):</div>
            {PROJECTS_DATA.map((p, i) => (
              <div key={i} className="text-xs">
                <span className="text-white font-semibold">[{i + 1}] {p.title}</span> — {p.tags.join(', ')}
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-neutral-300">
            <div className="text-white font-bold">TECHNICAL SKILLS &amp; ARSENAL:</div>
            {SKILL_GROUPS.map((g, i) => (
              <div key={i} className="text-xs">
                <span className="text-white font-semibold">[{g.tag}] {g.title}:</span> {g.skills.join(', ')}
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
        output = (
          <div className="space-y-1 text-neutral-300">
            {CERTIFICATIONS.map((c, i) => (
              <div key={i}>
                • <span className="text-white font-semibold">{c.name}</span> ({c.issuer} {c.year})
              </div>
            ))}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        output = (
          <div className="text-neutral-400">
            Command not found: <span className="text-white font-mono">{cmd}</span>. Type <b className="text-white">help</b> for valid commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terminal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl h-[600px] max-h-[85vh] bg-black border border-white/20 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col font-mono text-xs text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="p-3 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-white" />
            <span id="terminal-title" className="font-bold text-white tracking-widest text-[11px]">
              MWAARITS_SEC_SHELL // INTERACTIVE CLI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono select-text">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-white font-bold">operator@mwaarits:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-white/10">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommand} className="p-3 bg-neutral-950 border-t border-white/10 flex items-center gap-2">
          <span className="text-white font-bold">operator@mwaarits:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-neutral-600"
            autoFocus
          />
          <button type="submit" className="text-[10px] px-2.5 py-1 rounded bg-white text-black font-bold">
            RUN
          </button>
        </form>
      </div>
    </div>
  );
};
