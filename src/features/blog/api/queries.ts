// GROQ Queries for Blog Feature

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
