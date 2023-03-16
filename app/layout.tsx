import Footer from './compontens/Footer'
import './globals.css'

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
      <body>{children}
      <Footer />
      </body>
    </html>
  )
}
