import { ArrowUp, Github, Mail } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#ABB2BF]/20 bg-[#282C33] py-10 mt-12 text-sm text-[#ABB2BF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#ABB2BF]/15">
          
          {/* Brand & Email */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-[#C778DD] rotate-45 flex items-center justify-center">
                <div className="w-1 h-1 bg-white" />
              </div>
              <span className="font-bold text-white tracking-wider">
                {portfolioInfo.name}
              </span>
            </div>
            <p className="text-xs text-[#ABB2BF]/80 max-w-sm">
              {portfolioInfo.role} equipped and ready for team or solo projects.
            </p>
          </div>

          {/* Media / Quick Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-white font-medium">Media:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/shepherd-bit"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-[#C778DD] transition-colors p-1"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:titusaoluoch@gmail.com"
                aria-label="Email"
                className="hover:text-[#C778DD] transition-colors p-1"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-4 border border-[#ABB2BF]/30 hover:border-[#C778DD] hover:text-[#C778DD] text-[#ABB2BF] p-1.5 transition-colors cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice (matching screenshot) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#ABB2BF]/70 gap-2">
          <span>{portfolioInfo.footer.copyright}</span>
          <span className="font-mono text-[11px]">Designed with Fira Code &amp; Cyber Wireframe Aesthetics</span>
        </div>

      </div>
    </footer>
  );
}
