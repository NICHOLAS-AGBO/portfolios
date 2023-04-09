/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  images:{
    dangerouslyAllowSVG: true
  }
}

module.exports = nextConfig
