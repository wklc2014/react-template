/**
 * 启动开发环境服务器
 */
var path = require('path');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack/dev.js');
var projectConfig = require('./project.js');

var __SERVER__ = {
    host: 'localhost',
    port: 9000
}

// modify some webpack config options
Object.keys(webpackConfig.entry).forEach(function (ety) {
    webpackConfig.entry[ety].unshift(
        `webpack-dev-server/client?http://${__SERVER__.host}:${__SERVER__.port}/`,
        "webpack/hot/dev-server"
    )
})

var myConfig = Object.create(webpackConfig);
var server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'dist',
    hot: true,
    host: __SERVER__.host,
    port: __SERVER__.port,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true
})

server.listen(__SERVER__.port);
