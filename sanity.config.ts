import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
    name: 'bracecodes-studio',
    title: 'Bracecodes Studio CMS',

    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    basePath: '/studio',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
