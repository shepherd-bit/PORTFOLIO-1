import { ArrowRight } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';
import { DotGrid } from './DotGrid';

interface AboutMeProps {
  onPricingClick: () => void;
}

export function AboutMe({ onPricingClick }: AboutMeProps) {
  return (
    <section id="about-me" className="py-14 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#C778DD]">#</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              about-me
            </h2>
          </div>
          {/* Horizontal Accent Line */}
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-xs opacity-80" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#ABB2BF] leading-relaxed text-sm sm:text-base">
            
            <p className="text-white font-medium text-base sm:text-lg">
              {portfolioInfo.aboutMe.salutation}
            </p>

            <div className="space-y-5">
              {portfolioInfo.aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Button Box: Click HERE for a Price -> */}
            <div className="pt-4">
              <button
                onClick={onPricingClick}
                className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 border border-[#C778DD] bg-[#282C33] px-5 py-3 text-white text-sm sm:text-base font-medium hover:bg-[#C778DD]/20 transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>{portfolioInfo.aboutMe.ctaText}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Coder Graphic with Dot Matrix */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-80 h-72 sm:h-84 flex items-center justify-center">
              
              {/* Background Geometric Outline */}
              <div 
                className="absolute -bottom-2 -left-2 w-48 h-48 border border-[#ABB2BF]/40 pointer-events-none" 
                aria-hidden="true" 
              />
              <div 
                className="absolute -top-2 -right-2 w-52 h-52 border border-[#C778DD] pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Decorative Dot Matrix in top-left */}
              <div className="absolute top-4 left-2 z-0 opacity-70">
                <DotGrid rows={5} cols={5} color="#ABB2BF" />
              </div>

              {/* Decorative Dot Matrix in bottom-right */}
              <div className="absolute bottom-4 right-2 z-0 opacity-80">
                <DotGrid rows={4} cols={4} color="#C778DD" />
              </div>

              {/* Profile Picture */}
              <img
                src="./about-me/lincon.png"
                alt="Titus - Full Stack Web Developer"
                className="relative z-10 w-full max-w-sm h-auto -mt-50 scale-120 drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
