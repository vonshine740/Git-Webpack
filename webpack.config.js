const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConf = {
    entry: {
        entry: './src/index.js',
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
        // publicPath: __dirname + '/dist/'
    },
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.ts$/, use: 'ts-loader'}
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'inline',
            filename: 'inline.js',
            minChunks: Infinity
        }),
        new webpack.optimize.AggressiveSplittingPlugin({
            minSize: 5000,
            maxSize: 10000
        })
    ]
};
let targets = ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main'].map((target) => {
        let base = webpackMerge(baseConf, {
            target: target,
            output: {
                path: path.resolve(__dirname, 'dist/' + target),
                filename: '[name].' + target + '.js'
            }
        });
    return base;
});
module.exports = targets;