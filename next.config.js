/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },

  // i18n: {
  //   locales: ["default", "/", ""],
  //   defaultLocale: "default",
  //   localeDetection: true,
  // },
  // trailingSlash: true,

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
