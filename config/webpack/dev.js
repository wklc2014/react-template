var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var baseConfig = require('./base.js');

var devConfig = Object.assign({}, baseConfig);

devConfig.module.loaders.push({
    test: /\.css$/,
    loader: 'style-loader!css-loader'
}, {
    test: /\.scss$/,
    loader: 'sass-loader!postcss-loader!style-loader!css-loader'
}, {
    test: /\.less$/,
    loader: 'less-loader!postcss-loader!style-loader!css-loader'
})

devConfig.plugins.push(
    new HtmlWebpackPlugin({
        title: 'react-template',
        template: path.resolve(__dirname, '../../src/entry/index.html'),
        favicon: path.resolve(__dirname, '../../src/asset/img/favicon.ico')
    }),
    new OpenBrowserPlugin({
        url: 'http://localhost:9000'
    }),
    new webpack.HotModuleReplacementPlugin()
)

module.exports = devConfig;
