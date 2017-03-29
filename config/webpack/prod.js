var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseConfig = require('./base.js');
var prodConfig = Object.assign({}, baseConfig);

prodConfig.module.loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader!css-loader')
}, {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
    })
}, {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'less-loader']
    })
})

module.exports = prodConfig;
