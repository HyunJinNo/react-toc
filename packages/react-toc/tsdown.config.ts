import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/heading.ts"],
  format: ["esm", "cjs"],
  outDir: "./dist",
  dts: true,
  clean: true,
  treeshake: true,
  minify: true,
  css: {
    minify: true,
  },
  deps: { neverBundle: ["react", "react-dom"] },
});
