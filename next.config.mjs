/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**',
      },
      // Add other hosts as needed
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optional: Add other Next.js config options here
  // transpilePackages: ['@heroui/react'],
  // optimizeFonts: false,
};

export default nextConfig;