const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, '/example/src/main.js'),
  output: {
    path: path.join(__dirname, '/example/dist'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/example/dist'),
    compress: true,
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      sourceMap: false,
      mangle: false,
      compress: {
        warnings: false
      },
      output: {
        comments: true
      }
    })
  ]
}
