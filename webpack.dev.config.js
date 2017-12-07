const path = require(`path`)

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
        test:/\.(png|jpg)$/,
        loader:'url-loader?limit=8192'
      }
    ]
  }
}