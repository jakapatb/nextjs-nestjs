import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import { WebSocketLink } from 'apollo-link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { parseCookies } from 'nookies'
import { ApolloLink } from 'apollo-link'
import { loggerLink } from './apollo-links'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { createOmitTypenameLink } from './apollo-links/omit-typename-link'
import { createTerminateLink } from './apollo-links/terminate-link'
const HTTP_URI = process.env.SERVER_URI
const WS_URI = process.env.SERVER_URI_WS
const COOKIE_JWT_TOKEN = process.env.COOKIE_JWT_TOKEN

export default function createApolloClient(initialState, ctx) {
  const ssrMode = typeof window === 'undefined'
  const omitTypeheadersnameLink = createOmitTypenameLink()
  const terminateLink = createTerminateLink(ctx?.req?.headers)
  let link, token
  const httpLink = new HttpLink({
    uri: HTTP_URI,
    credentials: 'same-origin',
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    },
    fetch
  })
  if (ssrMode) {
    // on Server...
    token = parseCookies(ctx)[COOKIE_JWT_TOKEN]

    link = ApolloLink.from([omitTypeheadersnameLink, loggerLink, httpLink])
  } else {
    // on Client...

    token = parseCookies()[COOKIE_JWT_TOKEN]
    const client = new SubscriptionClient(WS_URI, {
      reconnect: true,
      connectionParams: {
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    })
    const wsLink = new WebSocketLink(client)
    const splitLink = split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
      },
      wsLink,
      httpLink
    )
    link = ApolloLink.from([omitTypeheadersnameLink, loggerLink, splitLink])
  }

  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState)
  })
}
