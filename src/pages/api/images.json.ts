import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export const GET: APIRoute = async () => {
  console.log('🔍 Consultando Cloudinary...');
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      // COMENTA O ELIMINA EL PREFIJO si las imágenes están en la raíz
      // prefix: 'retro-os/', 
      max_results: 100,
    });

    const images = result.resources.map((r: any) => ({
      url: r.secure_url,
      // Usamos el public_id completo si no hay carpeta
      filename: r.public_id, 
      format: r.format,
    }));

    // IMPORTANTE: Agregar cabeceras para evitar que el navegador guarde una respuesta vacía en caché
    return new Response(JSON.stringify(images), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (err: any) {
    console.error('❌ Error de Cloudinary:', err.message);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};