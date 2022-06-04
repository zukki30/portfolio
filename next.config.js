/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.jp", "images.microcms-assets.io"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
