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

              {/* Stylized Developer Sitting / Typing Silhouette */}
              <div className="relative z-10 w-56 h-64 flex items-center justify-center">
                <svg
                  viewBox="0 0 240 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
                >
                  <defs>
                    <linearGradient id="coderBody" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E2228" />
                      <stop offset="100%" stopColor="#13161A" />
                    </linearGradient>
                  </defs>

                  {/* Sitting / Focused Coder Silhouette */}
                  {/* Head / Beanie / Hood */}
                  <path
                    d="M95 90 C90 50, 150 50, 145 90 C143 105, 138 115, 120 115 C102 115, 97 105, 95 90 Z"
                    fill="#15181D"
                    stroke="#C778DD"
                    strokeWidth="1.5"
                  />

                  {/* Shoulders & Torso */}
                  <path
                    d="M60 210 C65 155, 90 130, 120 130 C150 130, 175 155, 180 210 Z"
                    fill="url(#coderBody)"
                    stroke="#3E4451"
                    strokeWidth="1.5"
                  />

                  {/* Arms leaning forward */}
                  <path
                    d="M75 160 L50 205 L80 215 L100 180 Z"
                    fill="#1A1D23"
                    stroke="#3E4451"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M165 160 L190 205 L160 215 L140 180 Z"
                    fill="#1A1D23"
                    stroke="#3E4451"
                    strokeWidth="1.2"
                  />

                  {/* Hands typing / glowing screen reflection */}
                  <path
                    d="M80 215 L120 205 L160 215 L150 225 L90 225 Z"
                    fill="#282C33"
                    stroke="#C778DD"
                    strokeWidth="1.2"
                  />

                  {/* Laptop screen lid angled */}
                  <polygon
                    points="70,225 170,225 155,190 85,190"
                    fill="#181B20"
                    stroke="#ABB2BF"
                    strokeWidth="1"
                  />

                  {/* Screen Glow */}
                  <polygon
                    points="88,194 152,194 163,222 77,222"
                    fill="#C778DD"
                    opacity="0.15"
                  />

                  {/* Cyber code lines on screen */}
                  <line x1="95" y1="202" x2="140" y2="202" stroke="#C778DD" strokeWidth="1.5" />
                  <line x1="95" y1="208" x2="130" y2="208" stroke="#ABB2BF" strokeWidth="1.5" />
                  <line x1="95" y1="214" x2="145" y2="214" stroke="#98C379" strokeWidth="1.5" />
                </svg>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
