const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const each = require('lodash/each');
const map = require('lodash/map');
const glob = require('glob');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const hmr = require('webpack-hmr');

const pugPages = ['index', 'other']

const PATHS = {
  entries: __dirname + '/src/js/entries/',
  output: __dirname + '/dist/',
  pug: __dirname + '/src/pug/',
  src: __dirname + "/devBuild",
  nodeModulesPath: path.resolve(__dirname, 'node_modules')
}

function pugPage(name) {
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `${PATHS.pug}${name}.pug`,
    inject: false
  })
}

function getPugPages() {
  return map(pugPages, function(page) {
    return pugPage(page);
  })
}

const pug = {
  test: /\.pug$/,
  use: ['html-loader?attrs=false', 'pug-html-loader']
};

const config = {
  entry: {
    app: './src/scripts/app.tsx',
    styles: './src/styles/styles.styl'
  },
  output: {
    path: path.resolve(__dirname, 'devBuild'),
    publicPath: '/devBuild/',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    alias: {
      scripts: path.resolve(__dirname, 'src/scripts/')
    }
  },
  devServer: {
    publicPath: '/',
    hotOnly: false,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'errors-only',
    clientLogLevel: 'warning',
    port: 3000,
    staticOptions: {
      redirect: false
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ],
        exclude: [
          path.resolve(__dirname, 'images/'),
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'font/[name].[ext]'}  
          }
        ]
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src/scripts/'),
        loaders: ['babel-loader','ts-loader'],
      },
      {
        test: /\.styl$/,
        include: [path.resolve(__dirname, 'src/styles')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      },
      pug
    ]
  },
  plugins: [
    ...getPugPages(),
    new CopyWebpackPlugin([
      { from: 'src/images/', to: 'images/', force: true }
    ], {}),
    new CopyWebpackPlugin([
      { from: 'src/fonts/', to: 'fonts/', force: true }
    ], {}),
    new FixStyleOnlyEntriesPlugin({
      extensions: ["less", "scss", "css", "styl"]
    }),
    new ExtractTextPlugin('styles/style.bundle.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
 
};
module.exports = config;