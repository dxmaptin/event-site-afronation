/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.myeasol.net',
        pathname: '/rails/active_storage/**',
      },
    ],
  },
}

module.exports = nextConfig 