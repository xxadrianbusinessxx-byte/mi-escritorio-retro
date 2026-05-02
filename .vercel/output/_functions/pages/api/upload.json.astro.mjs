import { v2 } from 'cloudinary';
export { renderers } from '../../renderers.mjs';

v2.config({
  cloud_name: "dbkeikl8i",
  api_key: "131326644425598",
  api_secret: "RJyAgmHyqlQhvSaDSCboMaPAxVY"
});
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) throw new Error("No se recibió ningún archivo");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const result = await new Promise((resolve, reject) => {
      v2.uploader.upload_stream(
        {
          folder: "retro-os",
          upload_preset: "retro_uploads"
        },
        (error, result2) => {
          if (error) {
            reject(error);
            return;
          }
          if (!result2) {
            reject(new Error("Cloudinary no devolvio resultado"));
            return;
          }
          resolve(result2);
        }
      ).end(buffer);
    });
    return new Response(JSON.stringify({ success: true, url: result.secure_url }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error al subir la imagen" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
