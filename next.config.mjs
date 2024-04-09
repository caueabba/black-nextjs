/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['store.storeimages.cdn-apple.com'],
//   },
// }

// export default nextConfig;


const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
        port: '',
      },
    ],
  },
}

export default nextConfig