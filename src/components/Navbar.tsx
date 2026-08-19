import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Github } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CERTIFICATES', href: '#certs' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3.5 flex items-center justify-between border-b ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 text-white group cursor-pointer"
        >
          <div className="w-8 h-8 rounded bg-neutral-900 border border-white/20 flex items-center justify-center overflow-hidden p-1 transition-transform group-hover:scale-105 group-hover:border-white">
            <img
              src="/img/helmet.png"
              alt="Helmet Logo"
              className="w-full h-full object-contain filter grayscale contrast-125 brightness-125"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display tracking-widest text-lg font-bold leading-none text-white glitch-hover" data-text="MWAARITS">
              MWAARITS
            </span>
            <span className="font-mono text-[9px] tracking-widest text-neutral-400">
              PRESIDENT UNIV '24
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links: ABOUT, SKILLS, PROJECTS, CERTIFICATES, CONTACT */}
        <div className="hidden lg:flex items-center gap-7 font-mono text-xs tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-neutral-400 hover:text-white transition-colors duration-150 relative py-1 group font-semibold"
            >
              <span className="text-neutral-600 group-hover:text-neutral-300 transition-colors mr-1">/</span>
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions: CLI and LinkedIn / GitHub Buttons */}
        <div className="flex items-center gap-2.5">
          {/* CLI Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900/90 border border-white/20 hover:border-white hover:bg-neutral-800 text-neutral-300 hover:text-white font-mono text-xs transition-all duration-200"
            title="Open Interactive Terminal (CLI)"
          >
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span>CLI</span>
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/mwaarits"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 border border-white/20 hover:border-white hover:bg-neutral-800 text-neutral-300 hover:text-white font-mono text-xs transition-all duration-200"
            title="GitHub Repositories"
          >
            <Github className="w-3.5 h-3.5 text-white" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/mwaaritsharahap/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 border border-white/20 hover:border-white hover:bg-neutral-800 text-neutral-300 hover:text-white font-mono text-xs transition-all duration-200"
            title="LinkedIn Profile"
          >
            <img
              src="/img/icon-linkedin.png"
              alt="LinkedIn"
              className="w-3.5 h-3.5 filter grayscale invert"
            />
            <span className="hidden sm:inline">LINKEDIN</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="navToggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded bg-neutral-900 border border-white/20 hover:border-white text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobileDrawer"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 border-b border-white/10 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4 font-mono">
          <div className="text-[10px] tracking-widest text-neutral-500 uppercase border-b border-white/10 pb-2">
            SYSTEM NAVIGATION
          </div>
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-bold tracking-wider text-neutral-300 hover:text-white py-2.5 flex items-center justify-between border-b border-white/5"
            >
              <span>
                <span className="text-neutral-600 mr-3">0{idx + 1}.</span>
                {link.label}
              </span>
              <span className="text-sm text-neutral-500 font-normal">→</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-white/10 font-mono text-xs">
          <div className="flex items-center justify-between text-neutral-400">
            <span>TERMINAL COMMAND</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="px-3 py-1.5 bg-neutral-900 border border-white/20 rounded text-white flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" /> OPEN CLI
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
