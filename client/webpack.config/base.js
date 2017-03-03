const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
  entry: path.resolve(root, 'src/main.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
    ]
  }
}