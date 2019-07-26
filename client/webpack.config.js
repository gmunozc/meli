const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let plugins;
const sourcePath = path.join(__dirname, 'src');

if (process.env.NODE_ENV === 'production') {
  plugins = [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCSSAssetsPlugin({})
  ];
} else {
  plugins = [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ];
}

const setDevTool = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'inline-source-map';
  } else if (process.env.NODE_ENV === 'production') {
    return 'source-map';
  }
};

module.exports = {
  entry: [`${sourcePath}/App.tsx`],
  output: {
    // filename: '[name].bundle.[hash].js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.s[ca]ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        }, {
          loader: 'css-loader',
          // options: {
          //   modules: true,
          //   camelCase: true,
          //   importLoaders: 2,
          //   localIdentName: '[name]--[local]--[hash:base64:5]'
          // }
        },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: process.env.NODE_ENV === 'production' ? [{
          loader: 'babel-loader'
        }, {
          loader: 'ts-loader'
        }] : {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    moment: 'moment',
  },
  devtool: setDevTool()
};
