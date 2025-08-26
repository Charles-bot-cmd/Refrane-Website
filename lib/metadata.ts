import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

export const defaultMetadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: [
    'AI automation',
    'business solutions', 
    'workflow optimization',
    'enterprise technology',
    'artificial intelligence',
    'business automation',
    'productivity tools',
    'digital transformation'
  ],
  authors: [{ name: 'Refrane Team', url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - AI Business Solutions`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@refrane',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  other: {
    'msapplication-TileColor': '#9333ea',
    'theme-color': '#000000',
  }
}

export function generatePageMetadata(
  title: string,
  description?: string,
  image?: string
): Metadata {
  return {
    title,
    description: description || SITE_CONFIG.description,
    openGraph: {
      title,
      description: description || SITE_CONFIG.description,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      title,
      description: description || SITE_CONFIG.description,
      images: image ? [image] : undefined,
    },
  }
}