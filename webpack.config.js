
var path = require('path');

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
      components: path.resolve(__dirname, 'src/components'),
      'rsg-components/Examples/ExamplesRenderer': path.resolve(__dirname, 'styleguide/components/Examples')
    }
  }
}
