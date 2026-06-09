import { SanityImage, SanitySlug } from '@/shared/types/common'; // We will put SanityImage, SanitySlug in shared common types, or define them here.

export interface ProjectItem {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  image: string;
  description: string;
  category: 'Web' | 'Mobile' | 'Enterprise' | 'Design';
  videoUrl?: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  stack?: string[];
  gallery?: string[];
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: SanitySlug;
  client: string;
  tags: string[];
  mainImage: SanityImage;
  description: string;
  category: 'Web' | 'Mobile' | 'Enterprise' | 'Design';
  videoUrl?: string;
}

export interface SanityProjectFull extends SanityProject {
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  stack?: string[];
  gallery?: SanityImage[];
  isCaseStudy?: boolean;
  stats?: string[];
}

export interface SanityCaseStudy extends SanityProject {
  stats?: string[];
}
