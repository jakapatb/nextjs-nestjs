import React from 'react'
import { withApollo } from 'graphql/withApollo'
import Homepage from 'containers/homepage'

const Index: React.FC = () => {
  return <Homepage />
}

export default withApollo()(Index)
