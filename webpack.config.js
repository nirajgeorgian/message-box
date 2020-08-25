const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MergeIntoSingle = require("webpack-merge-and-include-globally");
const uglifyJS = require("uglify-js");
const CleanCSS = require("clean-css");
const glob = require("glob");

module.exports = {
  mode: "production",
  target: "web",
  entry: {
    "bundle.js": glob
      .sync("build/static/?(js|css)/*.?(js|css)")
      .map((f) => path.resolve(__dirname, f)),
  },
  output: {
    filename: "build/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new MergeIntoSingle(
      {
        files: [
          {
            src: glob
              .sync("build/static/?(js)/*.?(js)")
              .map((f) => path.resolve(__dirname, f)),
            dest: (code) => {
              const min = uglifyJS.minify(code, {
                sourceMap: {
                  filename: "message-box.js",
                },
              });
              return {
                "message-box.js": min.code,
              };
            },
          },
          {
            src: glob
              .sync("build/static/?(css)/*.?(css)")
              .map((f) => path.resolve(__dirname, f)),
            dest: (code) => ({
              "style.css": new CleanCSS({}).minify(code).styles,
            }),
          },
        ],
        hash: false,
      },
      (filesMap) => {
        console.log("generated files: ", filesMap);
      }
    ),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
