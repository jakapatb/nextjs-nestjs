import { ApolloLink } from 'apollo-link'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { createUploadLink } from 'apollo-upload-client'

export const createTerminateLink = (headers) => {
  const isDevelopment = process.env.NODE_ENV !== 'production'

  const ssrUrl = 'http://localhost:5000/graphql'
  let csrUrl

  if (process.browser && isDevelopment) {
    csrUrl = 'http://localhost:5000/graphql'
  } else if (process.browser) {
    csrUrl = 'http://localhost:5000/graphql'
  } else {
    csrUrl = ''
  }

  const liveUrl = !!csrUrl ? csrUrl : ssrUrl

  const uploadLink = createUploadLink({
    uri: liveUrl
  })

  const batchHttpLink = new BatchHttpLink({ uri: liveUrl })
  return ApolloLink.split((operation) => operation.getContext().hasFileUpload, uploadLink, batchHttpLink)
}
