module.exports = {
  entry: './src/index.js',
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: './src',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}