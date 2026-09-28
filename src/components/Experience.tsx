import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#C778DD]">#</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              experience
            </h2>
          </div>
          {/* Horizontal Accent Line */}
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-xs opacity-80" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="border border-[#ABB2BF]/70 bg-[#282C33] p-6 hover:border-[#C778DD] transition-colors relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ABB2BF]/30 pb-4 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[#C778DD] font-medium">
                    {item.organization}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#ABB2BF] bg-[#1E2228] px-3 py-1 border border-[#ABB2BF]/20 self-start sm:self-auto font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#C778DD]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Bullet details */}
              <ul className="space-y-2 mb-5 text-sm text-[#ABB2BF]">
                {item.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5">
                    <span className="text-[#C778DD] mt-1 shrink-0 font-bold">&gt;</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Pill Row */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#ABB2BF]/20 text-xs">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#ABB2BF]/30 bg-[#21252B] px-2.5 py-1 text-[#ABB2BF] font-mono hover:text-white hover:border-[#C778DD] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
