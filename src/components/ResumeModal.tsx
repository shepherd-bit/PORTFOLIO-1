import { X, Download, Printer, ExternalLink, Mail, Disc as Discord, Github } from 'lucide-react';
import { portfolioInfo, experienceData, skillCategories, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl border border-[#C778DD] bg-[#282C33] shadow-2xl my-6 text-[#ABB2BF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="border-b border-[#ABB2BF]/30 bg-[#21252B] px-6 py-4 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-[#C778DD] font-bold text-lg">#</span>
            <span className="text-white font-bold text-sm sm:text-base">
              Curriculum Vitae — Titus (Full Stack Web Developer)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              aria-label="Print or Save PDF"
              className="inline-flex items-center gap-1.5 text-xs text-[#ABB2BF] hover:text-white border border-[#ABB2BF]/30 hover:border-[#C778DD] px-3 py-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#C778DD]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV preview"
              className="p-1 text-[#ABB2BF] hover:text-white border border-transparent hover:border-[#C778DD] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto font-mono text-xs sm:text-sm">
          
          {/* Header section */}
          <div className="border-b border-[#ABB2BF]/30 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {portfolioInfo.name}
              </h1>
              <p className="text-[#C778DD] font-medium text-sm sm:text-base mt-1">
                Full Stack Web Developer &bull; Python Backend Specialist
              </p>
              <p className="text-xs text-[#ABB2BF] mt-1">
                Equipped and Ready for Team or Solo Projects &bull; Remote / Worldwide
              </p>
            </div>

            <div className="text-xs space-y-1 text-[#ABB2BF] self-start sm:text-right">
              <div>Email: <a href={`mailto:${portfolioInfo.contacts.directEmail}`} className="text-white hover:underline">{portfolioInfo.contacts.directEmail}</a></div>
              <div>Secondary: <span className="text-white">{portfolioInfo.contacts.primaryEmail}</span></div>
              <div>Discord: <span className="text-white">{portfolioInfo.contacts.discord}</span></div>
              <div>GitHub: <a href="https://github.com/titusaoluoch" target="_blank" rel="noreferrer" className="text-[#C778DD] hover:underline">github.com/titusaoluoch</a></div>
            </div>
          </div>

          {/* Guarantees & Philosophy */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="text-[#C778DD]">&gt;</span> Guarantees &amp; Quality Mandate
            </h2>
            <div className="border border-[#ABB2BF]/30 bg-[#1E2228] p-4 text-xs leading-relaxed text-[#ABB2BF]">
              {portfolioInfo.guarantees.join(' &bull; ')}
              <div className="mt-2 text-white italic">
                &ldquo;{portfolioInfo.quote}&rdquo; {portfolioInfo.quoteAuthor}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-[#C778DD]">&gt;</span> Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="border border-[#ABB2BF]/40 p-3 bg-[#1E2228]">
                  <span className="font-bold text-white block mb-1 text-xs">{cat.title}</span>
                  <span className="text-xs text-[#ABB2BF]">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-[#C778DD]">&gt;</span> Experience &amp; Practical Practice
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-[#C778DD] pl-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="text-[#C778DD]">{exp.period}</span>
                  </div>
                  <div className="text-xs text-[#ABB2BF]">{exp.organization}</div>
                  <ul className="text-xs text-[#ABB2BF]/90 space-y-1 pt-1">
                    {exp.description.map((d, dIdx) => (
                      <li key={dIdx}>- {d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-[#C778DD]">&gt;</span> Featured Production Deployments
            </h2>
            <div className="space-y-3">
              {projectsData.map((project) => (
                <div key={project.id} className="border border-[#ABB2BF]/30 p-3.5 bg-[#1E2228]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs sm:text-sm">{project.title}</span>
                    <span className="text-[11px] text-[#C778DD]">{project.tags.join(' | ')}</span>
                  </div>
                  <p className="text-xs text-[#ABB2BF] mt-1">{project.longDescription || project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="text-[#C778DD]">&gt;</span> Academic Foundation
            </h2>
            <div className="border border-[#ABB2BF]/30 p-4 bg-[#1E2228] text-xs space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>The East African University</span>
                <span className="text-[#C778DD]">2018 - 2024</span>
              </div>
              <div className="text-[#ABB2BF]">Bachelor of Science, Computer Science Candidate</div>
              <p className="text-[#ABB2BF]/80 pt-1 leading-relaxed">
                Completed 6 years of foundational coursework covering algorithm design, operating systems, networking protocols, and systems architecture before committing full-time to commercial freelance engineering.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-[#ABB2BF]/30 bg-[#21252B] px-6 py-4 flex items-center justify-between text-xs no-print">
          <span className="text-[#ABB2BF]">Titus &bull; Available for immediate hire &amp; contracts</span>
          <button
            onClick={onClose}
            className="border border-[#C778DD] text-white px-4 py-1.5 hover:bg-[#C778DD]/20 transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
