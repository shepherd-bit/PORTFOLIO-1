import { useState } from 'react';
import { ExternalLink, Terminal, Server, ShieldCheck, Cpu } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { DotGrid } from './DotGrid';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'python' | 'fullstack'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'python') return p.tags.includes('Python');
    if (filter === 'fullstack') return p.tags.includes('HTML') || p.tags.includes('React');
    return true;
  });

  return (
    <section id="projects" className="py-14 md:py-20 relative">
      
      {/* Decorative dot matrix on the far left */}
      <div className="hidden xl:block absolute left-2 top-24 pointer-events-none opacity-40">
        <DotGrid rows={5} cols={3} color="#ABB2BF" />
      </div>

      {/* Decorative wireframe box on the far right */}
      <div className="hidden xl:block absolute -right-6 top-48 w-24 h-36 border border-[#ABB2BF]/30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#C778DD]">#</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              projects
            </h2>
          </div>
          {/* Horizontal Accent Line */}
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-md opacity-80" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-[#ABB2BF]/80 bg-[#282C33] flex flex-col justify-between group hover:border-[#C778DD] transition-colors duration-200"
            >
              {/* Project Preview Banner */}
              <div className="relative h-48 bg-gradient-to-br from-[#1b1e24] via-[#21252b] to-[#17191d] border-b border-[#ABB2BF]/50 overflow-hidden flex flex-col justify-between p-4 select-none">
                
                {/* Background circuit/grid decoration */}
                <div 
                  className="absolute inset-0 opacity-10 bg-[radial-gradient(#C778DD_1px,transparent_1px)] [background-size:12px_12px]" 
                  aria-hidden="true" 
                />

                {/* Top preview header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 bg-[#E57B10] text-white px-2.5 py-1 text-xs font-bold rounded shadow">
                    <Server className="w-3 h-3" />
                    <span>{project.imageText?.badge || project.title}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-mono">ONLINE</span>
                  </div>
                </div>

                {/* Center visual: ChertNodes specs mockup as in screenshot */}
                <div className="relative z-10 my-auto py-1">
                  <p className="text-xs text-[#ABB2BF] font-medium tracking-wide mb-2">
                    {project.imageText?.subBadge || project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] text-white">
                    {project.imageText?.features.map((feat, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1 bg-[#282C33]/90 border border-[#ABB2BF]/30 px-2 py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C778DD]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom telemetry bar */}
                <div className="relative z-10 flex items-center justify-between text-[10px] text-[#ABB2BF]/70 font-mono pt-1 border-t border-white/5">
                  <span>RAM: 99.4% OPTIMIZED</span>
                  <span>SSL: ACTIVE</span>
                </div>
              </div>

              {/* Technologies Tags Row */}
              <div className="border-b border-[#ABB2BF]/80 px-4 py-2 text-xs text-[#ABB2BF] font-mono flex flex-wrap gap-x-3 gap-y-1 bg-[#282C33]">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* Card Information & Action Buttons */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#C778DD] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#ABB2BF] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Buttons (Live <~> and Cached >=) */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="border border-[#C778DD] text-white hover:bg-[#C778DD]/20 px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Live</span>
                    <span className="text-[#C778DD]">&lt;~&gt;</span>
                  </button>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="border border-[#ABB2BF] text-[#ABB2BF] hover:text-white hover:border-white px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Cached</span>
                    <span>&gt;=</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
