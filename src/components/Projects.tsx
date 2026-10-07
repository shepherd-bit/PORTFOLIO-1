import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  imageUrl: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Noir',
    category: 'Real Estate',
    description: 'Luxury real estate showcase featuring curated high-end properties across Los Angeles — from Beverly Hills villas to Malibu beachfront estates — with advanced filtering, neighborhood guides, and an editorial, design-forward browsing experience.',
    tags: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://noir-estates-1.vercel.app/',
    sourceUrl: 'https://github.com/shepherd-bit/Noir-Estates',
    imageUrl: './project-thumbnails/noir.PNG', 
  },
  {
    id: '2',
    title: 'Nova',
    category: 'Ecommerce',
    description: 'A production-ready, direct-to-consumer e-commerce starter for selling cutting edge tech consumer products.',
    tags: ['Turborepo', 'Medusa.js', 'Node.js', 'PostgreSQL', 'React 19', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://nova-1-wslo.vercel.app/',
    sourceUrl: 'https://github.com/shepherd-bit/Nova_',
    imageUrl: './project-thumbnails/nova.PNG', 
  },
  {
    id: '3',
    title: 'Vortex',
    category: 'CEO Journal',
    description: 'Vortex Blogs is a CEO journal for Vortex Technology, a drone manufacturing startup, where the CEO posts company updates.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Google GenAI', 'Express', 'Strapi', 'PostgreSQL'],
    liveUrl: 'https://vortex-blogs-1-esum.vercel.app/',
    sourceUrl: 'https://github.com/shepherd-bit/Vortex__Blogs',
    imageUrl: './project-thumbnails/vortex.PNG', 
  },
];

interface ProjectsProps {
  onSelectProject?: (project: Project) => void;
}

export function Projects({}: ProjectsProps) {
  const [projects] = useState<Project[]>(projectsData);

  return (
    <section id="projects" className="py-14 md:py-20 relative bg-[#21252b] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#C778DD] drop-shadow-[0_0_10px_rgba(199,120,221,0.5)]">#</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              projects
            </h2>
          </div>
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-md opacity-80 shadow-[0_0_8px_rgba(199,120,221,0.4)]" />
        </motion.div>

        {/* Disclaimer Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-[#ABB2BF]/80 leading-relaxed mb-8 max-w-2xl"
        >
          All Live Demos are static illustrations on how the web app operates; whole source code is located on github, and accessible through 'Source' buttons
        </motion.p>

        {/* Projects Grid (3 horizontal cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group bg-[#282C33] border border-[#ABB2BF]/30 hover:border-[#C778DD] transition-all duration-300 flex flex-col justify-between rounded-xl overflow-hidden shadow-2xl shadow-black/50 hover:shadow-[0_10px_30px_rgba(199,120,221,0.15)] p-5"
            >
              <div>
                {/* Window Frame Mockup Header */}
                <div className="bg-[#1e2227] rounded-t-lg border border-[#ABB2BF]/20 overflow-hidden mb-4 shadow-inner">
                  {/* macOS style window dots & Category title bar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#17191d] border-b border-[#ABB2BF]/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#ABB2BF]/70 truncate px-2">
                      {project.category}
                    </span>
                  </div>

                  {/* Embedded Thumbnail Image Container */}
                  <div className="relative h-40 w-full overflow-hidden bg-black/40">
                    {project.imageUrl ? (
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-[#ABB2BF]/40">
                        [ Insert Thumbnail ]
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#C778DD] transition-colors mb-2 drop-shadow-sm">
                  {project.title}
                </h3>
                <p className="text-sm text-[#ABB2BF] leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Grid Tags */}
                <div className="mb-5 pt-3 border-t border-[#ABB2BF]/15">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#ABB2BF]/70 mb-2">
                    <Code2 className="w-3.5 h-3.5 text-[#C778DD] drop-shadow-[0_0_6px_rgba(199,120,221,0.5)]" />
                    <span>Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded bg-[#1e2227] text-[#ABB2BF] border border-[#ABB2BF]/15 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Equal-Width Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#C778DD] hover:bg-[#b062c4] text-[#282C33] font-semibold py-2 px-3 rounded-lg text-xs transition-all cursor-pointer shadow-[0_0_12px_rgba(199,120,221,0.3)]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#1e2227] hover:bg-[#21252b] text-white border border-[#ABB2BF]/30 hover:border-white font-medium py-2 px-3 rounded-lg text-xs transition-all cursor-pointer shadow-md"
                  >
                    <Github className="w-3.5 h-3.5 text-[#ABB2BF]" />
                    <span>Source</span>
                  </motion.a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}