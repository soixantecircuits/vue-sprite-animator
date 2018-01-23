const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'vue-sprite-animator.js',
    library: 'SpriteAnimator',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
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
