const Fiber = require("fibers");
const sass = require("sass");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
              fiber: Fiber,
            },
          },
        ],
      },
    ],
  },
};
