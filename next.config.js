/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    dangerouslyAllowSVG: true
  }
}

module.exports = nextConfig
