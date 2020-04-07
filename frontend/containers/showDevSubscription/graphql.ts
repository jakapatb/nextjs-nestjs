import gql from 'graphql-tag'
export const GET_CHATS = gql`
  query getChats {
    chats(channel: "001") {
      _id
      text
    }
  }
`
export const SUB_CHATS = gql`
  subscription subChat {
    chatCreated(channelChatInput: { channel: "001" }) {
      _id
      text
    }
  }
`
export const SEND_MESSAGE = gql`
  mutation sendMessage($createChatInput: CreateChatInput) {
    createChat(createChatInput: $createChatInput) {
      text
      _id
      channel
    }
  }
`
