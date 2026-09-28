import { Project, SkillCategory, ExperienceItem, PricingTier } from '../types';

export const portfolioInfo = {
  name: "Titus",
  role: "full Stack web developer",
  tagline: "Ready for Team or Solo Projects",
  guarantees: [
    "Performance & Speed",
    "SEO",
    "Top UX (Visual Appeal)",
    "Device responsiveness",
    "Scalability",
    "Security & Data Privacy",
    "Reliability & Uptime"
  ],
  currentStatus: "Currently working on Python backend frameworks",
  quote: "Look, AI can build stuff. But those ruthless industry level details is where I come in - Sign Me Up!!",
  quoteAuthor: "- Eng. Me",
  aboutMe: {
    salutation: "One for whoever is reading this:",
    paragraphs: [
      "Enrolled for a Bachelor of Science, Computer Science at The East African University in 2018. Spent 6 years studying, but missing exams (financial difficulties - most people in my country have them, no big deal).",
      "After 6 years, I left school without my graduation papers, because I hadn’t paid for most of my exams. Now I decided to make a name for myself in freelance world by building stuff that help people achieve their goals, and here I am. I am deeply committed to prove myself as a productive force."
    ],
    ctaText: "Thanks for Knowing Me - Click HERE for a Price ->"
  },
  contacts: {
    availability: "I’m am on my computer and phone 24/7 - Anytime and you will find me. Reach out for any Freelance opportunity, Full or Part-time On-Premise or Remote position. I am flexible if our negotiations go well",
    discord: "!Elias#3519",
    primaryEmail: "elias@elias.me",
    directEmail: "titusaoluoch@gmail.com",
    domainEmail: "elias@elias-dev.ml"
  },
  footer: {
    copyright: "© Copyright 2026. Made by Titus"
  }
};

