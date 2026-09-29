import { Github, Mail } from 'lucide-react';

function PeerlistIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/shepherd-bit',
    icon: Github,
  },
  {
    name: 'Peerlist',
    href: 'https://peerlist.io/shepherd',
    icon: PeerlistIcon,
  },
  {
    name: 'Email',
    href: 'mailto:titusaoluoch@gmail.com',
    icon: Mail,
  },
];

export function SocialSidebar() {
  return (
    <aside
      className="hidden md:flex fixed left-6 top-0 z-40 flex-col items-center gap-3 select-none"
      aria-label="Social links bar"
    >
      {/* Top vertical connecting line */}
      <div className="w-[1px] h-36 bg-[#ABB2BF] opacity-70" />

      {/* Social Icons */}
      <div className="flex flex-col gap-3.5 items-center text-[#ABB2BF]">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="group relative hover:text-[#C778DD] hover:scale-110 transition-all p-1"
            >
              <Icon className="w-5 h-5" />
              {/* Tooltip */}
              <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded border border-[#C778DD]/40 bg-[#21252B] px-2.5 py-1 text-xs text-[#ABB2BF] opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
