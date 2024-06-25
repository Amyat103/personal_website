import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://amyat103.github.io/personal_website',
  base: '/personal_website/',
  integrations: [mdx(), sitemap(), tailwind()],
  build: {
    outDir: 'docs',
  },
});
