/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  assetPrefix = '/background-buddy-web'
  basePath = '/background-buddy-web'
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: assetPrefix, 
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig; 