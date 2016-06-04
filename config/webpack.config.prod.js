
import webpack from 'webpack';
import path from 'path';
import baseConfig from './webpack.config.base';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {

    ...baseConfig,

    devtool: 'source-map',

    entry: {

        main: path.resolve(__dirname, '../src/main.js'),

        vendor: [
            'react',
            'react-router',
            'react-redux',
            'redux'
        ]
    },

    output: {

        ...baseConfig.output,
        publicPath: path.resolve(__dirname, '../dist/'),
    },

    plugins: [
        ...baseConfig.plugins,

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new ExtractTextPlugin('[name].[contenthash].css', {
            allChunks: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true
            }
        })
    ]
};
