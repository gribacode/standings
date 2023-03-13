import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@/assets": "/src/assets",
      "@/blocks": "/src/components/blocks",
      "@/layout": "/src/components/layout",
      "@/ui": "/src/components/ui",
      "@/services": "/src/services",
      "@/utils": "/src/utils",
      "@/root": "/src/",
    },
  },
});
