import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/": ["./content/**/*"],
    "/units/[slug]": ["./content/**/*"],
  },
};

export default nextConfig;
