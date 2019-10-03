const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
      extensions: [".ts", ".tsx", ".js",]
  },
    devServer: {            
        open: true,
        port: 1337,
      },
    plugins: [
        new extractTextWebpackPlugin('style/style.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',      
          }),  
    ]
}