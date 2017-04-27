var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var baseConfig = require('./webpack.base.config.js');
var entryConfig = require('./webpack.entry.js');

var devConfig = Object.assign({}, baseConfig, {
    devtool: 'eval-source-map'
});

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
            filename: v + '.html',
            template: htmlPath,
            favicon: path.resolve(__dirname, '../src/asset/img/favicon.ico'),
            chunks: [v]
        })
    )
})

devConfig.plugins.push(
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('../dist/vendor.manifest.json')
    }),
    new HtmlWebpackIncludeAssetsPlugin({
        assets: ['vendor.dll.js'],
        append: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
        url: 'http://localhost:9000'
    })
)

module.exports = devConfig;
