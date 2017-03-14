const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
  entry: path.resolve(root, 'src/index.tsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"]
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(root, 'src'),
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          } // , {loader: 'postcss-loader'}
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          // {loader: 'postcss-loader'},
          {loader: 'stylus-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
}
