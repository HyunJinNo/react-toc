import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/heading.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  deps: { neverBundle: ["react", "react-dom"] },
});
