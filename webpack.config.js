const path = require('path');

module.exports = {
  watch: true,
  entry: './main.js',
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 8080
  }
};