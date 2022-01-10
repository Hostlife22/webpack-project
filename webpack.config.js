const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
let target = 'web';

const plugins = [
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({ filename: 'styles/[name].[contenthash].css' }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}
if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  target: target,
  plugins: plugins,
  entry: './src/index.js',
  devtool: mode === 'production' ? false : 'source-map',

  devServer: {
    static: './dist',
    hot: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]',
        },
      },

      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]',
        },
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
