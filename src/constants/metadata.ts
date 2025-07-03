import type { Metadata, Viewport } from 'next';

const TITLE = 'Rebalanceei - Rebalanceamento de Carteira de Investimentos';
const DESCRIPTION =
  'Quer rebalancear sua carteira de investimentos e acompanhar a rentabilidade das sua ações? Rebalanceei é uma ferramenta que te ajuda a fazer isso de forma simples e rápida.';
const IMAGE =
  'https://res.cloudinary.com/apinodeteste/image/upload/v1620255748/Rebalanceei/rebalanceei-banner_efatae.png';

export const METADATA: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://rebalanceei-dashboard.vercel.app',
    siteName: TITLE,
    images: [
      {
        url: IMAGE,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: IMAGE,
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  keywords: [
    'rebalanceamento',
    'carteira de investimentos',
    'investimentos',
    'ações',
    'finanças pessoais',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: TITLE,
    statusBarStyle: 'default',
    startupImage: [
      {
        url: '/assets/icons/icon-192x192.png',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
      },
      {
        url: '/assets/icons/icon-192x192.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
      },
      {
        url: '/assets/icons/icon-192x192.png',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
};

export const VIEWPORT: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#000',
  width: 'device-width',
};
