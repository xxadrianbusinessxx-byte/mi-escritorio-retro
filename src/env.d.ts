/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly CLOUDINARY_CLOUD_NAME: string;
    readonly CLOUDINARY_API_KEY: string;
    readonly CLOUDINARY_API_SECRET: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }