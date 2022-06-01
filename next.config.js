/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.jp"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
