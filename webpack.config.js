const path = require("path");
const webpack = require("webpack");

const PATHS = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist")
};


module.exports = {
  mode: 'development',

  entry: {
    main: `${PATHS.src}/js/main.js`,
    home: `${PATHS.src}/js/import/pages/home.js`
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "dist/js/",
    path: `${PATHS.dist}/js/`
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [
          // \\ for Windows, \/ for Mac OS and Linux
          /node_modules[\\/]core-js/,
          /node_modules[\\/]webpack[\\/]buildin/,
          /node_modules[\\/]@babel[/|\\\\]runtime/
        ],
        // exclude: {
        //   test: /[\\/]node_modules[\\/]/, // Exclude libraries in node_modules ...
        //   not: [
        //     // Except for a few of them that needs to be transpiled because they use modern syntax
        //     /swiper/,
        //     /dom7/,
        //   ]
        // },
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        }],
      },
      {
        test: /\.(glsl|vs|fs)$/,
        use: 'raw-loader',
      }
    ]
  },

  optimization: {
    moduleIds: 'named',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

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

  resolve: {
    alias: {
      "%components%": path.resolve(__dirname, "src/blocks")
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ],
  }
};
