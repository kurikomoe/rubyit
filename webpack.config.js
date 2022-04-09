// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === "production";


const config = {
  target: "node",
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  // experiments: {
  //   topLevelAwait: true,
  // },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: path.resolve(__dirname, "dist") },
      ],
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg|gif|dat.gz)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[path][name].[ext]',
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(js|jsx)$/i,
      //   loader: "babel-loader",
      //   options: {
      //     presets: [ "@babel/preset-env", ],
      //   }
      // },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
