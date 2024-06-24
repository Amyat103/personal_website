import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Amyat103.github.io/personal_website/',
  base: '/personal_website/',
  outDir: './docs',
  integrations: [mdx(), sitemap(), tailwind()],
});
