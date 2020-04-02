import { ApolloLink } from 'apollo-link'
import formatMessage from './format-message'
import logging from './logging'

const loggerLink = new ApolloLink((operation, forward) => {
  const ssrMode = typeof window === 'undefined'
  if (!ssrMode) {
    const startTime = new Date().getTime()
    if (Array.isArray(forward(operation))) {
      return forward(operation).map((result) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        //@ts-ignore
        const operationType = operation.query.definitions[0]?.operation
        const ellapsed = new Date().getTime() - startTime

        const group = formatMessage(operationType, operation, ellapsed)

        logging.groupCollapsed(...group)

        logging.log('INIT', operation)
        logging.log('RESULT', result)

        logging.groupEnd(...group)
        return result
      })
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      //@ts-ignore
      const operationType = operation.query.definitions[0]?.operation
      const ellapsed = new Date().getTime() - startTime

      const group = formatMessage(operationType, operation, ellapsed)

      logging.groupCollapsed(...group)

      logging.log('INIT', operation)
      logging.log('RESULT', forward(operation))

      logging.groupEnd(...group)
      return forward(operation)
    }
  }
  //ssr donothing
  return forward(operation)
})

export default loggerLink
