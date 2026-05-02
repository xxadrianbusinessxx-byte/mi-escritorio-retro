import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';

// Define qué campos te interesan del resultado
interface CloudinaryResult {
    secure_url: string;
    public_id: string;
    [key: string]: any; // Por si vienen más cosas
}

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    if (!file) throw new Error('No se recibió ningún archivo');

    // Convertir el File a Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Subir a Cloudinary usando el upload preset
    const result = await new Promise<CloudinaryResult>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'retro-os',
          upload_preset: import.meta.env.CLOUDINARY_UPLOAD_PRESET,
        },
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          if (!result) {
            reject(new Error('Cloudinary no devolvio resultado'));
            return;
          }

          resolve(result as CloudinaryResult);
        }
      ).end(buffer);
    });

    return new Response(JSON.stringify({ success: true, url: result.secure_url }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error al subir la imagen' }), { status: 500 });
  }
};