import 'piccolore';
import { n as decodeKey } from './chunks/astro/server_DA6TaOPd.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CdS4EAln.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/URINDOWS/Desktop/mi-escritorio-retro/","cacheDir":"file:///C:/Users/URINDOWS/Desktop/mi-escritorio-retro/node_modules/.astro/","outDir":"file:///C:/Users/URINDOWS/Desktop/mi-escritorio-retro/dist/","srcDir":"file:///C:/Users/URINDOWS/Desktop/mi-escritorio-retro/src/","publicDir":"file:///C:/Users/URINDOWS/Desktop/mi-escritorio-retro/public/","buildClientDir":"file:///C:/Users/URINDOWS/Desktop/mi-escritorio-retro/dist/client/","buildServerDir":"file:///C:/Users/URINDOWS/Desktop/mi-escritorio-retro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/images.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/images\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"images.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/images.json.ts","pathname":"/api/images.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/upload.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/upload\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"upload.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/upload.json.ts","pathname":"/api/upload.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.eBduxt54.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/URINDOWS/Desktop/mi-escritorio-retro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/images.json@_@ts":"pages/api/images.json.astro.mjs","\u0000@astro-page:src/pages/api/upload.json@_@ts":"pages/api/upload.json.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_jXG0ZcuC.mjs","C:/Users/URINDOWS/Desktop/mi-escritorio-retro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_y_8rBF4Y.mjs","C:/Users/URINDOWS/Desktop/mi-escritorio-retro/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.B3bRYR-h.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/URINDOWS/Desktop/mi-escritorio-retro/src/pages/index.astro?astro&type=script&index=0&lang.ts","let s=[];async function a(){try{const n=await fetch(\"/api/images.json\");if(!n.ok)throw new Error(\"Error al cargar imágenes\");const e=await n.json();s=e,i(e),document.getElementById(\"image-count\").innerText=e.length}catch(n){console.error(n);const e=document.getElementById(\"gallery\");e&&(e.innerHTML=`\n            <div class=\"col-span-full flex flex-col items-center justify-center py-20 text-red-500\">\n              <span class=\"text-6xl mb-4\">⚠️</span>\n              <p class=\"text-xl italic\">Error al conectar con el servidor</p>\n              <p class=\"text-sm\">¿Has configurado las variables de entorno y los endpoints?</p>\n            </div>\n          `)}}function i(n){const e=document.getElementById(\"gallery\");if(e){if(n.length===0){e.innerHTML=`\n          <div class=\"col-span-full flex flex-col items-center justify-center py-20 text-gray-400 opacity-60\">\n            <span class=\"text-6xl mb-4\">🚫</span>\n            <p class=\"text-xl italic\">No hay imágenes en la nube</p>\n            <p class=\"text-sm\">Sube tu primer archivo .jpg o .png</p>\n          </div>\n        `;return}e.innerHTML=n.map(t=>`\n        <div class=\"group cursor-pointer\">\n          <div class=\"win-outset p-1 bg-[--win-gray] group-hover:bg-pink-100 transition-colors\">\n            <img \n              src=\"${t.url}\" \n              alt=\"${t.filename}\"\n              class=\"w-full aspect-square object-cover grayscale group-hover:grayscale-0 border border-gray-400\"\n            />\n          </div>\n          <p class=\"text-[12px] mt-1 text-center truncate text-gray-600 font-bold uppercase\">\n            ${(t.filename||\"sin nombre\").substring(0,20)}\n          </p>\n        </div>\n      `).join(\"\")}}async function c(n){if(!n)return;const e=new FormData;e.append(\"file\",n);const t=document.getElementById(\"upload-btn\"),l=t?.innerHTML;t&&(t.innerHTML=\"⏳ SUBIENDO...\",t.disabled=!0);try{const r=await fetch(\"/api/upload.json\",{method:\"POST\",body:e});if(r.ok)a();else{const o=await r.json();alert(\"Error al subir: \"+(o.error||\"desconocido\"))}}catch(r){console.error(r),alert(\"Error de red al subir la imagen\")}finally{t&&(t.innerHTML=l,t.disabled=!1)}}function d(){const n=document.getElementById(\"upload-btn\"),e=document.getElementById(\"file-input\");n&&e&&(n.addEventListener(\"click\",()=>e.click()),e.addEventListener(\"change\",t=>{t.target.files&&t.target.files.length&&c(t.target.files[0]),e.value=\"\"}))}document.addEventListener(\"DOMContentLoaded\",()=>{a(),d()});"]],"assets":["/_astro/index.eBduxt54.css"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"wOumbNPHQTxMobzt6uV0kQAFDD9/91c3/3bN0iXHAto="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
