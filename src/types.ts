export type ProjectCategory =
  | 'All'
  | 'Reels & Shorts'
  | 'YouTube Videos'
  | 'Gaming Videos'
  | 'Cinematic Edits'
  | 'Commercial Projects'
  | 'Motion Graphics'
  | 'Color Grading'
  | 'Music Videos'
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
  youtubeUrl?: string;
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

export type FAQCategory = 'All' | 'Booking & Rates' | 'Turnaround Times' | 'Editing & Revisions';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking & Rates' | 'Turnaround Times' | 'Editing & Revisions';
  iconName?: string;
  highlights?: string[];
}

export interface YouTubeVideoItem {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  date: string;
  duration: string;
  views: string;
  category: string;
  isShort?: boolean;
  isPopular?: boolean;
  isLatest?: boolean;
  tags?: string[];
}

export interface InstagramPostItem {
  id: string;
  postUrl: string;
  caption: string;
  thumbnailUrl: string;
  type: 'reel' | 'post';
  likes: string;
  comments: string;
  views?: string;
  date: string;
}

export interface FacebookPostItem {
  id: string;
  postUrl: string;
  content: string;
  date: string;
  likes: string;
  shares: string;
  comments: string;
  mediaUrl?: string;
}

export type BlogCategory =
  | 'All'
  | 'Video Editing Tips'
  | 'YouTube Growth Tips'
  | 'Behind The Scenes'
  | 'Editing Tutorials'
  | 'Creator Journey'
  | 'Video Trends';

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  keywords: string[];
  tags: string[];
}
