import 'windi.css'
import '../styles/globals.css'
import { Providers } from './providers'
import { Roboto } from 'next/font/google'
import { Footer, Navbar } from 'components/molecules'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          <Navbar />
          <div className='px-6'>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
