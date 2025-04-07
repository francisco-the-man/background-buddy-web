/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Configure basePath if your site is not hosted at the root of the domain
  // basePath: '/background-buddy-web',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 