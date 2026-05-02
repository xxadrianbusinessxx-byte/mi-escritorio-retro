import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // Esto es vital para habilitar las funciones en Vercel
  adapter: vercel(),
  integrations: [tailwind()],
});