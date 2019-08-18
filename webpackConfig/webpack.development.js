const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
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