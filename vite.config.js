import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const DEFAULT_VITE_PORT = 5173;

  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT) || DEFAULT_VITE_PORT,
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
