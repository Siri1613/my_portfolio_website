export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: 'full-time' | 'intern';
  responsibilities: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  image: string;
  category: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  field?: string;
}

export interface SoftSkill {
  name: string;
  icon: string;
}
