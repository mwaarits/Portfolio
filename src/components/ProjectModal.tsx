import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, AlertCircle, Lightbulb, TrendingUp, BookOpen, Layers, Github } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Accessible 'Escape' key event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-neutral-950 border border-white/20 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col max-h-[90vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:px-6 bg-neutral-900 border-b border-white/10 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider">
              PROJECT INTEL // {project.categoryLabel || project.type.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
          >
            <span className="hidden sm:inline">ESC</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Main Title & Hero Media Banner */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 id="modal-title" className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                {project.title}
              </h3>
              <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-neutral-900 border border-white/20 text-neutral-300">
                {project.categoryLabel || project.type.toUpperCase()}
              </span>
            </div>

            <p className="font-body text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.desc}
            </p>

            {/* Project Image */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/15">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/img/helmet.png';
                }}
                className="w-full h-full object-cover monochrome-img"
              />
            </div>
          </div>

          {/* Deep-Dive Grid: Problem Statement & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Problem Statement */}
            <div className="p-5 bg-neutral-900/80 border border-white/10 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-white font-mono text-xs font-bold tracking-wider uppercase">
                <AlertCircle className="w-4 h-4 text-white" />
                <span>PROBLEM STATEMENT</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body">
                {project.problemStatement || 'Identified architectural requirements and operational challenges addressed through structured engineering.'}
              </p>
            </div>

            {/* 2. Solution & User Context */}
            <div className="p-5 bg-neutral-900/80 border border-white/10 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-white font-mono text-xs font-bold tracking-wider uppercase">
                <Lightbulb className="w-4 h-4 text-white" />
                <span>SOLUTION &amp; USER CONTEXT</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body">
                {project.solutionContext || 'Constructed resilient cloud architectures, automated workflows, and robust validation pipelines.'}
              </p>
            </div>
          </div>

          {/* 3. Results / Metrics */}
          <div className="p-5 bg-neutral-900/80 border border-white/10 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-white font-mono text-xs font-bold tracking-wider uppercase">
              <TrendingUp className="w-4 h-4 text-white" />
              <span>RESULTS &amp; METRICS</span>
            </div>
            {project.resultsMetrics && project.resultsMetrics.length > 0 ? (
              <ul className="space-y-2">
                {project.resultsMetrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 font-body">
                    <span className="text-white font-mono font-bold mt-0.5">▪</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-neutral-300">
                Validated in production and staging environments with reliable test metrics and uptime.
              </p>
            )}
          </div>

          {/* 4. Lessons Learned */}
          <div className="p-5 bg-neutral-900/80 border border-white/10 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-white font-mono text-xs font-bold tracking-wider uppercase">
              <BookOpen className="w-4 h-4 text-white" />
              <span>LESSONS LEARNED</span>
            </div>
            {project.lessonsLearned && project.lessonsLearned.length > 0 ? (
              <ul className="space-y-2">
                {project.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 font-body">
                    <span className="text-white font-mono font-bold mt-0.5">✓</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-neutral-300">
                Demonstrated that proactive security engineering, automated CI/CD pipelines, and rigorous validation guarantee system reliability.
              </p>
            )}
          </div>

          {/* Applied Technologies & Tags */}
          <div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-white" />
              <span>APPLIED STACK &amp; METHODOLOGY</span>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded bg-neutral-900 border border-white/20 text-neutral-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:px-6 bg-neutral-900 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
          >
            CLOSE
          </button>

          {project.url && project.url !== '#' ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 flex items-center gap-2 transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              <Github className="w-4 h-4" />
              <span>VIEW ON GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-neutral-500 text-xs font-mono">DOCUMENTATION INTERNAL</span>
          )}
        </div>
      </div>
    </div>
  );
};
