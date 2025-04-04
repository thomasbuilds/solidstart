import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: { preset: "node-server", compatibilityDate: "2025-03-30", baseURL: "/app", },
  vite: { plugins: [tailwindcss()] },
});
