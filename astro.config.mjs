import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // En v6, 'output: server' es clave para que Vercel use funciones serverless
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind()],
});