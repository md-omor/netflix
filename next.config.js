/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["rb.gy", "image.tmdb.org", "placehold.it"],
  },
};

module.exports = nextConfig;
