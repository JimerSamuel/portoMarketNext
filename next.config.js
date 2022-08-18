/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'vuzoon.com', 'www.complementosdelcafe.com', 's3.ap-south-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
