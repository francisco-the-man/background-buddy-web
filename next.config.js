/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/background-buddy-web',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/background-buddy-web/',
};

module.exports = nextConfig; 