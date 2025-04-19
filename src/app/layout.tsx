import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'
import Parceiros from '@/components/Parceiros'
import Footer from '@/components/Footer'

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

        {/* Container principal */}
        <div className="container mx-auto px-8 flex flex-col gap-8">
          <main className="flex-grow">{children}</main>
          <aside className="flex flex-col justify-start">
            <Parceiros />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  )
}
