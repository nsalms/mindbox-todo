/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mindbox-todo/",
  plugins: [react()],
  define: {
    APP_NAME: JSON.stringify(process.env.npm_package_name),
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/utils/test-setup.ts",
  },
});
