const path = require('path')
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
  env: {
    SERVER_URI: 'http://localhost:5000/graphql/',
    SERVER_URI_WS: 'ws://localhost:5000/graphql'
  }
})
