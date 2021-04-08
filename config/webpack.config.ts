import { resolve } from 'path';
import * as webpack from 'webpack';
// @ts-ignore
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
// @ts-ignore
import TerserPlugin from 'terser-webpack-plugin';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

process.traceDeprecation = true;

export const PROJ_NAME = 'js-site';
export const BUILD_PATH = resolve(__dirname, '../dist');
export const SOURCE_PATH = resolve(__dirname, '../src/');
export const PUBLIC_PATH = resolve(__dirname, '../public/');
export const ASSETS_PATH = './assets';
export const IS_ANALYZE_ENABLED = process.argv.some(arg => arg.includes('-analyze'));

const BaseConfig: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.ts',
    target: 'web',
    output: {
        path: BUILD_PATH,
        filename: 'index.js',
        publicPath: '/',
    },
    resolve: {
        alias: { '_styles': resolve(SOURCE_PATH, 'styles/') },
        plugins: [ new TsconfigPathsPlugin() ],
        extensions: [
            '.ts', '.tsx', '.js', '.jsx'
        ]
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
        minimize: false,
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