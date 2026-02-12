import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alt Text' },
            ],
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            description: 'Shown on project cards.',
            validation: (Rule) => Rule.required().max(300),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Web', value: 'Web' },
                    { title: 'Mobile', value: 'Mobile' },
                    { title: 'Enterprise', value: 'Enterprise' },
                    { title: 'Design', value: 'Design' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            description: 'Optional hover preview video.',
        }),
        defineField({
            name: 'fullDescription',
            title: 'Full Description',
            type: 'text',
            rows: 5,
            description: 'Extended description for the detail page.',
        }),
        defineField({
            name: 'challenge',
            title: 'The Challenge',
            type: 'text',
            rows: 5,
        }),
        defineField({
            name: 'solution',
            title: 'The Solution',
            type: 'text',
            rows: 5,
        }),
        defineField({
            name: 'stack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        { name: 'alt', type: 'string', title: 'Alt Text' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'isCaseStudy',
            title: 'Feature as Case Study',
            type: 'boolean',
            description: 'Show this project on the /case-studies page.',
            initialValue: false,
        }),
        defineField({
            name: 'stats',
            title: 'Key Stats',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description: 'e.g. "40% Retention", "2x Speed"',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'client',
            media: 'mainImage',
        },
    },
    orderings: [
        {
            title: 'Title A-Z',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }],
        },
    ],
});
