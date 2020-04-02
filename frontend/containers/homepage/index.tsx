import React from 'react'
import { useQuery, useSubscription, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
const GET_CHATS = gql`
  query getChats {
    getChats {
      id
      text
    }
  }
`
const SUB_CHATS = gql`
  subscription subChat {
    chatCreated(channelChatInput: { channel: "001" }) {
      id
      text
    }
  }
`
const SEND_MESSAGE = gql`
  mutation sendMessage {
    createChat(createChatInput: { channel: "001", text: "NUDE" }) {
      text
    }
  }
`
export const Homepage = () => {
  const { loading, data, error } = useSubscription(SUB_CHATS)
  const [sendMessage] = useMutation(SEND_MESSAGE)
  const handleSent = () => {
    sendMessage({ variables: { payload: { channel: '001', text: 'NUDE' } } })
  }
  return (
    <div>
      <h1>Chat</h1>
      {!loading && <p>{data?.chatCreated?.text}</p>}
      <button onClick={handleSent}>Send Nude</button>
    </div>
  )
}

export default Homepage
