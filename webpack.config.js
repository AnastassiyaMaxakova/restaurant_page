const { userInfo } = require('os');
const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
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