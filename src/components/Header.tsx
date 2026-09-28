import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

interface HeaderProps {
  onResumeClick: () => void;
}

export function Header({ onResumeClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: '#Home', href: '#home', id: 'home' },
    { label: '#About-Me', href: '#about-me', id: 'about-me' },
    { label: '#Projects', href: '#projects', id: 'projects' },
    { label: '#Skills', href: '#skills', id: 'skills' },
    { label: '#Experience', href: '#experience', id: 'experience' },
    { label: '#Contacts', href: '#contacts', id: 'contacts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#282C33]/90 backdrop-blur-md border-b border-[#ABB2BF]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Titus Home"
        >
          {/* Logo symbol: Geometric diamond/code icon */}
          <div className="w-5 h-5 border-2 border-[#C778DD] rotate-45 flex items-center justify-center group-hover:bg-[#C778DD]/20 transition-all duration-300">
            <div className="w-1.5 h-1.5 bg-white" />
          </div>
          <span className="font-bold text-white text-lg tracking-wide group-hover:text-[#C778DD] transition-colors">
            {portfolioInfo.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-white font-medium border-b-2 border-[#C778DD]'
                    : 'text-[#ABB2BF] hover:text-white'
                }`}
              >
                <span className="text-[#C778DD]">#</span>
                <span>{item.label.replace('#', '')}</span>
              </a>
            );
          })}

          {/* Resume Action */}
          <button
            onClick={onResumeClick}
            className="flex items-center gap-1.5 text-sm text-[#ABB2BF] hover:text-[#C778DD] transition-colors px-2 py-1 border border-transparent hover:border-[#C778DD]/40 cursor-pointer"
          >
            <span className="text-[#C778DD]">#</span>
            <span>Resume</span>
            <FileText className="w-3.5 h-3.5 opacity-70" />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onResumeClick}
            className="text-xs text-[#ABB2BF] border border-[#ABB2BF]/40 px-2.5 py-1.5 hover:text-white hover:border-[#C778DD]"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#ABB2BF] hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#282C33] border-b border-[#ABB2BF]/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#ABB2BF] hover:text-white transition-colors flex items-center gap-2 py-1"
              >
                <span className="text-[#C778DD]">#</span>
                <span>{item.label.replace('#', '')}</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="text-left text-[#ABB2BF] hover:text-[#C778DD] transition-colors flex items-center gap-2 py-1"
            >
              <span className="text-[#C778DD]">#</span>
              <span>Resume (PDF View)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
