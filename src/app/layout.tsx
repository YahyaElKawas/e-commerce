import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flowmazon',
  description: 'We make your wallet cry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>{children}</body>
=======
      <body className={inter.className}>
        <main className='p-4 max-w-7xl m-auto min-w-[300px]'>
          {children}
        </main>
      </body>
>>>>>>> 974a4fa9e3bcb682a4b639c8e1ecd17511769a33
    </html>
  )
}
