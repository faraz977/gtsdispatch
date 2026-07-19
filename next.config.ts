import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
