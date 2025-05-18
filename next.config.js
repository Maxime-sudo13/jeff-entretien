/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Ajoutez d'autres sources d'images si nécessaire
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, // 60 secondes - durée minimale de cache
  },
  // Options recommandées pour la production :
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  compress: true,
  productionBrowserSourceMaps: false, // À activer seulement pour le débogage
};

module.exports = nextConfig;