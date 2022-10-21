import '@/styles/app.scss'
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider} from '/context/theme'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

const queryClient = new QueryClient()

function App({Component, pageProps}) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
