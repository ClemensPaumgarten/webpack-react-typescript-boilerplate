const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash:4].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
        options: {
          classIdPrefix: '[name]-[hash:8]__',
          propsMap: {
            fillRule: 'fill-rule',
            foo: 'bar'
          },
          xmlnsTest: /^xmlns.*$/
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        },
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      minify: true
    }),
    new ExtractTextPlugin({
      filename: 'styles.[chunkhash:4].css'
    })

  ],

  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
    plugins: [
      new TsconfigPathsPlugin()

    ]
  },

  stats: {
    children: false,
    chunks: false,
    modules: false,
    exclude: [ 'node_modules' ]
  },

  cache: true
};
