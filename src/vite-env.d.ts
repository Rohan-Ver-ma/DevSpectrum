/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NEWS_API_KEY: string;
    // Add more variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  