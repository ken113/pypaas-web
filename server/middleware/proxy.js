
import _debug from 'debug';
import request from 'co-request';

const debug = _debug('app:server:proxy');

export default function(options) {

    debug('Enable proxy middleware.');

    return async function proxy(ctx, next) {

        const requestOptions = {
            url: options.target + ctx.url,
            method: ctx.method,
            headers: ctx.headers,
            qs: ctx.query,
        };

        if (['POST', 'PUT'].indexOf(requestOptions.method) > -1) {

            if (ctx.request.body) {
                requestOptions.body = ctx.request.body;
            } else {
                debug('Sending PUT or POST without request body');
            }

            if (ctx.request.type === 'application/json') {
                requestOptions.json = true;
            }
        }

        debug(`Proxying '${ctx.url}' => '${requestOptions.url}'`);

        var response = await request(requestOptions);

        Object.keys(response.headers).forEach(h => {
            ctx.set(h, response.headers[h]);
        });

        ctx.status = response.statusCode;
        ctx.body = response.body;
    };
}
