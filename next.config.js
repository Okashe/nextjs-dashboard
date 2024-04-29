/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'tse3.mm.bing.net',
          },
        ],
    },
};


module.exports = nextConfig;
