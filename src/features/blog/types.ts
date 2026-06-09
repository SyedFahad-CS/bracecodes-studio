import { SanityImage, SanitySlug } from '@/shared/types/common';

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
