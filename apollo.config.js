module.exports = {
  client: {
    service: {
      name: 'nomax',
      url: 'http://localhost:5000/graphql'
    },
    includes: ['./frontend/**/*.ts', './frontend/**/*.tsx']
  }
}
