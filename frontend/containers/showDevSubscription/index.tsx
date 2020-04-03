import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
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
  mutation sendMessage($createChatInput: CreateChatInput) {
    createChat(createChatInput: $createChatInput) {
      text
    }
  }
`
export const ShowSubscription = () => {
  const { loading, data, error, subscribeToMore } = useQuery(GET_CHATS)
  useEffect(() => {
    const unSub = subscribeToMore({
      document: SUB_CHATS,
      updateQuery: (prevResult, { subscriptionData }) => {
        if (!subscriptionData.data) return prevResult
        else {
          return {
            getChats: [...prevResult.getChats, subscriptionData.data.chatCreated]
          }
        }
      }
    })
    return () => {
      unSub()
    }
  }, [subscribeToMore])

  const [sendMessage] = useMutation(SEND_MESSAGE)
  const handleSent = (e) => {
    if (e.key === 'Enter') {
      sendMessage({ variables: { createChatInput: { channel: '001', text: e.target.value } } })
    }
  }
  return (
    <div>
      <h1>Chat</h1>
      {!loading &&
        data?.getChats.map(({ text }, index) => {
          return <p key={index}>{text}</p>
        })}
      <input placeholder="Type here" onKeyPress={handleSent} />
    </div>
  )
}

export default ShowSubscription
