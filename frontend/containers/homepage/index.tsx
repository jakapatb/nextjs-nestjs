import React, { useEffect, InputHTMLAttributes } from 'react'
import { useQuery, useSubscription, useMutation, gql } from '@apollo/client'
const GET_CHATS = gql`
  query getChats {
    messages: getChats {
      id
      text
    }
  }
`
const SUB_CHATS = gql`
  subscription subChat {
    message: chatCreated(channelChatInput: { channel: "001" }) {
      id
      text
    }
  }
`
const SEND_MESSAGE = gql`
  mutation sendMessage($createChatInput: CreateChatInput) {
    createChat(createChatInput: $createChatInput) {
      text
      id
    }
  }
`
export const Homepage = () => {
  const { loading, data, error } = useQuery(GET_CHATS)

  const { loading: subscripting, data: subData } = useSubscription(SUB_CHATS, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      const { messages: cachedMessages } = client.readQuery({
        query: GET_CHATS
      })
      console.log(cachedMessages, subscriptionData)
      /*     cachedMessages.messages.push(subscriptionData?.data?.chatCreated)
      client.writeQuery({
        query: GET_CHATS,
        data: cachedMessages
      }) */
    }
  })

  const [sendMessage] = useMutation(SEND_MESSAGE)
  const handleSent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = (event.target as HTMLInputElement).value
      console.log('mutate', value)
      sendMessage({
        variables: { createChatInput: { channel: '001', text: value } }
      })
    }
  }

  console.log(subData)
  return (
    <div>
      <h1>Chat</h1>
      {!loading &&
        data?.messages?.map((chat, index) => {
          return <p key={index}>{chat?.text || 'hi'}</p>
        })}
      <input placeholder="Type here" onKeyPress={handleSent} />
      <div>
        <h2>newest message: {subData?.message}</h2>
      </div>
    </div>
  )
}

export default Homepage
