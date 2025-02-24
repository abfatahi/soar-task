import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const DEFAULT_VITE_PORT = 5173;

  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT) || DEFAULT_VITE_PORT,
    },
  };
});
