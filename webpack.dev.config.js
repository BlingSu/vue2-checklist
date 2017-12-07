const path = require(`path`)
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.css$/,
        loader:'style!css'
      }
    ]
  },
  devServer: {
    port: 8888,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true
  },
  resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}