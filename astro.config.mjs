/** @format */

import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: true,
      apiOptions: {}, // storyblok-js-client options
      components: {
        page: 'storyblok/Page',
        hero: 'storyblok/Hero',
        text_image_section: 'storyblok/TextImageSection',
        config: 'storyblok/Config',
        teaser: 'storyblok/Teaser',
        'popular-articles': 'storyblok/PopularArticles',
        'all-articles': 'storyblok/AllArticles',
        article: 'storyblok/Article',
      },
      componentsDir: 'src',
      enableFallbackComponent: false,
      customFallbackComponent: '',
      useCustomApi: false,
      apiOptions: {
        region: 'eu',
      },
    }),
  ],

  output: 'server',
  adapter: vercel(),
});
