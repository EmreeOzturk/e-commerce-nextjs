/** @type {import('next').NextConfig} */
const nextConfig = {
  //unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
