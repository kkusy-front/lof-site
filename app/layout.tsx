import Footer from './compontens/Footer'
import './globals.css'
import HashScroll from './hooks/hash-scroll'

export const metadata = {
  title: 'Light Of Freedom | Zespół muzyczny',
  description: 'Light Of Freedom - zespół muzyczny z okolic Ustrzyk Dolnych',
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
