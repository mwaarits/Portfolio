import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertsSection } from './components/CertsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { TerminalModal } from './components/TerminalModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut: Press '~' or '`' to toggle terminal CLI
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black font-body overflow-x-hidden">
      {/* Initialization Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Navigation Header */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Streamlined Sections: Hero -> Manifesto -> About -> Skills -> Projects -> Certifications -> Contact */}
      <main>
        <HeroSection />
        <ManifestoSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <CertsSection />
        <ContactSection onOpenTerminal={() => setTerminalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
