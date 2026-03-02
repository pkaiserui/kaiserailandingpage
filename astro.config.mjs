// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kaiserai.github.io',
  base: '/kaiserAILandingPage',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});