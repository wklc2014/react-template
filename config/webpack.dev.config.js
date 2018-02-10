var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var baseConfig = require('./webpack.base.config.js');
var entryConfig = require('./webpack.entry.js');

var devConfig = Object.assign({}, baseConfig, {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '../src'),
    devServer: {
        hot: true,
        compress: true,
        inline: true,
        contentBase: path.resolve(__dirname, '../dist'),
        publicPath: ''
    }
});

devConfig.module.rules.push({
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader'
    ]
}, {
    test: /\.scss$/,
    use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
    ]
}, {
    test: /\.less$/,
    use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
    ]
})

Object.keys(entryConfig.html).forEach(v => {
    var htmlPath = entryConfig.html[v];
    devConfig.plugins.push(
        new HtmlWebpackPlugin({
            filename: v + '.html',
            template: htmlPath,
            chunks: [v, 'common']
        })
    )
})

devConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
    // new OpenBrowserPlugin({
    //     url: 'http://localhost:9000'
    // })
)

// modify some webpack config options
Object.keys(devConfig.entry).forEach(function (ety) {
    devConfig.entry[ety].unshift(
        'webpack-dev-server/client?http://localhost:9000/',
        'webpack/hot/dev-server'
    )
})

module.exports = devConfig;
