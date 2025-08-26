import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Refrane - Intelligent Solutions for Modern Business',
  description: 'Transform your business with AI-powered automation, streamlining operations and accelerating growth through cutting-edge technology.',
  keywords: ['AI automation', 'business solutions', 'workflow optimization', 'enterprise technology'],
  authors: [{ name: 'Refrane Team' }],
  creator: 'Refrane',
  publisher: 'Refrane',
  metadataBase: new URL('https://refrane.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://refrane.com',
    siteName: 'Refrane',
    title: 'Refrane - Intelligent Solutions for Modern Business',
    description: 'Transform your business with AI-powered automation, streamlining operations and accelerating growth through cutting-edge technology.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Refrane - AI Business Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refrane - Intelligent Solutions for Modern Business',
    description: 'Transform your business with AI-powered automation, streamlining operations and accelerating growth through cutting-edge technology.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-site-verification'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}