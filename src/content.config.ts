// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const proofOfExistence = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./src/collections/proof-of-existence"}),
    schema: z.object({
        title: z.string(),
        arc: z.number(),
        chapter: z.number(),
        authorsNotes: z.string().optional(),
        warnings: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional(),
        pubDate: z.date(),
        lastEdit: z.date()
    })
});

const poeArcs = defineCollection({
    loader: file("src/collections/metadata/poe-arcs.json"),
    schema: z.object({
        id: z.number(),
        title: z.string()
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { proofOfExistence, poeArcs };