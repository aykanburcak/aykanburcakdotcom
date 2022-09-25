import '@/styles/app.scss'
import {ThemeProvider} from '/context/theme'

function App({Component, pageProps}) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
