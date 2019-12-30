const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
})
