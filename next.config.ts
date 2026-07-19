import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: "/checkout",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/my-account",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
