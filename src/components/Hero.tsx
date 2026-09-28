import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';
import { DotGrid } from './DotGrid';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Introductions and Guarantees */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-white leading-tight tracking-tight">
              Hi, I am <span className="text-white">Titus</span>, a{' '}
              <span className="text-[#C778DD]">full Stack web developer</span>.{' '}
              <br className="hidden sm:inline" />
              Equipped and Ready for{' '}
              <span className="text-[#C778DD]">Team</span> or{' '}
              <span className="text-[#C778DD]">Solo Projects</span>
            </h1>

            {/* Guarantees Box */}
            <div className="space-y-2 text-sm md:text-[0.95rem] text-[#ABB2BF] leading-relaxed max-w-xl">
              <p className="font-normal">
                <span className="text-white font-medium">Guarantees:</span>{' '}
                {portfolioInfo.guarantees.join(', ')}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-2 border border-[#C778DD] text-white px-6 py-3 font-medium hover:bg-[#C778DD]/20 hover:border-[#C778DD] transition-all duration-200 cursor-pointer"
              >
                <span>Contact me !!</span>
                <span className="text-[#C778DD] group-hover:translate-x-1 transition-transform">
                  &gt;
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Silhouette Avatar & Status Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm flex flex-col items-center">
              
              {/* Decorative Geometric Wireframes behind Avatar */}
              <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
                
                {/* Purple outer square wireframe */}
                <div 
                  className="absolute -top-3 -right-2 w-56 h-56 border-2 border-[#C778DD] opacity-85 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Gray secondary wireframe offset */}
                <div 
                  className="absolute -bottom-2 -left-3 w-48 h-48 border border-[#ABB2BF]/40 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Dot Matrix Pattern at top-left */}
                <div className="absolute top-2 left-2 z-0 opacity-70">
                  <DotGrid rows={5} cols={5} color="#ABB2BF" />
                </div>

                {/* Dot Matrix Pattern at bottom-right */}
                <div className="absolute bottom-6 right-2 z-0 opacity-80">
                  <DotGrid rows={4} cols={4} color="#C778DD" />
                </div>

                {/* Developer Silhouette Illustration (Hoodie Developer) */}
                <div className="relative z-10 w-64 h-72 flex items-end justify-center overflow-hidden">
                  <svg
                    viewBox="0 0 260 290"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                  >
                    <defs>
                      <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E2228" />
                        <stop offset="70%" stopColor="#171A1F" />
                        <stop offset="100%" stopColor="#101216" />
                      </linearGradient>
                      <linearGradient id="cyberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#C778DD" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#61AFEF" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>

                    {/* Developer body/torso */}
                    <path
                      d="M30 290 C35 240, 55 210, 85 195 L95 190 C105 185, 110 178, 110 170 L110 160 C100 155, 92 145, 90 130 C85 95, 95 65, 130 65 C165 65, 175 95, 170 130 C168 145, 160 155, 150 160 L150 170 C150 178, 155 185, 165 190 L175 195 C205 210, 225 240, 230 290 Z"
                      fill="url(#hoodieGrad)"
                      stroke="#3E4451"
                      strokeWidth="1.5"
                    />

                    {/* Hoodie Rim & Shadow */}
                    <path
                      d="M92 135 C88 95, 102 60, 130 60 C158 60, 172 95, 168 135 C165 160, 150 175, 130 175 C110 175, 95 160, 92 135 Z"
                      fill="#121418"
                      stroke="#C778DD"
                      strokeWidth="1.2"
                      strokeDasharray="4 2"
                    />

                    {/* Masked/Shaded Face interior */}
                    <ellipse cx="130" cy="120" rx="26" ry="32" fill="#0c0e12" />

                    {/* Ambient Cyber Eye / Glasses Glint */}
                    <rect x="116" y="112" width="10" height="3" rx="1.5" fill="#C778DD" opacity="0.9" />
                    <rect x="134" y="112" width="10" height="3" rx="1.5" fill="#C778DD" opacity="0.9" />

                    {/* Zipper / Center line */}
                    <line x1="130" y1="175" x2="130" y2="290" stroke="#3E4451" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Subtle Shoulder Highlights */}
                    <path d="M55 235 Q90 205 120 200" stroke="#C778DD" strokeWidth="1.2" opacity="0.4" />
                    <path d="M205 235 Q170 205 140 200" stroke="#ABB2BF" strokeWidth="1" opacity="0.3" />
                  </svg>
                </div>
              </div>

              {/* Status Badge beneath the Avatar */}
              <div className="w-full mt-3 border border-[#ABB2BF] bg-[#282C33] px-3.5 py-2.5 flex items-center gap-3 text-xs sm:text-sm text-[#ABB2BF] shadow-lg">
                <span className="w-4 h-4 bg-[#C778DD] shrink-0 inline-block shadow-[0_0_10px_rgba(199,120,221,0.6)]" />
                <span className="truncate">
                  Currently working on{' '}
                  <strong className="text-white font-semibold">
                    Python backend frameworks
                  </strong>
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
