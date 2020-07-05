const path = require('path');
const webpack = require('webpack');
module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'bundle'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'bundle'),
      compress: true,
      host: '0.0.0.0',
      port: 9000
    }
  }
];
