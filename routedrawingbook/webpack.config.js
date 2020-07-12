const path = require('path');
const webpack = require('webpack');
module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'bundle'),
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
    },
    devServer: {
      contentBase: path.join(__dirname, 'bundle'),
      compress: true,
      host: '0.0.0.0',
      port: 9000
    }
  }
];
