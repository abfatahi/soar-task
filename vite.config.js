import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
  const DEFAULT_APP_PORT = 3000;

  return {
    base: "/",
    build: { outDir: "dist" },
    plugins: [react(), svgr({ svgrOptions: { icon: true } })],
    server: {
      port: DEFAULT_APP_PORT,
      open: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@pages": path.resolve(__dirname, "./src/pages"),
      },
    },
  };
});
