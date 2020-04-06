import React from 'react'
import { withApollo } from 'gql/withApollo'

import { Layout } from 'components/Layout'
import ShowSubscription from 'containers/showDevSubscription'

const Chat: React.FC = () => {
  return (
    <Layout>
      <ShowSubscription />
    </Layout>
  )
}

export default withApollo()(Chat)
