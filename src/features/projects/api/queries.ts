// GROQ Queries for Projects & Case Studies

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
