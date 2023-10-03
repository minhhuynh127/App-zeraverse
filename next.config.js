/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
    experimental: {
      appDir: true,
    },
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
