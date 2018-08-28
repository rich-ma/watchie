const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './frontend/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname)
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map'
}

module.exports = config