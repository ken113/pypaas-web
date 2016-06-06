
import path from 'path';
import debug from 'debug';
import ip from 'ip';

const env = process.env.NODE_ENV || 'development';
const config = {

    env,

    server: {
        port: process.env.PORT || 3000,
        host: 'localhost'
    },

    client: path.resolve(__dirname, '../src'),
    assets: path.resolve(__dirname, '../src/assets'),
    dist: path.resolve(__dirname, '../dist'),

    /** Bebug namespace */
    namespace: 'app:*',

    globals: {
        '__DEV': env === 'development',
        '__PROD__': env === 'production',
        '__DEBUG__': env === 'development'
    },

    enableProxy: false,
    proxy: {
        target: 'http://www.pengyun.gov.cn/PengyunPlusNew/center_ajax',
        pattern: '^\/api\/\.*$'
    }
};

debug.enable(config.namespace);
debug('app:configuration')('Created configuration success.');

export default config;
