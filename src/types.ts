export type ProjectCategory =
  | 'All'
  | 'Reels & Shorts'
  | 'YouTube Videos'
  | 'Gaming Edits'
  | 'Cinematic Videos'
  | 'Vlogs';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  videoUrl?: string;
  beforeGradingUrl?: string;
  afterGradingUrl?: string;
  client?: string;
  duration?: string;
  fps?: string;
  resolution?: string;
  software: string[];
  metrics?: {
    views?: string;
    retention?: string;
    engagement?: string;
  };
  featured?: boolean;
}

export interface CreatorStat {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  turnaround: string;
  idealFor: string;
  iconName: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  service: string;
  footageLink: string;
  budget: string;
  timeline: string;
  message: string;
}
