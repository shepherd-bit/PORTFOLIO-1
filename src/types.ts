export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageText?: {
    badge: string;
    subBadge: string;
    features: string[];
  };
  liveUrl?: string;
  cachedUrl?: string;
  githubUrl?: string;
  featured: boolean;
  longDescription?: string;
  technologies?: string[];
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string[];
  technologies: string[];
}

export interface PricingTier {
  id: string;
  title: string;
  basePrice: number;
  deliveryTime: string;
  description: string;
  features: string[];
  recommendedFor: string;
}
