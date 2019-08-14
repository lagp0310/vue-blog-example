const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
        historyApiFallback: true,
        // The url you want the webpack-dev-server to use for serving files.
        host: '127.0.0.1',
        // Can be the popular 8080 also.
        port: 8080,
        // gzip compression
        compress: true,
        // Open the browser window, set to false if you are in a headless browser environment.
        open: false,
        watchOptions: {
            ignored: /node_modules/,
            poll: true,
        },
        // The path you want webpack-dev-server to use for serving files
        publicPath: '/',
        // Reload for code changes to static assets.
        watchContentBase: true
    }
});