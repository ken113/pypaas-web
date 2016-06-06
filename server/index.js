
import Koa from 'Koa';
import convert from 'koa-convert';
import config from '../config';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../config/webpack.config.dev';
import api from './api';
import proxy from './middleware/proxy';
import serve from 'koa-static';
import historyApiFallback from 'koa-connect-history-api-fallback';
import webpackDevMiddleware from './middleware/webpack-dev';
import webpackHMRMiddleware from './middleware/webpack-hmr';
import _debug from 'debug';

const debug = _debug('app:server');
const app = new Koa();
const compiler = webpack(webpackConfig);

debug('Creating app server.');

/**
 * Rewrite all routes requests to the root /index.html file(ignore file requests).
 * If you want to implement isomorphic rendering, you'll want to remove this middleware.
 * */
app.use(convert(historyApiFallback({
    index: '/index.html',

    rewrites: [
        {
            from: !/^api\/.*/,
            to: 'index.html'
        }
    ]
})));

if (config.env === 'development') {
    app.use(webpackDevMiddleware(compiler, webpackConfig.output.publicPath || '/'));
    app.use(webpackHMRMiddleware(compiler));
    app.use(convert(serve(config.assets)));

    if (config.enableProxy && config.proxy) {
        app.use(proxy(config.proxy));
    } else {
        app.use(api());
    }

} else {
    app.use(convert(serve(config.dist)));
}

app.listen(config.server.port);

debug(`Server is running. Open http://${config.server.host}:${config.server.port} in a browser to view the app.`);
