
import path from 'path';
import webpack from 'webpack';
import cssnano from 'cssnano';
import config from './index';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

    module: {

        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,

            query: {
                cacheDirectory: true,
                plugins: ['transform-decorators-legacy', 'transform-runtime'],
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {

            test: /\.scss$/,
            loaders: [
                'style',
                'css?-minimize&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
                'postcss',
                'sass?sourceMap'
            ]
        }, {
            test: /\.css$/,
            loaders: [
                'style',
                'css',
                'postcss'
            ]
        },

        {
            test: /\.woff(\?.*)?$/,
            loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.woff2(\?.*)?$/,
            loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
        },
        {
            test: /\.otf(\?.*)?$/,
            loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
        },
        {
            test: /\.ttf(\?.*)?$/,
            loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.eot(\?.*)?$/,
            loader: 'file?prefix=fonts/&name=[path][name].[ext]'
        },
        {
            test: /\.svg(\?.*)?$/,
            loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
        },
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'url?limit=8192&name=images/[name].[ext]&prefix=img/',
            exclude: ['/src/js/']
        }]
    },

    sassLoader: {
        includePaths: path.resolve(__dirname, '../src/sass')
    },

    postcss: [
        cssnano({
            autoprefixer: {
                add: true,
                remove: true,
                browsers: ['last 4 versions']
            },

            discardComments: {
                removeAll: true
            },

            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            sourceMap: true
        })
    ],

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },

    resolve: {
        root: [
            path.resolve(__dirname, '../src/js'),
            path.resolve(__dirname, '../src/assets/fonts/icomoon')
        ],
        extensions: ['', '.js', '.jsx']
    },

    plugins: [

        new webpack.DefinePlugin(config.globals),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            hash: false,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
};
