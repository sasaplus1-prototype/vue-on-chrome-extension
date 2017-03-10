'use strict';

const path = require('path');

const webpack = require('webpack');

const uglifySaveLicense = require('uglify-save-license');

module.exports = {

  context: __dirname,

  target: 'web',

  entry: {
    popup: `${__dirname}/sources/index.js`,
  },

  output: {
    path: `${__dirname}/extension/`,
    publicPath: './',
    filename: '[name].js',
    chunkFilename: 'chunk-[id]-[hash].js',
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
        ],
      },
    ],
  },

  resolve: {
    extensions: [
      '.js',
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin,
    new webpack.optimize.AggressiveMergingPlugin,
  ].concat(
    (process.argv.some(
      (arg) => /^(?:-p|--optimize-minimize)$/.test(arg)
    )) ? [
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: uglifySaveLicense,
        },
      }),
    ] : [
      /* none */
    ]
  ).concat([
    new webpack.BannerPlugin({
      banner: [
        '@license Copyright(c) 2017 sasa+1',
        'Released under the MIT license.',
      ].join('\n'),
      entryOnly: true,
      raw: false,
    }),
  ]),

};
