interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string; // Define other env variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
export const config = {
  backendUrl: import.meta.env.VITE_BACKEND_URL,
};
