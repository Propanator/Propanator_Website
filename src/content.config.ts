import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    // Controls display order in the timeline — lower numbers appear first.
    order: z.number(),
    // Featured projects also show up in the homepage card fan and the
    // bouncing bubbles on the contact page. Set false to keep a project
    // on the projects page only (e.g. while its image is still a placeholder).
    featured: z.boolean().default(true),
    // Optional meta line under the title on the card: studio · platform · period.
    studio: z.string().optional(),
    platform: z.string().optional(),
    period: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string(),
    summary: z.string(),
    details: z.string(),
    role: z.string(),
    stack: z.string(),
    // YouTube embed URL (same format as the homepage demo reel), shown in
    // the modal in place of the static image when present.
    video: z.string().optional(),
    // Any number of outbound links — trailer, press, docs, live build, repo.
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { projects };
