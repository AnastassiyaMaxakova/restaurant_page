const { userInfo } = require('os');
const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Coffee shop',
            template: "./src/template.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpeg|webp|svg|gif|jpg)$/i,
                type: 'asset/resource',

            },
        ],
    },
};