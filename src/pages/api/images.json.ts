import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export const GET: APIRoute = async () => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'retro-os/',     // La carpeta que elegiste en el upload preset
      max_results: 100,
    });
    const images = result.resources.map((resource: any) => ({
      url: resource.secure_url,
      filename: resource.public_id.replace('retro-os/', ''),
      format: resource.format,
    }));
    return new Response(JSON.stringify(images), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'No se pudieron cargar las imágenes' }), { status: 500 });
  }
};