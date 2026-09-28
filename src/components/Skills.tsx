import { skillCategories } from '../data/portfolioData';
import { DotGrid } from './DotGrid';

export function Skills() {
  const languages = skillCategories.find((c) => c.title === 'Languages');
  const databases = skillCategories.find((c) => c.title === 'Databases');
  const tools = skillCategories.find((c) => c.title === 'Tools');
  const other = skillCategories.find((c) => c.title === 'Other');
  const frameworks = skillCategories.find((c) => c.title === 'Frameworks');

  return (
    <section id="skills" className="py-14 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#C778DD]">#</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              skills
            </h2>
          </div>
          {/* Horizontal Accent Line */}
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-xs opacity-80" />
        </div>

        {/* Content Layout: Left Decorative Shapes + Right Skill Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Decorative Geometry (matching the screenshot) */}
          <div className="lg:col-span-4 relative min-h-[260px] hidden sm:block">
            
            {/* Top Dot Grid */}
            <div className="absolute top-2 left-6">
              <DotGrid rows={5} cols={5} color="#ABB2BF" />
            </div>

            {/* Overlapping Gray Outer Wireframe Box */}
            <div className="absolute top-16 left-20 w-24 h-24 border border-[#ABB2BF] opacity-70" />

            {/* Overlapping Purple Accent Wireframe Box */}
            <div className="absolute top-24 left-10 w-20 h-20 border-2 border-[#C778DD]" />

            {/* Middle Dot Grid */}
            <div className="absolute top-36 left-32">
              <DotGrid rows={5} cols={5} color="#ABB2BF" />
            </div>

            {/* Bottom Offset Wireframe Box */}
            <div className="absolute top-48 left-40 w-16 h-16 border border-[#ABB2BF]" />

            {/* Subtle cyber watermark */}
            <div className="absolute bottom-2 left-8 text-[11px] text-[#ABB2BF]/40 font-mono select-none">
              &lt;architecture /&gt;
            </div>
          </div>

          {/* Right Skill Boxes Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Column 1 */}
            <div className="space-y-4">
              {languages && (
                <div className="border border-[#ABB2BF] bg-[#282C33] hover:border-[#C778DD] transition-colors">
                  <div className="border-b border-[#ABB2BF] px-3 py-1.5 font-semibold text-white text-sm">
                    {languages.title}
                  </div>
                  <div className="p-3 text-sm text-[#ABB2BF] flex flex-wrap gap-x-3 gap-y-1.5 leading-relaxed">
                    {languages.skills.map((skill) => (
                      <span key={skill} className="hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {other && (
                <div className="border border-[#ABB2BF] bg-[#282C33] hover:border-[#C778DD] transition-colors">
                  <div className="border-b border-[#ABB2BF] px-3 py-1.5 font-semibold text-white text-sm">
                    {other.title}
                  </div>
                  <div className="p-3 text-sm text-[#ABB2BF] flex flex-wrap gap-x-3 gap-y-1.5 leading-relaxed">
                    {other.skills.map((skill) => (
                      <span key={skill} className="hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {databases && (
                <div className="border border-[#ABB2BF] bg-[#282C33] hover:border-[#C778DD] transition-colors">
                  <div className="border-b border-[#ABB2BF] px-3 py-1.5 font-semibold text-white text-sm">
                    {databases.title}
                  </div>
                  <div className="p-3 text-sm text-[#ABB2BF] flex flex-wrap gap-x-3 gap-y-1.5 leading-relaxed">
                    {databases.skills.map((skill) => (
                      <span key={skill} className="hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {frameworks && (
                <div className="border border-[#ABB2BF] bg-[#282C33] hover:border-[#C778DD] transition-colors">
                  <div className="border-b border-[#ABB2BF] px-3 py-1.5 font-semibold text-white text-sm">
                    {frameworks.title}
                  </div>
                  <div className="p-3 text-sm text-[#ABB2BF] flex flex-wrap gap-x-3 gap-y-1.5 leading-relaxed">
                    {frameworks.skills.map((skill) => (
                      <span key={skill} className="hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              {tools && (
                <div className="border border-[#ABB2BF] bg-[#282C33] hover:border-[#C778DD] transition-colors">
                  <div className="border-b border-[#ABB2BF] px-3 py-1.5 font-semibold text-white text-sm">
                    {tools.title}
                  </div>
                  <div className="p-3 text-sm text-[#ABB2BF] flex flex-wrap gap-x-3 gap-y-1.5 leading-relaxed">
                    {tools.skills.map((skill) => (
                      <span key={skill} className="hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
