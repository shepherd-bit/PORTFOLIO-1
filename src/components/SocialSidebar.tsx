import { Github, Disc as Discord, Mail } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

interface SocialSidebarProps {
  onEmailClick?: () => void;
  onDiscordClick?: () => void;
}

export function SocialSidebar({ onEmailClick, onDiscordClick }: SocialSidebarProps) {
  return (
    <aside 
      className="hidden md:flex fixed left-6 top-0 z-40 flex-col items-center gap-3 select-none"
      aria-label="Social links bar"
    >
      {/* Top vertical connecting line */}
      <div className="w-[1px] h-36 bg-[#ABB2BF] opacity-70" />

      {/* Social Icons */}
      <div className="flex flex-col gap-3.5 items-center text-[#ABB2BF]">
        <a
          href="https://github.com/titusaoluoch"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-[#C778DD] hover:scale-110 transition-all p-1"
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>

        <button
          onClick={onDiscordClick}
          aria-label="Discord: !Elias#3519"
          className="hover:text-[#C778DD] hover:scale-110 transition-all p-1 cursor-pointer"
          title={`Discord: ${portfolioInfo.contacts.discord}`}
        >
          <Discord className="w-5 h-5" />
        </button>

        <button
          onClick={onEmailClick}
          aria-label="Email Titus"
          className="hover:text-[#C778DD] hover:scale-110 transition-all p-1 cursor-pointer"
          title={`Email: ${portfolioInfo.contacts.primaryEmail}`}
        >
          <Mail className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
