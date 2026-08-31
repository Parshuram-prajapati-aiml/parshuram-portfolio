export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  tag: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  iconName: string;
  color: string;
  tag: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  badgeColor: string;
  bgGradient: string;
  borderColor: string;
  iconName: string;
  skills: SkillItem[];
  highlight: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: string; // '01', '02'
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: 'AI / MACHINE LEARNING' | 'WEB DEVELOPMENT' | string;
  techTags: string[];
  techStack: string[];
  bgTint: string;
  accentColor: string;
  githubUrl: string;
  demoUrl?: string;
  metrics?: string;
  featured: boolean;
  features: string[];
  imageUrl: string;
  simulationType?: 'snap-class' | 'fatima-school' | string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  category: 'Hackathon' | 'AI & Hackathon' | 'AI & Machine Learning' | 'Organizing & Leadership' | string;
  achievement?: string;
  skills: string[];
  accentColor: string;
  badgeIcon: string;
  previewGradient: string;
  verificationUrl?: string;
  description: string;
  sealText?: string;
  imageUrl: string;
  certificateType?: 'ibm-skillsbuild' | 'hackaura' | 'ai-arena-2' | 'hackyuha' | 'standard';
  recipientName?: string;
  institutionHeader?: string;
  subHeader?: string;
  signatories?: Array<{ role: string; name: string }>;
  eventDates?: string;
  planCode?: string;
  hashtag?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  period: string;
  title: string;
  organizationOrContext: string;
  category: 'Hackathon' | 'AI / ML' | 'Web Dev' | 'Milestone';
  description: string;
  tags: string[];
  icon: string;
  highlightBadge?: string;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: string;
  actionType: 'link' | 'email' | 'call' | 'copy';
  bgColor: string;
  textColor: string;
}
