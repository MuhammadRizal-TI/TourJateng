/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        hostname: 'i.ibb.co.com',
      },
      {
        hostname: 'mediaim.expedia.com'
      }
    ],
  },
};

module.exports = nextConfig;