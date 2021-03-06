import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_CHATS, SEND_MESSAGE, SUB_CHATS } from './graphql'

export const ShowSubscription = () => {
  const { loading, data, error, subscribeToMore } = useQuery(GET_CHATS)
  useEffect(() => {
    const unSub = subscribeToMore({
      document: SUB_CHATS,
      updateQuery: (prevResult, { subscriptionData }) => {
        if (!subscriptionData.data) return prevResult
        else {
          return {
            chats: [...prevResult.chats, subscriptionData.data.chatCreated]
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
        data?.chats.map(({ _id, text }, index) => {
          return (
            <p key={index}>
              {' '}
              {_id}:{text}
            </p>
          )
        })}
      <input placeholder="Type here" onKeyPress={handleSent} />
    </div>
  )
}

export default ShowSubscription
