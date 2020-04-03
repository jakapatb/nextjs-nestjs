import { ApolloLink } from '@apollo/client'
const isFile = (value) => {
  const booleaner =
    (typeof File !== 'undefined' && value instanceof File) || (typeof Blob !== 'undefined' && value instanceof Blob)
  return booleaner
}

function omitDeep(value, key) {
  if (Array.isArray(value)) {
    return value.map((i) => omitDeep(i, key))
  } else if (typeof value === 'object' && value !== null && !isFile(value)) {
    return Object.keys(value).reduce((newObject, k) => {
      if (k == key) return newObject
      return Object.assign({ [k]: omitDeep(value[k], key) }, newObject)
    }, {})
  }
  return value
}

export function createOmitTypenameLink() {
  return new ApolloLink((operation, forward) => {
    if (operation.variables) {
      operation.variables = omitDeep(operation.variables, '__typename')
    }
    return forward(operation)
  })
}
