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
            <h1 className="text-2xl sm:text-3xl md:text-[2.1rem] font-bold text-white leading-tight tracking-tight">
              Hi, I am <span className="text-white">Titus</span>, a{' '}
              <span className="text-[#C778DD]">full Stack web developer</span>.{' '}
              <br className="hidden sm:inline" />
              Ready for{' '}
              <span className="text-[#C778DD]">Team</span> or{' '}
              <span className="text-[#C778DD]">Solo Projects</span>
            </h1>

            {/* Guarantees Terminal Box */}
            <div className="max-w-xl border border-[#ABB2BF]/20 bg-[#282C33] shadow-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#ABB2BF]/10 bg-[#21252B]">
                <span className="w-3 h-3 rounded-full bg-[#C778DD]/80" />
                <span className="w-3 h-3 rounded-full bg-[#ABB2BF]/40" />
                <span className="w-3 h-3 rounded-full bg-[#ABB2BF]/40" />
                <span className="ml-3 text-xs text-[#ABB2BF]/70 font-mono"># guarantees</span>
              </div>
              {/* Terminal Body */}
              <div className="px-4 py-4 font-mono text-sm md:text-[0.9rem] text-[#ABB2BF] space-y-2.5">
                {portfolioInfo.guarantees.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="text-[#C778DD] text-xs">&#9670;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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
            <div className="relative w-full flex-1 flex flex-col items-center">
              
              {/* Decorative Geometric Wireframes behind Avatar */}
              <div className="relative w-full flex-1 flex items-end justify-center">
                 
                {/* Purple outer square wireframe */}
                <div 
                  className="absolute -top-10 -right-7 w-72 h-72 border-2 border-[#C778DD] opacity-85 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Gray secondary wireframe offset */}
                <div 
                  className="absolute bottom-16 -left-6 w-56 h-56 border border-[#ABB2BF]/40 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Dot Matrix Pattern at top-left */}
                <div className="absolute -left-2 top-8 z-0 opacity-70">
                  <DotGrid rows={8} cols={8} color="#ABB2BF" />
                </div>

                {/* Dot Matrix Pattern at bottom-right */}
                <div className="absolute -right-8 bottom-12 z-0 opacity-80">
                  <DotGrid rows={7} cols={7} color="#C778DD" />
                </div>

                {/* Profile Picture */}
                <img
                  src="/pfp.png"
                  alt="Titus - Full Stack Web Developer"
                  className="relative z-10 w-full max-w-sm h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Status Badge beneath the Avatar */}
              <div className="w-full mt-3 -ml-12 -mr-12 border border-[#ABB2BF] bg-[#282C33] px-3.5 py-2.5 flex items-center gap-3 text-xs sm:text-sm text-[#ABB2BF] shadow-lg">
                <span className="w-4 h-4 bg-[#C778DD] shrink-0 inline-block shadow-[0_0_10px_rgba(199,120,221,0.6)]" />
                <span className="whitespace-nowrap">
                  Currently working on{' '}
                  <strong className="text-white font-semibold">
                    AI & Machine Learning Engineering
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
