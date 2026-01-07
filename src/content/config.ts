import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        slug: z.string().optional(), // Explicit slug (optional for legacy)
        layout: z.string().optional(), // Layout path
        date: z.coerce.date().optional(), // Project date
        showcase: z.boolean().default(false), // Replaces is_featured
        category: z.string(),
        type: z.enum(['enterprise', 'tooling', 'labs', 'industry', 'tools', 'demos', 'production', 'rnd']), // Hybrid for migration
        tech: z.array(z.string()),
        metrics: z.union([ // Metrics can be object (new) or array (legacy)
            z.object({
                downloads: z.string().optional(),
                rating: z.string().optional(),
                assets: z.string().optional(),
                users: z.string().optional(),
            }).catchall(z.string()),
            z.array(z.string())
        ]).optional(),

        // Media
        cover_image: z.string().optional(),
        backers_image: z.string().optional(),
        backers: z.array(z.string()).optional(), // Lista de logos de patrocinadores
        video_url: z.string().optional(),
        gallery: z.array(z.string()).optional(),
        store_links: z.object({
            android: z.string().optional(),
            ios: z.string().optional(),
            steam: z.string().optional(),
            itch: z.string().optional(),
            web: z.string().optional(),
        }).optional(),

        // Content
        i18n: z.object({
            en: z.object({
                title: z.string(),
                subtitle: z.string().optional(),
                description: z.string(),
                overview_title: z.string().optional(),
                overview_text: z.string().optional(),
                my_role_title: z.string().optional(),
                my_role_summary: z.string().optional(),
                key_features_title: z.string().optional(),
                key_features: z.array(z.object({
                    title: z.string(),
                    text: z.string(),
                })).optional(),
            }).optional(),
            pt: z.object({
                title: z.string(),
                subtitle: z.string().optional(),
                description: z.string(),
                overview_title: z.string().optional(),
                overview_text: z.string().optional(),
                my_role_title: z.string().optional(),
                my_role_summary: z.string().optional(),
                key_features_title: z.string().optional(),
                key_features: z.array(z.object({
                    title: z.string(),
                    text: z.string(),
                })).optional(),
            }).optional(),
        }).optional(),

        // Legacy fields (optional to prevent build break during migration)
        title: z.string().optional(),
        desc: z.string().optional(),
        image: z.string().optional(),
        sortOrder: z.number().default(100),
    }),
});

const experienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        company: z.string(),
        role: z.string(),
        period: z.string(),
        startDate: z.date(),
        tech: z.array(z.string()),
        responsibilities: z.array(z.string()).optional(),
        logo: z.string().optional(),
    }),
});

const sectionsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
    }),
});

export const collections = {
    'projects': projectsCollection,
    'experience': experienceCollection,
    'sections': sectionsCollection,
};
