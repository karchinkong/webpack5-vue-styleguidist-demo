const webpack = require('webpack');
const webpackCommonConf = require('./webpack.base.js');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');
const { srcPath } = require('./paths');

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    devServer: {
        historyApiFallback: true, // 前端路由配置为 history 模式时用
        // contentBase: distPath,    // 根目录
        open: true,               // 自动打开浏览器
        compress: true,           // 启动 gzip 压缩
        hot: true,                // 热更新
        port: 8080,               // 启动端口
        proxy: {}
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development'),
            process: JSON.stringify({
                VERSION: packageJson.version,
                env: {}
            })
        })
    ]
});
