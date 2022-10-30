import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Script
        src="//code.tidio.co/nbmrfagrtxy5y7h8tg3ankimrktgsehh.js"
        strategy="lazyOnload"
      />
    </Html>
  )
}
