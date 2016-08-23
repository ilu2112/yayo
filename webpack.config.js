var precss       = require('precss');
var autoprefixer = require('autoprefixer');


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
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      }
    ]
  },
  postcss: function() {
    return [precss, autoprefixer];
  }
}