import { motion } from 'framer-motion';
import { portfolioInfo } from '../data/portfolioData';
import { DotGrid } from './DotGrid';

interface AboutMeProps {
  onPricingClick: () => void;
}

export function AboutMe({ onPricingClick }: AboutMeProps) {
  return (
    <section id="about-me" className="py-14 md:py-20 relative overflow-hidden">
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
              about-me
            </h2>
          </div>
          {/* Horizontal Accent Line */}
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-xs opacity-80 shadow-[0_0_8px_rgba(199,120,221,0.4)]" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-[#ABB2BF] leading-relaxed text-sm sm:text-base"
          >
            
            <p className="text-white font-medium text-base sm:text-lg drop-shadow-sm">
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
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onPricingClick}
                className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 border border-[#C778DD] bg-[#282C33] px-5 py-3 text-white text-sm sm:text-base font-medium hover:bg-[#C778DD]/20 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(199,120,221,0.2)] hover:shadow-[0_0_25px_rgba(199,120,221,0.4)]"
              >
                <span>{portfolioInfo.aboutMe.ctaText}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Stylized Coder Graphic with Dot Matrix */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 sm:w-80 h-72 sm:h-84 flex items-center justify-center">
              
              {/* Background Geometric Outline */}
              <div 
                className="absolute -bottom-2 -left-2 w-48 h-48 border border-[#ABB2BF]/40 shadow-xl pointer-events-none" 
                aria-hidden="true" 
              />
              <motion.div 
                animate={{ rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 w-52 h-52 border-2 border-[#C778DD] shadow-[0_0_20px_rgba(199,120,221,0.3)] pointer-events-none" 
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
                className="relative z-10 w-full max-w-sm h-auto -mt-50 scale-120 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
              />

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}