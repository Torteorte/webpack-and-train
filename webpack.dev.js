const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

   entry: {
      index: './src/index.js'
   },
   output: {
      filename: './index.js',
   },

   devServer: {
      port: 8080
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         inject: true,
         chunks: ['index'],
         filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
         template: './src/header.html',
         inject: true,
         chunks: ['index'],
         filename: 'header.html'
      }),
      new HtmlWebpackPlugin({
         template: './src/contacts.html',
         inject: true,
         chunks: ['index'],
         filename: 'contacts.html'
      }),
      new MiniCssExtractPlugin({
         filename: './[name].css'
      }),
      new CleanWebpackPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.(s*)css$/,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader",
               "sass-loader"
            ]
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
            type: 'asset/resource',
         },
      ]
   },
};
