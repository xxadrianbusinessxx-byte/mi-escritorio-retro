import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export const GET: APIRoute = async () => {
  console.log('🔍 Consultando Cloudinary...');
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'retro-os/',        // Si no pusiste folder, borra esta línea o déjala como ''
      max_results: 100,
    });
    const images = result.resources.map((r: any) => ({
      url: r.secure_url,
      filename: r.public_id.replace('retro-os/', ''),
      format: r.format,
    }));
    return new Response(JSON.stringify(images), { status: 200 });
  } catch (err: any) {
    console.error('❌ Error de Cloudinary:', err.message);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};