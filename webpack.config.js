'use strict';

const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    Path.resolve(__dirname, 'frontend/js/app.jsx'),
    './node_modules/webpack-dev-server/client?http://localhost'
  ],
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'public/js')
  },
  watch: true,
  devServer: {
    contentBase: Path.resolve(__dirname, 'public'),
    port: 3001,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ravelo CMS',
      template: Path.resolve(__dirname, 'frontend/index.html')
    })
  ]
}