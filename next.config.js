/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
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
  i18n: {
    locales: ["default", "/", ""],
    defaultLocale: "default",
    localeDetection: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
