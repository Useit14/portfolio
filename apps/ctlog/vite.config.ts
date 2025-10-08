import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    assetsDir: "public",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://habithub.ru:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      client: ".",
    },
  },
  assetsInclude: ["**/*.gltf", "**/*.{json}"],
});
