// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const locales = ['ar', 'de', 'en', 'es', 'fr', 'it', 'ja', 'nl', 'pl', 'pt', 'zh-CN'];

export default defineConfig({
  site: 'https://getvoq.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          ar: 'ar', de: 'de', en: 'en', es: 'es', fr: 'fr',
          it: 'it', ja: 'ja', nl: 'nl', pl: 'pl', pt: 'pt', 'zh-CN': 'zh-CN',
        },
      },
    }),
  ],
});
