import GloblasStyles from "../styles/globals"
import '../styles/fonts.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GloblasStyles />
    </>
  )

}

export default MyApp
