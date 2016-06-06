
import webpack from 'webpack';
import config from './index';
import path from 'path';
import baseConfig from './webpack.config.base';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {

    ...baseConfig,

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
        publicPath: '/'
    },

    plugins: [
        ...baseConfig.plugins,

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new CopyWebpackPlugin([
            {
                from: 'images/**/*',
                to: config.dist,
                context: path.join(config.client, 'assets')
            }
        ]),
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
