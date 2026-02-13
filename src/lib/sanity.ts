import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Image URL helper
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const allPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    author,
    authorRole,
    "date": publishedAt,
    readTime
  }
`;

export const postBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    author,
    authorRole,
    "date": publishedAt,
    readTime,
    content
  }
`;

// ── Project Queries ──

export const allProjectsQuery = `
  *[_type == "project"] | order(title asc) {
    _id,
    title,
    slug,
    client,
    tags,
    mainImage,
    description,
    category,
    videoUrl
  }
`;

export const featuredProjectsQuery = `
  *[_type == "project"] | order(_createdAt desc) [0...6] {
    _id,
    title,
    slug,
    client,
    tags,
    mainImage,
    description,
    category,
    videoUrl
  }
`;

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    tags,
    mainImage,
    description,
    category,
    videoUrl,
    fullDescription,
    challenge,
    solution,
    stack,
    gallery,
    isCaseStudy,
    stats
  }
`;

export const caseStudiesQuery = `
  *[_type == "project" && isCaseStudy == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    client,
    tags,
    mainImage,
    description,
    category,
    stats
  }
`;
