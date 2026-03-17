import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withNextra = nextra({
  // ... other Nextra config options
});

export default withNextra(nextConfig);
