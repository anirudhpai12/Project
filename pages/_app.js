import '../styles/globals.css'
import { TraderxProvider } from '../context/TraderxContext'

function MyApp({ Component, pageProps }) {
  return (
    <TraderxProvider>
      <Component {...pageProps} />
    </TraderxProvider>
  )
}

export default MyApp
