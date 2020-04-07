import { execute, ApolloLink } from 'apollo-link'
import formatMessage from './format-message'
import logging from './logging'

const loggerLink = new ApolloLink((operation, forward) => {
  const ssrMode = typeof window === 'undefined'
  if (!ssrMode) {
    const startTime = new Date().getTime()
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    //@ts-ignore
    const operationType = operation.query.definitions[0]?.operation
    const ellapsed = new Date().getTime() - startTime

    const group = formatMessage(operationType, operation, ellapsed)
    if (Array.isArray(forward(operation))) {
      forward(operation)?.map((result) => {
        logging.groupCollapsed(...group)

        logging.log('INIT', operation)
        logging.log('RESULT', result)

        logging.groupEnd(...group)
      })
    } else {
      logging.groupCollapsed(...group)
      logging.log('INIT', operation)
      /*     forward(operation).subscribe({
        next: (data) => logging.log('RESULT', data),
        error: (error) => logging.log('RESULT', error),
        complete: () => logging.groupEnd(...group)
      }) */
    }
  }
  //ssr donothing
  return forward(operation)
})

export default loggerLink
