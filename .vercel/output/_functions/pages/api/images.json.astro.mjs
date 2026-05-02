import { v2 } from 'cloudinary';
export { renderers } from '../../renderers.mjs';

v2.config({
  cloud_name: "dbkeikl8i",
  api_key: "131326644425598",
  api_secret: "RJyAgmHyqlQhvSaDSCboMaPAxVY"
});
const GET = async () => {
  console.log("🔍 Consultando Cloudinary...");
  try {
    const result = await v2.api.resources({
      type: "upload",
      prefix: "retro-os/",
      // Si no pusiste folder, borra esta línea o déjala como ''
      max_results: 100
    });
    const images = result.resources.map((r) => ({
      url: r.secure_url,
      filename: r.public_id.replace("retro-os/", ""),
      format: r.format
    }));
    return new Response(JSON.stringify(images), { status: 200 });
  } catch (err) {
    console.error("❌ Error de Cloudinary:", err.message);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
