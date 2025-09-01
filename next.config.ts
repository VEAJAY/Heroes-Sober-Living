import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // turbopack: {
  //   root: "C:\\Users\\vease\\OneDrive\\Documents\\heroes-sober-living",
  // },
  images: {
    remotePatterns: [{ hostname: "" }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
