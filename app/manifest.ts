import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jeff Entretien | Entretien et création paysagère',
    short_name: 'Jeff Entretien',
    description: 'Entreprise d\'entretien de parcs et jardins, aménagement paysager, pose de clôture et bien plus en région de Marville.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0A5D36',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}