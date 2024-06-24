import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site:
    process.env.NODE_ENV === 'production'
      ? 'https://Amyat103.github.io/personal_website/'
      : 'http://localhost:3000',
  base: process.env.NODE_ENV === 'production' ? '/personal_website/' : '/',
  outDir: './docs',
  integrations: [mdx(), sitemap(), tailwind()],
});
