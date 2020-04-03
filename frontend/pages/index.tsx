import React from 'react'
import { withApollo } from 'gql/withApollo'
import Homepage from 'containers/homepage'
import { Layout } from 'components/Layout'

const Index: React.FC = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  )
}

export default withApollo()(Index)
