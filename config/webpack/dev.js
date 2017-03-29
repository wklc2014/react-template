var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var baseConfig = require('./base.js');
var projectConfig = require('../project.js');
var devConfig = Object.assign({}, baseConfig);
var entryConfig = require('./entry.js');

devConfig.module.loaders.push({
    test: /\.css/,
    loader: 'style-loader!css-loader'
}, {
    test: /\.scss/,
    loader: 'style-loader!css-loader!postcss-loader!sass-loader'
}, {
    test: /\.less/,
    loader: 'style-loader!css-loader!postcss-loader!less-loader'
})

Object.keys(entryConfig.html).forEach(v => {
    var htmlPath = entryConfig.html[v];
    devConfig.plugins.push(
        new HtmlWebpackPlugin({
            title: 'react-template-' + v,
            template: htmlPath,
            favicon: path.resolve(__dirname, '../../src/asset/img/favicon.ico')
        })
    )
})

devConfig.plugins.push(
    new OpenBrowserPlugin({
        url: `http://${projectConfig.devServer.host}:${projectConfig.devServer.port}`
    }),
    new webpack.HotModuleReplacementPlugin()
)

module.exports = devConfig;
