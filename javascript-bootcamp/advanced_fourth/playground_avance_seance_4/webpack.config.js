const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.mjs'),
  devtool: 'inline-source-map',
  output: {
    libraryTarget: 'umd',
    library: 'NoowowCommunity',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 9000,
    static: path.resolve(__dirname, './public'),
  }
}
