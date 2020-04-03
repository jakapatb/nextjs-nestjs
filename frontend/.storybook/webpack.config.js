const path = require('path')
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require('@babel/preset-typescript').default, require('@babel/preset-react').default]
        }
      },
      require.resolve('react-docgen-typescript-loader')
    ]
  })
  config.resolve.alias['components'] = path.join(__dirname, '../components')
  config.resolve.alias['containers'] = path.join(__dirname, '../containers')
  config.resolve.alias['graphql'] = path.join(__dirname, '../graphql')
  config.resolve.alias['assets'] = path.join(__dirname, '../assets')

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
