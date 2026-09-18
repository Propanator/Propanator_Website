import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://propanator.com',
  integrations: [
    sitemap({
      // Keep the parked/dev-only pages (they redirect home in the build) and
      // the 404 page out of what we hand to search engines.
      filter: (page) => !/\/(ai|angled-test|scroll-test|scroll-motion|scroll-debug|404)\/?$/.test(page),
    }),
  ],
});
