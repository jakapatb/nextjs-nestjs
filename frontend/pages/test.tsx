import React from 'react'
import { withApollo } from 'graphql/withApollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
const GET_CHATS = gql`
  query getChats {
    getChats {
      id
      text
    }
  }
`

const Test: React.FC = () => {
  const { loading, data, error } = useQuery(GET_CHATS)
  return (
    <div>
      {loading ? 'loading' : data?.getChats[0]?.text}
      <p>URL:{process.env.SERVER_URI}</p>
    </div>
  )
}

export default withApollo()(Test)
