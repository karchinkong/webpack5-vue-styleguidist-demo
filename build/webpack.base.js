const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { srcPath } = require('./paths');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: path.join(srcPath, 'main'),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: '[name].html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // loader 的执行顺序是：从后往前
                use: [
                    MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    'stylus-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                // 增加 'less-loader'，注意顺序
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};
