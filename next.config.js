/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/blog/intern",
        destination: "/html/intern.html"
      }
    ];
  }
};

module.exports = nextConfig;
