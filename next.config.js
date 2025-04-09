/** @type {import('next').NextConfig} */

// Check if we're in production (GitHub Pages deployment)
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig; 
