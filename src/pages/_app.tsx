// pages/_app.tsx
import { AppProps } from 'next/app'
import '../app/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
