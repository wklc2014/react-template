/**
 * 启动开发环境服务器
 */
var path = require('path');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack/dev.js');
var projectConfig = require('./project.js');
var __ENV__ = require('./env.js');

var __SERVER__ = projectConfig.devServer;

// modify some webpack config options
if (projectConfig.useHotLoad) {
    Object.keys(webpackConfig.entry).forEach(function (ety) {
        webpackConfig.entry[ety].unshift(
            `webpack-dev-server/client?http://${__SERVER__.host}:${__SERVER__.port}/`,
            'webpack/hot/dev-server'
        )
    })
}

var webpackDevServerConfig = {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'dist',
    hot: true,
    inline: true,
    host: __SERVER__.host,
    port: __SERVER__.port,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true
}

if (__ENV__.__DEV__ && projectConfig.useProxyServer) {
    webpackDevServerConfig.proxy = {
        '/api/*': {
            target: `http://${__SERVER__.host}:${__SERVER__.port + 1}`,
            host: `${__SERVER__.host}:${__SERVER__.port + 1}`,
            secure: false
        }
    }
}

var myConfig = Object.create(webpackConfig);
var server = new WebpackDevServer(webpack(webpackConfig), webpackDevServerConfig);

server.listen(__SERVER__.port);
