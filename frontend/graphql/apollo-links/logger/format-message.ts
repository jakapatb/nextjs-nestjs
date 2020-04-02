const selectColor = (operationType) => {
  switch (operationType) {
    case 'mutation':
      return 'red'
    case 'query':
      return '303a9F4'
    case 'subscription':
      return 'green'
    default:
      return 'black'
  }
}
const formatMessage = (operationType, operation, ellapsed) => {
  const headerCss = [
    'color: gray; font-weight: lighter', // title
    `color: ${selectColor(operationType)};`, // operationType
    'color: inherit;' // operationName
  ]

  const parts = ['%c apollo', `%c${operationType}`, `%c${operation.operationName}`]

  if (operationType !== 'subscription') {
    parts.push(`%c(in ${ellapsed} ms)`)
    headerCss.push('color: gray; font-weight: lighter;') // time
  }

  return [parts.join(' '), ...headerCss]
}

export default formatMessage
