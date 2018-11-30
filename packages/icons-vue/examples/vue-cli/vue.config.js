'use strict';

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  baseUrl: process.env.PUBLIC_URL || '/',
  configureWebpack(config) {
    config.optimization = {
      ...config.optimization,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          terserOptions: {
            mangle: false,
            output: {
              beautify: true,
              comments: true,
            },
          },
        }),
      ],
    };
  },
};
