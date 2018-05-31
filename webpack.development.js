const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    stats: common.stats // add stats extra for dev server
    // host: <add your ip>
  },

  module: {
    rules: [ {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[module]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    } ]
  },

  devtool: 'cheap-module-eval-source-map'
});

