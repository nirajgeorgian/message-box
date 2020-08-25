const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob");

module.exports = {
  mode: "production",
  entry: {
    "bundle.js": glob.sync("build/static/?(js|css)/*.?(js|css)").map((f) => {
      console.log(f);
      return path.resolve(__dirname, f);
    }),
  },
  output: {
    path: path.resolve(__dirname),
    filename: "build/static/js/bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
