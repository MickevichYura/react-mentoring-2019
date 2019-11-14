const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: resolve('src'),
    entry: resolve('src/index.js'),

    output: {
        path: resolve('dist'),
        filename: 'bundle.js'
    },

    plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],

    resolve: {
        extensions: ['.js', ',jsx', '.html']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ]
    },

    watch: false
};