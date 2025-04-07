/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/background-buddy-web',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 