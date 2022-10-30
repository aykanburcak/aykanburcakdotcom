import '@/styles/app.scss'
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider} from '/context/theme'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import Script from "next/script";

const queryClient = new QueryClient()

function App({Component, pageProps}) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Script
          src="//code.tidio.co/nbmrfagrtxy5y7h8tg3ankimrktgsehh.js"
          strategy="afterInteractive"
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
