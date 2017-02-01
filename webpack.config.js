const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].[hash].bundle.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
