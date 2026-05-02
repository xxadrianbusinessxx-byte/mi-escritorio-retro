import { c as createComponent } from './astro-component_LbKyy6XL.mjs';
import 'piccolore';
import { n as createRenderInstruction, o as renderHead, r as renderTemplate } from './entrypoint_DBXMGn5g.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Retro OS v1.0 🐬</title>${renderHead()}</head> <body class="min-h-screen overflow-hidden relative p-4 md:p-8"> <div class="crt-overlay"></div> <div class="absolute inset-0 opacity-25 pointer-events-none" style="background-image: radial-gradient(var(--hot-pink) 1.5px, transparent 1px); background-size: 25px 25px;"></div> <div class="window relative z-10 w-full max-w-3xl mx-auto bg-[--win-gray] win-outset shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"> <div class="bg-gradient-to-r from-[--hot-pink] to-[#ff69b4] px-2 py-1 flex justify-between items-center m-0.5"> <div class="flex items-center gap-2"> <span class="text-white font-bold tracking-widest text-xl drop-shadow-md">📁 SYSTEM_EXPLORER.EXE</span> </div> <div class="flex gap-1"> <button class="bg-[--win-gray] win-outset px-2 py-0.5 text-xs font-bold active:win-inset">_</button> <button class="bg-[--win-gray] win-outset px-2 py-0.5 text-xs font-bold active:win-inset">X</button> </div> </div> <div class="flex gap-4 px-4 py-1 text-sm border-b border-gray-400"> <span class="hover:underline cursor-pointer">File</span> <span class="hover:underline cursor-pointer">Edit</span> <span class="hover:underline cursor-pointer">View</span> <span class="hover:underline cursor-pointer">Help</span> </div> <div class="p-4"> <div class="bg-white win-inset p-4 min-h-[350px] overflow-y-auto max-h-[500px]"> <!-- Cabecera con botón de subida --> <div class="flex justify-between items-center mb-4 border-b border-gray-300 pb-2"> <h2 class="text-2xl text-[--hot-pink]">ÍNDICE DE RECURSOS VISUALES</h2> <button id="upload-btn" class="bg-[--win-gray] win-outset px-3 py-1 text-sm font-bold hover:bg-white active:win-inset transition-all">
📤 SUBIR IMAGEN
</button> <input type="file" id="file-input" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden"> </div> <!-- Galería dinámica --> <div id="gallery" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"> <div class="col-span-full text-center py-20">Cargando...</div> </div> </div> </div> <div class="win-inset mx-1 mb-1 px-2 py-0.5 text-sm flex justify-between bg-[--win-gray]"> <span><span id="image-count">0</span> objeto(s) detectado(s)</span> <span class="border-l border-gray-400 pl-2 text-pink-600 font-bold">AESTHETIC: STABLE</span> </div> </div> <div class="fixed bottom-6 right-6 w-72 bg-[--win-gray] win-outset shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] p-1 z-20"> <div class="bg-gray-700 text-white text-[12px] px-2 py-0.5 flex items-center gap-2"> <span class="animate-pulse">●</span> AUDIO_ENGINE.DLL
</div> <div class="p-3 bg-[#e0e0e0] win-inset flex flex-col gap-2"> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-[--hot-pink] border-2 border-white flex items-center justify-center shadow-inner"> <span class="text-white text-xl animate-bounce">♪</span> </div> <div class="overflow-hidden"> <p class="text-xs font-bold leading-none text-gray-800 truncate">REMIX_NINTENDO_CHILL.WAV</p> <p class="text-[10px] text-pink-500">Playing from Local Cloud...</p> </div> </div> <button onclick="window.open('https://www.youtube.com/watch?v=v6f67-8lUio')" class="w-full bg-[--win-gray] win-outset py-1 text-sm font-bold hover:bg-white active:win-inset transition-all">
► PLAY STREAM
</button> </div> </div> <div class="fixed top-8 left-8 flex flex-col gap-8 z-0"> <div class="flex flex-col items-center group cursor-pointer w-20"> <span class="text-4xl group-hover:scale-110 transition-transform">🗑️</span> <span class="text-xs bg-white/50 px-1 mt-1 text-pink-900">Papelera</span> </div> <div class="flex flex-col items-center group cursor-pointer w-20"> <span class="text-4xl group-hover:scale-110 transition-transform">🎮</span> <span class="text-xs bg-white/50 px-1 mt-1 text-pink-900">Juegos</span> </div> </div> ${renderScript($$result, "C:/Users/URINDOWS/Desktop/mi-escritorio-retro/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/URINDOWS/Desktop/mi-escritorio-retro/src/pages/index.astro", void 0);

const $$file = "C:/Users/URINDOWS/Desktop/mi-escritorio-retro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
