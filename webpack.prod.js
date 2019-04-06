const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    performance: {
        hints: false
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            maxSize: 250000
        }
    }
});