/**
 * Created by zhouyong on 17/10/29.
 */
const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  devServer: {
    hot: false,
    hotOnly: false,
    compress: true,
    // host: '0.0.0.0',
    // open: true,
    contentBase: [
      path.join(__dirname, "site"),
    ],
  },
  plugins: [

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'es2016', 'react'],
            "plugins": ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'site', 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/',
  }
};

module.exports = config;