// https://webpack.js.org/guides/production/

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Plugins.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
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
        new CopyWebpackPlugin([
            { from: 'public/images', to: 'public/images' }
        ])
    ]
}