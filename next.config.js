/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export if you're using next/image
  }
};

module.exports = nextConfig;
