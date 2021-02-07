import config from './config/config'

const path = require("path");
const webpack = require("webpack");


const PATHS = {
  src: path.resolve(__dirname, config.dir.src),
  dist: path.resolve(__dirname, config.dir.dist)
};


module.exports = [
  {
    mode: 'development',

    entry: {
      main: `${PATHS.src}/js/main.js`,
      home: `${PATHS.src}/js/import/pages/home.js`
    },

    output: {
      filename: "[name].mjs",
      chunkFilename: "[name].mjs",
      publicPath: "dist/js/",
      path: `${PATHS.dist}/js/`
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: [
            /node_modules[\\/]core-js/,
            /node_modules[\\/]webpack[\\/]buildin/,
            /node_modules[\\/]@babel[/|\\\\]runtime/
          ],
          use: [{
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              "presets": [
                [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "esmodules": true
                    }
                  }
                ]
              ]
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
  },
  {
    mode: 'development',

    entry: {
      main: `${PATHS.src}/js/main.js`,
      home: `${PATHS.src}/js/import/pages/home.js`
    },

    output: {
      filename: "[name].legacy.js",
      chunkFilename: "[name].legacy.js",
      publicPath: "dist/js/",
      path: `${PATHS.dist}/js/`
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: [
            /node_modules[\\/]core-js/,
            /node_modules[\\/]webpack[\\/]buildin/,
            /node_modules[\\/]@babel[/|\\\\]runtime/
          ],
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
  }
]
