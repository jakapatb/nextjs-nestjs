import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { theme } from 'assets/theme'
import { GlobalStyles } from 'assets/theme/globalstyles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Tickettista</title>
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
