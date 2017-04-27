var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var entryConfig = require('./webpack.entry.js');

var __ENV__ = {
    __DEV__: process.env.NODE_ENV === 'development',
    __PROD__: process.env.NODE_ENV === 'production',
    __TEST__: process.env.NODE_ENV === 'test'
}

var config = {
    entry: entryConfig.js,
    output: {
        path: path.resolve(__dirname, '../dist/'),
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

module.exports = config;
