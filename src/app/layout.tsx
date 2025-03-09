import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Parceiros from '@/components/Parceiros'

export const metadata: Metadata = {
  title: 'Liga Jundiai',
  description: 'Página da Liga Jundiai',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Parceiros />
        <Footer />
      </body>
    </html>
  )
}
