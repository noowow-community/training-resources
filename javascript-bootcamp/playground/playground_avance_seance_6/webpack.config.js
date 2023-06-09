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
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  devServer: {
    port: 9000,
    static: path.resolve(__dirname, './public'),
  }
}
