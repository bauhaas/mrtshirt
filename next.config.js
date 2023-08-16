/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gatherer.wizards.com"], // Replace 'your-image-host.com' with your actual image host domain
  },
};

module.exports = nextConfig;
