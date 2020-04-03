import React from 'react'
import { Layout } from 'components/Layout'
import Link from 'next/link'
const LoadingPage: React.FC = () => {
  return (
    <Layout>
      <h1>Loading page</h1>
      <Link href="/">Click Here</Link>
    </Layout>
  )
}

export default LoadingPage
