import { defineConfig } from "vite";
import vitePluginDts from "vite-plugin-dts";

export const baseConfigVite = defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },
    minify: true,
    sourcemap: true,
  },
  plugins: [vitePluginDts()],
});
