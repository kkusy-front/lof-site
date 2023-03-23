import { Suspense } from 'react';
import Footer from './compontens/Footer';
import './globals.css';
import HashScroll from './hooks/hash-scroll';

export const metadata = {
  title: 'Light Of Freedom | Zespół muzyczny',
  description: 'Light Of Freedom - zespół muzyczny z okolic Ustrzyk Dolnych',
  authors: [{ name: 'Kusy-Web', url: 'https://kusy-web.pl/' }],
  category: 'music band',
  openGraph: {
    title: 'Light Of Freedom | Zespół muzyczny',
    description: 'Light Of Freedom - zespół muzyczny z okolic Ustrzyk Dolnych',
    url: 'https://lightoffreedom.pl',
    siteName: 'Light Of Freedom',
    images: [
      {
        url: 'https://lightoffreedom.pl/logo.png',
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
    images: ['https://lightoffreedom.pl/logo.png'],
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
    <html lang="en">
      <body>
        <Suspense fallback={<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
          <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 15 ; 0 -15; 0 15"
              repeatCount="indefinite"
              begin="0.1" />
          </circle>
          <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 10 ; 0 -10; 0 10"
              repeatCount="indefinite"
              begin="0.2" />
          </circle>
          <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3" />
          </circle>
        </svg></div>}>
          <HashScroll>
            {children}
            <Footer />
          </HashScroll>
        </Suspense>
      </body>
    </html>
  )
}
