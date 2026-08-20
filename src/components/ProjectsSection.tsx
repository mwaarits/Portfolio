import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, Eye, Github } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  playClickSound?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  playClickSound
}) => {
  const [filter, setFilter] = useState<'all' | 'cloud' | 'dev' | 'qa'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.type === filter;
  });

  const cloudCount = PROJECTS_DATA.filter((p) => p.type === 'cloud').length;
  const devCount = PROJECTS_DATA.filter((p) => p.type === 'dev').length;
  const qaCount = PROJECTS_DATA.filter((p) => p.type === 'qa').length;

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span>/ PORTFOLIO / P. 005</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              PROJECTS.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-950 p-1.5 rounded-lg border border-white/15 font-mono text-xs">
            <button
              onClick={() => {
                setFilter('all');
                playClickSound?.();
              }}
              className={`px-3.5 py-1.5 rounded transition-all duration-200 uppercase font-semibold ${
                filter === 'all'
                  ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              ALL ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => {
                setFilter('cloud');
                playClickSound?.();
              }}
              className={`px-3.5 py-1.5 rounded transition-all duration-200 uppercase font-semibold ${
                filter === 'cloud'
                  ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              CLOUD &amp; SECURITY ({cloudCount})
            </button>
            <button
              onClick={() => {
                setFilter('dev');
                playClickSound?.();
              }}
              className={`px-3.5 py-1.5 rounded transition-all duration-200 uppercase font-semibold ${
                filter === 'dev'
                  ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              FULL-STACK ({devCount})
            </button>
            <button
              onClick={() => {
                setFilter('qa');
                playClickSound?.();
              }}
              className={`px-3.5 py-1.5 rounded transition-all duration-200 uppercase font-semibold ${
                filter === 'qa'
                  ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              QA &amp; TESTING ({qaCount})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={idx}
              onClick={() => onSelectProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-neutral-950/90 border border-white/10 hover:border-white/50 rounded-xl overflow-hidden flex flex-col justify-between group hover:bg-neutral-900/60 transition-all duration-300 shadow-lg relative cursor-pointer"
            >
              {/* Top Image Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/img/helmet.png';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-black/85 text-white border border-white/20 backdrop-blur-md">
                    {project.categoryLabel || project.type.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-neutral-100 mb-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <Eye className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors shrink-0 ml-2" />
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 pb-4 font-mono text-[10px]">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions: Details Modal & Direct Repo Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="text-neutral-300 hover:text-white flex items-center gap-1.5 py-1 px-3 rounded bg-neutral-900 border border-white/15 hover:border-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>INTEL &amp; SPECS</span>
                    </button>

                    {project.url && project.url !== '#' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 py-1 px-3 rounded bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>REPO</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-neutral-600 text-[11px] uppercase">
                        DOCS INTERNAL
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
