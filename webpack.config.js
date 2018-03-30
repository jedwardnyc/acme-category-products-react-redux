const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react']
        }
      }
    ]
  }
};