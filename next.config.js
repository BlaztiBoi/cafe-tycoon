/**
 * @type {import('next').NextConfig}
 *
 * Next.js configuration enabling the experimental App Router.
 * React strict mode is enabled to help catch common bugs.
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
