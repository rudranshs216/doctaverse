import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar'
import HeroComponent from '../Components/HeroComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
  <Navbar />
  <HeroComponent />
  <Component {...pageProps} />
  </>)
}

export default MyApp
