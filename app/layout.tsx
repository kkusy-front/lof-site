import Footer from './compontens/Footer'
import './globals.css'
import HashScroll from './hooks/hash-scroll'

export const metadata = {
  title: 'Light Of Freedom | Zespół muzyczny',
  description: 'Light Of Freedom - zespół muzyczny z okolic Ustrzyk Dolnych',
  authors: [{ name: 'Kusy-Web', url: 'https://kusy-web.pl/' }],
  openGraph: {
    title: 'Light Of Freedom | Zespół muzyczny',
    description: 'The React Framework for the Web',
    url: 'https://lightoffreedom.pl/logo.png',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HashScroll>
          {children}
          <Footer />
        </HashScroll>
      </body>
    </html>
  )
}
