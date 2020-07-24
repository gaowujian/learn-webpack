const path = require("path");
var ProgressBarPlugin = require("progress-bar-webpack-plugin");
const webpackManifestPlugin = require("webpack-manifest-plugin");
const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [new ProgressBarPlugin(), new webpackManifestPlugin()],
};
