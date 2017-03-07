const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
  entry: path.resolve(root, 'src/main.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.js$/, enforce: "pre", loader: "source-map-loader"},
      {test: /\.tsx?$/, use: ['react-hot-loader/webpack', 'awesome-typescript-loader'], exclude: /node_modules/, include: path.resolve(root, 'src')}
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
}
