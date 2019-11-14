const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  context: path.join(__dirname, 'src'),
  entry: './index.js',
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],

  resolve: {
      extensions: ['.js']
  },

  watch: false
};