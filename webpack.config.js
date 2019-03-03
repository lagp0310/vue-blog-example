const path = require('path');

// Plugins.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devtool: 'source-map',
    mode: "production",
    entry: "./src/index.js",
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "dist"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "bundle.js", // string, the filename template for entry chunks
    },
    module: {
        rules: [
            // Vue components.
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            // SCSS files.
            // This also applies for styles defined in .vue files in a style tag 
            // with attribute lang="scss".
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // CSS files.
            // This also applies for styles defined in .vue files in a style tag 
            // with attribute lang="css".
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            // Font files.
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
    ],
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
        watchContentBase: true,
    }
}