const path = require("path");
const webpack = require("webpack");

module.exports = {
  // Other webpack configurations...

  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    },
  },

//   plugins: [
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       Buffer: ["buffer", "Buffer"],
//     }),
//   ],

//   node: {
//     fs: "empty",
//     net: "empty",
//     tls: "empty",
//   },
};
