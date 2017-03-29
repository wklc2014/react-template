var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var projectConfig = require('../project.js');
var __ENV__ = require('../env.js');
var entryConfig = require('./entry.js');

var config = {
    entry: entryConfig.js,
    output: {
        path: path.resolve(__dirname, '../../dist/'),
        filename: '[name].[hash].js',
        publicPath: '',
        chunkFilename: "[name].[hash].js",
    },
    module: {
        loaders: [{
            test: /\.js|.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }, {
            test: /\.(eot|ttf|woff|woff2|svg)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin(__ENV__),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['> 0.01%']
                    })
                ]
            }
        }),
    ]
}

if (projectConfig.useJqueryAsGlobal) {
    config.module.loaders.push({
        test: require.resolve('jquery'),
        loader: 'expose-loader?$!expose-loader?jQuery'
    })
    config.plugins.push(
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    )


}

module.exports = config;
