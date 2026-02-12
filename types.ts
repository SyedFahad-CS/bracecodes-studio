import { LucideIcon } from 'lucide-react';

// export type View = 'home' | 'work' | 'services' | 'contact' | 'privacy' | 'terms' | 'case-studies' | 'blog' | 'community' | 'mini-saas';

export interface NavItem {
  label: string;
  path: string;
  // view: View; // Deprecated
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  slug: string; // Unique identifier for routing
  title: string;
  client: string;
  tags: string[];
  image: string;
  description: string;
  category: 'Web' | 'Mobile' | 'Enterprise' | 'Design';
  videoUrl?: string; // Optional for hover preview

  // Extended details for Case Study page
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  stack?: string[]; // Detailed tech stack list
  gallery?: string[]; // Optional additional images
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  date: string;
  author: string;
  role: string;
  category: string;
  image: string;
  readTime: string;
}

// Sanity CMS Types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt: string;
  mainImage: SanityImage;
  category: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime?: string;
}

export interface SanityBlogPostFull extends SanityBlogPost {
  content: any[]; // Portable Text blocks
}