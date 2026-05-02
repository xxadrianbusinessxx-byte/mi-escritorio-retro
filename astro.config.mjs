import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // <--- Asegúrate que diga /serverless

export default defineConfig({
  output: 'server', // Esto es vital para que genere el entry.mjs
  adapter: vercel(),
  integrations: [tailwind()],
});