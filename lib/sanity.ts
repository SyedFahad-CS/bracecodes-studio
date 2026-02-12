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
