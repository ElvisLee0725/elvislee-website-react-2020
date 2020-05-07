const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }, {
          test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
          ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css'})],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    stats: 'minimal'
  }
}