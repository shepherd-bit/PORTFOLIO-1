import { useState } from 'react';
import { FileCode, FolderTree, Terminal, Calendar } from 'lucide-react';
import { experienceData as originalExperienceData } from '../data/portfolioData';

// Custom override data to update the second role while keeping 1 and 3 intact
const experienceData = originalExperienceData.map((item, index) => {
  if (index === 1) {
    return {
      ...item,
      role: "Technical Writer & Frontend Freelance Developer",
      organization: "Private Contractors & Freelance Platforms",
      description: [
        "Crafting high-impact architectural documentation, API guides, and technical whitepapers for scaling tech startups.",
        "Developing responsive, high-performance client-side interfaces and component libraries for international freelance clients.",
        "Bridging complex system engineering concepts with clear, developer-friendly documentation and clean modular codebases."
      ],
      technologies: ["Markdown", "TypeScript", "React", "Tailwind CSS", "Git", "API Documentation"]
    };
  }
  return item;
});

// Helper to map role titles to clean filename strings
function getFilename(role: string): string {
  return role.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_') + '.ts';
}

export function Experience() {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const activeItem = experienceData[activeFileIndex] || experienceData[0];
  const currentFilename = getFilename(activeItem.role);

  return (
    <section id="experience" className="py-14 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#C778DD]">#</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              experience
            </h2>
          </div>
          {/* Horizontal Accent Line */}
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-xs opacity-80" />
        </div>

        {/* Workspace Code Editor Container */}
        <div className="border border-[#ABB2BF]/30 bg-[#282C33] rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Sidebar / File Tree Explorer */}
          <div className="lg:col-span-4 bg-[#1e2227] border-b lg:border-b-0 lg:border-r border-[#ABB2BF]/25 p-4 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ABB2BF]/70 uppercase tracking-wider mb-4 pb-2 border-b border-[#ABB2BF]/20">
              <FolderTree className="w-4 h-4 text-[#C778DD]" />
              <span>workspace / experience /</span>
            </div>

            <div className="space-y-1.5">
              {experienceData.map((item, index) => {
                const isSelected = activeFileIndex === index;
                const filename = getFilename(item.role);
                return (
                  <button
                    key={index}
                    onClick={() => setActiveFileIndex(index)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2.5 font-mono text-xs cursor-pointer ${
                      isSelected
                        ? 'bg-[#282C33] text-white border-l-2 border-[#C778DD] shadow-sm'
                        : 'text-[#ABB2BF] hover:bg-[#282C33]/50 hover:text-white'
                    }`}
                  >
                    <FileCode className={`w-4 h-4 ${isSelected ? 'text-[#C778DD]' : 'text-[#ABB2BF]/60'}`} />
                    <span className="truncate">{filename}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto pt-6 hidden lg:block">
              <div className="bg-[#282C33] p-3 rounded-lg border border-[#ABB2BF]/20 text-[11px] font-mono text-[#ABB2BF]/60">
                <span className="text-[#C778DD]">Tip:</span> Click files to inspect serialized career source records.
              </div>
            </div>
          </div>

          {/* Right Column: Syntax-Highlighted Code Editor Window */}
          <div className="lg:col-span-8 flex flex-col bg-[#282C33]">
            
            {/* Editor Tab Bar */}
            <div className="bg-[#1e2227] border-b border-[#ABB2BF]/20 px-4 py-2 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 bg-[#282C33] px-3 py-1.5 rounded-t border-t-2 border-[#C778DD] text-white">
                <FileCode className="w-3.5 h-3.5 text-[#C778DD]" />
                <span>{currentFilename}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#ABB2BF] bg-[#1e2227] px-2.5 py-1 rounded border border-[#ABB2BF]/20">
                <Calendar className="w-3.5 h-3.5 text-[#C778DD]" />
                <span>{activeItem.period}</span>
              </div>
            </div>

            {/* Code Editor Body */}
            <div className="p-6 md:p-8 font-mono text-xs sm:text-sm overflow-x-auto">
              
              {/* Role Title Comment Header */}
              <div className="text-[#ABB2BF]/50 mb-4">
                // ==========================================
                <br />
                // ROLE: <span className="text-white font-bold">{activeItem.role}</span>
                <br />
                // ORGANIZATION: <span className="text-[#C778DD]">{activeItem.organization}</span>
                <br />
                // ==========================================
              </div>

              {/* Code Object Structure */}
              <div className="space-y-4">
                <div>
                  <span className="text-[#C778DD]">const</span> <span className="text-white">careerMilestone</span> <span className="text-[#C778DD]">=</span> {'{'}
                </div>

                <div className="pl-4 space-y-2">
                  <div>
                    <span className="text-[#ABB2BF]">role:</span> <span className="text-[#98C379]">"{activeItem.role}"</span>,
                  </div>
                  <div>
                    <span className="text-[#ABB2BF]">organization:</span> <span className="text-[#98C379]">"{activeItem.organization}"</span>,
                  </div>
                  <div>
                    <span className="text-[#ABB2BF]">period:</span> <span className="text-[#98C379]">"{activeItem.period}"</span>,
                  </div>

                  {/* Responsibilities Block */}
                  <div>
                    <span className="text-[#ABB2BF]">responsibilities:</span> [
                    <div className="pl-4 space-y-1.5 my-1">
                      {activeItem.description.map((desc, dIdx) => (
                        <div key={dIdx} className="text-[#ABB2BF] leading-relaxed">
                          <span className="text-[#98C379]">`&gt; {desc}`</span>,
                        </div>
                      ))}
                    </div>
                    ],
                  </div>

                  {/* Technologies Stack Array */}
                  <div>
                    <span className="text-[#ABB2BF]">techStack:</span> [
                    <div className="flex flex-wrap gap-1.5 pl-4 mt-1.5">
                      {activeItem.technologies.map((tech) => (
                        <span key={tech} className="text-[#98C379] bg-[#1e2227] px-2 py-0.5 rounded border border-[#ABB2BF]/20">
                          "{tech}"
                        </span>
                      ))}
                    </div>
                    ]
                  </div>
                </div>

                <div>{'};'}</div>
                <div className="pt-2 text-[#C778DD]">
                  <span className="text-[#ABB2BF]">export default</span> careerMilestone;
                </div>
              </div>

            </div>

            {/* Editor Status Bar Footer */}
            <div className="bg-[#1e2227] border-t border-[#ABB2BF]/20 px-4 py-2 mt-auto flex items-center justify-between text-[11px] font-mono text-[#ABB2BF]/60">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#C778DD]" />
                <span>TypeScript JSX</span>
              </div>
              <div className="flex items-center gap-3">
                <span>UTF-8</span>
                <span>Ln {activeItem.description.length + 8}, Col 1</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}