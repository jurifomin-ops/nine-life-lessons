import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Конфигурация Vite для сборки под GitHub Pages.
// Репозиторий: jurifomin-ops/nine-life-lessons
// Сайт будет доступен по адресу: https://jurifomin-ops.github.io/nine-life-lessons/
export default defineConfig({
  base: "/nine-life-lessons/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/github"),
    emptyOutDir: true,
  },
});
