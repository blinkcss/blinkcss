import { baseConfigVite, defineConfig } from "../../@tools/vite";

const config = defineConfig({
  ...baseConfigVite,
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },
    minify: true,
    rollupOptions: {
      treeshake: true,
    },
  },
});

export default config;
