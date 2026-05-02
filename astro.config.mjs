import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', 
  adapter: vercel({
    webAnalytics: { enabled: true },
    imagesConfig: { sizes: [640, 750, 828, 1080, 1200], domains: [], },
    // Forzamos que use la infraestructura estándar de Vercel
    functionPerRoute: false 
  }),
  integrations: [tailwind()],
});