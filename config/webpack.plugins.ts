import { resolve } from 'path';
import { WebpackPluginInstance } from 'webpack';
import BundleAnalyzer from 'webpack-bundle-analyzer/';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

import {
    PUBLIC_PATH, IS_ANALYZE, BUILD_PATH,
} from './constants';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export const plugins = (): WebpackPluginInstance[] => {
    // Base Plugins
    const plugins = [
        new ESLintPlugin({
            emitError: true,
            extensions: [
                'ts', 'tsx', 'js', 'jsx'
            ]
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new SpriteLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(PUBLIC_PATH, 'index.html'),
            favicon: resolve(PUBLIC_PATH, 'favicon.ico')
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: PUBLIC_PATH,
                    to: BUILD_PATH,
                    globOptions: { ignore: [ '*.html', '.*ico' ] }
                }
            ]
        })
    ];
    if (IS_ANALYZE){
        plugins.push( new BundleAnalyzer.BundleAnalyzerPlugin() );
    }
    return plugins;
};
