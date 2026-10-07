import { motion } from 'framer-motion';
import { DotGrid } from './DotGrid';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'Lua', 'Python', 'JavaScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis', 'Prisma'],
  },
  {
    title: 'Tools',
    skills: ['VSCode', 'Neovim', 'Figma', 'Arch', 'Git', 'Font Awesome', 'Vite', 'Docker', 'Render', 'Vercel', 'Strapi'],
  },
  {
    title: 'Other',
    skills: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Vue', 'Disnake', 'Flask', 'Express.js', 'Next.js', 'Medusa.js', 'Tailwind CSS', 'Framer Motion', 'Turborepo'],
  },
];

export function Skills() {
  const languages = skillCategories.find((c) => c.title === 'Languages');
  const databases = skillCategories.find((c) => c.title === 'Databases');
  const tools = skillCategories.find((c) => c.title === 'Tools');
  const other = skillCategories.find((c) => c.title === 'Other');
  const frameworks = skillCategories.find((c) => c.title === 'Frameworks');

  return (
    <section id="skills" className="py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#C778DD] drop-shadow-[0_0_10px_rgba(199,120,221,0.5)]">#</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              skills
            </h2>
          </div>
          {/* Horizontal Accent Line */}
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-xs opacity-80 shadow-[0_0_8px_rgba(199,120,221,0.4)]" />
        </motion.div>

        {/* Content Layout: Left Decorative Shapes + Right Skill Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Decorative Geometry */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative min-h-[260px] hidden sm:block"
          >
            
            {/* Top Dot Grid */}
            <div className="absolute top-2 left-6">
              <DotGrid rows={5} cols={5} color="#ABB2BF" />
            </div>

            {/* Overlapping Gray Outer Wireframe Box */}
            <div className="absolute top-16 left-20 w-24 h-24 border border-[#ABB2BF] opacity-70 shadow-lg shadow-black/30" />

            {/* Overlapping Purple Accent Wireframe Box with gentle floating/rotation */}
            <motion.div 
              animate={{ rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              className="absolute top-24 left-10 w-20 h-20 border-2 border-[#C778DD] shadow-[0_0_20px_rgba(199,120,221,0.3)]" 
            />

            {/* Middle Dot Grid */}
            <div className="absolute top-36 left-32">
              <DotGrid rows={5} cols={5} color="#ABB2BF" />
            </div>

            {/* Bottom Offset Wireframe Box */}
            <div className="absolute top-48 left-40 w-16 h-16 border border-[#ABB2BF] shadow-md" />

            {/* Subtle cyber watermark */}
            <div className="absolute bottom-2 left-8 text-[11px] text-[#ABB2BF]/40 font-mono select-none">
              &lt;architecture /&gt;
            </div>
          </motion.div>

          {/* Right Skill Boxes Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Column 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {languages && (
                <div className="border border-[#ABB2BF]/40 bg-[#282C33] hover:border-[#C778DD] shadow-xl shadow-black/40 hover:shadow-[0_0_20px_rgba(199,120,221,0.2)] transition-all duration-300">
                  <div className="border-b border-[#ABB2BF]/30 px-3 py-1.5 font-semibold text-white text-sm bg-[#21252B]">
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
                <div className="border border-[#ABB2BF]/40 bg-[#282C33] hover:border-[#C778DD] shadow-xl shadow-black/40 hover:shadow-[0_0_20px_rgba(199,120,221,0.2)] transition-all duration-300">
                  <div className="border-b border-[#ABB2BF]/30 px-3 py-1.5 font-semibold text-white text-sm bg-[#21252B]">
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
            </motion.div>

            {/* Column 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {databases && (
                <div className="border border-[#ABB2BF]/40 bg-[#282C33] hover:border-[#C778DD] shadow-xl shadow-black/40 hover:shadow-[0_0_20px_rgba(199,120,221,0.2)] transition-all duration-300">
                  <div className="border-b border-[#ABB2BF]/30 px-3 py-1.5 font-semibold text-white text-sm bg-[#21252B]">
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
                <div className="border border-[#ABB2BF]/40 bg-[#282C33] hover:border-[#C778DD] shadow-xl shadow-black/40 hover:shadow-[0_0_20px_rgba(199,120,221,0.2)] transition-all duration-300">
                  <div className="border-b border-[#ABB2BF]/30 px-3 py-1.5 font-semibold text-white text-sm bg-[#21252B]">
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
            </motion.div>

            {/* Column 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {tools && (
                <div className="border border-[#ABB2BF]/40 bg-[#282C33] hover:border-[#C778DD] shadow-xl shadow-black/40 hover:shadow-[0_0_20px_rgba(199,120,221,0.2)] transition-all duration-300">
                  <div className="border-b border-[#ABB2BF]/30 px-3 py-1.5 font-semibold text-white text-sm bg-[#21252B]">
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
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}