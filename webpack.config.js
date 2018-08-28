const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './frontend/index.jsx',
  output: {
    filename: './frontend/js/bundle.js',
    path: path.join(__dirname)
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map'
}

module.exports = config