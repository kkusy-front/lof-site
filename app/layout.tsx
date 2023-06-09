import { Suspense } from 'react';
import Footer from './compontens/Footer';
import './globals.css';
import HashScroll from './hooks/hash-scroll';
import { Analytics } from '@vercel/analytics/react';
import Loading from './loading';
import NavBar from './compontens/NavBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Light Of Freedom | Zespół muzyczny',
  description: 'Light Of Freedom - zespół muzyczny z okolic Ustrzyk Dolnych',
  authors: [{ name: 'Kusy-Web', url: 'https://kusy-web.pl/' }],
  category: 'music band',
  colorScheme: 'dark',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: 'Light Of Freedom | Zespół muzyczny',
    description: 'Light Of Freedom - zespół muzyczny z okolic Ustrzyk Dolnych',
    url: 'https://lightoffreedom.pl',
    siteName: 'Light Of Freedom',
    images: [
      {
        url: 'https://lightoffreedom.pl/images/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pl-PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Light Of Freedom | Zespół muzyczny',
    description: 'Light Of Freedom - zespół muzyczny z okolic Ustrzyk Dolnych',
    creator: 'Kusy-Web',
    images: ['https://lightoffreedom.pl/images/logo.png'],
  },
  verification: {
    google: 'iMLaF7YBffYwIBCU9faWUH8fs8HO-lMgNzu67M5TCxc',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
