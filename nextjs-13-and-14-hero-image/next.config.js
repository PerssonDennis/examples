/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.perssondennis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
