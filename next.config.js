/** @type {import('next').NextConfig} */
const nextConfig = {
  // Azure Static Web Apps handles Next.js SSR automatically
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
