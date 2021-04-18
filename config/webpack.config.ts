import { resolve } from 'path';
import * as webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import { BUILD_PATH, SOURCE_PATH } from './constants';

process.traceDeprecation = true;



const BaseConfig: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'web',
    output: {
        path: BUILD_PATH,
        filename: 'index.js',
        publicPath: '/',
    },
    resolve: {

        alias: {
            '_styles': resolve(SOURCE_PATH, 'styles/'),
            svelte: resolve('node_modules', 'svelte'),
        },
        plugins: [ new TsconfigPathsPlugin() ],
        extensions: [
            '.ts', '.tsx', '.js', '.jsx',
        ],
    },
    performance: { hints: false },
    stats: {
        children: false,
        chunkModules: false,
        modules: false,
        hash: false,
        publicPath: true,
        performance: false,
    },
    module: { rules: rules },
    plugins: plugins(),
    optimization: {
        minimize: true,
        minimizer: [ new TerserPlugin() ],
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        },
    },
};

export default BaseConfig;