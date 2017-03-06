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
      {test: /\.js$/, enforce: "pre", loader: "source-map-loader"},
      {test: /\.tsx?$/, use: ['awesome-typescript-loader'], exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  }
}
