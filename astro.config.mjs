// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://voq-site.vercel.app',
  output: 'static',
  integrations: [sitemap()],
});
