const path = require('path');

module.exports = {
  mode: 'development',

  context: path.join(__dirname, 'src'),
  entry: './index.js',
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
      extensions: ['.js']
  },

  watch: false
};