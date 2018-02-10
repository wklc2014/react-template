/**
 * 启动开发环境服务器
 */
var path = require('path');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack.dev.config.js');

var server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    contentBase: webpackConfig.output.path,
    noInfo: false,
    quiet: false,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 9000,
    stats: {
        children: false,
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-react-component-tools': 'true'
    },
    historyApiFallback: true
});

server.listen(9000, function (err) {
    if (err) {
        console.log('webpack-dev-server', err);
    } else {
        console.log('[webpack-dev-server] is success: ', 'http://localhost:9000');
    }
});
