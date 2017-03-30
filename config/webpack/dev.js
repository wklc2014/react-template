var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var baseConfig = require('./base.js');
var projectConfig = require('../project.js');
var entryConfig = require('./entry.js');
var devConfig = Object.assign({}, baseConfig);

devConfig.devtool = 'eval-source-map';

devConfig.module.loaders.push({
    test: /\.css/,
    // loader: 'style-loader!css-loader'
    loader: ['style-loader', 'css-loader']
}, {
    test: /\.scss/,
    // loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
}, {
    test: /\.less/,
    // loader: 'style-loader!css-loader!postcss-loader!less-loader'
    loader: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
})

Object.keys(entryConfig.html).forEach(v => {
    var htmlPath = entryConfig.html[v];
    devConfig.plugins.push(
        new HtmlWebpackPlugin({
            title: 'react-template-' + v,
            filename: v + '.html',
            template: htmlPath,
            favicon: path.resolve(__dirname, '../../src/asset/img/favicon.ico'),
            chunks: [v]
        })
    )
})

if (projectConfig.useDllReferencePlugin) {
    devConfig.plugins.push(
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../../dist/vendor.manifest.json')
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['vendor.dll.js'],
            append: false
        })
    )
}

devConfig.plugins.push(
    // new OpenBrowserPlugin({
    //     url: `http://${projectConfig.devServer.host}:${projectConfig.devServer.port}`
    // }),
    new webpack.HotModuleReplacementPlugin()
)

module.exports = devConfig;
