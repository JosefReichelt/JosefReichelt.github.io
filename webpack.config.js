const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const path = require('path');

const pkg = require('./package.json');
const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'index.js',
  },
  watchOptions: {
    ignored: ['node_modules'],
    poll: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader',
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     failOnWarning: false,
          //     failOnError: false
          //   }
          // }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              failOnWarning: false,
              failOnError: false
            }
          },
          'ts-loader'
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
          
        ]
      },
      {
        test: /\.(png|jpe?g|gif|wav|mp3|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: `assets`,
              name: '[name].[ext]',
              publicPath: "/assets/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Clean the build folder
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
      
    }),
    new CopyPlugin([
      { from: './public/favicon.ico', to: 'assets' },
    ]),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new DashboardPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx']
  },
  devtool: 'none',
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: 'src',
    compress: true,
    port: 3000,
    open: true,
    quiet: true,
    watchContentBase: true,
    hot: true,
  },
  stats: 'none',
}


