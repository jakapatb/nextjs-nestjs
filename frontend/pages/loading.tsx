import React from 'react'
import { SplashScreen } from 'components/Loading'
import { Layout } from 'components/Layout'

const LoadingPage: React.FC = () => {
  return (
    <Layout>
      <SplashScreen />
    </Layout>
  )
}

export default LoadingPage
