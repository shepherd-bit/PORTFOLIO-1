import { X, ExternalLink, Github, Terminal, CheckCircle2, Server, Shield } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl border border-[#C778DD] bg-[#282C33] shadow-2xl overflow-hidden my-6 text-[#ABB2BF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-[#ABB2BF]/30 bg-[#21252B] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C778DD] font-bold text-lg">&lt;/&gt;</span>
            <span className="text-white font-bold text-base">
              {project.title} &mdash; Architecture &amp; Specs
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 text-[#ABB2BF] hover:text-white border border-transparent hover:border-[#C778DD] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-mono text-xs sm:text-sm">
          
          {/* Simulated Interface preview */}
          <div className="border border-[#ABB2BF]/40 bg-[#1A1D23] p-4 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-[#ABB2BF]/20 mb-3 text-[11px] text-[#ABB2BF]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-white font-medium">https://{project.id}.dev.ml</span>
              </div>
              <span className="text-emerald-400">● 200 OK (24ms)</span>
            </div>

            <div className="space-y-3 py-2">
              <div className="inline-block bg-[#E57B10] text-white text-xs px-2 py-0.5 font-bold">
                {project.imageText?.badge || project.title}
              </div>
              <h4 className="text-white font-bold text-lg">
                {project.imageText?.subBadge || project.description}
              </h4>
              <p className="text-xs text-[#ABB2BF] leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="space-y-2">
              <span className="text-white font-bold text-xs uppercase tracking-wider block">
                Engineering Highlights:
              </span>
              <ul className="space-y-1.5 text-xs text-[#ABB2BF]">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C778DD] font-bold">&gt;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology stack */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Stack &amp; Ecosystem:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              {(project.technologies || project.tags).map((tech) => (
                <span
                  key={tech}
                  className="border border-[#ABB2BF]/40 bg-[#1E2228] px-2.5 py-1 text-white font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-[#ABB2BF]/30 pt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#C778DD] text-white hover:bg-[#C778DD]/20 px-4 py-2 text-xs font-medium transition-colors"
              >
                <span>Live Demo</span>
                <span className="text-[#C778DD]">&lt;~&gt;</span>
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border border-[#ABB2BF]/40 text-[#ABB2BF] hover:text-white hover:border-[#ABB2BF] px-4 py-2 text-xs font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#ABB2BF] hover:text-white underline cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
