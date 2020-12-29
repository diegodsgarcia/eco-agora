import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Eco Agora</title>
        <link rel="shortcut icon" href="/ecovias-logo-512.png" />
        <link rel="apple-touch-icon" href="/ecovias-logo-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content={theme.colors.primary} />
        <meta property="og:url" content="https://eco-agora.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eco agora" />
        <meta
          name="description"
          content="Aplicação utilizado para ver o estado atual das ecovias"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
