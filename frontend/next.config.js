const path = require('path')
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, './components')
    config.resolve.alias['containers'] = path.join(__dirname, './containers')
    config.resolve.alias['graphql'] = path.join(__dirname, './graphql')
    config.resolve.alias['assets'] = path.join(__dirname, './assets')
    return config
  },
  env: {
    SERVER_URI: 'http://localhost:5000/graphql/',
    SERVER_URI_WS: 'ws://localhost:5000/graphql'
  }
})
