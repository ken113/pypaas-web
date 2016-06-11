
import webpack from 'webpack';
import path from 'path';
import config from './index';
import baseConfig from './webpack.config.base';

export default {

    ...baseConfig,

    debug: true,

    devtool: 'cheap-module-eval-source-map',

    output: {
        ...baseConfig.output,
        publicPath: '/'
    },

    entry: {

        main: [
            'babel-polyfill',
            path.join(config.client, 'main.js'),
            'webpack-hot-middleware/client?path=/__webpack_hmr', 
        ],

        vendor: [
            'react',
            'react-router',
            'react-redux',
            'redux'
        ]
    },

    plugins: [
        ...baseConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true
            }
        })
    ]
};
