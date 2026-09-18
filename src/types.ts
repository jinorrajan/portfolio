export type NavTab =
  | 'home'
  | 'about'
  | 'services'
  | 'projects'
  | 'case-study'
  | 'experience'
  | 'process'
  | 'contact';

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  categoryKey: 'mobile' | 'backend' | 'fullstack' | 'enterprise';
  date: string;
  duration: string;
  role: string;
  statusBadge: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  keyHighlight: {
    title: string;
    description: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  topology?: {
    title: string;
    status: string;
    nodes: { name: string; subtitle: string; highlight?: boolean }[];
    annotation: string;
  };
}

export interface ServiceItem {
  id: string;
  specCode: string;
  title: string;
  emoji: string;
  accentColor: string;
  description: string;
  subLabel: string;
  index: string;
  deliverables: string[];
  bestFor: string;
  typicalTimeline: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}
