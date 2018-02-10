var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var entryConfig = require('./webpack.entry.js');
var version = require('./version.js');

var __ENV__ = {
    __DEV__: process.env.NODE_ENV === 'development',
    __PROD__: process.env.NODE_ENV === 'production',
    __TEST__: process.env.NODE_ENV === 'test'
}

var config = {
    entry: entryConfig.js,
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].' + version + '.js',
        publicPath: '',
        chunkFilename: "[name].js",
    },
    module: {
        rules: [{
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
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json']
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.' + version + '.js',
            minChunks: 3
        })
    ]
}

module.exports = config;