export const projectsData: Project[] = [
  {
    id: "chertnodes",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    tags: ["HTML", "SCSS", "Python", "Flask"],
    imageText: {
      badge: "ChertNodes",
      subBadge: "Лучший майнкрафт хостинг",
      features: ["Дешево", "Мощно", "Легко"]
    },
    liveUrl: "https://chertnodes.example.org",
    cachedUrl: "https://web.archive.org",
    githubUrl: "https://github.com",
    featured: true,
    longDescription: "High-performance hosting management dashboard for game servers with real-time resource telemetry, automatic backups, and low-latency node provisioning.",
    technologies: ["Python", "Flask", "SCSS", "Docker", "Nginx", "HTML5"],
    highlights: [
      "Sub-millisecond server status ping checks",
      "Custom responsive dashboard with dark cyber UI",
      "Automated server provisioning via daemon socket"
    ]
  },
  {
    id: "disnake-bot",
    title: "Disnake Automation Engine",
    description: "Multi-tenant Discord bot framework & guild utilities",
    tags: ["Python", "Disnake", "SQLite", "AsyncIO"],
    imageText: {
      badge: "Disnake Engine",
      subBadge: "High-throughput async bot",
      features: ["Async", "Telemetry", "ModTools"]
    },
    liveUrl: "https://discord.com",
    githubUrl: "https://github.com",
    featured: true,
    longDescription: "An asynchronous community operations engine built with Python and Disnake. Manages automated verification, custom ticket systems, and database telemetry across 50+ active servers.",
    technologies: ["Python", "Disnake", "AsyncIO", "SQLite", "Redis"],
    highlights: [
      "Handles 25k+ events per minute with zero lag",
      "Dynamic slash commands and modal form builders",
      "Integrated SQLite/PostgreSQL caching layer"
    ]
  },
  {
    id: "api-backend",
    title: "PyBackend Microservice",
    description: "High-speed REST API & asynchronous job queue",
    tags: ["Python", "Flask", "PostgreSQL", "REST"],
    imageText: {
      badge: "PyBackend API",
      subBadge: "Scalable REST architecture",
      features: ["Postgres", "JWT Auth", "Celery"]
    },
    liveUrl: "https://api.example.org",
    cachedUrl: "https://api.example.org/docs",
    featured: true,
    longDescription: "Robust backend system with relational database schemas, JWT authentication, role-based access control, and asynchronous task execution queues.",
    technologies: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "Redis", "Docker"],
    highlights: [
      "Indexed relational queries under 20ms response time",
      "Comprehensive Swagger/OpenAPI interactive documentation",
      "Strict data privacy, encryption, and rate limiting"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "Lua", "Python"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools",
    skills: ["VSCode", "Neovim", "Linux", "Figma", "Arch", "Git", "Font Awesome"]
  },
  {
    title: "Other",
    skills: ["HTML", "CSS", "EJS", "SCSS", "REST"]
  },
  {
    title: "Frameworks",
    skills: ["React", "Vue", "Disnake", "Flask", "Express.js"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2024 - Present",
    role: "Full-Stack Freelance Engineer",
    organization: "Independent Practice",
    description: [
      "Architecting and delivering production-ready web applications, responsive client interfaces, and robust Python backend systems.",
      "Optimizing web assets for ultra-high Lighthouse scores: Sub-second load speeds, strict SEO semantics, and top UX fidelity.",
      "Contracting for both international clients and solo founders on team and standalone missions."
    ],
    technologies: ["Python", "Flask", "React", "TypeScript", "PostgreSQL", "SCSS", "Linux"]
  },
  {
    period: "2020 - 2024",
    role: "Bot Architect & Linux System Administrator",
    organization: "Community Open Source Projects",
    description: [
      "Developed high-concurrency bot engines utilizing Python, Disnake, and asynchronous event loops.",
      "Configured dedicated Linux/Arch servers with custom Nginx reverse proxies, SSL automation, and containerized processes.",
      "Engineered database migrations and schemas utilizing MongoDB and PostgreSQL."
    ],
    technologies: ["Python", "Disnake", "Linux (Arch)", "MongoDB", "PostgreSQL", "Docker", "Git"]
  },
  {
    period: "2018 - 2024",
    role: "BSc Computer Science Candidate",
    organization: "The East African University",
    description: [
      "Completed rigorous computer science curriculum covering object-oriented programming, data structures, algorithms, operating systems, and computer networks.",
      "Demonstrated persistent determination through financial adversity, translating academic knowledge into hands-on commercial software development."
    ],
    technologies: ["Algorithms", "Data Structures", "Computer Architecture", "Database Systems", "Networking"]
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: "quick-mvp",
    title: "Frontend Landing / Portfolio",
    basePrice: 150,
    deliveryTime: "3 - 5 Days",
    description: "High-impact, lightning-fast modern responsive website crafted with pixel-perfect attention to detail.",
    features: [
      "100% Responsive & mobile-tested layout",
      "Top UX visual appeal with smooth animations",
      "Semantic SEO optimization & meta tags",
      "Contact form with email dispatch",
      "1 month free deployment support"
    ],
    recommendedFor: "Portfolios, product teasers, creator homepages"
  },
  {
    id: "fullstack-app",
    title: "Full-Stack Web Application",
    basePrice: 400,
    deliveryTime: "1 - 2 Weeks",
    description: "Complete end-to-end application pairing a modern React/TypeScript frontend with a Python (Flask/FastAPI) backend.",
    features: [
      "Secure authentication & session handling",
      "Relational database (PostgreSQL/MongoDB)",
      "RESTful API endpoints with validation",
      "Admin/client dashboard interface",
      "Containerized Docker setup & deployment",
      "3 months maintenance & bug fixes"
    ],
    recommendedFor: "SaaS startups, business portals, client dashboards"
  },
  {
    id: "backend-bot",
    title: "Python Backend / Discord Bot",
    basePrice: 200,
    deliveryTime: "5 - 7 Days",
    description: "Specialized asynchronous Python engineering: automated Discord bots, scraping microservices, or custom API backends.",
    features: [
      "Disnake / Discord.py async architecture",
      "Automated commands, modals, buttons",
      "Database caching & persistent state",
      "Linux system daemon / 24-7 uptime setup",
      "Full source code & setup documentation"
    ],
    recommendedFor: "Community servers, data automation, microservices"
  }
];
