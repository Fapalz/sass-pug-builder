const path = require("path");
const webpack = require("webpack");


module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "jquery": "jquery",
      "window.jquery": "jquery",
      "$": "jquery",
      "window.$": "jquery"
    }),
  ],

  entry: {
    main: "./src/js/main.js",
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        //exclude: /node_modules\/(?!(swiper|dom7)\/).*/,
        exclude: {
          test: /node_modules/, // Exclude libraries in node_modules ...
          not: [
            // Except for a few of them that needs to be transpiled because they use modern syntax
            /swiper/,
            /dom7/,
          ]
        },
        use: [{
          loader: 'babel-loader',
          // options: {
          //   cacheDirectory: true,
          //   // And replace .babelrc with babel.config.json...
          //   babelrc: false,
          //   // ...which might also mean you need this if you are using a monorepo:
          //   rootMode: 'upward',
          // }
        }],
      },
      {
        test: /\.(glsl|vs|fs)$/,
        use: 'raw-loader',
      }
    ]
  },

  resolve: {
    alias: {
      "%components%": path.resolve(__dirname, "src/blocks")
    }
  }
};
